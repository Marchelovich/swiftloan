import { LoanCalculator } from '../LoanCalculator';
import { useEffect } from 'react';
export const LoanDetails = ({ data, onChange }) => {
  useEffect(() => {
    console.log('Parent component data:', data);
  }, [data]);
  
  return(
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Loan Details</h3>
    <LoanCalculator
      data={data || {}}
      onChange={onChange}
      isShowMoneyButton={false} 
    />
  </div>
)};
