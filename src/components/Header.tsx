
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('collections'), path: '/collections' },
    { name: t('tourism'), path: '/tourism' }, // Added Tourism link
    { name: t('contact'), path: '/contact' },
  ];

  const getLinkStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive 
      ? 'font-medium text-gclx-navy border-b-2 border-gclx-gold'
      : 'hover:text-gclx-navy transition-colors duration-200';
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm w-full">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-8 mr-8' : 'space-x-8 ml-8'}`}>
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  end={link.path === '/'}
                  className={getLinkStyles}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
          
          <div className="flex items-center space-x-2">
            {/* Desktop Language Switcher */}
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleMenu}
              className="md:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path}
                  end={link.path === '/'}
                  className={getLinkStyles}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              
              {/* Mobile Language Switcher - Centered and aligned properly */}
              <div className="flex justify-center pt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
