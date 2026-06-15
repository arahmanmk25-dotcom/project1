import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';
import StatsBar from '@/components/home/StatsBar';
import FleetBrandShowcase, { Brand } from '@/components/fleet/FleetBrandShowcase';
import RoadDivider from '@/components/shared/RoadDivider';
import SloganBand from '@/components/shared/SloganBand';

// Existing fleet assets
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

// New uploaded brand photos
import actorsBlue from '@/assets/trucks-new/actors-blue.png.asset.json';
import actrosFace from '@/assets/trucks-new/actros-face.png.asset.json';
import daewooFace from '@/assets/trucks-new/daewoo-face.png.asset.json';
import manFace from '@/assets/trucks-new/man-face.png.asset.json';
import manSideFace from '@/assets/trucks-new/man-side-face.png.asset.json';
import redManSide from '@/assets/trucks-new/red-man-side.png.asset.json';
import sitrakFront from '@/assets/trucks-new/sitrak-front.png.asset.json';
import sitrakSide from '@/assets/trucks-new/sitrak-side.png.asset.json';
import sitrakWhite from '@/assets/trucks-new/sitrak-white.png.asset.json';

const Fleet = () => {
  const { t, language } = useLanguage();

  const brands: Brand[] = [
    {
      key: 'man',
      nameEn: 'MAN',
      nameAr: 'مان',
      originEn: 'Germany · Engineered for Distance',
      originAr: 'ألمانيا · هندسة للمسافات الطويلة',
      taglineEn: 'European precision built to outlast the harshest desert routes.',
      taglineAr: 'دقة أوروبية مصممة لتتحمل أصعب طرق الصحراء.',
      hero: manFace.url,
      gallery: [manSideFace.url, redManSide.url],
      models: [
        { name: 'TGX 18.510', years: '2020' },
        { name: 'TGX 18.500', years: '2019' },
        { name: 'TGX 18.470', years: '2021' },
        { name: 'TGX 18.460', years: '2019' },
        { name: 'TGS 18.460', years: '2019' },
        { name: 'TGS 18.420', years: '2019' },
        { name: 'TGA 18.440', years: '2008' },
      ],
    },
    {
      key: 'mercedes',
      nameEn: 'Mercedes-Benz Actros',
      nameAr: 'مرسيدس-بنز أكتروس',
      originEn: 'Germany · The Heavyweight Standard',
      originAr: 'ألمانيا · معيار النقل الثقيل',
      taglineEn: 'A proven workhorse — the backbone of our long-haul operations.',
      taglineAr: 'حصان عمل مجرّب — العمود الفقري لعملياتنا على المدى الطويل.',
      hero: actrosFace.url,
      gallery: [actorsBlue.url],
      models: [
        { name: 'Actros 2040', years: '2011' },
        { name: 'Actros 1846', years: '2010' },
        { name: 'Actros 1844', years: '2011 · 2016' },
        { name: 'Actros 1841', years: '2009 · 2010 · 2011' },
        { name: 'Actros 1836', years: '2009 · 2011' },
      ],
    },
    {
      key: 'daewoo',
      nameEn: 'DAEWOO Maximus',
      nameAr: 'دايو ماكسيموس',
      originEn: 'South Korea · The New Generation',
      originAr: 'كوريا الجنوبية · الجيل الجديد',
      taglineEn: 'Modern power, factory-fresh — added to the fleet to expand capacity.',
      taglineAr: 'قوة حديثة من المصنع — أضيفت إلى الأسطول لتوسيع الطاقة الاستيعابية.',
      hero: daewooFace.url,
      gallery: [],
      models: [{ name: 'Maximus 4542', years: '2023' }],
    },
    {
      key: 'sitrak',
      nameEn: 'SITRAK G7',
      nameAr: 'سيتراك G7',
      originEn: 'China · CNHTC · Newest Addition',
      originAr: 'الصين · CNHTC · أحدث الإضافات',
      taglineEn: 'Our latest investment — a brand-new 2024 fleet ready for any mission.',
      taglineAr: 'أحدث استثماراتنا — أسطول جديد كلياً موديل 2024 جاهز لأي مهمة.',
      hero: sitrakWhite.url,
      gallery: [sitrakFront.url, sitrakSide.url],
      models: [{ name: 'G7 440', years: '2024' }],
    },
  ];
...
        <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden -mt-16">
          <HeroSlideshow images={[sitrakWhite.url, sitrakSide.url, actrosFace.url, manFace.url, daewooFace.url]} interval={8000} />
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
                  ? 'أربع علامات عالمية، أكثر من ١٠٠ شاحنة، أسطول واحد جاهز دائماً.'
                  : 'Four world-class brands, 100+ trucks, one fleet always ready.'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <SloganBand
          eyebrowEn="THE FLEET"
          eyebrowAr="الأسطول"
          sloganEn="Built for the road. Trusted for the load."
          sloganAr="مصنوعة للطريق. موثوقة للحمل."
        />

        {/* Description */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal variant="fadeUp">
                <p className="text-xl text-muted-foreground leading-relaxed">{t('fleet.description')}</p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Brand showcases with subtle alternating background */}
        <div className="bg-gradient-to-b from-background via-secondary/30 to-background">
          {brands.map((brand, i) => (
            <div key={brand.key} className={i % 2 === 1 ? 'bg-secondary/40' : ''}>
              <FleetBrandShowcase brand={brand} index={i} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <StatsBar stats={fleetStats} variant="dark" />

        <RoadDivider
          variant="dark"
          labelEn="DEPOT · 100+ UNITS READY"
          labelAr="المستودع · أكثر من ١٠٠ وحدة جاهزة"
          originEn="DEPOT"
          originAr="المستودع"
          destinationEn="ON ROUTE"
          destinationAr="على الطريق"
        />
      </div>
    </PageTransition>
  );
};

export default Fleet;
