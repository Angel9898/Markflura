export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  number?: string;
  tagline?: string;
  bullets?: string[];
  deliverables?: string[];
  idealFor?: string;
}

export interface CreatorNiche {
  name: string;
  creatorCount: string;
  description?: string;
  examples?: string[];
}

export interface PlatformNetwork {
  id: 'linkedin' | 'x' | 'instagram';
  name: string;
  shortName: string;
  countBadge: string;
  tagline: string;
  description: string;
  highlights: string[];
  niches: string[];
  featuredPages?: string[];
  gradient: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  tagline?: string;
  deliverables?: string[];
}

export interface CaseStudy {
  id: string;
  domain: string;
  title: string;
  challenge: string;
  approach: string;
  services: string[];
  impact: string[];
  metrics: { label: string; value: string }[];
  clientType: string;
  timeline: string;
}

export interface ClientCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyChallenge: string;
  markfluraSolution: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactFormData {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  requirement: string;
}


