import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { LoanDetails } from './forms/LoanDetails';
import { PersonalInfo } from './forms/PersonalInfo';
import { ResidentialInfo } from './forms/ResidentialInfo';
import { RevenueInfo } from './forms/RevenueInfo';
import { PaymentInfo } from './forms/PaymentInfo';
import { ConfirmationStep } from './forms/ConfirmationStep';
import { loadStripe } from '@stripe/stripe-js';

export const ApplicationForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    loanDetails: { 
      loanAmount:  import.meta.env.VITE_REACT_APP_LOAN_AMOUNT,
      termDays: import.meta.env.VITE_REACT_APP_TERM_DAYS,
      paymentFrequency: import.meta.env.VITE_REACT_APP_PAYMENT_FREUENCY
    },
    personalInfo: {},
    residentialInfo: {},
    revenueInfo: {},
    paymentInfo: {},
  });

  const steps = {
    1: (
      <LoanDetails
        data={formData.loanDetails}
        onChange={(field, value) => handleChange('loanDetails', field, value)}
      />
    ),
    2: (
      <PersonalInfo
        data={formData.personalInfo}
        onChange={(field, value) => handleChange('personalInfo', field, value)}
      />
    ),
    3: (
      <ResidentialInfo
        data={formData.residentialInfo}
        onChange={(field, value) => handleChange('residentialInfo', field, value)}
      />
    ),
    4: (
      <RevenueInfo
        data={formData.revenueInfo}
        onChange={(field, value) => handleChange('revenueInfo', field, value)}
      />
    ),
    
    5: (
      <PaymentInfo
        data={formData.paymentInfo}
        onChange={(field, value) => handleChange('paymentInfo', field, value)}
      />
    ),
     7: <ConfirmationStep />,
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const stepParam = params.get('step');
    // const appIdParam = params.get('applicationId');

    if (stepParam) setStep(Number(stepParam));
    // if (appIdParam) setApplicationId(Number(appIdParam));
  }, [])

  const handleChange = (formName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: {
        ...prev[formName],
        [fieldName]: value,
      },
    }));
  };

  const validateStep = () => {
    const currentData = formData[Object.keys(formData)[step - 1]];
  
    if (step === 1) {
      if (!currentData.loanAmount || !currentData.termDays || !currentData.paymentFrequency) {
        alert('Please fill in all required fields before proceeding.');
        return false;
      }
    }
    if (step === 2) {
      if (!currentData.firstName || !currentData.lastName || !currentData.email || !currentData.birthYear ||
        !currentData.birthMonth || !currentData.birthDay || !currentData.cellPhone || !currentData.gender) {
        alert('Please fill in all required fields before proceeding.');
        return false;
      }
    }
    if (step === 3) {
      if (!currentData.address || !currentData.city || !currentData.province || !currentData.postalCode) {
        alert('Please fill in all required fields before proceeding.');
        return false;
      }
    }
    if (step === 4) {
      if (!currentData.employmentStatus || !currentData.monthlyIncomeRange || !currentData.incomeFrequency) {
        alert('Please fill in all required fields before proceeding.');
        return false;
      }
    }
    if (step === 5) {
      if (!currentData.termsAccepted) {
        alert('Please fill in all required fields before proceeding.');
        return false;
      }
    }
  
    return true;
  };

  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

  const handleSubscribe = async (applicationId: any) => {
    const stripe = await stripePromise;
    if (!stripe) {
      console.error('Stripe initialization failed');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ applicationId }),
      });
      const data = await response.json();

      if (data.url) {
        window.location.href = data.url; // Перенаправление на Stripe Checkout
      } else {
        throw new Error('Failed to create checkout session');
      }
    } catch (error) {
      console.error('Error during subscription:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((section) => {
        Object.keys(formData[section]).forEach((key) => {
          const value = formData[section][key];
          if (value instanceof File) {
            formDataToSend.append(key, value); 
          } else {
            formDataToSend.append(key, value); 
          }
        });
      });

      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/submit-application`, {
         method: 'POST',
         body: formDataToSend, 
      });
     
      if (!response.ok) {
       throw new Error('Error sending data');
      }  else {
        const data = await response.json();
        if (data.applicationId) {
          handleSubscribe(data.applicationId); // Сохраняем applicationId в состоянии
           
          } else {
            throw new Error('Application ID is missing in response');
          }
        
      }
    } catch (error) {
      console.error('Sending error:', error);
      alert('Failed to submit your request. Please try again.');
    }
  };
    
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Loan Application</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`w-1/5 h-1 rounded ${
                i <= step ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-700'
              }`}
            />
          ))}
        </div>

        {steps[step]}

        <div className="flex justify-between mt-6">
          {step > 1 && step < 7 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 rounded-lg border border-gray-700 text-white"
            >
              Back
            </button>
          )}
          {step < 5 && (
            <button
              onClick={() => {
                if (validateStep()) setStep(step + 1);
              }}
              className={`px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white ${
                step === 1 ? 'ml-auto' : ''
              }`}
            >
              Next
            </button>
          )}
          {step === 5 && (
            <button
              onClick={handleSubmit}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white"
            >
              Pay & Submit
            </button>
          )}
          {/* {step === 7 && <ConfirmationStep />} */}
        </div>
      </div>
    </div>
  );
};
