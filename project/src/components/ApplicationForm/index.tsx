import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useApplicationForm } from './hooks/useApplicationForm';
import { StepIndicator } from './components/StepIndicator';
import { LoanDetails } from './steps/LoanDetails';
import { PersonalInfo } from './steps/PersonalInfo';
import { ResidentialInfo } from './steps/ResidentialInfo';
import { RevenueInfo } from './steps/RevenueInfo';
import { PaymentInfo } from './steps/PaymentInfo';

interface ApplicationFormProps {
  onClose: () => void;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const { step, formData, updateFormData, nextStep, prevStep } = useApplicationForm();
  
  const steps = {
    1: <LoanDetails 
         data={formData.loanDetails} 
         onUpdate={(data) => updateFormData('loanDetails', data)} 
         onNext={nextStep} 
         onClose={onClose}
       />,
    2: <PersonalInfo 
         data={formData.personalInfo} 
         onUpdate={(data) => updateFormData('personalInfo', data)} 
         onNext={nextStep} 
       />,
    3: <ResidentialInfo 
         data={formData.residentialInfo} 
         onUpdate={(data) => updateFormData('residentialInfo', data)} 
         onNext={nextStep} 
         onBack={prevStep} 
       />,
    4: <RevenueInfo 
         data={formData.revenueInfo} 
         onUpdate={(data) => updateFormData('revenueInfo', data)} 
         onNext={nextStep} 
         onBack={prevStep} 
       />,
    5: <PaymentInfo 
         data={formData.paymentInfo} 
         onUpdate={(data) => updateFormData('paymentInfo', data)} 
         onSubmit={onClose} 
         onBack={prevStep} 
       />
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Loan Application</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <StepIndicator currentStep={step} totalSteps={5} />
        {steps[step]}
      </div>
    </div>
  );
};