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

const TruckParticles = () => {
  const [trucks, setTrucks] = useState<FloatingTruck[]>([]);

  useEffect(() => {
    const truckCount = window.innerWidth < 768 ? 18 : 30;
    const newTrucks: FloatingTruck[] = [];

    for (let i = 0; i < truckCount; i++) {
      newTrucks.push({
        id: i,
        x: Math.random() * 92 + 4,
        y: Math.random() * 92 + 4,
        size: Math.random() * 28 + 22,
        duration: Math.random() * 8 + 14, // 14-22s slower
        delay: Math.random() * 4,
        opacity: Math.random() * 0.45 + 0.2,
      });
    }

    setTrucks(newTrucks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
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
              filter: 'drop-shadow(0 0 12px hsl(43 74% 49% / 0.6))',
            }}
          />
        </div>
      ))}

      {/* Glowing particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-glow-particle"
          style={{
            width: 4 + (i % 5),
            height: 4 + (i % 5),
            left: `${(i * 4) % 100}%`,
            top: `${(i * 8) % 100}%`,
            backgroundColor: 'hsl(43 74% 49% / 0.5)',
            animationDuration: `${4 + (i % 3)}s`,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}

      {/* Connecting lines decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {[...Array(12)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${3 + i * 8}%`}
            y1={`${8 + (i % 6) * 15}%`}
            x2={`${12 + i * 7}%`}
            y2={`${25 + (i % 5) * 18}%`}
            stroke="hsl(43 74% 49%)"
            strokeWidth="1.5"
            className="animate-pulse"
            style={{ animationDuration: `${2 + i * 0.25}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default TruckParticles;
