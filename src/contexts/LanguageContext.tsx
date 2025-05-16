
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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
    arabic: "Arabic",
    
    // Home Page
    unlockDiscounts: "Unlock 20-50% OFF on Top Global Brands — Instant Coupon Redemption",
    shopAuthentic: "Shop authentic products from 40+ names you love.",
    exploreCollections: "Explore Collections",
    featuredBrands: "Featured Brands",
    howItWorks: "How It Works",
    chooseProduct: "Choose your product",
    chooseProductDesc: "Browse our extensive collection of authentic products from over 40 global brands.",
    applyCoupon: "Apply GCLX coupon",
    applyCouponDesc: "Enjoy exclusive GCLX discounts that save you 20-50% off retail prices.",
    enjoySavings: "Enjoy big savings",
    enjoySavingsDesc: "Experience premium products at unbeatable prices.",
    genuineBrands: "Genuine Brands",
    genuineBrandsDesc: "100% authentic products from official sources",
    instantCoupon: "Instant Coupon",
    instantCouponDesc: "Redeem your GCLX coupon for immediate savings",
    cashPayment: "Cash Payment",
    cashPaymentDesc: "Simple cash payment at our store location",
    
    // About Page
    aboutGCLX: "About GCLX General Trading",
    trustedPartner: "Your trusted partner for authentic global brands at unbeatable prices",
    ourMission: "Our Mission",
    missionText1: "At GCLX General Trading, our mission is to bridge the gap between premium global brands and local shoppers by providing authentic products at unbeatable discounts. We leverage our strong supplier relationships and bulk sourcing capabilities to make luxury and quality accessible to everyone.",
    missionText2: "We believe that everyone deserves access to high-quality products from the world's best brands without paying excessive retail markups. Through our exclusive coupon program and direct-to-consumer model, we're able to pass on significant savings of 20-50% to our valued customers.",
    ourPromise: "Our Promise",
    promiseText1: "We connect shoppers with global brands at unbeatable coupon-powered prices, all with total transparency and authenticity. Our commitment to excellence means you can shop with confidence, knowing that every item in our store is genuine and offered at the best possible price.",
    promiseText2: "When you visit GCLX, you're guaranteed a premium shopping experience with personalized service and expert advice to help you find exactly what you're looking for.",
    ourValues: "Our Values",
    authenticity: "Authenticity",
    authenticityDesc: "We guarantee 100% authentic products directly sourced from official channels. No counterfeits, ever.",
    value: "Value",
    valueDesc: "Our business model is built on bringing our customers maximum value through exclusive bulk sourcing and distributor relationships.",
    transparency: "Transparency",
    transparencyDesc: "We believe in clear communications and honest business practices, with no hidden fees or misleading claims.",
    
    // Services Page
    ourServices: "Our Services",
    premiumExperience: "Premium shopping experience with unbeatable prices",
    bulkSourcing: "Bulk Sourcing & Procurement",
    bulkSourcingShort: "Direct relationships with global brands for product procurement",
    bulkSourcingDesc1: "GCLX has established direct relationships with over 40 global brands, allowing us to source products directly from official channels. Our procurement capabilities enable us to secure the best possible prices, which we pass on to our customers.",
    bulkSourcingDesc2: "Our procurement team constantly negotiates with suppliers to ensure we have access to the latest products across fashion, beauty, lifestyle, and more. This direct approach eliminates middlemen and significantly reduces costs without compromising on authenticity or quality.",
    retailExperience: "Premium Retail Experience",
    retailExperienceShort: "One-stop shop for multiple premium global brands",
    retailExperienceDesc1: "As a multi-brand retailer, GCLX offers customers the convenience of shopping for products from dozens of premium global brands in one place. Our carefully curated collections span men's and women's fashion, accessories, beauty products, and lifestyle items.",
    retailExperienceDesc2: "Our store provides a comfortable and luxurious shopping environment where customers can explore our collection at their leisure. Our knowledgeable staff are always ready to provide guidance and assistance to ensure you find exactly what you're looking for.",
    couponProgram: "Exclusive Coupon Programme",
    couponProgramShort: "Save 20-50% with our unique discount system",
    couponProgramDesc1: "Our signature Exclusive Coupon Programme is what sets GCLX apart from other retailers. Through this innovative initiative, customers can access premium products at discounts of 20-50% off regular retail prices.",
    couponProgramDesc2: "These substantial savings are made possible through our direct sourcing model, strategic partnerships with brands, and our commitment to operating with efficient margins. The result is authentic, high-quality products at prices that our competitors simply cannot match.",
    learnMore: "Learn More",
    
    // Collections
    womensCollection: "Women's Collection",
    mensCollection: "Men's Collection",
    allCategories: "All Categories",
    filters: "Filters",
    brands: "Brands",
    category: "Category",
    clearAll: "Clear All",
    noProducts: "No products found. Try clearing some filters.",
    apply: "Apply",
    clearFilters: "Clear Filters",
    
    // Contact
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    contactDescription: "Have questions about our products or services? Reach out to us using any of the methods below, and our team will get back to you as soon as possible.",
    visitUs: "Visit Us",
    emailUs: "Email Us",
    callUs: "Call Us",
    sendMessage: "Send Us a Message",
    fullName: "Full Name",
    phone: "Phone Number",
    subject: "Subject",
    message: "Your Message",
    send: "Send Message",
    
    // Footer Content
    companyDescription: "GCLX General Trading brings global brands to local shoppers at unbeatable discounts. Shop authentic fashion, beauty and lifestyle products from 40+ world-class brands.",
    address: "Business Bay, Dubai, UAE",
    email: "Email: info@gclx-trading.com",
    copyright: "© 2025 GCLX General Trading — Instant Coupon Redemption",
    
    // General
    learnMoreButton: "Learn More",
    womensCollections: "Women's Collections",
    mensCollections: "Men's Collections"
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
    arabic: "العربية",
    
    // Home Page
    unlockDiscounts: "وفر 20-50% على أفضل الماركات العالمية — استرداد القسيمة فوري",
    shopAuthentic: "تسوق منتجات أصلية من أكثر من 40 اسمًا تحبه",
    exploreCollections: "استكشف المجموعات",
    featuredBrands: "الماركات المميزة",
    howItWorks: "كيف يعمل",
    chooseProduct: "اختر منتجك",
    chooseProductDesc: "تصفح مجموعتنا الواسعة من المنتجات الأصلية من أكثر من 40 علامة تجارية عالمية",
    applyCoupon: "استخدم كوبون GCLX",
    applyCouponDesc: "استمتع بخصومات GCLX الحصرية التي توفر لك 20-50% من أسعار التجزئة",
    enjoySavings: "استمتع بتوفير كبير",
    enjoySavingsDesc: "استمتع بمنتجات متميزة بأسعار لا تقبل المنافسة",
    genuineBrands: "ماركات أصلية",
    genuineBrandsDesc: "منتجات أصلية 100% من مصادر رسمية",
    instantCoupon: "كوبون فوري",
    instantCouponDesc: "استبدل كوبون GCLX الخاص بك للحصول على توفير فوري",
    cashPayment: "دفع نقدي",
    cashPaymentDesc: "دفع نقدي بسيط في موقع متجرنا",
    
    // About Page
    aboutGCLX: "عن GCLX للتجارة العامة",
    trustedPartner: "شريكك الموثوق للعلامات التجارية العالمية الأصلية بأسعار لا تقبل المنافسة",
    ourMission: "مهمتنا",
    missionText1: "في GCLX للتجارة العامة، مهمتنا هي سد الفجوة بين العلامات التجارية العالمية المتميزة والمتسوقين المحليين من خلال توفير منتجات أصلية بخصومات لا تقبل المنافسة. نحن نستفيد من علاقاتنا القوية مع الموردين وقدرات التوريد بكميات كبيرة لجعل الرفاهية والجودة في متناول الجميع.",
    missionText2: "نحن نؤمن بأن الجميع يستحق الوصول إلى منتجات عالية الجودة من أفضل العلامات التجارية في العالم دون دفع هوامش تجزئة باهظة. من خلال برنامج القسائم الحصري ونموذج التوصيل المباشر للمستهلك، نحن قادرون على تمرير وفورات كبيرة من 20-50% لعملائنا الكرام.",
    ourPromise: "وعدنا",
    promiseText1: "نحن نربط المتسوقين بالعلامات التجارية العالمية بأسعار لا تقبل المنافسة مدعومة بالكوبونات، كل ذلك مع الشفافية والأصالة الكاملة. التزامنا بالتميز يعني أنه يمكنك التسوق بثقة، مع العلم أن كل عنصر في متجرنا أصلي ومعروض بأفضل سعر ممكن.",
    promiseText2: "عندما تزور GCLX، نضمن لك تجربة تسوق متميزة مع خدمة شخصية ونصائح خبيرة لمساعدتك في العثور على ما تبحث عنه بالضبط.",
    ourValues: "قيمنا",
    authenticity: "الأصالة",
    authenticityDesc: "نضمن منتجات أصلية 100% مصدرها مباشرة من القنوات الرسمية. لا تقليد، أبدًا.",
    value: "القيمة",
    valueDesc: "نموذج أعمالنا مبني على تقديم أقصى قيمة لعملائنا من خلال التوريد الحصري بكميات كبيرة وعلاقات الموزعين.",
    transparency: "الشفافية",
    transparencyDesc: "نؤمن بالتواصل الواضح وممارسات الأعمال الصادقة، دون رسوم خفية أو ادعاءات مضللة.",
    
    // Services Page
    ourServices: "خدماتنا",
    premiumExperience: "تجربة تسوق متميزة بأسعار لا تقبل المنافسة",
    bulkSourcing: "التوريد بالجملة والشراء",
    bulkSourcingShort: "علاقات مباشرة مع العلامات التجارية العالمية لشراء المنتجات",
    bulkSourcingDesc1: "أقامت GCLX علاقات مباشرة مع أكثر من 40 علامة تجارية عالمية، مما يتيح لنا الحصول على المنتجات مباشرة من القنوات الرسمية. تمكننا قدرات الشراء لدينا من تأمين أفضل الأسعار الممكنة، والتي نمررها لعملائنا.",
    bulkSourcingDesc2: "يتفاوض فريق المشتريات لدينا باستمرار مع الموردين لضمان وصولنا إلى أحدث المنتجات في الأزياء والجمال ونمط الحياة والمزيد. هذا النهج المباشر يلغي الوسطاء ويقلل التكاليف بشكل كبير دون المساس بالأصالة أو الجودة.",
    retailExperience: "تجربة تجزئة متميزة",
    retailExperienceShort: "متجر شامل للعديد من العلامات التجارية العالمية المتميزة",
    retailExperienceDesc1: "كبائع تجزئة متعدد العلامات التجارية، تقدم GCLX للعملاء راحة التسوق للمنتجات من عشرات العلامات التجارية العالمية المتميزة في مكان واحد. تمتد مجموعاتنا المختارة بعناية لتشمل أزياء الرجال والنساء والإكسسوارات ومنتجات التجميل والأدوات المنزلية.",
    retailExperienceDesc2: "يوفر متجرنا بيئة تسوق مريحة وفاخرة حيث يمكن للعملاء استكشاف مجموعتنا على راحتهم. موظفونا ذوو المعرفة جاهزون دائمًا لتقديم التوجيه والمساعدة لضمان العثور على ما تبحث عنه بالضبط.",
    couponProgram: "برنامج القسائم الحصري",
    couponProgramShort: "وفر 20-50% مع نظام الخصم الفريد الخاص بنا",
    couponProgramDesc1: "برنامج القسائم الحصري المميز هو ما يميز GCLX عن تجار التجزئة الآخرين. من خلال هذه المبادرة المبتكرة، يمكن للعملاء الوصول إلى منتجات متميزة بخصومات تتراوح بين 20-50% من أسعار التجزئة العادية.",
    couponProgramDesc2: "هذه الوفورات الكبيرة أصبحت ممكنة من خلال نموذج التوريد المباشر الخاص بنا، والشراكات الاستراتيجية مع العلامات التجارية، والتزامنا بالعمل بهوامش فعالة. والنتيجة هي منتجات أصلية عالية الجودة بأسعار لا يستطيع منافسونا ببساطة مطابقتها.",
    learnMore: "معرفة المزيد",
    
    // Collections
    womensCollection: "مجموعة النساء",
    mensCollection: "مجموعة الرجال",
    allCategories: "جميع الفئات",
    filters: "المرشحات",
    brands: "الماركات",
    category: "الفئة",
    clearAll: "مسح الكل",
    noProducts: "لم يتم العثور على منتجات. حاول مسح بعض المرشحات.",
    apply: "تطبيق",
    clearFilters: "مسح المرشحات",
    
    // Contact
    contactUs: "اتصل بنا",
    getInTouch: "ابق على تواصل",
    contactDescription: "هل لديك أسئلة حول منتجاتنا أو خدماتنا؟ تواصل معنا باستخدام أي من الطرق أدناه، وسيرد فريقنا عليك في أقرب وقت ممكن.",
    visitUs: "زرنا",
    emailUs: "راسلنا",
    callUs: "اتصل بنا",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    phone: "رقم الهاتف",
    subject: "الموضوع",
    message: "رسالتك",
    send: "إرسال الرسالة",
    
    // Footer Content
    companyDescription: "تقدم GCLX للتجارة العامة العلامات التجارية العالمية للمتسوقين المحليين بخصومات لا تقبل المنافسة. تسوق أزياء أصلية ومنتجات تجميل وأسلوب حياة من أكثر من 40 علامة تجارية عالمية.",
    address: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
    email: "البريد الإلكتروني: info@gclx-trading.com",
    copyright: "© 2025 GCLX للتجارة العامة — استرداد القسيمة فوري",
    
    // General
    learnMoreButton: "معرفة المزيد",
    womensCollections: "مجموعات النساء",
    mensCollections: "مجموعات الرجال"
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
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('rtl', lang === 'ar');
    document.body.classList.toggle('font-arabic', lang === 'ar');
  };
  
  const t = (key: string): string => {
    const langObj = translations[language];
    return langObj[key as keyof typeof langObj] || key;
  };
  
  // Apply language settings on initial load
  useEffect(() => {
    handleSetLanguage(language);
  }, []);
  
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
