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

            {/* Pipe-hauler flatbed truck rolling along the road */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 animate-road-roll"
              width="104"
              height="46"
              viewBox="0 0 120 56"
              fill="none"
            >
              {(() => {
                const seam = isDark ? 'hsl(132 23% 14% / 0.45)' : 'hsl(47 60% 97% / 0.55)';
                const glass = isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)';
                const bore = isDark ? 'hsl(132 23% 14% / 0.6)' : 'hsl(47 60% 97% / 0.6)';
                const headlight = isDark ? 'hsl(47 60% 97%)' : 'hsl(38 55% 55%)';
                return (
                  <>
                    {/* Stake posts holding the load (behind pipes) */}
                    <rect x="4"  y="16" width="1.6" height="22" fill={fill} />
                    <rect x="22" y="16" width="1.6" height="22" fill={fill} />
                    <rect x="42" y="16" width="1.6" height="22" fill={fill} />
                    <rect x="62" y="16" width="1.6" height="22" fill={fill} />

                    {/* Flatbed deck */}
                    <rect x="0" y="37" width="68" height="3" fill={fill} />

                    {/* Pipe cargo — three stacked horizontal cylinders extending past the rear */}
                    <rect x="-2" y="31" width="70" height="6" rx="3" fill={fill} />
                    <rect x="-2" y="25" width="70" height="6" rx="3" fill={fill} />
                    <rect x="-2" y="19" width="70" height="6" rx="3" fill={fill} />
                    {/* Seam highlights between pipes */}
                    <line x1="-2" y1="25" x2="68" y2="25" stroke={seam} strokeWidth="0.6" />
                    <line x1="-2" y1="31" x2="68" y2="31" stroke={seam} strokeWidth="0.6" />
                    <line x1="-2" y1="37" x2="68" y2="37" stroke={seam} strokeWidth="0.6" />
                    {/* Pipe bores on the protruding (rear) end */}
                    <ellipse cx="-2" cy="22" rx="1.4" ry="2.4" fill={bore} />
                    <ellipse cx="-2" cy="28" rx="1.4" ry="2.4" fill={bore} />
                    <ellipse cx="-2" cy="34" rx="1.4" ry="2.4" fill={bore} />

                    {/* Tractor chassis bridging cab to trailer */}
                    <rect x="68" y="37" width="6" height="3" fill={fill} />

                    {/* Boxy Scania-style cab on the right */}
                    <rect x="74" y="16" width="26" height="22" fill={fill} />
                    {/* Windshield */}
                    <rect x="78" y="18" width="20" height="9" fill={glass} />
                    {/* Door line */}
                    <line x1="86" y1="27" x2="86" y2="37" stroke={seam} strokeWidth="0.6" />
                    {/* Door handle */}
                    <rect x="82" y="30" width="2" height="0.6" fill={seam} />
                    {/* Grille */}
                    <rect x="98" y="28" width="2" height="7" fill={glass} opacity="0.75" />
                    {/* Headlight */}
                    <rect x="98" y="35" width="2" height="2" fill={headlight} />
                    {/* Side mirror */}
                    <rect x="76" y="14" width="3" height="2.5" fill={fill} />
                    {/* Bumper */}
                    <rect x="72" y="38" width="30" height="2" fill={fill} />
                    {/* Exhaust stack behind cab */}
                    <rect x="73" y="8" width="2" height="10" fill={fill} />

                    {/* Wheels — 3 at trailer rear (bogie), 2 under tractor */}
                    {[8, 18, 28, 78, 94].map((cx) => (
                      <g key={cx}>
                        <circle cx={cx} cy="42" r="6" fill={fill} />
                        <circle cx={cx} cy="42" r="5" fill={isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)'} />
                        <circle cx={cx} cy="42" r="1.6" fill={fill} />
                      </g>
                    ))}
                  </>
                );
              })()}
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
