import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Chen",
    rating: 5,
    text: "SwiftLoan helped me finance my master's degree in Data Science. The quick approval meant I didn't miss the enrollment deadline. Now I'm working at a top tech company!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Marcus Rodriguez",
    rating: 5,
    text: "Started my food truck business thanks to SwiftLoan. The process was incredibly smooth, and the flexible repayment terms helped me manage cash flow in the early months.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Emily Thompson",
    rating: 5,
    text: "When my car broke down, I needed quick funds for repairs to keep my job. SwiftLoan came through in hours, not days. Their 2.3% rate is unbeatable!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "David Park",
    rating: 5,
    text: "Funded my wedding without the usual bank hassles. The payment holiday option gave us breathing room after the honeymoon. Truly a lifesaver!",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Aisha Patel",
    rating: 5,
    text: "Used SwiftLoan to expand my online boutique. The quick funding helped me stock up for the holiday season. Sales doubled thanks to the inventory boost!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Michael Foster",
    rating: 5,
    text: "Emergency dental surgery wasn't in my budget. SwiftLoan's same-day approval meant I could get the care I needed without waiting. Forever grateful!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Sofia Martinez",
    rating: 5,
    text: "Renovated my salon with SwiftLoan's help. The easy application process and no credit check were exactly what I needed. Business has increased 50%!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "James Wilson",
    rating: 5,
    text: "Needed to move cities for a better job opportunity. SwiftLoan covered my relocation expenses. Now earning twice as much - best decision ever!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Lisa Anderson",
    rating: 5,
    text: "Single mom who needed funds for my kid's school supplies and laptop. SwiftLoan's process was dignified and fast. No judgments, just help when needed.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Hassan Ahmed",
    rating: 5,
    text: "Launched my mobile repair service with SwiftLoan's help. Their faith in my business plan when banks said no made all the difference. Now employing 3 people!",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-900/50 backdrop-blur-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Success Stories</h2>
      <div
        ref={scrollRef}
        className="flex space-x-6 overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-none w-80 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-center mb-4">
              <div className="relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-current" />
                </div>
              </div>
              <div className="ml-4">
                <div className="text-white font-semibold">{review.name}</div>
                <div className="flex text-yellow-500">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">{review.text}</p>
            <div className="mt-4 text-sm text-gray-400">Verified Customer</div>
          </div>
        ))}
      </div>
    </div>
  );
};