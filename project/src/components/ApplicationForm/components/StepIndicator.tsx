import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => (
  <div className="flex justify-between mb-8">
    {Array.from({ length: totalSteps }).map((_, index) => (
      <div
        key={index}
        className={`w-full h-1 rounded ${
          index < currentStep 
            ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
            : 'bg-gray-700'
        } ${index !== totalSteps - 1 ? 'mr-1' : ''}`}
      />
    ))}
  </div>
);