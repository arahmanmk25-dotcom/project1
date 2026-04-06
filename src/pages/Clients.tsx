import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart, UtensilsCrossed, HeartPulse, Factory, Package, Hotel, Snowflake, MapPin, Thermometer, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/shared/PageTransition';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import ClientsBackgroundAnimation from '@/components/home/ClientsBackgroundAnimation';

import aramcoLogo from '@/assets/clients/aramco.png';
import saipemLogo from '@/assets/clients/saipem.png';
import dbSchenkerLogo from '@/assets/clients/db-schenker.svg';
import agilityLogo from '@/assets/clients/agility.png';
import dhlLogo from '@/assets/clients/dhl.svg';
import maerskLogo from '@/assets/clients/maersk.png';
import nesmaLogo from '@/assets/clients/nesma.png';
import sicimLogo from '@/assets/clients/sicim.png';
import wdLogisticsLogo from '@/assets/clients/wd-logistics.png';
import eastPipesLogo from '@/assets/clients/east-pipes.png';
import alqahtaniLogo from '@/assets/clients/alqahtani.png';
import npcLogo from '@/assets/clients/npc.png';

const Clients = () => {
  const { language, t } = useLanguage();

  const clients = [
    { name: 'Aramco', logo: aramcoLogo, size: 'large' as const },
    { name: 'Saipem', logo: saipemLogo },
    { name: 'DB-Schenker', logo: dbSchenkerLogo },
    { name: 'Agility', logo: agilityLogo },
    { name: 'DHL', logo: dhlLogo },
    { name: 'Maersk', logo: maerskLogo },
    { name: 'Nesma & Partners', logo: nesmaLogo },
    { name: 'SICIM', logo: sicimLogo },
    { name: 'WD Logistics', logo: wdLogisticsLogo },
    { name: 'Eastern Pipes Co.', logo: eastPipesLogo },
    { name: 'Alqahtani Pipe Coating', logo: alqahtaniLogo },
    { name: 'NPC', logo: npcLogo },
  ];

  const industries = [
    {
      icon: ShoppingCart,
      nameEn: 'Retail & Supermarkets',
      nameAr: 'التجزئة والسوبرماركت',
      descEn: 'Reliable supply chain solutions for retail operations across the region.',
      descAr: 'حلول سلسلة إمداد موثوقة لعمليات التجزئة في جميع أنحاء المنطقة.',
    },
    {
      icon: UtensilsCrossed,
      nameEn: 'Food & Beverage',
      nameAr: 'الأغذية والمشروبات',
      descEn: 'Temperature-controlled transport ensuring freshness from source to shelf.',
      descAr: 'نقل بدرجة حرارة مضبوطة لضمان النضارة من المصدر إلى الرف.',
    },
    {
      icon: HeartPulse,
      nameEn: 'Healthcare & Pharmaceuticals',
      nameAr: 'الرعاية الصحية والأدوية',
      descEn: 'Compliant cold-chain logistics for sensitive medical and pharmaceutical goods.',
      descAr: 'خدمات لوجستية متوافقة للسلسلة الباردة للمنتجات الطبية والصيدلانية الحساسة.',
    },
    {
      icon: Factory,
      nameEn: 'Manufacturing & Industrial',
      nameAr: 'التصنيع والصناعة',
      descEn: 'Heavy equipment and raw material transport for industrial operations.',
      descAr: 'نقل المعدات الثقيلة والمواد الخام للعمليات الصناعية.',
    },
    {
      icon: Package,
      nameEn: 'E-commerce & Distribution',
      nameAr: 'التجارة الإلكترونية والتوزيع',
      descEn: 'Scalable distribution networks for growing e-commerce businesses.',
      descAr: 'شبكات توزيع قابلة للتوسع لأعمال التجارة الإلكترونية المتنامية.',
    },
    {
      icon: Hotel,
      nameEn: 'Hospitality & Catering',
      nameAr: 'الضيافة والتموين',
      descEn: 'Timely delivery services tailored for the hospitality industry.',
      descAr: 'خدمات توصيل في الوقت المناسب مخصصة لصناعة الضيافة.',
    },
  ];

  const highlights = [
    {
      icon: Snowflake,
      titleEn: 'Reliable Cold-Chain Delivery',
      titleAr: 'توصيل سلسلة تبريد موثوق',
      descEn: 'End-to-end temperature monitoring ensuring product integrity throughout the journey.',
      descAr: 'مراقبة درجة الحرارة من البداية إلى النهاية لضمان سلامة المنتج طوال الرحلة.',
    },
    {
      icon: Radio,
      titleEn: 'Real-Time Fleet Tracking',
      titleAr: 'تتبع الأسطول في الوقت الفعلي',
      descEn: 'GPS-enabled fleet management for complete visibility and operational transparency.',
      descAr: 'إدارة أسطول مزودة بنظام GPS لرؤية كاملة وشفافية تشغيلية.',
    },
    {
      icon: Thermometer,
      titleEn: 'Temperature-Controlled Transport',
      titleAr: 'نقل بدرجة حرارة مضبوطة',
      descEn: 'Specialized vehicles maintaining precise temperature ranges for sensitive cargo.',
      descAr: 'مركبات متخصصة تحافظ على نطاقات حرارة دقيقة للشحنات الحساسة.',
    },
    {
      icon: MapPin,
      titleEn: 'Nationwide Coverage',
      titleAr: 'تغطية على مستوى المملكة',
      descEn: 'Comprehensive logistics network spanning every major city and industrial hub in Saudi Arabia.',
      descAr: 'شبكة لوجستية شاملة تغطي كل مدينة رئيسية ومركز صناعي في المملكة.',
    },
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end pb-16 overflow-hidden -mt-16 pt-16 bg-primary">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.12),transparent_60%)]" />
            <FloatingTrucksBackground truckCount={14} particleCount={16} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.p
              className="text-gold font-semibold tracking-widest uppercase text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {language === 'ar' ? 'شركاؤنا في النجاح' : 'OUR PARTNERS IN SUCCESS'}
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {language === 'ar' ? 'عملاؤنا' : 'Our Clients'}
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'ar'
                ? 'موثوق بنا من قبل الشركات الرائدة في المنطقة لحلول اللوجستيات والنقل والسلسلة الباردة.'
                : 'Trusted by leading companies across the region for logistics, transportation, and cold‑chain solutions.'}
            </motion.p>
          </div>
        </section>

        {/* Client Logo Grid */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'ثقة رواد الصناعة' : 'TRUSTED BY INDUSTRY LEADERS'}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                  {language === 'ar' ? 'ثقة رواد الصناعة' : 'Trusted by Industry Leaders'}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {language === 'ar'
                    ? 'نفخر بدعم الشركات بمختلف أحجامها بعمليات موثوقة وقابلة للتوسع وفعالة.'
                    : 'We proudly support businesses of all sizes with reliable, scalable, and efficient operations.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {clients.map((client, i) => (
                <ScrollReveal key={client.name} variant="scaleIn" delay={i * 0.05}>
                  <div className="group flex items-center justify-center h-24 md:h-28 px-4 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:scale-105 hover:border-primary/20 transition-all duration-300">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className={`w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${
                        client.size === 'large' ? 'h-14 md:h-16' : 'h-10 md:h-12'
                      }`}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-24 md:py-32 bg-secondary">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'القطاعات' : 'SECTORS'}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                  {language === 'ar' ? 'القطاعات التي نخدمها' : 'Industries We Serve'}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {language === 'ar'
                    ? 'يمتد عملاؤنا عبر قطاعات متعددة، لكل منها احتياجات تشغيلية فريدة.'
                    : 'Our clients span multiple sectors, each with unique operational needs.'}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.nameEn} variant="fadeUp" delay={i * 0.08}>
                  <div className="group bg-card rounded-2xl p-8 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <ind.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {language === 'ar' ? ind.nameAr : ind.nameEn}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {language === 'ar' ? ind.descAr : ind.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Support Our Clients */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'مزايانا' : 'OUR STRENGTHS'}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
                  {language === 'ar' ? 'كيف ندعم عملاءنا' : 'How We Support Our Clients'}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((h, i) => (
                <ScrollReveal key={h.titleEn} variant="fadeUp" delay={i * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <h.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {language === 'ar' ? h.titleAr : h.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {language === 'ar' ? h.descAr : h.descEn}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Scrolling Clients Marquee */}
        <section className="py-16 bg-primary overflow-hidden relative">
          <ClientsBackgroundAnimation />
          <div className="container mx-auto px-4 relative z-10 mb-6">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold/80 font-semibold tracking-widest uppercase text-sm text-center mb-3">
                {language === 'ar' ? 'شركاؤنا' : 'OUR PARTNERS'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
                {language === 'ar' ? 'شركاء وانتماءات' : 'Partners & Affiliations'}
              </h2>
            </ScrollReveal>
          </div>
          <ClientsCarousel />
        </section>

        {/* CTA */}
        <section className="relative py-32 md:py-40 overflow-hidden bg-secondary">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-6">
                  {language === 'ar' ? 'انضم إلينا' : 'JOIN US'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                  {language === 'ar' ? 'انضم إلى شبكتنا المتنامية' : 'Join Our Growing Network'}
                </h2>
                <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                  {language === 'ar'
                    ? 'شاركنا لحلول لوجستية وسلسلة تبريد موثوقة مصممة خصيصاً لأعمالك.'
                    : 'Partner with us for reliable logistics and cold‑chain solutions tailored to your business.'}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="gradient-primary hover:opacity-90 text-primary-foreground font-bold px-10 py-6 text-lg group">
                    {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="py-12 bg-secondary" />
      </div>
    </PageTransition>
  );
};

export default Clients;
