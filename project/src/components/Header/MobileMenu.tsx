import React from 'react';
import { Navigation } from './Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <Navigation isMobile onClose={onClose} />
      </div>
    </div>
  );
};