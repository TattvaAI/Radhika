'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { Locale } from '@/content/types'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { Yantra } from '@/components/ui/Yantra'

export interface NavbarProps {
  locale: Locale
}

export function Navbar({ locale }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  // Calculate target language switch url
  const targetLocale: Locale = isHi ? 'en' : 'hi'
  const targetPath = pathname
    ? pathname.replace(new RegExp(`^/${locale}`), `/${targetLocale}`)
    : `/${targetLocale}`

  const navLinks = [
    { href: `/${locale}#services`, label: dict.nav.services },
    { href: `/${locale}#about`, label: dict.nav.about },
    { href: `/${locale}#process`, label: dict.howItWorks.eyebrow },
    { href: `/${locale}#faq`, label: dict.nav.faq },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-surface/95 backdrop-blur-sm border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Brand identity */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric"
        >
          <div className="text-turmeric transition-transform duration-300 group-hover:scale-105">
            <Yantra size={32} animate={false} />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl text-text-primary font-medium tracking-tight leading-tight">
              {isHi ? 'राधिका शर्मा' : 'Radhika Sharma'}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted font-sans font-medium">
              {isHi ? 'ज्योतिष अध्ययन' : 'Jyotish Studio'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-8 text-xs font-sans uppercase tracking-[0.15em] text-text-muted"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-turmeric transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-turmeric"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Bar: Language switch + Primary CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Toggle */}
          <Link
            href={targetPath}
            aria-label={isHi ? 'Switch to English' : 'हिंदी में देखें'}
            className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-turmeric border border-line px-2.5 py-1.5 rounded-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-turmeric"
          >
            {isHi ? 'EN' : 'हिन्दी'}
          </Link>

          {/* Primary CTA Button (Enforcing the Madder accent rule) */}
          <Link
            href={`/${locale}#booking`}
            className="hidden sm:inline-flex items-center justify-center bg-madder text-paper px-4 sm:px-5 py-2.5 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none hover:bg-madder/90 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-madder whitespace-nowrap"
          >
            {dict.nav.primaryCta}
          </Link>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-muted hover:text-turmeric border border-line rounded-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-turmeric"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-surface-raised px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-[0.15em] text-text-primary hover:text-turmeric py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-line">
            <Link
              href={`/${locale}#booking`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center bg-madder text-paper py-3 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none"
            >
              {dict.nav.primaryCta}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
