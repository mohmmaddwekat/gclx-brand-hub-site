
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

const Home: React.FC = () => {
  const brands = [
    "Amazon", "Adidas", "Gucci", "Nike", "Zara", "Dior",
    "Calvin Klein", "H&M", "Puma", "Hugo Boss", "Ralph Lauren"
  ];

  const steps = [
    {
      title: "Choose your product",
      description: "Browse our extensive collection of authentic products from over 40 global brands.",
      icon: "🛍️"
    },
    {
      title: "Apply GCLX coupon",
      description: "Enjoy exclusive GCLX discounts that save you 20-50% off retail prices.",
      icon: "🏷️"
    },
    {
      title: "Enjoy big savings",
      description: "Experience premium products at unbeatable prices.",
      icon: "💰"
    }
  ];

  const trustBadges = [
    {
      title: "Genuine Brands",
      description: "100% authentic products from official sources",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Instant Coupon",
      description: "Redeem your GCLX coupon for immediate savings",
      icon: <TicketPercent className="h-6 w-6" />
    },
    {
      title: "Cash Payment",
      description: "Simple cash payment at our store location",
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  return (
    <PageLayout title="Home" description="Shop authentic fashion, beauty and lifestyle products from 40+ world-class brands at 20-50% off.">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 text-white py-16 md:py-24 w-full">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Unlock <span className="text-gclx-gold">20-50% OFF</span> on Top Global Brands — Instant Coupon Redemption
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Shop authentic products from 40+ names you love.
          </p>
          <Button asChild className="bg-gclx-gold text-gclx-navy hover:bg-yellow-400 text-lg px-8 py-6 h-auto">
            <Link to="/collections">Explore Collections</Link>
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
          <h2 className="section-title text-center mb-8">Featured Brands</h2>
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
          <h2 className="section-title text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-white w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl shadow-md mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2">
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
