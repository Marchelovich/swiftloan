import { HeroTitle } from './HeroTitle';
import { HeroFeatures } from './HeroFeatures';

export const HeroContent = () => (
  <div className="relative h-full z-10 flex items-center justify-center">
    <div className="text-center px-4 space-y-8 max-w-4xl mx-auto">
      <HeroTitle />
      <HeroFeatures />
      <button
        onClick={() => window.openLoanApplication()}
        className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
          text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-xl
          animate-gradient bg-[length:200%_200%]"
      >
        Get Your Money Now
      </button>
    </div>
  </div>
);