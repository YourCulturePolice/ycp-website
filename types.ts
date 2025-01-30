import type { LucideIcon } from 'lucide-react'

export interface KeyProblem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
