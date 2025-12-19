import { useLanguage } from '@/contexts/LanguageContext';

const Work = () => {
  const { t } = useLanguage();

  const projects = [
    { title: 'Aramco Pipeline Transport', image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600' },
    { title: 'Industrial Equipment Move', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600' },
    { title: 'Heavy Machinery Relocation', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600' },
    { title: 'Port Logistics Project', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
  ];

  const clients = ['Aramco', 'DB-Schenker', 'Agility', 'DHL', 'Maersk', 'SABIC'];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('work.title')}</h1>
          <p className="text-xl text-gold">{t('work.subtitle')}</p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('work.projectsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-primary/60 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('work.clientsTitle')}</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {clients.map((client) => (
              <span key={client} className="text-2xl font-bold text-muted-foreground hover:text-primary transition-colors">{client}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;