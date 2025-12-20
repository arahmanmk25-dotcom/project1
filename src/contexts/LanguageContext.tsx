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
    'about.description': 'Hadi & Saeed Fazaan Al-Qahtani Company is a duly established Saudi enterprise operating in the Eastern Province of the Kingdom of Saudi Arabia, with its head office located in Dammam. The company is officially registered with the competent authorities and conducts its activities in full compliance with the laws and regulations of the Kingdom.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To provide safe, reliable, and efficient big movers solutions that exceed our clients\' expectations while maintaining the highest standards of professionalism.',
    'about.vision': 'Our Vision',
    'about.visionText': 'To be the leading big movers company in the Middle East, known for innovation, reliability, and customer satisfaction.',
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
    'services.heavy.description': 'Safe and efficient transport of heavy machinery, industrial equipment, and oversized loads across Saudi Arabia.',
    'services.petroleum.title': 'Petroleum Pipe Transport',
    'services.petroleum.description': 'Specialized transport of petroleum pipes up to 30 meters in length with precision handling.',
    'services.crane.title': 'Crane Services',
    'services.crane.description': 'Professional crane lifting and moving services for construction and industrial projects.',
    'services.logistics.title': 'Logistics Solutions',
    'services.logistics.description': 'End-to-end logistics management including route planning, permits, and coordination.',
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
    'nav.getQuote': 'احصل على عرض سعر',

    // Hero
    'hero.title': 'هافكو للنقليات الكبيرة',
    'hero.subtitle': 'أكثر من 40 عاماً من التميز في النقليات الكبيرة',
    'hero.description': 'شركة رائدة في النقليات الكبيرة والخدمات اللوجستية في المملكة العربية السعودية، متخصصة في نقل أنابيب البترول والمعدات الثقيلة وخدمات الرافعات.',
    'hero.cta': 'ابدأ الآن',
    'hero.learnMore': 'اعرف المزيد',

    // About
    'about.title': 'عن هافكو',
    'about.subtitle': 'شريكك الموثوق في النقليات الكبيرة منذ الثمانينات',
    'about.description': 'شركة هادي وسعيد فزعان القحطاني هي مؤسسة سعودية قائمة حسب الأصول تعمل في المنطقة الشرقية من المملكة العربية السعودية، ومقرها الرئيسي في الدمام. الشركة مسجلة رسمياً لدى الجهات المختصة وتمارس أنشطتها بما يتوافق مع أنظمة ولوائح المملكة.',
    'about.mission': 'مهمتنا',
    'about.missionText': 'تقديم حلول نقليات كبيرة آمنة وموثوقة وفعالة تتجاوز توقعات عملائنا مع الحفاظ على أعلى معايير الاحترافية.',
    'about.vision': 'رؤيتنا',
    'about.visionText': 'أن نكون الشركة الرائدة في النقليات الكبيرة في الشرق الأوسط، معروفة بالابتكار والموثوقية ورضا العملاء.',
    'about.yearsExperience': 'سنوات الخبرة',
    'about.projectsCompleted': 'مشاريع منجزة',
    'about.happyClients': 'عملاء سعداء',
    'about.fleetSize': 'مركبات الأسطول',
    'about.whyChoose': 'لماذا تختار هافكو؟',
    'about.reason1': 'فريق متمرس',
    'about.reason1Text': 'محترفونا المهرة لديهم عقود من الخبرة في النقليات الكبيرة.',
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
    'services.subtitle': 'حلول نقليات كبيرة شاملة',
    'services.heavy.title': 'نقل المعدات الكبيرة',
    'services.heavy.description': 'نقل آمن وفعال للآلات الثقيلة والمعدات الصناعية والأحمال كبيرة الحجم في جميع أنحاء المملكة العربية السعودية.',
    'services.petroleum.title': 'نقل أنابيب البترول',
    'services.petroleum.description': 'نقل متخصص لأنابيب البترول حتى 30 متراً مع مناولة دقيقة.',
    'services.crane.title': 'خدمات الرافعات',
    'services.crane.description': 'خدمات رفع ونقل احترافية بالرافعات للمشاريع الإنشائية والصناعية.',
    'services.logistics.title': 'الحلول اللوجستية',
    'services.logistics.description': 'إدارة لوجستية شاملة تشمل تخطيط الطرق والتصاريح والتنسيق.',
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
    'fleet.description': 'أسطولنا من المركبات والمعدات المتخصصة يمكننا من التعامل مع أي تحدي في النقليات الكبيرة بدقة وأمان.',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل معنا',
    'contact.description': 'هل أنت مستعد لمناقشة احتياجات النقليات الكبيرة الخاصة بك؟ اتصل بنا اليوم للحصول على عرض أسعار مجاني.',
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
    'footer.description': 'شركة رائدة في النقليات الكبيرة في المملكة العربية السعودية مع خبرة تزيد عن 40 عاماً.',
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
