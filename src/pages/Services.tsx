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

        {/* Services - Editorial bento grid */}
        <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
          {/* Decorative gold rule */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          <div className="container mx-auto px-4 relative">
            {/* Section eyebrow */}
            <ScrollReveal variant="fadeUp">
              <div className="flex items-center gap-4 mb-16 max-w-6xl mx-auto">
                <div className="h-px flex-1 bg-primary/20" />
                <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs">
                  {language === 'ar' ? '— أربع خدمات رئيسية —' : '— FOUR CORE SERVICES —'}
                </p>
                <div className="h-px flex-1 bg-primary/20" />
              </div>
            </ScrollReveal>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => {
                // Vary card heights for editorial rhythm
                const tall = index === 0 || index === 3;
                return (
                  <ScrollReveal key={index} variant="fadeUp">
                    <div id={service.id} className="scroll-mt-24" />
                    <article
                      className={`group relative overflow-hidden rounded-3xl bg-primary cursor-pointer
                        ${tall ? 'aspect-[4/5]' : 'aspect-[4/5] md:aspect-[5/6]'}
                        ${index === 1 ? 'md:translate-y-12' : ''}
                        ${index === 2 ? 'md:-translate-y-12' : ''}
                      `}
                    >
                      {/* Image layer */}
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                      />

                      {/* Dark gradient mask */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />

                      {/* Gold corner accent */}
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
                        <div className="absolute top-0 right-0 w-px h-16 bg-gold/60" />
                        <div className="absolute top-0 right-0 h-px w-16 bg-gold/60" />
                      </div>

                      {/* Oversized numeral */}
                      <span
                        className="font-phone absolute -top-6 -left-2 text-[12rem] leading-none font-bold text-gold/15 group-hover:text-gold/30 transition-colors duration-700 select-none pointer-events-none"
                      >
                        {service.num}
                      </span>

                      {/* Top eyebrow */}
                      <div className="absolute top-8 right-8 flex items-center gap-2 z-10">
                        <p className="text-gold/80 font-semibold tracking-[0.25em] uppercase text-[10px]">
                          {language === 'ar' ? `الخدمة ${service.num}` : `SERVICE ${service.num}`}
                        </p>
                        <div className="h-px w-8 bg-gold/60" />
                      </div>

                      {/* Icon badge */}
                      <div className="absolute top-8 left-8 z-10">
                        <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center backdrop-blur-sm bg-primary/30 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-500">
                          <service.icon className="h-6 w-6 text-gold" />
                        </div>
                      </div>

                      {/* Content - bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-10">
                        <div className="h-px w-12 bg-gold mb-5 group-hover:w-24 transition-all duration-500" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                          {service.title}
                        </h2>
                        <p className="text-white/70 leading-relaxed text-sm lg:text-base line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                          {service.desc}
                        </p>
                        <div className="flex items-center gap-2 mt-5 text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                          <span className="text-xs font-semibold tracking-widest uppercase">
                            {language === 'ar' ? 'اعرف المزيد' : 'EXPLORE'}
                          </span>
                          <ArrowRight className={`h-4 w-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Decorative gold rule */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
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
