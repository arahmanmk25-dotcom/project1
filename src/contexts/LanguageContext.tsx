import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.work': 'Our Work',
    'nav.fleet': 'Our Fleet',
    'nav.contact': 'Contact Us',
    'nav.clients': 'Our Clients',
    'nav.getQuote': 'Get a Quote',

    // Hero
    'hero.title': 'HAFCO Big Movers',
    'hero.subtitle': '40+ Years of Excellence in Big Movers',
    'hero.description': 'Leading big movers and logistics company in Saudi Arabia, specializing in petroleum pipe transport, heavy equipment moving, and crane services.',
    'hero.cta': 'Get Started',
    'hero.learnMore': 'Learn More',

    // About
    'about.title': 'About HAFCO',
    'about.subtitle': 'Your Trusted Big Movers Partner Since 1980s',
    'about.description': 'Since 1984, brothers Hadi and Saeed Al-Qahtani have built HAFCO from a single-truck operation into one of the Eastern Province\'s most respected heavy transport specialists. Based in Dammam and fully licensed under Commercial Registration 2050042846, we move the oversized machinery, petroleum pipes, and industrial components that power Saudi Arabia\'s energy and infrastructure sectors. Four decades of continuous service to major corporations — from Aramco to international logistics partners — have taught us that reliability is not a slogan; it is a habit forged through thousands of safe, on-time deliveries.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To deliver what others cannot move — with engineering precision, unwavering safety standards, and a family-owned commitment to every client, every load, and every deadline.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To remain the Eastern Province\'s first choice for heavy transport and project logistics — expanding our capabilities while honoring the personal accountability and reliability that have defined HAFCO since 1984.',
    'about.yearsExperience': 'Years of Experience',
    'about.projectsCompleted': 'Projects Completed',
    'about.happyClients': 'Happy Clients',
    'about.fleetSize': 'Fleet Vehicles',
    'about.whyChoose': 'Why Choose HAFCO?',
    'about.reason1': 'Experienced Team',
    'about.reason1Text': 'Our skilled professionals have decades of experience in big movers.',
    'about.reason2': 'Modern Fleet',
    'about.reason2Text': 'State-of-the-art vehicles and equipment for safe transport.',
    'about.reason3': 'Safety First',
    'about.reason3Text': 'Rigorous safety protocols ensuring zero-incident deliveries.',
    'about.reason4': '24/7 Support',
    'about.reason4Text': 'Round-the-clock customer service for all your needs.',
    'about.companyProfile': 'Company Profile',
    'about.legalStatus': 'Legal Status & Regulatory Compliance',
    'about.registrationInfo': 'Company Registration Information',
    'about.teamTitle': 'Our Team',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Big Movers Solutions',
    'services.heavy.title': 'Big Equipment Transport',
    'services.heavy.description': 'When the load is too big, too heavy, or too valuable to leave to chance, we move it. From transformers and turbines to reactors and industrial modules, our low-bed and multi-axle fleet carries hundreds of tons across the Kingdom — backed by route surveys, escort vehicles, and every permit secured in advance. Four decades of experience turn complex moves into routine ones.',
    'services.petroleum.title': 'Petroleum Pipe Transport',
    'services.petroleum.description': 'Thirty-meter pipes demand more than a truck — they demand precision. Our dedicated pipe carriers, custom fastening systems, and seasoned drivers deliver for the Kingdom\'s largest pipeline and oil & gas contractors, arriving on schedule and in flawless condition. Every delivery is timed to the rhythm of the project, so construction never waits on logistics.',
    'services.crane.title': 'Crane Services',
    'services.crane.description': 'Lifting is a discipline of millimeters. Our mobile crane fleet and certified operators handle everything from steel erection and precast placement to plant shutdowns and equipment positioning — with safety protocols that meet international standards and a track record trusted by industrial leaders. Precision lifts, executed with calm and care.',
    'services.logistics.title': 'Logistics Solutions',
    'services.logistics.description': 'Behind every successful move is a team that thought of everything first. We plan the route, secure the permits, coordinate the convoys, and track the cargo in real time — managing the entire journey of oversized and heavy shipments from site assessment to final positioning. Complex by design, seamless by execution.',
    'services.learnMore': 'Learn More',

    // Work/Portfolio
    'work.title': 'Our Work',
    'work.subtitle': 'Trusted by Industry Leaders',
    'work.description': 'We\'ve successfully completed thousands of projects for major companies including Aramco, DB-Schenker, Agility, and more.',
    'work.projectsTitle': 'Featured Projects',
    'work.clientsTitle': 'Our Clients',

    // Fleet
    'fleet.title': 'Our Fleet',
    'fleet.subtitle': 'Modern & Powerful Equipment',
    'fleet.description': 'Our fleet of specialized vehicles and equipment enables us to handle any big movers challenge with precision and safety.',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in Touch',
    'contact.description': 'Ready to discuss your big movers needs? Contact us today for a free quote.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Service Required',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.form.selectService': 'Select a service',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Dammam, Eastern Province, Saudi Arabia',
    'contact.info.email': 'hafcobigmovers@gmail.com',
    'contact.info.phone1': '0535557874',
    'contact.info.phone2': '0560676302',
    'contact.info.phone3': '0504826306',
    'contact.info.hours': 'Working Hours',
    'contact.info.hoursText': 'Saturday - Thursday: 8:00 AM - 6:00 PM',
    'contact.location': 'Our Location',

    // Footer
    'footer.description': 'Leading big movers company in Saudi Arabia with 40+ years of experience.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Common
    'common.loading': 'Loading...',
    'common.error': 'Something went wrong',
    'common.success': 'Success!',
    'common.viewAll': 'View All',
    'common.readMore': 'Read More',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.work': 'أعمالنا',
    'nav.fleet': 'أسطولنا',
    'nav.contact': 'اتصل بنا',
    'nav.clients': 'عملاؤنا',
    'nav.getQuote': 'احصل على عرض سعر',

    // Hero
    'hero.title': 'هافكو · للنقل الثقيل',
    'hero.subtitle': 'أربعون عاماً من إتقان النقل العام والثقيل',
    'hero.description': 'شركة سعودية رائدة في النقل العام والثقيل والخدمات اللوجستية، تتخصّص في نقل أنابيب البترول والمعدّات العملاقة وخدمات الرافعات في طول المملكة وعرضها.',
    'hero.cta': 'ابدأ الآن',
    'hero.learnMore': 'اعرف المزيد',

    // About
    'about.title': 'عن هافكو',
    'about.subtitle': 'شريكك الموثوق في النقل الثقيل منذ الثمانينات',
    'about.description': 'منذ عام ١٩٨٤، حوّل الأخوان هادي وسعيد القحطاني شركة هافكو من عملية تعتمد شاحنةً واحدةً إلى واحدة من أكثر شركات النقل الثقيل موثوقية في المنطقة الشرقية. ومقرنا الدمام، ونحمل ترخيصاً كاملاً تحت السجل التجاري ٢٠٥٠٠٤٢٨٤٦، ننقل المعدات الضخمة وأنابيب البترول والمكونات الصناعية التي تُشغّل قطاعات الطاقة والبنية التحتية في المملكة. أربعة عقود من الخدمة المتواصلة لكبرى الشركات — من أرامكو إلى شركاء اللوجستيات الدوليين — علّمتنا أن الموثوقية ليست شعاراً؛ إنها عادةٌ تُصاغ عبر آلاف عمليات التسليم الآمنة والموثوقة.',
    'about.mission': 'مهمتنا',
    'about.missionText': 'أن نُنجز ما لا يستطيع غيرنا نقله — بدقة هندسية، ومعايير سلامة راسخة، وبعزيمة مؤسسة عائلية تُكمل كل مشروع بإتقان.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نبقى الخيار الأول في المنطقة الشرقية للنقل الثقيل والخدمات اللوجستية للمشاريع — مُطوّرين قدراتنا دون أن نفرّط بالموثوقية والمسؤولية الشخصية التي بنت اسم هافكو منذ عام ١٩٨٤.',
    'about.yearsExperience': 'سنوات الخبرة',
    'about.projectsCompleted': 'مشاريع منجزة',
    'about.happyClients': 'عملاء سعداء',
    'about.fleetSize': 'مركبات الأسطول',
    'about.whyChoose': 'لماذا تختار هافكو؟',
    'about.reason1': 'فريق متمرس',
    'about.reason1Text': 'محترفونا المهرة يملكون عقوداً من الخبرة في النقل العام والثقيل.',
    'about.reason2': 'أسطول حديث',
    'about.reason2Text': 'مركبات ومعدات حديثة للنقل الآمن.',
    'about.reason3': 'السلامة أولاً',
    'about.reason3Text': 'بروتوكولات سلامة صارمة تضمن عمليات تسليم بدون حوادث.',
    'about.reason4': 'دعم على مدار الساعة',
    'about.reason4Text': 'خدمة عملاء على مدار الساعة لجميع احتياجاتك.',
    'about.companyProfile': 'ملف الشركة',
    'about.legalStatus': 'الوضع القانوني والامتثال التنظيمي',
    'about.registrationInfo': 'معلومات تسجيل الشركة',
    'about.teamTitle': 'فريقنا',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول متكاملة للنقل العام والثقيل',
    'services.heavy.title': 'نقل المعدات الكبيرة',
    'services.heavy.description': 'حين تكون الحمولة أكبر من أن تُترك للصدفة، نتولّى نقلها. من المحوّلات والتوربينات إلى المفاعلات والوحدات الصناعية، يحمل أسطولنا من المقطورات منخفضة السطح ومتعددة المحاور مئات الأطنان عبر المملكة، مدعوماً بمسوحات الطرق ومركبات المرافقة وكل التصاريح المُجهّزة سلفاً. أربعة عقود من الخبرة تجعل المهام المعقّدة عملاً يومياً.',
    'services.petroleum.title': 'نقل أنابيب البترول',
    'services.petroleum.description': 'أنابيب بطول ثلاثين متراً تتطلّب أكثر من مجرد شاحنة — تتطلّب دقّة. مقطوراتنا المخصّصة وأنظمة التثبيت المصمَّمة وسائقونا المخضرمون يخدمون كبرى شركات خطوط الأنابيب والنفط والغاز في المملكة، فتصل كل شحنة في موعدها وبحالة لا تشوبها شائبة. كل تسليم يسير على إيقاع المشروع، فلا ينتظر البناء اللوجستيات أبداً.',
    'services.crane.title': 'خدمات الرافعات',
    'services.crane.description': 'الرفع فنّ يُقاس بالملّيمترات. أسطولنا من الرافعات المتنقّلة ومشغّلوها المعتمدون يتولّون نصب الهياكل الفولاذية ووضع العناصر الجاهزة وعمليات إيقاف المصانع وتموضع المعدات — وفق بروتوكولات سلامة بمعايير دولية وسجلّ يثق به روّاد الصناعة. رفعٌ دقيق يُنفَّذ بهدوء وعناية.',
    'services.logistics.title': 'الحلول اللوجستية',
    'services.logistics.description': 'خلف كل نقلة ناجحة فريق فكّر في كل شيء أولاً. نخطّط الطريق، ونؤمّن التصاريح، وننسّق القوافل، ونتتبّع الحمولة لحظة بلحظة — مديرين رحلة الشحنات كبيرة الحجم والثقيلة من تقييم الموقع حتى التموضع النهائي. معقّدة بطبيعتها، سلسة بتنفيذنا.',
    'services.learnMore': 'اعرف المزيد',

    // Work/Portfolio
    'work.title': 'أعمالنا',
    'work.subtitle': 'موثوق به من قبل رواد الصناعة',
    'work.description': 'أنجزنا بنجاح آلاف المشاريع لشركات كبرى بما في ذلك أرامكو ودي بي شنكر وأجيليتي وغيرها.',
    'work.projectsTitle': 'مشاريع مميزة',
    'work.clientsTitle': 'عملاؤنا',

    // Fleet
    'fleet.title': 'أسطولنا',
    'fleet.subtitle': 'معدات حديثة وقوية',
    'fleet.description': 'أسطولنا من المركبات والمعدّات المتخصّصة يُمكّننا من مواجهة أصعب تحدّيات النقل العام والثقيل بدقّةٍ وأمان.',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا',
    'contact.description': 'هل أنت مستعدّ لمناقشة احتياجاتك في النقل العام والثقيل؟ تواصل معنا اليوم للحصول على عرض سعرٍ مجاني.',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.service': 'الخدمة المطلوبة',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.selectService': 'اختر خدمة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.address': 'الدمام، المنطقة الشرقية، المملكة العربية السعودية',
    'contact.info.email': 'hafcobigmovers@gmail.com',
    'contact.info.phone1': '0535557874',
    'contact.info.phone2': '0560676302',
    'contact.info.phone3': '0504826306',
    'contact.info.hours': 'ساعات العمل',
    'contact.info.hoursText': 'السبت - الخميس: 8:00 صباحاً - 6:00 مساءً',
    'contact.location': 'موقعنا',

    // Footer
    'footer.description': 'شركة سعودية رائدة في النقل العام والثقيل، بإرثٍ يمتدّ لأكثر من أربعين عاماً في خدمة كبرى الشركات في المملكة.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',

    // Common
    'common.loading': 'جاري التحميل...',
    'common.error': 'حدث خطأ ما',
    'common.success': 'تم بنجاح!',
    'common.viewAll': 'عرض الكل',
    'common.readMore': 'اقرأ المزيد',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('hafco-language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguageState(savedLang);
    }
  }, []);

  useEffect(() => {
    // Update document direction and lang attribute
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('hafco-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
