import { useState } from 'react';
import { X } from 'lucide-react';
import { LoanDetails } from './forms/LoanDetails';
import { PersonalInfo } from './forms/PersonalInfo';
import { ResidentialInfo } from './forms/ResidentialInfo';
import { RevenueInfo } from './forms/RevenueInfo';
// import { PaymentInfo } from './forms/PaymentInfo';
import { ConfirmationStep } from './forms/ConfirmationStep';
import { loadStripe } from '@stripe/stripe-js';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

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
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

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
      <div className="mt-4">
        <h3 className="text-white text-lg mb-2">Payment Details</h3>
        <div className="bg-gray-800 p-4 rounded-lg">
          <CardElement className="bg-gray-700 p-2 rounded-md" />
        </div>
        <p className="text-gray-400 text-sm mt-4">
          You will be charged ${formData.loanDetails.loanAmount}. Complete the payment to submit your application.
        </p>
      </div>
    ),
    // 5: (
    //   <PaymentInfo
    //     data={formData.paymentInfo}
    //     onChange={(field, value) => handleChange('paymentInfo', field, value)}
    //   />
    // ),
    6: <ConfirmationStep />,
  };

  const handleChange = (formName, fieldName, value) => {
    console.log('stripePromise:', stripePromise);

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
    // if (step === 5) {
    //   if (
    //     !currentData.cardNumber ||
    //     !currentData.cardName ||
    //     !currentData.expiryMonth ||
    //     !currentData.expiryYear ||
    //     !currentData.cvv
    //     //  ||
    //     // !currentData.termsAccepted
    //   ) {
    //     alert('Please fill in all required fields before proceeding.');
    //     return false;
    //   }
    // }
  
    return true;
  };

  const handleSubmit = async () => {
    try {
      const stripe = await stripePromise;
  
      // 1. Создать платежный интент на сервере
      const paymentResponse = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/create-payment-intent`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: formData.loanDetails.loanAmount * 100 }), // Преобразовать сумму в центы
      });
  
      if (!paymentResponse.ok) {
        throw new Error('Error creating payment intent');
      }
  
      const { clientSecret } = await paymentResponse.json();
  
      // 2. Завершить платеж
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${formData.personalInfo.firstName} ${formData.personalInfo.lastName}`,
            email: formData.personalInfo.email,
          },
        },
      });
  
      if (error) {
        throw new Error(`Payment failed: ${error.message}`);
      }
  
      // 3. Отправить данные формы
      const formDataToSend = new FormData();
      Object.keys(formData).forEach((section) => {
        Object.keys(formData[section]).forEach((key) => {
          const value = formData[section][key];
          formDataToSend.append(key, value);
        });
      });
  
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/submit-application`, {
        method: 'POST',
        body: formDataToSend,
      });
  
      if (!response.ok) {
        throw new Error('Error submitting application');
      }
  
      setStep(6); // Перейти к ConfirmationStep
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };
  
  
  // const handleSubmit = async () => {
  //   try {
  //     const formDataToSend = new FormData();
  //     Object.keys(formData).forEach((section) => {
  //       Object.keys(formData[section]).forEach((key) => {
  //         const value = formData[section][key];
  //         if (value instanceof File) {
  //           formDataToSend.append(key, value); 
  //         } else {
  //           formDataToSend.append(key, value); 
  //         }
  //       });
  //     });

  //     const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/submit-application`, {
  //        method: 'POST',
  //        body: formDataToSend, 
  //     });

  //     if (!response.ok) {
  //      throw new Error('Error sending data');
  //     } 
  //     setStep(6);
  //   } catch (error) {
  //     console.error('Sending error:', error);
  //     alert('Failed to submit your request. Please try again.');
  //   }
  // };
    
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
          {step > 1 && (
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
        </div>
      </div>
    </div>
  );
};
