import { useLanguage } from '@/contexts/LanguageContext';
import truck1 from '@/assets/trucks/truck-1.jpeg';
import truck2 from '@/assets/trucks/truck-2.jpeg';
import truck3 from '@/assets/trucks/truck-3.jpeg';
import truck4 from '@/assets/trucks/truck-4.jpeg';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import truck6 from '@/assets/trucks/truck-6.jpeg';
import truck7 from '@/assets/trucks/truck-7.jpeg';
import truck8 from '@/assets/trucks/truck-8.jpeg';
import truck9 from '@/assets/trucks/truck-9.jpeg';
import truck10 from '@/assets/trucks/truck-10.jpeg';
import truck11 from '@/assets/trucks/truck-11.jpeg';
import truck12 from '@/assets/trucks/truck-12.jpeg';
import truck13 from '@/assets/trucks/truck-13.jpeg';
import truck14 from '@/assets/trucks/truck-14.jpeg';
import truck15 from '@/assets/trucks/truck-15.jpeg';
import truck16 from '@/assets/trucks/truck-16.jpeg';
import truck17 from '@/assets/trucks/truck-17.jpeg';

const heroImage = truck7;

const Fleet = () => {
  const { t, language } = useLanguage();

  const fleetImages = [
    { 
      src: truck5, 
      title: language === 'ar' ? 'نقل خزان ضخم' : 'Massive Tank Transport',
    },
    { 
      src: truck6, 
      title: language === 'ar' ? 'نقل الأسطوانات الصناعية' : 'Industrial Cylinder Transport',
    },
    { 
      src: truck7, 
      title: language === 'ar' ? 'نقل المعدات الكبيرة' : 'Big Equipment Moving',
    },
    { 
      src: truck1, 
      title: language === 'ar' ? 'نقل الأنابيب الطويلة' : 'Long Pipe Transport',
    },
    { 
      src: truck2, 
      title: language === 'ar' ? 'شاحنة مرسيدس أكتروس' : 'Mercedes Actros Truck',
    },
    { 
      src: truck3, 
      title: language === 'ar' ? 'تحميل البضائع' : 'Cargo Loading',
    },
    { 
      src: truck4, 
      title: language === 'ar' ? 'نقل الهياكل المعدنية' : 'Steel Structure Transport',
    },
    { 
      src: truck8, 
      title: language === 'ar' ? 'شاحنة فولفو' : 'Volvo Truck',
    },
    { 
      src: truck9, 
      title: language === 'ar' ? 'شاحنة مرسيدس صفراء' : 'Yellow Mercedes Truck',
    },
    { 
      src: truck10, 
      title: language === 'ar' ? 'فريق العمل' : 'Our Team at Work',
    },
    { 
      src: truck11, 
      title: language === 'ar' ? 'عمليات التحميل' : 'Loading Operations',
    },
    { 
      src: truck12, 
      title: language === 'ar' ? 'خدمات الرافعات' : 'Crane Services',
    },
    { 
      src: truck13, 
      title: language === 'ar' ? 'نقل الأنابيب الكبيرة' : 'Large Pipe Transport',
    },
    { 
      src: truck14, 
      title: language === 'ar' ? 'نقل الجسور' : 'Bridge Transport',
    },
    { 
      src: truck15, 
      title: language === 'ar' ? 'نقل أنابيب البترول' : 'Petroleum Pipe Transport',
    },
    { 
      src: truck16, 
      title: language === 'ar' ? 'نقل الأنابيب المزدوجة' : 'Double Pipe Transport',
    },
    { 
      src: truck17, 
      title: language === 'ar' ? 'شاحنة MAN الحمراء' : 'Red MAN Truck',
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('fleet.title')}</h1>
          <p className="text-xl text-gold">{t('fleet.subtitle')}</p>
        </div>
      </section>

      {/* Fleet Description */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{t('fleet.description')}</p>
        </div>
      </section>

      {/* Fleet Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fleetImages.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold mb-2">50+</div>
              <div className="text-white/80">{language === 'ar' ? 'شاحنة' : 'Trucks'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">30m</div>
              <div className="text-white/80">{language === 'ar' ? 'أقصى طول حمولة' : 'Max Cargo Length'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">200+</div>
              <div className="text-white/80">{language === 'ar' ? 'طن قدرة الرفع' : 'Ton Lifting Capacity'}</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold mb-2">24/7</div>
              <div className="text-white/80">{language === 'ar' ? 'خدمة متواصلة' : 'Service Available'}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
