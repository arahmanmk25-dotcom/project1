import { useLanguage } from '@/contexts/LanguageContext';

// Work/Projects - new images
import work1 from '@/assets/trucks/work-new-1.jpg';
import work2 from '@/assets/trucks/work-new-2.jpg';
import work3 from '@/assets/trucks/work-new-3.jpg';
import work4 from '@/assets/trucks/work-new-4.jpg';
import work5 from '@/assets/trucks/work-new-5.jpg';
import work6 from '@/assets/trucks/work-new-6.jpg';
import work7 from '@/assets/trucks/work-new-7.jpg';
import work8 from '@/assets/trucks/work-new-8.jpg';
import work9 from '@/assets/trucks/work-new-9.jpg';
import work10 from '@/assets/trucks/work-new-10.jpg';

const Work = () => {
  const { t, language } = useLanguage();

  const projects = [
    { 
      titleEn: 'Large Diameter Pipe Transport',
      titleAr: 'نقل أنابيب قطر كبير',
      descEn: 'Transporting large blue-coated industrial pipes for oil and gas projects.',
      descAr: 'نقل أنابيب صناعية كبيرة مغلفة باللون الأزرق لمشاريع النفط والغاز.',
      image: work1 
    },
    { 
      titleEn: 'Steel Beams Delivery',
      titleAr: 'توصيل عوارض فولاذية',
      descEn: 'Heavy steel beam transport for construction site with professional crew.',
      descAr: 'نقل عوارض فولاذية ثقيلة لموقع البناء مع طاقم محترف.',
      image: work2 
    },
    { 
      titleEn: 'Red Coated Pipeline',
      titleAr: 'نقل أنابيب حمراء',
      descEn: 'Oversized red-coated pipeline sections for industrial projects.',
      descAr: 'أقسام أنابيب حمراء كبيرة الحجم للمشاريع الصناعية.',
      image: work3 
    },
    { 
      titleEn: 'Green Industrial Pipes',
      titleAr: 'أنابيب صناعية خضراء',
      descEn: 'Green coated GRP pipes transport for water treatment facilities.',
      descAr: 'نقل أنابيب GRP خضراء لمرافق معالجة المياه.',
      image: work4 
    },
    { 
      titleEn: 'Fleet Operations',
      titleAr: 'عمليات الأسطول',
      descEn: 'Multiple trucks coordinating heavy cargo transport operations.',
      descAr: 'تنسيق عدة شاحنات لعمليات نقل البضائع الثقيلة.',
      image: work5 
    },
    { 
      titleEn: 'Giant Green Pipes',
      titleAr: 'أنابيب خضراء عملاقة',
      descEn: 'Massive green pipeline sections for major infrastructure projects.',
      descAr: 'أقسام أنابيب خضراء ضخمة لمشاريع البنية التحتية الكبرى.',
      image: work6 
    },
    { 
      titleEn: 'Cable Drum Transport',
      titleAr: 'نقل بكرات الكابلات',
      descEn: 'Heavy cable drums delivery for electrical infrastructure projects.',
      descAr: 'توصيل بكرات كابلات ثقيلة لمشاريع البنية التحتية الكهربائية.',
      image: work7 
    },
    { 
      titleEn: 'Tanker Transport',
      titleAr: 'نقل الصهاريج',
      descEn: 'Large capacity tanker transport for industrial liquid storage.',
      descAr: 'نقل صهاريج كبيرة السعة لتخزين السوائل الصناعية.',
      image: work8 
    },
    { 
      titleEn: 'Multi-Pipe Loading',
      titleAr: 'تحميل أنابيب متعددة',
      descEn: 'Loading multiple steel pipes for pipeline construction projects.',
      descAr: 'تحميل أنابيب فولاذية متعددة لمشاريع إنشاء خطوط الأنابيب.',
      image: work9 
    },
    { 
      titleEn: 'Blue Tank Delivery',
      titleAr: 'توصيل خزان أزرق',
      descEn: 'Oversized blue industrial tank transport with specialized equipment.',
      descAr: 'نقل خزان صناعي أزرق كبير الحجم بمعدات متخصصة.',
      image: work10 
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
          style={{ backgroundImage: `url(${work1})` }}
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
              <div key={i} className="relative group overflow-hidden rounded-xl hover-lift cursor-pointer">
                <div className="aspect-[4/3]">
                  <img 
                    src={project.image} 
                    alt={language === 'ar' ? project.titleAr : project.titleEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {language === 'ar' ? project.titleAr : project.titleEn}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {language === 'ar' ? project.descAr : project.descEn}
                  </p>
                </div>
                {/* Default title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
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
