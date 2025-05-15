
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Checkbox } from "@/components/ui/checkbox";
import PageLayout from '@/components/PageLayout';
import ProductCard from '@/components/ProductCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { 
  Product, 
  womenProducts, 
  menProducts, 
  getCategoriesByGender, 
  getBrandsByGender 
} from '@/data/productsData';

const CollectionDetail: React.FC = () => {
  const { gender } = useParams<{ gender: string }>();
  const isWomen = gender === 'women';
  const pageTitle = isWomen ? "Women's Collection" : "Men's Collection";

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [filterDialogOpen, setFilterDialogOpen] = useState(false);
  
  const products = isWomen ? womenProducts : menProducts;
  const categories = getCategoriesByGender(isWomen ? 'women' : 'men');
  const brands = getBrandsByGender(isWomen ? 'women' : 'men');

  useEffect(() => {
    // Apply filters and search
    let filtered = [...products];
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    // Filter by brands
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => selectedBrands.includes(product.brand));
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(lowerSearchTerm) || 
        product.brand.toLowerCase().includes(lowerSearchTerm)
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, selectedBrands, searchTerm, products]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the useEffect
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const applyFilters = () => {
    setFilterDialogOpen(false);
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
  };

  return (
    <PageLayout 
      title={pageTitle} 
      description={`Shop authentic ${gender}'s fashion, accessories, and more from top global brands at 20-50% off.`}
    >
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gclx-navy to-blue-950 py-8 md:py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{pageTitle}</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Authentic products from top global brands at 20-50% off retail prices
          </p>

          {/* Search Bar */}
          <form 
            onSubmit={handleSearch} 
            className="mt-8 max-w-md mx-auto flex items-center gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 bg-white text-black w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="bg-accent text-black hover:bg-accent/90">
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Filter Section and View Mode */}
      <div className="container-custom my-4">
        <div className="flex flex-wrap gap-3 items-center justify-between">
          {/* Category Filter Select */}
          <div className="flex items-center gap-3">
            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Categories</SelectLabel>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            
            {/* Brands Filter Dialog */}
            <Dialog open={filterDialogOpen} onOpenChange={setFilterDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={18} /> Brands
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Filter by Brands</DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-2 gap-4 py-4 max-h-[60vh] overflow-y-auto">
                  {brands.map(brand => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox 
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => toggleBrand(brand)}
                      />
                      <label 
                        htmlFor={brand} 
                        className="flex-1 cursor-pointer text-sm"
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
                
                <DialogFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={clearFilters}
                    disabled={selectedBrands.length === 0 && selectedCategory === 'all'}
                  >
                    Clear All
                  </Button>
                  <Button onClick={applyFilters}>Apply Filters</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          
          {/* View Mode Toggle */}
          <div className="flex gap-2 ml-auto">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              Grid
            </Button>
            <Button 
              variant={viewMode === 'table' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('table')}
            >
              Table
            </Button>
          </div>
        </div>
        
        {/* Filter Applied Indicators */}
        {(selectedBrands.length > 0 || selectedCategory !== 'all') && (
          <div className="flex flex-wrap gap-2 mt-3">
            {selectedCategory !== 'all' && (
              <div className="bg-accent/20 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <span>Category: {selectedCategory}</span>
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className="hover:bg-accent/10 rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </div>
            )}
            {selectedBrands.map(brand => (
              <div key={brand} className="bg-accent/20 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                <span>{brand}</span>
                <button 
                  onClick={() => toggleBrand(brand)}
                  className="hover:bg-accent/10 rounded-full p-1"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters} 
              className="text-sm"
            >
              Clear All
            </Button>
          </div>
        )}
      </div>

      {/* Products Grid/Table */}
      <section className="py-8">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 border rounded-lg">
              <p className="text-lg text-gray-500">No products found with the selected filters.</p>
              <Button 
                variant="outline" 
                onClick={clearFilters}
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  imageUrl={product.imageUrl}
                  category={product.category}
                />
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead>Brand</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map(product => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-16 h-16 object-cover rounded-md" 
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>{product.brand}</TableCell>
                      <TableCell>{product.category}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />
    </PageLayout>
  );
};

export default CollectionDetail;
