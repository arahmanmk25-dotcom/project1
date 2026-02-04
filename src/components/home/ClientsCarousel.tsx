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

  const getLogoClass = (size?: string) => {
    if (size === 'large') {
      return "h-20 md:h-28 w-auto max-w-[180px] md:max-w-[220px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300";
    }
    return "h-16 md:h-24 w-auto max-w-[160px] md:max-w-[200px] object-contain opacity-95 group-hover:opacity-100 transition-all duration-300";
  };

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden py-12">
      <div 
        className="flex animate-scroll"
        style={{
          width: 'max-content',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 px-5 md:px-8"
          >
            <div 
              className="flex items-center justify-center w-[160px] h-[100px] md:w-[220px] md:h-[130px] px-4 py-3 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group border border-white/10" 
              style={{ backgroundColor: '#f5f9f6' }}
            >
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
