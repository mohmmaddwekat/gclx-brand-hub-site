
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-gclx-gold font-bold" : "";
  };

  const navLinks = [
    { path: "/", label: t('home') },
    { path: "/about", label: t('about') },
    { path: "/services", label: t('services') },
    { path: "/collections", label: t('collections') },
    { path: "/contact", label: t('contact') },
  ];

  return (
    <header className="bg-gclx-navy text-white">
      <div className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" aria-label="GCLX Home" className="flex-shrink-0">
          <Logo className="h-10 md:h-12" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-gclx-gold transition-colors duration-200 ${isActive(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button 
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="ml-4"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-gclx-navy z-50">
            <nav className="flex flex-col p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`py-3 text-lg border-b border-white/10 hover:text-gclx-gold transition-colors duration-200 ${isActive(link.path)}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
