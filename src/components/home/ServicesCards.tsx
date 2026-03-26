import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeIndex, setActiveIndex] = useState(0);

  const services: ServiceItem[] = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description'), image: heroImage, num: '01' },
    { icon: Shield, title: t('services.petroleum.title'), desc: t('services.petroleum.description'), image: truck13, num: '02' },
    { icon: Clock, title: t('services.crane.title'), desc: t('services.crane.description'), image: truck12, num: '03' },
    { icon: Users, title: t('services.logistics.title'), desc: t('services.logistics.description'), image: truck9, num: '04' },
  ];

  const active = services[activeIndex];

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

        <div className="max-w-6xl mx-auto">
          {/* Service Cards Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative p-4 md:p-6 rounded-xl text-start transition-all duration-300 border-2 ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20'
                      : 'bg-card border-border hover:border-primary/40 hover:shadow-md'
                  }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`text-3xl md:text-4xl font-bold block mb-2 ${
                    isActive ? 'text-gold' : 'text-primary/10'
                  }`}>
                    {service.num}
                  </span>
                  <div className={`inline-flex p-2 rounded-lg mb-3 ${
                    isActive ? 'bg-primary-foreground/15' : 'bg-primary/10'
                  }`}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-gold' : 'text-primary'}`} />
                  </div>
                  <h3 className={`text-sm md:text-base font-bold leading-tight ${
                    isActive ? 'text-primary-foreground' : 'text-primary'
                  }`}>
                    {service.title}
                  </h3>
                </motion.button>
              );
            })}
          </div>

          {/* Active Service Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="rounded-2xl overflow-hidden border border-border shadow-lg"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="w-full lg:w-1/2 relative">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-[250px] lg:h-[380px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary/10" />
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 rounded-lg bg-primary/10">
                      <active.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-gold font-bold text-lg">{active.num}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{active.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">{active.desc}</p>
                  <Link to="/services">
                    <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
