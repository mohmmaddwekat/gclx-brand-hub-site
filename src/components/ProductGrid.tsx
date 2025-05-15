
import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Product } from '@/data/productsData';

interface ProductGridProps {
  products: Product[];
  viewMode: 'grid' | 'table';
  clearFilters: () => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode, clearFilters }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 border rounded-lg">
        <p className="text-lg text-gray-500">No products found with the selected filters.</p>
        <Button 
          variant="outline" 
          onClick={clearFilters}
          className="mt-4"
        >
          Clear All Filters
        </Button>
      </div>
    );
  }

  return viewMode === 'grid' ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          brand={product.brand}
          imageUrl={product.imageUrl}
          category={product.category}
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell>
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-16 h-16 object-cover rounded-md" 
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>{product.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductGrid;
