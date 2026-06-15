import { motion } from 'framer-motion';
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
  const isAr = language === 'ar';
  const reverse = index % 2 === 1;
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigate } = useLightbox();

  const allImages = [brand.hero, ...brand.gallery];
  const lightboxImages = allImages.map((src) => ({
    src,
    title: isAr ? brand.nameAr : brand.nameEn,
  }));

  const thumbs = brand.gallery.slice(0, 3);
  const extraCount = Math.max(0, allImages.length - 4);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div
        className={`absolute top-10 ${reverse ? 'right-4' : 'left-4'} text-[160px] md:text-[240px] font-bold text-primary/[0.035] leading-none pointer-events-none select-none`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-5 flex flex-col ${reverse ? 'lg:order-2' : ''}`}
          >
            <header className="relative pb-8">
              <div className="flex items-center gap-4 text-gold font-semibold tracking-[0.28em] text-[11px] uppercase mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="leading-relaxed">{isAr ? brand.originAr : brand.originEn}</span>
              </div>

              <h2
                className="text-5xl md:text-6xl xl:text-7xl text-primary leading-[0.98]"
                style={{ fontFamily: isAr ? "'Amiri', serif" : "'Playfair Display', serif" }}
              >
                {isAr ? brand.nameAr : brand.nameEn}
              </h2>

              <div className="flex justify-between items-center pt-4">
                <p
                  className="text-primary/60 text-xl md:text-2xl"
                  style={{ fontFamily: isAr ? "'Playfair Display', serif" : "'Amiri', serif" }}
                  dir={isAr ? 'ltr' : 'rtl'}
                >
                  {isAr ? brand.nameEn : brand.nameAr}
                </p>
                <span className="h-px flex-1 mx-4 bg-primary/10" />
              </div>

              <p
                className="mt-8 text-primary/78 italic text-lg md:text-xl leading-relaxed pl-6 border-l-2 border-gold rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                “{isAr ? brand.taglineAr : brand.taglineEn}”
              </p>
            </header>

            <div className="relative bg-background border border-primary/10 shadow-[0_22px_60px_-42px_hsl(var(--primary))]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gold/70" />
              <div className="p-6 md:p-8">
                <div className="flex justify-between gap-4 items-start border-b border-primary/15 pb-5 mb-5">
                  <div>
                    <p className="text-gold text-[10px] font-bold uppercase tracking-[0.28em] mb-2">
                      {isAr ? 'دفتر الأسطول' : 'Fleet Ledger'}
                    </p>
                    <h3 className="font-semibold uppercase tracking-[0.2em] text-sm text-primary">
                      {isAr ? 'الطرازات في الأسطول' : 'Models in Fleet'}
                    </h3>
                  </div>
                  <span className="text-primary/45 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap pt-1">
                    {isAr ? '٢٠٢٤' : '2024'}
                  </span>
                </div>

                <ul className="divide-y divide-primary/10">
                  {brand.models.map((m, i) => (
                    <motion.li
                      key={m.name + i}
                      initial={{ opacity: 0, x: isAr ? 16 : -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                      className="group flex items-end gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="min-w-0 text-primary font-semibold text-base md:text-lg leading-snug">
                        {m.name}
                      </span>
                      <span className="flex-1 min-w-8 border-b border-dotted border-primary/25 mb-1.5 transition-colors group-hover:border-gold/70" />
                      <span
                        className="text-gold italic text-lg md:text-xl whitespace-nowrap tabular-nums"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {m.years}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-7 space-y-5 ${reverse ? 'lg:order-1' : ''}`}
          >
            <div className="relative group">
              <div className="absolute -inset-3 border border-gold/30 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              <div className="absolute -inset-1 bg-background border border-primary/10 pointer-events-none" />
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative block w-full aspect-[16/10] md:aspect-[4/3] overflow-hidden bg-secondary cursor-pointer"
                aria-label={isAr ? `افتح صورة ${brand.nameAr}` : `Open ${brand.nameEn} image`}
              >
                <img
                  src={brand.hero}
                  alt={isAr ? brand.nameAr : brand.nameEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/10" />
              </button>

              <div className="absolute top-0 right-0 bg-background px-5 py-4 flex flex-col items-center justify-center border-b border-l border-primary/10 shadow-lg shadow-primary/5">
                <span
                  className="text-primary italic text-4xl leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100+
                </span>
                <span className="text-primary/55 text-[10px] uppercase tracking-widest mt-1 whitespace-nowrap">
                  {isAr ? 'وحدة جاهزة' : 'Units Ready'}
                </span>
              </div>

              <div
                className={`absolute bottom-4 ${reverse ? 'right-4' : 'left-4'} hidden md:block text-background/80 mix-blend-soft-light text-[88px] leading-none pointer-events-none`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {thumbs.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(i + 1)}
                  className="relative aspect-[4/5] overflow-hidden border border-primary/10 bg-secondary group"
                  aria-label={isAr ? `افتح صورة ${i + 2}` : `Open gallery image ${i + 2}`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
                </button>
              ))}

              <button
                type="button"
                onClick={() => openLightbox(Math.min(4, allImages.length - 1))}
                className="relative aspect-[4/5] bg-primary flex items-center justify-center overflow-hidden group cursor-pointer border border-primary"
                aria-label={isAr ? 'افتح المعرض' : 'Open gallery'}
              >
                {brand.gallery[3] && (
                  <img
                    src={brand.gallery[3]}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity"
                  />
                )}
                <div className="relative z-10 text-center px-2">
                  <span
                    className="block text-gold italic text-3xl leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {extraCount > 0 ? `+${extraCount}` : 'View'}
                  </span>
                  <span className="block text-background text-[10px] uppercase tracking-widest mt-1">
                    {isAr ? 'المعرض' : 'Gallery'}
                  </span>
                </div>
              </button>
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
                  {isAr ? 'الطرازات في الأسطول' : 'Models in Fleet'}
                </h3>
                <span className="text-gold text-[10px] font-bold uppercase tracking-widest">
                  {isAr ? 'الأسطول ٢٠٢٤' : 'Inventory · 2024'}
                </span>
              </div>

              <ul className="space-y-5">
                {brand.models.map((m, i) => (
                  <motion.li
                    key={m.name + i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-end gap-2"
                  >
                    <span className="text-primary font-semibold text-base md:text-lg whitespace-nowrap">
                      {m.name}
                    </span>
                    <span className="flex-1 border-b border-dotted border-primary/30 mb-1.5" />
                    <span
                      className="text-gold italic text-lg md:text-xl whitespace-nowrap"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {m.years}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* VISUAL COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-7 space-y-6 ${reverse ? 'lg:order-1' : ''}`}
          >
            {/* Hero frame */}
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/30 translate-x-2 translate-y-2 pointer-events-none transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0" />
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="relative block w-full aspect-[4/3] overflow-hidden bg-neutral-200 cursor-pointer"
              >
                <img
                  src={brand.hero}
                  alt={isAr ? brand.nameAr : brand.nameEn}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </button>

              <div className="absolute top-0 right-0 bg-background px-5 py-3 flex flex-col items-center justify-center border-b border-l border-primary/10">
                <span
                  className="text-primary italic text-3xl leading-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  100+
                </span>
                <span className="text-primary/60 text-[10px] uppercase tracking-widest mt-1">
                  {isAr ? 'وحدة جاهزة' : 'Units Ready'}
                </span>
              </div>
            </div>

            {/* Thumb strip */}
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {thumbs.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openLightbox(i + 1)}
                  className="relative aspect-[4/5] overflow-hidden border border-primary/10 group"
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
                </button>
              ))}

              {/* +N gallery tile */}
              <button
                type="button"
                onClick={() => openLightbox(Math.min(4, allImages.length - 1))}
                className="relative aspect-[4/5] bg-primary flex items-center justify-center overflow-hidden group cursor-pointer"
              >
                {brand.gallery[3] && (
                  <img
                    src={brand.gallery[3]}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity"
                  />
                )}
                <div className="relative z-10 text-center px-2">
                  <span
                    className="block text-gold italic text-3xl leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {extraCount > 0 ? `+${extraCount}` : 'View'}
                  </span>
                  <span className="block text-background text-[10px] uppercase tracking-widest mt-1">
                    {isAr ? 'المعرض' : 'Gallery'}
                  </span>
                </div>
              </button>
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
