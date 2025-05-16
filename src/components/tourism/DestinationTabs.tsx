
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { destinations } from '@/data/tourismData';
import DestinationDetail from './DestinationDetail';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';

const DestinationTabs: React.FC = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = React.useState('dubai');

  return (
    <div className="w-full">
      {isMobile ? (
        // Mobile view - simple button grid
        <div className="w-full">
          <div className="grid grid-cols-2 gap-2 mb-6">
            {destinations.map((destination) => (
              <Button
                key={destination.id}
                variant={activeTab === destination.name.toLowerCase().replace(' ', '-') ? "default" : "outline"}
                className={`w-full ${
                  activeTab === destination.name.toLowerCase().replace(' ', '-')
                    ? 'bg-gclx-navy text-white'
                    : 'bg-white'
                }`}
                onClick={() => setActiveTab(destination.name.toLowerCase().replace(' ', '-'))}
              >
                {isRTL ? destination.nameAr : destination.name}
              </Button>
            ))}
          </div>
          
          <div className="mt-6">
            {destinations.map((destination) => {
              const tabValue = destination.name.toLowerCase().replace(' ', '-');
              return activeTab === tabValue ? (
                <DestinationDetail key={destination.id} destination={destination} />
              ) : null;
            })}
          </div>
        </div>
      ) : (
        // Desktop view - tabs
        <Tabs defaultValue="dubai" className="w-full">
          <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
            {destinations.map((destination) => (
              <TabsTrigger 
                key={destination.id} 
                value={destination.name.toLowerCase().replace(' ', '-')}
                className={`
                  border border-gray-200 bg-white hover:bg-gray-50
                  data-[state=active]:bg-gclx-navy data-[state=active]:text-white
                  whitespace-nowrap px-4 py-2
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
      )}
    </div>
  );
};

export default DestinationTabs;
