import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/shared/ScrollReveal';

import heroImage from '@/assets/trucks/truck-5.jpeg';
import truck13 from '@/assets/trucks/truck-13.jpeg';
import truck12 from '@/assets/trucks/truck-12.jpeg';
import truck9 from '@/assets/trucks/truck-9.jpeg';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  num: string;
}

const ServicesCards = () => {
  const { t, language } = useLanguage();

  const services: ServiceItem[] = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description'), image: heroImage, num: '01' },
    { icon: Shield, title: t('services.petroleum.title'), desc: t('services.petroleum.description'), image: truck13, num: '02' },
    { icon: Clock, title: t('services.crane.title'), desc: t('services.crane.description'), image: truck12, num: '03' },
    { icon: Users, title: t('services.logistics.title'), desc: t('services.logistics.description'), image: truck9, num: '04' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-5xl mx-auto mb-16">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              {language === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">{t('services.title')}</h2>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto space-y-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-border shadow-lg group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Image side */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[250px] lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/5" />
                      {/* Number overlay */}
                      <span className="absolute top-4 left-4 text-6xl md:text-7xl font-bold text-white/15 select-none">
                        {service.num}
                      </span>
                    </div>

                    {/* Content side */}
                    <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-card">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-gold font-bold text-lg">{service.num}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">{service.desc}</p>
                      <Link to="/services">
                        <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
