
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Women\'s Collections', path: '/collections/women' },
    { name: 'Men\'s Collections', path: '/collections/men' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: '📱', url: 'https://facebook.com' },
    { name: 'Instagram', icon: '📸', url: 'https://instagram.com' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gclx-navy text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Logo className="mb-4 bg-white p-2 rounded-md inline-block" />
            <p className="mt-4 text-sm text-gray-300">
              GCLX General Trading brings global brands to local shoppers at unbeatable discounts.
              Shop authentic fashion, beauty and lifestyle products from 40+ world-class brands.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gclx-gold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-gclx-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gclx-gold">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gclx-gold transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <address className="not-italic text-sm text-gray-300">
              <p>Business Bay, Dubai, UAE</p>
              <p>Email: info@gclx-trading.com</p>
              <p>Phone: +971 4 123 4567</p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
          <p>© {currentYear} GCLX General Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
