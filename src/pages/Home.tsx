import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldCheck, TicketPercent, CreditCard, Building, Landmark, Navigation } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import Logo from '@/components/Logo';

const Home: React.FC = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const isMobile = useIsMobile();
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const brands = [
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "Adidas", logo: "https://logo.clearbit.com/adidas.com" },
    { name: "Gucci", logo: "https://logo.clearbit.com/gucci.com" },
    { name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
    { name: "Zara", logo: "https://logo.clearbit.com/zara.com" },
    { name: "Dior", logo: "https://logo.clearbit.com/dior.com" },
    { name: "Calvin Klein", logo: "https://logo.clearbit.com/calvinklein.com" },
    { name: "H&M", logo: "https://logo.clearbit.com/hm.com" },
    { name: "Puma", logo: "https://logo.clearbit.com/puma.com" },
    { name: "Hugo Boss", logo: "https://logo.clearbit.com/hugoboss.com" },
    { name: "Ralph Lauren", logo: "https://logo.clearbit.com/ralphlauren.com" }
  ];

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

  const steps = [{
    title: t('chooseProduct'),
    description: t('chooseProductDesc'),
    icon: "🛍️"
  }, {
    title: t('applyCoupon'),
    description: t('applyCouponDesc'),
    icon: "🏷️"
  }, {
    title: t('enjoySavings'),
    description: t('enjoySavingsDesc'),
    icon: "💰"
  }];

  const trustBadges = [{
    title: t('genuineBrands'),
    description: t('genuineBrandsDesc'),
    icon: <ShieldCheck className="h-6 w-6" />
  }, {
    title: t('instantCoupon'),
    description: t('instantCouponDesc'),
    icon: <TicketPercent className="h-6 w-6" />
  }, {
    title: t('cashPayment'),
    description: t('cashPaymentDesc'),
    icon: <CreditCard className="h-6 w-6" />
  }];

  // UAE Tourism destinations
  const tourismDestinations = [
    {
      id: 1,
      name: t('dubai'),
      nameAr: 'دبي',
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=500&auto=format&fit=crop",
      description: t('dubaiDesc'),
      descriptionAr: 'اكتشف روعة دبي، مدينة السحاب والشواطئ الرائعة'
    },
    {
      id: 2,
      name: t('abuDhabi'),
      nameAr: 'أبو ظبي',
      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=500&auto=format&fit=crop",
      description: t('abuDhabiDesc'),
      descriptionAr: 'استكشف عاصمة الإمارات الثقافية الغنية بالتراث'
    },
    {
      id: 3,
      name: t('sharjah'),
      nameAr: 'الشارقة',
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=500&auto=format&fit=crop",
      description: t('sharjahDesc'),
      descriptionAr: 'استمتع بالثقافة والفن في عاصمة الإمارات الثقافية'
    }
  ];

  return <PageLayout title={t('home')} description={t('shopAuthentic')}>
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
            {trustBadges.map((badge, index) => <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="flex justify-center mb-4">{badge.icon}</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2 text-center">{badge.title}</h3>
                <p className="text-gray-600 text-center">{badge.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* UAE Tourism Section */}
      <section className="py-16 bg-white w-full">
        <div className="container-custom">
          <h2 className="section-title mb-8 text-center text-2xl md:text-3xl font-bold text-gclx-navy">
            {isRTL ? 'استكشف الإمارات العربية المتحدة' : 'Explore UAE Tourism'}
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            {isRTL ? 
              'اكتشف روعة الإمارات العربية المتحدة مع رحلاتنا السياحية ا��مميزة. تجارب لا تُنسى وأماكن مذهلة تنتظرك!' : 
              'Discover the beauty of the UAE with our curated tourism packages. Unforgettable experiences and amazing destinations await!'}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourismDestinations.map((destination) => (
              <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={isRTL ? destination.nameAr : destination.name} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Landmark className="h-5 w-5 text-gclx-gold" />
                    <h3 className="text-xl font-semibold text-gclx-navy">
                      {isRTL ? destination.nameAr : destination.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {isRTL ? destination.descriptionAr : destination.description}
                  </p>
                  <Button asChild variant="outline" className="w-full border-gclx-gold text-gclx-navy hover:bg-gclx-gold hover:text-white">
                    <Link to="/tourism">
                      <Navigation className="mr-1" size={18} />
                      {isRTL ? 'اكتشف المزيد' : 'Discover More'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild className="bg-gclx-navy hover:bg-blue-900 text-white">
              <Link to="/tourism">
                {isRTL ? 'عرض جميع الوجهات السياحية' : 'View All Tourism Destinations'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Carousel */}
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
                        <CardContent className="flex flex-col items-center justify-center h-36 p-4">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="h-16 w-auto mb-2 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = `https://via.placeholder.com/120x60?text=${brand.name}`;
                            }}
                          />
                          <span className="text-sm font-medium text-gclx-navy text-center mt-2">{brand.name}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {!isMobile && (
                <>
                  <CarouselPrevious className={`absolute ${isRTL ? '-right-12' : '-left-12'}`} />
                  <CarouselNext className={`absolute ${isRTL ? '-left-12' : '-right-12'}`} />
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
            {steps.map((step, index) => <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-md mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
                {index < steps.length - 1 && <div className={`hidden md:block absolute ${isRTL ? 'left-0 rtl-flip' : 'right-0'} top-1/2 transform -translate-y-1/2`}>
                    →
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>;
};

export default Home;
