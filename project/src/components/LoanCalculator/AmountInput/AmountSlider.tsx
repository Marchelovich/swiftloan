import React from 'react';
import { formatCurrency } from '../../../utils/formatters';

interface AmountSliderProps {
  amount: number;
  onChange: (value: number) => void;
  onAnimationStart: () => void;
}

export const AmountSlider: React.FC<AmountSliderProps> = ({
  amount,
  onChange,
  onAnimationStart
}) => {
  const marks = [500, 5000, 10000, 15000, 18000];

  return (
    <div className="relative">
      <input
        type="range"
        min="500"
        max="18000"
        step="50"
        value={amount}
        onChange={(e) => {
          onChange(Number(e.target.value));
          onAnimationStart();
        }}
        className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-8
          [&::-webkit-slider-thumb]:h-8
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-gradient-to-r
          [&::-webkit-slider-thumb]:from-blue-500
          [&::-webkit-slider-thumb]:to-purple-500
          [&::-webkit-slider-thumb]:cursor-pointer
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-webkit-slider-thumb]:shadow-lg"
      />
      <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-500">
        {marks.map((mark) => (
          <span key={mark} className="relative">
            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-gray-600"></span>
            {formatCurrency(mark)}
          </span>
        ))}
      </div>
    </div>
  );
};