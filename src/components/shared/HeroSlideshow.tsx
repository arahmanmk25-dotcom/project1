import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
  showTrucks?: boolean;
}

const HeroSlideshow = ({ images, interval = 10000, showTrucks = true }: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          animate={{ opacity: idx === currentIndex ? 1 : 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      {showTrucks && <FloatingTrucksBackground truckCount={10} particleCount={12} />}
    </div>
  );
};

export default HeroSlideshow;
