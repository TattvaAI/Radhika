import React from 'react'
import type { Locale } from '@/content/types'
import { astrologer } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CredentialsTable } from '@/components/pages/CredentialsTable'
import { PortraitSlot } from '@/components/ui/PortraitSlot'

export interface AboutSectionProps {
  locale: Locale
}

export function AboutSection({ locale }: AboutSectionProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  const storyParagraphs = astrologer.story[locale].split('\n\n')

  return (
    <section id="about" className="py-20 md:py-28 bg-surface border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow={dict.about.eyebrow}
          title={dict.about.title}
          body={dict.about.subtitle}
        />

        {/* Asymmetric Split: Story & Portrait Slot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 font-sans text-base text-text-primary/90 leading-relaxed max-w-[65ch]">
              {storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Disciplined practice commitment callout */}
            <div className="p-6 border-l-2 border-turmeric bg-surface-raised space-y-2 mt-8">
              <span className="text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium block">
                {isHi ? 'अभ्यास के मूल सिद्धांत' : 'Practice Principles'}
              </span>
              <p className="font-serif text-sm md:text-base text-text-primary italic leading-relaxed">
                {isHi
                  ? '« ज्योतिष डराने या नियति बांधने का माध्यम नहीं है। यह केवल समय की गति और व्यक्ति के स्वाभाविक स्वभाव को समझने का दर्पण है। »'
                  : '"Astrology is neither an instrument of fear nor an assertion of fatalism. It is a reflective mirror of planetary timing and personal disposition."'}
              </p>
            </div>
          </div>

          {/* Reserved Portrait Slot */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:mx-0">
            <PortraitSlot locale={locale} />
          </div>
        </div>

        {/* Practice facts and verified records table */}
        <div className="pt-8">
          <CredentialsTable locale={locale} />
        </div>
      </div>
    </section>
  )
}
