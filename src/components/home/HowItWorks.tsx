import React from 'react'
import type { Locale } from '@/content/types'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'

export interface HowItWorksProps {
  locale: Locale
}

export function HowItWorks({ locale }: HowItWorksProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  const stepSanskritMeta = [
    { sanskrit: isHi ? 'विवरण संग्रह' : 'Vivaran Sangraha', concept: isHi ? 'जन्म तिथि, समय, स्थान' : 'Birth Particulars' },
    { sanskrit: isHi ? 'समय निर्धारण' : 'Kala Nirdharana', concept: isHi ? 'सत्र समय आरक्षण' : 'Slot Allocation' },
    { sanskrit: isHi ? 'परामर्श विमर्श' : 'Paramarsha Vimarsh', concept: isHi ? 'व्यक्तिगत संवाद' : 'Unhurried Dialogue' },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow={dict.howItWorks.eyebrow}
          title={dict.howItWorks.title}
          body={
            isHi
              ? 'जन्म पत्री का विश्लेषण शांत वातावरण और एकाग्रता की मांग करता है। यहाँ प्रत्येक सत्र का क्रम व्यवस्थित और पारदर्शी है।'
              : 'Birth chart examination requires uninterrupted calm and discipline. Every consultation follows a structured, transparent sequence.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {dict.howItWorks.steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-surface p-8 sm:p-10 flex flex-col justify-between space-y-8 rounded-none transition-colors duration-200 hover:bg-surface-raised relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl text-turmeric font-medium block">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-text-muted/60 uppercase tracking-widest border border-line px-2 py-0.5">
                    {stepSanskritMeta[idx].sanskrit}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-text-primary font-medium tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-turmeric/80 uppercase tracking-wider block">
                    [ {stepSanskritMeta[idx].concept} ]
                  </span>
                </div>

                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-line/40 flex items-center justify-between text-[10px] font-mono text-text-muted/60">
                <span>Phase 0{idx + 1} of 03</span>
                <span className="text-turmeric/70">&bull; Direct Study</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
