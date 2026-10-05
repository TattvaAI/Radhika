import type { Locale } from '@/content/types'
import { astrologer, flatFeeInr } from '@/content/content'

interface CredentialsTableProps {
  locale: Locale
  className?: string
}

export function CredentialsTable({ locale, className = '' }: CredentialsTableProps) {
  const isHi = locale === 'hi'

  const practiceFacts = [
    {
      id: 'duration',
      label: isHi ? 'अभ्यास अवधि' : 'Practice Duration',
      value: isHi ? `${astrologer.yearsInPractice} वर्ष` : `${astrologer.yearsInPractice} Years`,
      detail: isHi
        ? 'चार वर्षों का सतत अध्ययन एवं प्रामाणिक जन्म पत्री विश्लेषण।'
        : 'Four years of dedicated study and direct birth chart analysis.',
    },
    {
      id: 'location',
      label: isHi ? 'स्थान' : 'Location',
      value: `${astrologer.city}, ${astrologer.region}`,
      detail: isHi
        ? 'अंबाला, हरियाणा स्थित निजी अभ्यास केंद्र।'
        : 'Private astrology practice based in Ambala, Haryana.',
    },
    {
      id: 'languages',
      label: isHi ? 'परामर्श भाषाएं' : 'Consultation Languages',
      value: isHi ? 'हिंदी एवं अंग्रेजी' : 'Hindi and English',
      detail: isHi
        ? 'दोनों भाषाओं में स्पष्ट और सहज संवाद।'
        : 'Unhurried and fluent consultation in either language.',
    },
    {
      id: 'fee',
      label: isHi ? 'निश्चित शुल्क' : 'Standard Fee',
      value: `INR ${flatFeeInr}`,
      detail: isHi
        ? 'एकल निश्चित परामर्श शुल्क। कोई अप्रत्याशित या गुप्त शुल्क नहीं।'
        : 'Single flat consultation fee with no hidden charges.',
    },
  ]

  return (
    <div className={`border border-ink-line bg-ink-raised/40 rounded-none p-6 md:p-8 lg:p-10 ${className}`}>
      <div className="flex flex-col gap-3 pb-8 border-b border-ink-line">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <span className="text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium">
            {isHi ? 'प्रमाणन एवं अभ्यास अभिलेख' : 'Credentials and Practice Record'}
          </span>
          <span className="inline-block border border-dashed border-turmeric/60 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-turmeric font-mono rounded-none">
            {isHi ? 'स्थिति: अनुरोध पर उपलब्ध' : 'Status: Available on Request'}
          </span>
        </div>
        <p className="font-sans text-paper/85 text-sm md:text-base leading-relaxed max-w-[65ch]">
          {isHi
            ? 'औपचारिक उपाधियां और विस्तृत अध्ययन संदर्भ अनुरोध पर सीधे साझा किए जाते हैं। इस वेबसाइट पर कोई भी अपुष्ट प्रमाण पत्र, मानद उपाधि या गुरु परंपरा का काल्पनिक दावा नहीं किया गया है।'
            : 'Detailed study records and foundational textual references are shared directly upon personal request. We do not publish unverified certifications, honorary degrees, or invented institutional credentials.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-line my-8">
        {practiceFacts.map((fact) => (
          <div key={fact.id} className="bg-ink-raised/90 p-6 md:p-8 flex flex-col justify-between rounded-none">
            <div>
              <span className="text-[11px] uppercase tracking-[0.15em] text-turmeric/80 block mb-2 font-sans">
                {fact.label}
              </span>
              <p className="font-serif text-2xl md:text-3xl text-paper mb-3">
                {fact.value}
              </p>
            </div>
            <p className="font-sans text-sm text-paper/70 leading-relaxed">
              {fact.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-ink-line/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-sans text-paper/60">
        <span>
          {isHi
            ? 'कुल परामर्श: 12 परिवार (व्यक्तिगत एवं पूर्णतः गोपनीय)'
            : 'Total consultations: 12 families (strictly private and confidential)'}
        </span>
        <span className="font-mono text-turmeric/70">
          [Ambala, Haryana]
        </span>
      </div>
    </div>
  )
}
