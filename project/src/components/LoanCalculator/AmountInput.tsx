import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

interface AmountInputProps {
  amount: number;
  onChange: (value: number) => void;
  onAnimationStart: () => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  onChange,
  onAnimationStart
}) => {
  const [inputValue, setInputValue] = useState(amount.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(rawValue);
    
    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue)) {
      // Clamp value between 500 and 18000
      const clampedValue = Math.min(Math.max(numValue, 500), 18000);
      // Round to nearest 100
      const roundedValue = Math.round(clampedValue / 100) * 100;
      onChange(roundedValue);
      onAnimationStart();
    }
  };

  const handleBlur = () => {
    setInputValue(amount.toString());
  };

  const marks = [500, 5000, 10000, 15000, 18000];

  return (
    <div className="relative">
      <label className="flex justify-between text-gray-400 mb-2">
        <span>Loan Amount</span>
        <span className="text-green-400 font-semibold">{formatCurrency(amount)}</span>
      </label>
      <div className="relative group mb-6">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          placeholder="Enter amount (500 - 18,000)"
          className="w-full bg-gray-800 text-white rounded-lg py-3 pl-10 pr-3 border border-gray-700
            focus:border-blue-500 outline-none transition-colors"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
          Step: $100
        </div>
      </div>
      <div className="relative">
        <input
          type="range"
          min="500"
          max="18000"
          step="100"
          value={amount}
          onChange={(e) => {
            const value = Number(e.target.value);
            onChange(value);
            setInputValue(value.toString());
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
    </div>
  );
};