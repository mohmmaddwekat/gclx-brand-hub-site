
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <Link to="/" className={`flex items-center ${className}`}>
      {/* Replace with actual logo image when available */}
      <div className={`bg-gclx-navy rounded-md flex items-center justify-center ${sizeClasses[size]} aspect-[3/1]`}>
        <span className="text-white font-bold">GCLX</span>
      </div>
    </Link>
  );
};

export default Logo;
