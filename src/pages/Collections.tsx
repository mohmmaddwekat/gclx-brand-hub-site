
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import SearchBar from '@/components/SearchBar';

const Collections: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop by Collection</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore our extensive collection of authentic products for men and women at unbeatable prices
          </p>
          
          {/* Search Bar */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSubmit={handleSearch}
          />
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Women's Collection Tile */}
            <Link to="/collections/women" className="block group">
              <Card className="overflow-hidden card-shadow h-full">
                <div className="aspect-[3/2]">
                  <img 
                    src="/lovable-uploads/WomenCollection.png" 
                    alt="Women's Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gclx-navy">Women's Collection</h2>
                  <p className="text-sm md:text-lg text-gray-600">
                    Clothing, Accessories, Beauty & More
                  </p>
                </CardContent>
              </Card>
            </Link>

            {/* Men's Collection Tile */}
            <Link to="/collections/men" className="block group">
              <Card className="overflow-hidden card-shadow h-full">
                <div className="aspect-[3/2]">
                  <img 
                    src="/lovable-uploads/MenCollection.png" 
                    alt="Men's Collection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gclx-navy">Men's Collection</h2>
                  <p className="text-sm md:text-lg text-gray-600">
                    Apparel, Shoes, Accessories & More
                  </p>
                </CardContent>
              </Card>
            </Link>
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
