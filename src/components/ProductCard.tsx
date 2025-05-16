
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Gift } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  subCategory?: string;
  isPromotionEligible?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  imageUrl,
  subCategory,
  isPromotionEligible
}) => {
  const { isRTL } = useLanguage();
  const { toast } = useToast();

  const handlePromoClick = () => {
    toast({
      title: isRTL ? "تم تفعيل الكوبون!" : "Coupon activated!",
      description: isRTL 
        ? "تم تسجيل مشاركتك في سحب على رحلة سياحية داخلية بمناسبة عيد الأضحى" 
        : "You're now entered into the Eid Al-Adha domestic tourism draw!",
      duration: 5000,
    });
  };

  return (
    <Card className="overflow-hidden card-shadow h-full hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-56 sm:h-64 object-cover"
        />
        {isPromotionEligible && (
          <div 
            onClick={handlePromoClick}
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full cursor-pointer hover:bg-red-600 transition-colors"
            title={isRTL ? "رحلة سياحية مجانية" : "Free tourism trip"}
          >
            <Gift size={16} />
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-sm font-semibold text-gclx-navy bg-gray-100 px-2 py-1 rounded-sm">{brand}</span>
          {isPromotionEligible && (
            <span className="text-xs ml-2 bg-red-100 text-red-600 px-2 py-1 rounded-sm">
              {isRTL ? "مؤهل للجائزة" : "Prize eligible"}
            </span>
          )}
        </div>
        <h3 className="font-semibold text-gclx-navy line-clamp-2">{name}</h3>
        {subCategory && <p className="text-sm text-gray-500 mt-1">{subCategory}</p>}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
