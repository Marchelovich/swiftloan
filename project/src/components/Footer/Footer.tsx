import React, { useState } from 'react';
import { FooterSection } from './FooterSection';
import { HelpForm } from '../HelpCenter/HelpForm';
import { CareersModal } from '../Careers/CareersModal';
import { TermsModal } from '../Legal/TermsModal';
import { PrivacyModal } from '../Legal/PrivacyPolicy/PrivacyModal';

export const Footer = () => {
  const [showHelpForm, setShowHelpForm] = useState(false);
  const [showCareers, setShowCareers] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FooterSection 
            title="Company" 
            links={[
              { label: "About Us", href: "#about" },
              { 
                label: "Careers", 
                onClick: () => setShowCareers(true),
                isButton: true 
              },
              { label: "Blog", href: "#blog" }
            ]} 
          />
          
          <FooterSection 
            title="Support" 
            links={[
              { label: "FAQ", href: "#faq" },
              { 
                label: "Help Center", 
                onClick: () => setShowHelpForm(true),
                isButton: true 
              }
            ]} 
          />
          
          <FooterSection 
            title="Legal" 
            links={[
              { 
                label: "Terms of Use", 
                onClick: () => setShowTerms(true),
                isButton: true 
              },
              { 
                label: "Privacy Policy", 
                onClick: () => setShowPrivacy(true),
                isButton: true 
              }
            ]} 
          />
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SwiftLoan. All rights reserved.</p>
        </div>
      </div>

      {showHelpForm && <HelpForm onClose={() => setShowHelpForm(false)} />}
      {showCareers && <CareersModal onClose={() => setShowCareers(false)} />}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
};