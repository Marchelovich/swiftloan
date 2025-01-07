import { useState } from 'react';
import { ApplicationData } from '../types/application';

const initialState: ApplicationData = {
  amount: 5000,
  term: 30,
  frequency: 'monthly',
  firstName: '',
  lastName: '',
  email: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  homePhone: '',
  cellPhone: '',
  gender: '',
  identityDocument: null,
  address: '',
  apt: '',
  city: '',
  province: '',
  postalCode: '',
  residenceProof: null,
  employmentStatus: '',
  monthlyIncome: '',
  incomeFrequency: '',
  cardNumber: '',
  cardName: '',
  expiryMonth: '',
  expiryYear: '',
  cvv: '',
  acceptedTerms: false
};

export const useApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ApplicationData>(initialState);

  const updateData = (updates: Partial<ApplicationData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const nextStep = () => setStep(s => Math.min(6, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  return {
    step,
    data,
    updateData,
    nextStep,
    prevStep
  };
};