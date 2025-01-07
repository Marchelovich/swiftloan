import React, { useRef } from 'react';
import { Review } from '../../types/reviews';
import { ReviewCard } from './ReviewCard';
import { CarouselControls } from './CarouselControls';
import { useCarouselAutoplay } from '../../hooks/useCarouselAutoplay';

interface ReviewsCarouselProps {
  reviews: Review[];
}

export const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ reviews }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);
  
  const {
    currentPage,
    isAutoScrolling,
    goToPage,
    pauseAutoScroll,
    resumeAutoScroll
  } = useCarouselAutoplay({
    totalPages,
    onPageChange: () => {},
    interval: 5000
  });

  // Create a padded array of reviews to ensure smooth infinite scrolling
  const paddedReviews = [...reviews];
  while (paddedReviews.length % itemsPerPage !== 0) {
    paddedReviews.push(reviews[paddedReviews.length % reviews.length]);
  }

  const currentReviews = paddedReviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="relative" ref={containerRef}>
      <div className="relative overflow-hidden">
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
        >
          {currentReviews.map((review, index) => (
            <div 
              key={`${currentPage}-${index}`}
              className="transform transition-all duration-500 ease-in-out"
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      <CarouselControls 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          pauseAutoScroll();
          goToPage(page);
          setTimeout(resumeAutoScroll, 10000);
        }}
      />
    </div>
  );
};