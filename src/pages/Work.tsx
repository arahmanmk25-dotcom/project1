import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';
import HoverTruckAnimation from '@/components/shared/HoverTruckAnimation';
import ClientsCarousel from '@/components/home/ClientsCarousel';
import ClientsBackgroundAnimation from '@/components/home/ClientsBackgroundAnimation';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';

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
import pipe48_1 from '@/assets/trucks/pipe-48-1.jpeg';
import pipe48_2 from '@/assets/trucks/pipe-48-2.jpeg';
import pipe48_3 from '@/assets/trucks/pipe-48-3.jpeg';
import pipe48_4 from '@/assets/trucks/pipe-48-4.jpeg';
import pipe48_5 from '@/assets/trucks/pipe-48-5.jpeg';
const Work = () => {
  const { t, language } = useLanguage();
  const { isOpen, currentIndex, openLightbox, closeLightbox, navigate } = useLightbox();

  const latestProject = {
    titleEn: '48" Petroleum Coating Pipe 25m',
    titleAr: 'أنبوب بترولي مطلي ٤٨ بوصة ٢٥ متر',
    descEn: 'Transport of 48-inch diameter, 25-meter petroleum coating pipes with specialized flatbed trailers and secure fastening systems.',
    descAr: 'نقل أنابيب بترولية مطلية بقطر ٤٨ بوصة وطول ٢٥ متر بمقطورات مسطحة متخصصة وأنظمة تثبيت آمنة.',
    images: [pipe48_1, pipe48_2, pipe48_3],
  };

  const projects = [
    { titleEn: '29m Crane Arm Transport', titleAr: 'نقل ذراع كرين ٢٩ متر', descEn: 'Specialized night transport of a 29-meter crane arm using our flagship HAFCO MAN truck with extended lowbed trailer.', descAr: 'نقل متخصص ليلي لذراع كرين بطول ٢٩ متر باستخدام شاحنة HAFCO MAN مع مقطورة لوبيد ممتدة.', image: workNew20 },
    { titleEn: 'Aramco Excavator Relocation', titleAr: 'نقل حفارة أرامكو', descEn: 'Heavy excavator transport for Aramco oil field operations. Secured with industrial chains on our specialized lowbed trailer.', descAr: 'نقل حفارة ثقيلة لعمليات حقول نفط أرامكو. مثبتة بسلاسل صناعية على مقطورة لوبيد متخصصة.', image: workImg1 },
    { titleEn: 'SABIC Industrial Machinery', titleAr: 'آلات سابك الصناعية', descEn: 'Delivery of petrochemical processing equipment to SABIC facility in Jubail Industrial City.', descAr: 'توصيل معدات معالجة بتروكيماوية إلى منشأة سابك في مدينة الجبيل الصناعية.', image: workImg2 },
    { titleEn: '30m Petroleum Pipes - Eastern Province', titleAr: 'أنابيب بترولية ٣٠م - المنطقة الشرقية', descEn: 'Transport of 30-meter coated petroleum pipeline sections from Dammam port to Ras Tanura refinery.', descAr: 'نقل أقسام أنابيب بترولية مطلية بطول ٣٠ متر من ميناء الدمام إلى مصفاة رأس تنورة.', image: workImg3 },
    { titleEn: 'Oversized Generator - Riyadh Power Plant', titleAr: 'مولد ضخم - محطة طاقة الرياض', descEn: '150-ton industrial generator transported with police escort from Jeddah port to Riyadh power station.', descAr: 'نقل مولد صناعي وزنه ١٥٠ طن مع مرافقة شرطية من ميناء جدة إلى محطة طاقة الرياض.', image: workImg4 },
    { titleEn: 'Steel Rebar Bundles - NEOM Project', titleAr: 'حزم حديد التسليح - مشروع نيوم', descEn: 'Multiple truck convoy delivering reinforcement steel for NEOM mega-construction project.', descAr: 'قافلة شاحنات متعددة لتوصيل حديد التسليح لمشروع نيوم الضخم.', image: workImg5 },
    { titleEn: 'Bridge Steel Frames - King Fahd Causeway', titleAr: 'إطارات جسور فولاذية - جسر الملك فهد', descEn: 'Precision delivery of prefabricated steel bridge sections for infrastructure expansion.', descAr: 'توصيل دقيق لأقسام جسور فولاذية مسبقة الصنع لتوسيع البنية التحتية.', image: workImg6 },
    { titleEn: 'Cement Plant Crusher - Yanbu', titleAr: 'كسارة مصنع أسمنت - ينبع', descEn: '80-ton rock crusher safely relocated to Yanbu cement manufacturing facility.', descAr: 'نقل آمن لكسارة صخور وزنها ٨٠ طن إلى منشأة تصنيع الأسمنت في ينبع.', image: workImg7 },
    
    { titleEn: 'Modular Refinery Units - Ras Tanura', titleAr: 'وحدات مصفاة معيارية - رأس تنورة', descEn: 'Complete logistics for modular refinery equipment installation project.', descAr: 'خدمات لوجستية كاملة لمشروع تركيب معدات مصفاة معيارية.', image: workImg9 },
    { titleEn: 'Transformer Transport - SEC Project', titleAr: 'نقل محولات - مشروع الكهرباء', descEn: 'High-voltage electrical transformers delivered to Saudi Electricity Company substations.', descAr: 'توصيل محولات كهربائية عالية الجهد إلى محطات شركة الكهرباء السعودية.', image: workImg10 },
    { titleEn: 'Mining Dump Truck Body', titleAr: 'هيكل شاحنة تعدين', descEn: 'Oversized mining truck body transported to Maaden gold mining operations.', descAr: 'نقل هيكل شاحنة تعدين ضخم إلى عمليات تعدين الذهب التابعة لمعادن.', image: workImg11 },
    { titleEn: 'Highway Expansion Beams - Dammam', titleAr: 'عوارض توسعة الطريق السريع - الدمام', descEn: 'Precast concrete beams for Dammam-Riyadh highway expansion project.', descAr: 'عوارض خرسانية مسبقة الصب لمشروع توسعة طريق الدمام-الرياض السريع.', image: workImg12 },
    { titleEn: 'Solar Panel Frames - Sakaka', titleAr: 'إطارات ألواح شمسية - سكاكا', descEn: 'Steel mounting structures for Saudi Arabia largest solar power plant.', descAr: 'هياكل تركيب فولاذية لأكبر محطة طاقة شمسية في السعودية.', image: workImg13 },
    { titleEn: 'LNG Tank Sections - Yanbu Port', titleAr: 'أقسام خزان غاز مسال - ميناء ينبع', descEn: 'Massive LNG storage tank components delivered for port expansion.', descAr: 'توصيل مكونات خزان غاز طبيعي مسال ضخم لتوسيع الميناء.', image: workImg14 },
    { titleEn: 'Crane Boom - Jeddah Construction', titleAr: 'ذراع رافعة - بناء جدة', descEn: '45-meter tower crane boom safely transported through urban areas to high-rise construction site.', descAr: 'نقل آمن لذراع رافعة برجية بطول ٤٥ متر عبر المناطق الحضرية إلى موقع بناء ناطحة سحاب.', image: workImg15 },
    { titleEn: 'Multi-Truck Pipe Convoy', titleAr: 'قافلة أنابيب متعددة الشاحنات', descEn: '12-truck coordinated convoy delivering water pipeline for irrigation project.', descAr: 'قافلة منسقة من ١٢ شاحنة لتوصيل خطوط مياه لمشروع ري.', image: workImg16 },
    { titleEn: 'Factory Equipment - Sudair Industrial', titleAr: 'معدات مصنع - سدير الصناعية', descEn: 'Complete production line machinery delivered to new manufacturing facility.', descAr: 'توصيل آلات خط إنتاج كامل إلى منشأة تصنيع جديدة.', image: workImg17 },
    { titleEn: 'Wind Turbine Blade - Red Sea', titleAr: 'شفرة توربين رياح - البحر الأحمر', descEn: '65-meter wind turbine blade transported for Red Sea renewable energy project.', descAr: 'نقل شفرة توربين رياح بطول ٦٥ متر لمشروع الطاقة المتجددة في البحر الأحمر.', image: workImg18 },
    { titleEn: 'Bulldozer Fleet Relocation', titleAr: 'نقل أسطول جرافات', descEn: 'Multiple heavy bulldozers relocated from completed project to new site.', descAr: 'نقل جرافات ثقيلة متعددة من مشروع مكتمل إلى موقع جديد.', image: workImg19 },
    { titleEn: 'Container Crane Components', titleAr: 'مكونات رافعة حاويات', descEn: 'Port crane assembly parts delivered for King Abdullah Port expansion.', descAr: 'توصيل أجزاء تجميع رافعة ميناء لتوسعة ميناء الملك عبدالله.', image: workImg20 },
    { titleEn: 'Offshore Platform Modules', titleAr: 'وحدات منصة بحرية', descEn: 'Fabricated offshore platform sections transported from yard to port for installation.', descAr: 'نقل أقسام منصة بحرية مصنعة من الورشة إلى الميناء للتركيب.', image: workImg21 },
    { titleEn: 'Pressure Vessel - Petrochemical', titleAr: 'وعاء ضغط - بتروكيماويات', descEn: '120-ton pressure vessel delivered to petrochemical complex in Jubail.', descAr: 'توصيل وعاء ضغط وزنه ١٢٠ طن إلى مجمع بتروكيماويات الجبيل.', image: workNew11 },
    { titleEn: 'Storage Tank - Water Authority', titleAr: 'خزان تخزين - هيئة المياه', descEn: 'Large water storage tank installed for municipal water supply project.', descAr: 'تركيب خزان مياه كبير لمشروع إمداد المياه البلدية.', image: workNew12 },
    { titleEn: 'Coated Pipeline - Gas Network', titleAr: 'أنابيب مطلية - شبكة الغاز', descEn: 'Anti-corrosion coated pipes for national gas distribution network expansion.', descAr: 'أنابيب مطلية ضد التآكل لتوسيع شبكة توزيع الغاز الوطنية.', image: workNew13 },
    { titleEn: 'I-Beam Loading - Steel Factory', titleAr: 'تحميل عوارض حديدية - مصنع فولاذ', descEn: 'Structural I-beams loaded for delivery to major construction project.', descAr: 'تحميل عوارض إنشائية للتوصيل إلى مشروع بناء كبير.', image: workNew14 },
    { titleEn: 'Large Diameter Pipe - Oil Field', titleAr: 'أنابيب قطر كبير - حقل نفط', descEn: '48-inch diameter pipeline sections for oil field infrastructure.', descAr: 'أقسام أنابيب بقطر ٤٨ بوصة للبنية التحتية لحقول النفط.', image: workNew15 },
    { titleEn: 'API Steel Pipes - Aramco Contract', titleAr: 'أنابيب فولاذية API - عقد أرامكو', descEn: 'API-certified steel pipes delivered under Aramco long-term supply contract.', descAr: 'توصيل أنابيب فولاذية معتمدة API ضمن عقد توريد طويل الأجل مع أرامكو.', image: workNew16 },
    { titleEn: 'Night Convoy - Urgent Delivery', titleAr: 'قافلة ليلية - توصيل عاجل', descEn: 'Emergency overnight convoy for time-critical project materials.', descAr: 'قافلة طوارئ ليلية لمواد مشروع حرجة الوقت.', image: workNew17 },
    { titleEn: 'Bridge Girder - Metro Project', titleAr: 'عارضة جسر - مشروع مترو', descEn: 'Precast bridge girder for Riyadh Metro infrastructure development.', descAr: 'عارضة جسر مسبقة الصب لتطوير البنية التحتية لمترو الرياض.', image: workNew18 },
    { titleEn: 'Prestressed Concrete Beam', titleAr: 'عارضة خرسانية مسبقة الإجهاد', descEn: 'Heavy prestressed concrete beam for flyover bridge construction.', descAr: 'عارضة خرسانية ثقيلة مسبقة الإجهاد لبناء جسر علوي.', image: workNew19 },
  ];

  // Build lightbox images: latest project first, then grid projects
  const lightboxImages: { src: string; title: string; description: string }[] = [];
  
  // Add latest project images
  const latestLightboxStart = 0;
  latestProject.images.forEach((img, imgIdx) => {
    lightboxImages.push({
      src: img,
      title: (language === 'ar' ? latestProject.titleAr : latestProject.titleEn) + ` (${imgIdx + 1}/${latestProject.images.length})`,
      description: language === 'ar' ? latestProject.descAr : latestProject.descEn,
    });
  });

  // Add grid project images
  const cardToLightboxIndex: number[] = [];
  projects.forEach((project) => {
    cardToLightboxIndex.push(lightboxImages.length);
    lightboxImages.push({
      src: project.image,
      title: language === 'ar' ? project.titleAr : project.titleEn,
      description: language === 'ar' ? project.descAr : project.descEn,
    });
  });

  return (
    <PageTransition>
      <div>
        {/* Hero - Full viewport editorial */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-16">
          <HeroSlideshow images={[workImg1, workImg3, workImg5, workNew20, workImg15]} interval={8000} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                {language === 'ar' ? 'أعمالنا' : 'OUR WORK'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">{t('work.title')}</h1>
              <p className="text-xl text-white/70 mt-4 max-w-2xl">{t('work.subtitle')}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-xl text-muted-foreground leading-relaxed">{t('work.description')}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Latest Project - Featured */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'أحدث مشروع' : 'LATEST PROJECT'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  {language === 'ar' ? latestProject.titleAr : latestProject.titleEn}
                </h2>
              </ScrollReveal>

              <ScrollReveal variant="fadeUp" delay={0.1}>
                <div
                  className="relative rounded-2xl overflow-hidden cursor-pointer group h-[50vh] min-h-[400px]"
                  onClick={() => openLightbox(latestLightboxStart)}
                >
                  <HeroSlideshow images={latestProject.images} interval={5000} showTrucks={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
                      {language === 'ar' ? latestProject.descAr : latestProject.descEn}
                    </p>
                    <p className="text-gold font-semibold mt-4 text-sm tracking-wide uppercase group-hover:underline">
                      {language === 'ar' ? 'اضغط لعرض الصور' : 'Click to view photos'} ({latestProject.images.length})
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* All Projects - Clean grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'معرض المشاريع' : 'PROJECT GALLERY'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">{t('work.projectsTitle')}</h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={(i % 3) * 0.08}>
                    <div
                      className="relative group overflow-hidden rounded-xl cursor-pointer"
                      onClick={() => openLightbox(cardToLightboxIndex[i])}
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={project.image}
                          alt={language === 'ar' ? project.titleAr : project.titleEn}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
                        <HoverTruckAnimation />
                        <h3 className="text-lg font-bold text-white mb-1 relative z-20">
                          {language === 'ar' ? project.titleAr : project.titleEn}
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed relative z-20 line-clamp-2">
                          {language === 'ar' ? project.descAr : project.descEn}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="text-white font-bold">
                          {language === 'ar' ? project.titleAr : project.titleEn}
                        </h3>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-20 bg-primary overflow-hidden relative">
          <ClientsBackgroundAnimation />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold/80 font-semibold tracking-widest uppercase text-sm text-center mb-3">
                {language === 'ar' ? 'شركاؤنا' : 'OUR PARTNERS'}
              </p>
              <h2 className="text-3xl font-bold text-center text-white mb-4">{t('work.clientsTitle')}</h2>
              <p className="text-white/50 text-center mb-10 max-w-xl mx-auto">
                {language === 'ar'
                  ? 'نفخر بخدمة أكبر الشركات في المملكة العربية السعودية والمنطقة'
                  : 'Proud to serve the largest companies in Saudi Arabia and the region'}
              </p>
            </ScrollReveal>
          </div>
          <ClientsCarousel />
        </section>

        {/* Spacer */}
        <section className="py-8 bg-secondary" />

        <Lightbox
          images={lightboxImages}
          isOpen={isOpen}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={navigate}
        />
      </div>
    </PageTransition>
  );
};

export default Work;
