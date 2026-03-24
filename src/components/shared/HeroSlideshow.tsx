import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
}

const HeroSlideshow = ({ images, interval = 10000 }: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ opacity: idx === currentIndex ? 1 : 0, scale: idx === currentIndex ? 1 : 1.05 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      ))}
    </>
  );
};

export default HeroSlideshow;
