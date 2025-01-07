import React from 'react';
import { LoanCalculator } from '../../LoanCalculator';
import { LoanDetailsData } from '../types';

interface LoanDetailsProps {
  data: LoanDetailsData;
  onUpdate: (data: Partial<LoanDetailsData>) => void;
  onNext: () => void;
  onClose: () => void;
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({ 
  data, 
  onUpdate, 
  onNext,
  onClose 
}) => (
  <LoanCalculator
    initialAmount={data.amount}
    initialTerm={data.term}
    initialFrequency={data.frequency}
    onChange={(newData) => onUpdate(newData)}
    onNext={onNext}
    onClose={onClose}
    isApplicationStep       
  />
);