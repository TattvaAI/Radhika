'use client'

import React from 'react'
import Link from 'next/link'
import type { Locale, Service } from '@/content/types'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { GrahaIcon } from '@/components/ui/GrahaIcon'
import { Yantra } from '@/components/ui/Yantra'

export interface ServiceCardProps {
  service: Service
  locale: Locale
  variant?: 'minimal' | 'tinted' | 'yantra'
  className?: string
}

export function ServiceCard({
  service,
  locale,
  variant = 'minimal',
  className = '',
}: ServiceCardProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'
  const title = service.title[locale]
  const shortDesc = service.short[locale]
  const serviceHref = `/${locale}/services/${service.slug}`
  const durationUnit = dict.services.minutes

  return (
    <article
      className={`group relative flex flex-col justify-between border border-line bg-surface p-7 md:p-8 transition-all duration-300 hover:border-turmeric/70 rounded-none overflow-hidden ${
        variant === 'tinted' ? 'bg-surface-raised/80' : ''
      } ${className}`}
    >
      {/* Background Subtle Yantra Watermark for Yantra Variant */}
      {variant === 'yantra' && (
        <div
          className="pointer-events-none absolute -bottom-10 -right-10 opacity-[0.06] text-turmeric group-hover:opacity-[0.10] transition-opacity duration-300"
          aria-hidden="true"
        >
          <Yantra size={240} animate={false} />
        </div>
      )}

      {/* Top Sigil and Duration Metadata */}
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4 border-b border-line/60 pb-5">
          <div className="p-2.5 bg-surface-raised border border-line group-hover:border-turmeric/50 transition-colors">
            <GrahaIcon slug={service.slug} size={36} />
          </div>

          <div className="text-right">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-turmeric block">
              {service.durations.join(' / ')} {durationUnit}
            </span>
            <span className="text-[10px] font-mono text-text-muted/60 uppercase tracking-widest mt-0.5 block">
              {isHi ? 'सत्र अवधि' : 'Consultation'}
            </span>
          </div>
        </div>

        {/* Title and Short Description */}
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-text-primary font-medium tracking-tight group-hover:text-turmeric transition-colors">
            <Link href={serviceHref} className="focus:outline-none">
              {title}
            </Link>
          </h3>

          <p className="font-sans text-sm text-text-muted leading-relaxed max-w-[60ch]">
            {shortDesc}
          </p>
        </div>
      </div>

      {/* Footer Link & Action */}
      <div className="relative z-10 mt-8 pt-5 border-t border-line/60 flex items-center justify-between">
        <Link
          href={serviceHref}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-turmeric font-sans font-semibold hover:underline underline-offset-4 focus-visible:outline-turmeric"
        >
          <span>{dict.services.viewDetails}</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>

        <span className="text-[10px] font-mono text-text-muted/50">
          [ 0{service.durations[0]}m+ ]
        </span>
      </div>
    </article>
  )
}
