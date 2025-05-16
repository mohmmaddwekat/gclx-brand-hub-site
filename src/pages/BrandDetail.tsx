
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import NewsletterSignup from '@/components/NewsletterSignup';
import { Button } from '@/components/ui/button';

// Using the same brands array from Collections page - with Dareen removed
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

// Special product data for Nike
const nikeProducts = [
  {
    id: "nike-1",
    title: "Nike Air Force 1 '07",
    img: "https://picsum.photos/seed/nike-af1/600/600",
    link: "https://www.nike.com/t/air-force-1-07-mens-shoes-jBrhbr"
  },
  {
    id: "nike-2",
    title: "Nike Air Zoom Pegasus 41",
    img: "https://picsum.photos/seed/nike-pegasus/600/600",
    link: "https://www.nike.com/t/pegasus-41-mens-road-running-shoes"
  },
  {
    id: "nike-3",
    title: "Nike Dri-FIT One Luxe Tee",
    img: "https://picsum.photos/seed/nike-drifit/600/600",
    link: "https://www.nike.com/t/dri-fit-one-luxe-womens-t-shirt"
  },
  {
    id: "nike-4",
    title: "Nike Pro 3/4 Training Tights",
    img: "https://picsum.photos/seed/nike-pro/600/600",
    link: "https://www.nike.com/t/pro-mens-training-tights"
  },
  {
    id: "nike-5",
    title: "Nike Brasilia Backpack 24 L",
    img: "https://picsum.photos/seed/nike-bag/600/600",
    link: "https://www.nike.com/t/brasilia-training-backpack-24l"
  }
];

const BrandDetail: React.FC = () => {
  const { brandSlug } = useParams<{ brandSlug: string }>();
  
  // Find the brand based on the slug from URL
  const brand = brands.find(b => b.slug === brandSlug);
  
  // If brand not found, redirect to collections page
  if (!brand) {
    return <Navigate to="/collections" replace />;
  }

  // Choose products based on brand
  let brandProducts;
  if (brand.slug === 'nike') {
    brandProducts = nikeProducts;
  } else {
    // Generate 5 dummy products for other brands
    brandProducts = Array.from({ length: 5 }, (_, index) => ({
      id: `${brand.slug}-${index + 1}`,
      title: `Sample ${brand.name} Item ${index + 1}`,
      img: `https://picsum.photos/seed/${brand.slug}-${index + 1}/600/600`,
      link: `https://www.${brand.slug === 'hm' ? 'hm' : brand.slug.replace('-', '')}.com`
    }));
  }

  return (
    <PageLayout 
      title={`${brand.name} – Featured Items`} 
      description={`Click any item to open the official ${brand.name} store.`}
    >
      {/* Back Button - Now more prominent */}
      <div className="container-custom mt-6">
        <Link 
          to="/collections" 
          className="text-gclx-navy hover:underline mb-4 inline-flex items-center font-medium"
          aria-label="Back to all brands"
        >
          <ChevronLeft size={20} />
          <span>All Brands</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <div className="mb-4">
            <img 
              src={brand.logo}
              alt={brand.name}
              className="h-16 mx-auto object-contain bg-white p-2 rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://via.placeholder.com/140x60?text=${brand.name}`;
              }}
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{brand.name} – Featured Items</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Click any item to open the official {brand.name} store.
          </p>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-8 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {brandProducts.map(product => (
              <a 
                key={product.id} 
                href={product.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="overflow-hidden h-full hover:opacity-90 transition-opacity duration-300 rounded-lg">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400?text=${product.title}`;
                      }}
                    />
                  </div>
                  <CardContent className="p-4 text-center">
                    <h3 className="font-medium text-sm md:text-base line-clamp-2">{product.title}</h3>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          
          {/* Additional Back Button at the bottom */}
          <div className="flex justify-center mt-8">
            <Link to="/collections">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-gclx-navy hover:bg-gclx-navy hover:text-white"
              >
                <ChevronLeft size={20} />
                العودة إلى جميع الماركات
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageLayout>
  );
};

export default BrandDetail;
