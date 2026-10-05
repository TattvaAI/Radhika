import type { Locale } from '@/content/types'
import { services } from '@/content/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from './ServiceCard'

export interface RelatedServicesProps {
  currentSlug: string
  locale: Locale
  className?: string
}

export function RelatedServices({ currentSlug, locale, className = '' }: RelatedServicesProps) {
  const currentIndex = services.findIndex((s) => s.slug === currentSlug)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex
  const total = services.length

  const related = [
    services[(safeIndex + 1) % total],
    services[(safeIndex + 2) % total],
    services[(safeIndex + 3) % total],
  ]

  const title = locale === 'hi' ? 'अन्य परामर्श सेवाएं' : 'Other Consultation Services'
  const body =
    locale === 'hi'
      ? 'जीवन के अन्य क्षेत्रों के लिए शांत और ईमानदार ज्योतिषीय मार्गदर्शन।'
      : 'Quiet and thoughtful astrological guidance for other dimensions of your life.'

  return (
    <div className={`space-y-12 ${className}`}>
      <SectionHeading title={title} body={body} align="left" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((service, idx) => (
          <ServiceCard
            key={service.slug}
            service={service}
            locale={locale}
            variant={idx === 1 ? 'tinted' : 'minimal'}
          />
        ))}
      </div>
    </div>
  )
}
