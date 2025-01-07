import React from 'react';
import { ChevronDown } from 'lucide-react';

export const ScrollPrompt = () => (
  <div className="flex flex-col items-center justify-center py-8">
    <div className="animate-bounce mb-2">
      <ChevronDown className="w-6 h-6 text-gray-400" />
    </div>
    <span className="text-gray-400 text-sm">
      Scroll to know more
    </span>
  </div>
);