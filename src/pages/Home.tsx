
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, TicketPercent, CreditCard } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const brands = [
    "Amazon", "Adidas", "Gucci", "Nike", "Zara", "Dior",
    "Calvin Klein", "H&M", "Puma", "Hugo Boss", "Ralph Lauren"
  ];

  const steps = [
    {
      title: t('chooseProduct'),
      description: t('chooseProductDesc'),
      icon: "🛍️"
    },
    {
      title: t('applyCoupon'),
      description: t('applyCouponDesc'),
      icon: "🏷️"
    },
    {
      title: t('enjoySavings'),
      description: t('enjoySavingsDesc'),
      icon: "💰"
    }
  ];

  const trustBadges = [
    {
      title: t('genuineBrands'),
      description: t('genuineBrandsDesc'),
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: t('instantCoupon'),
      description: t('instantCouponDesc'),
      icon: <TicketPercent className="h-6 w-6" />
    },
    {
      title: t('cashPayment'),
      description: t('cashPaymentDesc'),
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  return (
    <PageLayout title={t('home')} description={t('shopAuthentic')}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 text-white py-16 md:py-24 w-full">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            {t('unlockDiscounts')}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            {t('shopAuthentic')}
          </p>
          <Button asChild className="bg-gclx-gold text-gclx-navy hover:bg-yellow-400 text-lg px-8 py-6 h-auto">
            <Link to="/collections">{t('exploreCollections')}</Link>
          </Button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-4xl mb-4 flex justify-center">{badge.icon}</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{badge.title}</h3>
                <p className="text-gray-600">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
      <section className="py-12 w-full">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">{t('featuredBrands')}</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center h-28">
                        <span className="text-lg font-medium text-gclx-navy">{brand}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">{t('howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-md mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block absolute ${isRTL ? 'left-0 rtl-flip' : 'right-0'} top-1/2 transform -translate-y-1/2`}>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default Home;
