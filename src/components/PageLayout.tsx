
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  title = "GCLX General Trading", 
  description = "Shop authentic fashion, beauty and lifestyle products from 40+ world-class brands at 20-50% off." 
}) => {
  const { t } = useLanguage();
  const fullTitle = title === "GCLX General Trading" 
    ? title 
    : `${title} | GCLX General Trading`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
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
