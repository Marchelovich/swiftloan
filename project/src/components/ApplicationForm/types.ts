export interface LoanDetailsData {
  amount: number;
  term: number;
  frequency: string;
}

export interface PersonalInfoData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface ResidentialInfoData {
  address: string;
  apt: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface RevenueInfoData {
  employmentStatus: string;
  monthlyIncome: string;
  incomeFrequency: string;
}

export interface PaymentInfoData {
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
  acceptTerms: boolean;
}

export interface FormData {
  loanDetails: LoanDetailsData;
  personalInfo: PersonalInfoData;
  residentialInfo: ResidentialInfoData;
  revenueInfo: RevenueInfoData;
  paymentInfo: PaymentInfoData;
}

export const initialFormData: FormData = {
  loanDetails: {
    amount: 5000,
    term: 30,
    frequency: 'monthly'
  },
  personalInfo: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  },
  residentialInfo: {
    address: '',
    apt: '',
    city: '',
    province: '',
    postalCode: '',
  },
  revenueInfo: {
    employmentStatus: '',
    monthlyIncome: '',
    incomeFrequency: '',
  },
  paymentInfo: {
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    acceptTerms: false,
  },
};