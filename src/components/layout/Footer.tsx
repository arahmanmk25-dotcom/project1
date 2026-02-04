import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import hafcoLogo from '@/assets/hafco-logo.png';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import FloatingTrucksBackground from '@/components/shared/FloatingTrucksBackground';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/work', label: t('nav.work') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const services = [
    t('services.heavy.title'),
    t('services.petroleum.title'),
    t('services.crane.title'),
    t('services.logistics.title'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Truck Animation Background */}
      <FloatingTrucksBackground truckCount={15} particleCount={20} />
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={hafcoLogo} 
                alt="HAFCO Logo" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <h2 className="text-2xl font-bold mb-2">
              {language === 'ar' ? 'هافكو' : 'HAFCO'}
            </h2>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t('footer.services')}
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/80 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gold">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <a 
                  href="https://maps.app.goo.gl/5j8xUKXF6DrfnAyM7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-gold transition-colors"
                >
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">
                    {t('contact.info.address')}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a
                  href="mailto:info@hafcobigmovers.com"
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                >
                  info@hafcobigmovers.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href="tel:+966535557874" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    +966 535557874
                  </a>
                  <a href="tel:+966560676302" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    +966 560676302
                  </a>
                  <a href="tel:+966504826306" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    +966 504826306
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-gold shrink-0" />
                <div className="flex flex-col text-sm">
                  <span className="text-gold font-medium">
                    {language === 'ar' ? 'لا تنسى جوال التشغيل على مدار الساعه' : 'Work Line (24/7)'}
                  </span>
                  <a href="tel:+966599990239" className="text-primary-foreground/80 hover:text-gold transition-colors">
                    +966 599990239
                  </a>
                </div>
              </li>
            </ul>
            {/* Social Media */}
            <div className="mt-6">
              <p className="text-sm text-gold mb-3">{language === 'ar' ? 'تابعنا' : 'Follow Us'}</p>
              <div className="flex items-center gap-4">
                <a 
                  href="https://x.com/HafcoBigMovers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                  aria-label="X (Twitter)"
                >
                  <FaXTwitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/hafcobm/?utm_source=ig_web_button_share_sheet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61585652240180" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/hafco-big-movers/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-gold transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 relative z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} HAFCO. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link
                to="/privacy"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/terms"
                className="text-primary-foreground/70 hover:text-gold transition-colors"
              >
                {t('footer.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
