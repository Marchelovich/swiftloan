import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  children, 
  mobile = false,
  onClick
}) => (
  <a 
    href={href}
    onClick={onClick}
    className={`text-gray-400 hover:text-white transition-colors ${
      mobile ? 'block w-full text-lg py-2' : ''
    }`}
  >
    {children}
  </a>
);