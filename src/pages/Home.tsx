import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';
import ClientsBackgroundAnimation from '@/components/home/ClientsBackgroundAnimation';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import ParallaxHero from '@/components/home/ParallaxHero';
import HeroTypewriter from '@/components/home/HeroTypewriter';
import StatsBar from '@/components/home/StatsBar';

import hafcoLogo from '@/assets/hafco-logo.png';
import heroImage from '@/assets/trucks/truck-5.jpeg';

const Home = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: '40+', label: t('about.yearsExperience') },
    { value: '5000+', label: t('about.projectsCompleted') },
    { value: '200+', label: t('about.happyClients') },
    { value: '50+', label: t('about.fleetSize') },
  ];

  const services = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description') },
    { icon: Shield, title: t('services.petroleum.title'), desc: t('services.petroleum.description') },
    { icon: Clock, title: t('services.crane.title'), desc: t('services.crane.description') },
    { icon: Users, title: t('services.logistics.title'), desc: t('services.logistics.description') },
  ];

  const typewriterWords = language === 'ar'
    ? ['النقل الثقيل', 'الرافعات', 'الخدمات اللوجستية', 'نقل البترول']
    : ['Heavy Transport', 'Crane Services', 'Logistics', 'Petroleum Hauling'];

  return (
    <PageTransition>
      <div>
        {/* Hero Section with Parallax */}
        <ParallaxHero imageSrc={heroImage}>
          <div className="container mx-auto px-4 text-center">
            <FloatingTrucksBackground truckCount={30} particleCount={25} />
            
            <motion.img
              src={hafcoLogo}
              alt="HAFCO Logo"
              className="h-28 md:h-36 w-auto mx-auto mb-6 brightness-0 invert"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {language === 'ar' ? 'هافكو' : 'HAFCO'}
            </motion.h2>

            <motion.div
              className="text-xl md:text-3xl text-gold font-semibold mb-4 h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <HeroTypewriter words={typewriterWords} />
            </motion.div>

            <motion.p
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
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
                <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-bold px-8 group">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                  {t('hero.learnMore')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </ParallaxHero>

        {/* Stats Section - enhanced */}
        <StatsBar stats={stats} variant="light" />

        {/* Services Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('services.title')}</h2>
                <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ScrollReveal key={index} variant="fadeUp" delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: '0 20px 40px -12px hsl(var(--primary) / 0.15)' }}
                    transition={{ duration: 0.3 }}
                    className="bg-card p-6 rounded-2xl border border-border h-full group cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <div className="text-center mt-10">
                <Link to="/services">
                  <Button variant="outline" size="lg">{t('common.viewAll')}</Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 bg-primary overflow-hidden relative">
          <ClientsBackgroundAnimation />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal variant="fadeUp">
              <h2 className="text-2xl font-bold text-center text-white mb-4">{t('work.clientsTitle')}</h2>
              <p className="text-white/60 text-center mb-8 max-w-xl mx-auto">
                {language === 'ar' 
                  ? 'نفخر بخدمة أكبر الشركات في المملكة العربية السعودية والمنطقة'
                  : 'Proud to serve the largest companies in Saudi Arabia and the region'
                }
              </p>
            </ScrollReveal>
          </div>
          <ClientsCarousel />
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal variant="scaleIn">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('contact.subtitle')}</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('contact.description')}</p>
              <Link to="/contact">
                <Button size="lg" className="gradient-primary">{t('nav.getQuote')}</Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
