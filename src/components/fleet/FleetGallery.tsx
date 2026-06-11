import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';
import { useLanguage } from '@/contexts/LanguageContext';


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
    () => (activeCategory === 'all' ? items : items.filter((item) => item.category === activeCategory)),
    [items, activeCategory]
  );

  const lightboxImages = filtered.map((item) => ({
    src: item.src,
    title: `${language === 'ar' ? item.nameAr : item.nameEn} - ${item.model} (${item.year})`,
  }));

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {[
            { key: 'all', labelEn: 'All', labelAr: 'الكل' },
            ...categories,
          ].map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              aria-pressed={activeCategory === cat.key}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {language === 'ar' ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        <div key={activeCategory} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.nameEn}-${item.model}-${item.year}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.04 }}
              className="lux-card group cursor-pointer !p-3"
              onClick={() => openLightbox(i)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={language === 'ar' ? item.nameAr : item.nameEn}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="pt-4 pb-1 px-2 text-center">
                <span className="lux-fleuron block mb-1">— ❦ —</span>
                <h3 className="font-serif-display text-base md:text-lg font-bold text-primary leading-tight" style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}>
                  {language === 'ar' ? item.nameAr : item.nameEn}
                </h3>
                <div className="mt-2 flex items-center justify-center gap-3 text-[11px] tracking-[0.25em] uppercase text-gold">
                  <span>{item.model}</span>
                  <span className="h-3 w-px bg-gold/50" />
                  <span>{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
