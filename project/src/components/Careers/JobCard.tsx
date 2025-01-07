import React from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Job } from '../../types/careers';

interface JobCardProps {
  job: Job;
  onApply: () => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply }) => (
  <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {job.type}
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {job.experience}
          </div>
        </div>
      </div>
      <button
        onClick={onApply}
        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold
          hover:opacity-90 transition-all hover:scale-105"
      >
        Apply Now
      </button>
    </div>
    <p className="text-gray-400">{job.description}</p>
  </div>
);