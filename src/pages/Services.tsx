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

            {/* Services - Luxury index list */}
            <div className="max-w-5xl mx-auto">
              {/* Top hairline */}
              <div className="h-px w-full bg-primary/15" />

              {services.map((service, index) => (
                <ScrollReveal key={index} variant="fadeUp">
                  <div id={service.id} className="scroll-mt-24" />
                  <article className="group relative border-b border-primary/15 transition-colors duration-500 hover:border-gold">
                    <div className="grid grid-cols-12 gap-4 md:gap-8 items-center py-10 md:py-14 px-2 md:px-4 relative">
                      {/* Index numeral */}
                      <div className="col-span-2 md:col-span-1">
                        <span className="font-phone text-2xl md:text-3xl text-gold/70 group-hover:text-gold transition-colors duration-500">
                          {service.num}
                        </span>
                      </div>

                      {/* Title + eyebrow */}
                      <div className="col-span-10 md:col-span-6">
                        <p className="text-gold/80 font-semibold tracking-[0.35em] uppercase text-[10px] mb-2 md:mb-3">
                          {language === 'ar' ? 'خدمة مميزة' : 'SIGNATURE SERVICE'}
                        </p>
                        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.1] group-hover:translate-x-2 transition-transform duration-500 ease-out">
                          {service.title}
                        </h3>
                      </div>

                      {/* Thumbnail */}
                      <div className="hidden md:block col-span-3">
                        <div className="relative overflow-hidden rounded-sm aspect-[4/3] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 ease-out">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 ring-1 ring-inset ring-gold/40" />
                        </div>
                      </div>

                      {/* Arrow / icon */}
                      <div className="col-span-12 md:col-span-2 flex md:justify-end">
                        <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500">
                          <ArrowRight className={`h-4 w-4 text-primary/60 group-hover:text-white transition-colors duration-500 ${language === 'ar' ? 'rotate-180' : ''}`} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    {/* Expanding description */}
                    <div className="grid grid-cols-12 gap-4 md:gap-8 px-2 md:px-4 overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-700 ease-out">
                      <div className="col-span-12 md:col-start-2 md:col-span-9 pb-10">
                        <p className="text-base md:text-lg text-muted-foreground leading-[1.9] font-light">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
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
