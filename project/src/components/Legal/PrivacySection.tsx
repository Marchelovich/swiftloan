import React from 'react';

interface PrivacySectionProps {
  title: string;
  content: string | string[];
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ title, content }) => (
  <section className="mb-8">
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    {Array.isArray(content) ? (
      <ul className="list-disc pl-6 space-y-2 text-gray-400">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p className="text-gray-400">{content}</p>
    )}
  </section>
);