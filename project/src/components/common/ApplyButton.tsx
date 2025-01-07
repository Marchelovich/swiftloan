import React from 'react';

interface ApplyButtonProps {
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

export const ApplyButton: React.FC<ApplyButtonProps> = ({ 
  onClick, 
  fullWidth,
  className = '' 
}) => (
  <button 
    onClick={() => {
      window.openLoanApplication?.();
      onClick?.();
    }}
    className={`
      ${fullWidth ? 'w-full px-6 py-3 rounded-lg' : 'px-8 py-4 rounded-full'} 
      bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
      text-white font-semibold text-lg
      hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl
      ${className}
    `}
  >
    Apply Now
  </button>
);