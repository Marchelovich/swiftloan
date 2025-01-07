import React from 'react';
import { Job } from '../../types/careers';
import { JobCard } from './JobCard';

interface JobListProps {
  jobs: Job[];
  onSelect: (job: Job) => void;
}

export const JobList: React.FC<JobListProps> = ({ jobs, onSelect }) => (
  <div className="space-y-4">
    <p className="text-gray-400 mb-6">
      Join our innovative team and help revolutionize the lending industry with AI technology.
    </p>
    <div className="grid gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onApply={() => onSelect(job)} />
      ))}
    </div>
  </div>
);