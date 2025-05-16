
import React from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from '@/contexts/LanguageContext';

interface FilterBarProps {
  selectedCategory: string;
  selectedBrands: string[];
  categories: string[];
  brands: string[];
  onCategoryChange: (value: string) => void;
  toggleBrand: (brand: string) => void;
  clearFilters: () => void;
  applyFilters: () => void;
  filterDialogOpen: boolean;
  setFilterDialogOpen: (open: boolean) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  selectedCategory,
  selectedBrands,
  categories,
  brands,
  onCategoryChange,
  toggleBrand,
  clearFilters,
  applyFilters,
  filterDialogOpen,
  setFilterDialogOpen
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex items-center gap-3">
      <Select value={selectedCategory} onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={t('allCategories')} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{t('category')}</SelectLabel>
            <SelectItem value="all">{t('allCategories')}</SelectItem>
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
            <Filter size={18} /> {t('brands')}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{t('filters')}: {t('brands')}</DialogTitle>
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
              {t('clearFilters')}
            </Button>
            <Button onClick={applyFilters}>{t('apply')}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FilterBar;
