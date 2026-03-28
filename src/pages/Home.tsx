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

import hafcoLogo from '@/assets/hafco-logo.png';
import heroImage from '@/assets/trucks/truck-5.jpeg';
import workImg1 from '@/assets/trucks/work-img-1.jpeg';
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
        {/* Full-viewport Hero */}
        <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-20">
          <motion.div
            className="absolute inset-0"
            style={{ y: heroY }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[120%] object-cover"
              poster={heroImage}
            >
              <source src="/hafco-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 hero-overlay" />
            <FloatingTrucksBackground truckCount={18} particleCount={20} />
          </motion.div>

          <motion.div
            className="relative z-10 container mx-auto px-4 text-center"
            style={{ opacity: heroOpacity }}
          >
            <motion.img
              src={hafcoLogo}
              alt="HAFCO Logo"
              className="h-24 md:h-32 w-auto mx-auto mb-6 brightness-0 invert"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'ar' ? 'هافكو' : 'HAFCO'}
            </motion.h2>

            <motion.div
              className="text-xl md:text-3xl text-gold font-semibold mb-6 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <HeroTypewriter words={typewriterWords} />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-bold px-10 py-6 text-lg group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-gold/60 text-gold hover:bg-gold hover:text-primary px-10 py-6 text-lg font-semibold">
                  {t('hero.learnMore')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1.5 h-3 rounded-full bg-gold" />
            </div>
          </motion.div>
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

        {/* CTA - Editorial */}
        <section className="py-32 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal variant="scaleIn">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">{t('contact.subtitle')}</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">{t('contact.description')}</p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary px-10 py-6 text-lg">{t('nav.getQuote')}</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
