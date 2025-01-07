export interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  experience: string;
  department: string;
  requirements: string[];
  responsibilities: string[];
}

export interface ApplicationFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  portfolio: string;
  coverLetter: string;
}

export interface FormStep {
  title: string;
  component: React.ComponentType<any>;
}