export type ProjectCategory = 
  | 'All'
  | 'Video Editing'
  | 'Social Media'
  | 'App & Web Testing'
  | 'Graphic Design'
  | 'Content & Writing'
  | 'Market Research';

export interface Project {
  id: string;
  title: string;
  company: string;
  companyLogoText: string;
  category: ProjectCategory;
  stipend: number;
  duration: string;
  spotsLeft: number;
  difficulty: 'Beginner Friendly' | 'Intermediate' | 'Advanced';
  verifiedBrand: boolean;
  deadline: string;
  description: string;
  deliverables: string[];
  skillsRequired: string[];
  perks: string[];
  companyIndustry: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  earnings: string;
  quote: string;
  completedGigs: number;
  companyWorkedWith: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Teens' | 'Parents' | 'Companies' | 'Payments';
}
