
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Destination } from '@/data/tourismData';
import ImageGallery from './ImageGallery';
import AttractionCard from './AttractionCard';

interface DestinationDetailProps {
  destination: Destination;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ destination }) => {
  const { isRTL } = useLanguage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <div className="space-y-6">
          <div className="relative">
            <img 
              src={destination.image} 
              alt={isRTL ? destination.nameAr : destination.name} 
              className="w-full h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
          
          <ImageGallery 
            images={destination.gallery} 
            destinationName={destination.name} 
          />
        </div>
      </div>
      
      <div className="lg:col-span-3">
        <h3 className="text-2xl font-bold mb-4 text-gclx-navy">
          {isRTL ? destination.nameAr : destination.name}
        </h3>
        <p className="text-gray-600 mb-6">
          {isRTL ? destination.descriptionAr : destination.description}
        </p>
        
        <h4 className="text-lg font-semibold mb-4 text-gclx-navy">
          {isRTL ? "أبرز المعالم" : "Top Attractions"}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.attractions.map((attraction, index) => (
            <AttractionCard key={index} attraction={attraction} />
          ))}
        </div>
        
        <div className="mt-6">
          <div className="inline-block bg-gclx-gold text-white px-4 py-2 rounded shadow">
            {isRTL ? "معلومات سياحية فقط" : "Information Only"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
