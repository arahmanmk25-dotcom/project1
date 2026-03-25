import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';
import StatsBar from '@/components/home/StatsBar';
import FleetGallery from '@/components/fleet/FleetGallery';

// Fleet trucks
import fleetHero from '@/assets/trucks/fleet-hero.jpeg';
import fleet3 from '@/assets/trucks/fleet-3.jpg';
import fleet4 from '@/assets/trucks/fleet-4.jpg';
import fleet5 from '@/assets/trucks/fleet-5.jpg';
import fleet6 from '@/assets/trucks/fleet-6.jpg';
import fleet7 from '@/assets/trucks/fleet-7.jpg';
import fleet8 from '@/assets/trucks/fleet-8.jpg';
import fleet9 from '@/assets/trucks/fleet-9.jpg';
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
    { src: fleetHero, nameEn: 'SITRAK Fleet', nameAr: 'أسطول سيتراك', model: 'C7H', year: '2024', category: 'sitrak' },
    { src: fleet3, nameEn: 'MAN TGS EfficientLine', nameAr: 'مان TGS إفيشنت لاين', model: 'TGS 18.460', year: '2023', category: 'man' },
    { src: fleet4, nameEn: 'MAN TGX', nameAr: 'مان TGX', model: 'TGX 18.500', year: '2022', category: 'man' },
    { src: fleet5, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '1844', year: '2021', category: 'mercedes' },
    { src: fleet6, nameEn: 'MAN TGS', nameAr: 'مان TGS', model: 'TGS 18.460', year: '2023', category: 'man' },
    { src: fleet7, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '2040', year: '2022', category: 'mercedes' },
    { src: fleet8, nameEn: 'MAN TGX', nameAr: 'مان TGX', model: 'TGX 18.500', year: '2023', category: 'man' },
    { src: fleet9, nameEn: 'MAN TGA', nameAr: 'مان TGA', model: 'TGA 18.360', year: '2020', category: 'man' },
    { src: fleet11, nameEn: 'MAN TGS', nameAr: 'مان TGS', model: 'TGS 18.460', year: '2022', category: 'man' },
    { src: fleet12, nameEn: 'Mercedes-Benz Actros V8', nameAr: 'مرسيدس أكتروس V8', model: '3354', year: '2021', category: 'mercedes' },
    { src: fleet13, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '2655', year: '2020', category: 'mercedes' },
    { src: fleet14, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '1844', year: '2021', category: 'mercedes' },
    { src: fleet15, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '1844', year: '2020', category: 'mercedes' },
    { src: fleet16, nameEn: 'Mixed Fleet', nameAr: 'أسطول متنوع', model: 'MAN & Mercedes', year: '2022', category: 'other' },
    { src: fleet17, nameEn: 'DAEWOO Maximus', nameAr: 'دايو ماكسيموس', model: '4542', year: '2023', category: 'other' },
    { src: fleet18, nameEn: 'Mercedes-Benz Actros', nameAr: 'مرسيدس أكتروس', model: '2040', year: '2022', category: 'mercedes' },
  ];

  const categories = [
    { key: 'man', labelEn: 'MAN', labelAr: 'مان' },
    { key: 'mercedes', labelEn: 'Mercedes-Benz', labelAr: 'مرسيدس' },
    { key: 'sitrak', labelEn: 'SITRAK', labelAr: 'سيتراك' },
    { key: 'other', labelEn: 'Other', labelAr: 'أخرى' },
  ];

  const fleetStats = [
    { value: '50+', label: language === 'ar' ? 'شاحنة' : 'Trucks' },
    { value: '30', label: language === 'ar' ? 'أقصى طول حمولة (م)' : 'Max Cargo Length (m)' },
    { value: '200+', label: language === 'ar' ? 'طن قدرة الرفع' : 'Ton Lifting Capacity' },
    { value: '24', label: language === 'ar' ? 'خدمة ٢٤/٧' : '24/7 Service' },
  ];

  return (
    <PageTransition>
      <div>
        {/* Hero - Full viewport editorial */}
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-20">
          <HeroSlideshow images={[fleetHero, fleet3, fleet5, fleet7, fleet9, fleet12]} interval={8000} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                {language === 'ar' ? 'أسطولنا' : 'OUR FLEET'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {language === 'ar' ? 'قوة على الطريق' : 'Power on the Road'}
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-2xl">
                {language === 'ar'
                  ? 'أسطول حديث من أكثر من ٥٠ شاحنة من أفضل العلامات التجارية العالمية'
                  : 'A modern fleet of 50+ trucks from the world\'s top brands, ready for any mission'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-xl text-muted-foreground leading-relaxed">{t('fleet.description')}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Interactive Fleet Gallery */}
        <FleetGallery items={fleetImages} categories={categories} />

        {/* Stats */}
        <StatsBar stats={fleetStats} variant="dark" />

        <section className="py-8 bg-secondary" />
      </div>
    </PageTransition>
  );
};

export default Fleet;
