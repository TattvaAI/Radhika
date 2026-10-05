export type Locale = 'hi' | 'en'

export const LOCALES = ['hi', 'en'] as const
export const DEFAULT_LOCALE: Locale = 'hi'

export type LocalizedText = { hi: string; en: string }

export interface Service {
  slug: string
  title: LocalizedText
  short: LocalizedText
  body: LocalizedText[]
  includes: LocalizedText[]
  suitableFor: LocalizedText[]
  durations: number[]
}

export interface TierPrice {
  id: 'guidance' | 'consultation' | 'deep'
  minutes: number
  label: LocalizedText
  description: LocalizedText
  priceInr: number | null
}

export interface Testimonial {
  name: string
  city: string
  quote: LocalizedText
  isPlaceholder: boolean
}

export interface Astrologer {
  name: string
  title: LocalizedText
  city: string
  region: string
  languages: string[]
  yearsInPractice: number
  clientsConsulted: number
  credentials: LocalizedText[]
  story: LocalizedText
  storyPlaceholders: boolean
  whatsapp: string | null
  instagram: string
  callSlots: LocalizedText
  chatWindow: LocalizedText
  availabilityNote: LocalizedText
}

export interface FAQItem { question: LocalizedText; answer: LocalizedText }

export interface NavItem { href: string; label: LocalizedText }

export function isLocale(v: string): v is Locale {
  return v === 'hi' || v === 'en'
}
