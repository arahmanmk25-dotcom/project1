import { useLanguage } from '@/contexts/LanguageContext';

// Work/Projects - images focusing on cargo and projects
import truck21 from '@/assets/trucks/new-truck-21.jpeg';
import truck22 from '@/assets/trucks/new-truck-22.jpeg';
import truck23 from '@/assets/trucks/new-truck-23.jpeg';
import truck24 from '@/assets/trucks/new-truck-24.jpg';
import truck25 from '@/assets/trucks/new-truck-25.jpeg';
import truck26 from '@/assets/trucks/new-truck-26.jpeg';
import truck27 from '@/assets/trucks/new-truck-27.jpeg';
import truck28 from '@/assets/trucks/new-truck-28.jpeg';
import truck29 from '@/assets/trucks/new-truck-29.jpeg';
import truck30 from '@/assets/trucks/new-truck-30.jpeg';
import truck33 from '@/assets/trucks/new-truck-33.jpeg';
import truck34 from '@/assets/trucks/new-truck-34.jpeg';
import truck49 from '@/assets/trucks/new-truck-49.jpg';
import truck50 from '@/assets/trucks/new-truck-50.jpg';
import truck51 from '@/assets/trucks/new-truck-51.jpg';
import truck54 from '@/assets/trucks/new-truck-54.jpg';
import truck55 from '@/assets/trucks/new-truck-55.jpg';
import truck59 from '@/assets/trucks/new-truck-59.jpg';

const heroImage = truck21;

const Work = () => {
  const { t, language } = useLanguage();

  const projects = [
    { 
      titleEn: 'Industrial Tank Transport',
      titleAr: 'نقل خزان صناعي ضخم',
      image: truck21 
    },
    { 
      titleEn: 'Large Industrial Cylinders',
      titleAr: 'نقل أسطوانات صناعية كبيرة',
      image: truck22 
    },
    { 
      titleEn: 'Water Park Slides Transport',
      titleAr: 'نقل زحاليق مدينة ألعاب مائية',
      image: truck23 
    },
    { 
      titleEn: 'Tunnel Slides Transport',
      titleAr: 'نقل أنفاق زحاليق',
      image: truck24 
    },
    { 
      titleEn: 'Industrial Equipment',
      titleAr: 'نقل معدات صناعية',
      image: truck25 
    },
    { 
      titleEn: 'Giant Pipeline Sections',
      titleAr: 'نقل أقسام أنابيب عملاقة',
      image: truck26 
    },
    { 
      titleEn: 'Large Diameter Pipes',
      titleAr: 'نقل أنابيب قطر كبير',
      image: truck27 
    },
    { 
      titleEn: 'Green Coated Pipes',
      titleAr: 'نقل أنابيب مغلفة خضراء',
      image: truck28 
    },
    { 
      titleEn: 'Blue Steel Pipes',
      titleAr: 'نقل أنابيب فولاذية زرقاء',
      image: truck29 
    },
    { 
      titleEn: 'GRP Pipes Transport',
      titleAr: 'نقل أنابيب GRP',
      image: truck30 
    },
    { 
      titleEn: 'Large Steel Pipes',
      titleAr: 'نقل أنابيب فولاذية كبيرة',
      image: truck33 
    },
    { 
      titleEn: 'Giant Steel Cylinders',
      titleAr: 'نقل أسطوانات فولاذية عملاقة',
      image: truck34 
    },
    { 
      titleEn: 'Covered Equipment Transport',
      titleAr: 'نقل معدات مغطاة',
      image: truck49 
    },
    { 
      titleEn: 'Oversized Cargo',
      titleAr: 'نقل حمولات ضخمة',
      image: truck50 
    },
    { 
      titleEn: 'Heavy Machinery Transport',
      titleAr: 'نقل آلات ثقيلة',
      image: truck51 
    },
    { 
      titleEn: 'Industrial Pipes',
      titleAr: 'نقل أنابيب صناعية',
      image: truck54 
    },
    { 
      titleEn: 'Large Blue Pipes',
      titleAr: 'نقل أنابيب زرقاء كبيرة',
      image: truck55 
    },
    { 
      titleEn: 'Steel Structures',
      titleAr: 'نقل هياكل فولاذية',
      image: truck59 
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl hover-lift">
                <div className="aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={language === 'ar' ? project.titleAr : project.titleEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">
                      {language === 'ar' ? project.titleAr : project.titleEn}
                    </h3>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold">
                    {language === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
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
