import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import '../globals.css'
import { fontVariables } from '@/app/fonts'
import { LOCALES, isLocale, type Locale } from '@/content/types'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CelestialCanvas } from '@/components/ui/CelestialCanvas'

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isHi = locale === 'hi'

  return {
    title: isHi
      ? 'राधिका शर्मा — निजी ज्योतिष अध्ययन | अंबाला, हरियाणा'
      : 'Radhika Sharma — Private Astrology Practice | Ambala, Haryana',
    description: isHi
      ? 'चार वर्षों का प्रामाणिक अभ्यास। जन्म कुंडली का शांत, व्यक्तिगत और ईमानदार अध्ययन। कोई झूठे दावे नहीं।'
      : 'Four years of disciplined practice. Honest, quiet, and personal birth chart guidance in Ambala, Haryana.',
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  return (
    <html lang={locale} className={`${fontVariables} scroll-smooth antialiased`}>
      <body className="min-h-[100dvh] flex flex-col bg-surface text-text-primary selection:bg-turmeric/20 selection:text-turmeric relative">
        <CelestialCanvas />
        <Navbar locale={locale as Locale} />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer locale={locale as Locale} />
      </body>
    </html>
  )
}
