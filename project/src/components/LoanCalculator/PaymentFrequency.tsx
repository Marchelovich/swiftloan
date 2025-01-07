import React from 'react';

interface PaymentFrequencyProps {
  frequency: string;
  onChange: (frequency: string) => void;
}

export const PaymentFrequency: React.FC<PaymentFrequencyProps> = ({ frequency, onChange }) => (
  <div>
    <label className="block text-gray-400 mb-2">Payment Frequency</label>
    <div className="grid grid-cols-3 gap-2">
      {['weekly', 'biweekly', 'monthly'].map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
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
);