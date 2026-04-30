// Pandava Archetypes Quiz Data
// Which of the five Pandava brothers do you resemble?

const PANDAVA_QUIZ = {
  id: 'pandava',
  
  title: {
    en: 'Pandava Archetypes',
    hi: 'पांडव आर्कीटाइप्स'
  },
  
  subtitle: {
    en: 'Which Pandava brother do you resemble?',
    hi: 'आप किस पांडव भाई के समान हैं?'
  },
  
  description: {
    en: 'The five Pandava brothers each embody a distinct archetype — from Yudhishthira\'s dharmic leadership to Sahadeva\'s quiet wisdom. Discover which brother\'s essence resonates with your soul.',
    hi: 'पांच पांडव भाई प्रत्येक एक अलग आर्कीटाइप का प्रतीक हैं — युधिष्ठिर के धार्मिक नेतृत्व से लेकर सहदेव की शांत बुद्धि तक। जानें कि किस भाई का सार आपकी आत्मा से मेल खाता है।'
  },

  categories: [
    {
      id: 'yudhishthira',
      name: { en: 'Yudhishthira', hi: 'युधिष्ठिर' },
      title: { en: 'The Dharmic Leader', hi: 'धर्मिष्ठ नेता' },
      core: { en: 'Principled, seeks truth, values righteousness above all', hi: 'सिद्धांतवादी, सत्य की खोज, सबसे ऊपर धर्म को महत्व देते हैं' },
      shadow: { en: 'Paralyzed by moral dilemmas, fears making wrong choices', hi: 'नैतिक दुविधाओं से पंगु, गलत चुनाव करने का भय' },
      image: 'yudhishthira.png'
    },
    {
      id: 'bhima',
      name: { en: 'Bhima', hi: 'भीम' },
      title: { en: 'The Protective Warrior', hi: 'रक्षक योद्धा' },
      core: { en: 'Direct action, protective strength, cuts through complexity', hi: 'प्रत्यक्ष कार्रवाई, सुरक्षात्मक शक्ति, जटिलता को काटता है' },
      shadow: { en: 'Impulsive, can be harsh, bulldozes subtlety', hi: 'आवेगी, कठोर हो सकता है, सूक्ष्मता को कुचल देता है' },
      image: 'bhima.png'
    },
    {
      id: 'arjuna',
      name: { en: 'Arjuna', hi: 'अर्जुन' },
      title: { en: 'The Skilled Seeker', hi: 'कुशल साधक' },
      core: { en: 'Excellence-driven, seeks mastery, receptive to guidance', hi: 'उत्कृष्टता-प्रेरित, महारत की तलाश, मार्गदर्शन के प्रति ग्रहणशील' },
      shadow: { en: 'Performance anxiety, needs validation, overthinks', hi: 'प्रदर्शन की चिंता, सत्यापन की जरूरत, अधिक सोचता है' },
      image: 'arjuna.png'
    },
    {
      id: 'nakula',
      name: { en: 'Nakula', hi: 'नकुल' },
      title: { en: 'The Graceful Diplomat', hi: 'कुशल राजनयिक' },
      core: { en: 'Relational intelligence, seeks harmony, aesthetic grace', hi: 'संबंधपरक बुद्धि, सामंजस्य की तलाश, सौंदर्यात्मक अनुग्रह' },
      shadow: { en: 'People-pleasing, avoids conflict, fears rejection', hi: 'लोगों को खुश करना, संघर्ष से बचना, अस्वीकृति का भय' },
      image: 'nakula.png'
    },
    {
      id: 'sahadeva',
      name: { en: 'Sahadeva', hi: 'सहदेव' },
      title: { en: 'The Wise Observer', hi: 'ज्ञानी पर्यवेक्षक' },
      core: { en: 'Intuitive wisdom, sees patterns, strategic depth', hi: 'सहज ज्ञान, पैटर्न देखता है, रणनीतिक गहराई' },
      shadow: { en: 'Over-analysis, struggles to act, detached', hi: 'अति-विश्लेषण, कार्य करने में संघर्ष, अलग' },
      image: 'sahadeva.png'
    }
  ],

  questions: [
    {
      id: 'q1',
      text: {
        en: 'When facing a difficult decision, you tend to...',
        hi: 'कठिन निर्णय का सामना करते समय, आप...'
      },
      options: {
        en: [
          'Consider what is morally right, even if it\'s hard',
          'Trust your gut and act quickly',
          'Seek advice from someone you respect',
          'Consider how it affects relationships',
          'Analyze all angles before moving'
        ],
        hi: [
          'नैतिक रूप से सही क्या है, इस पर विचार करें, भले ही यह कठिन हो',
          'अपनी सहज बुद्धि पर भरोसा करें और जल्दी कार्य करें',
          'किसी ऐसे व्यक्ति से सलाह लें जिसका आप सम्मान करते हैं',
          'विचार करें कि यह रिश्तों को कैसे प्रभावित करता है',
          'आगे बढ़ने से पहले सभी कोणों का विश्लेषण करें'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q2',
      text: {
        en: 'In conflict, your natural response is to...',
        hi: 'संघर्ष में, आपकी स्वाभाविक प्रतिक्रिया...'
      },
      options: {
        en: [
          'Appeal to shared principles or fairness',
          'Stand your ground firmly',
          'Feel anxious but engage when necessary',
          'Try to find middle ground',
          'Step back and observe the dynamics'
        ],
        hi: [
          'साझा सिद्धांतों या निष्पक्षता की अपील करें',
          'दृढ़ता से अपनी बात पर खड़े रहें',
          'चिंतित महसूस करें लेकिन जरूरत पड़ने पर शामिल हों',
          'मध्य मार्ग खोजने का प्रयास करें',
          'पीछे हटें और गतिशीलता का निरीक्षण करें'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q3',
      text: {
        en: 'What motivates you most in your work?',
        hi: 'आपके काम में आपको सबसे ज्यादा क्या प्रेरित करता है?'
      },
      options: {
        en: [
          'Doing what is right and meaningful',
          'Protecting what and who matters to you',
          'Becoming excellent at your craft',
          'Creating beauty or connection',
          'Understanding how things work'
        ],
        hi: [
          'जो सही और सार्थक है वह करना',
          'जो और कौन आपके लिए मायने रखता है उसकी रक्षा करना',
          'अपनी कला में उत्कृष्ट बनना',
          'सुंदरता या संबंध बनाना',
          'समझना कि चीजें कैसे काम करती हैं'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q4',
      text: {
        en: 'When someone asks for your help, you...',
        hi: 'जब कोई आपकी मदद मांगता है, तो आप...'
      },
      options: {
        en: [
          'Help if it aligns with your values',
          'Jump in immediately if they need you',
          'Want to do it well, worry if you can',
          'Almost always say yes',
          'Offer insight rather than action'
        ],
        hi: [
          'मदद करें यदि यह आपके मूल्यों के अनुरूप है',
          'यदि उन्हें आपकी जरूरत है तो तुरंत कूद पड़ें',
          'इसे अच्छी तरह से करना चाहते हैं, चिंता है कि क्या आप कर सकते हैं',
          'लगभग हमेशा हां कहते हैं',
          'कार्रवाई के बजाय अंतर्दृष्टि प्रदान करें'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q5',
      text: {
        en: 'Your relationship with rules and systems is...',
        hi: 'नियमों और व्यवस्थाओं के साथ आपका संबंध...'
      },
      options: {
        en: [
          'I respect them deeply if they are just',
          'I follow what makes sense, ignore what doesn\'t',
          'I want clear structure to follow',
          'I adapt them to keep peace',
          'I see their patterns but don\'t feel bound by them'
        ],
        hi: [
          'मैं उनका गहरा सम्मान करता हूं यदि वे न्यायसंगत हैं',
          'मैं उसका पालन करता हूं जो समझ में आता है, जो नहीं उसे नजरअंदाज करता हूं',
          'मैं पालन करने के लिए स्पष्ट संरचना चाहता हूं',
          'मैं शांति बनाए रखने के लिए उन्हें अनुकूलित करता हूं',
          'मैं उनके पैटर्न देखता हूं लेकिन उनसे बंधा हुआ महसूस नहीं करता'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q6',
      text: {
        en: 'In a group project, you naturally become the...',
        hi: 'एक समूह परियोजना में, आप स्वाभाविक रूप से बन जाते हैं...'
      },
      options: {
        en: [
          'Ethical compass and voice of reason',
          'Executor who gets it done',
          'Skilled contributor seeking to excel',
          'Connector and relationship manager',
          'Strategist and pattern-spotter'
        ],
        hi: [
          'नैतिक दिशा और तर्क की आवाज',
          'निष्पादक जो इसे पूरा करता है',
          'कुशल योगदानकर्ता जो उत्कृष्टता की तलाश में है',
          'कनेक्टर और संबंध प्रबंधक',
          'रणनीतिकार और पैटर्न-स्पॉटर'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q7',
      text: {
        en: 'Your biggest fear is...',
        hi: 'आपका सबसे बड़ा डर...'
      },
      options: {
        en: [
          'Compromising your principles',
          'Being powerless to protect',
          'Failing or being inadequate',
          'Being disliked or rejected',
          'Acting without full understanding'
        ],
        hi: [
          'अपने सिद्धांतों से समझौता करना',
          'रक्षा करने में शक्तिहीन होना',
          'असफल होना या अपर्याप्त होना',
          'नापसंद या अस्वीकार किया जाना',
          'पूर्ण समझ के बिना कार्य करना'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q8',
      text: {
        en: 'When you make a mistake, you tend to...',
        hi: 'जब आप गलती करते हैं, तो आप...'
      },
      options: {
        en: [
          'Feel deep shame and question your judgment',
          'Get frustrated and correct it quickly',
          'Spiral into self-doubt',
          'Worry about how others see you',
          'Analyze what went wrong clinically'
        ],
        hi: [
          'गहरी शर्म महसूस करें और अपने निर्णय पर सवाल उठाएं',
          'निराश हों और इसे जल्दी से ठीक करें',
          'आत्म-संदेह में फंस जाएं',
          'चिंता करें कि दूसरे आपको कैसे देखते हैं',
          'नैदानिक रूप से विश्लेषण करें कि क्या गलत हुआ'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q9',
      text: {
        en: 'Your approach to learning is...',
        hi: 'सीखने के लिए आपका दृष्टिकोण...'
      },
      options: {
        en: [
          'I seek timeless wisdom and truth',
          'I learn by doing, hands-on',
          'I want a teacher or proven method',
          'I learn through relationships and stories',
          'I notice patterns and teach myself'
        ],
        hi: [
          'मैं कालातीत ज्ञान और सत्य की तलाश करता हूं',
          'मैं व्यावहारिक रूप से करके सीखता हूं',
          'मुझे एक शिक्षक या सिद्ध विधि चाहिए',
          'मैं रिश्तों और कहानियों के माध्यम से सीखता हूं',
          'मैं पैटर्न देखता हूं और खुद को सिखाता हूं'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q10',
      text: {
        en: 'People would describe you as...',
        hi: 'लोग आपको कैसे बताएंगे...'
      },
      options: {
        en: [
          'Principled and trustworthy',
          'Strong and direct',
          'Talented but self-critical',
          'Warm and considerate',
          'Perceptive and quiet'
        ],
        hi: [
          'सिद्धांतवादी और भरोसेमंद',
          'मजबूत और सीधे',
          'प्रतिभाशाली लेकिन आत्म-आलोचक',
          'गर्म और विचारशील',
          'बोधगम्य और शांत'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q11',
      text: {
        en: 'When overwhelmed, you...',
        hi: 'जब अभिभूत होते हैं, तो आप...'
      },
      options: {
        en: [
          'Get paralyzed by what\'s "right"',
          'Push through with force',
          'Doubt yourself deeply',
          'Over-accommodate others',
          'Withdraw to think'
        ],
        hi: [
          'जो "सही" है उससे पंगु हो जाते हैं',
          'बल के साथ आगे बढ़ते हैं',
          'गहराई से खुद पर संदेह करते हैं',
          'दूसरों को अधिक समायोजित करते हैं',
          'सोचने के लिए पीछे हट जाते हैं'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q12',
      text: {
        en: 'Your relationship with ambition is...',
        hi: 'महत्वाकांक्षा के साथ आपका संबंध...'
      },
      options: {
        en: [
          'I want to live rightly, not necessarily succeed',
          'I want to be strong and effective',
          'I want to be the best at what I do',
          'I want to be loved and appreciated',
          'I want to understand, not necessarily achieve'
        ],
        hi: [
          'मैं सही तरीके से जीना चाहता हूं, जरूरी नहीं कि सफल हो',
          'मैं मजबूत और प्रभावी होना चाहता हूं',
          'मैं जो करता हूं उसमें सर्वश्रेष्ठ बनना चाहता हूं',
          'मैं प्यार और सराहना चाहता हूं',
          'मैं समझना चाहता हूं, जरूरी नहीं कि हासिल करूं'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q13',
      text: {
        en: 'In social situations, you...',
        hi: 'सामाजिक स्थितियों में, आप...'
      },
      options: {
        en: [
          'Engage when it feels meaningful',
          'Are direct and unpretentious',
          'Feel a bit self-conscious',
          'Make others feel comfortable',
          'Prefer observing to participating'
        ],
        hi: [
          'जब सार्थक लगे तो संलग्न हों',
          'सीधे और बिना दिखावे के हैं',
          'थोड़ा आत्म-सचेत महसूस करते हैं',
          'दूसरों को सहज महसूस कराते हैं',
          'भाग लेने के बजाय देखना पसंद करते हैं'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q14',
      text: {
        en: 'Your greatest strength is...',
        hi: 'आपकी सबसे बड़ी ताकत...'
      },
      options: {
        en: [
          'Integrity and moral clarity',
          'Courage and loyalty',
          'Dedication and skill',
          'Empathy and grace',
          'Wisdom and insight'
        ],
        hi: [
          'अखंडता और नैतिक स्पष्टता',
          'साहस और वफादारी',
          'समर्पण और कौशल',
          'सहानुभूति और अनुग्रह',
          'ज्ञान और अंतर्दृष्टि'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    },
    {
      id: 'q15',
      text: {
        en: 'If you could change one thing about yourself...',
        hi: 'यदि आप अपने बारे में एक चीज बदल सकते हैं...'
      },
      options: {
        en: [
          'I wish I could act faster',
          'I wish I were more patient',
          'I wish I trusted myself more',
          'I wish I could say no',
          'I wish I could just do instead of analyze'
        ],
        hi: [
          'काश मैं तेजी से कार्य कर पाता',
          'काश मैं अधिक धैर्यवान होता',
          'काश मैं खुद पर अधिक भरोसा करता',
          'काश मैं ना कह पाता',
          'काश मैं विश्लेषण के बजाय बस कर पाता'
        ]
      },
      tags: ['yudhishthira', 'bhima', 'arjuna', 'nakula', 'sahadeva']
    }
  ],

  reflections: {
    yudhishthira: {
      en: `Dear seeker, your answers reveal a soul devoted to dharma — to what is right, true, and just. Like Yudhishthira, you carry an inner compass that refuses to compromise, even when the path is unclear. You seek not just success, but righteousness. You value truth above convenience, principle above popularity.

But this strength has its shadow. The weight of always choosing right can paralyze you. You know this — the moments when you stand frozen, unable to act because no option feels perfect. The Gita reminds us that even dharma can become a cage when pursued with rigidity.

Krishna's counsel to you is gentle: Dharma is not found in perfection, but in sincere action. Your integrity is your strength, but do not let the fear of imperfection keep you from the battlefield of life. Act with your best understanding, then release the outcome to the divine. Even Yudhishthira had to learn this truth through his own journey.`,
      hi: `प्रिय साधक, आपके उत्तर धर्म के प्रति समर्पित आत्मा को प्रकट करते हैं — जो सही, सत्य और न्यायसंगत है। युधिष्ठिर की तरह, आप एक आंतरिक दिशा-निर्देश रखते हैं जो समझौता करने से इनकार करता है, भले ही मार्ग अस्पष्ट हो। आप केवल सफलता नहीं, बल्कि धार्मिकता चाहते हैं। आप सुविधा से ऊपर सत्य को, लोकप्रियता से ऊपर सिद्धांत को महत्व देते हैं। लेकिन इस शक्ति की अपनी छाया है। हमेशा सही चुनने का बोझ आपको लकवाग्रस्त कर सकता है। गीता हमें याद दिलाती है कि कठोरता के साथ पीछा करने पर धर्म भी एक पिंजरा बन सकता है। कृष्ण की आपके लिए सलाह कोमल है: धर्म पूर्णता में नहीं, बल्कि ईमानदार कार्रवाई में पाया जाता है।`
    },
    bhima: {
      en: `Dear seeker, your answers reveal a spirit of fierce protection and direct action. Like Bhima, you do not hesitate when someone you love needs defending. You cut through complexity with strength and clarity. Where others deliberate endlessly, you act. Where others avoid confrontation, you stand firm.

This directness is your power. But it carries a shadow — the tendency to bulldoze nuance, to dismiss what feels weak or soft. The Gita teaches that true strength includes the capacity for gentleness, that the warrior's power is incomplete without wisdom's restraint.

Krishna would remind you: Your courage is a gift, but channel it with discernment. Not every situation requires force. Not every problem yields to a frontal assault. The greatest warriors know when to strike and when to hold back. Let your strength become conscious, not just reactive. Then you become truly unstoppable.`,
      hi: `प्रिय साधक, आपके उत्तर उग्र सुरक्षा और प्रत्यक्ष कार्रवाई की भावना को प्रकट करते हैं। भीम की तरह, जब किसी प्रियजन को बचाव की जरूरत होती है तो आप झिझकते नहीं। आप जटिलता को शक्ति और स्पष्टता के साथ काटते हैं। जहां दूसरे अंतहीन विचार-विमर्श करते हैं, वहां आप कार्य करते हैं। यह प्रत्यक्षता आपकी शक्ति है। लेकिन यह एक छाया रखती है — सूक्ष्मता को कुचलने की प्रवृत्ति। गीता सिखाती है कि सच्ची शक्ति में कोमलता की क्षमता शामिल है। कृष्ण आपको याद दिलाएंगे: आपका साहस एक उपहार है, लेकिन इसे विवेक के साथ प्रसारित करें।`
    },
    arjuna: {
      en: `Dear seeker, your answers reveal the heart of a skilled seeker — someone who wants not just to succeed, but to excel. Like Arjuna, you are driven by the pursuit of mastery. You seek teachers, refine your craft, question yourself deeply. This dedication to excellence is your gift.

But it comes with a shadow you know well: the anxiety of performance, the need for validation, the spiral of self-doubt. You know the paralysis that comes from asking Am I good enough too often. The Gita offers you the same teaching Krishna gave Arjuna on the battlefield.

Your worth is not in the outcome. Your value is not measured by others approval. Do your work with full devotion, then release attachment to the result. Trust the process. Trust your teacher. Most importantly, trust yourself. Excellence is not perfection — it is sincere effort offered without fear. This is what Krishna asks of you.`,
      hi: `प्रिय साधक, आपके उत्तर एक कुशल साधक के दिल को प्रकट करते हैं — कोई जो केवल सफल होना नहीं, बल्कि उत्कृष्ट होना चाहता है। अर्जुन की तरह, आप महारत की खोज से प्रेरित हैं। आप शिक्षक खोजते हैं, अपनी कला को परिष्कृत करते हैं, खुद से गहराई से सवाल करते हैं। लेकिन यह एक छाया के साथ आता है: प्रदर्शन की चिंता, सत्यापन की आवश्यकता, आत्म-संदेह का सर्पिल। गीता आपको वही शिक्षा प्रदान करती है जो कृष्ण ने अर्जुन को युद्ध के मैदान में दी थी। आपका मूल्य परिणाम में नहीं है। अपना काम पूर्ण भक्ति के साथ करें, फिर परिणाम के प्रति आसक्ति छोड़ दें।`
    },
    nakula: {
      en: `Dear seeker, your answers reveal a soul that seeks connection and harmony above all. Like Nakula, you carry grace, empathy, and a deep awareness of how your actions affect others. You are the bridge-builder, the one who makes others feel seen and valued. This is a profound gift.

But it has its shadow — the tendency to lose yourself in others needs, to avoid necessary conflict, to say yes when you mean no. You know the exhaustion that comes from always accommodating, always smoothing over, always seeking to be liked.

The Gita teaches that true harmony does not come from avoiding all discord. Sometimes love requires saying no. Sometimes connection demands honest boundaries. Krishna would tell you: Your empathy is beautiful, but do not abandon yourself in service of peace. The most graceful act is to honor both others and yourself. This is the balance you seek.`,
      hi: `प्रिय साधक, आपके उत्तर एक ऐसी आत्मा को प्रकट करते हैं जो सबसे ऊपर संबंध और सामंजस्य चाहती है। नकुल की तरह, आप अनुग्रह, सहानुभूति, और इस बात की गहरी जागरूकता रखते हैं कि आपके कार्य दूसरों को कैसे प्रभावित करते हैं। आप पुल-निर्माता हैं। लेकिन इसकी अपनी छाया है — दूसरों की जरूरतों में खुद को खोने की प्रवृत्ति। गीता सिखाती है कि सच्चा सामंजस्य सभी कलह से बचने से नहीं आता। कभी-कभी प्यार में ना कहना आवश्यक है। कृष्ण आपसे कहेंगे: आपकी सहानुभूति सुंदर है, लेकिन शांति की सेवा में खुद को छोड़ न दें।`
    },
    sahadeva: {
      en: `Dear seeker, your answers reveal a mind that sees what others miss — patterns, connections, the invisible architecture beneath the surface. Like Sahadeva, you possess intuitive wisdom and strategic depth. You observe quietly, understand profoundly, and see the long game.

But this gift has its shadow: the paralysis of over-analysis, the detachment that comes from seeing too much, the difficulty of translating insight into action. You know the frustration of understanding what needs to be done yet struggling to simply do it.

The Gita offers you this: Knowledge without action is incomplete. Wisdom finds its fulfillment not in more seeing, but in engaged doing. Krishna would ask you to trust that you do not need perfect understanding to act. Sometimes the deepest wisdom is to step forward despite incomplete information. Your insights are valuable — but only when they touch the ground of lived experience. This is your invitation.`,
      hi: `प्रिय साधक, आपके उत्तर एक ऐसे मन को प्रकट करते हैं जो वह देखता है जो दूसरे चूक जाते हैं — पैटर्न, संबंध, सतह के नीचे की अदृश्य वास्तुकला। सहदेव की तरह, आप सहज ज्ञान और रणनीतिक गहराई रखते हैं। आप चुपचाप देखते हैं, गहराई से समझते हैं। लेकिन इस उपहार की अपनी छाया है: अति-विश्लेषण का पक्षाघात, बहुत अधिक देखने से आने वाली अलगाव। गीता आपको यह प्रदान करती है: कार्रवाई के बिना ज्ञान अधूरा है। ज्ञान अपनी पूर्णता अधिक देखने में नहीं, बल्कि लगे हुए करने में पाता है। कृष्ण आपसे कहेंगे कि आपको कार्य करने के लिए पूर्ण समझ की आवश्यकता नहीं है।`
    }
  }
};
