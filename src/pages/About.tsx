
import React from 'react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const values = [
    {
      title: "Authenticity",
      description: "We guarantee 100% authentic products directly sourced from official channels. No counterfeits, ever.",
      icon: "🛡️"
    },
    {
      title: "Value",
      description: "Our business model is built on bringing our customers maximum value through exclusive bulk sourcing and distributor relationships.",
      icon: "💎"
    },
    {
      title: "Transparency",
      description: "We believe in clear communications and honest business practices, with no hidden fees or misleading claims.",
      icon: "🌟"
    }
  ];

  return (
    <PageLayout 
      title="About Us" 
      description="Learn about GCLX General Trading, our mission to bring global brands to local shoppers at unbeatable discounts, and our values."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">About GCLX General Trading</h1>
          <p className="text-xl max-w-2xl mx-auto">Your trusted partner for authentic global brands at unbeatable prices</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Our Mission</h2>
            <p className="text-lg mb-8">
              At GCLX General Trading, our mission is to bridge the gap between premium global brands and local shoppers by providing authentic products at unbeatable discounts. We leverage our strong supplier relationships and bulk sourcing capabilities to make luxury and quality accessible to everyone.
            </p>
            <p className="text-lg">
              We believe that everyone deserves access to high-quality products from the world's best brands without paying excessive retail markups. Through our exclusive coupon program and direct-to-consumer model, we're able to pass on significant savings of 20-50% to our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Our Promise</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8">
              We connect shoppers with global brands at unbeatable coupon-powered prices, all with total transparency and authenticity. Our commitment to excellence means you can shop with confidence, knowing that every item in our store is genuine and offered at the best possible price.
            </p>
            <p className="text-lg">
              When you visit GCLX, you're guaranteed a premium shopping experience with personalized service and expert advice to help you find exactly what you're looking for.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gclx-navy mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default About;
