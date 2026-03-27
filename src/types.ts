export type NavItem = {
  id: string;
  label: string;
};

export type ProofItem = {
  value: string;
  label: string;
};

export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  outcome: string;
};

export type CaseItem = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  domain: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  featured: boolean;
};

export type ProcessStep = {
  id: string;
  title: string;
  description: string;
};

export type WhyItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};
