import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import hafcoLogo from '@/assets/hafco-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/fleet', label: t('nav.fleet') },
    { href: '/work', label: t('nav.work') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg h-14'
          : 'glass h-16'
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover-lift shrink-0">
            <img
              src={hafcoLogo}
              alt="HAFCO Logo"
              className={`w-auto object-contain transition-all duration-300 ${
                isScrolled ? 'h-7 sm:h-8' : 'h-8 sm:h-10'
              }`}
            />
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-primary leading-tight transition-all duration-300 ${
                  isScrolled ? 'text-lg' : 'text-xl'
                }`}
              >
                {language === 'ar' ? 'هافكو' : 'HAFCO'}
              </h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                {language === 'ar' ? 'للنقل الثقيل' : 'BIG MOVERS'}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-1 sm:gap-2 hover:bg-primary/10 px-2 sm:px-3"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium text-xs sm:text-sm">
                {language === 'en' ? 'العربية' : 'EN'}
              </span>
            </Button>

            {/* CTA Button - Desktop */}
            <Link to="/contact" className="hidden md:block">
              <Button className="gradient-primary hover:opacity-90 transition-opacity">
                {t('nav.getQuote')}
              </Button>
            </Link>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-9 w-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Full screen overlay */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed inset-x-0 top-14 bottom-0 bg-background/98 backdrop-blur-xl animate-fade-in z-40 overflow-y-auto">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 ${
                  isActive(link.href)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-primary/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4"
            >
              <Button className="w-full gradient-primary py-6 text-base font-bold">
                {t('nav.getQuote')}
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
