
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import SearchBar from '@/components/SearchBar';

// Brand data structure as provided
const brands = [
  { name: "Amazon", slug: "amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Noon", slug: "noon", logo: "https://logo.clearbit.com/noon.com" },
  { name: "Talabat", slug: "talabat", logo: "https://logo.clearbit.com/talabat.com" },
  { name: "Carrefour", slug: "carrefour", logo: "https://logo.clearbit.com/carrefour.com" },
  { name: "Namshi", slug: "namshi", logo: "https://logo.clearbit.com/namshi.com" },
  { name: "Adidas", slug: "adidas", logo: "https://logo.clearbit.com/adidas.com" },
  { name: "IKEA", slug: "ikea", logo: "https://logo.clearbit.com/ikea.com" },
  { name: "Nike", slug: "nike", logo: "https://logo.clearbit.com/nike.com" },
  { name: "Puma", slug: "puma", logo: "https://logo.clearbit.com/puma.com" },
  { name: "Steve Madden", slug: "steve-madden", logo: "https://logo.clearbit.com/stevemadden.com" },
  { name: "Charles & Keith", slug: "charles-keith", logo: "https://logo.clearbit.com/charleskeith.com" },
  { name: "Jimmy Choo", slug: "jimmy-choo", logo: "https://logo.clearbit.com/jimmychoo.com" },
  { name: "Christian Louboutin", slug: "christian-louboutin", logo: "https://logo.clearbit.com/christianlouboutin.com" },
  { name: "Skechers", slug: "skechers", logo: "https://logo.clearbit.com/skechers.com" },
  { name: "Ecco", slug: "ecco", logo: "https://logo.clearbit.com/ecco.com" },
  { name: "Calvin Klein", slug: "calvin-klein", logo: "https://logo.clearbit.com/calvinklein.com" },
  { name: "Zara", slug: "zara", logo: "https://logo.clearbit.com/zara.com" },
  { name: "H&M", slug: "hm", logo: "https://logo.clearbit.com/hm.com" },
  { name: "Mango", slug: "mango", logo: "https://logo.clearbit.com/mango.com" },
  { name: "Forever 21", slug: "forever-21", logo: "https://logo.clearbit.com/forever21.com" },
  { name: "Tommy Hilfiger", slug: "tommy-hilfiger", logo: "https://logo.clearbit.com/tommy.com" },
  { name: "Dolce & Gabbana", slug: "dolce-gabbana", logo: "https://logo.clearbit.com/dolcegabbana.com" },
  { name: "Gucci", slug: "gucci", logo: "https://logo.clearbit.com/gucci.com" },
  { name: "Louis Vuitton", slug: "louis-vuitton", logo: "https://logo.clearbit.com/louisvuitton.com" },
  { name: "Chanel", slug: "chanel", logo: "https://logo.clearbit.com/chanel.com" },
  { name: "Versace", slug: "versace", logo: "https://logo.clearbit.com/versace.com" },
  { name: "Balenciaga", slug: "balenciaga", logo: "https://logo.clearbit.com/balenciaga.com" },
  { name: "Valentino", slug: "valentino", logo: "https://logo.clearbit.com/valentino.com" },
  { name: "Fendi", slug: "fendi", logo: "https://logo.clearbit.com/fendi.com" },
  { name: "Ralph Lauren", slug: "ralph-lauren", logo: "https://logo.clearbit.com/ralphlauren.com" },
  { name: "Hugo Boss", slug: "hugo-boss", logo: "https://logo.clearbit.com/hugoboss.com" },
  { name: "Dior", slug: "dior", logo: "https://logo.clearbit.com/dior.com" },
  { name: "Chloé", slug: "chloe", logo: "https://logo.clearbit.com/chloe.com" },
  { name: "Self-Portrait", slug: "self-portrait", logo: "https://logo.clearbit.com/self-portrait.com" },
  { name: "Reformation", slug: "reformation", logo: "https://logo.clearbit.com/thereformation.com" },
  { name: "Levi's", slug: "levis", logo: "https://logo.clearbit.com/levis.com" },
  { name: "Diesel", slug: "diesel", logo: "https://logo.clearbit.com/diesel.com" },
  { name: "Prada", slug: "prada", logo: "https://logo.clearbit.com/prada.com" },
  { name: "Dareen", slug: "dareen", logo: "https://via.placeholder.com/140x60?text=Dareen" },
  { name: "Huda Beauty", slug: "huda-beauty", logo: "https://logo.clearbit.com/hudabeauty.com" },
  { name: "Charlotte Tilbury", slug: "charlotte-tilbury", logo: "https://logo.clearbit.com/charlottetilbury.com" },
  { name: "Fenty Beauty", slug: "fenty-beauty", logo: "https://logo.clearbit.com/fentybeauty.com" },
  { name: "MAC", slug: "mac", logo: "https://logo.clearbit.com/maccosmetics.com" },
  { name: "Estée Lauder", slug: "estee-lauder", logo: "https://logo.clearbit.com/esteelauder.com" },
  { name: "Lancôme", slug: "lancome", logo: "https://logo.clearbit.com/lancome.com" },
  { name: "The Ordinary", slug: "the-ordinary", logo: "https://logo.clearbit.com/deciem.com" },
  { name: "La Roche-Posay", slug: "la-roche-posay", logo: "https://logo.clearbit.com/laroche-posay.com" },
  { name: "NARS", slug: "nars", logo: "https://logo.clearbit.com/narscosmetics.com" },
];

const Collections: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter the brands
    console.log('Searching for:', searchTerm);
  };

  return (
    <PageLayout 
      title="All Brands" 
      description="Tap a logo to see five featured items."
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Brands</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Tap a logo to see five featured items.
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
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4">
            {brands.map((brand) => (
              <Link to={`/collections/${brand.slug}`} key={brand.slug}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-xl bg-white" style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                  <div className="p-4 flex items-center justify-center h-24 sm:h-28">
                    <img 
                      src={brand.logo} 
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        // Fallback for broken image links
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/140x60?text=${brand.name}`;
                      }}
                    />
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gclx-navy mb-4">Why Shop with GCLX?</h2>
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
