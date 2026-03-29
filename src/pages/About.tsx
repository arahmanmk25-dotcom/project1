import { Users, Target, Eye, Award, Truck, Shield, Clock, Building, FileCheck, Phone, Mail, Scale, Briefcase, Crown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/trucks/truck-10.jpeg';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import workImg3 from '@/assets/trucks/work-img-3.jpeg';
import ScrollReveal from '@/components/shared/ScrollReveal';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';

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
    { label: language === 'ar' ? 'الاسم القانوني' : 'Legal Name', value: language === 'ar' ? 'شركة هادي وسعيد فزعان القحطاني' : 'Hadi & Saeed Fazaan Al-Qahtani Company' },
    { label: language === 'ar' ? 'السجل التجاري' : 'Commercial Registration (CR)', value: '2050042846' },
    { label: language === 'ar' ? 'رقم الشركة' : 'Company Number', value: '7001464457' },
    { label: language === 'ar' ? 'النشاط التجاري' : 'Business Activity', value: language === 'ar' ? 'نقل البضائع بالطرق' : 'Road Freight Transportation' },
    { label: language === 'ar' ? 'المنطقة' : 'Region', value: language === 'ar' ? 'المنطقة الشرقية' : 'Eastern Province' },
    { label: language === 'ar' ? 'المدينة' : 'City', value: language === 'ar' ? 'الدمام' : 'Dammam' },
  ];

  const owners = [
    { role: language === 'ar' ? 'مالك' : 'Owner', name: language === 'ar' ? 'سعيد القحطاني' : 'Saeed Al-Qahtani' },
    { role: language === 'ar' ? 'مالك' : 'Owner', name: language === 'ar' ? 'هادي القحطاني' : 'Hadi Al-Qahtani' },
  ];

  const topManagers = [
    { role: language === 'ar' ? 'مدير التشغيل' : 'Operation Manager', name: language === 'ar' ? 'محمد حامد محمد' : 'Mohamed Hamed Mohamed', phone: '0535557874' },
    { role: language === 'ar' ? 'مدير المالي و الاداري' : 'Financial & Administrative Manager', name: language === 'ar' ? 'مصطفى السيد حنطور' : 'Moustafa El Sayed Hantour', phone: '0580859588' },
  ];

  const middleManagers = [
    { role: language === 'ar' ? 'الرئيس التنفيذي للقطاع الهندسي' : 'Chief Engineering Officer', name: language === 'ar' ? 'عبدالهادي سعيد القحطاني' : 'Abdel Hadi Saeed Al-Qahtani', phone: '0553787824' },
    { role: language === 'ar' ? 'مدير التطوير' : 'Development Manager', name: language === 'ar' ? 'فيصل سعيد القحطاني' : 'Faisal Saeed Al-Qahtani', phone: '0560676302' },
  ];

  const bottomMembers = [
    { role: language === 'ar' ? 'الموارد البشرية' : 'Human Resources', name: language === 'ar' ? 'عيسى الراشدي' : 'Essa Al-Rashidy', phone: '0507679998' },
  ];

  const licenses = [
    { icon: Building, title: language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce', desc: language === 'ar' ? 'مرخصة لممارسة نشاط نقل البضائع بالطرق (الفرع الرئيسي)' : 'Licensed to practice Road Freight Transportation (Main Branch)' },
    { icon: Users, title: language === 'ar' ? 'وزارة الموارد البشرية والتنمية الاجتماعية' : 'Ministry of Human Resources', desc: language === 'ar' ? 'معتمدة لاستيفاء نسب السعودة (نطاقات)' : 'Certified for meeting Saudization (Nitaqat) ratios' },
    { icon: FileCheck, title: language === 'ar' ? 'هيئة الزكاة والضريبة والجمارك' : 'ZATCA', desc: language === 'ar' ? 'مسجلة كدافع ضرائب مع شهادات إخلاء طرف رسمية' : 'Registered taxpayer with official clearance certificates' },
    { icon: Scale, title: language === 'ar' ? 'ضريبة القيمة المضافة' : 'Value Added Tax (VAT)', desc: language === 'ar' ? 'مسجلة رسمياً في نظام ضريبة القيمة المضافة' : 'Officially registered in the VAT system' },
    { icon: Shield, title: language === 'ar' ? 'المؤسسة العامة للتأمينات الاجتماعية' : 'GOSI', desc: language === 'ar' ? 'مسجلة بالكامل مع موظفين مؤمن عليهم' : 'Fully registered with insured employees' },
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero - Full viewport with editorial feel */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-16">
          <HeroSlideshow images={[heroImage, truck5, workImg3]} interval={8000} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                {language === 'ar' ? 'من نحن' : 'ABOUT US'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {language === 'ar' ? 'إرث عريق منذ ١٩٨٤' : 'A Legacy Since 1984'}
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-2xl">
                {language === 'ar'
                  ? 'أكثر من ٤٠ عاماً من الخبرة في خدمة كبرى الشركات في المملكة العربية السعودية'
                  : 'Over 40 years of expertise serving the largest companies in Saudi Arabia'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Company Story - Editorial */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <div className="border-l-4 border-gold pl-8 mb-12">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {language === 'ar' ? 'شركة هادي وسعيد فزعان القحطاني' : 'Hadi & Saeed Fazaan Al-Qahtani Company'}
                  </h3>
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'المعروفة تجارياً باسم "هافكو" - HAFCO Big Movers' : 'Trading as "HAFCO" - HAFCO Big Movers'}
                  </p>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">{t('about.description')}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'الشركة مسجلة تحت رقم السجل التجاري 2050042846 ومرخصة للعمل في مجال نقل البضائع بالطرق، وتقدم خدمات نقل ولوجستية احترافية وفقاً للمعايير التنظيمية المعتمدة. نحن فخورون بتاريخنا العريق في خدمة كبرى الشركات في المملكة العربية السعودية منذ أكثر من 40 عاماً.'
                    : 'The company is registered under Commercial Registration No. 2050042846 and is licensed to operate in the field of Road Freight Transportation, providing professional transportation and logistics services in accordance with approved regulatory standards. We are proud of our rich history serving major companies in Saudi Arabia for over 40 years.'}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Registration Info - Clean grid */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {registrationInfo.map((info, i) => (
                <ScrollReveal key={i} variant="fadeUp" delay={i * 0.05}>
                  <div className="bg-card p-6 rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-primary">{info.value}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission - Side by side editorial */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-16">
                <ScrollReveal variant="fadeUp" delay={0}>
                  <div className="flex-1">
                    <Target className="h-10 w-10 text-gold mb-6" />
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('about.mission')}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{t('about.missionText')}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant="fadeUp" delay={0.15}>
                  <div className="flex-1">
                    <Eye className="h-10 w-10 text-gold mb-6" />
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('about.vision')}</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">{t('about.visionText')}</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Full-width Image Break with Stats Overlay */}
        <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
          <img src={truck5} alt="HAFCO Fleet" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <div className="text-white/70 text-xs uppercase tracking-widest font-medium">{stat.label}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Legal Status */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'الترخيص والامتثال' : 'LICENSING & COMPLIANCE'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">{t('about.legalStatus')}</h2>
              </ScrollReveal>
              <div className="space-y-8">
                {licenses.map((license, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.05}>
                    <div className="flex items-start gap-6 py-6 border-b border-border last:border-0">
                      <license.icon className="h-8 w-8 text-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">{license.title}</h4>
                        <p className="text-muted-foreground">{license.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                  {language === 'ar' ? 'فريقنا' : 'OUR TEAM'}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">{t('about.teamTitle')}</h2>
              </ScrollReveal>

              {/* Owners */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {owners.map((owner, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="bg-card p-8 rounded-xl border-2 border-gold text-center">
                      <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Crown className="h-10 w-10 text-gold" />
                      </div>
                      <h4 className="font-bold text-xl mb-1">{owner.name}</h4>
                      <p className="text-gold font-semibold">{owner.role}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Managers */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {topManagers.map((member, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="bg-card p-8 rounded-xl border border-border text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                      <p className="text-gold text-sm mb-3">{member.role}</p>
                      <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {middleManagers.map((member, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="bg-card p-8 rounded-xl border border-border text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                      <p className="text-gold text-sm mb-3">{member.role}</p>
                      <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <div className="grid md:grid-cols-1 max-w-md mx-auto gap-8">
                {bottomMembers.map((member, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="bg-card p-8 rounded-xl border border-border text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-1">{member.name}</h4>
                      <p className="text-gold text-sm mb-3">{member.role}</p>
                      <a href={`tel:${member.phone}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="h-4 w-4" />
                        {member.phone}
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Editorial list */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">{t('about.whyChoose')}</h2>
              </ScrollReveal>
              <div className="grid md:grid-cols-2 gap-12">
                {reasons.map((reason, i) => (
                  <ScrollReveal key={i} variant="fadeUp" delay={i * 0.1}>
                    <div className="flex gap-6">
                      <reason.icon className="h-8 w-8 text-gold shrink-0 mt-1" />
                      <div>
                        <h4 className="text-xl font-bold text-primary mb-2">{reason.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
