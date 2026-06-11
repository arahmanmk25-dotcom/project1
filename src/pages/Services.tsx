import { useEffect } from 'react';
import { Truck, Cylinder, Construction, Package, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import truck13 from '@/assets/trucks/truck-13.jpeg';
import truck12 from '@/assets/trucks/truck-12.jpeg';
import truck9 from '@/assets/trucks/truck-9.jpeg';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';


const Services = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [location.hash]);

  const services = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description'), image: truck5, num: '01', id: 'heavy-transport' },
    { icon: Cylinder, title: t('services.petroleum.title'), desc: t('services.petroleum.description'), image: truck13, num: '02', id: 'petroleum' },
    { icon: Construction, title: t('services.crane.title'), desc: t('services.crane.description'), image: truck12, num: '03', id: 'crane' },
    { icon: Package, title: t('services.logistics.title'), desc: t('services.logistics.description'), image: truck9, num: '04', id: 'logistics' },
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero - Full viewport editorial */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-16">
          <HeroSlideshow images={[truck13, truck5, truck12, truck9]} interval={8000} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                {language === 'ar' ? 'خدماتنا' : 'SERVICES'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {language === 'ar' ? 'حلول نقل متكاملة' : 'Complete Transport Solutions'}
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-2xl">
                {language === 'ar'
                  ? 'نقدم مجموعة شاملة من خدمات النقل الثقيل واللوجستيات لتلبية جميع احتياجاتكم'
                  : 'A comprehensive range of heavy transport and logistics services tailored to your needs'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Services - Luxury editorial showcase */}
        <section className="py-28 md:py-40 bg-[#fbfaf6] relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            {/* Section header - editorial */}
            <ScrollReveal variant="fadeUp">
              <div className="max-w-6xl mx-auto mb-24 md:mb-32 text-center">
                <p className="text-gold font-semibold tracking-[0.4em] uppercase text-[11px] mb-6">
                  {language === 'ar' ? 'الخدمات' : 'THE SERVICES'}
                </p>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-12 bg-gold/60" />
                  <span className="text-gold text-xs">✦</span>
                  <div className="h-px w-12 bg-gold/60" />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] max-w-3xl mx-auto">
                  {language === 'ar'
                    ? 'إتقان في كل حمولة، تميّز في كل رحلة'
                    : 'Mastery in every load. Distinction in every journey.'}
                </h2>
              </div>
            </ScrollReveal>

            {/* Services list - alternating hero panels */}
            <div className="max-w-6xl mx-auto space-y-28 md:space-y-40">
              {services.map((service, index) => {
                const reversed = index % 2 === 1;
                return (
                  <ScrollReveal key={index} variant="fadeUp">
                    <div id={service.id} className="scroll-mt-24" />
                    <article
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                        reversed ? 'lg:[direction:rtl]' : ''
                      }`}
                    >
                      {/* Image panel */}
                      <div className="lg:col-span-7 [direction:ltr]">
                        <div className="relative group">
                          {/* Gold frame offset */}
                          <div
                            className={`absolute -inset-4 lg:-inset-6 border border-gold/40 rounded-sm pointer-events-none transition-all duration-700 group-hover:border-gold/80 ${
                              reversed ? 'lg:-translate-x-4 lg:-translate-y-4' : 'lg:translate-x-4 lg:translate-y-4'
                            }`}
                          />
                          <div className="relative overflow-hidden rounded-sm aspect-[4/5] lg:aspect-[3/4]">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                            />
                            {/* Subtle vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                          </div>
                        </div>
                      </div>

                      {/* Content panel */}
                      <div className="lg:col-span-5 [direction:ltr] relative">
                        {/* Faint serif numeral */}
                        <div className="relative mb-8">
                          <span
                            className="font-phone block text-[8rem] lg:text-[10rem] leading-[0.85] font-normal text-gold/25 select-none"
                          >
                            {service.num}
                          </span>
                          <div className="absolute bottom-3 left-0 h-px w-20 bg-gold" />
                        </div>

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3 mb-5">
                          <service.icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                          <p className="text-gold font-semibold tracking-[0.35em] uppercase text-[10px]">
                            {language === 'ar' ? 'خدمة مميزة' : 'SIGNATURE SERVICE'}
                          </p>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-[1.1]">
                          {service.title}
                        </h3>

                        {/* Gold divider */}
                        <div className="flex items-center gap-3 mb-7">
                          <div className="h-px w-8 bg-gold" />
                          <span className="text-gold/70 text-[10px]">✦</span>
                          <div className="h-px w-16 bg-gold/40" />
                        </div>

                        {/* Description */}
                        <p className="text-base lg:text-lg text-muted-foreground leading-[1.9] font-light">
                          {service.desc}
                        </p>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <FloatingTrucksBackground truckCount={12} particleCount={15} />
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {language === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Need Our Services?'}
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
                {language === 'ar'
                  ? 'تواصل معنا اليوم للحصول على عرض سعر مخصص لاحتياجاتك'
                  : 'Contact us today for a customized quote tailored to your needs'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-bold px-10 py-6 text-lg group">
                  {t('nav.getQuote')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Spacer to separate from footer */}
        <section className="py-8 bg-secondary" />
      </div>
    </PageTransition>
  );
};

export default Services;
