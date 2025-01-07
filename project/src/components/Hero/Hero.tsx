import React from 'react';
import { SplineScene } from './SplineScene';
import { HeroContent } from './HeroContent';

export const Hero = () => (
  <div className="relative w-full h-screen">
    <SplineScene />
    <HeroContent />
  </div>
);