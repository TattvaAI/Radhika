import React from 'react'
import Link from 'next/link'
import type { Locale } from '@/content/types'
import { astrologer } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { Yantra } from '@/components/ui/Yantra'

export interface FooterProps {
  locale: Locale
}

export function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  return (
    <footer className="w-full bg-surface-raised border-t border-line text-text-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          {/* Identity & Studio info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-turmeric">
                <Yantra size={28} animate={false} />
              </span>
              <span className="font-serif text-xl text-text-primary font-medium tracking-tight">
                {isHi ? 'राधिका शर्मा' : 'Radhika Sharma'}
              </span>
            </div>
            <p className="font-sans text-sm text-text-muted max-w-[45ch] leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="text-xs font-mono text-turmeric/80 uppercase tracking-widest pt-2">
              {astrologer.city}, {astrologer.region}
            </div>
          </div>

          {/* Direct Navigation */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-primary font-sans font-semibold block">
              {dict.footer.navHeading}
            </span>
            <ul className="space-y-2.5 text-xs font-sans uppercase tracking-[0.15em]">
              <li>
                <Link
                  href={`/${locale}#services`}
                  className="hover:text-turmeric transition-colors"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#about`}
                  className="hover:text-turmeric transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#process`}
                  className="hover:text-turmeric transition-colors"
                >
                  {dict.howItWorks.eyebrow}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}#faq`}
                  className="hover:text-turmeric transition-colors"
                >
                  {dict.nav.faq}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/legal`}
                  className="hover:text-turmeric transition-colors"
                >
                  {dict.footer.legalLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-primary font-sans font-semibold block">
              {dict.footer.contactHeading}
            </span>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              {isHi
                ? 'परामर्श सत्र पूर्व निर्धारित समय पर आयोजित किए जाते हैं। आधिकारिक संपर्क के लिए इंस्टाग्राम पर संदेश भेजें।'
                : 'Consultation sessions are conducted by prior appointment. For official correspondence, connect via Instagram.'}
            </p>

            <div className="pt-2">
              <a
                href={`https://instagram.com/${astrologer.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-line px-3.5 py-2 text-xs font-mono text-text-primary hover:border-turmeric hover:text-turmeric transition-colors rounded-none"
              >
                <span>@{astrologer.instagram}</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer note in footer */}
        <div className="mt-12 pt-8 border-t border-line/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-sans">
          <p className="text-text-muted/80 max-w-[80ch] leading-relaxed">
            {dict.disclaimer.body}
          </p>
          <div className="shrink-0 text-text-muted/60 text-[11px] font-mono">
            &copy; {new Date().getFullYear()} Radhika Sharma. {dict.footer.allRightsReserved}
          </div>
        </div>
      </div>
    </footer>
  )
}
