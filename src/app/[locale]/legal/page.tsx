import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isLocale, type Locale } from '@/content/types'
import { getDictionary } from '@/app/[locale]/dictionaries'
import { SectionHeading } from '@/components/ui/SectionHeading'

export default async function LegalPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale as Locale)
  const isHi = locale === 'hi'

  const clauses = [
    {
      title: isHi ? '१. परामर्श का स्वरूप एवं उद्देश्य' : '1. Nature and Purpose of Consultations',
      body: isHi
        ? 'इस वेबसाइट पर प्रस्तुत समस्त ज्योतिषीय विश्लेषण केवल आत्मचिंतन, व्यक्तिगत मार्गदर्शन और ग्रह गोचर की पारंपरिक समझ के उद्देश्य से किए जाते हैं। जन्म पत्री का कोई भी पठन किसी पूर्व निर्धारित या निश्चित भविष्य की गारंटी नहीं देता।'
        : 'All astrological readings and consultations provided through this studio are intended exclusively for reflective personal guidance, self awareness, and traditional planetary study. No reading should be construed as an absolute prediction or guaranteed outcome.',
    },
    {
      title: isHi ? '२. चिकित्सा, विधिक एवं वित्तीय परामर्श का गैर-प्रतिस्थापन' : '2. Non-Substitution for Professional Advice',
      body: isHi
        ? 'ज्योतिषीय विचार किसी भी परिस्थिति में योग्य डॉक्टरों की चिकित्सा सलाह, अधिवक्ताओं की कानूनी सलाह अथवा लाइसेंस प्राप्त वित्तीय सलाहकारों के वित्तीय परामर्श का विकल्प नहीं है और न ही हो सकता है। किसी भी गंभीर स्वास्थ्य, कानूनी या आर्थिक निर्णय से पूर्व संबंधित क्षेत्र के अधिकृत विशेषज्ञों से अवश्य संपर्क करें।'
        : 'Astrological counsel does not constitute and cannot replace licensed medical diagnosis, clinical healthcare, professional legal counsel, or certified financial advice. For critical health, legal, or capital decisions, always seek guidance from qualified, licensed professionals.',
    },
    {
      title: isHi ? '३. व्यक्तिगत स्वतंत्रता एवं कर्म की प्रधानता' : '3. Personal Free Will and Autonomy',
      body: isHi
        ? 'वैदिक परंपरा में कर्म और व्यक्तिगत विवेक को सर्वोपरि माना गया है। परामर्श केवल परिस्थितियों के रुझान को स्पष्ट करता है; जीवन के समस्त निर्णय, क्रियान्वयन और परिणाम पूर्णतः प्रार्थी के अपने विवेक और कर्मों के अधीन हैं।'
        : 'Classical Vedic philosophy upholds the primacy of conscious choice and personal responsibility. Our readings serve only to illuminate environmental rhythms; all actions, decisions, and ensuing life events remain solely under the client personal agency.',
    },
    {
      title: isHi ? '४. गोपनीयता नीति' : '4. Confidentiality of Client Records',
      body: isHi
        ? 'परामर्श के दौरान साझा किए गए जन्म विवरण (तिथि, समय, स्थान), संपर्क माध्यम और व्यक्तिगत चर्चाएं पूर्णतः गोपनीय रखी जाती हैं। यह विवरण किसी भी तीसरे पक्ष, विज्ञापन नेटवर्क अथवा डेटा ब्रोकर के साथ कभी साझा नहीं किया जाता।'
        : 'All birth chart particulars (date, time, place), direct correspondence, and personal circumstances shared during consultation are treated with absolute confidentiality. Records are never sold, rented, or disclosed to third parties or advertising networks.',
    },
    {
      title: isHi ? '५. शुल्क एवं वापसी नीति' : '5. Fee Structure and Cancellation Policy',
      body: isHi
        ? 'परामर्श का शुल्क ज्योतिषी द्वारा समर्पित किए गए समय और अध्ययन के लिए लिया जाता है। सत्र के आयोजन से 24 घंटे पूर्व पुनर्निर्धारण का अनुरोध किया जा सकता है। सत्र संपन्न होने के पश्चात शुल्क वापसी स्वीकार्य नहीं है।'
        : 'Consultation fees compensate the practitioner dedicated preparation and focused consultation time. Rescheduling requests must be communicated at least 24 hours prior to the scheduled slot. Completed consultations are non-refundable.',
    },
  ]

  return (
    <article className="py-20 md:py-28 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div>
          <Link
            href={`/${locale}`}
            className="text-xs uppercase tracking-[0.2em] text-turmeric font-mono hover:underline inline-block mb-6"
          >
            &larr; {isHi ? 'मुख्य पृष्ठ पर वापस' : 'Back to Home'}
          </Link>
          <SectionHeading
            eyebrow={isHi ? 'वैधानिक दस्तावेज' : 'Statutory Notice'}
            title={dict.disclaimer.title}
            body={dict.disclaimer.body}
          />
        </div>

        <div className="border-t border-line divide-y divide-line pt-8 space-y-12">
          {clauses.map((clause, idx) => (
            <div key={idx} className="pt-8 space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl text-text-primary font-medium">
                {clause.title}
              </h2>
              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-[70ch]">
                {clause.body}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-surface-raised border border-line text-xs font-mono text-text-muted/80">
          <span>{isHi ? 'प्रभावी तिथि: अक्टूबर 2026' : 'Effective Date: October 2026'}</span>
          <span className="mx-3 text-line">|</span>
          <span>Radhika Sharma Jyotish Studio, Ambala, Haryana</span>
        </div>
      </div>
    </article>
  )
}
