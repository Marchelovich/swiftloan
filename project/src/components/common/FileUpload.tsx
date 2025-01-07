import React from 'react';
import { Upload } from 'lucide-react';

interface FileUploadProps {
  label: string;
  accept: string;
  onChange: (file: File) => void;
  helperText?: string;
  required?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  onChange,
  helperText,
  required
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-gray-400">
        {label}{required && '*'}
      </label>
      <div className="relative">
        <input
          type="file"
          accept={accept}
          onChange={handleChange}
          required={required}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700
            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
            file:text-sm file:font-semibold file:bg-purple-600 file:text-white
            hover:file:bg-purple-500 file:cursor-pointer
            focus:outline-none focus:border-purple-500"
        />
        <Upload className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      {helperText && (
        <p className="text-sm text-gray-400">{helperText}</p>
      )}
    </div>
  );
};