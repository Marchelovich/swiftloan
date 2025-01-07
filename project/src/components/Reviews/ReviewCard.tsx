import React from 'react';
import { Star } from 'lucide-react';
import { Review } from '../../types/reviews';

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <div className="h-full p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-[1.02]">
    <div className="flex items-center mb-4">
      <div className="relative">
        <img
          src={review.image}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
          loading="lazy"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
          <Star className="w-3 h-3 text-white fill-current" />
        </div>
      </div>
      <div className="ml-4">
        <div className="text-white font-semibold">{review.name}</div>
        <div className="flex text-yellow-500">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-300 leading-relaxed">{review.text}</p>
    <div className="mt-4 text-sm text-gray-400">Verified Customer</div>
  </div>
);