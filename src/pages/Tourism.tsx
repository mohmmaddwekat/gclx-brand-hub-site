
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroSection from '@/components/tourism/HeroSection';
import DestinationTabs from '@/components/tourism/DestinationTabs';
import InfoSection from '@/components/tourism/InfoSection';

const Tourism: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <PageLayout 
      title={isRTL ? "السياحة في الإمارات" : "UAE Tourism"} 
      description={isRTL ? "استكشف أفضل الوجهات السياحية في الإمارات العربية المتحدة" : "Explore the best tourism destinations in the United Arab Emirates"}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Destinations Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gclx-navy">
            {isRTL ? "الوجهات السياحية" : "Tourism Destinations"}
          </h2>
          
          <DestinationTabs />
        </div>
      </section>

      {/* Information Section */}
      <InfoSection />
    </PageLayout>
  );
};

export default Tourism;
