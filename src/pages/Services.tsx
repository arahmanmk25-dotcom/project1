import { Truck, Cylinder, Construction, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Truck, title: t('services.heavy.title'), desc: t('services.heavy.description'), image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600' },
    { icon: Cylinder, title: t('services.petroleum.title'), desc: t('services.petroleum.description'), image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=600' },
    { icon: Construction, title: t('services.crane.title'), desc: t('services.crane.description'), image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600' },
    { icon: Package, title: t('services.logistics.title'), desc: t('services.logistics.description'), image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('services.title')}</h1>
          <p className="text-xl text-gold">{t('services.subtitle')}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden border border-border hover-lift group">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;