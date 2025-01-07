import React from 'react';

interface FormTextAreaProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  rows?: number;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  placeholder,
  value,
  onChange,
  required,
  rows = 4
}) => (
  <textarea
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
    rows={rows}
    className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700
      focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none
      transition-colors resize-none"
  />
);