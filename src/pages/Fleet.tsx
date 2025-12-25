import { useLanguage } from '@/contexts/LanguageContext';

// Fleet trucks - all images
import fleetHero from '@/assets/trucks/fleet-hero.jpeg';
import fleet3 from '@/assets/trucks/fleet-3.jpg';
import fleet4 from '@/assets/trucks/fleet-4.jpg';
import fleet5 from '@/assets/trucks/fleet-5.jpg';
import fleet6 from '@/assets/trucks/fleet-6.jpg';
import fleet7 from '@/assets/trucks/fleet-7.jpg';
import fleet8 from '@/assets/trucks/fleet-8.jpg';
import fleet9 from '@/assets/trucks/fleet-9.jpg';
import fleet10 from '@/assets/trucks/fleet-10.jpeg';
import fleet11 from '@/assets/trucks/fleet-11.jpg';
import fleet12 from '@/assets/trucks/fleet-12.jpg';
import fleet13 from '@/assets/trucks/fleet-13.jpg';
import fleet14 from '@/assets/trucks/fleet-14.jpg';
import fleet15 from '@/assets/trucks/fleet-15.jpg';
import fleet16 from '@/assets/trucks/fleet-16.jpg';
import fleet17 from '@/assets/trucks/fleet-17.jpg';
import fleet18 from '@/assets/trucks/fleet-18.jpg';

const Fleet = () => {
  const { t, language } = useLanguage();

  const fleetImages = [
    { 
      src: fleetHero, 
      nameEn: 'SITRAK Fleet',
      nameAr: 'أسطول سيتراك',
      model: 'C7H',
      year: '2024'
    },
    { 
      src: fleet10, 
      nameEn: 'SITRAK Fleet',
      nameAr: 'أسطول سيتراك',
      model: 'C7H',
      year: '2024'
    },
    { 
      src: fleet3, 
      nameEn: 'MAN TGS EfficientLine',
      nameAr: 'مان TGS إفيشنت لاين',
      model: 'TGS 18.460',
      year: '2023'
    },
    { 
      src: fleet4, 
      nameEn: 'MAN TGX',
      nameAr: 'مان TGX',
      model: 'TGX 18.500',
      year: '2022'
    },
    { 
      src: fleet5, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2021'
    },
    { 
      src: fleet6, 
      nameEn: 'MAN TGS',
      nameAr: 'مان TGS',
      model: 'TGS 18.460',
      year: '2023'
    },
    { 
      src: fleet7, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '2040',
      year: '2022'
    },
    { 
      src: fleet8, 
      nameEn: 'MAN TGX',
      nameAr: 'مان TGX',
      model: 'TGX 18.500',
      year: '2023'
    },
    { 
      src: fleet9, 
      nameEn: 'MAN TGA',
      nameAr: 'مان TGA',
      model: 'TGA 18.360',
      year: '2020'
    },
    { 
      src: fleet11, 
      nameEn: 'MAN TGS',
      nameAr: 'مان TGS',
      model: 'TGS 18.460',
      year: '2022'
    },
    { 
      src: fleet12, 
      nameEn: 'Mercedes-Benz Actros V8',
      nameAr: 'مرسيدس أكتروس V8',
      model: '3354',
      year: '2021'
    },
    { 
      src: fleet13, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '2655',
      year: '2020'
    },
    { 
      src: fleet14, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2021'
    },
    { 
      src: fleet15, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '1844',
      year: '2020'
    },
    { 
      src: fleet16, 
      nameEn: 'Mixed Fleet',
      nameAr: 'أسطول متنوع',
      model: 'MAN & Mercedes',
      year: '2022'
    },
    { 
      src: fleet17, 
      nameEn: 'DAEWOO Maximus',
      nameAr: 'دايو ماكسيموس',
      model: '4542',
      year: '2023'
    },
    { 
      src: fleet18, 
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس أكتروس',
      model: '2040',
      year: '2022'
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${fleetHero})` }}
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
