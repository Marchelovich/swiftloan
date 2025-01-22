import { useState,useEffect } from 'react';
import { CheckCircle2, Copy, Share2 } from 'lucide-react';

export function ConfirmationStep() {
  const [referralLink, setReferralLink] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const referralLink = "https://www.swiftloan.space/";
setReferralLink(referralLink);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-lg border border-gray-800 hover:border-gray-700 text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-4">Application Successfully Completed!</h2>
      
      <p className="text-gray-400 mb-6">
        Your application has been received and is now being processed. Funds will be deposited after all verifications are completed, which typically takes 2-3 business days.
      </p>
      
      <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
        <p className="text-gray-300">
          A confirmation email has been sent to your provided email address with your application details and next steps.
        </p>
      </div>

      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Share2 className="text-blue-400 w-5 h-5" />
          <h3 className="text-white font-medium">Earn $150 for Each Referral!</h3>
        </div>
        <p className="text-gray-400 text-sm mb-4">
          Share your unique referral link with friends. When they complete their registration and get approved, you'll receive an additional $150 bonus!
        </p>
        <div className="flex items-center gap-2 bg-black/30 rounded-lg p-3 mb-2">
          <input
            type="text"
            value={referralLink}
            readOnly
            className="flex-1 bg-transparent text-gray-400 text-sm outline-none"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 rounded-md transition-colors"
          >
            <Copy className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>
      
      <div className="text-left bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
        <h3 className="text-white font-medium mb-2">What happens next?</h3>
        <ul className="text-gray-400 space-y-2">
          <li>• Our team will review your application within 24 hours</li>
          <li>• We'll verify your provided documents and information</li>
          <li>• Once approved, funds will be deposited to your account</li>
          <li>• You'll receive status updates via email</li>
        </ul>
      </div>
    </div>
  );
}
