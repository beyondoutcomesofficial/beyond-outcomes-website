// Guna Quiz — Sattva, Rajas, Tamas
window.QUIZ_DATA = {
  id: 'guna',
  meta: {
    en: {
      title: 'What Is Your<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Dominant Guna?</span>',
      shareTitle: 'Dominant Guna',
      chapter: 'Bhagavad Gita · Chapter 14 · Three Qualities of Nature',
      intro: 'The Gita teaches that all of nature — including your mind — is woven from three subtle forces: Sattva, Rajas, and Tamas. This inquiry reveals which Guna presently dominates your consciousness.',
      tagPrefix: 'PRAKRITI · GUNA',
      categoryNames: { sattva: 'Sattva', rajas: 'Rajas', tamas: 'Tamas' }
    },
    hi: {
      title: 'आपका प्रमुख<br><span style="color: var(--bo-gold-deep); font-weight: 500;">गुण कौन सा है?</span>',
      shareTitle: 'प्रमुख गुण',
      chapter: 'भगवद्गीता · अध्याय १४ · प्रकृति के तीन गुण',
      intro: 'गीता सिखाती है कि सम्पूर्ण प्रकृति — आपका मन भी — तीन सूक्ष्म शक्तियों से बुनी है: सत्त्व, रजस और तमस।',
      tagPrefix: 'प्रकृति · गुण',
      categoryNames: { sattva: 'सत्त्व', rajas: 'रजस', tamas: 'तमस' }
    }
  },
  categories: ['sattva', 'rajas', 'tamas'],
  questions: {
    en: [
      { text: "When you wake up in the morning, what best describes your natural state?", tags: ["sattva","rajas","tamas","tamas"], options: ["I feel rested and ready to engage with the day meaningfully", "I wake with plans already forming", "I feel alert but restless, my mind already searching", "I struggle to rise; the pull of sleep lingers"] },
      { text: "How do you typically respond when a situation does not go as planned?", tags: ["sattva","rajas","tamas","rajas"], options: ["I pause, observe, and adapt with acceptance", "I immediately search for a new path forward", "I feel frustrated and may react before fully understanding", "I withdraw or feel defeated, unsure how to proceed"] },
      { text: "What does your relationship with food most resemble?", tags: ["sattva","rajas","tamas","tamas"], options: ["Simple, wholesome foods that nourish", "I am drawn to bold, spiced, stimulating flavours", "I eat quickly, distracted, craving rich food", "I eat heavily and feel dull afterward"] },
      { text: "When you sit quietly with no tasks to do, what arises?", tags: ["sattva","tamas","rajas","tamas"], options: ["A quiet sense of presence", "Drowsiness or a heavy blankness", "Restlessness, a need to fill the silence", "Anxiety or unresolved thoughts"] },
      { text: "How would you describe your primary motivation right now?", tags: ["sattva","rajas","tamas","rajas"], options: ["To understand myself and contribute meaningfully", "To achieve, grow, expand my capability", "To find comfort and avoid difficulty", "To keep moving — stillness feels like failure"] },
      { text: "How do you relate to your emotions?", tags: ["sattva","tamas","rajas","tamas"], options: ["I observe them as waves — present, then passing", "They feel heavy and slow", "They move quickly — excitement, irritation", "I feel emotionally numb most of the time"] },
      { text: "When you make a decision, what guides you most?", tags: ["rajas","sattva","tamas","rajas"], options: ["Urgency and ambition", "Clarity and discernment", "Habit or comfort", "Desire and impulse"] },
      { text: "What best describes your sleep?", tags: ["sattva","rajas","tamas","tamas"], options: ["I sleep soundly and wake refreshed", "Light sleep — my mind stays active", "I sleep long but wake unrefreshed", "I feel drowsy throughout the day"] },
      { text: "How do you experience your mind during work or creative effort?", tags: ["sattva","rajas","tamas","tamas"], options: ["I sustain focused attention with ease", "Ideas and distraction together", "Hard to begin; procrastination is familiar", "Once I start I'm fine, but resistance is heavy"] },
      { text: "When you observe suffering, what is your first response?", tags: ["sattva","tamas","rajas","rajas"], options: ["Compassion and a wish to understand", "I feel overwhelmed or shut down", "I want to fix it immediately", "I feel helpless, move attention elsewhere"] },
      { text: "How do you relate to your duties and responsibilities?", tags: ["sattva","rajas","tamas","tamas"], options: ["I fulfil them steadily, from inner rightness", "I pursue them intensely", "I avoid them when uncomfortable", "I do them mechanically"] },
      { text: "What is your experience of desire?", tags: ["sattva","rajas","tamas","rajas"], options: ["I notice but am not driven by them", "Strong wanting — ambition, craving", "I desire mostly comfort", "My desires shift constantly"] },
      { text: "How does your body feel by the end of a typical day?", tags: ["sattva","rajas","tamas","tamas"], options: ["Pleasantly tired — used my energy well", "Wired but exhausted", "Heavy and sluggish", "Drained — gave too much or too little"] },
      { text: "When you reflect on your life, what feeling most often arises?", tags: ["sattva","rajas","tamas","tamas"], options: ["Gratitude and a quiet sense of meaning", "Urgency — still so much to accomplish", "Regret or stagnation", "Confusion about what truly matters"] },
      { text: "Which speaks most deeply to your current inner experience?", tags: ["sattva","rajas","tamas","rajas"], options: ["Clarity that keeps returning", "I am in motion — restless, striving", "A heaviness like fog", "Energy that burns bright but scatters"] }
    ],
    hi: [
      { text: "जब आप सुबह उठते हैं, आपकी स्वाभाविक अवस्था कैसी होती है?", tags: ["sattva","rajas","tamas","tamas"], options: ["तरोताज़ा और सार्थक दिन के लिए तैयार", "उठते ही योजनाएं बनने लगती हैं", "सतर्क पर बेचैन", "उठना कठिन लगता है"] },
      { text: "जब स्थिति योजना अनुसार नहीं होती, कैसे प्रतिक्रिया करते हैं?", tags: ["sattva","rajas","tamas","rajas"], options: ["रुककर स्वीकृति से अनुकूलित", "तुरंत नया मार्ग खोजता/खोजती हूं", "निराश होकर जल्दी प्रतिक्रिया", "पीछे हट जाता/जाती हूं"] },
      { text: "आपका भोजन से संबंध कैसा है?", tags: ["sattva","rajas","tamas","tamas"], options: ["सरल, पोषक भोजन", "तीखे, मसालेदार स्वाद", "जल्दी खाना, ध्यान भटका", "अधिक खाना, बाद में सुस्ती"] },
      { text: "चुपचाप बैठने पर क्या उठता है?", tags: ["sattva","tamas","rajas","tamas"], options: ["शांत उपस्थिति का बोध", "तंद्रा या भारी रिक्तता", "बेचैनी", "चिंता या अनसुलझे विचार"] },
      { text: "अभी आपकी प्राथमिक प्रेरणा क्या है?", tags: ["sattva","rajas","tamas","rajas"], options: ["स्वयं को समझना और योगदान", "उपलब्धि और विकास", "सुख खोजना", "चलते रहना"] },
      { text: "आप अपनी भावनाओं से कैसे संबंधित हैं?", tags: ["sattva","tamas","rajas","tamas"], options: ["लहरों की तरह", "भारी और धीमी", "तेज़ी से बदलती हैं", "भावनात्मक रूप से सुन्न"] },
      { text: "निर्णय लेते समय क्या मार्गदर्शन करता है?", tags: ["rajas","sattva","tamas","rajas"], options: ["तात्कालिकता और महत्वाकांक्षा", "स्पष्टता और विवेक", "आदत या सुविधा", "इच्छा और आवेग"] },
      { text: "आपकी नींद कैसी है?", tags: ["sattva","rajas","tamas","tamas"], options: ["अच्छी नींद, तरोताज़ा", "हल्की नींद", "लंबी नींद पर थकान", "दिनभर उनींदापन"] },
      { text: "कार्य के दौरान आपका मन कैसा रहता है?", tags: ["sattva","rajas","tamas","tamas"], options: ["आसानी से केंद्रित", "विचार और विचलन साथ", "शुरुआत कठिन", "प्रतिरोध भारी"] },
      { text: "कष्ट देखकर पहली प्रतिक्रिया?", tags: ["sattva","tamas","rajas","rajas"], options: ["करुणा और समझने की इच्छा", "अभिभूत", "तुरंत ठीक करना", "असहाय, ध्यान हटाना"] },
      { text: "कर्तव्यों से आपका संबंध?", tags: ["sattva","rajas","tamas","tamas"], options: ["स्थिरता से, आंतरिक धर्म से", "तीव्रता से", "असुविधाजनक हों तो टालना", "यांत्रिक रूप से"] },
      { text: "इच्छाओं का अनुभव?", tags: ["sattva","rajas","tamas","rajas"], options: ["देखता हूं पर चलाती नहीं", "तीव्र चाहत", "सुख-सुविधा", "लगातार बदलती हैं"] },
      { text: "दिन के अंत में शरीर कैसा?", tags: ["sattva","rajas","tamas","tamas"], options: ["सुखद थकान", "उत्तेजित पर थका", "भारी और सुस्त", "थका — दिया बहुत या कम"] },
      { text: "जीवन पर विचार करने पर कौन सी भावना उठती है?", tags: ["sattva","rajas","tamas","tamas"], options: ["कृतज्ञता", "तात्कालिकता", "पश्चाताप", "भ्रम"] },
      { text: "कौन सा आपके आंतरिक अनुभव को व्यक्त करता है?", tags: ["sattva","rajas","tamas","rajas"], options: ["स्पष्टता जो लौटती है", "गति में हूं", "भारीपन", "ऊर्जा जो बिखर जाती है"] }
    ]
  },
  staticReflections: {
    sattva: {
      dominant: 'Sattva', dominantHi: 'सत्त्व',
      subtitle: 'The quality of clarity and harmony', subtitleHi: 'स्पष्टता और सामंजस्य का गुण',
      reflection: "Sattva is rising in you. There is a clarity that returns even amid difficulty — a quiet ability to observe your own mind without being swept by it. The Gita honors this quality as the path closest to wisdom: it brings illumination, peace, and a natural goodness in action.\n\nYet Sattva also has its own subtle attachment — to knowledge itself, to feeling 'good' or 'pure', to the comfort of equanimity. The Gita warns even against this binding, gentle as it is. True liberation lies beyond all three Gunas, but Sattva is the threshold.\n\nFor now, your work is to deepen this clarity into action. Let your steadiness become a service. Let your peace become a presence others can rest in.",
      reflectionHi: "आप में सत्त्व का उदय हो रहा है। एक स्पष्टता है जो कठिनाई में भी लौटती है। गीता इस गुण को ज्ञान के सबसे निकट का मार्ग मानती है।\n\nफिर भी सत्त्व का अपना सूक्ष्म बंधन है — ज्ञान से, 'अच्छा' होने से। गीता इस कोमल बंधन से भी सावधान करती है।\n\nअभी आपका कार्य है इस स्पष्टता को कर्म में गहरा करना।",
      shloka: 'tatra sattvam nirmalatvat prakashakam anamayam', shlokaHi: 'तत्र सत्त्वं निर्मलत्वात् प्रकाशकमनामयम्',
      shlokaRef: 'BG 14.6',
      shlokaMeaning: 'Of these, Sattva — being pure — illuminates and frees from suffering.',
      shlokaMeaningHi: 'इनमें सत्त्व निर्मल होने से प्रकाशक है और दुख से मुक्त करता है।'
    },
    rajas: {
      dominant: 'Rajas', dominantHi: 'रजस',
      subtitle: 'The quality of passion and motion', subtitleHi: 'जुनून और गति का गुण',
      reflection: "Rajas dominates your inner landscape right now — the quality of passion, of restlessness, of forward motion. You are someone who acts, who reaches, who refuses to settle. There is power here. The world is built by people in whom Rajas burns.\n\nBut the Gita is honest about Rajas's shadow: it binds through attachment to outcomes. The very fire that drives you also exhausts you. Achievement chases achievement; rest feels like failure.\n\nThe path is not to extinguish your fire — it is to refine it. Act, but with less grasping. Strive, but for what is true. Rajas in service of Sattva becomes a noble force.",
      reflectionHi: "रजस अभी आपके भीतर प्रबल है — जुनून, बेचैनी, आगे बढ़ने का गुण। आप कर्म करते हैं, पहुंचते हैं। यहां शक्ति है।\n\nपर गीता रजस की छाया भी दिखाती है: यह परिणामों से बांधता है।\n\nमार्ग आग बुझाना नहीं — उसे शुद्ध करना है।",
      shloka: 'rajo ragatmakam viddhi trishna-sanga-samudbhavam', shlokaHi: 'रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम्',
      shlokaRef: 'BG 14.7',
      shlokaMeaning: 'Know Rajas as passion, born of craving and attachment, binding through action.',
      shlokaMeaningHi: 'रजस को राग रूप जानो, तृष्णा और आसक्ति से उत्पन्न।'
    },
    tamas: {
      dominant: 'Tamas', dominantHi: 'तमस',
      subtitle: 'The quality of inertia and rest', subtitleHi: 'जड़ता और विश्राम का गुण',
      reflection: "Tamas is presently the dominant force in your inner weather — the quality of heaviness, of inertia, of a fog that does not lift easily. The Gita does not judge this; it simply names it. You may be in a season of fatigue, of unclear motivation.\n\nThe danger of Tamas, the Gita warns, is that it binds through delusion — a slow forgetting of what matters. But there is wisdom hidden here too: Tamas is the body's call for rest, for restoration.\n\nThe path forward is gentle — small acts of clarity, simple wholesome rhythms, contact with light.",
      reflectionHi: "तमस अभी आपके भीतर प्रबल है — भारीपन, जड़ता, धुंध। गीता न्याय नहीं करती।\n\nगीता कहती है तमस का खतरा यह है कि वह मोह से बांधता है। पर यहां छिपा ज्ञान भी है।\n\nमार्ग कोमल है — स्पष्टता के छोटे कार्य।",
      shloka: 'tamas tv ajnana-jam viddhi mohanam sarva-dehinam', shlokaHi: 'तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्',
      shlokaRef: 'BG 14.8',
      shlokaMeaning: 'Know Tamas as born of ignorance, deluding all embodied beings.',
      shlokaMeaningHi: 'तमस को अज्ञान से उत्पन्न जानो।'
    }
  }
};
