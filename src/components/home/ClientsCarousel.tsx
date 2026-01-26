import { useLanguage } from '@/contexts/LanguageContext';

const ClientsCarousel = () => {
  const { language } = useLanguage();

  const clients = [
    { en: 'Aramco', ar: 'أرامكو' },
    { en: 'Saipem', ar: 'سايبم' },
    { en: 'DB-Schenker', ar: 'دي بي شينكر' },
    { en: 'Agility', ar: 'أجيليتي' },
    { en: 'DHL', ar: 'دي إتش إل' },
    { en: 'Maersk', ar: 'ميرسك' },
    { en: 'Nesma & Partners', ar: 'نسما وشركاؤها' },
    { en: 'SICIM', ar: 'سيسيم' },
    { en: 'WD Logistics', ar: 'دبليو دي لوجستكس' },
    { en: 'Eastern Pipes Co.', ar: 'شركة أنابيب الشرق' },
    { en: 'Alqahtani Pipe Coating', ar: 'القحطاني لطلاء الأنابيب' },
    { en: 'NPC', ar: 'إن بي سي' },
  ];

  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="w-full overflow-hidden py-8">
      <div 
        className="flex animate-scroll"
        style={{
          width: 'max-content',
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.en}-${index}`}
            className="flex-shrink-0 px-8 md:px-12"
          >
            <div className="flex items-center justify-center h-16 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300 group">
              <span className="text-lg md:text-xl font-bold text-white/70 group-hover:text-gold transition-colors whitespace-nowrap">
                {language === 'ar' ? client.ar : client.en}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsCarousel;
