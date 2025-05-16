
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/tourismData';
import DestinationDetail from './DestinationDetail';

const DestinationTabs: React.FC = () => {
  const { isRTL } = useLanguage();

  return (
    <Tabs defaultValue="dubai" className="w-full">
      <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
        {destinations.map((destination) => (
          <TabsTrigger key={destination.id} value={destination.name.toLowerCase().replace(' ', '-')}>
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
