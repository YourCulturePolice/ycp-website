import { Monitor, Clock, FolderIcon } from 'lucide-react'
import type { JSX } from 'react'

interface KeyProblem {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface SolutionStep {
  step: string;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const KEY_PROBLEMS: KeyProblem[] = [
  {
    title: "Forgotten Content",
    description: "You've made tons of great content over the years that's just sitting there. While you're busy making new videos, your old hits could be making money somewhere else.",
    icon: <FolderIcon className="h-6 w-6 text-orange-400" />
  },
  {
    title: "Same Old Platforms",
    description: "Your content is stuck on the usual platforms, competing with millions of others. There's a whole world of platforms out there who'd pay for your content, but you don't know where to start.",
    icon: <Monitor className="h-6 w-6 text-orange-400" />
  },
  {
    title: "No Time to Explore",
    description: "Managing content across different platforms feels like a second job. Every hour spent figuring out new platforms is an hour away from creating what you love.",
    icon: <Clock className="h-6 w-6 text-orange-400" />
  }
]

export const SOLUTION_STEPS: SolutionStep[] = [
  {
    step: "01",
    title: "Connect",
    description: "Link your content sources and let our AI analyze your archive."
  },
  {
    step: "02",
    title: "Optimize",
    description: "We identify and implement high-impact optimization opportunities."
  },
  {
    step: "03",
    title: "Convert",
    description: "Watch your optimized content drive more conversions and revenue."
  }
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "John Smith",
    position: "Content Creator",
    company: "TechTalks",
    image: "/testimonial1.png",
    quote: "They helped me unlock revenue streams I didn't even know existed. My old content is now making money while I sleep!",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    position: "CEO",
    company: "Digital Media Co",
    image: "/testimonial2.png",
    quote: "The team's expertise in content distribution has transformed our business model completely.",
    rating: 5
  },
  {
    name: "Michael Brown",
    position: "Founder",
    company: "CreatorHub",
    image: "/testimonial3.png",
    quote: "Finally, a partner who understands the creator economy and knows how to maximize content value.",
    rating: 5
  }
]

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does the revenue sharing work?",
    answer: "We operate on a transparent 50:50 revenue split model. You keep the rights to your content, we handle the distribution and monetization."
  },
  {
    question: "How long until I see results?",
    answer: "Most partners see significant revenue increases within the first 30 days of implementation."
  },
  {
    question: "What type of content works best?",
    answer: "We work with all types of content - educational, entertainment, lifestyle, gaming, and more. If it's engaging, we can monetize it."
  },
  {
    question: "Do I lose rights to my content?",
    answer: "Absolutely not. You retain 100% ownership of your content. We simply help you distribute and monetize it more effectively."
  }
]
