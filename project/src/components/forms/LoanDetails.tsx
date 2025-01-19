import { LoanCalculator } from '../LoanCalculator';

interface LoanDetailsProps {
  data: any; // Define the structure of data as needed
  onChange: (field: string, value: any) => void;
}

export const LoanDetails: React.FC<LoanDetailsProps> = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Loan Details</h3>
    <LoanCalculator
      data={data || {}}
      onChange={onChange}
      isShowMoneyButton={false} 
    />
  </div>
);
