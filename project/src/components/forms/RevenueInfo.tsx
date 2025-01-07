export const RevenueInfo = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Revenue Information</h3>
    <form className="space-y-4">
      <select
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.employmentStatus || ''}
        onChange={(e) => onChange('employmentStatus', e.target.value)}
        required
      >
        <option value="">Employment Status*</option>
        <option value="full-time">Full-time employed</option>
        <option value="part-time">Part-time employed</option>
        <option value="self-employed">Self-employed</option>
        <option value="unemployed">Unemployed</option>
        <option value="retired">Retired</option>
        <option value="student">Student</option>
      </select>
      <select
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.monthlyIncomeRange || ''}
        onChange={(e) => onChange('monthlyIncomeRange', e.target.value)}
        required
      >
        <option value="">Monthly Income Range*</option>
        <option value="0-1000">$0 - $1,000</option>
        <option value="1001-2000">$1,001 - $2,000</option>
        <option value="2001-3000">$2,001 - $3,000</option>
        <option value="3001-4000">$3,001 - $4,000</option>
        <option value="4001-5000">$4,001 - $5,000</option>
        <option value="5001+">$5,001+</option>
      </select>
      <select
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.incomeFrequency || ''}
        onChange={(e) => onChange('incomeFrequency', e.target.value)}
        required
      >
        <option value="">Income Frequency*</option>
        <option value="weekly">Weekly</option>
        <option value="biweekly">Bi-weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </form>
  </div>
);
