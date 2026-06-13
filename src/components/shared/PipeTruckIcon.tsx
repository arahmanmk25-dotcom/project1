import { SVGProps } from 'react';

/**
 * Stylized flatbed hauler carrying a stack of pipes.
 * Designed to read clearly at small sizes (16-40px) as a decorative icon.
 */
const PipeTruckIcon = ({ className, style, ...rest }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 80 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...rest}
    >
      {/* Trailer bed */}
      <rect x="20" y="24" width="42" height="3" rx="0.5" fill="currentColor" />

      {/* Pipe cargo stack (3 pipes bottom, 2 on top) */}
      <g stroke="currentColor" strokeWidth="0.8" fill="none">
        <circle cx="26" cy="20" r="3.2" />
        <circle cx="33" cy="20" r="3.2" />
        <circle cx="40" cy="20" r="3.2" />
        <circle cx="47" cy="20" r="3.2" />
        <circle cx="54" cy="20" r="3.2" />
        <circle cx="29.5" cy="14.5" r="3.2" />
        <circle cx="36.5" cy="14.5" r="3.2" />
        <circle cx="43.5" cy="14.5" r="3.2" />
        <circle cx="50.5" cy="14.5" r="3.2" />
      </g>

      {/* Strap over pipes */}
      <path d="M22 12 L22 23 M58 12 L58 23" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />

      {/* Truck cab */}
      <path
        d="M62 27 L62 16 Q62 14 64 14 L70 14 Q72 14 73 16 L76 22 L76 27 Z"
        fill="currentColor"
      />
      {/* Cab window */}
      <path d="M65 16 L70 16 L72.5 21 L65 21 Z" fill="white" opacity="0.85" />

      {/* Chassis line under bed */}
      <rect x="18" y="27" width="58" height="1.2" fill="currentColor" />

      {/* Wheels */}
      <g fill="currentColor">
        <circle cx="24" cy="30" r="3" />
        <circle cx="32" cy="30" r="3" />
        <circle cx="50" cy="30" r="3" />
        <circle cx="58" cy="30" r="3" />
        <circle cx="70" cy="30" r="3" />
      </g>
      {/* Wheel hubs */}
      <g fill="white" opacity="0.7">
        <circle cx="24" cy="30" r="1" />
        <circle cx="32" cy="30" r="1" />
        <circle cx="50" cy="30" r="1" />
        <circle cx="58" cy="30" r="1" />
        <circle cx="70" cy="30" r="1" />
      </g>
    </svg>
  );
};

export default PipeTruckIcon;
