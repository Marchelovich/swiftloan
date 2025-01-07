import React from 'react';
import { Brain } from 'lucide-react';

export const IntelligentLending = () => (
  <div className="mb-16 bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
    <div className="flex items-center mb-6">
      <Brain className="w-10 h-10 text-blue-500 mr-4" />
      <h3 className="text-2xl font-bold">Intelligent Lender Matching</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">
      Imagine a system so intuitive, so responsive, that it understands your financial needs better 
      than you do. Our proprietary AI platform begins its process with a deep analysis of hundreds 
      of lenders in the market. But it doesn't stop there. Using sophisticated algorithms, it predicts 
      which lenders are not just viable, but optimal for your unique financial situation. This isn't 
      just about comparing rates; it's about understanding lender trends, reliability, and their 
      propensity to meet your specific borrowing criteria.
    </p>
  </div>
);