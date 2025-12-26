import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: { src: string; title?: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({ images, isOpen, currentIndex, onClose, onNavigate }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Navigation - Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
          }}
          className="absolute left-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {/* Image container */}
      <div 
        className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.title || 'Image'}
          className="max-w-full max-h-[85vh] object-contain rounded-lg"
        />
        {currentImage.title && (
          <p className="mt-4 text-white text-lg font-medium text-center">
            {currentImage.title}
          </p>
        )}
        <p className="mt-2 text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      {/* Navigation - Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
          }}
          className="absolute right-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>
      )}
    </div>
  );
};

// Hook to manage lightbox state
export const useLightbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const navigate = (index: number) => setCurrentIndex(index);

  return { isOpen, currentIndex, openLightbox, closeLightbox, navigate };
};
