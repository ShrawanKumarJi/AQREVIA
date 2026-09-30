export type PageId = 
  | 'home'
  | 'solutions'
  | 'solution-detail'
  | 'who-we-work-with'
  | 'results'
  | 'about'
  | 'contact'
  | 'growth-plan';

export type SolutionId = 
  | 'project-launch'
  | 'buyer-acquisition'
  | 'site-visit-generation'
  | 'project-sales-growth'
  | 'broker-partner-growth';

export interface SolutionItem {
  id: SolutionId;
  title: string;
  shortDescription: string;
  tagline: string;
  problem: string;
  approach: string;
  capabilities: string[];
  workflow: { step: string; label: string; desc: string }[];
  metricsHeadline: string;
  exampleCase: {
    title: string;
    location: string;
    propertyType: string;
    objective: string;
    strategy: string[];
    results: { label: string; value: string }[];
  };
  faqs: { q: string; a: string }[];
  imageUrl: string;
}

export interface MetricItem {
  value: string;
  label: string;
  note?: string;
}

export interface ProblemCard {
  id: number;
  title: string;
  description: string;
  metricImpact: string;
  iconName: string;
}

export interface GrowthStage {
  id: number;
  label: string;
  sublabel: string;
  description: string;
  techStack: string;
}

export interface ClientType {
  id: string;
  title: string;
  headline: string;
  challenge: string;
  solution: string;
  systemIncludes: string[];
  engagementScope: string[];
  imageUrl: string;
}

export interface CaseStudy {
  id: string;
  project: string;
  location: string;
  propertyType: 'Residential' | 'Commercial' | 'Villas' | 'Plots' | 'Mixed Use';
  category: 'Residential' | 'Commercial' | 'Project Launch' | 'Lead Generation' | 'Project Sales';
  objective: string;
  strategy: string[];
  adChannels: string[];
  results: {
    leads: string;
    qualifiedLeads: string;
    siteVisits: string;
    bookings: string;
  };
  highlightQuote: string;
  imageUrl: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  summary: string;
  details: string[];
}

export interface WhyReason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  whatsapp: string;
  email: string;
  role: string;
  projectLocation: string;
  projectType: string;
  needs: string[];
  details: string;
}

export interface GrowthPlanFormData {
  // Step 1: About You
  fullName: string;
  role: string;
  organization: string;
  city: string;
  // Step 2: About Project
  projectName: string;
  propertyType: string;
  priceSegment: string;
  inventoryUnits: string;
  // Step 3: Current Marketing
  currentChannels: string[];
  currentMonthlyLeads: string;
  primaryBottleneck: string;
  // Step 4: Growth Objective
  targetMonthlyVisits: string;
  launchTimeline: string;
  salesTargetValue: string;
  // Step 5: Contact
  phone: string;
  email: string;
  preferredContactTime: string;
}
