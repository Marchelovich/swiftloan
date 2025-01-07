import React from 'react';
import { Clock, Lock, DollarSign, Calendar, CheckCircle, CreditCard } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-blue-500" />,
      title: "Lowest Interest Rates",
      description: "Only 2.3% monthly interest rate - the best offer on the market"
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-500" />,
      title: "1-Minute Application",
      description: "Quick and easy application process with minimal documentation"
    },
    {
      icon: <Lock className="w-8 h-8 text-pink-500" />,
      title: "100% Confidential",
      description: "Your data is secure and never shared with third parties"
    },
    {
      icon: <Calendar className="w-8 h-8 text-green-500" />,
      title: "Payment Holidays",
      description: "Up to 2 months payment break if you need it"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: "No Credit Checks",
      description: "Everyone approved, even without proof of income"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-500" />,
      title: "Instant Deposits",
      description: "Get funds directly to your account via E-Transfer, SWIFT, or SEPA"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-gray-700 transition-colors"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};