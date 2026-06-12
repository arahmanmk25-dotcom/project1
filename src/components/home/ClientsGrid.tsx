import { useLanguage } from '@/contexts/LanguageContext';
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

const clients = [
  { name: 'Aramco', nameAr: 'أرامكو', logo: aramcoLogo },
  { name: 'Saipem', nameAr: 'سايبم', logo: saipemLogo },
  { name: 'DB Schenker', nameAr: 'دي بي شينكر', logo: dbSchenkerLogo },
  { name: 'Agility', nameAr: 'أجيليتي', logo: agilityLogo },
  { name: 'DHL', nameAr: 'دي إتش إل', logo: dhlLogo },
  { name: 'Maersk', nameAr: 'ميرسك', logo: maerskLogo },
  { name: 'Nesma', nameAr: 'نسما', logo: nesmaLogo },
  { name: 'SICIM', nameAr: 'سيسيم', logo: sicimLogo },
  { name: 'WD Logistics', nameAr: 'دبليو دي', logo: wdLogisticsLogo },
  { name: 'East Pipes', nameAr: 'أنابيب الشرق', logo: eastPipesLogo },
  { name: 'Alqahtani', nameAr: 'القحطاني', logo: alqahtaniLogo },
  { name: 'NPC', nameAr: 'إن بي سي', logo: npcLogo },
];

const ClientsGrid = () => {
  const { language } = useLanguage();

  return (
    <div className="relative max-w-7xl mx-auto px-6">
      {/* Editorial logo grid — no white plates, logos rendered as white silhouettes */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
        {clients.map((client) => (
          <div
            key={client.name}
            className="group/card relative aspect-[3/2] bg-primary flex items-center justify-center p-6 transition-all duration-500 hover:bg-primary/70"
          >
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-gold/30 group-hover/card:border-gold transition-colors duration-300" />
            <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-gold/30 group-hover/card:border-gold transition-colors duration-300" />

            <img
              src={client.logo}
              alt={language === 'ar' ? client.nameAr : client.name}
              className="max-h-12 md:max-h-14 w-auto object-contain opacity-60 group-hover/card:opacity-100 transition-all duration-500"
              style={{ filter: 'brightness(0) invert(1)' }}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Bottom indicator */}
      <div className="mt-12 flex justify-center items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-gold" />
        <div className="w-12 h-px bg-white/20" />
        <span className="text-[10px] text-white/40 uppercase tracking-[0.4em]">
          {language === 'ar' ? 'موثوق عالميًا' : 'Trusted Worldwide'}
        </span>
        <div className="w-12 h-px bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    </div>
  );
};

export default ClientsGrid;
