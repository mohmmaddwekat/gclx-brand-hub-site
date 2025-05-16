
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/productsData';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Gift, Ticket } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'table';
  clearFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode, clearFilters }) => {
  const { toast } = useToast();
  const { isRTL } = useLanguage();

  // Function to randomly mark some products as promotion eligible
  const getEligibleProducts = () => {
    return products.map(product => ({
      ...product,
      isPromotionEligible: Math.random() > 0.7 // 30% chance to be eligible
    }));
  };

  const eligibleProducts = getEligibleProducts();

  const showEidPromotionInfo = () => {
    toast({
      title: isRTL ? "عروض عيد الأضحى" : "Eid Al-Adha Promotions",
      description: isRTL 
        ? "اشترِ أي منتج مؤهل للحصول على فرصة للفوز برحلة سياحية داخلية مجانية" 
        : "Purchase any eligible product for a chance to win a free domestic tourism trip",
      duration: 8000,
    });
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg">
        <p className="text-lg text-gray-500">
          {isRTL 
            ? "لم يتم العثور على منتجات مع المرشحات المحددة." 
            : "No products found with the selected filters."}
        </p>
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="mt-4"
        >
          {isRTL ? "مسح كل المرشحات" : "Clear All Filters"}
        </Button>
      </div>
    );
  }

  // Promotion banner
  const promotionBanner = (
    <div className="w-full mb-6 bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Gift className="mr-2" />
          <h3 className="text-lg font-bold">
            {isRTL 
              ? "عروض خاصة بمناسبة عيد الأضحى" 
              : "Special Eid Al-Adha Promotion"}
          </h3>
        </div>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={showEidPromotionInfo}
          className="bg-white text-red-600 hover:bg-gray-100"
        >
          <Ticket className="mr-1" size={16} />
          {isRTL ? "التفاصيل" : "Details"}
        </Button>
      </div>
      <p className="mt-2">
        {isRTL 
          ? "اشترِ أي منتج مع علامة الهدية للحصول على فرصة للفوز برحلة سياحية داخلية" 
          : "Purchase any product with a gift icon for a chance to win a domestic tourism trip"}
      </p>
    </div>
  );

  return (
    <>
      {promotionBanner}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eligibleProducts.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              imageUrl={product.imageUrl}
              subCategory={product.subCategory}
              isPromotionEligible={product.isPromotionEligible}
            />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Image</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>{isRTL ? "مؤهل للجائزة" : "Prize Eligible"}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eligibleProducts.map(product => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="relative">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-16 h-16 object-cover rounded-md" 
                      />
                      {product.isPromotionEligible && (
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full">
                          <Gift size={12} />
                        </div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.subCategory}</TableCell>
                  <TableCell>
                    {product.isPromotionEligible ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                        <Gift size={12} className="mr-1" />
                        {isRTL ? "نعم" : "Yes"}
                      </span>
                    ) : (
                      <span className="text-gray-400">{isRTL ? "لا" : "No"}</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
