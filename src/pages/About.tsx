import { Users, Target, Eye, Award, Truck, Shield, Clock, Building, FileCheck, Phone, Mail, Scale, Briefcase, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/trucks/truck-10.jpeg';

const About = () => {
  const { t, language } = useLanguage();

  const stats = [
    { value: '40+', label: t('about.yearsExperience') },
    { value: '5000+', label: t('about.projectsCompleted') },
    { value: '200+', label: t('about.happyClients') },
    { value: '50+', label: t('about.fleetSize') },
  ];

  const reasons = [
    { icon: Users, title: t('about.reason1'), desc: t('about.reason1Text') },
    { icon: Truck, title: t('about.reason2'), desc: t('about.reason2Text') },
    { icon: Shield, title: t('about.reason3'), desc: t('about.reason3Text') },
    { icon: Clock, title: t('about.reason4'), desc: t('about.reason4Text') },
  ];

  const registrationInfo = [
    { 
      label: language === 'ar' ? 'الاسم القانوني' : 'Legal Name', 
      value: language === 'ar' ? 'شركة هادي وسعيد فزعان القحطاني' : 'Hadi & Saeed Fazaan Al-Qahtani Company' 
    },
    { 
      label: language === 'ar' ? 'السجل التجاري' : 'Commercial Registration (CR)', 
      value: '2050042846' 
    },
    { 
      label: language === 'ar' ? 'رقم الشركة' : 'Company Number', 
      value: '7001464457' 
    },
    { 
      label: language === 'ar' ? 'النشاط التجاري' : 'Business Activity', 
      value: language === 'ar' ? 'نقل البضائع بالطرق' : 'Road Freight Transportation' 
    },
    { 
      label: language === 'ar' ? 'المنطقة' : 'Region', 
      value: language === 'ar' ? 'المنطقة الشرقية' : 'Eastern Province' 
    },
    { 
      label: language === 'ar' ? 'المدينة' : 'City', 
      value: language === 'ar' ? 'الدمام' : 'Dammam' 
    },
  ];

  const owners = [
    { 
      role: language === 'ar' ? 'مالك' : 'Owner', 
      name: language === 'ar' ? 'سعيد القحطاني' : 'Saeed Al-Qahtani',
    },
    { 
      role: language === 'ar' ? 'مالك' : 'Owner', 
      name: language === 'ar' ? 'هادي القحطاني' : 'Hadi Al-Qahtani',
    },
  ];

  const teamMembers = [
    { 
      role: language === 'ar' ? 'مدير العمليات' : 'Operation Manager', 
      name: language === 'ar' ? 'محمد حامد محمد' : 'Mohamed Hamed Mohamed',
      phone: '0535557874'
    },
    { 
      role: language === 'ar' ? 'مدير التطوير' : 'Development Manager', 
      name: language === 'ar' ? 'فيصل سعيد القحطاني' : 'Faisal Saeed Al-Qahtani',
      phone: '0560676302'
    },
    { 
      role: language === 'ar' ? 'الموارد البشرية' : 'Human Resources', 
      name: language === 'ar' ? 'عيسى الريشدي' : 'Essa El-Rishady',
      phone: '0507679998'
    },
  ];

  const licenses = [
    {
      icon: Building,
      title: language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce',
      desc: language === 'ar' 
        ? 'مرخصة لممارسة نشاط نقل البضائع بالطرق (الفرع الرئيسي)'
        : 'Licensed to practice Road Freight Transportation (Main Branch)'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources',
      desc: language === 'ar'
        ? 'معتمدة لاستيفاء نسب السعودة (نطاقات)'
        : 'Certified for meeting Saudization (Nitaqat) ratios'
    },
    {
      icon: FileCheck,
      title: language === 'ar' ? 'هيئة الزكاة والضريبة والجمارك' : 'ZATCA',
      desc: language === 'ar'
        ? 'مسجلة كدافع ضرائب مع شهادات إخلاء طرف رسمية'
        : 'Registered taxpayer with official clearance certificates'
    },
    {
      icon: Scale,
      title: language === 'ar' ? 'ضريبة القيمة المضافة' : 'Value Added Tax (VAT)',
      desc: language === 'ar'
        ? 'مسجلة رسمياً في نظام ضريبة القيمة المضافة'
        : 'Officially registered in the VAT system'
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'المؤسسة العامة للتأمينات الاجتماعية' : 'GOSI',
      desc: language === 'ar'
        ? 'مسجلة بالكامل مع موظفين مؤمن عليهم'
        : 'Fully registered with insured employees'
    },
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gold">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">{t('about.companyProfile')}</h2>
              
              {/* Company Name Highlight */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl mb-8 text-start">
                <h3 className="text-xl font-bold text-primary mb-2">
                  {language === 'ar' ? 'شركة هادي وسعيد فزعان القحطاني' : 'Hadi & Saeed Fazaan Al-Qahtani Company'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === 'ar' 
                    ? 'المعروفة تجارياً باسم "هافكو" - HAFCO Big Movers'
                    : 'Trading as "HAFCO" - HAFCO Big Movers'}
                </p>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">{t('about.description')}</p>
              
              {/* Additional Company Info */}
              <p className="text-muted-foreground mt-4 leading-relaxed">
                {language === 'ar'
                  ? 'الشركة مسجلة تحت رقم السجل التجاري 2050042846 ومرخصة للعمل في مجال نقل البضائع بالطرق، وتقدم خدمات نقل ولوجستية احترافية وفقاً للمعايير التنظيمية المعتمدة. نحن فخورون بتاريخنا العريق في خدمة كبرى الشركات في المملكة العربية السعودية منذ أكثر من 40 عاماً.'
                  : 'The company is registered under Commercial Registration No. 2050042846 and is licensed to operate in the field of Road Freight Transportation, providing professional transportation and logistics services in accordance with approved regulatory standards. We are proud of our rich history serving major companies in Saudi Arabia for over 40 years.'}
              </p>
            </div>

            {/* Registration Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
              {registrationInfo.map((info, i) => (
                <div key={i} className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="font-bold text-primary">{info.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border hover-lift">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">{t('about.mission')}</h3>
              <p className="text-muted-foreground">{t('about.missionText')}</p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border hover-lift">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-4">{t('about.vision')}</h3>
              <p className="text-muted-foreground">{t('about.visionText')}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 bg-secondary rounded-xl mb-16">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Legal Status & Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('about.legalStatus')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {licenses.map((license, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border hover-lift">
                  <license.icon className="h-10 w-10 text-gold mb-4" />
                  <h4 className="font-bold text-primary mb-2">{license.title}</h4>
                  <p className="text-sm text-muted-foreground">{license.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">{t('about.teamTitle')}</h2>
            
            {/* Owners */}
            <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              {owners.map((owner, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border-2 border-gold text-center hover-lift">
                  <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="h-10 w-10 text-gold" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{owner.name}</h4>
                  <p className="text-gold text-sm font-semibold">{owner.role}</p>
                </div>
              ))}
            </div>

            {/* Team Members */}
            <div className="grid md:grid-cols-3 gap-6">
              {teamMembers.map((member, i) => (
                <div key={i} className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                  <p className="text-gold text-sm mb-3">{member.role}</p>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {member.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about.whyChoose')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => (
              <div key={i} className="bg-card p-6 rounded-xl border border-border text-center hover-lift">
                <reason.icon className="h-10 w-10 text-gold mx-auto mb-4" />
                <h4 className="font-bold mb-2">{reason.title}</h4>
                <p className="text-sm text-muted-foreground">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
