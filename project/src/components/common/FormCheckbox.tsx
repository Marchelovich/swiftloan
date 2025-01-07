import React from 'react';

interface FormCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
  required?: boolean;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  checked,
  onChange,
  children,
  required
}) => (
  <label className="flex items-center space-x-2 cursor-pointer">
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      required={required}
      className="w-5 h-5 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-500"
    />
    <span className="text-gray-400">{children}</span>
  </label>
);