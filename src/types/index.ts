export interface Service {
  title: string
  path: string
  description: string
  features: string[]
  benefits: string[]
  faqs: FAQ[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface Benefit {
  title: string
  description: string
  icon: string
}

export interface ServiceCategory {
  title: string
  path: string
  services: Service[]
}

export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  service?: string
}

export interface Review {
  id: string
  rating: number
  comment: string
  author: string
  date: string
  service: string
}

export interface BreadcrumbItem {
  label: string
  href: string
}

export interface MetaData {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface ServiceImage {
  src: string
  alt: string
  title: string
}

export interface ServiceFeature {
  title: string
  description: string
  icon: string
}

export interface ServicePrice {
  service: string
  price: number
  description: string
  features: string[]
}

export interface ServiceArea {
  city: string
  state: string
  zipCode: string
  isActive: boolean
}

export interface ServiceSchedule {
  date: string
  time: string
  service: string
  customer: {
    name: string
    email: string
    phone: string
  }
  address: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  notes?: string
} 