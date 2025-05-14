
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  category: string;
  discount?: number;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  brand,
  imageUrl,
  originalPrice,
  discountPrice,
  link,
  discount = Math.round(((originalPrice - discountPrice) / originalPrice) * 100)
}) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden card-shadow h-full">
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 right-0 bg-gclx-gold text-gclx-navy font-semibold px-3 py-1 rounded-bl-md">
            Save {discount}%
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-gclx-navy">{name}</h3>
          <p className="text-sm text-gray-600 mb-2">{brand}</p>
          <div className="flex items-center space-x-2">
            <span className="font-bold">${discountPrice.toFixed(2)}</span>
            <span className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
