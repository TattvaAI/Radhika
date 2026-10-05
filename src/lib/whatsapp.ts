import { astrologer } from '@/content/content'

export interface WhatsAppMessageOptions {
  service?: string
  duration?: number
  date?: string
  name?: string
  notes?: string
}

export function whatsappNumber(): string | null {
  return astrologer.whatsapp
}

export function composeMessage(opts: WhatsAppMessageOptions): string {
  const lines: string[] = ['Namaste Radhika ji,']
  lines.push('I would like to enquire about an astrology consultation.')

  if (opts.name) {
    lines.push(`Name: ${opts.name}`)
  }
  if (opts.service) {
    lines.push(`Service: ${opts.service}`)
  }
  if (opts.duration) {
    lines.push(`Duration: ${opts.duration} minutes`)
  }
  if (opts.date) {
    lines.push(`Preferred Date / Time: ${opts.date}`)
  }
  if (opts.notes) {
    lines.push(`Notes: ${opts.notes}`)
  }

  lines.push('Please let me know your available slots and how we may proceed.')
  return lines.join('\n')
}

export function buildWhatsAppUrl(opts: WhatsAppMessageOptions): string | null {
  const number = whatsappNumber()
  if (!number) {
    return null
  }
  const cleanNumber = number.replace(/\D/g, '')
  if (!cleanNumber) {
    return null
  }
  const text = encodeURIComponent(composeMessage(opts))
  return `https://wa.me/${cleanNumber}?text=${text}`
}
