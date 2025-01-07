import React from 'react';
import { DollarSign } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="relative">
      <DollarSign className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text" />
      <div className="absolute inset-0 animate-ping opacity-75 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    </div>
    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      SwiftLoan
    </span>
  </div>
);