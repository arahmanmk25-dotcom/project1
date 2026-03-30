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
    { icon: Truck, title: t('services.heavy.title'), desc: language === 'ar' ? 'نقل المعدات الثقيلة والآلات الصناعية' : 'Heavy equipment & industrial machinery transport', image: heroImage, num: '01' },
    { icon: Shield, title: t('services.petroleum.title'), desc: language === 'ar' ? 'نقل أنابيب ومواد البترول بأمان' : 'Safe petroleum pipe & materials hauling', image: truck13, num: '02' },
    { icon: Clock, title: t('services.crane.title'), desc: language === 'ar' ? 'خدمات الرافعات للمشاريع الكبرى' : 'Crane services for major projects', image: truck12, num: '03' },
    { icon: Users, title: t('services.logistics.title'), desc: language === 'ar' ? 'حلول لوجستية متكاملة' : 'End-to-end logistics solutions', image: truck9, num: '04' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-5xl mx-auto mb-6">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              {language === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">{t('services.title')}</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
              {language === 'ar'
                ? 'نقدم مجموعة شاملة من خدمات النقل الثقيل والخدمات اللوجستية المصممة لتلبية احتياجات المشاريع الصناعية والنفطية والإنشائية في المملكة العربية السعودية والمنطقة. بفضل خبرتنا الممتدة لأكثر من 40 عاماً وأسطولنا الحديث، نضمن تنفيذ كل مشروع بأعلى معايير السلامة والكفاءة.'
                : 'We offer a comprehensive range of heavy transport and logistics services tailored for industrial, petroleum, and construction projects across Saudi Arabia and the region. With over 40 years of experience and a modern fleet, we ensure every project is executed with the highest standards of safety and efficiency.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden border border-border shadow-lg group h-[300px]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                  <span className="absolute top-4 right-4 text-6xl font-bold text-white/10 select-none">
                    {service.num}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex p-2 rounded-lg bg-gold/20 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <p className="text-white/70 text-sm">{service.desc}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal variant="fadeUp" delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="gradient-primary px-10 py-6 text-lg group">
                {language === 'ar' ? 'استكشف جميع خدماتنا' : 'Explore All Our Services'}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesCards;
