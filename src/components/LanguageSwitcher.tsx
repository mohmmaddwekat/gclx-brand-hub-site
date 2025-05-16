
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  
  return (
    <div className="flex items-center">
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as 'en' | 'ar')}
      >
        <SelectTrigger className="w-[120px] bg-white/80 border-none focus:ring-1 focus:ring-gclx-navy">
          <div className="flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            <SelectValue placeholder={t('language')} />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t('english')}</SelectItem>
          <SelectItem value="ar">{t('arabic')}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSwitcher;
