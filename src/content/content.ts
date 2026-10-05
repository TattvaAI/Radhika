import type {
  Astrologer,
  FAQItem,
  NavItem,
  Service,
  Testimonial,
  TierPrice,
} from './types'

export const astrologer: Astrologer = {
  name: 'Radhika Sharma',
  title: {
    hi: 'ज्योतिषी',
    en: 'Astrologer',
  },
  city: 'Ambala',
  region: 'Haryana',
  languages: ['Hindi', 'English'],
  yearsInPractice: 4,
  clientsConsulted: 12,
  credentials: [],
  story: {
    hi: `मैं राधिका शर्मा हूँ, अंबाला से। ज्योतिष मेरे लिए कोई चमत्कार या व्यवसाय नहीं, बल्कि जन्म पत्री के माध्यम से व्यक्ति की स्थिति और समय चक्र को समझने का एक शांत अध्ययन है।\n\nपिछले चार वर्षों में मैंने बारह परिवारों के साथ बैठकर उनके जीवन के महत्वपूर्ण प्रश्नों पर कुंडलियों का विश्लेषण किया है। मैं किसी काल्पनिक परिणाम या अवास्तविक वादे का दावा नहीं करती।\n\nपरामर्श का मूल उद्देश्य आपको वस्तुस्थिति से अवगत कराना है, ताकि अनुकूल और संवेदनशील समय को समझते हुए आप शांत मन से सही निर्णय ले सकें।`,
    en: `I am Radhika Sharma, based in Ambala. For me, Jyotish is neither spectacle nor a commercial enterprise; it is a quiet discipline of understanding planetary cycles and life phases through the birth chart.\n\nOver the past four years, I have worked with twelve families, reading each chart with care and unhurried personal attention. I make no sensational claims or promises of guaranteed destiny.\n\nMy role is to provide honest clarity on where circumstances align and where patience is needed, helping you make grounded decisions for your life.`,
  },
  storyPlaceholders: false,
  whatsapp: null,
  instagram: 'radhika_sharmag1',
  callSlots: {
    hi: 'समय जानने के लिए संपर्क करें',
    en: 'Contact to confirm timings',
  },
  chatWindow: {
    hi: 'समय जानने के लिए संपर्क करें',
    en: 'Contact to confirm timings',
  },
  availabilityNote: {
    hi: 'परामर्श का समय संपर्क करने पर तय किया जाता है।',
    en: 'Consultation timings are confirmed upon contact.',
  },
}

export const services: Service[] = [
  {
    slug: 'love-relationships',
    title: {
      hi: 'प्रेम और संबंध',
      en: 'Love and Relationships',
    },
    short: {
      hi: 'रिश्तों में उलझन और आपसी समझ को लेकर स्पष्ट ज्योतिषीय मार्गदर्शन।',
      en: 'Clear astrological perspective on relationship dynamics and mutual understanding.',
    },
    body: [
      {
        hi: 'हर रिश्ते के अपने उतार चढ़ाव होते हैं। आपकी और आपके साथी की जन्म कुंडली के ग्रह यह समझने में मदद करते हैं कि तालमेल कहाँ बैठता है और तनाव कहाँ से आता है।',
        en: 'Every relationship moves through distinct phases. Analyzing planetary positions helps clarify where emotional alignment comes naturally and where friction tends to arise.',
      },
      {
        hi: 'हम संवाद की कमियों, आपसी अपेक्षाओं और समय के प्रभाव को गहराई से देखते हैं। इससे आपको परिस्थितियों को शांत मन से समझने की स्पष्टता मिलती है।',
        en: 'We examine communication patterns, expectations, and timing factors. This gives you an honest view of personal dynamics so you can reflect calmly.',
      },
      {
        hi: 'यहाँ कोई झूठा दावा नहीं किया जाता। उद्देश्य केवल आपको सच्चाई दिखाना है ताकि आप अपने जीवन के लिए सही निर्णय ले सकें।',
        en: 'There are no unrealistic promises made here. The aim is simply to provide honest insight so you can make informed choices for your life.',
      },
    ],
    includes: [
      {
        hi: 'भावनात्मक अनुकूलता और ग्रहों का प्रभाव',
        en: 'Emotional compatibility and planetary influences',
      },
      {
        hi: 'संवाद में आने वाली बाधाओं की पहचान',
        en: 'Identification of communication bottlenecks',
      },
      {
        hi: 'रिश्ते में आने वाले समय का आकलन',
        en: 'Assessment of upcoming relational phases',
      },
      {
        hi: 'व्यक्तिगत बातचीत और प्रश्नों के उत्तर',
        en: 'Personal discussion and direct questions',
      },
    ],
    suitableFor: [
      {
        hi: 'जो रिश्ते में निरंतर असमंजस का सामना कर रहे हैं',
        en: 'Those facing uncertainty in their relationships',
      },
      {
        hi: 'जो साथी के साथ बेहतर समझ बनाना चाहते हैं',
        en: 'Those seeking clearer understanding with a partner',
      },
      {
        hi: 'जो किसी महत्वपूर्ण भावनात्मक मोड़ पर खड़े हैं',
        en: 'Those standing at an important emotional crossroads',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'marriage-matchmaking',
    title: {
      hi: 'विवाह और कुंडली मिलान',
      en: 'Marriage and Matchmaking',
    },
    short: {
      hi: 'विवाह से पूर्व दोनों कुंडलियों का व्यावहारिक और संतुलित अध्ययन।',
      en: 'A thoughtful and practical astrological assessment of marriage compatibility.',
    },
    body: [
      {
        hi: 'विवाह केवल दो लोगों का नहीं बल्कि दो परिवारों का मेल होता है। अष्टकूट मिलान के अलावा हम दोनों व्यक्तियों के स्वभाव, मानसिक तालमेल और जीवन के लक्ष्यों को भी देखते हैं।',
        en: 'Marriage unites two distinct individuals and families. Beyond traditional score matching, we examine temperamental balance, shared values, and long term life vision.',
      },
      {
        hi: 'ग्रहों की स्थिति केवल गुण मिलान के अंकों तक सीमित नहीं होती। हम स्वास्थ्य, पारिवारिक जीवन और आर्थिक सहयोग के पक्षों का भी शांत मन से विश्लेषण करते हैं।',
        en: 'Planetary harmony involves more than a point system. We look at emotional maturity, health factors, and practical shared responsibilities with care.',
      },
      {
        hi: 'हमारा दृष्टिकोण व्यावहारिक है। कुंडली मिलान का उद्देश्य डराना नहीं बल्कि आने वाले जीवन की वास्तविक समझ देना है।',
        en: 'Our approach is grounded and practical. The goal of chart comparison is not to instill fear but to offer clear, constructive awareness.',
      },
    ],
    includes: [
      {
        hi: 'गुण मिलान और ग्रहों की विस्तृत स्थिति',
        en: 'Detailed planetary analysis and traditional matching',
      },
      {
        hi: 'स्वभाव और मानसिक तालमेल का अध्ययन',
        en: 'Temperamental and lifestyle compatibility review',
      },
      {
        hi: 'पारिवारिक जीवन और समय का प्रभाव',
        en: 'Overview of domestic harmony and planetary timing',
      },
      {
        hi: 'निर्णय लेने के लिए स्पष्ट मार्गदर्शन',
        en: 'Direct guidance for practical decision making',
      },
    ],
    suitableFor: [
      {
        hi: 'विवाह के लिए नए प्रस्तावों पर विचार कर रहे परिवार',
        en: 'Families considering prospective marriage alliances',
      },
      {
        hi: 'विवाह से पहले साथी के स्वभाव को समझने के इच्छुक लोग',
        en: 'Individuals wishing to understand temperamental alignment',
      },
      {
        hi: 'विवाह में समय और दिशा को लेकर स्पष्टता चाहने वाले',
        en: 'Those seeking clarity on marriage timing and direction',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'career-job',
    title: {
      hi: 'करियर और नौकरी',
      en: 'Career and Job',
    },
    short: {
      hi: 'कार्यक्षेत्र में सही दिशा और समय की पहचान के लिए ज्योतिषीय सलाह।',
      en: 'Astrological guidance to understand career direction and favorable timing.',
    },
    body: [
      {
        hi: 'कामकाज की दुनिया में मेहनत के साथ सही दिशा और सही समय का बड़ा महत्व होता है। आपकी कुंडली के दसवें भाव और ग्रहों की दशा से आपकी स्वाभाविक क्षमताओं का पता चलता है।',
        en: 'Professional growth requires focused effort combined with timely decisions. Your chart highlights natural aptitudes and the sectors where your energy fits best.',
      },
      {
        hi: 'क्या नौकरी में बदलाव का समय अनुकूल है या मौजूदा स्थान पर धैर्य रखना बेहतर होगा, इस पर ग्रहों के गोचर और दशा के आधार पर विचार किया जाता है।',
        en: 'Whether you should consider a job transition or build depth in your current role depends on transit patterns and active planetary periods.',
      },
      {
        hi: 'हम आपको केवल वही बताते हैं जो ग्रह स्पष्ट करते हैं। अंतिम निर्णय और परिश्रम हमेशा आपका अपना रहता है।',
        en: 'We share only what the charts indicate plainly. The ultimate decision and dedication always remain entirely in your hands.',
      },
    ],
    includes: [
      {
        hi: 'दशम भाव और आजीविका की स्वाभाविक क्षमता',
        en: 'Tenth house analysis and natural vocation indicators',
      },
      {
        hi: 'नौकरी परिवर्तन या पदोन्नति का समय',
        en: 'Evaluation of job transition or promotion timing',
      },
      {
        hi: 'कार्यक्षेत्र में आने वाली चुनौतियों का आकलन',
        en: 'Assessment of workplace challenges and cycles',
      },
      {
        hi: 'व्यावहारिक निर्णय के लिए स्पष्ट संवाद',
        en: 'Direct dialogue for pragmatic career choices',
      },
    ],
    suitableFor: [
      {
        hi: 'नौकरी बदलने या नए अवसर तलाश रहे पेशेवर',
        en: 'Professionals weighing job switches or new offers',
      },
      {
        hi: 'कार्यक्षेत्र में ठहराव या उलझन महसूस कर रहे लोग',
        en: 'Individuals experiencing plateaus or career ambiguity',
      },
      {
        hi: 'करियर की शुरुआत में सही क्षेत्र चुनने के इच्छुक',
        en: 'Early career individuals selecting the right domain',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'business-finance',
    title: {
      hi: 'व्यापार और वित्त',
      en: 'Business and Finance',
    },
    short: {
      hi: 'व्यापारिक निर्णयों और वित्तीय संतुलन के लिए ईमानदार ग्रह विश्लेषण।',
      en: 'Honest chart analysis for strategic commercial decisions and financial planning.',
    },
    body: [
      {
        hi: 'व्यापार में जोखिम लेना पड़ता है, लेकिन सही समय की पहचान जोखिम को समझने में सहायक होती है। आपकी कुंडली के दूसरे और ग्यारहवें भाव धन प्रवाह और वित्तीय स्थिति के संकेत देते हैं।',
        en: 'Every business involves calculated risk. Your second and eleventh houses provide insight into earning capacity, cash flow tendencies, and financial cycles.',
      },
      {
        hi: 'नया काम शुरू करने, साझेदारी करने या पूंजी लगाने से पहले ग्रहों की दशा देखना उपयोगी होता है। इससे आपको यह समझने में मदद मिलती है कि कब विस्तार करना चाहिए और कब संभलकर चलना चाहिए।',
        en: 'Before initiating new ventures, partnerships, or capital commitments, understanding your current planetary phase helps you balance expansion with caution.',
      },
      {
        hi: 'हम किसी जादुई लाभ का दावा नहीं करते। हम केवल वित्तीय अवसरों और संभावित अड़चनों की निष्पक्ष तस्वीर सामने रखते हैं।',
        en: 'We never claim instant profits or magical windfalls. We simply provide an unbiased perspective on opportunities and financial risk areas.',
      },
    ],
    includes: [
      {
        hi: 'धन भाव और लाभ भाव का व्यवस्थित अध्ययन',
        en: 'Systematic review of wealth and profit houses',
      },
      {
        hi: 'नया उद्यम या साझेदारी शुरू करने का समय',
        en: 'Assessment of timing for new ventures or partners',
      },
      {
        hi: 'आर्थिक उतार चढ़ाव के चक्रों की पहचान',
        en: 'Identification of financial expansion and consolidation cycles',
      },
      {
        hi: 'व्यापारिक फैसलों के लिए तथ्यात्मक विमर्श',
        en: 'Objective discussion on practical business decisions',
      },
    ],
    suitableFor: [
      {
        hi: 'व्यापार शुरू करने या विस्तार की योजना बना रहे उद्यमी',
        en: 'Entrepreneurs planning a new business or expansion',
      },
      {
        hi: 'साझेदारी में काम करने से पहले विचार कर रहे लोग',
        en: 'Partners reviewing shared commercial commitments',
      },
      {
        hi: 'वित्तीय स्थिरता और पूंजी प्रबंधन पर स्पष्टता चाहने वाले',
        en: 'Those seeking clarity on fiscal stability and cash flow',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'health',
    title: {
      hi: 'स्वास्थ्य और ऊर्जा',
      en: 'Health and Vitality',
    },
    short: {
      hi: 'शारीरिक ऊर्जा और संवेदनशील समय की पहचान के लिए ज्योतिषीय नजरिया।',
      en: 'Astrological perspective on physical vitality and sensitive planetary periods.',
    },
    body: [
      {
        hi: 'ज्योतिष में छठा भाव और लग्न शरीर की जीवन शक्ति और स्वास्थ्य प्रवृत्तियों को दर्शाते हैं। ग्रहों की स्थिति बताती है कि शरीर के किन हिस्सों पर विशेष ध्यान देने की आवश्यकता हो सकती है।',
        en: 'In astrology, the ascendant and sixth house indicate physical stamina and constitutional balance. Planetary patterns show times when vitality may need extra care.',
      },
      {
        hi: 'यह परामर्श केवल ज्योतिषीय दृष्टिकोण प्रदान करता है। यह किसी भी तरह से चिकित्सा सलाह या डॉक्टर के परामर्श का विकल्प नहीं है और न ही हो सकता है।',
        en: 'This reading offers only an astrological perspective. It is never a substitute for professional medical diagnosis, clinical treatment, or medical advice.',
      },
      {
        hi: 'हम आपको संवेदनशील समयावधियों के प्रति सजग रहने और अपनी दिनचर्या तथा जीवनशैली को संतुलित रखने में मदद करते हैं।',
        en: 'Our intention is to help you stay aware of demanding periods so you can maintain a balanced daily routine and proactive health habits.',
      },
    ],
    includes: [
      {
        hi: 'लग्न और छठे भाव की स्थिति का परीक्षण',
        en: 'Examination of ascendant and sixth house indicators',
      },
      {
        hi: 'ऊर्जा स्तर और मौसमी बदलावों का ज्योतिषीय प्रभाव',
        en: 'Astrological factors affecting stamina and vitality',
      },
      {
        hi: 'सजग रहने योग्य समयावधियों की पहचान',
        en: 'Identification of sensitive planetary timeframes',
      },
      {
        hi: 'संतुलित जीवनशैली के लिए सामान्य सुझाव',
        en: 'General insights on maintaining lifestyle balance',
      },
    ],
    suitableFor: [
      {
        hi: 'जो अपनी शारीरिक ऊर्जा के चक्रों को समझना चाहते हैं',
        en: 'Those wanting to understand their vitality rhythms',
      },
      {
        hi: 'कठिन समय में मानसिक और शारीरिक सजगता चाहने वाले',
        en: 'Individuals seeking awareness during demanding phases',
      },
      {
        hi: 'जो जीवनशैली में संतुलन बनाने का प्रयास कर रहे हैं',
        en: 'People striving to maintain healthy lifestyle discipline',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'education-exams',
    title: {
      hi: 'शिक्षा और प्रतियोगी परीक्षा',
      en: 'Education and Examinations',
    },
    short: {
      hi: 'पढ़ाई में एकाग्रता और प्रतियोगी परीक्षाओं के समय की समझ।',
      en: 'Insight into academic focus and favorable windows for competitive examinations.',
    },
    body: [
      {
        hi: 'शिक्षा में विद्यार्थी की मेहनत सबसे महत्वपूर्ण होती है। जन्म कुंडली का पांचवां भाव बुद्धि, ग्रहण क्षमता और परीक्षा में प्रदर्शन के रुझान को दर्शाता है।',
        en: 'Consistent hard work is the bedrock of academic success. The fifth house highlights cognitive focus, intellectual aptitude, and learning patterns.',
      },
      {
        hi: 'उच्च शिक्षा के चयन, विषय के चुनाव या प्रतियोगी परीक्षा के प्रयासों के दौरान ग्रहों की दशा यह समझने में सहायता करती है कि कब एकाग्रता बेहतर रहेगी।',
        en: 'When choosing fields of study or scheduling major competitive exams, understanding active planetary transits reveals periods of heightened focus.',
      },
      {
        hi: 'हम सफलता की कोई गारंटी नहीं देते। हम विद्यार्थियों को उनकी ताकतों को पहचानने और अध्ययन में निरंतरता बनाए रखने के लिए प्रेरित करते हैं।',
        en: 'We offer no guaranteed outcomes. We encourage students to recognize their genuine strengths and remain disciplined in their preparation.',
      },
    ],
    includes: [
      {
        hi: 'बुद्धि भाव और स्वाभाविक विषय रुझान',
        en: 'Analysis of intellectual strengths and academic preferences',
      },
      {
        hi: 'प्रतियोगी परीक्षाओं के लिए समय का आकलन',
        en: 'Timing assessment for key competitive exam attempts',
      },
      {
        hi: 'पढ़ाई में एकाग्रता और भटकाव के कारण',
        en: 'Understanding factors that influence focus and concentration',
      },
      {
        hi: 'उच्च शिक्षा के सही विकल्प पर बातचीत',
        en: 'Constructive discussion on higher education pathways',
      },
    ],
    suitableFor: [
      {
        hi: 'उच्च शिक्षा या विषय चयन को लेकर संशय में पड़े छात्र',
        en: 'Students deciding on academic specializations or majors',
      },
      {
        hi: 'प्रतियोगी परीक्षाओं की तैयारी कर रहे अभ्यर्थी',
        en: 'Candidates preparing for competitive entrance examinations',
      },
      {
        hi: 'बच्चे के अध्ययन रुझान को समझने के इच्छुक अभिभावक',
        en: 'Parents seeking to understand a child\'s learning style',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'property-vastu',
    title: {
      hi: 'संपत्ति और वास्तु विचार',
      en: 'Property and Vastu',
    },
    short: {
      hi: 'भूमि, मकान और गृह निर्माण से जुड़े ग्रहों का निष्पक्ष विश्लेषण।',
      en: 'Unbiased chart guidance on property matters and residential energy flow.',
    },
    body: [
      {
        hi: 'घर या संपत्ति का निर्माण जीवन का एक बड़ा कदम होता है। आपकी कुंडली का चौथा भाव भूमि, वाहन और पारिवारिक सुख के माहौल से जुड़ा होता है।',
        en: 'Acquiring property or constructing a home is a milestone event. Your fourth house reflects real estate stability, vehicles, and domestic peace.',
      },
      {
        hi: 'संपत्ति की खरीद, निर्माण कार्य या स्थान परिवर्तन का निर्णय लेने से पहले ग्रहों का अनुकूल समय देखना समझदारी भरा कदम हो सकता है।',
        en: 'Before signing property deeds or undertaking renovations, examining planetary timing helps you approach decisions with measured clarity.',
      },
      {
        hi: 'हम अंधविश्वास या तोड़ फोड़ की सलाह नहीं देते। वास्तु और ज्योतिष के आधार पर केवल संतुलित और व्यावहारिक सुझाव साझा किए जाते हैं।',
        en: 'We do not advocate superstitious demolition or panic measures. Our focus is on practical, sensible alignment of domestic space and timing.',
      },
    ],
    includes: [
      {
        hi: 'चतुर्थ भाव और संपत्ति योग का अवलोकन',
        en: 'Fourth house review and property acquisition indicators',
      },
      {
        hi: 'भूमि क्रय या गृह निर्माण का सही समय',
        en: 'Assessment of favorable periods for land or construction',
      },
      {
        hi: 'आवासीय परिवेश के लिए व्यावहारिक वास्तु विचार',
        en: 'Practical Vastu observations for residential harmony',
      },
      {
        hi: 'स्थान परिवर्तन और गृह प्रवेश पर विमर्श',
        en: 'Guidance on relocation and residential transitions',
      },
    ],
    suitableFor: [
      {
        hi: 'नया घर या जमीन खरीदने की योजना बना रहे लोग',
        en: 'Individuals planning to purchase a house or land',
      },
      {
        hi: 'गृह निर्माण या नवीनीकरण शुरू करने वाले परिवार',
        en: 'Families initiating residential construction or renovation',
      },
      {
        hi: 'घर के माहौल में शांति और सामंजस्य चाहने वाले',
        en: 'Homeowners seeking greater balance in their living space',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'numerology',
    title: {
      hi: 'अंक ज्योतिष',
      en: 'Numerology',
    },
    short: {
      hi: 'जन्मतिथि और अंकों के आधार पर व्यक्तिगत प्रवृत्तियों की समझ।',
      en: 'Understanding personal strengths and life rhythms through numbers and birth dates.',
    },
    body: [
      {
        hi: 'प्रत्येक संख्या की अपनी प्रकृति और कंपन होती है। आपकी जन्मतिथि के मूलांक और भाग्यांक आपके व्यक्तित्व के मुख्य पक्षों को समझने में सहायता करते हैं।',
        en: 'Numbers hold distinct resonant qualities. Your root and destiny numbers calculated from your birth date illuminate key traits of your character.',
      },
      {
        hi: 'नाम के अक्षरों का योग और जन्म के अंक मिलकर यह दर्शाते हैं कि आपकी ऊर्जा किस तरह के वातावरण में स्वाभाविक रूप से खिलती है।',
        en: 'The numeric vibration of your name alongside your birth numbers clarifies the settings where your abilities express themselves most smoothly.',
      },
      {
        hi: 'अंक ज्योतिष भविष्य बदलने का दावा नहीं करता, लेकिन यह आपको अपने स्वभाव और समय के अनुकूल व्यवहार करने में मदद करता है।',
        en: 'Numerology does not claim to alter fate, but it offers valuable self awareness so you can work in harmony with your strengths.',
      },
    ],
    includes: [
      {
        hi: 'मूलांक और भाग्यांक की विस्तृत गणना',
        en: 'Calculation of root number and destiny number',
      },
      {
        hi: 'नाम के अक्षरों का संतुलन और प्रभाव',
        en: 'Analysis of name spelling vibrations and resonance',
      },
      {
        hi: 'महत्वपूर्ण वर्षों और समय चक्रों की समझ',
        en: 'Identification of significant annual cycles and phases',
      },
      {
        hi: 'दैनिक जीवन में अंकों के उपयोग पर सलाह',
        en: 'Practical suggestions for working with personal numbers',
      },
    ],
    suitableFor: [
      {
        hi: 'जो अपने जन्म अंकों के प्रभाव को जानना चाहते हैं',
        en: 'Those curious about the influence of their birth numbers',
      },
      {
        hi: 'नाम के संतुलन या नए उद्यम का नाम रखने वाले',
        en: 'People evaluating name resonance for self or business',
      },
      {
        hi: 'आत्मनिरीक्षण और व्यक्तिगत विकास के इच्छुक लोग',
        en: 'Individuals interested in reflective personal growth',
      },
    ],
    durations: [15, 30, 60],
  },
  {
    slug: 'palmistry',
    title: {
      hi: 'हस्तरेखा अध्ययन',
      en: 'Palmistry',
    },
    short: {
      hi: 'हथेली की रेखाओं और पर्वतों से स्वभाव और दिशा का आकलन।',
      en: 'Assessment of personality traits and life inclinations through palm line analysis.',
    },
    body: [
      {
        hi: 'हाथ की रेखाएं मस्तिष्क और अनुभवों का दर्पण होती हैं। मुख्य रेखाएं जैसे हृदय, मस्तिष्क और जीवन रेखा आपके विचार करने और महसूस करने के तरीके को दिखाती हैं।',
        en: 'The lines of the hand reflect mental patterns and experiential tendencies. Principal lines illustrate your emotional, intellectual, and physical balance.',
      },
      {
        hi: 'हथेली के पर्वत आपकी रुचि, महत्वाकांक्षा और जीवन शक्ति के स्तर का संकेत देते हैं। दोनों हाथों का तुलनात्मक अध्ययन जन्मजात क्षमता और वास्तविक उपयोग को स्पष्ट करता है।',
        en: 'Palmar mounts indicate ambition, energy levels, and natural predispositions. Comparing both palms highlights innate tendencies versus realized traits.',
      },
      {
        hi: 'हस्तरेखा कोई निश्चित भाग्य नहीं लिखती। यह केवल आपके स्वभाव की रूपरेखा दिखाती है, जिसे आप अपने कर्मों और निर्णयों से संवार सकते हैं।',
        en: 'Palm lines do not dictate an unalterable fate. They outline behavioral tendencies that you continue to shape through choices and purposeful effort.',
      },
    ],
    includes: [
      {
        hi: 'मुख्य रेखाओं का व्यवस्थित अध्ययन',
        en: 'Systematic examination of major hand lines',
      },
      {
        hi: 'पर्वतों और हथेली के आकार का विश्लेषण',
        en: 'Analysis of palmar mounts and overall hand shape',
      },
      {
        hi: 'दोनों हाथों का तुलनात्मक अवलोकन',
        en: 'Comparative review of passive and active palms',
      },
      {
        hi: 'स्वभाव और व्यवहारिक आदतों पर चर्चा',
        en: 'Discussion on temperamental habits and focus',
      },
    ],
    suitableFor: [
      {
        hi: 'जो जन्म समय की अनुपलब्धता में मार्गदर्शन चाहते हैं',
        en: 'Those lacking exact birth times seeking guidance',
      },
      {
        hi: 'जो अपनी मानसिक और भावनात्मक प्रकृति समझना चाहते हैं',
        en: 'Individuals exploring their emotional and mental habits',
      },
      {
        hi: 'हाथ के लक्षणों के माध्यम से आत्मज्ञान चाहने वाले',
        en: 'Those interested in character reflection through palmistry',
      },
    ],
    durations: [15, 30, 60],
  },
]

// Per-tier pricing is pending client confirmation. Current flat consultation fee is INR 2500.
export const flatFeeInr = 2500

export const tiers: TierPrice[] = [
  {
    id: 'guidance',
    minutes: 15,
    label: {
      hi: 'संक्षिप्त मार्गदर्शन',
      en: 'Focused Guidance',
    },
    description: {
      hi: 'किसी एक विशिष्ट प्रश्न या तात्कालिक चिंता पर केंद्रित चर्चा।',
      en: 'Focused discussion on a single specific question or immediate concern.',
    },
    priceInr: null,
  },
  {
    id: 'consultation',
    minutes: 30,
    label: {
      hi: 'विस्तृत परामर्श',
      en: 'Standard Consultation',
    },
    description: {
      hi: 'कुंडली के मुख्य पक्षों, वर्तमान दशा और प्रमुख प्रश्नों का समग्र विश्लेषण।',
      en: 'Comprehensive reading of primary chart dynamics, active periods, and key questions.',
    },
    priceInr: null,
  },
  {
    id: 'deep',
    minutes: 60,
    label: {
      hi: 'गहन अध्ययन',
      en: 'Deep Immersion',
    },
    description: {
      hi: 'जीवन के विभिन्न क्षेत्रों, दीर्घकालिक समय चक्रों और विस्तृत प्रश्नों पर शांत विमर्श।',
      en: 'In-depth review covering multiple life areas, long term cycles, and detailed inquiries.',
    },
    priceInr: null,
  },
]

// Testimonials are deliberately empty because the practitioner has none yet.
// Fabricating them would violate ASCI (Advertising Standards Council of India) and FTC fair advertising rules.
export const testimonials: Testimonial[] = []

export const testimonialSlots: Testimonial[] = [
  {
    name: 'TODO',
    city: 'TODO',
    quote: { hi: 'TODO', en: 'TODO' },
    isPlaceholder: true,
  },
  {
    name: 'TODO',
    city: 'TODO',
    quote: { hi: 'TODO', en: 'TODO' },
    isPlaceholder: true,
  },
  {
    name: 'TODO',
    city: 'TODO',
    quote: { hi: 'TODO', en: 'TODO' },
    isPlaceholder: true,
  },
]

export const faqs: FAQItem[] = [
  {
    question: {
      hi: 'क्या ज्योतिषीय परामर्श के परिणाम निश्चित या पक्के होते हैं?',
      en: 'Are the results and predictions guaranteed?',
    },
    answer: {
      hi: 'नहीं, ज्योतिष में किसी भी परिणाम की गारंटी नहीं दी जाती। यह विद्या परिस्थितियों और संभावनाओं को समझने के लिए मार्गदर्शन है। अंतिम परिणाम आपके अपने कर्म, निर्णय और समय पर निर्भर करते हैं।',
      en: 'No, outcomes are never guaranteed. Astrology provides perspective on tendencies and timing to help you make thoughtful choices. Your actions and personal decisions ultimately shape your life.',
    },
  },
  {
    question: {
      hi: 'परामर्श किस माध्यम से होता है?',
      en: 'How does a consultation take place?',
    },
    answer: {
      hi: 'परामर्श पूर्व निर्धारित समय पर फोन कॉल, वीडियो कॉल या व्हाट्सएप चैट के माध्यम से किया जाता है। आप अपनी सुविधा अनुसार माध्यम चुन सकते हैं।',
      en: 'Consultations take place by scheduled phone call, video call, or WhatsApp chat. You can select the mode that suits your comfort when scheduling.',
    },
  },
  {
    question: {
      hi: 'परामर्श से पहले किन जानकारियों की आवश्यकता होती है?',
      en: 'What information is required before a reading?',
    },
    answer: {
      hi: 'कुंडली तैयार करने के लिए आपका पूरा नाम, जन्म तिथि, जन्म का सही समय और जन्म स्थान की आवश्यकता होती है। यदि जन्म समय ज्ञात न हो तो हस्तरेखा विचार किया जा सकता है।',
      en: 'To prepare your chart accurately, we need your full name, exact date of birth, time of birth, and place of birth. If the exact time is unavailable, palmistry can be considered.',
    },
  },
  {
    question: {
      hi: 'परामर्श का शुल्क कितना है?',
      en: 'What is the consultation fee?',
    },
    answer: {
      hi: 'वर्तमान में परामर्श का शुल्क 2500 रुपये निर्धारित है। विभिन्न सत्र अवधियों के अनुसार शुल्क की विस्तृत जानकारी संपर्क करने पर साझा की जाती है।',
      en: 'The current standard consultation fee is 2500 INR. Details regarding specific session formats are confirmed directly upon contact.',
    },
  },
  {
    question: {
      hi: 'परामर्श किन भाषाओं में उपलब्ध है?',
      en: 'Which languages are consultations available in?',
    },
    answer: {
      hi: 'परामर्श हिंदी और अंग्रेजी दोनों भाषाओं में उपलब्ध है। आप जिस भाषा में सबसे सहज महसूस करें उसमें बातचीत कर सकते हैं।',
      en: 'Consultations are conducted in both Hindi and English. You may choose whichever language you feel most comfortable speaking.',
    },
  },
  {
    question: {
      hi: 'क्या मेरी जन्म संबंधी जानकारी और बातचीत गोपनीय रखी जाती है?',
      en: 'Are my birth details and personal discussions kept private?',
    },
    answer: {
      hi: 'हाँ, आपकी जन्म तिथि, जन्म समय, व्यक्तिगत विवरण और परामर्श के दौरान हुई सभी बातें पूरी तरह गोपनीय रखी जाती हैं। यह विवरण किसी तीसरे पक्ष के साथ कभी साझा नहीं किया जाता।',
      en: 'Yes, your birth details, contact information, and personal discussions remain strictly confidential. They are never shared with any third party.',
    },
  },
]

export const navItems: NavItem[] = [
  {
    href: '/',
    label: { hi: 'मुख्य पृष्ठ', en: 'Home' },
  },
  {
    href: '/services',
    label: { hi: 'सेवाएं', en: 'Services' },
  },
  {
    href: '/book',
    label: { hi: 'परामर्श लें', en: 'Book' },
  },
  {
    href: '/about',
    label: { hi: 'परिचय', en: 'About' },
  },
  {
    href: '/testimonials',
    label: { hi: 'अनुभव', en: 'Reviews' },
  },
  {
    href: '/faq',
    label: { hi: 'सवाल जवाब', en: 'FAQ' },
  },
]
