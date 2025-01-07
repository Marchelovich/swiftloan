import React, { useState } from 'react';
import { Header } from './Header';
import { AmountInput } from './AmountInput';
import { PaymentFrequency } from './PaymentFrequency';
import { LoanTerm } from './LoanTerm';
import { PaymentSummary } from './PaymentSummary';

interface LoanCalculatorProps {
  initialAmount?: number;
  initialTerm?: number;
  initialFrequency?: string;
  onChange?: (data: { amount: number; term: number; frequency: string }) => void;
  onNext?: () => void;
  onClose?: () => void;
  isApplicationStep?: boolean;
}

export const LoanCalculator: React.FC<LoanCalculatorProps> = ({ 
  initialAmount = 5000,
  initialTerm = 30,
  initialFrequency = 'monthly',
  onChange,
  onNext,
  onClose,
  isApplicationStep = false
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [term, setTerm] = useState(initialTerm);
  const [frequency, setFrequency] = useState(initialFrequency);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAmountChange = (value: number) => {
    setAmount(value);
    setIsAnimating(true);
    onChange?.({ amount: value, term, frequency });
  };

  const handleTermChange = (value: number) => {
    setTerm(value);
    onChange?.({ amount, term: value, frequency });
  };

  const handleFrequencyChange = (value: string) => {
    setFrequency(value);
    onChange?.({ amount, term, frequency: value });
  };

  const handleSubmit = () => {
    if (isApplicationStep && onNext) {
      onNext();
    } else {
      window.openLoanApplication();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-xl">
      <Header 
        isAnimating={isAnimating} 
        onClose={isApplicationStep ? onClose : undefined}
      />
      
      <div className="space-y-8">
        <AmountInput 
          amount={amount}
          onChange={handleAmountChange}
          onAnimationStart={() => setIsAnimating(true)}
        />
        
        <PaymentFrequency 
          frequency={frequency}
          onChange={handleFrequencyChange}
        />
        
        <LoanTerm 
          term={term}
          onChange={handleTermChange}
        />

        <PaymentSummary 
          amount={amount}
          term={term}
          frequency={frequency}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            text-white font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl
            animate-gradient bg-[length:200%_200%]"
        >
          {isApplicationStep ? 'Next' : 'Get Your Money Now'}
        </button>
      </div>
    </div>
  );
};