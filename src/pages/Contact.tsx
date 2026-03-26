import { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { FaXTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { supabase } from '@/integrations/supabase/client';
import heroImage from '@/assets/trucks/truck-6.jpeg';
import truck5 from '@/assets/trucks/truck-5.jpeg';
import truck13 from '@/assets/trucks/truck-13.jpeg';
import ScrollReveal from '@/components/shared/ScrollReveal';
import PageTransition from '@/components/shared/PageTransition';
import HeroSlideshow from '@/components/shared/HeroSlideshow';

declare global {
  interface Window {
    hcaptcha: {
      render: (container: string | HTMLElement, params: { sitekey: string; callback: (token: string) => void; 'expired-callback': () => void }) => string;
      reset: (widgetId: string) => void;
      getResponse: (widgetId: string) => string;
    };
  }
}

const HCAPTCHA_SITE_KEY = '3cf229fc-439e-463e-ad04-8d041f6a6eec';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formLoadTime] = useState(Date.now());
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: ''
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (captchaRef.current && window.hcaptcha) {
        widgetIdRef.current = window.hcaptcha.render(captchaRef.current, {
          sitekey: HCAPTCHA_SITE_KEY,
          callback: (token: string) => setCaptchaToken(token),
          'expired-callback': () => setCaptchaToken(null)
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      const existingScript = document.querySelector('script[src*="hcaptcha"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      toast({ title: language === 'ar' ? 'خطأ' : 'Error', description: language === 'ar' ? 'يرجى إكمال التحقق من الكابتشا' : 'Please complete the CAPTCHA verification', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { ...formData, captchaToken, timestamp: formLoadTime }
      });
      if (error) throw error;
      toast({ title: t('common.success'), description: language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '', honeypot: '' });
      setCaptchaToken(null);
      if (widgetIdRef.current && window.hcaptcha) window.hcaptcha.reset(widgetIdRef.current);
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({ title: language === 'ar' ? 'خطأ' : 'Error', description: language === 'ar' ? 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.' : 'Failed to send message. Please try again.', variant: 'destructive' });
      if (widgetIdRef.current && window.hcaptcha) window.hcaptcha.reset(widgetIdRef.current);
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div>
        {/* Hero - Editorial style */}
        <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden -mt-20">
          <HeroSlideshow images={[heroImage, truck5, truck13]} interval={8000} />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
          <div className="relative z-10 container mx-auto px-4 pb-16">
            <ScrollReveal variant="fadeUp">
              <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-3">
                {language === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {language === 'ar' ? 'نحن هنا لمساعدتك' : "We're Here to Help"}
              </h1>
              <p className="text-xl text-white/70 mt-4 max-w-2xl">
                {language === 'ar'
                  ? 'تواصل مع فريقنا للحصول على عرض سعر مخصص أو أي استفسار'
                  : 'Reach out to our team for a customized quote or any inquiry'}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Content - Editorial layout */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <ScrollReveal variant="fadeUp">
                <div>
                  <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">
                    {language === 'ar' ? 'معلومات الاتصال' : 'CONTACT INFORMATION'}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t('contact.info.title')}</h2>
                  <div className="space-y-8">
                    <div className="flex items-start gap-5">
                      <MapPin className="h-6 w-6 text-gold shrink-0 mt-1" />
                      <p className="text-muted-foreground text-lg">{t('contact.info.address')}</p>
                    </div>
                    <div className="flex items-start gap-5">
                      <Mail className="h-6 w-6 text-gold shrink-0 mt-1" />
                      <div className="space-y-1">
                        <a href="mailto:info@hafcobigmovers.com" className="block text-muted-foreground hover:text-primary text-lg transition-colors">info@hafcobigmovers.com</a>
                        <a href="mailto:hafco.bigmovers@yahoo.com" className="block text-muted-foreground hover:text-primary transition-colors">hafco.bigmovers@yahoo.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <Phone className="h-6 w-6 text-gold shrink-0 mt-1" />
                      <div className="space-y-1">
                        <a href="tel:+966535557874" className="block text-muted-foreground hover:text-primary transition-colors">+966 535557874</a>
                        <a href="tel:+966560676302" className="block text-muted-foreground hover:text-primary transition-colors">+966 560676302</a>
                        <a href="tel:+966504826306" className="block text-muted-foreground hover:text-primary transition-colors">+966 504826306</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <Headphones className="h-6 w-6 text-gold shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gold text-lg">{language === 'ar' ? 'لا تنسى جوال التشغيل على مدار الساعه' : 'Work Line (24/7)'}</p>
                        <a href="tel:+966599990239" className="text-muted-foreground hover:text-primary transition-colors">+966 599990239</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-5">
                      <Clock className="h-6 w-6 text-gold shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-lg">{t('contact.info.hours')}</p>
                        <p className="text-muted-foreground">{t('contact.info.hoursText')}</p>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-border">
                      <p className="font-medium mb-4 text-lg">{language === 'ar' ? 'تابعنا على' : 'Follow Us'}</p>
                      <div className="flex items-center gap-5">
                        <a href="https://x.com/HafcoBigMovers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="X"><FaXTwitter className="h-6 w-6" /></a>
                        <a href="https://www.instagram.com/hafcobm/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><FaInstagram className="h-6 w-6" /></a>
                        <a href="https://www.facebook.com/profile.php?id=61585652240180" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><FaFacebook className="h-6 w-6" /></a>
                        <a href="https://www.linkedin.com/in/hafco-big-movers-company-17029439b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><FaLinkedin className="h-6 w-6" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal variant="fadeUp" delay={0.15}>
                <div className="bg-card p-8 md:p-10 rounded-2xl border border-border">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
                      <label htmlFor="honeypot">Leave this field empty</label>
                      <Input id="honeypot" name="honeypot" tabIndex={-1} autoComplete="off" value={formData.honeypot} onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.value }))} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                      <Input required placeholder={t('contact.form.name')} value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} minLength={2} maxLength={100} className="py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                      <Input type="email" required placeholder={t('contact.form.email')} value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} maxLength={254} className="py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.phone')}</label>
                      <Input type="tel" required placeholder={t('contact.form.phone')} value={formData.phone} onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))} pattern="[\+]?[0-9\s\-\(\)]{7,20}" className="py-3" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                      <Textarea required placeholder={t('contact.form.message')} rows={5} value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} minLength={10} maxLength={2000} />
                    </div>
                    <div ref={captchaRef} className="flex justify-center"></div>
                    <Button type="submit" className="w-full gradient-primary py-6 text-lg" disabled={loading || !captchaToken}>
                      {loading ? t('common.loading') : t('contact.form.submit')}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <ScrollReveal variant="fadeUp">
                <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 text-center">
                  {language === 'ar' ? 'موقعنا' : 'OUR LOCATION'}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">{t('contact.location')}</h2>
                <div className="rounded-2xl overflow-hidden shadow-lg">
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
                <div className="mt-6 text-center">
                  <p className="text-muted-foreground mb-2">
                    {language === 'ar' ? 'العنوان المختصر:' : 'Short Address:'} <span className="font-bold text-primary">EQGA2837</span>
                  </p>
                  <a href="https://maps.google.com/?q=EQGA2837+Dammam+Saudi+Arabia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-lg">
                    <MapPin className="h-5 w-5" />
                    {language === 'ar' ? 'افتح في خرائط جوجل' : 'Open in Google Maps'}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
