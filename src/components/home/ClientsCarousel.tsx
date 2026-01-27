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

const ClientsCarousel = () => {
  const clients = [
    { name: 'Aramco', logo: aramcoLogo },
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

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden py-10">
      <div 
        className="flex animate-scroll"
        style={{
          width: 'max-content',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 px-4 md:px-6"
          >
            <div className="flex items-center justify-center w-[120px] h-[70px] md:w-[150px] md:h-[85px] px-2 py-1 bg-white rounded-xl shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 group">
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-12 md:h-16 w-auto max-w-[110px] md:max-w-[140px] object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
