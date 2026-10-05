'use client'

import React from 'react'
import type { Locale } from '@/content/types'
import { Yantra } from './Yantra'

export interface PortraitSlotProps {
  locale: Locale
  className?: string
}

export function PortraitSlot({ locale, className = '' }: PortraitSlotProps) {
  const isHi = locale === 'hi'

  return (
    <div
      className={`relative border border-line bg-surface p-8 sm:p-10 flex flex-col justify-between aspect-[3/4] rounded-none overflow-hidden ${className}`}
    >
      {/* Corner Heritage Brackets */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-turmeric/70" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-turmeric/70" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-turmeric/70" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-turmeric/70" />

      {/* Header Seal */}
      <div className="flex items-center justify-between border-b border-line/60 pb-4 text-xs font-mono">
        <span className="text-turmeric uppercase tracking-[0.2em]">
          [ {isHi ? 'अध्ययन पीठ' : 'Studio Monograph'} ]
        </span>
        <span className="text-text-muted/60 uppercase">
          Est. 2022
        </span>
      </div>

      {/* Central Sacred Geometry & Practitioner Emblem */}
      <div className="my-auto py-6 flex flex-col items-center text-center space-y-6">
        <div className="relative p-6 bg-surface-raised border border-line text-turmeric">
          <Yantra size={140} animate={false} />
        </div>

        <div className="space-y-2">
          <h4 className="font-serif text-2xl text-text-primary font-medium tracking-tight">
            {isHi ? 'राधिका शर्मा' : 'Radhika Sharma'}
          </h4>
          <span className="text-xs uppercase tracking-[0.2em] text-turmeric font-mono block">
            {isHi ? 'ज्योतिषी • अंबाला, हरियाणा' : 'Astrologer • Ambala, Haryana'}
          </span>
        </div>

        <p className="font-sans text-xs text-text-muted leading-relaxed max-w-[28ch]">
          {isHi
            ? 'पाराशर ज्योतिष परंपरा का सतत अध्ययन एवं प्रामाणिक जन्म पत्री विश्लेषण।'
            : 'Dedicated research in Parashara Jyotish and individual birth chart counseling.'}
        </p>
      </div>

      {/* Footer Verified Practice Record */}
      <div className="pt-4 border-t border-line/60 flex items-center justify-between text-[11px] font-mono text-text-muted/80">
        <span>12 Families Consulted</span>
        <span className="text-turmeric">Verified Record</span>
      </div>
    </div>
  )
}
