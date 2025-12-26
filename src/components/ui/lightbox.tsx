import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LightboxProps {
  images: { src: string; title?: string }[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox = ({ images, isOpen, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  const minZoom = 1;
  const maxZoom = 4;
  const zoomStep = 0.5;

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoom(prev => Math.min(prev + zoomStep, maxZoom));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newZoom = Math.max(zoom - zoomStep, minZoom);
    setZoom(newZoom);
    if (newZoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    resetZoom();
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoom === 1) {
      // Zoom in to 2x at click position
      const rect = imageRef.current?.getBoundingClientRect();
      if (rect) {
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;
        setPosition({ x: -clickX * 0.5, y: -clickY * 0.5 });
      }
      setZoom(2);
    } else {
      resetZoom();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -zoomStep : zoomStep;
    const newZoom = Math.max(minZoom, Math.min(zoom + delta, maxZoom));
    setZoom(newZoom);
    if (newZoom === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && zoom === 1) onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      if (e.key === 'ArrowRight' && zoom === 1) onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      if (e.key === '+' || e.key === '=') setZoom(prev => Math.min(prev + zoomStep, maxZoom));
      if (e.key === '-') {
        const newZoom = Math.max(zoom - zoomStep, minZoom);
        setZoom(newZoom);
        if (newZoom === 1) setPosition({ x: 0, y: 0 });
      }
      if (e.key === '0') resetZoom();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate, zoom]);

  // Reset zoom when navigating to a new image
  useEffect(() => {
    resetZoom();
  }, [currentIndex]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in"
      onClick={zoom === 1 ? onClose : undefined}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Controls bar */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-black/50 rounded-full px-4 py-2">
        <button
          onClick={handleZoomOut}
          disabled={zoom <= minZoom}
          className="p-2 text-white/80 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Zoom out"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-white/80 text-sm min-w-[50px] text-center">{Math.round(zoom * 100)}%</span>
        <button
          onClick={handleZoomIn}
          disabled={zoom >= maxZoom}
          className="p-2 text-white/80 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          aria-label="Zoom in"
        >
          <ZoomIn size={20} />
        </button>
        <div className="w-px h-5 bg-white/30 mx-1" />
        <button
          onClick={handleReset}
          className="p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Reset zoom"
        >
          <RotateCcw size={20} />
        </button>
      </div>

      {/* Close button */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={32} />
      </button>

      {/* Navigation - Previous */}
      {images.length > 1 && zoom === 1 && (
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
        className="max-w-[90vw] max-h-[90vh] flex flex-col items-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onWheel={handleWheel}
      >
        <div 
          className={`relative ${zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-zoom-in'}`}
          onMouseDown={handleMouseDown}
        >
          <img
            ref={imageRef}
            src={currentImage.src}
            alt={currentImage.title || 'Image'}
            onClick={handleImageClick}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg select-none"
            style={{
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
            draggable={false}
          />
        </div>
        {currentImage.title && zoom === 1 && (
          <p className="mt-4 text-white text-lg font-medium text-center">
            {currentImage.title}
          </p>
        )}
        <p className="mt-2 text-white/60 text-sm">
          {currentIndex + 1} / {images.length} {zoom > 1 && '• Click image or press 0 to reset zoom'}
        </p>
      </div>

      {/* Navigation - Next */}
      {images.length > 1 && zoom === 1 && (
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
