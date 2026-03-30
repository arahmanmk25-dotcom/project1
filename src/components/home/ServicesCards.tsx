import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  desc: string;
  num: string;
  slug: string;
}

const ServicesCards = () => {
  const { t, language } = useLanguage();

  const services: ServiceItem[] = [
    { icon: Truck, title: t('services.heavy.title'), desc: language === 'ar' ? 'نقل المعدات الثقيلة والآلات الصناعية بأمان وكفاءة' : 'Heavy equipment & industrial machinery transport', num: '01', slug: 'heavy-transport' },
    { icon: Shield, title: t('services.petroleum.title'), desc: language === 'ar' ? 'نقل أنابيب ومواد البترول بأعلى معايير السلامة' : 'Safe petroleum pipe & materials hauling', num: '02', slug: 'petroleum' },
    { icon: Clock, title: t('services.crane.title'), desc: language === 'ar' ? 'خدمات الرافعات للمشاريع الكبرى والإنشائية' : 'Crane services for major projects', num: '03', slug: 'crane' },
    { icon: Users, title: t('services.logistics.title'), desc: language === 'ar' ? 'حلول لوجستية متكاملة من الباب إلى الباب' : 'End-to-end logistics solutions', num: '04', slug: 'logistics' },
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <Link to={`/services#${service.slug}`}>
                  <motion.div
                    className="relative rounded-2xl p-8 cursor-pointer border border-border/50 bg-card/60 backdrop-blur-xl shadow-lg group h-full"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glassmorphism glow effect on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 text-5xl font-bold text-primary/5 select-none group-hover:text-gold/10 transition-colors duration-500">
                      {service.num}
                    </span>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex p-3.5 rounded-xl bg-primary/10 group-hover:bg-gold/15 transition-colors duration-300 mb-6">
                        <Icon className="h-7 w-7 text-primary group-hover:text-gold transition-colors duration-300" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>

                      {/* Arrow link */}
                      <div className="flex items-center gap-2 text-gold font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
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
