import { useEffect, useState, useRef } from 'react';
import { Truck } from 'lucide-react';
import aramcoLogo from '@/assets/clients/aramco.png';
import saipemLogo from '@/assets/clients/saipem.png';
import dbSchenkerLogo from '@/assets/clients/db-schenker.svg';
import agilityLogo from '@/assets/clients/agility.png';
import dhlLogo from '@/assets/clients/dhl.svg';
import maerskLogo from '@/assets/clients/maersk.png';
import nesmaLogo from '@/assets/clients/nesma.png';
import sicimLogo from '@/assets/clients/sicim.png';
import wdLogisticsLogo from '@/assets/clients/wd-logistics.png';
import eastPipesLogo from '@/assets/clients/east-pipes.png';
import alqahtaniLogo from '@/assets/clients/alqahtani.png';
import npcLogo from '@/assets/clients/npc.png';

interface FloatingTruck {
  id: number;
  startX: number;
  startY: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const ClientsCarousel = () => {
  const [trucks, setTrucks] = useState<FloatingTruck[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: 'Aramco', logo: aramcoLogo, size: 'large' },
    { name: 'Saipem', logo: saipemLogo },
    { name: 'DB-Schenker', logo: dbSchenkerLogo },
    { name: 'Agility', logo: agilityLogo },
    { name: 'DHL', logo: dhlLogo },
    { name: 'Maersk', logo: maerskLogo },
    { name: 'Nesma & Partners', logo: nesmaLogo },
    { name: 'SICIM', logo: sicimLogo },
    { name: 'WD Logistics', logo: wdLogisticsLogo },
    { name: 'Eastern Pipes Co.', logo: eastPipesLogo },
    { name: 'Alqahtani Pipe Coating', logo: alqahtaniLogo },
    { name: 'NPC', logo: npcLogo },
  ];

  // Initialize floating trucks with CSS animation parameters
  useEffect(() => {
    const truckCount = window.innerWidth < 768 ? 8 : 14;
    const newTrucks: FloatingTruck[] = [];

    for (let i = 0; i < truckCount; i++) {
      newTrucks.push({
        id: i,
        startX: Math.random() * 90 + 5,
        startY: Math.random() * 80 + 10,
        size: Math.random() * 14 + 12,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.25 + 0.1,
      });
    }

    setTrucks(newTrucks);
  }, []);

  const getLogoClass = (size?: string) => {
    if (size === 'large') {
      return "h-16 md:h-20 w-auto max-w-[130px] md:max-w-[160px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300";
    }
    return "h-12 md:h-16 w-auto max-w-[110px] md:max-w-[140px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300";
  };

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-10 relative">
      {/* Floating truck animations with CSS keyframes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {trucks.map((truck) => (
          <div
            key={truck.id}
            className="absolute animate-float-truck"
            style={{
              left: `${truck.startX}%`,
              top: `${truck.startY}%`,
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
                filter: 'drop-shadow(0 0 6px hsl(43 74% 49% / 0.4))',
              }}
            />
          </div>
        ))}

        {/* Glowing particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-glow-particle"
            style={{
              width: 3 + (i % 4),
              height: 3 + (i % 4),
              left: `${(i * 5) % 100}%`,
              top: `${(i * 7) % 100}%`,
              backgroundColor: 'hsl(43 74% 49% / 0.3)',
              animationDuration: `${3 + (i % 4)}s`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}

        {/* Connecting lines effect - decorative */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          {[...Array(6)].map((_, i) => (
            <line
              key={`line-${i}`}
              x1={`${10 + i * 15}%`}
              y1={`${20 + (i % 3) * 25}%`}
              x2={`${25 + i * 12}%`}
              y2={`${40 + (i % 4) * 15}%`}
              stroke="hsl(43 74% 49%)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDuration: `${3 + i * 0.5}s` }}
            />
          ))}
        </svg>
      </div>

      {/* Clients carousel */}
      <div 
        className="flex animate-scroll relative z-10"
        style={{
          width: 'max-content',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 px-4 md:px-6"
          >
            <div className="flex items-center justify-center w-[120px] h-[70px] md:w-[150px] md:h-[85px] px-2 py-1 rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group" style={{ backgroundColor: '#eff6f2' }}>
              <img 
                src={client.logo} 
                alt={client.name}
                className={getLogoClass(client.size)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
