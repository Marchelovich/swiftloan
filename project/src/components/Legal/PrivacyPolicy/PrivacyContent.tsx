import React from 'react';
import { PrivacySection } from './PrivacySection';
import { privacySections } from './sections';

export const PrivacyContent = () => (
  <div className="prose prose-invert max-w-none">
    {privacySections.map((section, index) => (
      <PrivacySection key={index} {...section} />
    ))}
  </div>
);