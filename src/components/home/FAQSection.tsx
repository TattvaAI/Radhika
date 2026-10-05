'use client'

import React, { useState } from 'react'
import type { Locale } from '@/content/types'
import { faqs } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'

export interface FAQSectionProps {
  locale: Locale
}

export function FAQSection({ locale }: FAQSectionProps) {
  const dict = getDictionary(locale)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-28 bg-surface border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow={dict.faq.eyebrow}
          title={dict.faq.title}
          body={dict.faq.subtitle}
        />

        <div className="border-t border-line divide-y divide-line">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            const q = faq.question[locale]
            const a = faq.answer[locale]

            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between gap-6 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-turmeric"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-text-primary group-hover:text-turmeric transition-colors leading-snug">
                    {q}
                  </span>
                  <span
                    className="shrink-0 font-mono text-sm text-turmeric mt-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    {isOpen ? '[-]' : '[+]'}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-2">
                    <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-[65ch]">
                      {a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
