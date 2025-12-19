import { Users, Target, Eye, Award, Truck, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '40+', label: t('about.yearsExperience') },
    { value: '5000+', label: t('about.projectsCompleted') },
    { value: '200+', label: t('about.happyClients') },
    { value: '50+', label: t('about.fleetSize') },
  ];

  const reasons = [
    { icon: Users, title: t('about.reason1'), desc: t('about.reason1Text') },
    { icon: Truck, title: t('about.reason2'), desc: t('about.reason2Text') },
    { icon: Shield, title: t('about.reason3'), desc: t('about.reason3Text') },
    { icon: Clock, title: t('about.reason4'), desc: t('about.reason4Text') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gold">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.description')}</p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl border border-border hover-lift">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">{t('about.mission')}</h3>
              <p className="text-muted-foreground">{t('about.missionText')}</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover-lift">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">{t('about.vision')}</h3>
              <p className="text-muted-foreground">{t('about.visionText')}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-secondary rounded-xl mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about.whyChoose')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
                <reason.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                <h4 className="font-bold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;