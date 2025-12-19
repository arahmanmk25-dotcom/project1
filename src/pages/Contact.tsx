import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
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
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
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
                  <a href="mailto:hafcobigmovers@gmail.com" className="text-muted-foreground hover:text-primary">{t('contact.info.email')}</a>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary shrink-0" />
                  <div className="space-y-1">
                    <a href="tel:0535557874" className="block text-muted-foreground hover:text-primary">0535557874</a>
                    <a href="tel:0560676302" className="block text-muted-foreground hover:text-primary">0560676302</a>
                    <a href="tel:0504826306" className="block text-muted-foreground hover:text-primary">0504826306</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary shrink-0" />
                  <div>
                    <p className="font-medium">{t('contact.info.hours')}</p>
                    <p className="text-muted-foreground">{t('contact.info.hoursText')}</p>
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
    </div>
  );
};

export default Contact;