
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import ActiveFilters from '@/components/ActiveFilters';
import ViewModeToggle from '@/components/ViewModeToggle';
import ProductGrid from '@/components/ProductGrid';
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
   console.log('PARAM gender =>', gender);
  const isWomen = gender === 'women';
  const pageTitle = isWomen ? "Women's Collection" : "Men's Collection";

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  
  const products = isWomen ? womenProducts : menProducts;
  const categories = getCategoriesByGender(isWomen ? 'women' : 'men');
  const brands = getBrandsByGender(isWomen ? 'women' : 'men');

  useEffect(() => {
    // Apply filters and search
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.subCategory === selectedCategory);
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

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const applyFilters = () => {
    setFilterDialogOpen(false);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
  };

  return (
    <PageLayout 
      title={pageTitle} 
      description={`Shop authentic ${gender}'s fashion, accessories, and more from top global brands at 20-50% off.`}
    >
      {/* Hero Banner with Search */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Authentic products from top global brands at 20-50% off retail prices
          </p>

          {/* Search Bar Component */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSubmit={handleSearch}
          />
        </div>
      </section>

      {/* Filter Section and View Mode */}
      <div className="container-custom my-4">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          {/* FilterBar Component */}
          <FilterBar
            selectedCategory={selectedCategory}
            selectedBrands={selectedBrands}
            categories={categories}
            brands={brands}
            onCategoryChange={handleCategoryChange}
            toggleBrand={toggleBrand}
            clearFilters={clearFilters}
            applyFilters={applyFilters}
            filterDialogOpen={filterDialogOpen}
            setFilterDialogOpen={setFilterDialogOpen}
          />
          
          {/* ViewModeToggle Component */}
          <div className="ml-auto">
            <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
          </div>
        </div>
        
        {/* ActiveFilters Component */}
        <ActiveFilters
          selectedCategory={selectedCategory}
          selectedBrands={selectedBrands}
          toggleBrand={toggleBrand}
          clearFilters={clearFilters}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Products Grid/Table */}
      <section className="py-8">
        <div className="container-custom">
          {/* ProductGrid Component */}
          <ProductGrid 
            products={filteredProducts}
            viewMode={viewMode}
            clearFilters={clearFilters}
          />
        </div>
      </section>

      <NewsletterSignup />
    </PageLayout>
  );
};

export default CollectionDetail;
