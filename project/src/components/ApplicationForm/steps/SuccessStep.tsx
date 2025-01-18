import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessStepProps {
  email: string;
  onClose: () => void;
}

export const SuccessStep: React.FC<SuccessStepProps> = ({ email, onClose }) => (
  <div className="text-center space-y-6 py-8 relative">
    <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-gray-400">
      &times;
    </button>

    <div className="flex justify-center">
      <CheckCircle className="w-16 h-16 text-green-500" />
    </div>
    
    <h3 className="text-2xl font-bold text-white">Application Successfully Completed!</h3>
    
    <div className="space-y-4 text-gray-400">
      <p>
        Your loan application has been received and is being processed. After verification is complete,
        your funds will be deposited within 2-3 business days.
      </p>
      <p>
        A confirmation email has been sent to <span className="text-white">{email}</span>
      </p>
      <p>
        You will receive updates about your application status via email.
      </p>
    </div>
  </div>
);
