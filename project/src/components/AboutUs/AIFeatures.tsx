import React from 'react';
import { Brain, Shield, LineChart, Zap, Target, Lock } from 'lucide-react';
import { AIFeature } from './AIFeature';

const features = [
  {
    icon: <Brain className="w-8 h-8 text-white" />,
    title: "Smart Analysis",
    description: "Our AI processes thousands of data points to understand your unique financial situation.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Risk Management",
    description: "Advanced algorithms protect your financial interests by identifying and mitigating risks.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <LineChart className="w-8 h-8 text-white" />,
    title: "Market Monitoring",
    description: "Real-time market analysis ensures you always get the most competitive rates.",
    gradient: "from-pink-500 to-red-500"
  },
  {
    icon: <Zap className="w-8 h-8 text-white" />,
    title: "Instant Decisions",
    description: "Get immediate loan decisions powered by our sophisticated AI engine.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: <Target className="w-8 h-8 text-white" />,
    title: "Precision Matching",
    description: "Perfect lender matching based on your profile and requirements.",
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    icon: <Lock className="w-8 h-8 text-white" />,
    title: "Secure Processing",
    description: "Bank-grade security protecting your sensitive financial information.",
    gradient: "from-yellow-500 to-green-500"
  }
];

export const AIFeatures = () => (
  <div className="mb-16">
    <h3 className="text-2xl font-bold text-center mb-8">
      Powered by Advanced AI Technology
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <AIFeature key={index} {...feature} />
      ))}
    </div>
  </div>
);