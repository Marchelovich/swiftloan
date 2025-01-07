import React from 'react';
import { FormInput } from '../../common/FormInput';
import { PersonalInfoData } from '../types';

interface PersonalInfoProps {
  data: PersonalInfoData;
  onUpdate: (data: Partial<PersonalInfoData>) => void;
  onNext: () => void;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ data, onUpdate, onNext }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          type="text"
          placeholder="First Name"
          value={data.firstName}
          onChange={(value) => onUpdate({ firstName: value })}
          required
        />
        <FormInput
          type="text"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(value) => onUpdate({ lastName: value })}
          required
        />
      </div>
      <FormInput
        type="email"
        placeholder="Email Address"
        value={data.email}
        onChange={(value) => onUpdate({ email: value })}
        required
      />
      <FormInput
        type="tel"
        placeholder="Phone Number"
        value={data.phone}
        onChange={(value) => onUpdate({ phone: value })}
        required
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg"
      >
        Next
      </button>
    </form>
  );
};