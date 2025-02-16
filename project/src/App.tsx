import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { LoanCalculator } from './components/LoanCalculator';
import { Features } from './components/Features';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Reviews } from './components/Reviews/Reviews';
import { FAQ } from './components/FAQ/FAQ';
import { Footer } from './components/Footer/Footer';
import { ScrollPrompt } from './components/ScrollPrompt/ScrollPrompt';
import { ApplicationForm } from './components/ApplicationForm';
const urlParams = new URLSearchParams(window.location.search);
const step = urlParams.get('step') as unknown as number;

import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('3992513714402585'); // Инициализация пикселя
ReactPixel.pageView(); // Отслеживание просмотра страницы

const App = () => {
  const [showApplication, setShowApplication] = useState(step == 7);
  const [formData, setFormData] = useState({
    loanDetails: { 
      loanAmount: import.meta.env.VITE_REACT_APP_LOAN_AMOUNT,
      termDays: import.meta.env.VITE_REACT_APP_TERM_DAYS,
      paymentFrequency: import.meta.env.VITE_REACT_APP_PAYMENT_FREUENCY
    },
  });
  // Make the openLoanApplication function available globally
  React.useEffect(() => {
    window.openLoanApplication = () => setShowApplication(true);
  }, []);

  const handleChange = (formName, fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: {
        ...prev[formName],
        [fieldName]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ScrollPrompt />
      
      <main className="container mx-auto px-4 space-y-24">
        <section id="calculator">
          <LoanCalculator 
          data={formData.loanDetails}
          onChange={(field, value) => handleChange('loanDetails', field, value)}/>
        </section>

        <section id="features">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">SwiftLoan</span>
          </h2>
          <Features />
        </section>

        <section id="about">
          <AboutUs />
        </section>

        <section id="reviews">
          <Reviews />
        </section>
      </main>

      <FAQ />
      <Footer />

      {showApplication && (
        <ApplicationForm onClose={() => setShowApplication(step === 7)} />
      )}
    </div>
  );
};

export default App;