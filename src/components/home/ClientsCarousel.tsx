import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const ClientsCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [trucks, setTrucks] = useState<FloatingTruck[]>([]);

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

  // Initialize floating trucks
  useEffect(() => {
    const truckCount = window.innerWidth < 768 ? 6 : 10;
    const newTrucks: FloatingTruck[] = [];

    for (let i = 0; i < truckCount; i++) {
      newTrucks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 16 + 14,
        speed: Math.random() * 15 + 20,
        opacity: Math.random() * 0.3 + 0.1,
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
      {/* Floating truck animations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {trucks.map((truck) => (
          <motion.div
            key={truck.id}
            className="absolute"
            style={{
              left: `${truck.x}%`,
              top: `${truck.y}%`,
            }}
            animate={{
              x: [0, 30, -20, 10, 0],
              y: [0, -15, 10, -5, 0],
            }}
            transition={{
              duration: truck.speed,
              repeat: Infinity,
              ease: 'easeInOut',
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
          </motion.div>
        ))}

        {/* Additional glowing dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/30"
            style={{
              left: `${5 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.15,
            }}
          />
        ))}
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
