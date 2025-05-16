
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // In a real app, this would send the email to a backend service
    console.log('Subscribing email:', email);
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter."
    });

    // Reset form
    setEmail('');
  };

  return (
    <section className="bg-gclx-navy text-white py-12">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{t('stayUpdated')}</h2>
        <p className="mb-6 max-w-2xl mx-auto text-center">
          {t('subscribeText')}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 justify-center">
          <Input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder={t('emailAddress')} 
            className={`flex-grow bg-white/10 border-white/20 text-white placeholder:text-gray-300 text-center`} 
            required 
          />
          <Button 
            type="submit" 
            className="bg-gclx-gold text-gclx-navy hover:bg-yellow-500"
            alignment="center"
          >
            {t('subscribe')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
