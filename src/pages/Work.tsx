import { useLanguage } from '@/contexts/LanguageContext';

// Work/Projects - new images
import workImg1 from '@/assets/trucks/work-img-1.jpeg';
import workImg2 from '@/assets/trucks/work-img-2.jpeg';
import workImg3 from '@/assets/trucks/work-img-3.jpeg';
import workImg4 from '@/assets/trucks/work-img-4.jpeg';
import workImg5 from '@/assets/trucks/work-img-5.jpg';
import workImg6 from '@/assets/trucks/work-img-6.jpg';
import workImg7 from '@/assets/trucks/work-img-7.jpg';
import workImg8 from '@/assets/trucks/work-img-8.jpg';
import workImg9 from '@/assets/trucks/work-img-9.jpg';
import workImg10 from '@/assets/trucks/work-img-10.jpg';
import workImg11 from '@/assets/trucks/work-img-11.jpg';
import workImg12 from '@/assets/trucks/work-img-12.jpg';
import workImg13 from '@/assets/trucks/work-img-13.jpg';
import workImg14 from '@/assets/trucks/work-img-14.jpg';
import workImg15 from '@/assets/trucks/work-img-15.jpg';
import workImg16 from '@/assets/trucks/work-img-16.jpg';
import workImg17 from '@/assets/trucks/work-img-17.jpg';
import workImg18 from '@/assets/trucks/work-img-18.jpg';
import workImg19 from '@/assets/trucks/work-img-19.jpg';
import workImg20 from '@/assets/trucks/work-img-20.jpg';
import workImg21 from '@/assets/trucks/work-img-21.jpg';

const Work = () => {
  const { t, language } = useLanguage();

  const projects = [
    { 
      titleEn: 'Heavy Equipment Transport',
      titleAr: 'نقل المعدات الثقيلة',
      descEn: 'Professional transport of heavy industrial equipment and machinery.',
      descAr: 'نقل احترافي للمعدات والآلات الصناعية الثقيلة.',
      image: workImg1 
    },
    { 
      titleEn: 'Industrial Cargo Delivery',
      titleAr: 'توصيل البضائع الصناعية',
      descEn: 'Safe and efficient delivery of industrial cargo across Saudi Arabia.',
      descAr: 'توصيل آمن وفعال للبضائع الصناعية في جميع أنحاء المملكة.',
      image: workImg2 
    },
    { 
      titleEn: 'Pipeline Transport',
      titleAr: 'نقل خطوط الأنابيب',
      descEn: 'Specialized transport of pipeline sections for oil and gas projects.',
      descAr: 'نقل متخصص لأقسام خطوط الأنابيب لمشاريع النفط والغاز.',
      image: workImg3 
    },
    { 
      titleEn: 'Oversized Load Transport',
      titleAr: 'نقل الأحمال كبيرة الحجم',
      descEn: 'Expert handling of oversized and heavy loads with specialized equipment.',
      descAr: 'تعامل خبير مع الأحمال كبيرة الحجم والثقيلة بمعدات متخصصة.',
      image: workImg4 
    },
    { 
      titleEn: 'Construction Materials',
      titleAr: 'مواد البناء',
      descEn: 'Reliable transport of construction materials to project sites.',
      descAr: 'نقل موثوق لمواد البناء إلى مواقع المشاريع.',
      image: workImg5 
    },
    { 
      titleEn: 'Steel Structure Delivery',
      titleAr: 'توصيل الهياكل الفولاذية',
      descEn: 'Professional delivery of steel structures and beams.',
      descAr: 'توصيل احترافي للهياكل والعوارض الفولاذية.',
      image: workImg6 
    },
    { 
      titleEn: 'Heavy Machinery Moving',
      titleAr: 'نقل الآلات الثقيلة',
      descEn: 'Safe relocation of heavy industrial machinery.',
      descAr: 'نقل آمن للآلات الصناعية الثقيلة.',
      image: workImg7 
    },
    { 
      titleEn: 'Industrial Equipment',
      titleAr: 'المعدات الصناعية',
      descEn: 'Transport of various industrial equipment and components.',
      descAr: 'نقل مختلف المعدات والمكونات الصناعية.',
      image: workImg8 
    },
    { 
      titleEn: 'Project Logistics',
      titleAr: 'لوجستيات المشاريع',
      descEn: 'Comprehensive logistics solutions for major projects.',
      descAr: 'حلول لوجستية شاملة للمشاريع الكبرى.',
      image: workImg9 
    },
    { 
      titleEn: 'Heavy Load Operations',
      titleAr: 'عمليات الأحمال الثقيلة',
      descEn: 'Coordinated heavy load transport operations.',
      descAr: 'عمليات نقل الأحمال الثقيلة المنسقة.',
      image: workImg10 
    },
    { 
      titleEn: 'Specialized Transport',
      titleAr: 'النقل المتخصص',
      descEn: 'Specialized transport services for unique cargo requirements.',
      descAr: 'خدمات نقل متخصصة لمتطلبات الشحن الفريدة.',
      image: workImg11 
    },
    { 
      titleEn: 'Infrastructure Projects',
      titleAr: 'مشاريع البنية التحتية',
      descEn: 'Supporting major infrastructure development projects.',
      descAr: 'دعم مشاريع تطوير البنية التحتية الكبرى.',
      image: workImg12 
    },
    { 
      titleEn: 'Energy Sector Transport',
      titleAr: 'نقل قطاع الطاقة',
      descEn: 'Dedicated transport services for the energy sector.',
      descAr: 'خدمات نقل مخصصة لقطاع الطاقة.',
      image: workImg13 
    },
    { 
      titleEn: 'Oil & Gas Logistics',
      titleAr: 'لوجستيات النفط والغاز',
      descEn: 'Complete logistics solutions for oil and gas industry.',
      descAr: 'حلول لوجستية كاملة لصناعة النفط والغاز.',
      image: workImg14 
    },
    { 
      titleEn: 'Heavy Cargo Solutions',
      titleAr: 'حلول البضائع الثقيلة',
      descEn: 'Comprehensive heavy cargo transport solutions.',
      descAr: 'حلول شاملة لنقل البضائع الثقيلة.',
      image: workImg15 
    },
    { 
      titleEn: 'Fleet Operations',
      titleAr: 'عمليات الأسطول',
      descEn: 'Coordinated fleet operations for large-scale projects.',
      descAr: 'عمليات أسطول منسقة للمشاريع واسعة النطاق.',
      image: workImg16 
    },
    { 
      titleEn: 'Industrial Delivery',
      titleAr: 'التوصيل الصناعي',
      descEn: 'Timely delivery of industrial materials and equipment.',
      descAr: 'توصيل المواد والمعدات الصناعية في الوقت المحدد.',
      image: workImg17 
    },
    { 
      titleEn: 'Project Transport',
      titleAr: 'نقل المشاريع',
      descEn: 'End-to-end transport solutions for project requirements.',
      descAr: 'حلول نقل شاملة لمتطلبات المشاريع.',
      image: workImg18 
    },
    { 
      titleEn: 'Heavy Equipment Handling',
      titleAr: 'مناولة المعدات الثقيلة',
      descEn: 'Expert handling and transport of heavy equipment.',
      descAr: 'مناولة ونقل خبير للمعدات الثقيلة.',
      image: workImg19 
    },
    { 
      titleEn: 'Cargo Management',
      titleAr: 'إدارة البضائع',
      descEn: 'Professional cargo management and transport services.',
      descAr: 'خدمات إدارة ونقل البضائع الاحترافية.',
      image: workImg20 
    },
    { 
      titleEn: 'Transport Excellence',
      titleAr: 'التميز في النقل',
      descEn: 'Delivering excellence in heavy transport services.',
      descAr: 'تقديم التميز في خدمات النقل الثقيل.',
      image: workImg21 
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
          style={{ backgroundImage: `url(${workImg1})` }}
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
