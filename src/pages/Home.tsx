import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';
import ClientsBackgroundAnimation from '@/components/home/ClientsBackgroundAnimation';
import hafcoLogo from '@/assets/hafco-logo.png';
import heroImage from '@/assets/trucks/truck-5.jpeg';
import wantedTrailerArImage from '@/assets/wanted-trailer.png';
import wantedTrailerEnImage from '@/assets/wanted-trailer-en.png';

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <FloatingTrucksBackground truckCount={30} particleCount={25} />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <img 
            src={hafcoLogo} 
            alt="HAFCO Logo" 
            className="h-32 md:h-40 w-auto mx-auto mb-8 animate-fade-up brightness-0 invert"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-up stagger-1">
            {language === 'ar' ? 'هافكو' : 'HAFCO'}
          </h1>
          <p className="text-xl md:text-2xl text-gold font-semibold mb-4 animate-fade-up stagger-2">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 animate-fade-up stagger-3">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up stagger-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gold hover:bg-gold-light text-primary font-bold px-8">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-primary">
                {t('hero.learnMore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border hover-lift hover-glow">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">{t('common.viewAll')}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-primary overflow-hidden relative">
        <ClientsBackgroundAnimation />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold text-center text-white mb-4">{t('work.clientsTitle')}</h2>
          <p className="text-white/60 text-center mb-8 max-w-xl mx-auto">
            {language === 'ar' 
              ? 'نفخر بخدمة أكبر الشركات في المملكة العربية السعودية والمنطقة'
              : 'Proud to serve the largest companies in Saudi Arabia and the region'
            }
          </p>
        </div>
        <ClientsCarousel />
      </section>

      {/* Wanted Trailer Post */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <img 
              src={language === 'ar' ? wantedTrailerArImage : wantedTrailerEnImage} 
              alt={language === 'ar' ? 'مطلوب سطحة للشراء' : 'Wanted Flatbed Trailer for Purchase'}
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{t('contact.subtitle')}</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t('contact.description')}</p>
          <Link to="/contact">
            <Button size="lg" className="gradient-primary">{t('nav.getQuote')}</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
