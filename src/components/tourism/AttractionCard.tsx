
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Attraction } from '@/data/tourismData';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const { isRTL } = useLanguage();
  
  return (
    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mt-1 text-gclx-gold">{attraction.icon}</div>
      <div>
        <h5 className="font-medium text-gclx-navy">
          {isRTL ? attraction.nameAr : attraction.name}
        </h5>
        <p className="text-sm text-gray-600">
          {isRTL ? attraction.descriptionAr : attraction.description}
        </p>
      </div>
    </div>
  );
};

export default AttractionCard;
