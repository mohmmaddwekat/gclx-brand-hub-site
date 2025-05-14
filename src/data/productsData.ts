
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  imageUrl: string;
  originalPrice: number;
  discountPrice: number;
  gender: 'women' | 'men';
}

export const womenProducts: Product[] = [
  {
    id: 'w1',
    name: 'Floral Print Summer Dress',
    brand: 'Zara',
    category: 'Clothing',
    subCategory: 'Dresses',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    originalPrice: 89.99,
    discountPrice: 44.99,
    gender: 'women'
  },
  {
    id: 'w2',
    name: 'Designer Handbag',
    brand: 'Gucci',
    category: 'Accessories',
    subCategory: 'Bags',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    originalPrice: 1299.99,
    discountPrice: 799.99,
    gender: 'women'
  },
  {
    id: 'w3',
    name: 'Athletic Sneakers',
    brand: 'Nike',
    category: 'Shoes',
    subCategory: 'Sneakers',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    originalPrice: 129.99,
    discountPrice: 79.99,
    gender: 'women'
  },
  {
    id: 'w4',
    name: 'Luxury Perfume',
    brand: 'Dior',
    category: 'Perfumes',
    subCategory: 'Fragrances',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    originalPrice: 149.99,
    discountPrice: 99.99,
    gender: 'women'
  },
  {
    id: 'w5',
    name: 'Premium Makeup Set',
    brand: 'NARS',
    category: 'Beauty',
    subCategory: 'Makeup',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    originalPrice: 199.99,
    discountPrice: 129.99,
    gender: 'women'
  },
  {
    id: 'w6',
    name: 'Silver Bracelet',
    brand: 'H&M',
    category: 'Accessories',
    subCategory: 'Jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    originalPrice: 39.99,
    discountPrice: 24.99,
    gender: 'women'
  },
  {
    id: 'w7',
    name: 'Designer Sunglasses',
    brand: 'Gucci',
    category: 'Accessories',
    subCategory: 'Eyewear',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    originalPrice: 299.99,
    discountPrice: 199.99,
    gender: 'women'
  },
  {
    id: 'w8',
    name: 'Skincare Set',
    brand: 'Huda Beauty',
    category: 'Beauty',
    subCategory: 'Skincare',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    originalPrice: 149.99,
    discountPrice: 89.99,
    gender: 'women'
  }
];

export const menProducts: Product[] = [
  {
    id: 'm1',
    name: 'Classic Fit Polo Shirt',
    brand: 'Ralph Lauren',
    category: 'Clothing',
    subCategory: 'Shirts',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    originalPrice: 89.99,
    discountPrice: 49.99,
    gender: 'men'
  },
  {
    id: 'm2',
    name: 'Performance Running Shoes',
    brand: 'Nike',
    category: 'Shoes',
    subCategory: 'Athletic',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    originalPrice: 129.99,
    discountPrice: 79.99,
    gender: 'men'
  },
  {
    id: 'm3',
    name: 'Leather Watch',
    brand: 'Hugo Boss',
    category: 'Watches',
    subCategory: 'Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81',
    originalPrice: 249.99,
    discountPrice: 169.99,
    gender: 'men'
  },
  {
    id: 'm4',
    name: 'Slim Fit Jeans',
    brand: 'Calvin Klein',
    category: 'Clothing',
    subCategory: 'Pants',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    originalPrice: 99.99,
    discountPrice: 59.99,
    gender: 'men'
  },
  {
    id: 'm5',
    name: 'Signature Cologne',
    brand: 'Hugo Boss',
    category: 'Fragrance',
    subCategory: 'Cologne',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    originalPrice: 119.99,
    discountPrice: 79.99,
    gender: 'men'
  },
  {
    id: 'm6',
    name: 'Leather Wallet',
    brand: 'Calvin Klein',
    category: 'Accessories',
    subCategory: 'Wallets',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    originalPrice: 69.99,
    discountPrice: 39.99,
    gender: 'men'
  },
  {
    id: 'm7',
    name: 'Track Jacket',
    brand: 'Adidas',
    category: 'Clothing',
    subCategory: 'Activewear',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    originalPrice: 79.99,
    discountPrice: 49.99,
    gender: 'men'
  },
  {
    id: 'm8',
    name: 'Classic Aviator Sunglasses',
    brand: 'Puma',
    category: 'Accessories',
    subCategory: 'Eyewear',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    originalPrice: 129.99,
    discountPrice: 79.99,
    gender: 'men'
  }
];

// Helper function to get all brands for a specific gender
export const getBrandsByGender = (gender: 'women' | 'men'): string[] => {
  const products = gender === 'women' ? womenProducts : menProducts;
  const brands = [...new Set(products.map(product => product.brand))];
  return brands;
};

// Helper function to get all categories for a specific gender
export const getCategoriesByGender = (gender: 'women' | 'men'): string[] => {
  const products = gender === 'women' ? womenProducts : menProducts;
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};
