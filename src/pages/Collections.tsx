import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import SearchBar from '@/components/SearchBar';
import { useLanguage } from '@/contexts/LanguageContext';

// Brand data structure as provided - keeping only the specified brands
const brands = [
  { name: "Nike", slug: "nike", logo: "https://logo.clearbit.com/nike.com" },
  { name: "Amazon", slug: "amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { name: "Noon", slug: "noon", logo: "https://logo.clearbit.com/noon.com" },
  { name: "Talabat", slug: "talabat", logo: "https://logo.clearbit.com/talabat.com" },
  { name: "Carrefour", slug: "carrefour", logo: "https://logo.clearbit.com/carrefour.com" },
  { name: "Namshi", slug: "namshi", logo: "https://logo.clearbit.com/namshi.com" },
  { name: "IKEA", slug: "ikea", logo: "https://logo.clearbit.com/ikea.com" },
  { name: "Puma", slug: "puma", logo: "https://logo.clearbit.com/puma.com" },
  { name: "Steve Madden", slug: "steve-madden", logo: "https://logo.clearbit.com/stevemadden.com" },
  { name: "Charles & Keith", slug: "charles-keith", logo: "https://logo.clearbit.com/charleskeith.com" },
  { name: "Jimmy Choo", slug: "jimmy-choo", logo: "https://logo.clearbit.com/jimmychoo.com" },
  { name: "Christian Louboutin", slug: "christian-louboutin", logo: "https://logo.clearbit.com/christianlouboutin.com" },
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
];

const Collections: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t, isRTL } = useLanguage();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter the brands
    console.log('Searching for:', searchTerm);
  };

  return (
    <PageLayout 
      title={t('allBrands')} 
      description={t('tapToSee')}
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('allBrands')}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            {t('tapToSee')}
          </p>
          
          {/* Search Bar */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSubmit={handleSearch}
            placeholder={t('searchPlaceholder')}
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
            <h2 className="text-2xl font-bold text-gclx-navy mb-4">{t('whyShop')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{t('curatedSelection')}</h3>
                <p className="text-gray-600">{t('curatedDescription')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{t('unbeatable')}</h3>
                <p className="text-gray-600">{t('unbeatableDescription')}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-gclx-navy mb-2">{t('authentic')}</h3>
                <p className="text-gray-600">{t('authenticDescription')}</p>
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
