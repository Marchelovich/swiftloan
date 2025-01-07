import React from 'react';
import { CheckCircle } from 'lucide-react';

interface JobRequirementsProps {
  requirements: string[];
  responsibilities: string[];
}

export const JobRequirements: React.FC<JobRequirementsProps> = ({ 
  requirements, 
  responsibilities 
}) => (
  <div className="space-y-6 mb-8">
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-400">{req}</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-white mb-3">Responsibilities</h4>
      <ul className="space-y-2">
        {responsibilities.map((resp, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-400">{resp}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);