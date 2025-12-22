import { useLanguage } from '@/contexts/LanguageContext';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import truck6 from '@/assets/trucks/truck-6.jpeg';
import truck7 from '@/assets/trucks/truck-7.jpeg';
import truck10 from '@/assets/trucks/truck-10.jpeg';
import truck13 from '@/assets/trucks/truck-13.jpeg';
import truck15 from '@/assets/trucks/truck-15.jpeg';
import truck16 from '@/assets/trucks/truck-16.jpeg';
import truck17 from '@/assets/trucks/truck-17.jpeg';

const heroImage = truck5;

const Work = () => {
  const { t, language } = useLanguage();

  const projects = [
    { 
      title: language === 'ar' ? 'نقل خزان ضخم' : 'Massive Tank Transport', 
      image: truck5 
    },
    { 
      title: language === 'ar' ? 'نقل الأسطوانات الصناعية' : 'Industrial Cylinder Transport', 
      image: truck6 
    },
    { 
      title: language === 'ar' ? 'نقل المعدات الكبيرة' : 'Big Equipment Moving', 
      image: truck7 
    },
    { 
      title: language === 'ar' ? 'فريق العمل' : 'Our Team at Work', 
      image: truck10 
    },
    { 
      title: language === 'ar' ? 'نقل الأنابيب الكبيرة' : 'Large Pipe Transport', 
      image: truck13 
    },
    { 
      title: language === 'ar' ? 'نقل أنابيب البترول' : 'Petroleum Pipe Transport', 
      image: truck15 
    },
    { 
      title: language === 'ar' ? 'نقل الأنابيب المزدوجة' : 'Double Pipe Transport', 
      image: truck16 
    },
    { 
      title: language === 'ar' ? 'شاحنة MAN الحمراء' : 'Red MAN Truck', 
      image: truck17 
    },
  ];

  const clients = [
    'Aramco', 
    'DB-Schenker', 
    'Agility', 
    'DHL', 
    'Maersk', 
    'SABIC',
    'Nesma & Partners',
    'SICIM',
    'WD Logistics',
    language === 'ar' ? 'شركة أنابيب الشرق المتكاملة الصناعية' : 'Eastern Integrated Pipes',
    'Eastern Pipes Co.',
    'ALQahtani PCK Pipe Company',
    'NPC'
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('work.title')}</h1>
          <p className="text-xl text-gold">{t('work.subtitle')}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('work.description')}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('work.projectsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl hover-lift">
                <div className="aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">{t('work.clientsTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span key={client} className="text-2xl font-bold text-white/60 hover:text-gold transition-colors">{client}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
