import React from 'react';
import { NavLink } from '../../common/NavLink';
import { ApplyButton } from '../../common/ApplyButton';

interface NavigationProps {
  isMobile?: boolean;
  onApplyClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ isMobile, onApplyClick }) => (
  <div className={isMobile ? "space-y-4" : "hidden md:flex items-center space-x-6"}>
    <NavLink href="#calculator" mobile={isMobile}>Calculator</NavLink>
    <NavLink href="#features" mobile={isMobile}>Features</NavLink>
    <NavLink href="#reviews" mobile={isMobile}>Reviews</NavLink>
    <ApplyButton onClick={onApplyClick} fullWidth={isMobile} />
  </div>
);