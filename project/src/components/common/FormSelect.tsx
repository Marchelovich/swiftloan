import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  required?: boolean;
}

export const FormSelect: React.FC<FormSelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  required
}) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-gray-400">
        {label}{required && '*'}
      </label>
    )}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700
        focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none
        transition-colors appearance-none"
    >
      {placeholder && (
        <option value="">{placeholder}</option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);