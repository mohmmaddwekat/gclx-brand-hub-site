
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-gclx-navy to-blue-950 text-white py-16 md:py-24 w-full">
      <div className="container-custom">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          {isRTL ? "استكشف روعة الإمارات العربية المتحدة" : "Explore the Beauty of UAE"}
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-center">
          {isRTL ? 
            "اكتشف المعالم المذهلة في الإمارات العربية المتحدة من المدن الحديثة إلى التراث الغني والمناظر الطبيعية الخلابة." : 
            "Discover the amazing landmarks in the United Arab Emirates from modern cities to rich heritage and stunning landscapes."}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
