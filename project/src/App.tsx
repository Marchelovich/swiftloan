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

const App = () => {
  const [showApplication, setShowApplication] = useState(false);

  // Make the openLoanApplication function available globally
  React.useEffect(() => {
    window.openLoanApplication = () => setShowApplication(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <ScrollPrompt />
      
      <main className="container mx-auto px-4 space-y-24">
        <section id="calculator">
          <LoanCalculator />
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
        <ApplicationForm onClose={() => setShowApplication(false)} />
      )}
    </div>
  );
};

export default App;