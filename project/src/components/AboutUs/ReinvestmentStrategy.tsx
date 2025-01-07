import React from 'react';
import { LineChart } from 'lucide-react';

export const ReinvestmentStrategy = () => (
  <div className="mb-16 bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
    <div className="flex items-center mb-6">
      <LineChart className="w-10 h-10 text-purple-500 mr-4" />
      <h3 className="text-2xl font-bold">Reinvestment Genius</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">
      Once our AI finds the best lenders, it doesn't just secure a loan for you; it continuously 
      monitors the market to reinvest funds in a way that always benefits you as a borrower. This 
      dynamic reinvestment strategy ensures that the interest rates you get are not just competitive 
      but the lowest on the market at any given time.
    </p>
  </div>
);