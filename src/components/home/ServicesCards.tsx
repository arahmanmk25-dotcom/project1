import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';

import workImg1 from '@/assets/trucks/work-img-1.jpeg';
import workImg3 from '@/assets/trucks/work-img-3.jpeg';

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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                <Link to={`/services#${service.slug}`}>
                  <motion.div
                    className="lux-card group cursor-pointer !p-3 h-full"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
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
                        style={{ fontFamily: language === 'ar' ? "'Amiri', serif" : "'Playfair Display', serif" }}
                      >
                        {service.title}
                      </h3>
                      <p
                        className="mt-3 text-sm text-muted-foreground leading-relaxed italic"
                        style={{ fontFamily: language === 'ar' ? "'Amiri', serif" : "'Playfair Display', serif" }}
                      >
                        {service.desc}
                      </p>
                      <div className="mt-4 flex items-center justify-center gap-1.5 text-gold font-semibold text-xs tracking-[0.25em] uppercase opacity-70 group-hover:opacity-100 transition">
                        {language === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                        <ArrowRight className="h-3.5 w-3.5" />
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
