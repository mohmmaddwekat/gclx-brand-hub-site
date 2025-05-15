
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  imageUrl
}) => {
  return (
    <Card className="overflow-hidden card-shadow h-full hover:shadow-lg transition-all duration-300">
      <div>
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-56 sm:h-64 object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-sm font-semibold text-gclx-navy bg-gray-100 px-2 py-1 rounded-sm">{brand}</span>
        </div>
        <h3 className="font-semibold text-gclx-navy line-clamp-2">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
