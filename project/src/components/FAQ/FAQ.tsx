import React from 'react';
import { faqData } from '../../data/faq';
import { FAQItem } from './FAQItem';

export const FAQ = () => (
  <section id="faq" className="py-24 bg-gray-900/50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-2">
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);