import { Job } from '../types/careers';

export const jobs: Job[] = [
  {
    id: 'senior-ai-engineer',
    title: 'Senior AI/ML Engineer',
    description: 'Lead the development of our next-generation AI lending algorithms and risk assessment models.',
    location: 'Remote',
    type: 'Full-time',
    experience: '5+ years',
    department: 'Engineering',
    requirements: [
      'Advanced degree in Computer Science, AI, or related field',
      'Experience with TensorFlow, PyTorch, and other ML frameworks',
      'Strong background in financial technology'
    ],
    responsibilities: [
      'Design and implement AI/ML models for loan assessment',
      'Optimize existing algorithms for better performance',
      'Lead a team of ML engineers'
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Senior Full Stack Developer',
    description: 'Build and maintain our core lending platform using modern web technologies and cloud infrastructure.',
    location: 'Hybrid',
    type: 'Full-time',
    experience: '4+ years',
    department: 'Engineering',
    requirements: [
      'Strong experience with React, Node.js, and TypeScript',
      'Experience with cloud platforms (AWS/GCP)',
      'Knowledge of financial systems'
    ],
    responsibilities: [
      'Develop new features for our lending platform',
      'Optimize application performance',
      'Implement security best practices'
    ]
  },
  {
    id: 'security-engineer',
    title: 'Security Engineer',
    description: 'Ensure the security and compliance of our financial systems and customer data.',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    department: 'Security',
    requirements: [
      'Security certifications (CISSP, CEH, etc.)',
      'Experience with financial security compliance',
      'Knowledge of cloud security'
    ],
    responsibilities: [
      'Implement security measures',
      'Conduct security audits',
      'Manage incident response'
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze lending patterns and develop predictive models to improve loan approval accuracy.',
    location: 'Remote',
    type: 'Full-time',
    experience: '3+ years',
    department: 'Data Science',
    requirements: [
      'Advanced degree in Statistics, Mathematics, or related field',
      'Experience with data analysis tools',
      'Knowledge of financial modeling'
    ],
    responsibilities: [
      'Develop predictive models',
      'Analyze lending patterns',
      'Create data visualization'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
    location: 'Remote',
    type: 'Full-time',
    experience: '4+ years',
    department: 'Engineering',
    requirements: [
      'Experience with AWS/GCP',
      'Knowledge of CI/CD pipelines',
      'Infrastructure as Code expertise'
    ],
    responsibilities: [
      'Manage cloud infrastructure',
      'Optimize deployment processes',
      'Implement monitoring solutions'
    ]
  }
];