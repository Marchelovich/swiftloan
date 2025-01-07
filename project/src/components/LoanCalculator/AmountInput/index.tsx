import React from 'react';
import { AmountDisplay } from './AmountDisplay';
import { AmountSlider } from './AmountSlider';
import { AmountTextInput } from './AmountTextInput';

interface AmountInputProps {
  amount: number;
  onChange: (value: number) => void;
  onAnimationStart: () => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({
  amount,
  onChange,
  onAnimationStart
}) => (
  <div className="space-y-4">
    <AmountDisplay amount={amount} />
    <AmountSlider 
      amount={amount}
      onChange={onChange}
      onAnimationStart={onAnimationStart}
    />
    <AmountTextInput 
      value={amount}
      onChange={onChange}
      onAnimationStart={onAnimationStart}
    />
  </div>
);