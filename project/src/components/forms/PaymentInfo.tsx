export const PaymentInfo = ({ data, onChange }) => (
  <div className="space-y-4">
    <h3 className="text-xl text-white mb-4">Payment Information</h3>
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <p className="text-gray-400 mb-2">
        To verify your account and prepare for the deposit, we need to process a $1 verification charge. This amount will be refunded.
      </p>
      <p className="text-gray-400">Supported payment methods:</p>
      <ul className="list-disc list-inside text-gray-400 ml-4">
        <li>E-Transfer</li>
        <li>SWIFT</li>
        <li>SEPA</li>
        <li>Direct Deposit (ACH)</li>
        <li>Wire Transfer</li>
        <li>Interac</li>
      </ul>
    </div>
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Card Number*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.cardNumber || ''}
          onChange={(e) => onChange('cardNumber', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name on Card*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.cardName || ''}
          onChange={(e) => onChange('cardName', e.target.value)}
          required
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="MM*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.expiryMonth || ''}
          onChange={(e) => onChange('expiryMonth', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="YY*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.expiryYear || ''}
          onChange={(e) => onChange('expiryYear', e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="CVV*"
          className="w-full bg-gray-800 text-white rounded-lg p-3 border border-gray-700"
          value={data.cvv || ''}
          onChange={(e) => onChange('cvv', e.target.value)}
          required
        />
      </div>
      <div className="space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={data.termsAccepted || false}
            onChange={(e) => onChange('termsAccepted', e.target.checked)}
            required
          />
          <span className="text-gray-400">I agree to the Terms & Conditions, Privacy Policy, and Cookie Policy</span>
        </label>
      </div>
    </form>
  </div>
);
