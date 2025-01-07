import React from 'react';
import { NavLink } from '../common/NavLink';
import { ApplyButton } from '../common/ApplyButton';
import { CareersModal } from '../Careers/CareersModal';

interface NavigationProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isMobile, onClose }) => {
  const [showCareers, setShowCareers] = React.useState(false);

  const navItems = [
    { href: "#calculator", label: "Calculator" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { 
      label: "Careers",
      onClick: () => {
        setShowCareers(true);
        onClose?.();
      }
    }
  ];

  return (
    <>
      <div className={isMobile ? "space-y-4" : "hidden md:flex items-center space-x-6"}>
        {navItems.map((item, index) => (
          item.href ? (
            <NavLink key={index} href={item.href} mobile={isMobile}>
              {item.label}
            </NavLink>
          ) : (
            <button
              key={index}
              onClick={item.onClick}
              className={`text-gray-400 hover:text-white transition-colors ${
                isMobile ? 'block w-full text-lg py-2 text-left' : ''
              }`}
            >
              {item.label}
            </button>
          )
        ))}
        <ApplyButton 
          onClick={() => {
            window.openLoanApplication();
            onClose?.();
          }}
          fullWidth={isMobile}
        />
      </div>

      {showCareers && <CareersModal onClose={() => setShowCareers(false)} />}
    </>
  );
};