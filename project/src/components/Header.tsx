import React, { useState } from 'react';
import { DollarSign, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#calculator", label: "Calculator" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <DollarSign className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text" />
              <div className="absolute inset-0 animate-ping opacity-75 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              SwiftLoan
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href}>{item.label}</NavLink>
            ))}
            <button 
              onClick={() => window.openLoanApplication()}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold 
                hover:opacity-90 transition-all hover:scale-105"
            >
              Apply Now
            </button>
          </div>
          
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map(item => (
              <NavLink key={item.href} href={item.href} mobile>{item.label}</NavLink>
            ))}
            <button 
              onClick={() => {
                window.openLoanApplication();
                setIsMenuOpen(false);
              }}
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};