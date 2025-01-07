import React from 'react';
import { Calendar } from 'lucide-react';

interface LoanTermProps {
  term: number;
  onChange: (term: number) => void;
}

export const LoanTerm: React.FC<LoanTermProps> = ({ term, onChange }) => (
  <div className="relative">
    <label className="flex justify-between text-gray-400 mb-2">
      <span>Term (Days)</span>
      <span className="text-purple-400 font-semibold">{term} days</span>
    </label>
    <div className="relative group">
      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-500 group-hover:text-purple-400 transition-colors" />
      <input
        type="range"
        min="10"
        max="360"
        value={term}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-6
          [&::-webkit-slider-thumb]:h-6
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-gradient-to-r
          [&::-webkit-slider-thumb]:from-purple-500
          [&::-webkit-slider-thumb]:to-pink-500
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:hover:scale-110"
      />
      <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-500">
        <span>10 days</span>
        <span>360 days</span>
      </div>
    </div>
  </div>
);