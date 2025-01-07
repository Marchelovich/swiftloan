import React from 'react';
import { FooterLink } from '../../types/footer';

interface FooterSectionProps {
  title: string;
  links: FooterLink[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {link.isButton ? (
            <button
              onClick={link.onClick}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ) : (
            <a
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
              {...(link.href?.startsWith('http') ? {
                target: "_blank",
                rel: "noopener noreferrer"
              } : {})}
            >
              {link.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);