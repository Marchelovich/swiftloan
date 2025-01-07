import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const CarouselControls: React.FC<CarouselControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => (
  <div className="flex justify-center mt-8 items-center space-x-4">
    <button
      onClick={() => onPageChange(currentPage === 0 ? totalPages - 1 : currentPage - 1)}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
    >
      <ChevronLeft className="w-6 h-6 group-hover:text-white transition-colors" />
    </button>

    <div className="flex space-x-2">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === currentPage 
              ? 'bg-purple-500 w-4' 
              : 'bg-gray-600 hover:bg-gray-500'
          }`}
        />
      ))}
    </div>

    <button
      onClick={() => onPageChange((currentPage + 1) % totalPages)}
      className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
    >
      <ChevronRight className="w-6 h-6 group-hover:text-white transition-colors" />
    </button>
  </div>
);