import React from 'react';
import { ApplicationData } from '../../../types/application';
import { formatCurrency } from '../../../utils/formatters';

interface ConfirmationStepProps {
  data: ApplicationData;
  onUpdate: (data: Partial<ApplicationData>) => void;
}

export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ data }) => (
  <div className="space-y-6">
    <h3 className="text-xl text-white">Confirm Your Application</h3>

    <div className="bg-gray-800 p-6 rounded-lg space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-gray-400">Loan Amount:</div>
          <div className="text-xl font-semibold text-white">{formatCurrency(data.amount)}</div>
        </div>
        <div>
          <div className="text-gray-400">Term:</div>
          <div className="text-xl font-semibold text-white">{data.term} days</div>
        </div>
        <div>
          <div className="text-gray-400">Payment Frequency:</div>
          <div className="text-xl font-semibold text-white capitalize">{data.frequency}</div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4">
        <div className="text-gray-400 mb-2">Verification Payment:</div>
        <div className="text-xl font-semibold text-green-500">$1.00</div>
        <div className="text-sm text-gray-400">This amount will be refunded after verification</div>
      </div>
    </div>

    <div className="bg-blue-900/30 border border-blue-800 p-4 rounded-lg">
      <p className="text-blue-300">
        By proceeding, you confirm that all provided information is accurate and you agree to our terms and conditions.
      </p>
    </div>
  </div>
);