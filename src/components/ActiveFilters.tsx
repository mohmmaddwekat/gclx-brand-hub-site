
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ActiveFiltersProps {
  selectedCategory: string;
  selectedBrands: string[];
  toggleBrand: (brand: string) => void;
  clearFilters: () => void;
  setSelectedCategory: (category: string) => void;
}

const ActiveFilters: React.FC<ActiveFiltersProps> = ({
  selectedCategory,
  selectedBrands,
  toggleBrand,
  clearFilters,
  setSelectedCategory
}) => {
  const { t } = useLanguage();
  
  if (selectedBrands.length === 0 && selectedCategory === 'all') {
    return null;
  }
  
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {selectedCategory !== 'all' && (
        <div className="bg-accent/20 text-sm px-3 py-1 rounded-full flex items-center gap-1">
          <span>{t('category')}: {selectedCategory}</span>
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
        {t('clearAll')}
      </Button>
    </div>
  );
};

export default ActiveFilters;
