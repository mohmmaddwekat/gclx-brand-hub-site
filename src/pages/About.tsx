
import React from 'react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const timelineEvents = [
    {
      year: "2018",
      title: "Founded",
      description: "GCLX General Trading was established in Dubai with a vision to bring global brands to local shoppers at affordable prices."
    },
    {
      year: "2020",
      title: "Bulk Sourcing",
      description: "Developed direct relationships with over 20 global brands for bulk procurement, resulting in better prices for our customers."
    },
    {
      year: "2022",
      title: "Regional Expansion",
      description: "Expanded operations across the UAE and began serving the wider GCC market with faster logistics and delivery networks."
    },
    {
      year: "2023",
      title: "Digital Transformation",
      description: "Launched our e-commerce platform with exclusive coupon programs, offering 20-50% discounts on premium brands."
    }
  ];

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
      title: "Service",
      description: "Fast delivery, easy returns, and responsive customer support are the cornerstones of our business ethos.",
      icon: "🌟"
    }
  ];

  return (
    <PageLayout 
      title="About Us" 
      description="Learn about GCLX General Trading, our mission to bring global brands to local shoppers at unbeatable discounts, our history and values."
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
              At GCLX General Trading, our mission is to bridge the gap between premium global brands and local shoppers by providing authentic products at unbeatable discounts. We leverage our strong supplier relationships and bulk sourcing capabilities to make luxury and quality accessible to everyone in the UAE and beyond.
            </p>
            <p className="text-lg">
              We believe that everyone deserves access to high-quality products from the world's best brands without paying excessive retail markups. Through our exclusive coupon program and direct-to-consumer model, we're able to pass on significant savings of 20-50% to our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timelineEvents.map((event, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6">
                  <div className="bg-gclx-navy text-white rounded-full w-16 h-16 flex items-center justify-center">
                    <span className="font-bold">{event.year}</span>
                  </div>
                  {index < timelineEvents.length - 1 && (
                    <div className="w-1 h-20 bg-gray-300 mx-auto"></div>
                  )}
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gclx-navy mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
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

      {/* Team/Warehouse Photos */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title text-center mb-8">Our Team & Facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="aspect-square bg-gray-200 rounded-md overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${num === 1 ? '1605810230434-7631ac76ec81' : num === 2 ? '1519389950473-47ba0277781c' : num === 3 ? '1581091226825-a6a2a5aee158' : num === 4 ? '1488590528505-98d2b5aba04b' : num === 5 ? '1649972904349-6e44c42644a7' : num === 6 ? '1460925895917-afdab827c52f' : num === 7 ? '1526374965328-7f61d4dc18c5' : '1531297484001-80022131f5a1'}`} 
                  alt="GCLX Team and Warehouse" 
                  className="w-full h-full object-cover"
                />
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

export default About;
