
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, TicketPercent, CreditCard } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Home: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const brands = ["Amazon", "Adidas", "Gucci", "Nike", "Zara", "Dior", "Calvin Klein", "H&M", "Puma", "Hugo Boss", "Ralph Lauren"];

  // Auto-scroll effect for carousel
  useEffect(() => {
    if (!carouselApi) return;
    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [carouselApi]);

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
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            {t('unlockDiscounts')}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-center">
            {t('shopAuthentic')}
          </p>
          <div className="flex justify-center">
            <Button asChild className="bg-gclx-gold text-gclx-navy hover:bg-yellow-400 text-lg px-8 py-6 h-auto" alignment="center">
              <Link to="/collections" className="">{t('exploreCollections')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-gray-50 w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="flex justify-center mb-4">{badge.icon}</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2 text-center">{badge.title}</h3>
                <p className="text-gray-600 text-center">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Carousel - Fixed for Arabic */}
      <section className="py-12 bg-white w-full">
        <div className="container-custom">
          <h2 className="section-title mb-8 text-center">{t('featuredBrands')}</h2>
          <div className="relative max-w-4xl mx-auto">
            <Carousel className="w-full" setApi={setCarouselApi} opts={{
              align: "center",
              loop: true,
              direction: isRTL ? "rtl" : "ltr"
            }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {brands.map((brand, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center h-28">
                          <span className="text-lg font-medium text-gclx-navy text-center">{brand}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious className={`absolute ${isRTL ? 'right-0' : 'left-0'} -translate-x-[-100%] top-1/2 -translate-y-1/2`} />
                  <CarouselNext className={`absolute ${isRTL ? 'left-0' : 'right-0'} translate-x-[100%] top-1/2 -translate-y-1/2`} />
                </>
              )}
            </Carousel>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="container-custom">
          <h2 className="section-title mb-12 text-center">{t('howItWorks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-md mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
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
