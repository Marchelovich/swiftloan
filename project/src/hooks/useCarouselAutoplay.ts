import { useState, useEffect, useRef, useCallback } from 'react';

interface UseCarouselAutoplayProps {
  totalPages: number;
  onPageChange: (page: number) => void;
  interval?: number;
  initialPage?: number;
}

export const useCarouselAutoplay = ({
  totalPages,
  onPageChange,
  interval = 5000,
  initialPage = 0
}: UseCarouselAutoplayProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollTimer = useRef<NodeJS.Timeout>();

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  }, [onPageChange]);

  const nextPage = useCallback(() => {
    goToPage((currentPage + 1) % totalPages);
  }, [currentPage, totalPages, goToPage]);

  const previousPage = useCallback(() => {
    goToPage(currentPage === 0 ? totalPages - 1 : currentPage - 1);
  }, [currentPage, totalPages, goToPage]);

  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollTimer.current = setInterval(nextPage, interval);
    }

    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, [isAutoScrolling, interval, nextPage]);

  const pauseAutoScroll = useCallback(() => setIsAutoScrolling(false), []);
  const resumeAutoScroll = useCallback(() => setIsAutoScrolling(true), []);

  return {
    currentPage,
    isAutoScrolling,
    goToPage,
    nextPage,
    previousPage,
    pauseAutoScroll,
    resumeAutoScroll
  };
};