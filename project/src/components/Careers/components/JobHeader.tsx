import React from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Job } from '../../../types/careers';

interface JobHeaderProps {
  job: Job;
}

export const JobHeader: React.FC<JobHeaderProps> = ({ job }) => (
  <div className="flex flex-col space-y-2 mb-6">
    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
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
    <p className="text-gray-400">{job.description}</p>
  </div>
);