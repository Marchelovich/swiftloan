import React from 'react';
import { PrivacySection } from './PrivacySection';
import { sections } from './privacyData';

export const PrivacyContent = () => (
  <div className="prose prose-invert max-w-none">
    {sections.map((section, index) => (
      <PrivacySection key={index} {...section} />
    ))}
  </div>
);