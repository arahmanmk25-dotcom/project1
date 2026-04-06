const ClientsMarquee = () => {
  const row1 = [
    'Aramco', 'Saipem', 'DB-Schenker', 'Agility', 'DHL', 'Maersk',
    'Nesma & Partners', 'SICIM', 'WD Logistics', 'Eastern Pipes', 'NPC', 'Alqahtani',
  ];
  const row2 = [
    'DHL', 'Maersk', 'Aramco', 'SICIM', 'Agility', 'NPC',
    'Saipem', 'DB-Schenker', 'WD Logistics', 'Nesma & Partners', 'Eastern Pipes', 'Alqahtani',
  ];

  const duplicated1 = [...row1, ...row1];
  const duplicated2 = [...row2, ...row2];

  return (
    <div className="w-full overflow-hidden py-8 relative z-10 space-y-4" dir="ltr">
      {/* Row 1 - scroll left */}
      <div className="flex animate-marquee-left" style={{ width: 'max-content' }}>
        {duplicated1.map((name, i) => (
          <div key={`r1-${i}`} className="flex-shrink-0 px-2">
            <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-background/10 backdrop-blur-sm border border-white/10 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <span className="text-sm font-semibold text-white/80 whitespace-nowrap tracking-wide">
                {name.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Row 2 - scroll right */}
      <div className="flex animate-marquee-right" style={{ width: 'max-content' }}>
        {duplicated2.map((name, i) => (
          <div key={`r2-${i}`} className="flex-shrink-0 px-2">
            <div className="flex items-center justify-center px-6 py-3 rounded-xl bg-background/10 backdrop-blur-sm border border-white/10 hover:bg-background/20 hover:scale-105 transition-all duration-300">
              <span className="text-sm font-semibold text-white/80 whitespace-nowrap tracking-wide">
                {name.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsMarquee;
