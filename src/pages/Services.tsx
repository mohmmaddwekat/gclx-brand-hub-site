
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';

const Services: React.FC = () => {
  const services = [
    {
      id: "bulk-sourcing",
      title: "Bulk Sourcing & Procurement",
      shortDesc: "Direct relationships with global brands for product procurement",
      icon: "📦",
      fullDesc: [
        "GCLX has established direct relationships with over 40 global brands, allowing us to source products directly from official channels. Our procurement capabilities enable us to secure the best possible prices, which we pass on to our customers.",
        "Our procurement team constantly negotiates with suppliers to ensure we have access to the latest products across fashion, beauty, lifestyle, and more. This direct approach eliminates middlemen and significantly reduces costs without compromising on authenticity or quality."
      ]
    },
    {
      id: "retail-experience",
      title: "Premium Retail Experience",
      shortDesc: "One-stop shop for multiple premium global brands",
      icon: "🏬",
      fullDesc: [
        "As a multi-brand retailer, GCLX offers customers the convenience of shopping for products from dozens of premium global brands in one place. Our carefully curated collections span men's and women's fashion, accessories, beauty products, and lifestyle items.",
        "Our store provides a comfortable and luxurious shopping environment where customers can explore our collection at their leisure. Our knowledgeable staff are always ready to provide guidance and assistance to ensure you find exactly what you're looking for."
      ]
    },
    {
      id: "coupon-program",
      title: "Exclusive Coupon Programme",
      shortDesc: "Save 20-50% with our unique discount system",
      icon: "🏷️",
      highlight: true,
      fullDesc: [
        "Our signature Exclusive Coupon Programme is what sets GCLX apart from other retailers. Through this innovative initiative, customers can access premium products at discounts of 20-50% off regular retail prices.",
        "These substantial savings are made possible through our direct sourcing model, strategic partnerships with brands, and our commitment to operating with efficient margins. The result is authentic, high-quality products at prices that our competitors simply cannot match."
      ]
    }
  ];

  return (
    <PageLayout 
      title="Our Services" 
      description="Explore GCLX General Trading's services including bulk sourcing, retail experience, and exclusive coupon program with 20-50% discounts."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Premium shopping experience with unbeatable prices</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className={`card-shadow ${service.highlight ? 'border-2 border-gclx-gold' : ''}`}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gclx-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                  <Button asChild variant="outline">
                    <a href={`#${service.id}`}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-16 scroll-mt-20 even:bg-gray-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className={`text-8xl p-8 rounded-full ${service.highlight ? 'bg-gclx-gold text-gclx-navy' : 'bg-gray-100'}`}>
                  {service.icon}
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="section-title mb-6">{service.title}</h2>
                {service.fullDesc.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
                {service.highlight && (
                  <div className="mt-6">
                    <Button asChild className="bg-gclx-gold text-gclx-navy hover:bg-yellow-400">
                      <Link to="/collections">Explore Our Collections</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default Services;
