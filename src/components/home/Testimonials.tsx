import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';

const testimonials = [
  {
    name: { en: 'Ahmed Al-Rashid', ar: 'أحمد الراشد' },
    role: { en: 'Operations Manager, Aramco Contractor', ar: 'مدير العمليات، مقاول أرامكو' },
    text: {
      en: 'HAFCO has been our go-to partner for heavy equipment transport. Their professionalism and on-time delivery are unmatched in the region.',
      ar: 'هافكو هي شريكنا المفضل لنقل المعدات الثقيلة. احترافيتهم والتسليم في الوقت المحدد لا مثيل لهما في المنطقة.',
    },
    rating: 5,
  },
  {
    name: { en: 'Mohammed Al-Harbi', ar: 'محمد الحربي' },
    role: { en: 'Project Director, SAIPEM', ar: 'مدير المشاريع، سايبم' },
    text: {
      en: 'We\'ve worked with HAFCO on multiple pipeline projects. Their specialized fleet and experienced crew ensure safe delivery every time.',
      ar: 'عملنا مع هافكو في العديد من مشاريع الأنابيب. أسطولهم المتخصص وطاقمهم ذو الخبرة يضمنان التسليم الآمن في كل مرة.',
    },
    rating: 5,
  },
  {
    name: { en: 'Khalid Bin Saeed', ar: 'خالد بن سعيد' },
    role: { en: 'Logistics Coordinator, DHL', ar: 'منسق لوجستي، دي إتش إل' },
    text: {
      en: 'Reliable, efficient, and always willing to go the extra mile. HAFCO is a trusted name in Saudi heavy transport.',
      ar: 'موثوقون وفعالون ودائماً مستعدون لبذل جهد إضافي. هافكو اسم موثوق في النقل الثقيل السعودي.',
    },
    rating: 5,
  },
];

const Testimonials = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <ScrollReveal variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {language === 'ar' ? 'آراء عملائنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === 'ar'
                ? 'ثقة عملائنا هي أعظم إنجازاتنا'
                : 'Our clients\' trust is our greatest achievement'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} variant="fadeUp" delay={i * 0.15}>
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover-lift h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground flex-1 mb-6 leading-relaxed">
                  "{t.text[language]}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{t.name[language]}</p>
                  <p className="text-sm text-muted-foreground">{t.role[language]}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
