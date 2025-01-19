interface ResidentialInfoProps {
  data: {
    address: string;
    aptSuite?: string;
    city: string;
    country: string;
    postalCode: string;
    proofOfResidence?: File;
  };
  onChange: (field: string, value: any) => void;
}

export const ResidentialInfo: React.FC<ResidentialInfoProps> = ({ data, onChange }) => (
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
        <input
          type="text"
          placeholder="Enter Your country*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.country || ''}
          onChange={(e) => onChange('country', e.target.value)}
          required
        />
      </div>
      <input
        type="text"
        placeholder="Postal Code*"
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        value={data.postalCode || ''}
        onChange={(e) => onChange('postalCode', e.target.value)}
        required
      />
    </form>
  </div>
);
