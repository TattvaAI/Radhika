import Link from 'next/link'
import type { Locale } from '@/content/types'
import { flatFeeInr, tiers } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { GhostButton } from '@/components/ui/GhostButton'

export interface TierTableProps {
  locale: Locale
  className?: string
  activeTierId?: string
}

export function TierTable({ locale, className = '', activeTierId }: TierTableProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  const tierSanskritLabels = {
    guidance: isHi ? 'प्रश्न विमर्श' : 'Prashna Vimarsh',
    consultation: isHi ? 'जन्म पत्री अध्ययन' : 'Janma Patrika Adhyayan',
    deep: isHi ? 'दशा-गोचर गम्भीर विमर्श' : 'Dasha-Gochar Vimarsh',
  }

  const selectLabel = isHi ? 'सत्र आरक्षित करें' : 'Select Session Format'

  return (
    <div className={`space-y-8 ${className}`}>
      {/* 3 Formats Archival Docket Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => {
          const isSelected = activeTierId === tier.id
          const label = tier.label[locale]
          const description = tier.description[locale]
          const sanskritTag = tierSanskritLabels[tier.id]

          return (
            <div
              key={tier.id}
              className={`flex flex-col justify-between border p-7 sm:p-8 bg-surface rounded-none transition-all duration-200 relative overflow-hidden ${
                isSelected
                  ? 'border-turmeric bg-surface-raised ring-1 ring-turmeric'
                  : 'border-line hover:border-turmeric/60'
              }`}
            >
              {/* Top Docket Header */}
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-line/60 pb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-turmeric">
                    [ 0{index + 1} &bull; {sanskritTag} ]
                  </span>
                  <span className="text-[11px] font-mono text-text-muted/70 uppercase">
                    {tier.minutes} {dict.services.minutes}
                  </span>
                </div>

                <div>
                  <h4 className="font-serif text-2xl text-text-primary font-medium tracking-tight">
                    {label}
                  </h4>
                  <p className="mt-3 text-sm text-text-muted font-sans leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Classical Scope Metadata */}
                <div className="pt-4 border-t border-line/50 space-y-2 text-xs font-mono text-text-muted/80">
                  <div className="flex items-center justify-between">
                    <span>{isHi ? 'माध्यम:' : 'Mode:'}</span>
                    <span className="text-text-primary">{isHi ? 'कॉल / व्हाट्सएप' : 'Call / WhatsApp'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{isHi ? 'गोपनीयता:' : 'Privacy:'}</span>
                    <span className="text-turmeric">{isHi ? 'शत प्रतिशत व्यक्तिगत' : '100% Confidential'}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-line/60">
                <GhostButton
                  href={`/${locale}#booking`}
                  className="w-full text-center justify-center text-xs uppercase tracking-[0.15em] py-3"
                  variant={isSelected ? 'turmeric' : 'line'}
                >
                  {selectLabel}
                </GhostButton>
              </div>
            </div>
          )
        })}
      </div>

      {/* Honest Flat Fee Notice Callout Styled as Authentic Practice Pledge */}
      <div className="border border-line bg-surface-raised/90 p-6 sm:p-8 rounded-none">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-turmeric rounded-none" />
              <h5 className="font-serif text-lg text-text-primary font-medium">
                {isHi ? `स्पष्ट एवं पारदर्शी परामर्श शुल्क: ₹${flatFeeInr}` : `Standard Flat Consultation Fee: INR ${flatFeeInr}`}
              </h5>
            </div>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              {isHi
                ? 'हम किसी भी प्रकार का गुप्त शुल्क, अनावश्यक रत्न क्रय की बाध्यता, या काल्पनिक शांति उपायों का व्यावसायिक दबाव नहीं बनाते। शुल्क केवल ज्योतिषी के अध्ययन एवं समर्पित परामर्श समय का सम्मान है।'
                : 'We never engage in surprise charges, mandatory commercial gemstone sales, or fear-based remedies. The consultation fee compensates only the practitioner focused study and dedicated time.'}
            </p>
          </div>

          <div className="shrink-0 self-start lg:self-auto">
            <Link
              href={`/${locale}#booking`}
              className="inline-flex items-center gap-2 border border-turmeric text-turmeric hover:bg-turmeric/10 px-6 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium transition-colors"
            >
              <span>{dict.cta.primary}</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
