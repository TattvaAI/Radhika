import { DEFAULT_LOCALE, type Locale } from '@/content/types'

export interface Dictionary {
  cta: {
    primary: string
    secondary: string
  }
  nav: {
    home: string
    services: string
    book: string
    about: string
    testimonials: string
    faq: string
    primaryCta: string
  }
  hero: {
    eyebrow: string
    headline: string
    subtext: string
    primaryCta: string
    secondaryCta: string
  }
  howItWorks: {
    eyebrow: string
    title: string
    steps: Array<{
      number: string
      title: string
      description: string
    }>
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    durationsLabel: string
    minutes: string
    includesLabel: string
    suitableForLabel: string
    viewDetails: string
    bookService: string
  }
  booking: {
    eyebrow: string
    title: string
    subtitle: string
    flatFeeNotice: string
    steps: {
      step1: string
      step2: string
      step3: string
      step4: string
    }
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      phoneLabel: string
      phonePlaceholder: string
      birthDateLabel: string
      birthDatePlaceholder: string
      birthTimeLabel: string
      birthTimePlaceholder: string
      birthPlaceLabel: string
      birthPlacePlaceholder: string
      notesLabel: string
      notesPlaceholder: string
      submitButton: string
      copyMessageButton: string
      copiedText: string
      pendingWhatsAppNotice: string
      errors: {
        nameRequired: string
        phoneRequired: string
        birthDateRequired: string
        birthPlaceRequired: string
        serviceRequired: string
      }
    }
  }
  testimonials: {
    eyebrow: string
    title: string
    emptyNotice: string
    placeholderLabel: string
  }
  about: {
    eyebrow: string
    title: string
    subtitle: string
    statYears: string
    statClients: string
    statLocation: string
    statLanguages: string
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
  }
  footer: {
    tagline: string
    navHeading: string
    contactHeading: string
    socialHeading: string
    instagramLabel: string
    allRightsReserved: string
    legalLink: string
    primaryCta: string
  }
  disclaimer: {
    title: string
    body: string
  }
}

export const dictionaries: Record<Locale, Dictionary> = {
  hi: {
    cta: {
      primary: 'परामर्श लें',
      secondary: 'सेवाएं देखें',
    },
    nav: {
      home: 'मुख्य पृष्ठ',
      services: 'सेवाएं',
      book: 'परामर्श लें',
      about: 'परिचय',
      testimonials: 'अनुभव',
      faq: 'सवाल जवाब',
      primaryCta: 'परामर्श लें',
    },
    hero: {
      eyebrow: 'अंबाला में निजी ज्योतिष अध्ययन',
      headline: 'शांत मन से जीवन की दिशा समझें',
      subtext:
        'चार वर्षों का प्रामाणिक अनुभव। बिना किसी झूठे वादे के आपकी जन्म कुंडली का ईमानदार और व्यक्तिगत अध्ययन।',
      primaryCta: 'परामर्श लें',
      secondaryCta: 'सेवाएं देखें',
    },
    howItWorks: {
      eyebrow: 'प्रक्रिया',
      title: 'परामर्श की सरल प्रक्रिया',
      steps: [
        {
          number: '01',
          title: 'विवरण साझा करें',
          description:
            'अपनी जन्म तिथि, समय और जन्म स्थान की सही जानकारी हमें भेजें।',
        },
        {
          number: '02',
          title: 'समय निर्धारित करें',
          description:
            'अपनी सुविधा अनुसार फोन कॉल, वीडियो कॉल या चैट का समय चुनें।',
        },
        {
          number: '03',
          title: 'व्यक्तिगत संवाद',
          description:
            'अपनी कुंडली के ग्रहों और जीवन के प्रश्नों पर शांत मन से चर्चा करें।',
        },
      ],
    },
    services: {
      eyebrow: 'परामर्श क्षेत्र',
      title: 'ज्योतिषीय परामर्श सेवाएं',
      subtitle:
        'जीवन के विभिन्न महत्वपूर्ण पक्षों के लिए संतुलित और ईमानदार मार्गदर्शन।',
      durationsLabel: 'सत्र अवधि',
      minutes: 'मिनट',
      includesLabel: 'सत्र में शामिल',
      suitableForLabel: 'किनके लिए उपयुक्त',
      viewDetails: 'विस्तार से जानें',
      bookService: 'परामर्श लें',
    },
    booking: {
      eyebrow: 'समय निर्धारण',
      title: 'परामर्श सत्र आरक्षित करें',
      subtitle: 'अपने प्रश्नों के अनुसार उपयुक्त अवधि और समय का चयन करें।',
      flatFeeNotice:
        'परामर्श शुल्क 2500 रुपये। विशिष्ट सत्र अवधियों का शुल्क संपर्क पर तय किया जाएगा।',
      steps: {
        step1: 'सेवा चुनें',
        step2: 'अवधि चुनें',
        step3: 'जानकारी भरें',
        step4: 'पुष्टि करें',
      },
      form: {
        nameLabel: 'पूरा नाम',
        namePlaceholder: 'अपना नाम लिखें',
        emailLabel: 'ईमेल पता',
        emailPlaceholder: 'अपना ईमेल पता लिखें',
        phoneLabel: 'फोन नंबर',
        phonePlaceholder: 'व्हाट्सएप नंबर लिखें',
        birthDateLabel: 'जन्म तिथि',
        birthDatePlaceholder: 'DD / MM / YYYY',
        birthTimeLabel: 'जन्म का सही समय',
        birthTimePlaceholder: 'उदा. 03:30 PM',
        birthPlaceLabel: 'जन्म स्थान',
        birthPlacePlaceholder: 'शहर, राज्य',
        notesLabel: 'आपके मुख्य प्रश्न',
        notesPlaceholder: 'जिन विषयों पर आप विशेष चर्चा करना चाहते हैं',
        submitButton: 'परामर्श लें',
        copyMessageButton: 'संदेश कॉपी करें',
        copiedText: 'संदेश कॉपी हो गया',
        pendingWhatsAppNotice:
          'व्हाट्सएप नंबर जल्द जोड़ा जाएगा। आप इस संदेश को कॉपी कर संपर्क कर सकते हैं।',
        errors: {
          nameRequired: 'कृपया अपना नाम लिखें।',
          phoneRequired: 'कृपया अपना फोन नंबर लिखें।',
          birthDateRequired: 'कृपया अपनी जन्म तिथि लिखें।',
          birthPlaceRequired: 'कृपया अपना जन्म स्थान लिखें।',
          serviceRequired: 'कृपया एक सेवा का चयन करें।',
        },
      },
    },
    testimonials: {
      eyebrow: 'अनुभव',
      title: 'परामर्शार्थियों के अनुभव',
      emptyNotice:
        'सच्चे अनुभवों के संग्रह का कार्य जारी है। किसी भी असत्यापित अनुभव को यहाँ प्रदर्शित नहीं किया जाता।',
      placeholderLabel: 'समीक्षा स्थान',
    },
    about: {
      eyebrow: 'परिचय',
      title: 'राधिका शर्मा के बारे में',
      subtitle: 'अंबाला में स्थित एक शांत और प्रामाणिक ज्योतिष अभ्यास।',
      statYears: 'वर्षों का अभ्यास',
      statClients: 'परामर्श किए गए परिवार',
      statLocation: 'अंबाला, हरियाणा',
      statLanguages: 'हिंदी और अंग्रेजी',
    },
    faq: {
      eyebrow: 'सामान्य प्रश्न',
      title: 'अक्सर पूछे जाने वाले सवाल',
      subtitle: 'परामर्श प्रक्रिया और नियमों से जुड़ी स्पष्ट जानकारी।',
    },
    footer: {
      tagline: 'अंबाला, हरियाणा से व्यक्तिगत और शांत ज्योतिषीय मार्गदर्शन।',
      navHeading: 'पृष्ठ',
      contactHeading: 'संपर्क',
      socialHeading: 'सोशल मीडिया',
      instagramLabel: 'इंस्टाग्राम पर जुड़ें',
      allRightsReserved: 'सर्वाधिकार सुरक्षित।',
      legalLink: 'वैधानिक अस्वीकरण',
      primaryCta: 'परामर्श लें',
    },
    disclaimer: {
      title: 'महत्वपूर्ण वैधानिक अस्वीकरण',
      body: 'ज्योतिषीय परामर्श केवल व्यक्तिगत समझ और आत्मचिंतन के उद्देश्य से प्रदान किया जाता है। यह किसी भी प्रकार की चिकित्सीय, कानूनी या वित्तीय सलाह का विकल्प नहीं है। किसी भी परिणाम की गारंटी नहीं दी जाती। महत्वपूर्ण निर्णयों के लिए कृपया संबंधित विषय के योग्य विशेषज्ञों से परामर्श अवश्य लें।',
    },
  },
  en: {
    cta: {
      primary: 'Talk to Radhika',
      secondary: 'Explore Services',
    },
    nav: {
      home: 'Home',
      services: 'Services',
      book: 'Book',
      about: 'About',
      testimonials: 'Reviews',
      faq: 'FAQ',
      primaryCta: 'Talk to Radhika',
    },
    hero: {
      eyebrow: 'Private Astrology Practice in Ambala',
      headline: 'Clear, quiet astrological guidance for your life',
      subtext:
        'Four years of thoughtful practice. An honest, personal reading of your birth chart without false promises.',
      primaryCta: 'Talk to Radhika',
      secondaryCta: 'Explore Services',
    },
    howItWorks: {
      eyebrow: 'Process',
      title: 'How a Consultation Works',
      steps: [
        {
          number: '01',
          title: 'Share Birth Details',
          description:
            'Provide your accurate date, time, and place of birth.',
        },
        {
          number: '02',
          title: 'Schedule Your Slot',
          description:
            'Select a convenient time for a call or WhatsApp discussion.',
        },
        {
          number: '03',
          title: 'Personal Reading',
          description:
            'Engage in an unhurried discussion about your chart and questions.',
        },
      ],
    },
    services: {
      eyebrow: 'Areas of Guidance',
      title: 'Astrological Consultation Services',
      subtitle:
        'Thoughtful and honest guidance for key dimensions of life.',
      durationsLabel: 'Session Lengths',
      minutes: 'minutes',
      includesLabel: 'What is covered',
      suitableForLabel: 'Recommended for',
      viewDetails: 'View details',
      bookService: 'Talk to Radhika',
    },
    booking: {
      eyebrow: 'Appointments',
      title: 'Book a Consultation Session',
      subtitle:
        'Choose the session format and time that best fits your questions.',
      flatFeeNotice:
        'Flat consultation fee INR 2500. Per-tier pricing details will be confirmed upon contact.',
      steps: {
        step1: 'Select Service',
        step2: 'Select Duration',
        step3: 'Your Information',
        step4: 'Review and Confirm',
      },
      form: {
        nameLabel: 'Full Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'Enter your email address',
        phoneLabel: 'Phone Number',
        phonePlaceholder: 'Enter your WhatsApp number',
        birthDateLabel: 'Date of Birth',
        birthDatePlaceholder: 'DD / MM / YYYY',
        birthTimeLabel: 'Time of Birth',
        birthTimePlaceholder: 'e.g. 03:30 PM',
        birthPlaceLabel: 'Place of Birth',
        birthPlacePlaceholder: 'City and state',
        notesLabel: 'Primary Questions or Concerns',
        notesPlaceholder: 'Topics or questions you wish to focus on',
        submitButton: 'Talk to Radhika',
        copyMessageButton: 'Copy Message',
        copiedText: 'Message copied',
        pendingWhatsAppNotice:
          'WhatsApp number will be added shortly. You can copy the composed message below.',
        errors: {
          nameRequired: 'Please enter your full name.',
          phoneRequired: 'Please enter your phone number.',
          birthDateRequired: 'Please enter your date of birth.',
          birthPlaceRequired: 'Please enter your place of birth.',
          serviceRequired: 'Please choose a consultation service.',
        },
      },
    },
    testimonials: {
      eyebrow: 'Reflections',
      title: 'Client Reflections',
      emptyNotice:
        'A collection of authentic client experiences is underway. We never display unverified reviews.',
      placeholderLabel: 'Reserved review slot',
    },
    about: {
      eyebrow: 'Background',
      title: 'About Radhika Sharma',
      subtitle: 'A quiet and grounded astrology practice based in Ambala.',
      statYears: 'Years in Practice',
      statClients: 'Families Consulted',
      statLocation: 'Ambala, Haryana',
      statLanguages: 'Hindi and English',
    },
    faq: {
      eyebrow: 'Common Questions',
      title: 'Frequently Asked Questions',
      subtitle:
        'Honest clarity about the consultation process and principles.',
    },
    footer: {
      tagline:
        'Quiet, personal astrological guidance from Ambala, Haryana.',
      navHeading: 'Navigation',
      contactHeading: 'Contact',
      socialHeading: 'Social',
      instagramLabel: 'Follow on Instagram',
      allRightsReserved: 'All rights reserved.',
      legalLink: 'Disclaimer and Terms',
      primaryCta: 'Talk to Radhika',
    },
    disclaimer: {
      title: 'Important Legal Disclaimer',
      body: 'Astrological consultations are provided solely for personal guidance and reflection. They do not constitute or replace medical, legal, or financial professional advice. No outcomes are guaranteed. For critical decisions, always consult qualified licensed professionals in the respective field.',
    },
  },
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
}
