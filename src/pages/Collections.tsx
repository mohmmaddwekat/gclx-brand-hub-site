
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import SearchBar from '@/components/SearchBar';
import { categorizedBrands } from '@/data/productsData';

const Collections: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would trigger a search
    console.log('Searching for:', searchTerm);
  };

  // Sample brand data with logos and website URLs
  const brandData = [
    {
      name: 'Nike',
      logo: '/lovable-uploads/brands/men/amazon/Sportswear.jpg',
      website: 'https://www.nike.com'
    },
    {
      name: 'Adidas',
      logo: '/lovable-uploads/brands/women/amazon/shoes.jpg',
      website: 'https://www.adidas.com'
    },
    {
      name: 'Zara',
      logo: '/lovable-uploads/brands/women/amazon/tops.jpg',
      website: 'https://www.zara.com'
    },
    {
      name: 'H&M',
      logo: '/lovable-uploads/brands/women/amazon/dresses.jpg',
      website: 'https://www.hm.com'
    },
    {
      name: 'Puma',
      logo: '/lovable-uploads/brands/men/amazon/Shoes.jpg',
      website: 'https://www.puma.com'
    },
    {
      name: 'Tommy Hilfiger',
      logo: '/lovable-uploads/brands/women/amazon/jackets.jpg',
      website: 'https://www.tommy.com'
    },
    {
      name: 'Gucci',
      logo: '/lovable-uploads/brands/women/amazon/bags.jpg',
      website: 'https://www.gucci.com'
    },
    {
      name: 'Prada',
      logo: '/lovable-uploads/brands/women/amazon/accessories.jpg',
      website: 'https://www.prada.com'
    }
  ];

  return (
    <PageLayout 
      title="Brand Collections" 
      description="Shop top global brands at 20-50% off through GCLX's exclusive partnerships."
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shop by Brand</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore authentic products from top global brands at unbeatable prices
          </p>
          
          {/* Search Bar */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSubmit={handleSearch}
          />
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brandData.map((brand) => (
              <Card key={brand.name} className="overflow-hidden card-shadow h-full">
                <div className="aspect-[3/2] overflow-hidden">
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} Collection`} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h2 className="text-xl md:text-2xl font-bold mb-2 text-gclx-navy">{brand.name}</h2>
                  <div className="flex justify-center space-x-3 mt-4">
                    <Link 
                      to={`/collections/${brand.name.toLowerCase()}`} 
                      className="bg-gclx-navy text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      Shop Products
                    </Link>
                    <a 
                      href={brand.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm hover:bg-gray-200 transition-colors"
                    >
                      Official Site
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
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
