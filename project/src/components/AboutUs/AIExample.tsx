import React from 'react';
import { Sparkles } from 'lucide-react';

export const AIExample = () => (
  <div className="mb-16 bg-gray-900/50 backdrop-blur-lg rounded-xl p-8">
    <div className="flex items-center mb-6">
      <Sparkles className="w-10 h-10 text-yellow-500 mr-4" />
      <h3 className="text-2xl font-bold">AI in Action: An Example</h3>
    </div>
    <p className="text-gray-400 leading-relaxed">
      Consider John, a hopeful homeowner, faced with seemingly insurmountable odds due to fluctuating 
      market rates. Our AI analyzed John's financial status, predicted market trends, and connected 
      him with a lender that not only approved his loan but did so at an interest rate 2% lower than 
      what was typically available. Over time, as rates threatened to increase, our AI preemptively 
      shifted John's investment, locking in a rate that continuously favored his economic position.
    </p>
  </div>
);