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

const ClientsBackgroundAnimation = () => {
  const [trucks, setTrucks] = useState<FloatingTruck[]>([]);

  useEffect(() => {
    const truckCount = window.innerWidth < 768 ? 12 : 20;
    const newTrucks: FloatingTruck[] = [];

    for (let i = 0; i < truckCount; i++) {
      newTrucks.push({
        id: i,
        x: Math.random() * 95 + 2.5,
        y: Math.random() * 90 + 5,
        size: Math.random() * 18 + 14,
        duration: Math.random() * 8 + 14, // 14-22s slower
        delay: Math.random() * 3,
        opacity: Math.random() * 0.3 + 0.15,
      });
    }

    setTrucks(newTrucks);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating trucks across the entire section */}
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
              filter: 'drop-shadow(0 0 8px hsl(43 74% 49% / 0.5))',
            }}
          />
        </div>
      ))}

      {/* Glowing particles spread across entire section */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-glow-particle"
          style={{
            width: 3 + (i % 5),
            height: 3 + (i % 5),
            left: `${(i * 3.3) % 100}%`,
            top: `${(i * 7.7) % 100}%`,
            backgroundColor: 'hsl(43 74% 49% / 0.4)',
            animationDuration: `${4 + (i % 3)}s`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}

      {/* Connecting lines decoration */}
      <svg className="absolute inset-0 w-full h-full opacity-15">
        {[...Array(10)].map((_, i) => (
          <line
            key={`line-${i}`}
            x1={`${5 + i * 10}%`}
            y1={`${10 + (i % 5) * 18}%`}
            x2={`${15 + i * 8}%`}
            y2={`${30 + (i % 4) * 20}%`}
            stroke="hsl(43 74% 49%)"
            strokeWidth="1.5"
            className="animate-pulse"
            style={{ animationDuration: `${2 + i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default ClientsBackgroundAnimation;
