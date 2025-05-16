
import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
};

type TranslationsType = {
  [key: string]: {
    en: string;
    ar: string;
  };
};

// Translations dictionary
export const translations: TranslationsType = {
  // Navigation
  home: { en: 'Home', ar: 'الرئيسية' },
  about: { en: 'About', ar: 'عن الشركة' },
  services: { en: 'Services', ar: 'الخدمات' },
  collections: { en: 'Collections', ar: 'المجموعات' },
  contact: { en: 'Contact', ar: 'اتصل بنا' },
  
  // Common
  search: { en: 'Search', ar: 'بحث' },
  searchPlaceholder: { en: 'Search for products...', ar: 'البحث عن المنتجات...' },
  filter: { en: 'Filter', ar: 'تصفية' },
  clearFilters: { en: 'Clear Filters', ar: 'مسح التصفية' },
  category: { en: 'Category', ar: 'الفئة' },
  brands: { en: 'Brands', ar: 'العلامات التجارية' },
  all: { en: 'All', ar: 'الكل' },
  apply: { en: 'Apply', ar: 'تطبيق' },
  
  // Products
  noProducts: { en: 'No products found. Please try different filters.', ar: 'لم يتم العثور على منتجات. يرجى تجربة مرشحات مختلفة.' },
  shopNow: { en: 'Shop Now', ar: 'تسوق الآن' },
  viewCollection: { en: 'View Collection', ar: 'عرض المجموعة' },
  
  // Newsletter
  subscribeNewsletter: { en: 'Subscribe to our Newsletter', ar: 'اشترك في نشرتنا الإخبارية' },
  stayUpdated: { en: 'Stay updated with the latest products and exclusive offers', ar: 'ابق على اطلاع بأحدث المنتجات والعروض الحصرية' },
  emailAddress: { en: 'Email Address', ar: 'البريد الإلكتروني' },
  subscribe: { en: 'Subscribe', ar: 'اشتراك' },
  
  // Language
  languageSelector: { en: 'Language', ar: 'اللغة' },
  english: { en: 'English', ar: 'الإنجليزية' },
  arabic: { en: 'Arabic', ar: 'العربية' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    console.warn(`Translation missing for key: ${key}`);
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
