import React, { useState } from 'react';
import { JobList } from './JobList';
import { JobApplicationForm } from './JobApplicationForm';
import { Job } from '../../types/careers';
import { jobs } from '../../data/jobs';
import { CloseButton } from '../common/CloseButton';

interface CareersModalProps {
  onClose: () => void;
}

export const CareersModal: React.FC<CareersModalProps> = ({ onClose }) => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-lg sm:max-w-md md:max-w-xl lg:max-w-4xl bg-gray-900/50 backdrop-blur-lg rounded-2xl p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            {selectedJob ? 'Apply for Position' : 'Join Our Team'}
          </h2>
          <CloseButton onClose={onClose} />
        </div>

        {selectedJob ? (
          <JobApplicationForm job={selectedJob} onBack={() => setSelectedJob(null)} />
        ) : (
          <JobList jobs={jobs} onSelect={setSelectedJob} />
        )}
      </div>
    </div>
  );
};
