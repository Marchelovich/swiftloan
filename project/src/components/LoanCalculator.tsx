import { useState, useEffect } from 'react';
import { Calculator, Calendar, DollarSign, Sparkles } from 'lucide-react';

// export const LoanCalculator = ({ data, onChange, isShowMoneyButton = true }) => {


  export const LoanCalculator = ({
    data = { loanAmount: 5000, termDays: 30, paymentFrequency: 'monthly' },
    onChange,
    isShowMoneyButton = true,
  }) => {
    const MONTHLY_RATE = 0.023; // 2.3% monthly interest rate
    const [isAnimating, setIsAnimating] = useState(false);
    const amount = data.loanAmount;
    const term =  data.termDays;
    const frequency =  data.paymentFrequency || 'monthly';
console.log(data.loanAmount);
    const calculatePayment = () => {
      const payment = (amount * (1 + MONTHLY_RATE * (term / 30))) / term;
      return payment.toFixed(2);
    };
  
    const totalRepayment = () => {
      return (parseFloat(calculatePayment()) * term).toFixed(2);
    };
  
    const handleAmountChange = (value) => {
      onChange('loanAmount', value);
    };
  return (
    <div className="w-full max-w-2xl mx-auto p-4 md:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-800 shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Smart Loan Calculator</h2>
        <div className="flex items-center space-x-2">
          <span className="hidden md:inline text-green-400 font-semibold">2.3% Monthly</span>
          <Sparkles className={`w-6 h-6 text-yellow-400 ${isAnimating ? 'animate-spin' : ''}`} />
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative">
          <label className="flex justify-between text-gray-400 mb-2">
            <span>Loan Amount</span>
            <input
              type="number"
              min="100"
              max="18000"
              style={{ width: "40px" }}
              value={amount}
              onChange={(e) => {
                const newAmount = Math.min(Math.max(Number(e.target.value), 100), 18000);
                handleAmountChange(newAmount);
              }}
              className="text-green-400 font-semibold bg-transparent border-b border-green-400 focus:outline-none w-24 text-right appearance-none"
            />
          </label>
          <div className="relative group">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 group-hover:text-blue-400 transition-colors" />
            <input
              type="range"
              min="100"
              max="18000"
              value={amount}
              onChange={(e) => handleAmountChange(Number(e.target.value))}
              className="w-full h-3 bg-gray-700 rounded-lg appearance-none cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-gradient-to-r
                [&::-webkit-slider-thumb]:from-blue-500
                [&::-webkit-slider-thumb]:to-purple-500
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:hover:scale-110"
            />
            <div className="absolute -bottom-6 left-0 w-full flex justify-between text-xs text-gray-500">
              <span>$100</span>
              <span>$18,000</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-gray-400 mb-2">Payment Frequency</label>
          <div className="grid grid-cols-3 gap-2">
            {['weekly', 'biweekly', 'monthly'].map((f) => (
              <button
                key={f}
                onClick={() => onChange('paymentFrequency', f)}
                className={`py-2 px-4 rounded-lg text-sm font-medium transition-all
                  ${frequency === f 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>

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
              onChange={(e) => onChange('termDays', Number(e.target.value))}
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

        {isShowMoneyButton && (
          <button
            onClick={() => window.openLoanApplication()}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold 
              hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl
              animate-gradient bg-[length:200%_200%]"
          >
            Get Your Money Now
          </button>
        )}
      </div>
    </div>
  );
};
