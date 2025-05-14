
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  imageUrl: string;
  gender: 'women' | 'men';
}

// Generate product categories based on gender
const generateCategories = (gender: 'women' | 'men') => {
  if (gender === 'women') {
    return [
      'Dresses', 'Tops', 'Pants', 'Skirts', 'Jackets', 'Shoes',
      'Bags', 'Accessories', 'Makeup', 'Fragrance'
    ];
  } else {
    return [
      'Shirts', 'T-shirts', 'Pants', 'Jackets', 'Suits',
      'Shoes', 'Accessories', 'Sportswear', 'Watches', 'Fragrance'
    ];
  }
};

// Generate 10 products for each brand for both genders
const generateBrandProducts = (brand: string): Product[] => {
  const products: Product[] = [];
  
  // Women's products
  const womenCategories = generateCategories('women');
  for (let i = 1; i <= 10; i++) {
    const categoryIndex = (i - 1) % womenCategories.length;
    products.push({
      id: `${brand.toLowerCase()}-w${i}`,
      name: `Women's ${womenCategories[categoryIndex]} ${i}`,
      brand: brand,
      category: 'Women',
      subCategory: womenCategories[categoryIndex],
      imageUrl: `https://images.unsplash.com/photo-${1650000000000 + (i * 123456)}`,
      gender: 'women'
    });
  }
  
  // Men's products
  const menCategories = generateCategories('men');
  for (let i = 1; i <= 10; i++) {
    const categoryIndex = (i - 1) % menCategories.length;
    products.push({
      id: `${brand.toLowerCase()}-m${i}`,
      name: `Men's ${menCategories[categoryIndex]} ${i}`,
      brand: brand,
      category: 'Men',
      subCategory: menCategories[categoryIndex],
      imageUrl: `https://images.unsplash.com/photo-${1650000000000 + (i * 654321)}`,
      gender: 'men'
    });
  }
  
  return products;
};

// Brands categorized by collection
const categorizedBrands = {
  marketplace: ["Amazon", "Noon", "Talabat", "Carrefour", "Namshi"],
  sportswear: ["Nike", "Adidas", "Puma", "Skechers", "Ecco"],
  fashionMass: ["Calvin Klein", "Zara", "H&M", "Mango", "Forever 21", "Tommy Hilfiger", "Levi's", "Diesel"],
  luxury: [
    "Dolce & Gabbana", "Gucci", "Louis Vuitton", "Chanel", "Versace",
    "Balenciaga", "Valentino", "Fendi", "Ralph Lauren", "Hugo Boss",
    "Dior", "Chloé", "Self-Portrait", "Reformation", "Prada",
    "Jimmy Choo", "Christian Louboutin", "Steve Madden", "Charles & Keith"
  ],
  beauty: [
    "Huda Beauty", "Charlotte Tilbury", "Fenty Beauty", "MAC",
    "Estée Lauder", "Lancôme", "The Ordinary", "La Roche-Posay", "NARS", "Dareen"
  ],
  home: ["IKEA"]
};

// Generate all products
let allProducts: Product[] = [];

// Add products for each brand in each category
Object.values(categorizedBrands).forEach(brands => {
  brands.forEach(brand => {
    allProducts = [...allProducts, ...generateBrandProducts(brand)];
  });
});

// Helper function to get products by gender
export const getProductsByGender = (gender: 'women' | 'men'): Product[] => {
  return allProducts.filter(product => product.gender === gender);
};

// Helper function to get products by brand and gender
export const getProductsByBrandAndGender = (brand: string, gender: 'women' | 'men'): Product[] => {
  return allProducts.filter(product => product.brand === brand && product.gender === gender);
};

// Helper function to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  const brands = Object.entries(categorizedBrands).find(([key, _]) => key === category)?.[1] || [];
  return allProducts.filter(product => brands.includes(product.brand));
};

// Helper function to get all brands for a specific gender
export const getBrandsByGender = (gender: 'women' | 'men'): string[] => {
  const uniqueBrands = [...new Set(allProducts.filter(product => product.gender === gender).map(product => product.brand))];
  return uniqueBrands;
};

// Helper function to get all categories for a specific gender
export const getCategoriesByGender = (gender: 'women' | 'men'): string[] => {
  const products = allProducts.filter(product => product.gender === gender);
  const categories = [...new Set(products.map(product => product.subCategory))];
  return categories;
};

// Export all women's and men's products for backward compatibility
export const womenProducts = getProductsByGender('women');
export const menProducts = getProductsByGender('men');
