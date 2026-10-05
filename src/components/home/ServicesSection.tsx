import React from 'react'
import type { Locale } from '@/content/types'
import { services } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/services/ServiceCard'
import { TierTable } from '@/components/services/TierTable'

export interface ServicesSectionProps {
  locale: Locale
}

export function ServicesSection({ locale }: ServicesSectionProps) {
  const dict = getDictionary(locale)

  // Map services to dynamic card visual variants to avoid homogeneous rows
  const cardVariants: Array<'minimal' | 'tinted' | 'yantra'> = [
    'minimal',
    'tinted',
    'yantra',
    'tinted',
    'minimal',
    'yantra',
    'minimal',
    'tinted',
    'yantra',
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow={dict.services.eyebrow}
            title={dict.services.title}
            body={dict.services.subtitle}
          />
        </div>

        {/* 9 Services Grid with visual variation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              locale={locale}
              variant={cardVariants[index % cardVariants.length]}
            />
          ))}
        </div>

        {/* Consultation Formats & Transparent Flat Fee */}
        <div className="pt-12 border-t border-line space-y-10">
          <div className="max-w-2xl">
            <h3 className="font-serif text-2xl md:text-3xl text-text-primary font-medium">
              {locale === 'hi' ? 'सत्र प्रारूप एवं शुल्क' : 'Session Formats and Fee Structure'}
            </h3>
            <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
              {locale === 'hi'
                ? 'प्रत्येक सत्र का समय और प्रारूप आपके मुख्य प्रश्नों की गंभीरता के अनुसार तय होता है। किसी भी अतिरिक्त या अप्रत्याशित शुल्क का कोई प्रावधान नहीं है।'
                : 'Session duration is tailored to the depth of your inquiries. There are no surprise fees or undisclosed charges.'}
            </p>
          </div>

          <TierTable locale={locale} />
        </div>
      </div>
    </section>
  )
}
