import { useLanguage } from '@/contexts/LanguageContext';
import { Truck, Package, Anchor, Globe2, Wrench, Fuel, Boxes, Route } from 'lucide-react';

/**
 * Continuous marquee strip of logistics icons + freight vocabulary.
 * Sits above the footer to reinforce the trucking/industrial identity.
 */
const FreightBand = () => {
  const { language } = useLanguage();

  const items = language === 'ar'
    ? [
        { icon: Truck, label: 'النقل الثقيل' },
        { icon: Package, label: 'شحنات سائبة' },
        { icon: Route, label: 'مسارات المملكة' },
        { icon: Fuel, label: 'نقل البترول' },
        { icon: Boxes, label: 'حاويات ٤٠ قدم' },
        { icon: Anchor, label: 'موانئ جدة والدمام' },
        { icon: Wrench, label: 'صيانة ٢٤/٧' },
        { icon: Globe2, label: 'لوجستيات دولية' },
      ]
    : [
        { icon: Truck, label: 'Heavy Haulage' },
        { icon: Package, label: 'Bulk Freight' },
        { icon: Route, label: 'KSA Corridors' },
        { icon: Fuel, label: 'Petroleum Transport' },
        { icon: Boxes, label: '40ft Containers' },
        { icon: Anchor, label: 'Jeddah · Dammam Ports' },
        { icon: Wrench, label: '24/7 Field Service' },
        { icon: Globe2, label: 'Cross-Border Logistics' },
      ];

  const loop = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden border-y-2 border-primary bg-card"
      aria-hidden="true"
    >
      {/* corner crosshairs */}
      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-primary/60" />
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary/60" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-primary/60" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-primary/60" />

      <div dir="ltr" className="flex animate-marquee-left whitespace-nowrap py-4">
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-8 font-stencil text-primary uppercase text-xs md:text-sm tracking-[0.25em]"
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5 opacity-80" strokeWidth={2.2} />
              <span>{item.label}</span>
              <span className="opacity-40 ml-6">◆</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreightBand;
