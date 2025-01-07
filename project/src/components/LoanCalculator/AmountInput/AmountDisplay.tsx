import React from 'react';
import { formatCurrency } from '../../../utils/formatters';

interface AmountDisplayProps {
  amount: number;
}

export const AmountDisplay: React.FC<AmountDisplayProps> = ({ amount }) => (
  <label className="flex justify-between text-gray-400 mb-2">
    <span>Loan Amount</span>
    <span className="text-green-400 font-semibold">{formatCurrency(amount)}</span>
  </label>
);