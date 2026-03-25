import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';
import { useLanguage } from '@/contexts/LanguageContext';
import HoverTruckAnimation from '@/components/shared/HoverTruckAnimation';

interface FleetItem {
  src: string;
  nameEn: string;
  nameAr: string;
  model: string;
  year: string;
  category?: string;
}

interface FleetGalleryProps {
  items: FleetItem[];
  categories: { key: string; labelEn: string; labelAr: string }[];
}

const FleetGallery = ({ items, categories }: FleetGalleryProps) => {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigate } = useLightbox();

  const filtered = useMemo(
    () => activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory),
    [items, activeCategory]
  );

  const lightboxImages = filtered.map((item) => ({
    src: item.src,
    title: `${language === 'ar' ? item.nameAr : item.nameEn} - ${item.model} (${item.year})`,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { key: 'all', labelEn: 'All', labelAr: 'الكل' },
            ...categories,
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {language === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.nameEn}-${item.model}-${item.year}`}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer hover-lift"
                onClick={() => openLightbox(i)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={language === 'ar' ? item.nameAr : item.nameEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex flex-col justify-end p-5">
                  <HoverTruckAnimation />
                  <h3 className="text-lg font-bold text-white mb-1 relative z-20">
                    {language === 'ar' ? item.nameAr : item.nameEn}
                  </h3>
                  <div className="flex justify-between text-sm text-white/80 relative z-20">
                    <span>{item.model}</span>
                    <span>{item.year}</span>
                  </div>
                </div>

                {/* Default label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-sm">
                    {language === 'ar' ? item.nameAr : item.nameEn}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        images={lightboxImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </section>
  );
};

export default FleetGallery;
