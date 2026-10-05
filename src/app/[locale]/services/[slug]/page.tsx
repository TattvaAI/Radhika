import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { LOCALES, isLocale, type Locale } from '@/content/types'
import { services, flatFeeInr } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { RelatedServices } from '@/components/services/RelatedServices'
import { GrahaIcon } from '@/components/ui/GrahaIcon'

export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    services.map((service) => ({
      locale,
      slug: service.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}

  const service = services.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: `${service.title[locale as Locale]} — Radhika Sharma Jyotish`,
    description: service.short[locale as Locale],
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const activeLocale = locale as Locale
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const dict = getDictionary(activeLocale)
  const isHi = activeLocale === 'hi'

  return (
    <article className="py-20 md:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation back */}
        <div>
          <Link
            href={`/${activeLocale}#services`}
            className="text-xs uppercase tracking-[0.2em] text-turmeric font-mono hover:underline inline-block mb-6"
          >
            &larr; {isHi ? 'समस्त सेवाएं' : 'All Services'}
          </Link>

          <div className="flex items-start gap-6">
            <div className="hidden sm:flex p-3 bg-surface-raised border border-line shrink-0 text-turmeric mt-2">
              <GrahaIcon slug={service.slug} size={48} />
            </div>
            <SectionHeading
              eyebrow={`${service.durations.join(' / ')} ${dict.services.minutes}`}
              title={service.title[activeLocale]}
              body={service.short[activeLocale]}
            />
          </div>
        </div>

        {/* Flat Fee Transparency Callout */}
        <div className="p-6 bg-surface-raised border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium block">
              {isHi ? 'परामर्श प्रारूप एवं शुल्क' : 'Consultation Fee'}
            </span>
            <p className="font-serif text-lg text-text-primary">
              {isHi ? `निश्चित परामर्श शुल्क: ₹${flatFeeInr}` : `Standard Flat Fee: INR ${flatFeeInr}`}
            </p>
          </div>
          <Link
            href={`/${activeLocale}#booking`}
            className="inline-flex items-center justify-center bg-madder text-paper px-6 py-2.5 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none hover:bg-madder/90"
          >
            {dict.cta.primary} &rarr;
          </Link>
        </div>

        {/* Detailed Body Commentary */}
        <div className="space-y-6 pt-4 border-t border-line text-text-primary/90 font-sans text-base sm:text-lg leading-relaxed">
          {service.body.map((paragraph, index) => (
            <p key={index}>{paragraph[activeLocale]}</p>
          ))}
        </div>

        {/* Two-Column Specification: What is Covered vs Suitable For */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-line">
          {/* Includes */}
          <div className="bg-surface-raised p-6 sm:p-8 border border-line space-y-4">
            <h3 className="font-serif text-xl text-text-primary font-medium">
              {dict.services.includesLabel}
            </h3>
            <ul className="space-y-3 font-sans text-sm text-text-muted">
              {service.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-turmeric font-mono mt-0.5">&bull;</span>
                  <span>{item[activeLocale]}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Suitable For */}
          <div className="bg-surface-raised p-6 sm:p-8 border border-line space-y-4">
            <h3 className="font-serif text-xl text-text-primary font-medium">
              {dict.services.suitableForLabel}
            </h3>
            <ul className="space-y-3 font-sans text-sm text-text-muted">
              {service.suitableFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-turmeric font-mono mt-0.5">&bull;</span>
                  <span>{item[activeLocale]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="p-8 border border-turmeric/40 bg-surface-raised text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl text-text-primary">
            {isHi ? 'इस विषय पर व्यक्तिगत चर्चा करें' : 'Schedule a Dedicated Session on this Subject'}
          </h3>
          <p className="font-sans text-sm text-text-muted max-w-[60ch] mx-auto leading-relaxed">
            {isHi
              ? 'जन्म पत्री के ग्रहों का शांत और व्यक्तिगत अध्ययन। सत्र का समय फोन कॉल या चैट पर पूर्व निर्धारित किया जाता है।'
              : 'An unhurried and personalized analysis of your birth chart. Sessions are scheduled via call or chat.'}
          </p>
          <div>
            <Link
              href={`/${activeLocale}#booking`}
              className="inline-flex items-center justify-center bg-madder text-paper px-8 py-3.5 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none hover:bg-madder/90"
            >
              {dict.cta.primary} &rarr;
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div className="pt-12 border-t border-line">
          <RelatedServices currentSlug={service.slug} locale={activeLocale} />
        </div>
      </div>
    </article>
  )
}
