import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Job, ApplicationFormData } from '../../types/careers';
import { JobHeader } from './components/JobHeader';
import { JobRequirements } from './components/JobRequirements';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { AdditionalInfoForm } from './forms/AdditionalInfoForm';

interface JobApplicationFormProps {
  job: Job;
  onBack: () => void;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ job, onBack }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  const handleFieldChange = (field: keyof ApplicationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted successfully!');
    onBack();
  };

  return (
    <div className="max-h-[80vh] overflow-y-auto pr-2">
      <button
        onClick={onBack}
        className="flex items-center text-gray-400 hover:text-white mb-6 group"
      >
        <ChevronLeft className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" />
        Back to Jobs
      </button>

      <JobHeader job={job} />
      <JobRequirements 
        requirements={job.requirements}
        responsibilities={job.responsibilities}
      />

      <form onSubmit={handleSubmit} className="space-y-8">
        <PersonalInfoForm data={formData} onChange={handleFieldChange} />
        <AdditionalInfoForm data={formData} onChange={handleFieldChange} />
        
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
            text-white font-semibold hover:opacity-90 transition-all hover:scale-105 
            hover:shadow-xl animate-gradient bg-[length:200%_200%]"
        >
          Send Application
        </button>
      </form>
    </div>
  );
};