
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';

// Collection categories
const categories = [
  { id: 'marketplace', name: 'Marketplace', nameAr: 'سوق' },
  { id: 'sportswear', name: 'Sportswear', nameAr: 'ملابس رياضية' },
  { id: 'fashion-mass', name: 'Fashion', nameAr: 'أزياء' },
  { id: 'luxury', name: 'Luxury', nameAr: 'فاخر' },
  { id: 'beauty', name: 'Beauty', nameAr: 'جمال' },
  { id: 'home', name: 'Home', nameAr: 'منزل' },
];

const Collections: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    console.log('Searching for:', searchTerm);
  };

  return (
    <PageLayout 
      title="Collections" 
      description="Shop GCLX's exclusive collections for men and women, featuring authentic fashion, beauty and lifestyle products from top global brands at 20-50% off."
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category & Brand</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore our extensive collection of authentic products from over 40 global brands at unbeatable prices
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

      {/* Mobile Filter Button */}
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

      {/* Collections Grid */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar Filters - Always visible on desktop, conditionally on mobile */}
            <div className={`${showMobileFilters ? 'block' : 'hidden'} md:block bg-white p-4 rounded-lg shadow-sm`}>
              <h2 className="font-semibold text-lg mb-4 flex justify-between items-center">
                <span>Categories</span>
                <span className="md:hidden">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <X size={18} />
                  </Button>
                </span>
              </h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <div key={category.id} className="flex items-center">
                    <Link 
                      to={`/collections/${category.id}`}
                      className="w-full p-2 hover:bg-gray-100 rounded-md flex items-center justify-between group"
                    >
                      <span>{category.name}</span>
                      <span className="text-xs text-gray-500 rtl:font-arabic">{category.nameAr}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Collections Grid */}
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Women's Collection Tile */}
                <Link to="/collections/women" className="block group">
                  <Card className="overflow-hidden card-shadow h-full">
                    <div className="relative aspect-[3/2]">
                      <img 
                        src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7" 
                        alt="Women's Collection" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h2 className="text-2xl md:text-3xl font-bold mb-2">Women's Collection</h2>
                          <p className="text-sm md:text-lg opacity-90">
                            Clothing, Accessories, Beauty & More
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>

                {/* Men's Collection Tile */}
                <Link to="/collections/men" className="block group">
                  <Card className="overflow-hidden card-shadow h-full">
                    <div className="relative aspect-[3/2]">
                      <img 
                        src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                        alt="Men's Collection" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-8 text-white">
                          <h2 className="text-2xl md:text-3xl font-bold mb-2">Men's Collection</h2>
                          <p className="text-sm md:text-lg opacity-90">
                            Apparel, Shoes, Accessories & More
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>

                {categories.map(category => (
                  <Link key={category.id} to={`/collections/${category.id}`} className="block group">
                    <Card className="overflow-hidden card-shadow h-full">
                      <div className="relative aspect-[3/2] bg-gradient-to-tr from-gclx-navy to-blue-800">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="p-8 text-white text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2">{category.name}</h2>
                            <p className="text-sm md:text-lg opacity-90 rtl:font-arabic">
                              {category.nameAr}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="section-title">Why Shop with GCLX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">Curated Selection</h3>
                <p className="text-gray-600">Handpicked products from over 40 premium global brands</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">Unbeatable Prices</h3>
                <p className="text-gray-600">Save 20-50% off regular retail prices with our exclusive coupons</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">100% Authentic</h3>
                <p className="text-gray-600">All products are sourced directly through official channels</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default Collections;
