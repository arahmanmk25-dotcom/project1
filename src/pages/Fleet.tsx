import { useLanguage } from '@/contexts/LanguageContext';
import truck1 from '@/assets/trucks/truck-1.jpeg';
import truck2 from '@/assets/trucks/truck-2.jpeg';
import truck3 from '@/assets/trucks/truck-3.jpeg';
import truck4 from '@/assets/trucks/truck-4.jpeg';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import truck6 from '@/assets/trucks/truck-6.jpeg';
import truck7 from '@/assets/trucks/truck-7.jpeg';

const Fleet = () => {
  const { t, language } = useLanguage();

  const fleetImages = [
    { 
      src: truck5, 
      title: language === 'ar' ? 'نقل خزان ضخم' : 'Massive Tank Transport',
      desc: language === 'ar' ? 'نقل معدات صناعية ضخمة عبر الطرق السريعة' : 'Transporting massive industrial equipment across highways'
    },
    { 
      src: truck6, 
      title: language === 'ar' ? 'نقل الأسطوانات الصناعية' : 'Industrial Cylinder Transport',
      desc: language === 'ar' ? 'نقل متخصص للأسطوانات الصناعية الكبيرة' : 'Specialized transport of large industrial cylinders'
    },
    { 
      src: truck7, 
      title: language === 'ar' ? 'نقل المعدات الكبيرة' : 'Big Equipment Moving',
      desc: language === 'ar' ? 'نقل معدات المصانع والمنشآت الصناعية' : 'Moving factory and industrial facility equipment'
    },
    { 
      src: truck1, 
      title: language === 'ar' ? 'نقل الأنابيب الطويلة' : 'Long Pipe Transport',
      desc: language === 'ar' ? 'نقل أنابيب البترول والمعادن حتى 30 متر' : 'Transporting petroleum and metal pipes up to 30m'
    },
    { 
      src: truck2, 
      title: language === 'ar' ? 'شاحنة مرسيدس أكتروس' : 'Mercedes Actros Truck',
      desc: language === 'ar' ? 'أسطول من شاحنات مرسيدس الحديثة' : 'Fleet of modern Mercedes trucks'
    },
    { 
      src: truck3, 
      title: language === 'ar' ? 'تحميل البضائع' : 'Cargo Loading',
      desc: language === 'ar' ? 'تحميل وتفريغ احترافي للمعدات الثقيلة' : 'Professional loading and unloading of heavy equipment'
    },
    { 
      src: truck4, 
      title: language === 'ar' ? 'نقل الهياكل المعدنية' : 'Steel Structure Transport',
      desc: language === 'ar' ? 'نقل الهياكل والجسور المعدنية الكبيرة' : 'Transporting large metal structures and bridges'
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-white font-bold">{item.title}</h3>
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
