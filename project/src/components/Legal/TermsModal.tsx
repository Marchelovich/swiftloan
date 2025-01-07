import React from 'react';
import { CloseButton } from '../common/CloseButton';
import { TermsContent } from './TermsContent';

interface TermsModalProps {
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div className="w-full max-w-4xl bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Terms of Use</h2>
        <CloseButton onClose={onClose} />
      </div>
      <TermsContent />
    </div>
  </div>
);