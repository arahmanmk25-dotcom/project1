import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import hafcoLogo from '@/assets/hafco-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/fleet', label: t('nav.fleet') },
    { href: '/work', label: t('nav.work') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (path: string) => location.pathname === path;
  const currentPage = navLinks.find((l) => isActive(l.href)) ?? navLinks[0];

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

          {/* Desktop Navigation - Centered current page with dropdown pill */}
          <div
            className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <div className="relative cursor-pointer py-2">
              {/* Current page label with underline */}
              <span className="text-sm font-semibold text-foreground tracking-wide pb-1 border-b-2 border-primary">
                {currentPage.label}
              </span>

              {/* Dropdown pill with all links */}
              {isMenuOpen && (
                <>
                  {/* Bridge area to keep hover alive */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] h-5 pointer-events-none" />
                  <div className="absolute top-[calc(100%+20px)] left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur-xl rounded-full shadow-xl border border-border/30 px-2 py-1.5 flex items-center gap-1 animate-fade-in z-50">
                    {navLinks.filter((l) => l.href !== currentPage.href).map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-1.5 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-150 ${
                          isActive(link.href)
                            ? 'text-primary bg-primary/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

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

            {/* Mobile Menu Toggle - shows current page name + chevron */}
            <button
              className="lg:hidden flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary/10 text-foreground font-medium text-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span>{currentPage.label}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="lg:hidden absolute top-full right-4 left-4 sm:left-auto sm:w-64 bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-fade-in z-50"
        >
          <nav className="py-2">
            {navLinks.filter((l) => l.href !== currentPage.href).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-5 py-3 text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border mt-1 pt-1 px-3 pb-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full gradient-primary mt-1 font-bold">
                  {t('nav.getQuote')}
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
