import React, { useEffect, useState } from 'react';
import { AIFeature } from '../AboutUs/AIFeature';
import { Brain, LineChart, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Intelligent Matching",
    description: "Our AI analyzes hundreds of lenders to find your perfect match, considering your unique financial situation and needs.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Dynamic Rate Optimization",
    description: "Continuous market monitoring and real-time adjustments ensure you always get the lowest possible rates.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Risk Management",
    description: "Advanced algorithms assess and mitigate risks, protecting your financial interests at every step.",
    gradient: "from-pink-500 to-orange-500"
  }
];

export const MobileFeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {features.map((feature, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <AIFeature {...feature} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {features.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-500' : 'bg-gray-600'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};