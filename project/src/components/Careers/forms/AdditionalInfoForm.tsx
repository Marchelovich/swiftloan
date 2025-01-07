import React from 'react';
import { FormInput } from '../../common/FormInput';
import { FormTextArea } from '../../common/FormTextArea';
import { ApplicationFormData } from '../../../types/careers';

interface AdditionalInfoFormProps {
  data: ApplicationFormData;
  onChange: (field: keyof ApplicationFormData, value: string) => void;
}

export const AdditionalInfoForm: React.FC<AdditionalInfoFormProps> = ({ data, onChange }) => (
  <div className="space-y-4">
    <FormInput
      type="url"
      placeholder="Portfolio/GitHub URL"
      value={data.portfolio}
      onChange={(value) => onChange('portfolio', value)}
    />
    <FormTextArea
      placeholder="Cover Letter*"
      value={data.coverLetter}
      onChange={(value) => onChange('coverLetter', value)}
      required
      rows={4}
    />
    <div className="space-y-2">
      <label className="block text-gray-400">Resume/CV*</label>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        required
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
      />
    </div>
  </div>
);