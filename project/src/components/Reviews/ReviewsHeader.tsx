import React from 'react';
import { Star } from 'lucide-react';

export const ReviewsHeader = () => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <div className="text-center md:text-left mb-4 md:mb-0">
      <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
      <p className="text-gray-400">Real experiences from our valued customers</p>
    </div>
    <div className="flex items-center space-x-4">
      <a 
        href="https://www.trustpilot.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors"
      >
        <img 
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
          alt="Trustpilot" 
          className="h-8"
        />
      </a>
      <div className="flex items-center bg-green-600/10 px-4 py-2 rounded-full">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-green-500 fill-current" />
          ))}
        </div>
        <span className="ml-2 font-semibold text-green-500">4.9/5</span>
      </div>
    </div>
  </div>
);