/* ──────────────────────────────────────────────
   0) واجهة العنصر الفرعي مع رابط الصورة
────────────────────────────────────────────── */
export interface SubItem {
  sub: string;
  img: string;
}

/* ──────────────────────────────────────────────
   1) نوع المنتج
────────────────────────────────────────────── */
export interface Product {
  id: string;
  name: string;
  brand: string;
  subCategory: string;
  imageUrl: string;
  gender: 'women' | 'men';
}

/* أداة مساعدة لتحويل نص إلى “slug” يصلح للـseed */
const slug = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');

/* ──────────────────────────────────────────────
   2) فئات منطقية (+img) لكل جنس لكل براند
────────────────────────────────────────────── */
export const brandSubs: Record<
  string,
  { women: SubItem[]; men: SubItem[] }
> = {
  /* ========= Marketplace ========= */
  Amazon:    {
    women: [
      { sub: 'Electronics',  img: 'https://drive.google.com/file/d/1FFDoC9BefolaLPuJhsO1N8vG5GhBwE_F/view?usp=drive_link' },
      { sub: 'Home',       img: 'https://drive.google.com/file/d/12kygA8xI64fOwE9rmfV2G_mL0YYESKN5/view?usp=drive_link' },
      { sub: 'Fashion', img: 'https://drive.google.com/file/d/1B2XwrOz3QQu28GWdf03POOSovD-xTAYh/view?usp=sharing' },
    ],
    men: [
      { sub: 'Electronics',  img: 'https://drive.google.com/file/d/1FFDoC9BefolaLPuJhsO1N8vG5GhBwE_F/view?usp=drive_link' },
      { sub: 'Home',       img: 'https://drive.google.com/file/d/12kygA8xI64fOwE9rmfV2G_mL0YYESKN5/view?usp=drive_link' },
      { sub: 'Fashion', img: 'https://drive.google.com/file/d/1B2XwrOz3QQu28GWdf03POOSovD-xTAYh/view?usp=sharing' },
    ],
    
    
  },
  Noon:      {
    women: [
      { sub: 'Electronics',  img: 'https://drive.google.com/file/d/13uwMJ1FuYi4qIcnVNhNx5mFjonEnlAd5/view?usp=sharing' },
      { sub: 'Beauty',       img: 'https://drive.google.com/file/d/1hRTRuWBJ-mWAyB-NCkPgDYHhPtp91fAY/view?usp=sharing' },
      { sub: 'Fashion', img: 'https://drive.google.com/file/d/15MbBckikjz6OgrK7q_Ah_PNFIcNyMYMM/view?usp=sharing' },
    ],
    men: [
      { sub: 'Electronics',  img: 'https://drive.google.com/file/d/13uwMJ1FuYi4qIcnVNhNx5mFjonEnlAd5/view?usp=sharing' },
      { sub: 'Beauty',       img: 'https://drive.google.com/file/d/1tdaBrl0b1GKhTDJGGhnRJ92SMqU573kX/view?usp=sharing' },
      { sub: 'Fashion', img: 'https://drive.google.com/file/d/18FFG123zaz32yU63Uu06foU9zM_YzxRs/view?usp=sharing' },
    ],
    
  },
  Talabat:   {
    women: [
      { sub: 'Food-Delivery',  img: 'https://drive.google.com/file/d/17ahTxLNYqIUQeb6EdINeBDiEmPkkJmMc/view?usp=sharing' },
      { sub: 'Groceries',       img: 'https://drive.google.com/file/d/1hZACFqnqRnJ3f84-edF5xq4Q27xUfYeA/view?usp=sharing' },
      { sub: 'Essentials', img: 'https://drive.google.com/file/d/1LoswWXHGaZgBII0iO2TqL7PYVeIkGBWC/view?usp=sharing' },
    ],
    men: [
      { sub: 'Food-Delivery',  img: 'https://drive.google.com/file/d/17ahTxLNYqIUQeb6EdINeBDiEmPkkJmMc/view?usp=sharing' },
      { sub: 'Groceries',       img: 'https://drive.google.com/file/d/1hZACFqnqRnJ3f84-edF5xq4Q27xUfYeA/view?usp=sharing' },
      { sub: 'Essentials', img: 'https://drive.google.com/file/d/1LoswWXHGaZgBII0iO2TqL7PYVeIkGBWC/view?usp=sharing' },
    ],
  },
  Carrefour: {
    women: [
      { sub: 'Groceries',  img: 'https://drive.google.com/file/d/1eeu2fCuNbdIBogyrdoMUDQ6YaIICKBug/view?usp=sharing' },
      { sub: 'Appliances',       img: 'https://drive.google.com/file/d/1vAL05s89fo0tn0c_qFqed22sauqtwEB4/view?usp=sharing' },
      { sub: 'Electronics', img: 'https://drive.google.com/file/d/1EC523TzllbaZnUhp_7JPnjckiSD4HQI2/view?usp=sharing' },
    ],
    men: [
      { sub: 'Groceries',  img: 'https://drive.google.com/file/d/1eeu2fCuNbdIBogyrdoMUDQ6YaIICKBug/view?usp=sharing' },
      { sub: 'Appliances',       img: 'https://drive.google.com/file/d/1vAL05s89fo0tn0c_qFqed22sauqtwEB4/view?usp=sharing' },
      { sub: 'Electronics', img: 'https://drive.google.com/file/d/1EC523TzllbaZnUhp_7JPnjckiSD4HQI2/view?usp=sharing' },
    ],
  },
  Namshi:    {
    women: [
      { sub: 'Fashion',  img: 'https://drive.google.com/file/d/1VvgZUAtQ2ihsVaZnFObw2GHoQf7LiclL/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1d8zI6wra1dqBu0GNfTAsAy4cM6xRzUsR/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1r8xQKvFGQ5NfS2wZvgRNV7tIzcZ9Muhh/view?usp=sharing' },
    ],
    men: [
      { sub: 'Fashion',  img: 'https://drive.google.com/file/d/1x_6wDZFHeMTVabwuFsiJB5jUy25sp5T3/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1d8zI6wra1dqBu0GNfTAsAy4cM6xRzUsR/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1r8xQKvFGQ5NfS2wZvgRNV7tIzcZ9Muhh/view?usp=sharing' },
    ],
    
  },

  /* ========= Sportswear ========= */
  Nike:     {
    women: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1axLP_yO-X-mJiTcf076n26Haazqqdd03/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1DiDybhB2Emk4fnuldTEGbxSm1emiLHT4/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1VgjCAiwrdjdlWWKdnXhKIM-3avdUBCzI/view?usp=sharing' },
    ],
    men: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1aZe2kcoqnsQjOhdtI8Bzlc_feNegdNrc/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1DiDybhB2Emk4fnuldTEGbxSm1emiLHT4/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1VgjCAiwrdjdlWWKdnXhKIM-3avdUBCzI/view?usp=sharing' },
    ],
  },
  Adidas:   {
    women: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1bPQaMXJDQDAaSugsOE2pP42ymmsRcsA6/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1GmPdCDJT69BdgWD4sYMMjLnP5Ehre92z/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1VgjCAiwrdjdlWWKdnXhKIM-3avdUBCzI/view?usp=sharing' },
    ],
    men: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1bPQaMXJDQDAaSugsOE2pP42ymmsRcsA6/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1GmPdCDJT69BdgWD4sYMMjLnP5Ehre92z/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1VgjCAiwrdjdlWWKdnXhKIM-3avdUBCzI/view?usp=sharing' },
    ],

  },
  Puma:     {
    women: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1_t9JEPHSep6bmdZHRxuLgTtu-AWx6dvL/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1VuXWlgKdkm8PybUfqP2eSiKNEyIUFPKr/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1BDknosfS0qUaqtE0Rni0fhi15Fyh-ymT/view?usp=sharing' },
    ],
    men: [
      { sub: 'Sportswear',  img: 'https://drive.google.com/file/d/1_t9JEPHSep6bmdZHRxuLgTtu-AWx6dvL/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1VuXWlgKdkm8PybUfqP2eSiKNEyIUFPKr/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1BDknosfS0qUaqtE0Rni0fhi15Fyh-ymT/view?usp=sharing' },
    ],
  },
  Skechers: {
    women: [
      { sub: 'Foamies',  img: 'https://drive.google.com/file/d/1VOYgu-3IIerStkuz-V8fw2QObCRbCPBc/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1_YVrQPZ2tsMumbrJM66_nt8bPINtlYOF/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1KQ4H7NYS7ZENeG511Se3AJXEBD72_xCc/view?usp=sharing' },
    ],
    men: [
      { sub: 'Foamies',  img: 'https://drive.google.com/file/d/1VOYgu-3IIerStkuz-V8fw2QObCRbCPBc/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/1_YVrQPZ2tsMumbrJM66_nt8bPINtlYOF/view?usp=sharing' },
      { sub: 'Accessories', img: 'https://drive.google.com/file/d/1KQ4H7NYS7ZENeG511Se3AJXEBD72_xCc/view?usp=sharing' },
    ],
  },
  Ecco:{
    women: [
      { sub: 'Leather-Goods',  img: 'https://drive.google.com/file/d/18p-ldx1dkA_qipM6NU2zc0dgDwAzKE-c/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/14e-_xw4Arn1wkqZv9VFNxxB_Hhg8s5jg/view?usp=sharing' },
    ],
    men: [
      { sub: 'Leather-Goods',  img: 'https://drive.google.com/file/d/18p-ldx1dkA_qipM6NU2zc0dgDwAzKE-c/view?usp=sharing' },
      { sub: 'Shoes',       img: 'https://drive.google.com/file/d/14e-_xw4Arn1wkqZv9VFNxxB_Hhg8s5jg/view?usp=sharing' },
    ],
  },

  /* ========= Fashion Mass ========= */
  Zara:{
    women: [
      { sub: 'Dresses',  img: 'https://drive.google.com/file/d/19DovRReybTwj6PQOG4oDHZGgXcsIHw-N/view?usp=sharing' },
      { sub: 'Jackets',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  'H&M':          {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  Mango:          {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  'Forever 21':   {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  'Tommy Hilfiger':{
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  "Levi's":       {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  Diesel:         {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },

  /* ========= Luxury ========= */
  Gucci: {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },
  Prada: {
    women: [
      { sub: 'Tops',  img: 'https://drive.google.com/file/d/1yy0TNTOMTZzEztda15mf0oyG7MvnLf9k/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1A8FRf0jb1pBMFjbV4_D_tdyYDyo6NUH4/view?usp=sharing' },
    ],
    men: [
      { sub: 'Shirts',  img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
      { sub: 'Pants',       img: 'https://drive.google.com/file/d/1x5kp--ZMkGPL82pWF7JfYH21VGmBMbKQ/view?usp=sharing' },
    ],
  },

  /* ========= Beauty ========= */
  'Huda Beauty': {
    women: [
      { sub: 'Makeup',  img: 'https://drive.google.com/file/d/1FGvVgf5j0AhKk6HHS5QuEPjjj_rr1LOU/view?usp=sharing' },
      { sub: 'Fragrance',       img: 'https://drive.google.com/file/d/1izKOHnKTCc2FJfvm7MOqwpjPz9nYLR_J/view?usp=sharing' },
    ],
    men: [
      
    ],
  },

  /* ========= Home ========= */
  IKEA: {
    women: [
      { sub: 'Furniture',  img: 'https://drive.google.com/file/d/11aoVPnYl4O9z77CGXEIVC0PrPlAfB7VR/view?usp=sharing' },
      { sub: 'Sofás',       img: 'https://drive.google.com/file/d/1cm33RASefXrUeqn7_nJpA1o8HYauzlLw/view?usp=sharing' },
    ],
    men: [
      { sub: 'Furniture',  img: 'https://drive.google.com/file/d/11aoVPnYl4O9z77CGXEIVC0PrPlAfB7VR/view?usp=sharing' },
      { sub: 'Sofás',       img: 'https://drive.google.com/file/d/1cm33RASefXrUeqn7_nJpA1o8HYauzlLw/view?usp=sharing' },
    ],
  },
};

/* ──────────────────────────────────────────────
   3) دالة توليد منتجات بناء على الفئات مع الصور
────────────────────────────────────────────── */
const generateBrandProducts = (brand: string): Product[] => {
  const cfg = brandSubs[brand];
  if (!cfg) return [];

  const women = cfg.women.slice(0, 3).map(({ sub, img }, i) => {
    const id = `${slug(brand)}-w${i + 1}`;
    return {
      id,
      name: `Women's ${sub}`,
      brand,
      subCategory: sub,
      imageUrl: img,
      gender: 'women' as const,
    };
  });
  const men = cfg.men.slice(0, 3).map(({ sub, img }, i) => {
    const id = `${slug(brand)}-m${i + 1}`;
    return {
      id,
      name: `Men's ${sub}`,
      brand,
      subCategory: sub,
      imageUrl: img,
      gender: 'men' as const,
    };
  });

  return [...women, ...men];
};

/* ──────────────────────────────────────────────
   4) تجميع البراندات في مجموعات
────────────────────────────────────────────── */
const categorizedBrands = {
  marketplace: ['Amazon', 'Noon', 'Talabat', 'Carrefour', 'Namshi'],
  sportswear: ['Nike', 'Adidas', 'Puma', 'Skechers', 'Ecco'],
  fashionMass: [
    'Zara',
    'H&M',
    'Mango',
    'Forever 21',
    'Tommy Hilfiger',
    "Levi's",
    'Diesel',
  ],
  luxury: ['Gucci', 'Prada'],
  beauty: ['Huda Beauty'],
  home: ['IKEA'],
};

/* ──────────────────────────────────────────────
   5) إنشاء القائمة النهائيّة مرة واحدة
────────────────────────────────────────────── */
let allProducts: Product[] = [];
Object.values(categorizedBrands).forEach((arr) =>
  arr.forEach((brand) => {
    allProducts = [...allProducts, ...generateBrandProducts(brand)];
  })
);

/* ──────────────────────────────────────────────
   6) دوال الاستعلام الأساسيّة
────────────────────────────────────────────── */
export const getProductsByGender = (g: 'women' | 'men') =>
  allProducts.filter((p) => p.gender === g);

export const getProductsByBrandAndGender = (
  brand: string,
  g: 'women' | 'men'
) => allProducts.filter((p) => p.brand === brand && p.gender === g);

export const getProductsByCategory = (
  cat: keyof typeof categorizedBrands
) => {
  const brands = categorizedBrands[cat];
  return allProducts.filter((p) => brands.includes(p.brand));
};

export const getBrandsByGender = (g: 'women' | 'men') => [
  ...new Set(
    allProducts.filter((p) => p.gender === g).map((p) => p.brand)
  ),
];

export const getCategoriesByGender = (g: 'women' | 'men') => [
  ...new Set(
    allProducts.filter((p) => p.gender === g).map((p) => p.subCategory)
  ),
];

/* للتوافق مع الكود القديم */
export const womenProducts = getProductsByGender('women');
export const menProducts = getProductsByGender('men');
