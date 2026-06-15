import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';

export interface BrandModel {
  name: string;
  years: string;
}

export interface Brand {
  key: string;
  nameEn: string;
  nameAr: string;
  originEn: string;
  originAr: string;
  taglineEn: string;
  taglineAr: string;
  hero: string;
  gallery: string[];
  models: BrandModel[];
}

interface Props {
  brand: Brand;
  index: number;
}

const FleetBrandShowcase = ({ brand, index }: Props) => {
  const { language } = useLanguage();
  const reverse = index % 2 === 1;
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigate } = useLightbox();

  const allImages = [brand.hero, ...brand.gallery];
  const lightboxImages = allImages.map((src) => ({
    src,
    title: language === 'ar' ? brand.nameAr : brand.nameEn,
  }));

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Brand index watermark */}
      <div
        className={`absolute top-8 ${reverse ? 'left-4' : 'right-4'} text-[180px] md:text-[240px] font-bold text-primary/[0.03] leading-none pointer-events-none select-none`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        0{index + 1}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}
          >
            <div
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group rounded-sm"
              onClick={() => openLightbox(0)}
            >
              <img
                src={brand.hero}
                alt={language === 'ar' ? brand.nameAr : brand.nameEn}
                className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              {/* Frame */}
              <div className="absolute inset-3 border border-gold/30 pointer-events-none" />
            </div>

            {/* Gallery strip */}
            <div className="mt-4 grid grid-cols-4 gap-3">
              {brand.gallery.slice(0, 4).map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(i + 1)}
                  className="relative aspect-square overflow-hidden group rounded-sm"
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
                {language === 'ar' ? `العلامة ${String(index + 1).padStart(2, '0')}` : `Brand ${String(index + 1).padStart(2, '0')}`}
              </span>
              <span className="h-px flex-1 bg-gold/40" />
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-none mb-3"
              style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
            >
              {language === 'ar' ? brand.nameAr : brand.nameEn}
            </h2>

            <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-5">
              {language === 'ar' ? brand.originAr : brand.originEn}
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8 italic font-serif-display">
              "{language === 'ar' ? brand.taglineAr : brand.taglineEn}"
            </p>

            {/* Models list */}
            <div className="border-t border-gold/30 pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-gold mb-4 font-semibold">
                {language === 'ar' ? 'الطرازات في الأسطول' : 'Models in Fleet'}
              </p>
              <ul className="space-y-3">
                {brand.models.map((m, i) => (
                  <motion.li
                    key={m.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                    className="flex items-baseline justify-between gap-4 group"
                  >
                    <span className="font-semibold text-foreground tracking-wide group-hover:text-primary transition-colors">
                      {m.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-gold/30 translate-y-[-4px]" />
                    <span className="text-sm tracking-[0.15em] text-gold font-semibold whitespace-nowrap">
                      {m.years}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
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

export default FleetBrandShowcase;
