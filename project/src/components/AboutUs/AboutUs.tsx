import React from 'react';
import { AboutContent } from './AboutContent';
import { IntelligentLending } from './IntelligentLending';
import { ReinvestmentStrategy } from './ReinvestmentStrategy';
import { AIExample } from './AIExample';
import { AIFeatures } from './AIFeatures';
import { Stats } from './Stats';

export const AboutUs = () => (
  <section className="py-24 bg-gradient-to-b from-black to-gray-900">
    <div className="container mx-auto px-4">
      <AboutContent />
      <IntelligentLending />
      <ReinvestmentStrategy />
      <AIExample />
      <AIFeatures />
      <Stats />
    </div>
  </section>
);