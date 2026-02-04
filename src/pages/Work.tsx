import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';

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
import workNew11 from '@/assets/trucks/work-new-11.jpg';
import workNew12 from '@/assets/trucks/work-new-12.jpg';
import workNew13 from '@/assets/trucks/work-new-13.jpg';
import workNew14 from '@/assets/trucks/work-new-14.jpg';
import workNew15 from '@/assets/trucks/work-new-15.jpg';
import workNew16 from '@/assets/trucks/work-new-16.jpg';
import workNew17 from '@/assets/trucks/work-new-17.jpg';
import workNew18 from '@/assets/trucks/work-new-18.jpg';
import workNew19 from '@/assets/trucks/work-new-19.jpg';
import workNew20 from '@/assets/trucks/work-new-20.jpg';

const Work = () => {
  const { t, language } = useLanguage();
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigate } = useLightbox();

  // Latest/Featured Project
  const latestProject = { 
    titleEn: '29m Crane Arm Transport',
    titleAr: 'نقل ذراع كرين ٢٩ متر',
    descEn: 'Specialized night transport of a 29-meter crane arm using our flagship HAFCO MAN truck with extended lowbed trailer. This challenging operation required expert coordination, secure fastening with heavy-duty chains, and careful route planning for safe oversized load delivery.',
    descAr: 'نقل متخصص ليلي لذراع كرين بطول ٢٩ متر باستخدام شاحنة HAFCO MAN مع مقطورة لوبيد ممتدة. هذه العملية الصعبة تطلبت تنسيق خبراء، تثبيت آمن بسلاسل شديدة التحمل، وتخطيط دقيق للمسار لتوصيل الحمولة كبيرة الحجم بأمان.',
    image: workNew20
  };

  const projects = [
    { 
      titleEn: 'Aramco Excavator Relocation',
      titleAr: 'نقل حفارة أرامكو',
      descEn: 'Heavy excavator transport for Aramco oil field operations. Secured with industrial chains on our specialized lowbed trailer.',
      descAr: 'نقل حفارة ثقيلة لعمليات حقول نفط أرامكو. مثبتة بسلاسل صناعية على مقطورة لوبيد متخصصة.',
      image: workImg1 
    },
    { 
      titleEn: 'SABIC Industrial Machinery',
      titleAr: 'آلات سابك الصناعية',
      descEn: 'Delivery of petrochemical processing equipment to SABIC facility in Jubail Industrial City.',
      descAr: 'توصيل معدات معالجة بتروكيماوية إلى منشأة سابك في مدينة الجبيل الصناعية.',
      image: workImg2 
    },
    { 
      titleEn: '30m Petroleum Pipes - Eastern Province',
      titleAr: 'أنابيب بترولية ٣٠م - المنطقة الشرقية',
      descEn: 'Transport of 30-meter coated petroleum pipeline sections from Dammam port to Ras Tanura refinery.',
      descAr: 'نقل أقسام أنابيب بترولية مطلية بطول ٣٠ متر من ميناء الدمام إلى مصفاة رأس تنورة.',
      image: workImg3 
    },
    { 
      titleEn: 'Oversized Generator - Riyadh Power Plant',
      titleAr: 'مولد ضخم - محطة طاقة الرياض',
      descEn: '150-ton industrial generator transported with police escort from Jeddah port to Riyadh power station.',
      descAr: 'نقل مولد صناعي وزنه ١٥٠ طن مع مرافقة شرطية من ميناء جدة إلى محطة طاقة الرياض.',
      image: workImg4 
    },
    { 
      titleEn: 'Steel Rebar Bundles - NEOM Project',
      titleAr: 'حزم حديد التسليح - مشروع نيوم',
      descEn: 'Multiple truck convoy delivering reinforcement steel for NEOM mega-construction project.',
      descAr: 'قافلة شاحنات متعددة لتوصيل حديد التسليح لمشروع نيوم الضخم.',
      image: workImg5 
    },
    { 
      titleEn: 'Bridge Steel Frames - King Fahd Causeway',
      titleAr: 'إطارات جسور فولاذية - جسر الملك فهد',
      descEn: 'Precision delivery of prefabricated steel bridge sections for infrastructure expansion.',
      descAr: 'توصيل دقيق لأقسام جسور فولاذية مسبقة الصنع لتوسيع البنية التحتية.',
      image: workImg6 
    },
    { 
      titleEn: 'Cement Plant Crusher - Yanbu',
      titleAr: 'كسارة مصنع أسمنت - ينبع',
      descEn: '80-ton rock crusher safely relocated to Yanbu cement manufacturing facility.',
      descAr: 'نقل آمن لكسارة صخور وزنها ٨٠ طن إلى منشأة تصنيع الأسمنت في ينبع.',
      image: workImg7 
    },
    { 
      titleEn: 'Desalination Pumps - Jubail',
      titleAr: 'مضخات تحلية - الجبيل',
      descEn: 'Large-scale water pumping units delivered to Jubail desalination plant.',
      descAr: 'توصيل وحدات ضخ مياه كبيرة إلى محطة تحلية الجبيل.',
      image: workImg8 
    },
    { 
      titleEn: 'Modular Refinery Units - Ras Tanura',
      titleAr: 'وحدات مصفاة معيارية - رأس تنورة',
      descEn: 'Complete logistics for modular refinery equipment installation project.',
      descAr: 'خدمات لوجستية كاملة لمشروع تركيب معدات مصفاة معيارية.',
      image: workImg9 
    },
    { 
      titleEn: 'Transformer Transport - SEC Project',
      titleAr: 'نقل محولات - مشروع الكهرباء',
      descEn: 'High-voltage electrical transformers delivered to Saudi Electricity Company substations.',
      descAr: 'توصيل محولات كهربائية عالية الجهد إلى محطات شركة الكهرباء السعودية.',
      image: workImg10 
    },
    { 
      titleEn: 'Mining Dump Truck Body',
      titleAr: 'هيكل شاحنة تعدين',
      descEn: 'Oversized mining truck body transported to Maaden gold mining operations.',
      descAr: 'نقل هيكل شاحنة تعدين ضخم إلى عمليات تعدين الذهب التابعة لمعادن.',
      image: workImg11 
    },
    { 
      titleEn: 'Highway Expansion Beams - Dammam',
      titleAr: 'عوارض توسعة الطريق السريع - الدمام',
      descEn: 'Precast concrete beams for Dammam-Riyadh highway expansion project.',
      descAr: 'عوارض خرسانية مسبقة الصب لمشروع توسعة طريق الدمام-الرياض السريع.',
      image: workImg12 
    },
    { 
      titleEn: 'Solar Panel Frames - Sakaka',
      titleAr: 'إطارات ألواح شمسية - سكاكا',
      descEn: 'Steel mounting structures for Saudi Arabia largest solar power plant.',
      descAr: 'هياكل تركيب فولاذية لأكبر محطة طاقة شمسية في السعودية.',
      image: workImg13 
    },
    { 
      titleEn: 'LNG Tank Sections - Yanbu Port',
      titleAr: 'أقسام خزان غاز مسال - ميناء ينبع',
      descEn: 'Massive LNG storage tank components delivered for port expansion.',
      descAr: 'توصيل مكونات خزان غاز طبيعي مسال ضخم لتوسيع الميناء.',
      image: workImg14 
    },
    { 
      titleEn: 'Crane Boom - Jeddah Construction',
      titleAr: 'ذراع رافعة - بناء جدة',
      descEn: '45-meter tower crane boom safely transported through urban areas to high-rise construction site.',
      descAr: 'نقل آمن لذراع رافعة برجية بطول ٤٥ متر عبر المناطق الحضرية إلى موقع بناء ناطحة سحاب.',
      image: workImg15 
    },
    { 
      titleEn: 'Multi-Truck Pipe Convoy',
      titleAr: 'قافلة أنابيب متعددة الشاحنات',
      descEn: '12-truck coordinated convoy delivering water pipeline for irrigation project.',
      descAr: 'قافلة منسقة من ١٢ شاحنة لتوصيل خطوط مياه لمشروع ري.',
      image: workImg16 
    },
    { 
      titleEn: 'Factory Equipment - Sudair Industrial',
      titleAr: 'معدات مصنع - سدير الصناعية',
      descEn: 'Complete production line machinery delivered to new manufacturing facility.',
      descAr: 'توصيل آلات خط إنتاج كامل إلى منشأة تصنيع جديدة.',
      image: workImg17 
    },
    { 
      titleEn: 'Wind Turbine Blade - Red Sea',
      titleAr: 'شفرة توربين رياح - البحر الأحمر',
      descEn: '65-meter wind turbine blade transported for Red Sea renewable energy project.',
      descAr: 'نقل شفرة توربين رياح بطول ٦٥ متر لمشروع الطاقة المتجددة في البحر الأحمر.',
      image: workImg18 
    },
    { 
      titleEn: 'Bulldozer Fleet Relocation',
      titleAr: 'نقل أسطول جرافات',
      descEn: 'Multiple heavy bulldozers relocated from completed project to new site.',
      descAr: 'نقل جرافات ثقيلة متعددة من مشروع مكتمل إلى موقع جديد.',
      image: workImg19 
    },
    { 
      titleEn: 'Container Crane Components',
      titleAr: 'مكونات رافعة حاويات',
      descEn: 'Port crane assembly parts delivered for King Abdullah Port expansion.',
      descAr: 'توصيل أجزاء تجميع رافعة ميناء لتوسعة ميناء الملك عبدالله.',
      image: workImg20 
    },
    { 
      titleEn: 'Offshore Platform Modules',
      titleAr: 'وحدات منصة بحرية',
      descEn: 'Fabricated offshore platform sections transported from yard to port for installation.',
      descAr: 'نقل أقسام منصة بحرية مصنعة من الورشة إلى الميناء للتركيب.',
      image: workImg21 
    },
    { 
      titleEn: 'Pressure Vessel - Petrochemical',
      titleAr: 'وعاء ضغط - بتروكيماويات',
      descEn: '120-ton pressure vessel delivered to petrochemical complex in Jubail.',
      descAr: 'توصيل وعاء ضغط وزنه ١٢٠ طن إلى مجمع بتروكيماويات الجبيل.',
      image: workNew11 
    },
    { 
      titleEn: 'Storage Tank - Water Authority',
      titleAr: 'خزان تخزين - هيئة المياه',
      descEn: 'Large water storage tank installed for municipal water supply project.',
      descAr: 'تركيب خزان مياه كبير لمشروع إمداد المياه البلدية.',
      image: workNew12 
    },
    { 
      titleEn: 'Coated Pipeline - Gas Network',
      titleAr: 'أنابيب مطلية - شبكة الغاز',
      descEn: 'Anti-corrosion coated pipes for national gas distribution network expansion.',
      descAr: 'أنابيب مطلية ضد التآكل لتوسيع شبكة توزيع الغاز الوطنية.',
      image: workNew13 
    },
    { 
      titleEn: 'I-Beam Loading - Steel Factory',
      titleAr: 'تحميل عوارض حديدية - مصنع فولاذ',
      descEn: 'Structural I-beams loaded for delivery to major construction project.',
      descAr: 'تحميل عوارض إنشائية للتوصيل إلى مشروع بناء كبير.',
      image: workNew14 
    },
    { 
      titleEn: 'Large Diameter Pipe - Oil Field',
      titleAr: 'أنابيب قطر كبير - حقل نفط',
      descEn: '48-inch diameter pipeline sections for oil field infrastructure.',
      descAr: 'أقسام أنابيب بقطر ٤٨ بوصة للبنية التحتية لحقول النفط.',
      image: workNew15 
    },
    { 
      titleEn: 'API Steel Pipes - Aramco Contract',
      titleAr: 'أنابيب فولاذية API - عقد أرامكو',
      descEn: 'API-certified steel pipes delivered under Aramco long-term supply contract.',
      descAr: 'توصيل أنابيب فولاذية معتمدة API ضمن عقد توريد طويل الأجل مع أرامكو.',
      image: workNew16 
    },
    { 
      titleEn: 'Night Convoy - Urgent Delivery',
      titleAr: 'قافلة ليلية - توصيل عاجل',
      descEn: 'Emergency overnight convoy for time-critical project materials.',
      descAr: 'قافلة طوارئ ليلية لمواد مشروع حرجة الوقت.',
      image: workNew17 
    },
    { 
      titleEn: 'Bridge Girder - Metro Project',
      titleAr: 'عارضة جسر - مشروع مترو',
      descEn: 'Precast bridge girder for Riyadh Metro infrastructure development.',
      descAr: 'عارضة جسر مسبقة الصب لتطوير البنية التحتية لمترو الرياض.',
      image: workNew18 
    },
    { 
      titleEn: 'Prestressed Concrete Beam',
      titleAr: 'عارضة خرسانية مسبقة الإجهاد',
      descEn: 'Heavy prestressed concrete beam for flyover bridge construction.',
      descAr: 'عارضة خرسانية ثقيلة مسبقة الإجهاد لبناء جسر علوي.',
      image: workNew19 
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

  const allProjectsForLightbox = [latestProject, ...projects];
  
  const lightboxImages = allProjectsForLightbox.map(project => ({
    src: project.image,
    title: language === 'ar' ? project.titleAr : project.titleEn,
    description: language === 'ar' ? project.descAr : project.descEn
  }));

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${workImg1})` }}
        />
        <FloatingTrucksBackground truckCount={25} particleCount={20} />
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

      {/* Latest Project Featured Section */}
      <section className="py-12 bg-gradient-to-b from-gold/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {language === 'ar' ? 'أحدث مشاريعنا' : 'Our Latest Project'}
            </h2>
          </div>
          
          <div 
            className="relative group overflow-hidden rounded-xl cursor-pointer ring-2 ring-gold shadow-lg shadow-gold/20 max-w-4xl mx-auto"
            onClick={() => openLightbox(0)}
          >
            <div className="aspect-video">
              <img 
                src={latestProject.image} 
                alt={language === 'ar' ? latestProject.titleAr : latestProject.titleEn} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {language === 'ar' ? latestProject.titleAr : latestProject.titleEn}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {language === 'ar' ? latestProject.descAr : latestProject.descEn}
              </p>
            </div>
            {/* Default title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl md:text-2xl text-white font-bold">
                {language === 'ar' ? latestProject.titleAr : latestProject.titleEn}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('work.projectsTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden rounded-xl hover-lift cursor-pointer"
                onClick={() => openLightbox(i + 1)}
              >
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

      {/* Lightbox */}
      <Lightbox
        images={lightboxImages}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={closeLightbox}
        onNavigate={navigate}
      />
    </div>
  );
};

export default Work;
