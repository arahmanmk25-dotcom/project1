import { useEffect } from 'react';
import { Truck, Cylinder, Construction, Package, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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

            {/* Services - lux cards (match site style) */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                    <div id={service.id} className="scroll-mt-24" />
                    <Link to={`/contact?service=${service.id}`}>
                      <div className="lux-card group cursor-pointer !p-3 h-full">
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />
                          <span className="absolute top-3 right-4 font-serif-display text-5xl text-gold/80 italic select-none drop-shadow">
                            {service.num}
                          </span>
                          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 bg-card/90 px-3 py-1.5 border border-gold/40">
                            <Icon className="h-4 w-4 text-gold" />
                            <span className="font-stencil text-[10px] tracking-[0.25em] uppercase text-primary">
                              {language === 'ar' ? 'خدمة' : 'Service'}
                            </span>
                          </div>
                        </div>

                        <div className="pt-5 pb-3 px-3 text-center">
                          <span className="lux-fleuron block mb-1">— ❦ —</span>
                          <h3
                            className="font-serif-display text-xl md:text-2xl font-bold text-primary leading-tight"
                            style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                          >
                            {service.title}
                          </h3>
                          <p
                            className="mt-3 text-sm text-muted-foreground leading-relaxed italic"
                            style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                          >
                            {service.desc}
                          </p>
                          <div className="mt-4 flex items-center justify-center gap-1.5 text-gold font-semibold text-xs tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 transition">
                            {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                            <ArrowRight className={`h-3.5 w-3.5 ${language === 'ar' ? 'rotate-180' : ''}`} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, hsl(var(--gold)) 0 1px, transparent 1px 14px)',
            }}
          />
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
