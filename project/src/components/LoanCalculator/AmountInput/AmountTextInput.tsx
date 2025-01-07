import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';

interface AmountTextInputProps {
  value: number;
  onChange: (value: number) => void;
  onAnimationStart: () => void;
}

export const AmountTextInput: React.FC<AmountTextInputProps> = ({
  value,
  onChange,
  onAnimationStart
}) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setInputValue(rawValue);
    
    const numValue = parseInt(rawValue, 10);
    if (!isNaN(numValue)) {
      const roundedValue = Math.round(numValue / 50) * 50;
      if (roundedValue >= 500 && roundedValue <= 18000) {
        onChange(roundedValue);
        onAnimationStart();
      }
    }
  };

  const handleBlur = () => {
    setInputValue(value.toString());
  };

  return (
    <div className="relative mt-8">
      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter amount"
        className="w-full bg-gray-800 text-white rounded-lg py-3 pl-10 pr-3 border border-gray-700
          focus:border-blue-500 outline-none transition-colors"
      />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">
        Step: $50
      </div>
    </div>
  );
};