import React from 'react';

interface StatsCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  gradient: string;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  value,
  label,
  prefix = '',
  suffix = '',
  gradient
}) => (
  <div className="p-4 bg-gray-800/50 rounded-lg text-center">
    <div className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
      {prefix}{value.toLocaleString()}{suffix}
    </div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);