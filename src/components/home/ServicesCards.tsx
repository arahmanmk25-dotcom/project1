import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';

import workImg1 from '@/assets/trucks/work-img-1.jpeg';
import workImg3 from '@/assets/trucks/work-img-3.jpeg';
import fleet3 from '@/assets/trucks/fleet-3.jpg';
import workImg7 from '@/assets/trucks/work-img-7.jpg';
import workNew20 from '@/assets/trucks/work-new-20.jpg';

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
    { icon: Truck, title: t('services.heavy.title'), desc: language === 'ar' ? 'نقل المعدات الثقيلة والآلات الصناعية بأمان وكفاءة عبر المملكة' : 'Safe & efficient heavy equipment and industrial machinery transport across Saudi Arabia', image: workImg1, num: '01', slug: 'heavy-transport' },
    { icon: Shield, title: t('services.petroleum.title'), desc: language === 'ar' ? 'نقل أنابيب ومواد البترول بأعلى معايير السلامة الدولية' : 'Petroleum pipe and materials hauling with top international safety standards', image: workImg3, num: '02', slug: 'petroleum' },
    { icon: Clock, title: t('services.crane.title'), desc: language === 'ar' ? 'خدمات الرافعات المتخصصة للمشاريع الكبرى والإنشائية' : 'Specialized crane services for major construction and industrial projects', image: workNew20, num: '03', slug: 'crane' },
    { icon: Users, title: t('services.logistics.title'), desc: language === 'ar' ? 'حلول لوجستية متكاملة وشاملة من الباب إلى الباب' : 'Comprehensive end-to-end logistics solutions tailored to your needs', image: workImg7, num: '04', slug: 'logistics' },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fadeUp">
          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
              {language === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">{t('services.title')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {language === 'ar'
                ? 'نقدم حلول نقل ثقيل وخدمات لوجستية متكاملة للمشاريع الصناعية والنفطية.'
                : 'Comprehensive heavy transport and logistics solutions for industrial and petroleum projects.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <Link to={`/services#${service.slug}`}>
                  <motion.div
                    className="relative rounded-2xl overflow-hidden cursor-pointer group h-[280px] sm:h-[300px]"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

                    <span className="absolute top-4 right-5 text-8xl font-bold text-white/[0.06] select-none group-hover:text-gold/10 transition-colors duration-500">
                      {service.num}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="inline-flex p-2.5 rounded-xl bg-gold/20 group-hover:bg-gold/30 transition-colors">
                          <Icon className="h-5 w-5 text-gold" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">
                        {service.desc}
                      </p>
                      <div className="flex items-center gap-1.5 text-gold font-medium text-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                        <ArrowRight className="h-4 w-4" />
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
