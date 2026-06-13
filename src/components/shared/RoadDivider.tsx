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

            {/* Heavy-duty pipe-hauler rolling along the road */}
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 animate-road-roll"
              width="132"
              height="52"
              viewBox="0 0 156 64"
              fill="none"
            >
              {(() => {
                const seam = isDark ? 'hsl(132 23% 14% / 0.48)' : 'hsl(47 60% 97% / 0.62)';
                const glass = isDark ? 'hsl(132 23% 14%)' : 'hsl(47 60% 97%)';
                const bore = isDark ? 'hsl(132 23% 14% / 0.6)' : 'hsl(47 60% 97% / 0.6)';
                const headlight = isDark ? 'hsl(47 60% 97%)' : 'hsl(38 55% 55%)';
                const tyre = isDark ? 'hsl(132 23% 14%)' : 'hsl(132 18% 13%)';
                return (
                  <>
                    {/* Long stacked pipe cargo with visible circular ends */}
                    <rect x="2" y="16" width="98" height="7" rx="3.5" fill={fill} />
                    <rect x="2" y="23" width="98" height="7" rx="3.5" fill={fill} />
                    <rect x="2" y="30" width="98" height="7" rx="3.5" fill={fill} />
                    <ellipse cx="2" cy="19.5" rx="1.8" ry="3" fill={bore} />
                    <ellipse cx="2" cy="26.5" rx="1.8" ry="3" fill={bore} />
                    <ellipse cx="2" cy="33.5" rx="1.8" ry="3" fill={bore} />
                    {[19, 48, 77].map((x) => (
                      <line key={x} x1={x} y1="14" x2={x} y2="39" stroke={seam} strokeWidth="1.4" />
                    ))}

                    {/* Heavy flatbed trailer: red-reference style side rail, legs and truss braces */}
                    <rect x="0" y="38" width="104" height="5" fill={fill} />
                    <rect x="5" y="43" width="90" height="3" fill={fill} opacity="0.9" />
                    <path d="M10 46L31 43L52 46L73 43L94 46" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {[8, 28, 58, 88].map((x) => (
                      <rect key={x} x={x} y="35" width="2" height="8" fill={fill} />
                    ))}

                    {/* Fifth-wheel neck and heavy tractor chassis */}
                    <path d="M100 42H116L121 48H99Z" fill={fill} />
                    <rect x="112" y="43" width="38" height="4" fill={fill} />

                    {/* Tall heavy-haul prime mover cab */}
                    <path d="M118 15H143L152 28V43H116V26Z" fill={fill} />
                    <path d="M123 18H140L146 27H123Z" fill={glass} />
                    <rect x="121" y="29" width="14" height="13" fill={seam} opacity="0.32" />
                    <line x1="137" y1="28" x2="137" y2="43" stroke={seam} strokeWidth="1" />
                    <rect x="147" y="31" width="4" height="8" fill={glass} opacity="0.72" />
                    <rect x="149" y="39" width="4" height="3" fill={headlight} />
                    <rect x="116" y="12" width="3" height="14" fill={fill} />
                    <rect x="114" y="10" width="6" height="2" rx="1" fill={fill} />
                    <rect x="118" y="13" width="5" height="3" fill={fill} />
                    <rect x="114" y="43" width="40" height="4" fill={fill} />

                    {/* Wheels — rear trailer bogie (left/back), mid bogie, and twin tractor axles */}
                    {[8, 20, 32, 82, 98, 143].map((cx) => (
                      <g key={cx}>
                        <circle cx={cx} cy="49" r="7" fill={fill} />
                        <circle cx={cx} cy="49" r="5.4" fill={tyre} />
                        <circle cx={cx} cy="49" r="1.8" fill={fill} />
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
