import React from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClose: () => void;
  className?: string;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClose, className = '' }) => (
  <button 
    onClick={onClose}
    className={`text-gray-400 hover:text-white transition-colors ${className}`}
    aria-label="Close"
  >
    <X className="w-6 h-6" />
  </button>
);