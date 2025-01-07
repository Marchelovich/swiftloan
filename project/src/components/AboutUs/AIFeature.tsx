import React from 'react';

interface AIFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export const AIFeature: React.FC<AIFeatureProps> = ({
  icon,
  title,
  description,
  gradient
}) => (
  <div className="p-6 bg-gray-900/50 backdrop-blur-lg rounded-xl border border-gray-800 hover:border-gray-700 transition-all hover:scale-105">
    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);