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
    women: ['Electronics', 'Home', 'Fashion'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Amazon')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Amazon ' + sub
      )}`,
    })),
    men: ['Electronics', 'Home', 'Fashion'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Amazon')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Amazon ' + sub
      )}`,
    })),
  },
  Noon:      {
    women: ['Electronics', 'Beauty', 'Fashion'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Noon')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Noon ' + sub
      )}`,
    })),
    men: ['Electronics', 'Beauty', 'Fashion'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Noon')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Noon ' + sub
      )}`,
    })),
  },
  Talabat:   {
    women: ['Food-Delivery', 'Groceries', 'Essentials'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Talabat')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Talabat ' + sub
      )}`,
    })),
    men: ['Food-Delivery', 'Groceries', 'Essentials'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Talabat')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Talabat ' + sub
      )}`,
    })),
  },
  Carrefour: {
    women: ['Groceries', 'Appliances', 'Electronics'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Carrefour')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Carrefour ' + sub
      )}`,
    })),
    men: ['Groceries', 'Appliances', 'Electronics'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Carrefour')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Carrefour ' + sub
      )}`,
    })),
  },
  Namshi:    {
    women: ['Fashion', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Namshi')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Namshi ' + sub
      )}`,
    })),
    men: ['Fashion', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Namshi')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Namshi ' + sub
      )}`,
    })),
  },

  /* ========= Sportswear ========= */
  Nike:     {
    women: [
      { sub: 'Sportswear',  img: 'https://images.unsplash.com/photo-S5_t6VIMClE' },
      { sub: 'Shoes',       img: 'https://images.unsplash.com/photo-164_6wVEHfI' },
      { sub: 'Accessories', img: 'https://images.unsplash.com/photo-aCtb_RTwuM' },
    ],
    men: [
      { sub: 'Sportswear',  img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772' },
      { sub: 'Shoes',       img: 'https://images.unsplash.com/photo-1603346203721-35f610d0b4be' },
      { sub: 'Accessories', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c' },
    ],
  },
  Adidas:   {
    women: ['Sportswear', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Adidas')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Adidas ' + sub
      )}`,
    })),
    men: ['Sportswear', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Adidas')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Adidas ' + sub
      )}`,
    })),
  },
  Puma:     {
    women: ['Sportswear', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Puma')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Puma ' + sub
      )}`,
    })),
    men: ['Sportswear', 'Shoes', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Puma')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Puma ' + sub
      )}`,
    })),
  },
  Skechers: {
    women: ['Shoes', 'Sportswear', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Skechers')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Skechers ' + sub
      )}`,
    })),
    men: ['Shoes', 'Sportswear', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Skechers')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Skechers ' + sub
      )}`,
    })),
  },
  Ecco:     {
    women: ['Shoes', 'Accessories', 'Leather-Goods'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Ecco')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Ecco ' + sub
      )}`,
    })),
    men: ['Shoes', 'Accessories', 'Leather-Goods'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Ecco')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Ecco ' + sub
      )}`,
    })),
  },

  /* ========= Fashion Mass ========= */
  'Calvin Klein': {
    women: ['Underwear', 'Denim', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Calvin Klein')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Calvin Klein ' + sub
      )}`,
    })),
    men: ['Underwear', 'Denim', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Calvin Klein')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Calvin Klein ' + sub
      )}`,
    })),
  },
  Zara:           {
    women: ['Dresses', 'Jackets', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Zara')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Zara ' + sub
      )}`,
    })),
    men: ['Shirts', 'Pants', 'Jackets'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Zara')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Zara ' + sub
      )}`,
    })),
  },
  'H&M':          {
    women: ['Tops', 'Pants', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('H&M')}-${slug(sub)}/600x600?${encodeURIComponent(
        'H&M ' + sub
      )}`,
    })),
    men: ['T-shirts', 'Pants', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('H&M')}-${slug(sub)}/600x600?${encodeURIComponent(
        'H&M ' + sub
      )}`,
    })),
  },
  Mango:          {
    women: ['Dresses', 'Bags', 'Shoes'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Mango')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Mango ' + sub
      )}`,
    })),
    men: ['Shirts', 'Shoes', 'Bags'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Mango')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Mango ' + sub
      )}`,
    })),
  },
  'Forever 21':   {
    women: ['Dresses', 'Tops', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Forever 21')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Forever 21 ' + sub
      )}`,
    })),
    men: ['T-shirts', 'Accessories', 'Pants'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Forever 21')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Forever 21 ' + sub
      )}`,
    })),
  },
  'Tommy Hilfiger':{
    women: ['Tops', 'Jackets', 'Bags'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug(
        'Tommy Hilfiger'
      )}-${slug(sub)}/600x600?${encodeURIComponent(
        'Tommy Hilfiger ' + sub
      )}`,
    })),
    men: ['Shirts', 'Watches', 'Jackets'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed(${slug(
        'Tommy Hilfiger'
      )}-${slug(sub)}/600x600?${encodeURIComponent(
        'Tommy Hilfiger ' + sub
      )}`,
    })),
  },
  "Levi's":       {
    women: ['Denim', 'Jackets', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug("Levi's")}-${slug(sub)}/600x600?${encodeURIComponent(
        "Levi's " + sub
      )}`,
    })),
    men: ['Denim', 'Jackets', 'Accessories'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug("Levi's")}-${slug(sub)}/600x600?${encodeURIComponent(
        "Levi's " + sub
      )}`,
    })),
  },
  Diesel:         {
    women: ['Denim', 'Jackets', 'Shoes'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Diesel')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Diesel ' + sub
      )}`,
    })),
    men: ['Denim', 'Jackets', 'Shoes'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Diesel')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Diesel ' + sub
      )}`,
    })),
  },

  /* ========= Luxury ========= */
  Gucci: {
    women: ['Bags', 'Shoes', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Gucci')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Gucci ' + sub
      )}`,
    })),
    men: ['Shoes', 'Bags', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed(${slug('Gucci')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Gucci ' + sub
      )}`,
    })),
  },
  Prada: {
    women: ['Bags', 'Shoes', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Prada')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Prada ' + sub
      )}`,
    })),
    men: ['Shoes', 'Bags', 'Fragrance'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed(${slug('Prada')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Prada ' + sub
      )}`,
    })),
  },

  /* ========= Beauty ========= */
  'Huda Beauty': {
    women: ['Makeup', 'Fragrance', 'Tools'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('Huda Beauty')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Huda Beauty ' + sub
      )}`,
    })),
    men: ['Fragrance', 'Tools', 'Skincare'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed(${slug('Huda Beauty')}-${slug(sub)}/600x600?${encodeURIComponent(
        'Huda Beauty ' + sub
      )}`,
    })),
  },

  /* ========= Home ========= */
  IKEA: {
    women: ['Furniture', 'Décor', 'Kitchenware'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed/${slug('IKEA')}-${slug(sub)}/600x600?${encodeURIComponent(
        'IKEA ' + sub
      )}`,
    })),
    men: ['Furniture', 'Décor', 'Kitchenware'].map((sub) => ({
      sub,
      img: `https://source.unsplash.com/seed(${slug('IKEA')}-${slug(sub)}/600x600?${encodeURIComponent(
        'IKEA ' + sub
      )}`,
    })),
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
    'Calvin Klein',
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
