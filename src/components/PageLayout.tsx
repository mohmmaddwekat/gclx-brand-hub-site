
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title = "GCLX General Trading", 
  description = "Shop authentic fashion, beauty and lifestyle products from 40+ world-class brands at 20-50% off.",
  keywords = "GCLX, UAE brands, discount brands, fashion Dubai, luxury shopping UAE",
  canonicalUrl,
  ogImage = "https://www.gclx-trading.com/logo.png"
}) => {
  const { t, currentLanguage } = useLanguage();
  const fullTitle = title === "GCLX General Trading" 
    ? title 
    : `${title} | GCLX General Trading`;
  
  // Determine the canonical URL based on the current page
  const currentPath = window.location.pathname;
  const siteUrl = "https://www.gclx-trading.com";
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${currentPath}`;
  
  return (
    <>
      <Helmet>
        <html lang={currentLanguage === 'ar' ? 'ar' : 'en'} />
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={fullCanonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullCanonicalUrl} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullCanonicalUrl} />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* Language alternates */}
        <link rel="alternate" href={`${siteUrl}${currentPath}`} hreflang="en" />
        <link rel="alternate" href={`${siteUrl}/ar${currentPath}`} hreflang="ar" />
      </Helmet>
      <div className="flex flex-col min-h-screen w-full">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
