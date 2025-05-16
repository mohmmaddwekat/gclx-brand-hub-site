
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Collections', path: '/collections' },
    { name: 'Contact', path: '/contact' },
  ];

  const getLinkStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive 
      ? 'font-medium text-gclx-navy border-b-2 border-gclx-gold'
      : 'hover:text-gclx-navy transition-colors duration-200';
  };

  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
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
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMenu}
            className="block md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
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
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
