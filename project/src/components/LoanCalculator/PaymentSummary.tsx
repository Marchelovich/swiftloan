import React from 'react';
import { formatCurrency } from '../../utils/formatters';

interface PaymentSummaryProps {
  amount: number;
  term: number;
  frequency: string;
}

export const PaymentSummary: React.FC<PaymentSummaryProps> = ({ amount, term, frequency }) => {
  const MONTHLY_RATE = 0.023; // 2.3% monthly interest rate

  const calculatePayment = () => {
    const payment = (amount * (1 + MONTHLY_RATE * (term / 30))) / term;
    return payment.toFixed(2);
  };

  const totalRepayment = () => {
    return (parseFloat(calculatePayment()) * term).toFixed(2);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-xl">
      <div>
        <div className="text-gray-400">Payment Amount:</div>
        <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          ${calculatePayment()}
          <span className="text-lg text-gray-400">/{frequency}</span>
        </div>
      </div>
      <div>
        <div className="text-gray-400">Total Repayment:</div>
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          ${totalRepayment()}
        </div>
      </div>
    </div>
  );
};