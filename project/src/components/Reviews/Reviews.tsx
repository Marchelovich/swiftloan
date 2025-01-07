import React from 'react';
import { ReviewsHeader } from './ReviewsHeader';
import { ReviewsCarousel } from './ReviewsCarousel';
import { reviews } from '../../data/reviews';

export const Reviews = () => (
  <div className="w-full overflow-hidden bg-gray-900/50 backdrop-blur-lg rounded-xl p-6">
    <ReviewsHeader />
    <ReviewsCarousel reviews={reviews} />
  </div>
);