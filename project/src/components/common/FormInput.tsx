import React from 'react';

interface FormInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  required
}) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    required={required}
    className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700 
      focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none
      transition-colors"
  />
);