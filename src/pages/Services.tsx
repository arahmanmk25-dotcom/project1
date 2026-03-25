import { Truck, Cylinder, Construction, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

  const services = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description'), image: truck5, num: '01' },
    { icon: Cylinder, title: t('services.petroleum.title'), desc: t('services.petroleum.description'), image: truck13, num: '02' },
    { icon: Construction, title: t('services.crane.title'), desc: t('services.crane.description'), image: truck12, num: '03' },
    { icon: Package, title: t('services.logistics.title'), desc: t('services.logistics.description'), image: truck9, num: '04' },
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero - Full viewport editorial */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-20">
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

        {/* Services - Alternating editorial blocks */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-32">
              {services.map((service, index) => (
                <ScrollReveal key={index} variant="fadeUp">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-20 items-center`}>
                    {/* Image */}
                    <div className="w-full lg:w-[55%]">
                      <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="w-full lg:w-[45%]">
                      <span className="text-9xl font-bold text-primary/10 leading-none block">
                        {service.num}
                      </span>
                      <div className="flex items-center gap-3 mb-4 mt-2">
                        <service.icon className="h-7 w-7 text-gold" />
                        <p className="text-gold font-semibold tracking-widest uppercase text-xs">
                          {language === 'ar' ? `الخدمة ${service.num}` : `SERVICE ${service.num}`}
                        </p>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{service.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>
                  </div>
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
