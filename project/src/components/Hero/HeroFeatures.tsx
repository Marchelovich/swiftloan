import React from 'react';
import { Sparkles, Clock, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-5 h-5 mr-2" />,
    text: "2.3% Monthly",
    color: "text-green-400"
  },
  {
    icon: <Clock className="w-5 h-5 mr-2" />,
    text: "Instant Approval",
    color: "text-blue-400"
  },
  {
    icon: <ShieldCheck className="w-5 h-5 mr-2" />,
    text: "No Credit Check",
    color: "text-purple-400"
  }
];

export const HeroFeatures = () => (
  <div className="flex flex-wrap justify-center gap-6 text-lg md:text-xl">
    {features.map((feature, index) => (
      <div key={index} className={`flex items-center ${feature.color}`}>
        {feature.icon}
        <span>{feature.text}</span>
      </div>
    ))}
  </div>
);