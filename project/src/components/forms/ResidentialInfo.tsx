export const ResidentialInfo = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Residential Information</h3>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Address*"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.address || ''}
        onChange={(e) => onChange('address', e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apt/Suite"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.aptSuite || ''}
        onChange={(e) => onChange('aptSuite', e.target.value)}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="City*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.city || ''}
          onChange={(e) => onChange('city', e.target.value)}
          required
        />
        <select
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.province || ''}
          onChange={(e) => onChange('province', e.target.value)}
          required
        >
          <option value="">Province*</option>
          <option value="AB">Alberta</option>
          <option value="BC">British Columbia</option>
          <option value="MB">Manitoba</option>
          <option value="NB">New Brunswick</option>
          <option value="NL">Newfoundland and Labrador</option>
          <option value="NS">Nova Scotia</option>
          <option value="ON">Ontario</option>
          <option value="PE">Prince Edward Island</option>
          <option value="QC">Quebec</option>
          <option value="SK">Saskatchewan</option>
        </select>
        <input
          type="text"
          placeholder="Postal Code*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.postalCode || ''}
          onChange={(e) => onChange('postalCode', e.target.value)}
          required
        />
      </div>
      <div className="space-y-2">
        <label className="block text-gray-400">Proof of Residence</label>
        <input
          type="file"
          accept="image/*,.pdf"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          onChange={(e) => onChange('proofOfResidence', e.target.files[0])}
        />
        <p className="text-sm text-gray-400">
          Upload proof of residence (utility bill, rental agreement, etc.)
        </p>
      </div>
    </form>
  </div>
);
