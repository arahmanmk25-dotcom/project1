import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
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
  slug: string;
}

const ServicesCards = () => {
  const { t, language } = useLanguage();

  const services: ServiceItem[] = [
    { icon: Truck, title: t('services.heavy.title'), desc: language === 'ar' ? 'نقل المعدات الثقيلة والآلات الصناعية بأمان وكفاءة' : 'Heavy equipment & industrial machinery transport', image: heroImage, num: '01', slug: 'heavy-transport' },
    { icon: Shield, title: t('services.petroleum.title'), desc: language === 'ar' ? 'نقل أنابيب ومواد البترول بأعلى معايير السلامة' : 'Safe petroleum pipe & materials hauling', image: truck13, num: '02', slug: 'petroleum' },
    { icon: Clock, title: t('services.crane.title'), desc: language === 'ar' ? 'خدمات الرافعات للمشاريع الكبرى والإنشائية' : 'Crane services for major projects', image: truck12, num: '03', slug: 'crane' },
    { icon: Users, title: t('services.logistics.title'), desc: language === 'ar' ? 'حلول لوجستية متكاملة من الباب إلى الباب' : 'End-to-end logistics solutions', image: truck9, num: '04', slug: 'logistics' },
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
                ? 'نقدم مجموعة شاملة من خدمات النقل الثقيل والخدمات اللوجستية المصممة لتلبية احتياجات المشاريع الصناعية والنفطية والإنشائية في المملكة العربية السعودية والمنطقة.'
                : 'We offer a comprehensive range of heavy transport and logistics services tailored for industrial, petroleum, and construction projects across Saudi Arabia and the region.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <Link to={`/services#${service.slug}`}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden cursor-pointer group h-[260px] sm:h-[280px]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-black/90 group-hover:via-black/50 transition-all duration-500" />

                    {/* Number watermark */}
                    <span className="absolute top-4 right-5 text-7xl font-bold text-white/8 select-none group-hover:text-gold/15 transition-colors duration-500">
                      {service.num}
                    </span>

                    {/* Content - glass card at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                      <div className="backdrop-blur-md bg-white/10 rounded-xl p-4 sm:p-5 border border-white/10 group-hover:bg-white/15 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="inline-flex p-2 rounded-lg bg-gold/20">
                            <Icon className="h-5 w-5 text-gold" />
                          </div>
                          <h3 className="text-base sm:text-lg font-bold text-white">{service.title}</h3>
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-3">
                          {service.desc}
                        </p>
                        <div className="flex items-center gap-1.5 text-gold font-medium text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                          {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
