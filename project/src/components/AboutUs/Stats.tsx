import React from 'react';
import { StatsCounter } from './StatsCounter';

const stats = [
  {
    value: 50000,
    label: "Happy Customers",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    value: 2.3,
    label: "Monthly Interest Rate",
    suffix: "%",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    value: 18000,
    label: "Maximum Loan Amount",
    prefix: "$",
    gradient: "from-pink-500 to-red-500"
  },
  {
    value: 99.9,
    label: "Approval Rate",
    suffix: "%",
    gradient: "from-red-500 to-orange-500"
  }
];

export const Stats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((stat, index) => (
      <StatsCounter key={index} {...stat} />
    ))}
  </div>
);