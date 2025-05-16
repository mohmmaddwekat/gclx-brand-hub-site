
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
  onSubmit,
  placeholder
}) => {
  const { t, isRTL } = useLanguage();
  
  return (
    <form onSubmit={onSubmit} className="relative max-w-md mx-auto mt-6">
      <div className="relative flex items-center">
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder || t('searchPlaceholder')}
          className={`pr-16 py-6 ${isRTL ? 'text-right' : 'text-left'}`}
        />
        <Button
          type="submit"
          className="absolute right-1 bg-gclx-gold text-gclx-navy hover:bg-yellow-500"
          size="sm"
        >
          <Search className="h-4 w-4 mr-1" />
          <span>{t('search')}</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
