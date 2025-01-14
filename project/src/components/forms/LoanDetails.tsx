import { LoanCalculator } from '../LoanCalculator';

export const LoanDetails = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Loan Details</h3>
    <LoanCalculator
      data={data || {}}
      onChange={onChange}
      isShowMoneyButton={false} 
    />
  </div>
);