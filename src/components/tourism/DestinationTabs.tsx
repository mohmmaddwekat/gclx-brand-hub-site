
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/tourismData';
import DestinationDetail from './DestinationDetail';
import { useIsMobile } from '@/hooks/use-mobile';

const DestinationTabs: React.FC = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <Tabs defaultValue="dubai" className="w-full">
      <TabsList className={`flex flex-wrap gap-2 justify-center mb-8 ${isMobile ? 'p-2' : ''}`}>
        {destinations.map((destination) => (
          <TabsTrigger 
            key={destination.id} 
            value={destination.name.toLowerCase().replace(' ', '-')}
            className={`
              ${isMobile ? 'px-3 py-2 text-sm rounded-full' : ''} 
              border border-gray-200 bg-white hover:bg-gray-50
              data-[state=active]:bg-gclx-navy data-[state=active]:text-white
              transition-all duration-200
            `}
          >
            {isRTL ? destination.nameAr : destination.name}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {destinations.map((destination) => (
        <TabsContent key={destination.id} value={destination.name.toLowerCase().replace(' ', '-')}>
          <DestinationDetail destination={destination} />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DestinationTabs;
