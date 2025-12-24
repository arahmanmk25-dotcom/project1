import { useLanguage } from '@/contexts/LanguageContext';

// Work/Projects - images focusing on cargo and projects
import work1 from '@/assets/trucks/work-1.jpg';
import work2 from '@/assets/trucks/work-2.jpg';
import work3 from '@/assets/trucks/work-3.jpg';
import work4 from '@/assets/trucks/work-4.jpg';
import work5 from '@/assets/trucks/work-5.jpg';
import work6 from '@/assets/trucks/work-6.jpg';
import work7 from '@/assets/trucks/work-7.jpg';
import work8 from '@/assets/trucks/work-8.jpg';
import truck21 from '@/assets/trucks/new-truck-21.jpeg';
import truck26 from '@/assets/trucks/new-truck-26.jpeg';
import truck28 from '@/assets/trucks/new-truck-28.jpeg';
import truck30 from '@/assets/trucks/new-truck-30.jpeg';

const heroImage = work1;

const Work = () => {
  const { t, language } = useLanguage();

  const projects = [
    { 
      titleEn: 'Steel Frames Transport',
      titleAr: 'نقل هياكل فولاذية',
      image: work1 
    },
    { 
      titleEn: 'Industrial Equipment Loading',
      titleAr: 'تحميل معدات صناعية',
      image: work2 
    },
    { 
      titleEn: 'Large Diameter Pipes',
      titleAr: 'نقل أنابيب قطر كبير',
      image: work3 
    },
    { 
      titleEn: 'Giant Pipeline Sections',
      titleAr: 'نقل أقسام أنابيب عملاقة',
      image: work4 
    },
    { 
      titleEn: 'Coated Pipes Transport',
      titleAr: 'نقل أنابيب مغلفة',
      image: work5 
    },
    { 
      titleEn: 'GRP Pipes Transport',
      titleAr: 'نقل أنابيب GRP',
      image: work6 
    },
    { 
      titleEn: 'Steel Beams Loading',
      titleAr: 'تحميل عوارض فولاذية',
      image: work7 
    },
    { 
      titleEn: 'Steel Beams Transport',
      titleAr: 'نقل عوارض فولاذية',
      image: work8 
    },
    { 
      titleEn: 'Industrial Tank Transport',
      titleAr: 'نقل خزان صناعي ضخم',
      image: truck21 
    },
    { 
      titleEn: 'Giant Pipeline Sections',
      titleAr: 'نقل أقسام أنابيب عملاقة',
      image: truck26 
    },
    { 
      titleEn: 'Green Coated Pipes',
      titleAr: 'نقل أنابيب مغلفة خضراء',
      image: truck28 
    },
    { 
      titleEn: 'GRP Pipes Transport',
      titleAr: 'نقل أنابيب GRP',
      image: truck30 
    },
  ];

  const clients = [
    { en: 'Aramco', ar: 'أرامكو' },
    { en: 'Saipem', ar: 'سايبم' },
    { en: 'DB-Schenker', ar: 'دي بي شينكر' },
    { en: 'Agility', ar: 'أجيليتي' },
    { en: 'DHL', ar: 'دي إتش إل' },
    { en: 'Maersk', ar: 'ميرسك' },
    { en: 'SABIC', ar: 'سابك' },
    { en: 'Nesma & Partners', ar: 'نسما وشركاؤها' },
    { en: 'SICIM', ar: 'سيسيم' },
    { en: 'WD Logistics', ar: 'دبليو دي لوجستكس' },
    { en: 'Eastern Integrated Pipes', ar: 'شركة أنابيب الشرق المتكاملة الصناعية' },
    { en: 'Eastern Pipes Co.', ar: 'شركة أنابيب الشرق' },
    { en: 'Alqahtani Pipe Coating Industries', ar: 'شركة القحطاني لصناعات طلاء الأنابيب' },
    { en: 'NPC', ar: 'إن بي سي' },
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
            {clients.map((client, i) => (
              <span key={i} className="text-2xl font-bold text-white/60 hover:text-gold transition-colors">
                {language === 'ar' ? client.ar : client.en}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
