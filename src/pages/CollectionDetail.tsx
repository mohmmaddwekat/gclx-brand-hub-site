
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const products = isWomen ? womenProducts : menProducts;
  const categories = getCategoriesByGender(isWomen ? 'women' : 'men');
  const brands = getBrandsByGender(isWomen ? 'women' : 'men');

  useEffect(() => {
    // Apply filters and search
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(lowerSearchTerm) || 
        product.brand.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrands, searchTerm, products]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  return (
    <PageLayout 
      title={pageTitle} 
      description={`Shop authentic ${gender}'s fashion, accessories, and more from top global brands at 20-50% off.`}
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Authentic products from top global brands at 20-50% off retail prices
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch} 
            className="mt-8 max-w-md mx-auto flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-white text-black w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-accent text-black hover:bg-accent/90">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Mobile Filter Toggle */}
      <div className="container-custom my-4 md:hidden">
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center gap-2"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          {showMobileFilters ? (
            <>
              <X size={18} /> Hide Filters
            </>
          ) : (
            <>
              <Filter size={18} /> Show Filters
            </>
          )}
        </Button>
      </div>

      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters - conditionally visible on mobile */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block`}>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Filter by Category</h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="md:hidden"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X size={18} />
                  </Button>
                </div>

                <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full mb-6">
                  <TabsList className="w-full overflow-x-auto flex flex-nowrap pb-2">
                    <TabsTrigger value="all">All</TabsTrigger>
                    {categories.map(category => (
                      <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
                
                <h3 className="font-semibold text-lg mb-4">Filter by Brand</h3>
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="mr-2"
                      />
                      <label htmlFor={brand} className="flex-1 cursor-pointer">{brand}</label>
                    </div>
                  ))}
                </div>
                
                {(selectedBrands.length > 0 || selectedCategory !== 'all') && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setSelectedBrands([]);
                      setSelectedCategory('all');
                    }}
                    className="mt-4 w-full"
                  >
                    Clear All Filters
                  </Button>
                )}
              </div>

              {/* View Mode Toggle */}
              <div className="bg-white p-4 rounded-lg shadow-sm mt-4">
                <h3 className="font-semibold text-lg mb-4">View Mode</h3>
                <div className="flex gap-2">
                  <Button 
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={() => setViewMode('grid')}
                  >
                    Grid
                  </Button>
                  <Button 
                    variant={viewMode === 'table' ? 'default' : 'outline'}
                    size="sm"
                    className="flex-1"
                    onClick={() => setViewMode('table')}
                  >
                    Table
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid/Table */}
            <div className="lg:col-span-3">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 border rounded-lg">
                  <p className="text-lg text-gray-500">No products found with the selected filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedBrands([]);
                      setSearchTerm('');
                    }}
                    className="mt-4"
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
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
                    {filteredProducts.map(product => (
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
