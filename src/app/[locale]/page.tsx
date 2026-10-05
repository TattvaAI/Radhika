import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/content/types'
import { Hero } from '@/components/home/Hero'
import { InteractiveKundliExplorer } from '@/components/home/InteractiveKundliExplorer'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ServicesSection } from '@/components/home/ServicesSection'
import { AboutSection } from '@/components/home/AboutSection'
import { FAQSection } from '@/components/home/FAQSection'
import { BookingSection } from '@/components/booking/BookingSection'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const activeLocale = locale as Locale

  return (
    <div className="flex flex-col w-full">
      <Hero locale={activeLocale} />
      <InteractiveKundliExplorer locale={activeLocale} />
      <HowItWorks locale={activeLocale} />
      <ServicesSection locale={activeLocale} />
      <AboutSection locale={activeLocale} />
      <FAQSection locale={activeLocale} />
      <BookingSection locale={activeLocale} />
    </div>
  )
}
