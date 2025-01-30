import { ReactNode } from 'react'

export interface NavItem {
  label: string
  href: string
}

export interface KeyProblem {
  title: string
  description: string
  icon: ReactNode
}

export interface SolutionStep {
  step: string
  title: string
  description: string
}

export interface Testimonial {
  name: string
  position: string
  company: string
  image: string
  quote: string
  rating: number
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ClientCard {
  id: number
  name: string
  position: string
  avatar: string
  username: string
  stats: Array<{
    value: string
    label: string
  }>
  qrCode: string
}

