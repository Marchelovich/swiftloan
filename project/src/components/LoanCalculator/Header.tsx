import React from 'react';
import { Sparkles } from 'lucide-react';
import { CloseButton } from '../common/CloseButton';

interface HeaderProps {
  isAnimating: boolean;
  onClose?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAnimating, onClose }) => (
  <div className="flex items-center justify-between mb-8">
    <h2 className="text-2xl md:text-3xl font-bold text-white">Smart Loan Calculator</h2>
    <div className="flex items-center space-x-4">
      <span className="hidden md:inline text-green-400 font-semibold">2.3% Monthly</span>
      <Sparkles className={`w-6 h-6 text-yellow-400 ${isAnimating ? 'animate-spin' : ''}`} />
      {onClose && <CloseButton onClose={onClose} />}
    </div>
  </div>
);