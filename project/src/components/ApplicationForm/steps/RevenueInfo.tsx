import React from 'react';
import { FormSelect } from '../../common/FormSelect';
import { RevenueInfoData } from '../types';
import { 
  employmentOptions, 
  incomeRangeOptions, 
  incomeFrequencyOptions 
} from '../../../data/formOptions';

interface RevenueInfoProps {
  data: RevenueInfoData;
  onUpdate: (data: Partial<RevenueInfoData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const RevenueInfo: React.FC<RevenueInfoProps> = ({ 
  data, 
  onUpdate, 
  onNext,
  onBack 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormSelect
        options={employmentOptions}
        value={data.employmentStatus}
        onChange={(value) => onUpdate({ employmentStatus: value })}
        placeholder="Employment Status"
        required
      />
      <FormSelect
        options={incomeRangeOptions}
        value={data.monthlyIncome}
        onChange={(value) => onUpdate({ monthlyIncome: value })}
        placeholder="Monthly Income"
        required
      />
      <FormSelect
        options={incomeFrequencyOptions}
        value={data.incomeFrequency}
        onChange={(value) => onUpdate({ incomeFrequency: value })}
        placeholder="Income Frequency"
        required
      />
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-lg border border-gray-700 text-white"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg"
        >
          Next
        </button>
      </div>
    </form>
  );
};