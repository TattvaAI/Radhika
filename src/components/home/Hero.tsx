'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/content/types'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { Astrolabe } from '@/components/ui/Astrolabe'
import { GhostButton } from '@/components/ui/GhostButton'

export interface HeroProps {
  locale: Locale
}

interface RashiReflection {
  name: { hi: string; en: string }
  sanskrit: string
  ruler: { hi: string; en: string }
  element: { hi: string; en: string }
  wisdom: { hi: string; en: string }
}

const RASHI_REFLECTIONS: Record<string, RashiReflection> = {
  aries: {
    name: { hi: 'मेष राशि', en: 'Mesha (Aries)' },
    sanskrit: 'मेष • अग्नि तत्व',
    ruler: { hi: 'मंगल (Mars)', en: 'Mars (Mangal)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    wisdom: {
      hi: 'उतावली में लिए गए निर्णयों से बचें। इस समय ऊर्जा को संचित कर स्पष्ट कर्म पर केंद्रित करें।',
      en: 'Channel natural drive into disciplined execution rather than impulsive reactions.',
    },
  },
  taurus: {
    name: { hi: 'वृषभ राशि', en: 'Vrishabha (Taurus)' },
    sanskrit: 'वृषभ • पृथ्वी तत्व',
    ruler: { hi: 'शुक्र (Venus)', en: 'Venus (Shukra)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    wisdom: {
      hi: 'वित्तीय और पारिवारिक मामलों में धैर्य रखें। स्थिरता ही आपकी सबसे बड़ी शक्ति है।',
      en: 'Patience in commercial and domestic matters yields enduring stability.',
    },
  },
  gemini: {
    name: { hi: 'मिथुन राशि', en: 'Mithuna (Gemini)' },
    sanskrit: 'मिथुन • वायु तत्व',
    ruler: { hi: 'बुध (Mercury)', en: 'Mercury (Budha)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    wisdom: {
      hi: 'संवाद में स्पष्टता रखें। बिखरे हुए विचारों को किसी एक महत्वपूर्ण लक्ष्य पर केंद्रित करें।',
      en: 'Filter scattered communications into focused intellectual output.',
    },
  },
  cancer: {
    name: { hi: 'कर्क राशि', en: 'Karka (Cancer)' },
    sanskrit: 'कर्क • जल तत्व',
    ruler: { hi: 'चन्द्र (Moon)', en: 'Moon (Chandra)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    wisdom: {
      hi: 'मन की चंचलता को शांत करें। अपनी सहज समझ और भावनात्मक सीमाओं का सम्मान करें।',
      en: 'Honor emotional boundaries and allow intuitive instincts to settle calmly.',
    },
  },
  leo: {
    name: { hi: 'सिंह राशि', en: 'Simha (Leo)' },
    sanskrit: 'सिंह • अग्नि तत्व',
    ruler: { hi: 'सूर्य (Sun)', en: 'Sun (Surya)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    wisdom: {
      hi: 'सच्चा नेतृत्व अहंकार रहित सेवा में है। अपने उत्तरदायित्वों को गरिमा से निभाएं।',
      en: 'True authority expresses through quiet responsibility, not overt pride.',
    },
  },
  virgo: {
    name: { hi: 'कन्या राशि', en: 'Kanya (Virgo)' },
    sanskrit: 'कन्या • पृथ्वी तत्व',
    ruler: { hi: 'बुध (Mercury)', en: 'Mercury (Budha)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    wisdom: {
      hi: 'अति-आलोचनात्मक सोच से बचें। व्यावहारिक समाधानों को शांति से लागू करें।',
      en: 'Balance meticulous detail with forgiveness of imperfect circumstances.',
    },
  },
  libra: {
    name: { hi: 'तुला राशि', en: 'Tula (Libra)' },
    sanskrit: 'तुला • वायु तत्व',
    ruler: { hi: 'शुक्र (Venus)', en: 'Venus (Shukra)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    wisdom: {
      hi: 'संतुलन बाहर नहीं, अपने भीतर खोजें। सभी पक्षों को सुनकर निष्पक्ष निर्णय लें।',
      en: 'Find equilibrium within before seeking harmony in outward alliances.',
    },
  },
  scorpio: {
    name: { hi: 'वृश्चिक राशि', en: 'Vrischika (Scorpio)' },
    sanskrit: 'वृश्चिक • जल तत्व',
    ruler: { hi: 'मंगल (Mars)', en: 'Mars (Mangal)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    wisdom: {
      hi: 'पुराने अवरोधों को विसर्जित करें। आत्म-शोधन से गहरी ऊर्जा जागृत होती है।',
      en: 'Release past grievances; transformative resilience begins with quiet surrender.',
    },
  },
  sagittarius: {
    name: { hi: 'धनु राशि', en: 'Dhanu (Sagittarius)' },
    sanskrit: 'धनु • अग्नि तत्व',
    ruler: { hi: 'बृहस्पति (Jupiter)', en: 'Jupiter (Guru)' },
    element: { hi: 'अग्नि (Fire)', en: 'Fire (Agni)' },
    wisdom: {
      hi: 'अपने नैतिक आदर्शों पर अडिग रहें। व्यापक दृष्टिकोण से वर्तमान अड़चनें छोटी लगेंगी।',
      en: 'Hold to dharmic principles; an expansive worldview contextualizes immediate friction.',
    },
  },
  capricorn: {
    name: { hi: 'मकर राशि', en: 'Makara (Capricorn)' },
    sanskrit: 'मकर • पृथ्वी तत्व',
    ruler: { hi: 'शनि (Saturn)', en: 'Saturn (Shani)' },
    element: { hi: 'पृथ्वी (Earth)', en: 'Earth (Prithvi)' },
    wisdom: {
      hi: 'धैर्य और निरंतरता से ही बड़ी उपलब्धियां संभव हैं। समय पर भरोसा रखें।',
      en: 'Sustained, humble perseverance builds enduring legacies. Trust the long cycle.',
    },
  },
  aquarius: {
    name: { hi: 'कुम्भ राशि', en: 'Kumbha (Aquarius)' },
    sanskrit: 'कुम्भ • वायु तत्व',
    ruler: { hi: 'शनि (Saturn)', en: 'Saturn (Shani)' },
    element: { hi: 'वायु (Air)', en: 'Air (Vayu)' },
    wisdom: {
      hi: 'व्यापक सामाजिक हित के लिए सोचें। अपनी विशिष्ट अंतर्दृष्टि को विनम्रता से साझा करें।',
      en: 'Direct unconventional insights toward common welfare with quiet humility.',
    },
  },
  pisces: {
    name: { hi: 'मीन राशि', en: 'Meena (Pisces)' },
    sanskrit: 'मीन • जल तत्व',
    ruler: { hi: 'बृहस्पति (Jupiter)', en: 'Jupiter (Guru)' },
    element: { hi: 'जल (Water)', en: 'Water (Jala)' },
    wisdom: {
      hi: 'अनावश्यक चिंताओं से मुक्त होकर वर्तमान क्षण में जिएं। आंतरिक साधना में शांति मिलेगी।',
      en: 'Release mental attachments to hypothetical futures; peace lives in presence.',
    },
  },
}

export function Hero({ locale }: HeroProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'
  const [selectedRashi, setSelectedRashi] = useState('aries')

  const reflection = RASHI_REFLECTIONS[selectedRashi]

  return (
    <section className="relative overflow-hidden bg-surface pt-16 md:pt-24 pb-20 md:pb-32 border-b border-line min-h-[92dvh] flex items-center">
      
      {/* Background Soft Celestial Radial Aura */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-turmeric/[0.035] rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Editorial Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Sacred Invocational Micro-Header */}
            <div className="flex items-center gap-3">
              <span className="font-serif text-xs text-turmeric tracking-widest uppercase">
                {isHi ? '« तमसो मा ज्योतिर्गमय »' : '« Asato Ma Sadgamaya »'}
              </span>
              <span className="h-px w-12 bg-turmeric/40" />
              <span className="font-mono text-[10px] text-text-muted/80 uppercase tracking-widest">
                Ambala, Haryana &bull; 30.3782&deg; N, 76.7767&deg; E
              </span>
            </div>

            {/* 1. Eyebrow */}
            <div>
              <span className="inline-block text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium">
                {dict.hero.eyebrow}
              </span>
            </div>

            {/* 2. Headline (Max 2 lines, leading-[1.15]) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-text-primary font-medium tracking-tight leading-[1.15]">
              {dict.hero.headline}
            </h1>

            {/* 3. Subtext */}
            <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed max-w-[55ch]">
              {dict.hero.subtext}
            </p>

            {/* 4. Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href={`/${locale}#booking`}
                className="inline-flex items-center justify-center bg-madder text-paper px-8 py-4 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none hover:bg-madder/90 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-madder text-center shadow-lg shadow-madder/20"
              >
                {dict.hero.primaryCta}
              </Link>

              <GhostButton
                href={`/${locale}#services`}
                variant="line"
                className="px-8 py-4 text-xs"
              >
                {dict.hero.secondaryCta}
              </GhostButton>
            </div>

            {/* Interactive Planetary Insight Strip */}
            <div className="pt-6 border-t border-line/60 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-turmeric">
                  [ {isHi ? 'राशि चिंतन एवं अंतर्दृष्टि' : 'Select Moon Sign for Transit Contemplation'} ]
                </span>
                <select
                  value={selectedRashi}
                  onChange={(e) => setSelectedRashi(e.target.value)}
                  className="bg-surface-raised border border-line text-text-primary px-3 py-1 text-xs font-mono rounded-none focus:outline-none focus:border-turmeric cursor-pointer"
                >
                  <option value="aries">{isHi ? 'मेष (Aries)' : 'Mesha (Aries)'}</option>
                  <option value="taurus">{isHi ? 'वृषभ (Taurus)' : 'Vrishabha (Taurus)'}</option>
                  <option value="gemini">{isHi ? 'मिथुन (Gemini)' : 'Mithuna (Gemini)'}</option>
                  <option value="cancer">{isHi ? 'कर्क (Cancer)' : 'Karka (Cancer)'}</option>
                  <option value="leo">{isHi ? 'सिंह (Leo)' : 'Simha (Leo)'}</option>
                  <option value="virgo">{isHi ? 'कन्या (Virgo)' : 'Kanya (Virgo)'}</option>
                  <option value="libra">{isHi ? 'तुला (Libra)' : 'Tula (Libra)'}</option>
                  <option value="scorpio">{isHi ? 'वृश्चिक (Scorpio)' : 'Vrischika (Scorpio)'}</option>
                  <option value="sagittarius">{isHi ? 'धनु (Sagittarius)' : 'Dhanu (Sagittarius)'}</option>
                  <option value="capricorn">{isHi ? 'मकर (Capricorn)' : 'Makara (Capricorn)'}</option>
                  <option value="aquarius">{isHi ? 'कुम्भ (Aquarius)' : 'Kumbha (Aquarius)'}</option>
                  <option value="pisces">{isHi ? 'मीन (Pisces)' : 'Meena (Pisces)'}</option>
                </select>
              </div>

              {/* Reflection Box */}
              <div className="p-4 bg-surface-raised/70 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-turmeric font-semibold">{reflection.sanskrit}</span>
                    <span className="text-text-muted/60">&bull;</span>
                    <span className="text-text-muted">{reflection.ruler[locale]}</span>
                  </div>
                  <p className="font-sans text-text-primary/90 leading-relaxed max-w-[60ch]">
                    {reflection.wisdom[locale]}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Monumental Astrolabe Instrument */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              {/* Outer delicate frame markings */}
              <div className="absolute inset-0 border border-line/40 pointer-events-none" />
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-turmeric" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-turmeric" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-turmeric" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-turmeric" />

              {/* The Live Astrolabe */}
              <Astrolabe size={480} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
