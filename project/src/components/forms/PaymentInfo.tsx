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
