import { useEffect, useState } from 'react';
import { Truck } from 'lucide-react';

interface FloatingTruck {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface Props {
  truckCount?: number;
  particleCount?: number;
  className?: string;
}

const FloatingTrucksBackground = ({ truckCount = 20, particleCount = 25, className = '' }: Props) => {
  const [trucks, setTrucks] = useState<FloatingTruck[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? Math.floor(truckCount * 0.6) : truckCount;
    const newTrucks: FloatingTruck[] = [];

    for (let i = 0; i < count; i++) {
      newTrucks.push({
        id: i,
        x: Math.random() * 92 + 4,
        y: Math.random() * 92 + 4,
        size: Math.random() * 20 + 16,
        duration: Math.random() * 8 + 14, // 14-22s slower
        delay: Math.random() * 4,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }

    setTrucks(newTrucks);
  }, [truckCount]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Floating trucks with CSS animation */}
      {trucks.map((truck) => (
        <div
          key={truck.id}
          className="absolute animate-float-truck"
          style={{
            left: `${truck.x}%`,
            top: `${truck.y}%`,
            animationDuration: `${truck.duration}s`,
            animationDelay: `${truck.delay}s`,
          }}
        >
          <Truck
            className="text-gold"
            style={{
              width: truck.size,
              height: truck.size,
              opacity: truck.opacity,
              filter: 'drop-shadow(0 0 10px hsl(43 74% 49% / 0.5))',
            }}
          />
        </div>
      ))}

      {/* Glowing particles */}
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-glow-particle"
          style={{
            width: 3 + (i % 5),
            height: 3 + (i % 5),
            left: `${(i * 4) % 100}%`,
            top: `${(i * 7.5) % 100}%`,
            backgroundColor: 'hsl(43 74% 49% / 0.4)',
            animationDuration: `${4 + (i % 3)}s`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Connecting lines decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {[...Array(8)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${5 + i * 12}%`}
            y1={`${10 + (i % 5) * 18}%`}
            x2={`${18 + i * 10}%`}
            y2={`${28 + (i % 4) * 20}%`}
            stroke="hsl(43 74% 49%)"
            strokeWidth="1.5"
            className="animate-pulse"
            style={{ animationDuration: `${2.5 + i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FloatingTrucksBackground;
