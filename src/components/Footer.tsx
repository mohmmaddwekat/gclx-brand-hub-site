
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();
  
  const quickLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('contact'), path: '/contact' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://instagram.com' }
  ];

  return (
    <footer className="bg-gclx-navy text-white w-full">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <Logo className="mb-4 bg-white p-2 rounded-md inline-block" />
            <p className="mt-4 text-sm text-gray-300">
              {t('companyDescription')}
            </p>
          </div>

          {/* Quick Links */}
          <div className={isRTL ? 'text-center' : ''}>
            <h3 className={`text-lg font-semibold mb-4 text-gclx-gold ${isRTL ? 'text-center' : ''}`}>{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-gclx-gold transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className={isRTL ? 'text-center' : 'text-center'}>
            <h3 className="text-lg font-semibold mb-4 text-gclx-gold">{t('connectWithUs')}</h3>
            <div className={`flex mb-4 ${isRTL ? 'justify-end space-x-reverse' : ''} space-x-4`}>
              {socialLinks.map(social => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-gclx-gold transition-colors duration-200" aria-label={social.name}>
                  {social.icon}
                </a>
              ))}
            </div>
            <address className={`not-italic text-sm text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <p>{t('address')}</p>
              <p>{t('email')}</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>{t('copyright').replace('2025', currentYear.toString())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
