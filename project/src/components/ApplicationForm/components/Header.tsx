import React from 'react';
import { CloseButton } from '../../common/CloseButton';

interface HeaderProps {
  onClose: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onClose }) => (
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-white">Loan Application</h2>
    <CloseButton onClose={onClose} />
  </div>
);