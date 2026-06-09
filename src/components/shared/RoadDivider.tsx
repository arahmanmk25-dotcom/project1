import { useLanguage } from '@/contexts/LanguageContext';

interface RoadDividerProps {
  labelEn?: string;
  labelAr?: string;
  variant?: 'light' | 'dark';
}

/**
 * Logistics-themed section divider: dashed road stripes with a center
 * "milestone" plate and a truck silhouette rolling along the lane.
 */
const RoadDivider = ({ labelEn = 'KM · 0072', labelAr = 'كم · ٠٠٧٢', variant = 'light' }: RoadDividerProps) => {
  const { language } = useLanguage();
  const isDark = variant === 'dark';

  return (
    <div
      className={`relative w-full overflow-hidden ${isDark ? 'bg-primary' : 'bg-background'}`}
      aria-hidden="true"
    >
      {/* Asphalt band */}
      <div className="relative h-20 md:h-24 flex items-center">
        {/* Top edge stripe */}
        <div
          className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-gold/40' : 'bg-primary/40'}`}
        />
        {/* Bottom edge stripe */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px ${isDark ? 'bg-gold/40' : 'bg-primary/40'}`}
        />

        {/* Dashed center lane */}
        <div className="relative w-full h-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(to right, ${
                isDark ? 'hsl(38 55% 48% / 0.85)' : 'hsl(var(--primary) / 0.85)'
              } 0 28px, transparent 28px 56px)`,
              backgroundSize: '56px 2px',
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'center',
            }}
          />
        </div>

        {/* Truck rolling along the road */}
        <svg
          className={`absolute left-0 top-1/2 -translate-y-1/2 animate-road-roll ${
            isDark ? 'text-gold' : 'text-primary'
          }`}
          width="72"
          height="36"
          viewBox="0 0 72 36"
          fill="currentColor"
        >
          {/* cargo box */}
          <rect x="0" y="6" width="40" height="20" />
          {/* cab */}
          <path d="M40 10 L58 10 L66 18 L66 26 L40 26 Z" />
          {/* window */}
          <path d="M44 13 L56 13 L60 18 L44 18 Z" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
          {/* wheels */}
          <circle cx="10" cy="29" r="4" />
          <circle cx="26" cy="29" r="4" />
          <circle cx="58" cy="29" r="4" />
          <circle cx="10" cy="29" r="1.5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
          <circle cx="26" cy="29" r="1.5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
          <circle cx="58" cy="29" r="1.5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
        </svg>

        {/* Center milestone plate */}
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 border-2 font-stencil text-xs tracking-[0.3em] ${
            isDark
              ? 'bg-primary border-gold text-gold'
              : 'bg-background border-primary text-primary'
          }`}
        >
          {language === 'ar' ? labelAr : labelEn}
        </div>
      </div>
    </div>
  );
};

export default RoadDivider;
