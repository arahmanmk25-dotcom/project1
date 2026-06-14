import { SVGProps } from 'react';

/**
 * Stylized flatbed hauler carrying a single long pipe.
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
      <rect x="14" y="24" width="48" height="3" rx="0.5" fill="currentColor" />

      {/* Single long pipe cargo (extends past the cab in front, overhangs trailer in back) */}
      <g fill="currentColor">
        <rect x="4" y="16" width="72" height="7" rx="3.5" />
      </g>
      {/* Pipe inner shading for depth */}
      <rect x="4" y="17.5" width="72" height="2" rx="1" fill="white" opacity="0.25" />
      {/* Pipe end cap (front) */}
      <ellipse cx="76" cy="19.5" rx="1.2" ry="3.5" fill="currentColor" opacity="0.7" />
      {/* Pipe hollow opening (back) */}
      <ellipse cx="4" cy="19.5" rx="1.2" ry="3.5" fill="white" opacity="0.4" />

      {/* Straps over pipe */}
      <path d="M20 14 L20 25 M40 14 L40 25 M58 14 L58 25" stroke="currentColor" strokeWidth="0.6" opacity="0.55" />

      {/* Truck cab */}
      <path
        d="M62 27 L62 23 Q62 21 64 21 L70 21 Q72 21 73 23 L76 26 L76 27 Z"
        fill="currentColor"
      />
      {/* Cab window */}
      <path d="M65 23 L70 23 L72 26 L65 26 Z" fill="white" opacity="0.85" />

      {/* Chassis line under bed */}
      <rect x="14" y="27" width="62" height="1.2" fill="currentColor" />

      {/* Wheels */}
      <g fill="currentColor">
        <circle cx="20" cy="30" r="3" />
        <circle cx="30" cy="30" r="3" />
        <circle cx="48" cy="30" r="3" />
        <circle cx="58" cy="30" r="3" />
        <circle cx="70" cy="30" r="3" />
      </g>
      {/* Wheel hubs */}
      <g fill="white" opacity="0.7">
        <circle cx="20" cy="30" r="1" />
        <circle cx="30" cy="30" r="1" />
        <circle cx="48" cy="30" r="1" />
        <circle cx="58" cy="30" r="1" />
        <circle cx="70" cy="30" r="1" />
      </g>
    </svg>
  );
};

export default PipeTruckIcon;
