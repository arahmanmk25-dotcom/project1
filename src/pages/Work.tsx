import { useLanguage } from '@/contexts/LanguageContext';
import { Lightbox, useLightbox } from '@/components/ui/lightbox';

import ClientsGrid from '@/components/home/ClientsGrid';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';
import RoadDivider from '@/components/shared/RoadDivider';

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
    images: [pipe48_1, pipe48_2, pipe48_3, pipe48_4, pipe48_5],
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
    { titleEn: 'Industrial Vessels & Storage Tanks', titleAr: 'أوعية صناعية وخزانات تخزين', descEn: 'Heavy-haul of 120-ton pressure vessels for Jubail petrochemical complexes and large-scale water storage tanks for municipal supply projects.', descAr: 'نقل ثقيل لأوعية ضغط بوزن ١٢٠ طن لمجمعات بتروكيماويات الجبيل وخزانات مياه كبيرة لمشاريع الإمداد البلدية.', image: workNew11 },
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

        {/* Slogan - editorial */}
        <section className="py-24 md:py-32 bg-[#fbfaf6]">
          <div className="container mx-auto px-4">
            <ScrollReveal variant="fadeUp">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-gold font-semibold tracking-[0.4em] uppercase text-[11px] mb-6">
                  {language === 'ar' ? 'سجلّ إنجازاتنا' : 'OUR RECORD'}
                </p>
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-12 bg-gold/60" />
                  <span className="text-gold text-xs">✦</span>
                  <div className="h-px w-12 bg-gold/60" />
                </div>
                <h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-[1.15]"
                  style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                >
                  {language === 'ar'
                    ? 'كل مشروع علامة، وكل نقلة بصمة.'
                    : 'Every project a milestone. Every move a mark.'}
                </h2>
                <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t('work.description')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Latest Project - Editorial feature */}
        <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px w-12 bg-gold" />
                  <p className="text-gold font-semibold tracking-[0.35em] uppercase text-[11px]">
                    {language === 'ar' ? 'أحدث مشروع' : 'LATEST PROJECT'}
                  </p>
                  <div className="h-px flex-1 bg-gold/30" />
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* Image with gold frame */}
                <ScrollReveal variant="fadeUp" delay={0.05} className="lg:col-span-7">
                  <div
                    className="relative group cursor-pointer p-4 md:p-6 bg-card"
                    onClick={() => openLightbox(latestLightboxStart)}
                  >
                    {/* Outer gold rule */}
                    <div className="absolute inset-0 border border-gold/60 pointer-events-none" />
                    {/* Inner gold rule */}
                    <div className="absolute inset-2 md:inset-3 border border-gold/30 pointer-events-none" />
                    {/* Corner ornaments */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold pointer-events-none" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold pointer-events-none" />
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold pointer-events-none" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold pointer-events-none" />

                    <div className="relative overflow-hidden aspect-[4/3]">
                      <HeroSlideshow images={latestProject.images} interval={5000} showTrucks={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent pointer-events-none" />
                      {/* Photo count badge */}
                      <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-card/95 px-3 py-1.5 border border-gold/50">
                        <span className="font-stencil text-[10px] tracking-[0.25em] uppercase text-primary">
                          {latestProject.images.length} {language === 'ar' ? 'صور' : 'Photos'}
                        </span>
                      </div>
                    </div>

                    {/* Caption plate */}
                    <div className="flex items-center justify-center gap-3 pt-4 pb-1">
                      <div className="h-px w-8 bg-gold/60" />
                      <span className="text-gold/80 text-[10px] tracking-[0.4em] uppercase font-semibold">
                        {language === 'ar' ? 'مجموعة هافكو' : 'HAFCO ARCHIVE'}
                      </span>
                      <div className="h-px w-8 bg-gold/60" />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal variant="fadeUp" delay={0.1} className="lg:col-span-5">
                  <div>
                    <span className="font-serif-display italic text-7xl lg:text-8xl text-gold/30 leading-none block mb-2">
                      ★
                    </span>
                    <h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-[1.1] mb-6"
                      style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                    >
                      {language === 'ar' ? latestProject.titleAr : latestProject.titleEn}
                    </h3>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px w-8 bg-gold" />
                      <span className="text-gold/70 text-[10px]">✦</span>
                      <div className="h-px w-16 bg-gold/40" />
                    </div>
                    <p className="text-base lg:text-lg text-muted-foreground leading-[1.9] font-light mb-8">
                      {language === 'ar' ? latestProject.descAr : latestProject.descEn}
                    </p>
                    <button
                      onClick={() => openLightbox(latestLightboxStart)}
                      className="group inline-flex items-center gap-3 text-primary border-b border-gold pb-2 hover:border-primary transition-colors duration-300"
                    >
                      <span className="font-semibold text-xs tracking-[0.3em] uppercase">
                        {language === 'ar' ? 'عرض المعرض' : 'View Gallery'}
                      </span>
                      <span className={`text-gold group-hover:translate-x-1 transition-transform ${language === 'ar' ? 'rotate-180' : ''}`}>→</span>
                    </button>
                  </div>
                </ScrollReveal>
              </div>
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
                      className="lux-card group cursor-pointer !p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                      onClick={() => openLightbox(cardToLightboxIndex[i])}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={project.image}
                          alt={language === 'ar' ? project.titleAr : project.titleEn}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      <div className="pt-4 pb-2 px-3 text-center">
                        <span className="lux-fleuron block mb-1">— ❦ —</span>
                        <h3
                          className="font-serif-display text-base md:text-lg font-bold text-primary leading-tight"
                          style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                        >
                          {language === 'ar' ? project.titleAr : project.titleEn}
                        </h3>
                        <p
                          className="mt-2 text-[13px] text-muted-foreground leading-relaxed line-clamp-2"
                          style={{ fontFamily: language === 'ar' ? "'HafcoDigits', 'Amiri', serif" : "'HafcoDigits', 'Playfair Display', serif" }}
                        >
                          {language === 'ar' ? project.descAr : project.descEn}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clients - styled section matching Home */}
        <section className="py-24 bg-primary overflow-hidden relative">
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--gold)) 0 1px, transparent 1px 40px)' }} />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollReveal variant="fadeUp">
              <div className="text-center mb-16 space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-gold/50" />
                  <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase">
                    {language === 'ar' ? 'شركاؤنا' : 'Our Partners'}
                  </span>
                  <div className="h-px w-8 bg-gold/50" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display italic text-white tracking-tight">
                  {t('work.clientsTitle')}
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto font-light">
                  {language === 'ar'
                    ? 'نفخر بخدمة أكبر الشركات في المملكة العربية السعودية والمنطقة'
                    : 'Proud to serve the largest companies in Saudi Arabia and the region'}
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ClientsGrid />
        </section>

        {/* Animated road divider before footer */}
        <RoadDivider
          labelEn="ON THE ROAD"
          labelAr="على الطريق"
          originEn="DAMMAM"
          originAr="الدمام"
          destinationEn="KSA WIDE"
          destinationAr="كل المملكة"
        />

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
