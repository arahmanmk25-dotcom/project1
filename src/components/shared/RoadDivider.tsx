import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Flag } from 'lucide-react';

interface RoadDividerProps {
  labelEn?: string;
  labelAr?: string;
  originEn?: string;
  originAr?: string;
  destinationEn?: string;
  destinationAr?: string;
  variant?: 'light' | 'dark';
}

/**
 * Logistics-themed section divider: origin pin → dashed road with a detailed
 * semi-truck rolling along → destination flag. Center milestone plate.
 */
const RoadDivider = ({
  labelEn = 'KM · 0072',
  labelAr = 'كم · ٠٠٧٢',
  originEn = 'RIYADH',
  originAr = 'الرياض',
  destinationEn = 'JEDDAH',
  destinationAr = 'جدة',
  variant = 'light',
}: RoadDividerProps) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const isDark = variant === 'dark';

  const stroke = isDark ? 'hsl(38 55% 55%)' : 'hsl(var(--primary))';
  const fill = isDark ? 'hsl(38 55% 55%)' : 'hsl(var(--primary))';

  return (
    <div
      className={`relative w-full overflow-hidden ${isDark ? 'bg-primary' : 'bg-background'}`}
      aria-hidden="true"
    >
      <div className="container mx-auto px-4">
        <div className="relative h-28 md:h-32 flex items-center">
          {/* Origin pin (left) */}
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10 ${isDark ? 'text-gold' : 'text-primary'}`}>
            <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 ${isDark ? 'border-gold bg-primary' : 'border-primary bg-background'}`}>
              <MapPin className="w-4 h-4" strokeWidth={2} />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-stencil text-[9px] tracking-[0.2em] opacity-70">
                {isAr ? 'الانطلاق' : 'ORIGIN'}
              </p>
              <p className="font-stencil text-xs tracking-[0.25em]">
                {isAr ? originAr : originEn}
              </p>
            </div>
          </div>

          {/* Destination flag (right) */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 z-10 ${isDark ? 'text-gold' : 'text-primary'}`}>
            <div className="hidden sm:block leading-tight text-right">
              <p className="font-stencil text-[9px] tracking-[0.2em] opacity-70">
                {isAr ? 'الوصول' : 'DESTINATION'}
              </p>
              <p className="font-stencil text-xs tracking-[0.25em]">
                {isAr ? destinationAr : destinationEn}
              </p>
            </div>
            <div className={`flex items-center justify-center w-9 h-9 rounded-full border-2 ${isDark ? 'border-gold bg-primary' : 'border-primary bg-background'}`}>
              <Flag className="w-4 h-4" strokeWidth={2} />
            </div>
          </div>

          {/* Road lane between pins */}
          <div className="absolute inset-x-12 sm:inset-x-40 md:inset-x-48 top-1/2 -translate-y-1/2 h-6">
            {/* top edge */}
            <div className={`absolute top-0 left-0 right-0 h-px ${isDark ? 'bg-gold/50' : 'bg-primary/50'}`} />
            {/* bottom edge */}
            <div className={`absolute bottom-0 left-0 right-0 h-px ${isDark ? 'bg-gold/50' : 'bg-primary/50'}`} />
            {/* dashed center lane */}
            <div
              className="absolute inset-y-0 left-0 right-0 my-auto h-[2px]"
              style={{
                backgroundImage: `repeating-linear-gradient(to right, ${stroke} 0 22px, transparent 22px 44px)`,
                backgroundRepeat: 'repeat-x',
                opacity: 0.85,
              }}
            />

            {/* Realistic semi-truck rolling along the road */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 animate-road-roll"
              width="96"
              height="44"
              viewBox="0 0 120 56"
              fill="none"
            >
              {/* Trailer */}
              <rect x="2" y="10" width="62" height="30" rx="1" fill={fill} />
              {/* Trailer ribs */}
              <line x1="14" y1="12" x2="14" y2="38" stroke={isDark ? 'hsl(132 23% 14% / 0.5)' : 'hsl(47 60% 97% / 0.5)'} strokeWidth="1" />
              <line x1="26" y1="12" x2="26" y2="38" stroke={isDark ? 'hsl(132 23% 14% / 0.5)' : 'hsl(47 60% 97% / 0.5)'} strokeWidth="1" />
              <line x1="38" y1="12" x2="38" y2="38" stroke={isDark ? 'hsl(132 23% 14% / 0.5)' : 'hsl(47 60% 97% / 0.5)'} strokeWidth="1" />
              <line x1="50" y1="12" x2="50" y2="38" stroke={isDark ? 'hsl(132 23% 14% / 0.5)' : 'hsl(47 60% 97% / 0.5)'} strokeWidth="1" />
              {/* Trailer-cab gap */}
              <rect x="64" y="26" width="4" height="6" fill={fill} />
              {/* Cab body */}
              <path d="M68 18 L92 18 L100 26 L100 40 L68 40 Z" fill={fill} />
              {/* Cab roof curve */}
              <path d="M68 18 L70 14 L88 14 L92 18 Z" fill={fill} />
              {/* Windshield */}
              <path d="M74 19 L90 19 L96 26 L74 26 Z" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
              {/* Side window */}
              <rect x="69" y="20" width="3" height="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)'} />
              {/* Headlight */}
              <rect x="98" y="30" width="2" height="3" fill={isDark ? 'hsl(47 60% 97%)' : 'hsl(38 55% 55%)'} />
              {/* Bumper */}
              <rect x="68" y="40" width="32" height="2" fill={fill} />
              {/* Wheel wells */}
              <circle cx="14" cy="42" r="6" fill={fill} />
              <circle cx="26" cy="42" r="6" fill={fill} />
              <circle cx="50" cy="42" r="6" fill={fill} />
              <circle cx="80" cy="42" r="6" fill={fill} />
              {/* Tires */}
              <circle cx="14" cy="42" r="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)'} />
              <circle cx="26" cy="42" r="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)'} />
              <circle cx="50" cy="42" r="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)'} />
              <circle cx="80" cy="42" r="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)'} />
              {/* Hubs */}
              <circle cx="14" cy="42" r="1.5" fill={fill} />
              <circle cx="26" cy="42" r="1.5" fill={fill} />
              <circle cx="50" cy="42" r="1.5" fill={fill} />
              <circle cx="80" cy="42" r="1.5" fill={fill} />
              {/* Exhaust stack */}
              <rect x="89" y="8" width="2" height="10" fill={fill} />
            </svg>
          </div>

          {/* Center milestone plate */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 border-2 font-stencil text-[10px] md:text-xs tracking-[0.3em] z-20 ${
              isDark
                ? 'bg-primary border-gold text-gold'
                : 'bg-background border-primary text-primary'
            }`}
          >
            {isAr ? labelAr : labelEn}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadDivider;
