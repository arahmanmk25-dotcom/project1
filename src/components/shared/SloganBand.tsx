import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface SloganBandProps {
  eyebrowEn?: string;
  eyebrowAr?: string;
  sloganEn: string;
  sloganAr: string;
}

const SloganBand = ({ eyebrowEn, eyebrowAr, sloganEn, sloganAr }: SloganBandProps) => {
  const { language } = useLanguage();
  return (
    <section className="py-24 md:py-32 bg-[#fbfaf6]">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-4xl mx-auto text-center">
            {(eyebrowEn || eyebrowAr) && (
              <p className="text-gold font-semibold tracking-[0.4em] uppercase text-[11px] mb-6">
                {language === 'ar' ? eyebrowAr : eyebrowEn}
              </p>
            )}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-gold/60" />
              <span className="text-gold text-xs">✦</span>
              <div className="h-px w-12 bg-gold/60" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.15] whitespace-pre-line"
              style={{ fontFamily: language === 'ar' ? "'Amiri', serif" : "'Playfair Display', serif" }}
            >
              {language === 'ar' ? sloganAr : sloganEn}
            </h2>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SloganBand;
