
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  Product, 
  womenProducts, 
  menProducts, 
  getCategoriesByGender, 
  getBrandsByGender 
} from '@/data/productsData';

const CollectionDetail: React.FC = () => {
  const { gender } = useParams<{ gender: string }>();
  const isWomen = gender === 'women';
  const pageTitle = isWomen ? "Women's Collection" : "Men's Collection";

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  
  const products = isWomen ? womenProducts : menProducts;
  const categories = getCategoriesByGender(isWomen ? 'women' : 'men');
  const brands = getBrandsByGender(isWomen ? 'women' : 'men');

  useEffect(() => {
    // Apply filters
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrands, products]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  return (
    <PageLayout 
      title={pageTitle} 
      description={`Shop authentic ${gender}'s fashion, accessories, and more from top global brands at 20-50% off.`}
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Authentic products from top global brands at 20-50% off retail prices
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="mb-8">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory}>
              <TabsList className="w-full overflow-x-auto flex flex-nowrap pb-2">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                {categories.map(category => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Filter by Brand</h3>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="mr-2"
                      />
                      <label htmlFor={brand}>{brand}</label>
                    </div>
                  ))}
                </div>
                
                {selectedBrands.length > 0 && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setSelectedBrands([])}
                    className="mt-4 w-full"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-gray-500">No products found with the selected filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedBrands([]);
                    }}
                    className="mt-4"
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      name={product.name}
                      brand={product.brand}
                      imageUrl={product.imageUrl}
                      originalPrice={product.originalPrice}
                      discountPrice={product.discountPrice}
                      category={product.category}
                      link={`/product/${product.id}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </PageLayout>
  );
};

export default CollectionDetail;
