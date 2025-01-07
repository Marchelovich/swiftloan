import React from 'react';
import { FormInput } from '../../common/FormInput';
import { FormSelect } from '../../common/FormSelect';
import { ResidentialInfoData } from '../types';
import { provinceOptions } from '../../../data/formOptions';

interface ResidentialInfoProps {
  data: ResidentialInfoData;
  onUpdate: (data: Partial<ResidentialInfoData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export const ResidentialInfo: React.FC<ResidentialInfoProps> = ({ 
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
      <FormInput
        type="text"
        placeholder="Street Address"
        value={data.address}
        onChange={(value) => onUpdate({ address: value })}
        required
      />
      <FormInput
        type="text"
        placeholder="Apt/Suite (optional)"
        value={data.apt}
        onChange={(value) => onUpdate({ apt: value })}
      />
      <div className="grid grid-cols-3 gap-4">
        <FormInput
          type="text"
          placeholder="City"
          value={data.city}
          onChange={(value) => onUpdate({ city: value })}
          required
        />
        <FormSelect
          options={provinceOptions}
          value={data.province}
          onChange={(value) => onUpdate({ province: value })}
          placeholder="Province"
          required
        />
        <FormInput
          type="text"
          placeholder="Postal Code"
          value={data.postalCode}
          onChange={(value) => onUpdate({ postalCode: value })}
          required
        />
      </div>
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