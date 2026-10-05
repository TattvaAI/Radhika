'use client'

import React, { useState } from 'react'
import type { Locale } from '@/content/types'
import { LagnaKundli } from '@/components/ui/LagnaKundli'

interface HouseDetail {
  num: number
  devanagari: string
  name: string
  karaka: string
  signification: { hi: string; en: string }
  consultationFocus: { hi: string; en: string }
}

const HOUSE_DATA: HouseDetail[] = [
  {
    num: 1,
    devanagari: 'प्रथम भाव • तनु',
    name: 'Tanu Bhava (Ascendant)',
    karaka: 'सूर्य (Surya / Sun)',
    signification: {
      hi: 'शारीरिक संरचना, स्वभाव, जीवन शक्ति, आत्मविश्वास एवं समग्र व्यक्तिगत पहचान।',
      en: 'Physical constitution, natural disposition, vitality, self identity, and core temperament.',
    },
    consultationFocus: {
      hi: 'जीवन की सही दिशा, मानसिक स्थिरता एवं आंतरिक शक्ति का आकलन।',
      en: 'Life direction, mental equilibrium, and core resilience.',
    },
  },
  {
    num: 2,
    devanagari: 'द्वितीय भाव • धन',
    name: 'Dhana Bhava (Wealth & Voice)',
    karaka: 'बृहस्पति (Guru / Jupiter)',
    signification: {
      hi: 'संचित धन, पारिवारिक परिवेश, वाणी का प्रभाव एवं वित्तीय स्थिरता।',
      en: 'Accumulated assets, lineage harmony, speech resonance, and monetary stability.',
    },
    consultationFocus: {
      hi: 'दीर्घकालिक पूंजी सुरक्षा, वित्तीय चक्र एवं पारिवारिक उत्तरदायित्व।',
      en: 'Long-term fiscal security, capital timing, and ancestral responsibilities.',
    },
  },
  {
    num: 3,
    devanagari: 'तृतीय भाव • सहज',
    name: 'Sahaja Bhava (Courage)',
    karaka: 'मंगल (Mangal / Mars)',
    signification: {
      hi: 'पुरुषार्थ, पराक्रम, छोटे भाई-बहन, अल्पकालिक यात्राएं एवं सम्प्रेषण।',
      en: 'Initiative, purposeful effort, siblings, short journeys, and tactical communication.',
    },
    consultationFocus: {
      hi: 'नए उद्यम में पहल, लेखन व कलात्मक सम्प्रेषण के अनुकूल अवसर।',
      en: 'Initiating new ventures, media timing, and proactive undertakings.',
    },
  },
  {
    num: 4,
    devanagari: 'चतुर्थ भाव • सुख',
    name: 'Sukha Bhava (Domestic Peace)',
    karaka: 'चन्द्र (Chandra / Moon)',
    signification: {
      hi: 'मानसिक शांति, मातृसुख, अचल संपत्ति, भूमि, गृह निर्माण एवं वाहन।',
      en: 'Inner serenity, maternal harmony, landed property, domestic sanctuary, and real estate.',
    },
    consultationFocus: {
      hi: 'गृह निर्माण, संपत्ति क्रय-विक्रय एवं पारिवारिक सामंजस्य।',
      en: 'Property acquisition, home construction timing, and domestic peace.',
    },
  },
  {
    num: 5,
    devanagari: 'पंचम भाव • सुत',
    name: 'Suta Bhava (Intellect & Dharma)',
    karaka: 'बृहस्पति (Guru / Jupiter)',
    signification: {
      hi: 'पूर्वपुण्य, मेधा शक्ति, उच्च शिक्षा, रचनात्मक प्रतिभा एवं संतान सुख।',
      en: 'Cognitive intellect, creative progeny, advanced scholarship, and past merit discernment.',
    },
    consultationFocus: {
      hi: 'प्रतियोगी परीक्षा, उच्च अध्ययन क्षेत्र का चयन एवं बौद्धिक निर्णय।',
      en: 'Academic examinations, higher education majors, and critical decisions.',
    },
  },
  {
    num: 6,
    devanagari: 'षष्ठ भाव • रिपु',
    name: 'Ripu Bhava (Stamina & Obstacles)',
    karaka: 'मंगल / शनि (Mangal & Shani)',
    signification: {
      hi: 'दैनिक दिनचर्या, शारीरिक प्रतिरोधक क्षमता, ऋण, कानूनी वाद एवं प्रतिस्पर्धा।',
      en: 'Daily routine discipline, vitality stamina, debts, disputes, and competitive endurance.',
    },
    consultationFocus: {
      hi: 'संवेदनशील स्वास्थ्य समयावधि, कानूनी परामर्श एवं कार्यस्थल चुनौतियां।',
      en: 'Sensitive health periods, legal navigation, and workplace resistance.',
    },
  },
  {
    num: 7,
    devanagari: 'सप्तम भाव • जाया',
    name: 'Jaya Bhava (Partnership & Marriage)',
    karaka: 'शुक्र (Shukra / Venus)',
    signification: {
      hi: 'वैवाहिक जीवन, जीवनसाथी का स्वभाव, व्यावसायिक साझेदारी एवं सामाजिक सम्बन्ध।',
      en: 'Sacred matrimony, relational dynamics, business alliances, and contractual harmony.',
    },
    consultationFocus: {
      hi: 'कुंडली मिलान, विवाह का उपयुक्त समय एवं व्यापारिक साझेदारी।',
      en: 'Compatibility matching, marriage timing, and collaborative commercial pacts.',
    },
  },
  {
    num: 8,
    devanagari: 'अष्टम भाव • रन्ध्र',
    name: 'Randhra Bhava (Transformation)',
    karaka: 'शनि (Shani / Saturn)',
    signification: {
      hi: 'आयु, गुप्त ज्ञान, अप्रत्याशित परिवर्तन, शोधवृत्ति एवं गहरा आत्मनिरीक्षण।',
      en: 'Longevity, esoteric wisdom, systemic transitions, and sudden life shifts.',
    },
    consultationFocus: {
      hi: 'अचानक आने वाले बदलावों में संतुलन, संकट प्रबंधन एवं गहन आत्मचिंतन।',
      en: 'Navigating life disruptions, stress mitigation, and introspective clarity.',
    },
  },
  {
    num: 9,
    devanagari: 'नवम भाव • भाग्य',
    name: 'Bhagya Bhava (Grace & Higher Truth)',
    karaka: 'बृहस्पति / सूर्य (Guru & Surya)',
    signification: {
      hi: 'धर्म, गुरु कृपा, नैतिक दृष्टि, उच्च दार्शनिक ज्ञान एवं सुदूर तीर्थयात्रा।',
      en: 'Dharmic alignment, ethical worldview, higher teachers, spiritual merit, and pilgrimage.',
    },
    consultationFocus: {
      hi: 'भाग्य चक्र का उदय, गुरु मार्गदर्शन एवं नैतिक संशय निवारण।',
      en: 'Periods of spiritual grace, ethical orientation, and long-range destiny.',
    },
  },
  {
    num: 10,
    devanagari: 'दशम भाव • कर्म',
    name: 'Karma Bhava (Vocation & Honor)',
    karaka: 'सूर्य / शनि / बुध (Surya & Shani)',
    signification: {
      hi: 'आजीविका, सामाजिक प्रतिष्ठा, अधिकार, नेतृत्व एवं कर्म का दायरा।',
      en: 'Public authority, career apex, societal contribution, profession, and active legacy.',
    },
    consultationFocus: {
      hi: 'पद परिवर्तन, व्यवसाय व नौकरी में सही दिशा, पदोन्नति का समय।',
      en: 'Career transition timing, executive leadership choices, and public trajectory.',
    },
  },
  {
    num: 11,
    devanagari: 'एकादश भाव • आय',
    name: 'Aya Bhava (Aspirations & Gains)',
    karaka: 'बृहस्पति (Guru / Jupiter)',
    signification: {
      hi: 'आर्थिक लाभ, सामाजिक संपर्क, दीर्घकालिक लक्ष्य एवं महत्वाकांक्षाओं की पूर्ति।',
      en: 'Financial expansion, societal circles, enterprise rewards, and realized hopes.',
    },
    consultationFocus: {
      hi: 'लाभ भाव का समय चक्र, व्यापार विस्तार एवं बड़े नेटवर्क का सहयोग।',
      en: 'Cycles of capital expansion, institutional alliances, and realization of goals.',
    },
  },
  {
    num: 12,
    devanagari: 'द्वादश भाव • व्यय',
    name: 'Vyaya Bhava (Solitude & Liberation)',
    karaka: 'शनि / केतु (Shani & Ketu)',
    signification: {
      hi: 'एकांत, आत्मचिंतन, विदेश गमन, मोक्ष साधना एवं अनावश्यक ऊर्जा क्षय।',
      en: 'Restful solitude, overseas relocation, inward liberation, subconscious release.',
    },
    consultationFocus: {
      hi: 'विदेश यात्रा या प्रवास, आध्यात्मिक शांति एवं व्यर्थ चिंताओं से मुक्ति।',
      en: 'Foreign settlement timing, meditative retreats, and energetic consolidation.',
    },
  },
]

export function InteractiveKundliExplorer({ locale }: { locale: Locale }) {
  const isHi = locale === 'hi'
  const [selectedHouse, setSelectedHouse] = useState<number>(1)
  const [lagnaRashi, setLagnaRashi] = useState<number>(1)

  const activeData = HOUSE_DATA.find((h) => h.num === selectedHouse) || HOUSE_DATA[0]

  const rashis = [
    { num: 1, name: 'मेष (Aries)' },
    { num: 2, name: 'वृषभ (Taurus)' },
    { num: 3, name: 'मिथुन (Gemini)' },
    { num: 4, name: 'कर्क (Cancer)' },
    { num: 5, name: 'सिंह (Leo)' },
    { num: 6, name: 'कन्या (Virgo)' },
    { num: 7, name: 'तुला (Libra)' },
    { num: 8, name: 'वृश्चिक (Scorpio)' },
    { num: 9, name: 'धनु (Sagittarius)' },
    { num: 10, name: 'मकर (Capricorn)' },
    { num: 11, name: 'कुम्भ (Aquarius)' },
    { num: 12, name: 'मीन (Pisces)' },
  ]

  return (
    <section className="py-24 md:py-32 bg-surface-raised/40 border-b border-line relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.2em] text-turmeric font-mono font-medium">
              [ {isHi ? 'वैदिक भाव अध्ययन' : 'The 12 Bhavas of Jyotish'} ]
            </span>
            <span className="h-px w-10 bg-turmeric/40" />
            <span className="text-xs font-mono text-text-muted">Parashara System</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-text-primary font-medium tracking-tight leading-[1.15]">
            {isHi ? 'जन्म पत्री के द्वादश भाव: जीवन का मानचित्र' : 'The Architecture of Your Chart: 12 Houses of Life'}
          </h2>

          <p className="font-sans text-base text-text-muted leading-relaxed max-w-[65ch]">
            {isHi
              ? 'जन्म कुंडली कोई भाग्य रेखा की बेड़ी नहीं, बल्कि आपके समय चक्र और स्वाभाविक प्रवृत्तियों का सटीक ढांचा है। नीचे किसी भी भाव पर क्लिक करके देखें कि वह आपके जीवन के किस क्षेत्र को प्रकाशित करता है।'
              : 'A Vedic chart is not an unalterable verdict; it is an exact cosmic coordinate of active planetary influences. Select any house below to inspect its domain and consultation relevance.'}
          </p>
        </div>

        {/* Interactive Studio Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Visual Chart (Clickable Houses) */}
          <div className="lg:col-span-6 bg-surface border border-line p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-line/60 pb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-turmeric">
                {isHi ? 'लग्न कुण्डली (उत्तर भारतीय प्रारूप)' : 'North Indian Diamond Chart'}
              </span>

              {/* Lagna Selector */}
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <span>{isHi ? 'लग्न:' : 'Lagna:'}</span>
                <select
                  value={lagnaRashi}
                  onChange={(e) => setLagnaRashi(Number(e.target.value))}
                  className="bg-surface-raised border border-line text-text-primary px-2 py-1 text-xs rounded-none focus:outline-none focus:border-turmeric"
                >
                  {rashis.map((r) => (
                    <option key={r.num} value={r.num}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* The Clickable Lagna Kundli */}
            <div className="flex items-center justify-center p-4 bg-surface-raised/30 border border-line/50">
              <LagnaKundli
                size={340}
                lagnaRashi={lagnaRashi}
                highlightHouse={selectedHouse}
              />
            </div>

            {/* Quick 12 House Selector Buttons */}
            <div className="space-y-2 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted block">
                {isHi ? 'भाव चुनें (1 से 12):' : 'Select House to Inspect (1 to 12):'}
              </span>
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-1.5">
                {HOUSE_DATA.map((h) => {
                  const isActive = selectedHouse === h.num
                  return (
                    <button
                      key={h.num}
                      type="button"
                      onClick={() => setSelectedHouse(h.num)}
                      className={`py-2 text-xs font-mono border transition-all text-center ${
                        isActive
                          ? 'border-turmeric bg-turmeric text-ink font-bold'
                          : 'border-line bg-surface text-text-muted hover:border-turmeric/60 hover:text-text-primary'
                      }`}
                    >
                      {h.num}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Deep Scholarly House Dossier */}
          <div className="lg:col-span-6 bg-surface border border-line p-8 sm:p-10 space-y-8 min-h-[460px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* House Header Meta */}
              <div className="flex items-center justify-between border-b border-line pb-4">
                <div>
                  <span className="text-[11px] font-mono text-turmeric uppercase tracking-[0.2em] block">
                    [ {isHi ? `भाव संख्या ${activeData.num}` : `House No. 0${activeData.num}`} ]
                  </span>
                  <h3 className="font-serif text-3xl text-text-primary font-medium mt-1">
                    {isHi ? activeData.devanagari : activeData.name}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono text-text-muted block uppercase">
                    {isHi ? 'कारक ग्रह' : 'Karaka Planet'}
                  </span>
                  <span className="text-xs font-mono text-turmeric font-medium mt-0.5 block">
                    {activeData.karaka}
                  </span>
                </div>
              </div>

              {/* What this house governs */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.15em] text-text-muted font-mono block">
                  {isHi ? 'प्राथमिक कारकत्व (Governs):' : 'Core Significations:'}
                </span>
                <p className="font-sans text-base text-text-primary leading-relaxed">
                  {activeData.signification[locale]}
                </p>
              </div>

              {/* Consultation Focus */}
              <div className="p-5 bg-surface-raised border border-line space-y-2">
                <span className="text-[11px] uppercase tracking-[0.15em] text-turmeric font-mono font-medium block">
                  {isHi ? 'परामर्श में उपयोग:' : 'Practical Consultation Relevance:'}
                </span>
                <p className="font-sans text-sm text-text-muted leading-relaxed">
                  {activeData.consultationFocus[locale]}
                </p>
              </div>
            </div>

            {/* Bottom Insight Quote */}
            <div className="pt-6 border-t border-line/60 flex items-center justify-between text-xs font-mono text-text-muted/70">
              <span>{isHi ? 'अध्ययन पद्धति: महर्षि पाराशर' : 'Methodology: Brihat Parashara'}</span>
              <span className="text-turmeric">{isHi ? 'सीधी जन्म पत्री विवेचना' : 'Direct Chart Reading'}</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
