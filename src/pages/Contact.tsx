import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import heroImage from '@/assets/trucks/truck-6.jpeg';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: t('common.success'), description: 'Your message has been sent!' });
    }, 1000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/90" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('contact.title')}</h1>
          <p className="text-xl text-gold">{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">{t('contact.info.address')}</p>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary shrink-0" />
                  <a href="mailto:info@hafcobigmovers.com" className="text-muted-foreground hover:text-primary">info@hafcobigmovers.com</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:+966535557874" className="block text-muted-foreground hover:text-primary">+966 535557874</a>
                    <a href="tel:+966560676302" className="block text-muted-foreground hover:text-primary">+966 560676302</a>
                    <a href="tel:+966504826306" className="block text-muted-foreground hover:text-primary">+966 504826306</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Headphones className="h-6 w-6 text-gold shrink-0" />
                  <div>
                    <p className="font-medium text-gold">{language === 'ar' ? 'لا تنسى جوال التشغيل على مدار الساعه' : 'Work Line (24/7)'}</p>
                    <a href="tel:+966599990239" className="text-muted-foreground hover:text-primary">+966 599990239</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">{t('contact.info.hours')}</p>
                    <p className="text-muted-foreground">{t('contact.info.hoursText')}</p>
                  </div>
                </div>
                {/* Social Media */}
                <div className="pt-4 border-t border-border">
                  <p className="font-medium mb-3">{language === 'ar' ? 'تابعنا على' : 'Follow Us'}</p>
                  <div className="flex items-center gap-4">
                    <a href="https://x.com/HafcoBigMovers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X">
                      <FaXTwitter className="h-5 w-5" />
                    </a>
                    <a href="https://www.instagram.com/hafcobm/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                      <FaInstagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61585652240180" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                      <FaFacebook className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/hafco-big-movers-company-17029439b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                  <Input required placeholder={t('contact.form.name')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                  <Input type="email" required placeholder={t('contact.form.email')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.phone')}</label>
                  <Input type="tel" required placeholder={t('contact.form.phone')} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                  <Textarea required placeholder={t('contact.form.message')} rows={4} />
                </div>
                <Button type="submit" className="w-full gradient-primary" disabled={loading}>
                  {loading ? t('common.loading') : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">{t('contact.location')}</h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.6882459044!2d50.0908!3d26.4207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e6db00000001%3A0x1234567890abcdef!2sEQGA2837%2C%20Dammam!5e0!3m2!1sen!2ssa!4v1703036400000!5m2!1sen!2ssa"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'ar' ? 'موقع هافكو' : 'HAFCO Location'}
              className="w-full"
            />
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground mb-2">
              {language === 'ar' ? 'العنوان المختصر:' : 'Short Address:'} <span className="font-bold text-primary">EQGA2837</span>
            </p>
            <a 
              href="https://maps.google.com/?q=EQGA2837+Dammam+Saudi+Arabia" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <MapPin className="h-4 w-4" />
              {language === 'ar' ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
