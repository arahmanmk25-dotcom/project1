import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import ClientsBackgroundAnimation from '@/components/home/ClientsBackgroundAnimation';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroTypewriter from '@/components/home/HeroTypewriter';
import StatsBar from '@/components/home/StatsBar';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';
import ServicesCards from '@/components/home/ServicesCards';
import RoadDivider from '@/components/shared/RoadDivider';

import hafcoLogo from '@/assets/hafco-logo.png';
import heroImage from '@/assets/trucks/truck-5.jpeg';
import workImg1 from '@/assets/trucks/work-img-1.jpeg';

const Home = () => {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);




  const stats = [
    { value: '40+', label: t('about.yearsExperience') },
    { value: '5000+', label: t('about.projectsCompleted') },
    { value: '200+', label: t('about.happyClients') },
    { value: '50+', label: t('about.fleetSize') },
  ];


  const typewriterWords = language === 'ar'
    ? ['النقل الثقيل', 'الرافعات', 'الخدمات اللوجستية', 'نقل البترول']
    : ['Heavy Transport', 'Crane Services', 'Logistics', 'Petroleum Hauling'];

  return (
    <PageTransition>
      <div>
        {/* ===== Vintage Industrial Woodblock Hero ===== */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-16 pt-24 pb-12 px-4 md:px-8 vintage-paper-light">
          <motion.div
            className="relative w-full max-w-6xl vintage-frame vintage-paper p-3 md:p-6 overflow-hidden"
            style={{ opacity: heroOpacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Faded background video */}
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply pointer-events-none overflow-hidden">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster={heroImage}>
                <source src="/hafco-hero.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Inner ghost border + content */}
            <div className="relative z-10 vintage-corners border-2 border-primary/30 flex flex-col items-center text-center py-14 md:py-20 px-4 md:px-8">
              <span className="vc-bl" /><span className="vc-br" />

              {/* Top region badge */}
              <div className="mb-8 flex flex-col items-center">
                <div className="w-16 h-px bg-primary mb-2" />
                <span className="font-stencil text-primary text-xs md:text-sm uppercase">
                  {language === 'ar' ? 'المملكة العربية السعودية' : 'Kingdom of Saudi Arabia'}
                </span>
                <div className="w-16 h-px bg-primary mt-2" />
              </div>

              {/* Logo mark */}
              <motion.img
                src={hafcoLogo}
                alt="HAFCO"
                className="vintage-logo h-12 md:h-16 w-auto mb-6 opacity-90"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 0.9, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              />

              {/* Main woodblock title */}
              <div className="relative mb-10">
                <motion.h1
                  className="font-display text-7xl md:text-8xl lg:text-9xl text-primary uppercase leading-none tracking-tighter"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  {language === 'ar' ? 'هافكو' : 'HAFCO'}
                </motion.h1>
                <motion.div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-card px-4 py-1 border border-primary whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  <p className="font-stencil text-xl md:text-3xl text-primary">
                    {language === 'ar' ? 'النقل الثقيل' : 'HEAVY TRANSPORT'}
                  </p>
                </motion.div>
              </div>

              {/* Typewriter rotating word */}
              <motion.div
                className="font-italic-serif text-lg md:text-2xl text-accent mt-8 mb-6 h-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <HeroTypewriter words={typewriterWords} />
              </motion.div>

              {/* Description */}
              <motion.p
                className="font-italic-serif text-lg md:text-2xl text-foreground/80 max-w-2xl leading-relaxed mb-10"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                {t('hero.description')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                className="flex flex-wrap justify-center gap-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link to="/contact"><button className="btn-vintage">{t('hero.cta')} <ArrowRight className="ml-2 h-4 w-4 inline" /></button></Link>
                <Link to="/about"><button className="btn-vintage-outline">{t('hero.learnMore')}</button></Link>
              </motion.div>

              {/* Certified hauler badges */}
              <motion.div
                className="mt-10 flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
              >
                <span className="hauler-badge">{language === 'ar' ? 'مرخّص · هيئة النقل' : 'Licensed · TGA'}</span>
                <span className="hauler-badge">{language === 'ar' ? 'أسطول ٥٠+ شاحنة' : 'Fleet · 50+ Trucks'}</span>
                <span className="hauler-badge">{language === 'ar' ? 'تغطية المملكة' : 'KSA-Wide Coverage'}</span>
                <span className="hauler-badge">{language === 'ar' ? 'منذ ١٩٨٤' : 'Est. 1984'}</span>
              </motion.div>
            </div>

            {/* Rotated "Original Quality" stamp */}
            <div className="hidden md:block absolute bottom-6 right-8 rotate-12 opacity-40 pointer-events-none z-20">
              <div className="vintage-stamp w-24 h-24 p-3">
                <div className="border border-primary rounded-full p-2 text-[10px] leading-tight">
                  {language === 'ar' ? 'جودة\nأصلية' : 'Original\nQuality\nEst. 1984'}
                </div>
              </div>
            </div>

            {/* Top-right reference number */}
            <div className="absolute top-4 right-4 md:top-6 md:right-8 border border-primary/60 px-2 py-1 text-[10px] font-stencil text-primary opacity-70 z-20 bg-card/60">
              REF · HFC-72-A
            </div>

            <FloatingTrucksBackground truckCount={6} particleCount={0} />
          </motion.div>
        </section>

        {/* Slogan band */}
        <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--gold)) 0 1px, transparent 1px 14px)' }} />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold/80 font-stencil text-xs md:text-sm tracking-[0.4em] mb-5">
                {language === 'ar' ? '— شعارنا —' : '— OUR CREED —'}
              </p>
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-background leading-tight">
                {language === 'ar' ? (
                  <>ننقل <span className="italic text-gold">المستحيل</span>.</>
                ) : (
                  <>We move the <span className="italic text-gold">impossible</span>.</>
                )}
              </h2>
              <p className="font-italic-serif text-lg md:text-2xl text-background/80 mt-6 max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'هافكو — تاريخٌ راسخٌ في صناعة النقل واللوجستيات منذ عام ١٩٨٤.'
                  : 'HAFCO — history written into the logistics industry since 1984.'}
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-gold/60" />
                <span className="font-stencil text-[10px] tracking-[0.5em] text-gold">EST · 1984</span>
                <span className="h-px w-12 bg-gold/60" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <StatsBar stats={stats} variant="light" />


        {/* About Intro - Editorial Block */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'منذ ١٩٨٤' : 'SINCE 1984'}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-8">
                  {language === 'ar'
                    ? 'إرث عريق من التميز'
                    : 'A Proud Legacy of Excellence'}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
                  {t('about.description')}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Full-width Image Break */}
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={workImg1} alt="HAFCO Operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/30" />
        </section>

        {/* Services */}
        <ServicesCards />

        {/* Clients */}
        <section className="py-20 bg-primary overflow-hidden relative">
          <ClientsBackgroundAnimation />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold/80 font-semibold tracking-widest uppercase text-sm text-center mb-3">
                {language === 'ar' ? 'شركاؤنا' : 'OUR PARTNERS'}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">{t('work.clientsTitle')}</h2>
              <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
                {language === 'ar'
                  ? 'نفخر بخدمة أكبر الشركات في المملكة العربية السعودية والمنطقة'
                  : 'Proud to serve the largest companies in Saudi Arabia and the region'}
              </p>
            </ScrollReveal>
          </div>
          <ClientsCarousel />
        </section>

        {/* Road divider between clients and CTA */}
        <RoadDivider labelEn="KM · 0072 — KSA CORRIDOR" labelAr="كم · ٠٠٧٢ — ممر المملكة" originEn="RIYADH" originAr="الرياض" destinationEn="JEDDAH" destinationAr="جدة" />

        {/* CTA - Bold diagonal section */}
        <section className="relative py-32 md:py-40 overflow-hidden bg-primary">
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.15),transparent_60%)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gold)/0.1),transparent_60%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/5 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/10 rounded-full" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-6">
                  {language === 'ar' ? 'ابدأ مشروعك' : 'START YOUR PROJECT'}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {t('contact.subtitle')}
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fadeUp" delay={0.2}>
                <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                  {t('contact.description')}
                </p>
              </ScrollReveal>
              <ScrollReveal variant="scaleIn" delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-bold px-10 py-5 text-base group">
                      {t('nav.getQuote')}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary px-10 py-5 text-base font-semibold">
                      {language === 'ar' ? 'خدماتنا' : 'Our Services'}
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Road divider before footer */}
        <RoadDivider variant="dark" labelEn="DEPOT · RIYADH" labelAr="المستودع · الرياض" />
      </div>
    </PageTransition>
  );
};

export default Home;
