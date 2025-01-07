export const PersonalInfo = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Personal Information</h3>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name*"
          value={data.firstName || ''}
          onChange={(e) => onChange('firstName', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          required
        />
        <input
          type="text"
          placeholder="Last Name*"
          value={data.lastName || ''}
          onChange={(e) => onChange('lastName', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          required
        />
      </div>
      <input
        type="email"
        placeholder="Email*"
        value={data.email || ''}
        onChange={(e) => onChange('email', e.target.value)}
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        required
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <select
          value={data.birthYear || ''}
          onChange={(e) => onChange('birthYear', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          <option value="">Birth Year*</option>
          {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i - 18).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={data.birthMonth || ''}
          onChange={(e) => onChange('birthMonth', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          <option value="">Birth Month*</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={data.birthDay || ''}
          onChange={(e) => onChange('birthDay', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        >
          <option value="">Birth Day*</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="tel"
          placeholder="Home Phone"
          value={data.homePhone || ''}
          onChange={(e) => onChange('homePhone', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
        />
        <input
          type="tel"
          placeholder="Cell Phone*"
          value={data.cellPhone || ''}
          onChange={(e) => onChange('cellPhone', e.target.value)}
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          required
        />
      </div>
      <select
        value={data.gender || ''}
        onChange={(e) => onChange('gender', e.target.value)}
        className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="non-binary">Non-binary</option>
        <option value="transgender">Transgender</option>
        <option value="genderqueer">Genderqueer</option>
        <option value="two-spirit">Two-Spirit</option>
        <option value="other">Other</option>
        <option value="prefer-not">Prefer not to say</option>
      </select>
    </form>
  </div>
);
