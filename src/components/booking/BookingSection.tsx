'use client'

import React, { useState } from 'react'
import type { Locale } from '@/content/types'
import { services, flatFeeInr, astrologer } from '@/content/content'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { composeMessage, buildWhatsAppUrl } from '@/lib/whatsapp'

export interface BookingSectionProps {
  locale: Locale
}

export function BookingSection({ locale }: BookingSectionProps) {
  const dict = getDictionary(locale)
  const isHi = locale === 'hi'

  const [serviceSlug, setServiceSlug] = useState(services[0].slug)
  const [duration, setDuration] = useState(30)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [birthTime, setBirthTime] = useState('')
  const [birthPlace, setBirthPlace] = useState('')
  const [notes, setNotes] = useState('')

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  const selectedService = services.find((s) => s.slug === serviceSlug) || services[0]

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!name.trim()) errs.name = dict.booking.form.errors.nameRequired
    if (!phone.trim()) errs.phone = dict.booking.form.errors.phoneRequired
    if (!birthDate.trim()) errs.birthDate = dict.booking.form.errors.birthDateRequired
    if (!birthPlace.trim()) errs.birthPlace = dict.booking.form.errors.birthPlaceRequired
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const composedText = composeMessage({
    name,
    service: selectedService.title[locale],
    duration,
    date: `${birthDate} ${birthTime ? `at ${birthTime}` : ''} (${birthPlace})`,
    notes,
  })

  const whatsappUrl = buildWhatsAppUrl({
    name,
    service: selectedService.title[locale],
    duration,
    date: `${birthDate} ${birthTime ? `at ${birthTime}` : ''} (${birthPlace})`,
    notes,
  })

  const handleCopy = () => {
    navigator.clipboard.writeText(composedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="booking" className="py-20 md:py-28 bg-surface border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow={dict.booking.eyebrow}
          title={dict.booking.title}
          body={dict.booking.subtitle}
        />

        {/* Flat Fee Transparency Banner */}
        <div className="p-6 bg-surface-raised border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-turmeric font-sans font-medium block">
              {isHi ? 'शुल्क सूचना' : 'Fee Transparency'}
            </span>
            <p className="font-serif text-lg text-text-primary mt-1">
              {isHi ? `सामान्य परामर्श शुल्क: ₹${flatFeeInr}` : `Standard Consultation Fee: INR ${flatFeeInr}`}
            </p>
          </div>
          <span className="text-xs font-mono text-text-muted border border-line px-3 py-1 self-start sm:self-auto">
            {isHi ? 'पारदर्शी निर्धारण' : 'Zero Hidden Charges'}
          </span>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Service & Duration Selection */}
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.15em] text-turmeric font-mono block">
                [ 01 ] {dict.booking.steps.step1}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="service-select" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.nav.services}
                  </label>
                  <select
                    id="service-select"
                    value={serviceSlug}
                    onChange={(e) => setServiceSlug(e.target.value)}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  >
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title[locale]}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="duration-select" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.services.durationsLabel}
                  </label>
                  <select
                    id="duration-select"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  >
                    <option value={15}>15 {dict.services.minutes} ({isHi ? 'संक्षिप्त' : 'Focused'})</option>
                    <option value={30}>30 {dict.services.minutes} ({isHi ? 'मानक' : 'Standard'})</option>
                    <option value={60}>60 {dict.services.minutes} ({isHi ? 'गहन' : 'In-depth'})</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Personal & Birth Details */}
            <div className="space-y-6 pt-6 border-t border-line">
              <span className="text-xs uppercase tracking-[0.15em] text-turmeric font-mono block">
                [ 02 ] {dict.booking.steps.step3}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.nameLabel} *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={dict.booking.form.namePlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                  {errors.name && <span className="text-xs text-madder">{errors.name}</span>}
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.phoneLabel} *
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={dict.booking.form.phonePlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                  {errors.phone && <span className="text-xs text-madder">{errors.phone}</span>}
                </div>

                {/* Date of Birth */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="birthdate-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.birthDateLabel} *
                  </label>
                  <input
                    id="birthdate-input"
                    type="text"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    placeholder={dict.booking.form.birthDatePlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                  {errors.birthDate && <span className="text-xs text-madder">{errors.birthDate}</span>}
                </div>

                {/* Time of Birth */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="birthtime-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.birthTimeLabel}
                  </label>
                  <input
                    id="birthtime-input"
                    type="text"
                    value={birthTime}
                    onChange={(e) => setBirthTime(e.target.value)}
                    placeholder={dict.booking.form.birthTimePlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                </div>

                {/* Place of Birth */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="birthplace-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.birthPlaceLabel} *
                  </label>
                  <input
                    id="birthplace-input"
                    type="text"
                    value={birthPlace}
                    onChange={(e) => setBirthPlace(e.target.value)}
                    placeholder={dict.booking.form.birthPlacePlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                  {errors.birthPlace && <span className="text-xs text-madder">{errors.birthPlace}</span>}
                </div>

                {/* Notes / Questions */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label htmlFor="notes-input" className="text-xs uppercase tracking-[0.15em] text-text-muted font-sans">
                    {dict.booking.form.notesLabel}
                  </label>
                  <textarea
                    id="notes-input"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={dict.booking.form.notesPlaceholder}
                    className="w-full bg-surface-raised border border-line text-text-primary p-3 text-sm rounded-none focus:outline-none focus:ring-1 focus:ring-turmeric focus:border-turmeric"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-madder text-paper px-8 py-4 text-xs font-sans font-medium uppercase tracking-[0.15em] rounded-none hover:bg-madder/90 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-madder"
              >
                {dict.booking.form.submitButton} &rarr;
              </button>
            </div>
          </form>
        ) : (
          /* Honest Confirmation State & Copyable Message Fallback */
          <div className="p-8 bg-surface-raised border border-line space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-line pb-4">
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-turmeric font-mono block">
                  {dict.booking.steps.step4}
                </span>
                <h4 className="font-serif text-2xl text-text-primary mt-1">
                  {isHi ? 'तैयार किया गया संदेश' : 'Composed Consultation Message'}
                </h4>
              </div>
              <span className="text-xs font-mono text-turmeric border border-dashed border-turmeric/60 px-3 py-1">
                {isHi ? 'संपर्क पूर्व अवलोकन' : 'Ready to Send'}
              </span>
            </div>

            {/* Pre-composed consultation text preview */}
            <pre className="p-5 bg-surface border border-line text-xs sm:text-sm font-sans text-text-primary/90 whitespace-pre-wrap leading-relaxed rounded-none">
              {composedText}
            </pre>

            {/* Graceful WhatsApp degradation per spec */}
            <div className="p-4 border border-dashed border-line bg-surface/60 space-y-2 text-xs text-text-muted leading-relaxed">
              <span className="text-[11px] font-mono uppercase tracking-widest text-turmeric block">
                [ {dict.booking.form.pendingWhatsAppNotice} ]
              </span>
              <p>
                {isHi
                  ? `आप इस संदेश को कॉपी करके राधिका जी के इंस्टाग्राम प्रोफाइल (@${astrologer.instagram}) पर भेज सकते हैं या संपर्क विवरण सक्रिय होने पर सीधे साझा कर सकते हैं।`
                  : `You may copy this message to message Radhika directly on Instagram (@${astrologer.instagram}), or share it once the direct WhatsApp gateway is activated.`}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center border border-turmeric text-turmeric hover:bg-turmeric/10 px-6 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium rounded-none transition-colors"
              >
                {copied ? dict.booking.form.copiedText : dict.booking.form.copyMessageButton}
              </button>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-madder text-paper px-6 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium rounded-none hover:bg-madder/90 transition-colors"
                >
                  WhatsApp &rarr;
                </a>
              )}

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-[0.15em] text-text-muted hover:text-turmeric self-center"
              >
                &larr; {isHi ? 'विवरण बदलें' : 'Edit Details'}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
