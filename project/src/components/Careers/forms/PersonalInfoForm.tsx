import React from 'react';
import { FormInput } from '../../common/FormInput';
import { FormTextArea } from '../../common/FormTextArea';
import { ApplicationFormData } from '../../../types/careers';

interface PersonalInfoFormProps {
  data: ApplicationFormData;
  onChange: (field: keyof ApplicationFormData, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ data, onChange }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormInput
        type="text"
        placeholder="Full Name*"
        value={data.name}
        onChange={(value) => onChange('name', value)}
        required
      />
      <FormInput
        type="email"
        placeholder="Email Address*"
        value={data.email}
        onChange={(value) => onChange('email', value)}
        required
      />
    </div>
    <FormInput
      type="tel"
      placeholder="Phone Number*"
      value={data.phone}
      onChange={(value) => onChange('phone', value)}
      required
    />
    <FormTextArea
      placeholder="Professional Experience*"
      value={data.experience}
      onChange={(value) => onChange('experience', value)}
      required
      rows={4}
    />
  </div>
);