import React from 'react';
import { FormInput } from '../../common/FormInput';
import { FormCheckbox } from '../../common/FormCheckbox';
import { PaymentInfoData } from '../types';

interface PaymentInfoProps {
  data: PaymentInfoData;
  onUpdate: (data: Partial<PaymentInfoData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export const PaymentInfo: React.FC<PaymentInfoProps> = ({ 
  data, 
  onUpdate, 
  onSubmit,
  onBack 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <FormInput
          type="text"
          placeholder="Card Number"
          value={data.cardNumber}
          onChange={(value) => onUpdate({ cardNumber: value })}
          required
        />
        <FormInput
          type="text"
          placeholder="Name on Card"
          value={data.cardName}
          onChange={(value) => onUpdate({ cardName: value })}
          required
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormInput
          type="text"
          placeholder="MM"
          value={data.expiryMonth}
          onChange={(value) => onUpdate({ expiryMonth: value })}
          required
        />
        <FormInput
          type="text"
          placeholder="YY"
          value={data.expiryYear}
          onChange={(value) => onUpdate({ expiryYear: value })}
          required
        />
        <FormInput
          type="text"
          placeholder="CVV"
          value={data.cvv}
          onChange={(value) => onUpdate({ cvv: value })}
          required
        />
      </div>
      <FormCheckbox
        checked={data.acceptTerms}
        onChange={(checked) => onUpdate({ acceptTerms: checked })}
        required
      >
        I agree to the Terms & Conditions
      </FormCheckbox>
      <FormCheckbox
        checked={data.acceptTerms}
        onChange={(checked) => onUpdate({ acceptTerms: checked })}
        required
      >
        I agree to the Terms & Conditions
      </FormCheckbox>
      <FormCheckbox
        checked={data.receiveUpdates}
        onChange={(checked) => onUpdate({ receiveUpdates: checked })}
      >
        I agree to receive updates, news, and automated emails from SwiftLoan.
      </FormCheckbox>
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
      <div className="flex justify-between gap-4">
        checked={data.acceptTerms}
        onChange={(checked) => onUpdate({ acceptTerms: checked })}
        required
      >
        I agree to the Terms & Conditions
      </FormCheckbox>
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-lg border border-gray-700 text-white"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg"
        >
          Submit Application
        </button>
      </div>
    </form>
  );
};
