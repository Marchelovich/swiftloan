import { useMemo } from 'react';

export const useCarouselAnimation = (currentPage: number) => {
  const animationStyles = useMemo(() => ({
    opacity: 1,
    transform: `translateX(${currentPage * -100}%)`,
    transition: 'transform 500ms ease-in-out, opacity 300ms ease-in-out'
  }), [currentPage]);

  return { animationStyles };
};