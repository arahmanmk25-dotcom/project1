import { Truck } from 'lucide-react';

const HoverTruckAnimation = () => {
  // Fixed positions for trucks to avoid re-renders
  const trucks = [
    { x: 15, y: 20, size: 16, delay: 0, duration: 3 },
    { x: 75, y: 15, size: 14, delay: 0.5, duration: 2.5 },
    { x: 45, y: 60, size: 18, delay: 0.3, duration: 3.5 },
    { x: 85, y: 70, size: 15, delay: 0.8, duration: 2.8 },
    { x: 25, y: 75, size: 14, delay: 0.2, duration: 3.2 },
    { x: 60, y: 30, size: 16, delay: 0.6, duration: 2.6 },
  ];

  const particles = [
    { x: 10, y: 30, size: 3 },
    { x: 90, y: 25, size: 4 },
    { x: 50, y: 80, size: 3 },
    { x: 30, y: 50, size: 4 },
    { x: 70, y: 45, size: 3 },
    { x: 20, y: 85, size: 4 },
    { x: 80, y: 55, size: 3 },
    { x: 40, y: 15, size: 4 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Floating trucks */}
      {trucks.map((truck, i) => (
        <div
          key={i}
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
              opacity: 0.7,
              filter: 'drop-shadow(0 0 6px hsl(43 74% 49% / 0.6))',
            }}
          />
        </div>
      ))}

      {/* Glowing particles */}
      {particles.map((particle, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full animate-glow-particle"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: 'hsl(43 74% 49% / 0.5)',
            animationDuration: `${1.5 + (i % 3) * 0.5}s`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

export default HoverTruckAnimation;
