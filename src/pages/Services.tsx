
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "bulk-sourcing",
      title: t("bulkSourcing"),
      shortDesc: t("bulkSourcingShort"),
      icon: "📦",
      fullDesc: [
        t("bulkSourcingDesc1"),
        t("bulkSourcingDesc2")
      ]
    },
    {
      id: "retail-experience",
      title: t("retailExperience"),
      shortDesc: t("retailExperienceShort"),
      icon: "🏬",
      fullDesc: [
        t("retailExperienceDesc1"),
        t("retailExperienceDesc2")
      ]
    },
    {
      id: "coupon-program",
      title: t("couponProgram"),
      shortDesc: t("couponProgramShort"),
      icon: "🏷️",
      highlight: true,
      fullDesc: [
        t("couponProgramDesc1"),
        t("couponProgramDesc2")
      ]
    }
  ];

  return (
    <PageLayout 
      title={t("ourServices")}
      description={t("premiumExperience")}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4 text-center">{t("ourServices")}</h1>
          <p className="text-xl max-w-2xl mx-auto text-center">{t("premiumExperience")}</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className={`card-shadow text-center ${service.highlight ? 'border-2 border-gclx-gold' : ''}`}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4 text-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gclx-navy mb-2 text-center">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-center">{service.shortDesc}</p>
                  <div className="flex justify-center">
                    <Button asChild variant="outline">
                      <a href={`#${service.id}`}>{t("learnMore")}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service) => (
        <section key={service.id} id={service.id} className="py-16 scroll-mt-20 even:bg-gray-50">
          <div className="container-custom text-center">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className={`text-8xl p-8 rounded-full ${service.highlight ? 'bg-gclx-gold text-gclx-navy' : 'bg-gray-100'}`}>
                  {service.icon}
                </div>
              </div>
              <div className="md:w-2/3 text-center">
                <h2 className="section-title mb-6 text-center">{service.title}</h2>
                {service.fullDesc.map((paragraph, i) => (
                  <p key={i} className="mb-4 text-gray-700 text-center">{paragraph}</p>
                ))}
                {service.highlight && (
                  <div className="mt-6 flex justify-center">
                    <Button asChild className="bg-gclx-gold text-gclx-navy hover:bg-yellow-400">
                      <Link to="/collections">{t("exploreCollections")}</Link>
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
