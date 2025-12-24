import { useLanguage } from '@/contexts/LanguageContext';

// Fleet trucks - showing clear truck images with model details
import fleet1 from '@/assets/trucks/fleet-1.jpg';
import fleet2 from '@/assets/trucks/fleet-2.jpg';
import truck41 from '@/assets/trucks/new-truck-41.jpg';
import truck42 from '@/assets/trucks/new-truck-42.jpg';
import truck43 from '@/assets/trucks/new-truck-43.jpg';
import truck44 from '@/assets/trucks/new-truck-44.jpg';
import truck45 from '@/assets/trucks/new-truck-45.jpg';
import truck46 from '@/assets/trucks/new-truck-46.jpg';
import truck56 from '@/assets/trucks/new-truck-56.jpg';

const heroImage = fleet1;

const Fleet = () => {
  const { t, language } = useLanguage();

  const fleetImages = [
    { 
      src: fleet1, 
      nameEn: 'MAN TGS',
      nameAr: 'مان TGS',
      model: 'TGS 18.460',
      year: '2021'
    },
    { 
      src: fleet2, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2018'
    },
    { 
      src: truck41, 
      nameEn: 'MAN TGX',
      nameAr: 'مان TGX',
      model: '18.460',
      year: '2020'
    },
    { 
      src: truck42, 
      nameEn: 'MAN TGS',
      nameAr: 'مان TGS',
      model: 'TGS 18.460',
      year: '2019'
    },
    { 
      src: truck43, 
      nameEn: 'MAN TGA',
      nameAr: 'مان TGA',
      model: 'TGA 18.360',
      year: '2018'
    },
    { 
      src: truck44, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2017'
    },
    { 
      src: truck45, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2016'
    },
    { 
      src: truck46, 
      nameEn: 'Mercedes-Benz Actros V8',
      nameAr: 'مرسيدس أكتروس V8',
      model: '3354',
      year: '2015'
    },
    { 
      src: truck56, 
      nameEn: 'MAN TGS EfficientLine',
      nameAr: 'مان TGS إفيشنت لاين',
      model: 'TGS 18.460',
      year: '2021'
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
              <div key={i} className="group relative overflow-hidden rounded-xl hover-lift bg-card shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={language === 'ar' ? item.nameAr : item.nameEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="text-lg font-bold text-primary">
                    {language === 'ar' ? item.nameAr : item.nameEn}
                  </h3>
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>{language === 'ar' ? 'الموديل:' : 'Model:'} {item.model}</span>
                    <span>{language === 'ar' ? 'السنة:' : 'Year:'} {item.year}</span>
                  </div>
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
