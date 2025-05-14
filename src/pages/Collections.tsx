
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';

const Collections: React.FC = () => {
  return (
    <PageLayout 
      title="Collections" 
      description="Shop GCLX's exclusive collections for men and women, featuring authentic fashion, beauty and lifestyle products from top global brands at 20-50% off."
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Shop by Category & Brand</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our extensive collection of authentic products from over 40 global brands at unbeatable prices
          </p>
        </div>
      </section>

      {/* Collections Tiles */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                      <h2 className="text-3xl font-bold mb-2">Women's Collection</h2>
                      <p className="text-lg opacity-90">
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
                      <h2 className="text-3xl font-bold mb-2">Men's Collection</h2>
                      <p className="text-lg opacity-90">
                        Apparel, Shoes, Accessories & More
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>

          <div className="mt-16 text-center">
            <h2 className="section-title">Why Shop with GCLX?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
