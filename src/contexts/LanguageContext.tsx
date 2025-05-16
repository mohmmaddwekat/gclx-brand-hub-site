
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

interface LanguageProviderProps {
  children: ReactNode;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    services: "Services",
    collections: "Collections",
    contact: "Contact",
    
    // Common
    allBrands: "All Brands",
    tapToSee: "Tap a logo to see five featured items",
    search: "Search",
    searchPlaceholder: "Search brands...",
    whyShop: "Why Shop with GCLX?",
    curatedSelection: "Curated Selection",
    curatedDescription: "Handpicked products from over 40 premium global brands",
    unbeatable: "Unbeatable Prices",
    unbeatableDescription: "Save 20-50% off regular retail prices with our exclusive coupons",
    authentic: "100% Authentic",
    authenticDescription: "All products are sourced directly through official channels",
    
    // Footer
    quickLinks: "Quick Links",
    connectWithUs: "Connect With Us",
    
    // Newsletter
    stayUpdated: "Stay Updated",
    subscribeText: "Subscribe to our newsletter for exclusive offers and updates",
    emailAddress: "Email Address",
    subscribe: "Subscribe",
    
    // Language
    language: "Language",
    english: "English",
    arabic: "Arabic"
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    services: "خدماتنا",
    collections: "المجموعات",
    contact: "اتصل بنا",
    
    // Common
    allBrands: "كل الماركات",
    tapToSee: "انقر على الشعار لرؤية خمسة منتجات مميزة",
    search: "بحث",
    searchPlaceholder: "البحث عن الماركات...",
    whyShop: "لماذا تتسوق مع GCLX؟",
    curatedSelection: "اختيار مُنتقى",
    curatedDescription: "منتجات مختارة بعناية من أكثر من 40 علامة تجارية عالمية",
    unbeatable: "أسعار لا تقاوم",
    unbeatableDescription: "وفر 20-50% من الأسعار العادية مع كوبونات GCLX الحصرية",
    authentic: "أصلي ١٠٠٪",
    authenticDescription: "جميع المنتجات يتم الحصول عليها مباشرة من القنوات الرسمية",
    
    // Footer
    quickLinks: "روابط سريعة",
    connectWithUs: "تواصل معنا",
    
    // Newsletter
    stayUpdated: "ابق على اطلاع",
    subscribeText: "اشترك في نشرتنا الإخبارية للحصول على عروض وتحديثات حصرية",
    emailAddress: "البريد الإلكتروني",
    subscribe: "اشترك",
    
    // Language
    language: "اللغة",
    english: "الإنجليزية",
    arabic: "العربية"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
  isRTL: false,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('font-arabic', lang === 'ar');
  };
  
  const t = (key: string): string => {
    const langObj = translations[language];
    return langObj[key as keyof typeof langObj] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      t,
      isRTL: language === 'ar'
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
