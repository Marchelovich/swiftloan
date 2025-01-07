import React from 'react';

interface NavigationButtonsProps {
  step: number;
  onBack: () => void;
  onNext: () => void;
  totalSteps: number;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({ 
  step, 
  onBack, 
  onNext,
  totalSteps
}) => (
  <div className="flex justify-between mt-6">
    {step > 1 && (
      <button
        onClick={onBack}
        className="px-6 py-2 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition-colors"
      >
        Back
      </button>
    )}
    <button
      onClick={onNext}
      className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white 
        hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl ml-auto"
    >
      {step === totalSteps - 1 ? 'Submit Application' : 'Next'}
    </button>
  </div>
);