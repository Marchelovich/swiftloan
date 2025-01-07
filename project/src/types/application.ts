export interface ApplicationData {
  // Loan Details
  amount: number;
  term: number;
  frequency: string;
  
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  homePhone: string;
  cellPhone: string;
  gender: string;
  identityDocument: File | null;
  
  // Residential Info
  address: string;
  apt: string;
  city: string;
  province: string;
  postalCode: string;
  residenceProof: File | null;
  
  // Revenue Info
  employmentStatus: string;
  monthlyIncome: string;
  incomeFrequency: string;
  
  // Payment Info
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  acceptedTerms: boolean;
}

export const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non-binary', label: 'Non-binary' },
  { value: 'transgender', label: 'Transgender' },
  { value: 'genderqueer', label: 'Genderqueer' },
  { value: 'two-spirit', label: 'Two-Spirit' },
  { value: 'other', label: 'Other' },
  { value: 'prefer-not', label: 'Prefer not to say' }
];

export const provinceOptions = [
  { value: 'AB', label: 'Alberta' },
  { value: 'BC', label: 'British Columbia' },
  { value: 'MB', label: 'Manitoba' },
  { value: 'NB', label: 'New Brunswick' },
  { value: 'NL', label: 'Newfoundland and Labrador' },
  { value: 'NS', label: 'Nova Scotia' },
  { value: 'ON', label: 'Ontario' },
  { value: 'PE', label: 'Prince Edward Island' },
  { value: 'QC', label: 'Quebec' },
  { value: 'SK', label: 'Saskatchewan' }
];

export const employmentOptions = [
  { value: 'full-time', label: 'Full-time employed' },
  { value: 'part-time', label: 'Part-time employed' },
  { value: 'self-employed', label: 'Self-employed' },
  { value: 'unemployed', label: 'Unemployed' },
  { value: 'retired', label: 'Retired' },
  { value: 'student', label: 'Student' }
];

export const incomeRangeOptions = [
  { value: '0-1000', label: '$0 - $1,000' },
  { value: '1001-2000', label: '$1,001 - $2,000' },
  { value: '2001-3000', label: '$2,001 - $3,000' },
  { value: '3001-4000', label: '$3,001 - $4,000' },
  { value: '4001-5000', label: '$4,001 - $5,000' },
  { value: '5001+', label: '$5,001+' }
];

export const incomeFrequencyOptions = [
  { value: 'weekly', label: 'Weekly' },
  { value: 'biweekly', label: 'Bi-weekly' },
  { value: 'monthly', label: 'Monthly' }
];