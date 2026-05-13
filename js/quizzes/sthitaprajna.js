// Sthitaprajna Quiz — How Steady Is Your Mind?
window.QUIZ_DATA = {
  id: 'sthitaprajna',

  meta: {
    en: {
      title: 'How Steady Is<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Your Mind?</span>',
      shareTitle: 'Mind Steadiness',
      chapter: 'Bhagavad Gita · Chapter 2 · The Sthitaprajna',
      intro: 'In Chapter 2, Arjuna asks Krishna: "What does a person of steady wisdom look like? How do they speak, sit, move?" Krishna’s answer — spanning 18 verses — is the Gita’s most precise portrait of an awakened mind. This inquiry reveals where your mind stands on that spectrum.',
      tagPrefix: 'MIND · STEADINESS',
      categoryNames: {
        stirred: 'The Stirred Mind',
        striving: 'The Striving Mind',
        steady: 'The Steady Mind',
        established: 'Sthitaprajna'
      }
    },
    hi: {
      title: 'आपका मन<br><span style="color: var(--bo-gold-deep); font-weight: 500;">कितना स्थिर है?</span>',
      shareTitle: 'मन की स्थिरता',
      chapter: 'भगवद्गीता · अध्याय २ · स्थितप्रज्ञ',
      intro: 'अध्याय २ में अर्जुन ने कृष्ण से पूछा: "स्थितप्रज्ञ कैसा दिखता है? वह कैसे बोलता है, बैठता है, चलता है?" कृष्ण का उत्तर — १८ श्लोकों में — एक जागृत मन का सबसे सटीक चित्र है। यह जिज्ञासा बताती है कि आपका मन उस यात्रा में कहाँ है।',
      tagPrefix: 'मन · स्थिरता',
      categoryNames: {
        stirred: 'विक्षिप्त मन',
        striving: 'साधक मन',
        steady: 'धीर मन',
        established: 'स्थितप्रज्ञ'
      }
    }
  },

  categories: ['stirred', 'striving', 'steady', 'established'],

  questions: {
    en: [
      {
        text: 'When something goes wrong unexpectedly, your mind...',
        options: [
          'Floods immediately — worry, blame, or panic take over',
          'Gets disturbed but I work to bring it back to balance',
          'Dips briefly, then settles back without much effort',
          'Stays essentially undisturbed — I engage with the situation from a quiet center'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When you receive strong praise or criticism, you...',
        options: [
          'Am visibly moved — praise lifts me, criticism wounds me',
          'Feel the pull of both, but try not to be defined by them',
          'Notice them, feel them briefly, but don\'t carry them long',
          'Receive both with equal steadiness — neither destabilizes me'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When a strong desire arises — for something, someone, or an outcome — your mind...',
        options: [
          'Locks onto it fully, becoming restless until it is satisfied or lost',
          'Gets caught, but I practice returning to equanimity',
          'Observes the desire without being consumed by it most of the time',
          'Witnesses it arise and pass like a wave — I am not moved from my center'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'In the middle of a difficult or painful situation, what is your mind like?',
        options: [
          'Turbulent — fear, resistance, or grief dominate',
          'Difficult but I actively apply wisdom to stay present',
          'Uncomfortable but not overwhelmed — I can still think and act clearly',
          'Fundamentally clear and present — pain is felt, but the witness is undisturbed'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When you sit quietly with nothing to do, your mind...',
        options: [
          'Fills immediately with chatter, worry, or daydreaming',
          'Wanders, but I notice and return — meditation is effortful',
          'Finds stillness with modest effort and sustains it reasonably',
          'Rests naturally — silence is my default, not something I must maintain'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'How much does the mood of others affect your inner state?',
        options: [
          'Enormously — I absorb the energy of the room and lose my own',
          'I get pulled in, but make conscious effort to return to myself',
          'I feel others\' emotions clearly but am not dominated by them',
          'I can be fully present with others\' states without being moved from my own'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When you make a mistake or fail at something that mattered, you...',
        options: [
          'Spiral into self-criticism, shame, or replay the event repeatedly',
          'Struggle with self-judgment but work to move toward learning',
          'Feel the sting, extract what\'s useful, and genuinely move on',
          'Acknowledge it clearly and act on what is needed — without inner drama'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'What is your relationship with the future — what hasn\'t happened yet?',
        options: [
          'It occupies me greatly — anticipation, anxiety, or hope about outcomes',
          'I get pulled into future thinking but practice returning to the present',
          'I plan and prepare, but don\'t live in the future emotionally',
          'The present is where I truly live — the future is simply what I act toward'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When you act — work, create, serve — where does your attention mostly go?',
        options: [
          'Onto results: will this work? Will I succeed? What will others think?',
          'I get caught in outcomes but practice returning to the work itself',
          'Mostly into the action itself — results matter but don\'t dominate',
          'Fully into the act — I am the action, undivided from it, without anxiety about where it leads'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When someone wrongs you or acts unfairly, your inner response is...',
        options: [
          'Anger, hurt, or resentment that lingers and replays',
          'I feel the reaction but work to forgive or understand consciously',
          'Brief disturbance that dissolves fairly quickly into acceptance',
          'I see it clearly and respond appropriately — without inner agitation remaining'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'How dependent is your sense of peace on outer conditions?',
        options: [
          'Very — I am fine when things are good and undone when they aren\'t',
          'More than I\'d like — I\'m working to find peace that doesn\'t depend on circumstances',
          'Moderately — I have an inner baseline that holds even in difficulty',
          'My peace is largely independent of what is happening around me'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When you observe your own mind across the day, what do you notice?',
        options: [
          'Constant movement — it rarely settles, jumping from thought to thought',
          'More movement than I want — I\'m practicing but consistency is hard',
          'A mind that returns to stillness with modest effort throughout the day',
          'A mostly stable background awareness that thoughts move through without disturbing'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'What is your relationship with loss — of people, things, or phases of life?',
        options: [
          'Devastating — I cling, grieve intensely, and find it very hard to release',
          'Difficult, but I actively work with impermanence as a teaching',
          'I feel grief genuinely but hold it lightly — loss doesn\'t destabilize me for long',
          'Loss is fully acknowledged and fully felt, without resistance — impermanence is simply the nature of things'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'When life is uncertain — no clear direction, no firm ground — you feel...',
        options: [
          'Anxious, disoriented, or desperate to resolve the uncertainty fast',
          'Uncomfortable but working to trust and stay present with what is',
          'Able to rest in not-knowing with reasonable inner stability',
          'At ease — uncertainty is simply openness, and I am grounded in something that does not depend on certainty'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'Which speaks most honestly to your current inner experience?',
        options: [
          'My mind is largely at the mercy of what happens around and within me',
          'I am sincerely on the path — working, practicing, falling, returning',
          'I have found a measure of steadiness that holds across most of life\'s weather',
          'There is a stillness in me that circumstances no longer reach — the witness is awake'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      }
    ],
    hi: [
      {
        text: 'जब अचानक कुछ गलत हो जाता है, आपका मन...',
        options: [
          'तुरंत भर जाता है — चिंता, दोष, या घबराहट छा जाती है',
          'विचलित होता है पर मैं उसे वापस संतुलन में लाने का प्रयास करता हूं',
          'थोड़ा डूबता है, फिर बिना अधिक प्रयास के स्थिर हो जाता है',
          'मूलतः अविचलित रहता है — मैं एक शांत केंद्र से स्थिति से जुड़ता हूं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब तीव्र प्रशंसा या आलोचना मिलती है, आप...',
        options: [
          'स्पष्ट रूप से प्रभावित होते हैं — प्रशंसा उठाती है, आलोचना घायल करती है',
          'दोनों का खिंचाव महसूस होता है, पर उनसे परिभाषित न होने का प्रयास करते हैं',
          'नोटिस करते हैं, थोड़ा महसूस करते हैं, पर लंबे समय तक नहीं रखते',
          'दोनों को समान स्थिरता से ग्रहण करते हैं — कोई भी अस्थिर नहीं करता'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब किसी चीज़, व्यक्ति, या परिणाम की तीव्र इच्छा उठती है, आपका मन...',
        options: [
          'उस पर पूरी तरह टिक जाता है, बेचैन रहता है जब तक पूरी न हो या खो न जाए',
          'फंस जाता है, पर मैं समता में लौटने का अभ्यास करता हूं',
          'अधिकांश समय इच्छा को देखता है, उसमें डूबता नहीं',
          'इसे लहर की तरह उठते-गिरते देखता है — मेरा केंद्र हिलता नहीं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'किसी कठिन या दर्दनाक स्थिति में आपका मन कैसा होता है?',
        options: [
          'अशांत — भय, प्रतिरोध, या दुख हावी हो जाते हैं',
          'कठिन, पर मैं उपस्थित रहने के लिए सक्रिय रूप से ज्ञान का उपयोग करता हूं',
          'असुविधाजनक पर अभिभूत नहीं — मैं स्पष्ट सोच और कर्म कर सकता हूं',
          'मूलतः स्पष्ट और उपस्थित — दर्द महसूस होता है, पर साक्षी अविचलित रहता है'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब आप बिना कुछ किए चुपचाप बैठते हैं, आपका मन...',
        options: [
          'तुरंत बकवास, चिंता, या दिवास्वप्न से भर जाता है',
          'भटकता है, पर मैं नोटिस करके लौटता हूं — ध्यान प्रयासपूर्ण है',
          'मामूली प्रयास से स्थिरता पाता है और उचित समय तक बनाए रखता है',
          'स्वाभाविक रूप से विश्राम करता है — मौन मेरा स्वभाव है, जिसे बनाए रखना नहीं पड़ता'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'दूसरों का मूड आपकी आंतरिक अवस्था को कितना प्रभावित करता है?',
        options: [
          'बहुत — मैं कमरे की ऊर्जा सोख लेता हूं और अपना खो देता हूं',
          'खिंचता हूं, पर वापस अपने पर लौटने का सचेत प्रयास करता हूं',
          'दूसरों की भावनाएं स्पष्ट महसूस होती हैं, पर उनसे दबता नहीं',
          'दूसरों की अवस्था में पूरी तरह उपस्थित हो सकता हूं, अपने से हिले बिना'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब कोई गलती होती है या महत्वपूर्ण चीज़ में असफलता मिलती है, आप...',
        options: [
          'आत्म-आलोचना, शर्म, या घटना को बार-बार दोहराने में डूब जाते हैं',
          'आत्म-निर्णय से जूझते हैं, पर सीखने की ओर बढ़ने का प्रयास करते हैं',
          'चुभन महसूस करते हैं, उपयोगी लेते हैं, और वास्तव में आगे बढ़ जाते हैं',
          'स्पष्टता से स्वीकार करते हैं और जो जरूरी है वह करते हैं — बिना आंतरिक नाटक के'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'भविष्य — जो अभी नहीं हुआ — से आपका क्या संबंध है?',
        options: [
          'वह मुझे काफी व्यस्त रखता है — परिणामों की प्रत्याशा, चिंता, या आशा',
          'भविष्य की सोच में खिंचता हूं, पर वर्तमान में लौटने का अभ्यास करता हूं',
          'योजना बनाता हूं, पर भावनात्मक रूप से भविष्य में नहीं जीता',
          'वर्तमान ही मेरा सच्चा निवास है — भविष्य केवल वह है जिसकी ओर कर्म करता हूं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब आप कर्म करते हैं — काम, सृजन, सेवा — ध्यान अधिकांशतः कहाँ जाता है?',
        options: [
          'परिणाम पर: क्या यह काम करेगा? क्या मैं सफल होऊंगा? लोग क्या सोचेंगे?',
          'परिणाम में फंसता हूं, पर कर्म में लौटने का अभ्यास करता हूं',
          'अधिकांशतः कर्म में — परिणाम मायने रखते हैं, पर हावी नहीं होते',
          'पूरी तरह कर्म में — मैं और कर्म एक हैं, यह कहाँ ले जाएगा इसकी चिंता नहीं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब कोई आपके साथ गलत करता है या अनुचित व्यवहार करता है, आपकी आंतरिक प्रतिक्रिया...',
        options: [
          'क्रोध, दुख, या नाराज़गी जो लंबे समय तक रहती और दोहराती है',
          'प्रतिक्रिया महसूस होती है, पर मैं सचेत रूप से क्षमा या समझ की ओर काम करता हूं',
          'संक्षिप्त अशांति जो जल्दी स्वीकृति में बदल जाती है',
          'स्पष्ट रूप से देखता हूं और उचित प्रतिक्रिया करता हूं — बिना आंतरिक उत्तेजना के'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'आपकी शांति बाहरी परिस्थितियों पर कितनी निर्भर है?',
        options: [
          'बहुत — जब सब ठीक हो तो ठीक हूं, न हो तो नहीं',
          'चाहूं उससे अधिक — ऐसी शांति खोजने का प्रयास कर रहा हूं जो परिस्थितियों पर न टिके',
          'मध्यम — एक आंतरिक आधार है जो कठिनाई में भी बना रहता है',
          'मेरी शांति अधिकांशतः बाहर क्या हो रहा है उससे स्वतंत्र है'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'दिन भर अपने मन को देखने पर क्या नोटिस करते हैं?',
        options: [
          'निरंतर गति — यह कभी कम ही बैठता है, विचार से विचार पर कूदता है',
          'चाहूं उससे अधिक गति — अभ्यास कर रहा हूं पर निरंतरता कठिन है',
          'एक मन जो दिन भर मामूली प्रयास से स्थिरता पर लौटता है',
          'एक अधिकांशतः स्थिर पृष्ठभूमि जागरूकता जिसमें विचार बिना गड़बड़ाए गुजरते हैं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'हानि — लोगों, चीज़ों, या जीवन के चरणों की — से आपका क्या संबंध है?',
        options: [
          'विनाशकारी — मैं चिपकता हूं, गहरे शोक में जाता हूं, छोड़ना बहुत कठिन है',
          'कठिन, पर मैं अनित्यता को सक्रिय रूप से एक शिक्षा के रूप में लेता हूं',
          'शोक वास्तविक महसूस होता है पर हल्के से — हानि मुझे लंबे समय के लिए अस्थिर नहीं करती',
          'हानि पूरी तरह स्वीकार और महसूस की जाती है, बिना प्रतिरोध के — अनित्यता ही स्वभाव है'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'जब जीवन अनिश्चित हो — कोई स्पष्ट दिशा नहीं, कोई ठोस आधार नहीं — आप...',
        options: [
          'चिंतित, विभ्रांत, या अनिश्चितता जल्दी सुलझाने के लिए व्याकुल होते हैं',
          'असुविधाजनक, पर वर्तमान पर भरोसा रखने और उपस्थित रहने का प्रयास करते हैं',
          'उचित आंतरिक स्थिरता के साथ अज्ञात में विश्राम करने में सक्षम हैं',
          'सहज हैं — अनिश्चितता केवल खुलापन है, और मैं उस पर टिका हूं जो निश्चितता पर निर्भर नहीं'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      },
      {
        text: 'कौन सा आपके वर्तमान आंतरिक अनुभव को सबसे ईमानदारी से व्यक्त करता है?',
        options: [
          'मेरा मन अधिकांशतः इर्द-गिर्द और भीतर होने वाली चीज़ों के दया पर है',
          'मैं सच्चाई से मार्ग पर हूं — कर्म, अभ्यास, गिरना, लौटना',
          'मुझे एक स्थिरता मिली है जो जीवन के अधिकांश मौसम में टिकती है',
          'एक शांति है जिसे परिस्थितियां अब छू नहीं पातीं — साक्षी जागृत है'
        ],
        tags: ['stirred', 'striving', 'steady', 'established']
      }
    ]
  },

  staticReflections: {
    stirred: {
      dominant: 'The Stirred Mind', dominantHi: 'विक्षिप्त मन',
      subtitle: 'Moved by every wave', subtitleHi: 'हर लहर से हिलने वाला मन',
      reflection: "Dear seeker, your answers reveal a mind that is alive, responsive, and deeply sensitive — a mind that feels everything. This is not a flaw. The Gita does not condemn the stirred mind; it simply names the suffering it creates. A boat at the mercy of every wave is not broken — it is just not yet anchored.\n\nKrishna tells Arjuna plainly: the wandering mind is the greatest obstacle to peace, and it is also — with practice — conquerable. The very intensity that makes your mind reactive is the same intensity that, directed inward, becomes a powerful tool for transformation.\n\nYour work is not to shame the mind's movement but to begin — gently, consistently — to notice it. You cannot steady what you cannot see. Each time you catch the mind mid-wave and return to your breath, your body, or simple awareness, you have done the work. The path of the sthitaprajna begins precisely here — in this noticing.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक जीवंत, संवेदनशील मन को दिखाते हैं जो सब कुछ महसूस करता है। यह दोष नहीं है। गीता विक्षिप्त मन की निंदा नहीं करती — वह केवल उस पीड़ा को नाम देती है जो वह उत्पन्न करता है।\n\nकृष्ण अर्जुन से सीधे कहते हैं: भटकता मन शांति की सबसे बड़ी बाधा है, और अभ्यास से — जीतने योग्य भी है।\n\nआपका काम मन की गति को शर्मिंदा करना नहीं है — धीरे-धीरे, निरंतर — उसे नोटिस करना है। जब भी आप मन को लहर के बीच पकड़ें और सांस, शरीर, या साधारण जागरूकता पर लौटें — आपने काम कर लिया।",
      shloka: 'indriyaṇām hi caratāṁ yan mano\'nuvidhīyate / tad asya harati prajñāṁ vāyur nāvam ivāmbhasi',
      shlokaHi: 'इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते। तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥',
      shlokaRef: 'BG 2.67',
      shlokaMeaning: 'As a boat on the water is carried away by a strong wind, even one of the senses that the mind follows can carry away one\'s wisdom.',
      shlokaMeaningHi: 'जैसे जल में वायु नाव को बहा ले जाती है, वैसे ही मन जिस इंद्रिय के पीछे जाता है, वह बुद्धि को हर लेती है।'
    },
    striving: {
      dominant: 'The Striving Mind', dominantHi: 'साधक मन',
      subtitle: 'Sincerely on the path', subtitleHi: 'सच्चाई से मार्ग पर',
      reflection: "Dear seeker, your answers reveal a mind that is genuinely, seriously on the path. You feel the disturbances — but you do not stop there. You return. You practice. You fall and you begin again. This is not mediocrity; this is exactly what the Gita describes as sincere sadhana.\n\nKrishna does not promise the path is easy. He tells Arjuna clearly: the mind is restless, turbulent, strong, unyielding — but it can be subdued by practice and detachment. Not by perfection, but by persistence. The one who keeps returning is the one who arrives.\n\nTrust your sincerity. Do not measure your progress by how rarely you get disturbed — measure it by how quickly you return. The gap between the wave and your return to stillness is narrowing. That is the whole practice. Keep going.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक ऐसे मन को दिखाते हैं जो सच्चाई से, गंभीरता से मार्ग पर है। आप विक्षेप महसूस करते हैं — पर वहीं नहीं रुकते। लौटते हैं। अभ्यास करते हैं। गिरते हैं और फिर शुरू करते हैं। यही गीता की सच्ची साधना है।\n\nकृष्ण स्पष्ट कहते हैं: मन चंचल, प्रमाथी, बलवान है — पर अभ्यास और वैराग्य से वश में होता है।\n\nअपनी सच्चाई पर भरोसा रखें। प्रगति इससे मत मापें कि कितनी कम बार विचलित होते हैं — इससे मापें कि कितनी जल्दी लौटते हैं। चलते रहें।",
      shloka: 'asaṁśayaṁ mahābāho mano durnigrahaṁ calam / abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate',
      shlokaHi: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥',
      shlokaRef: 'BG 6.35',
      shlokaMeaning: 'Undoubtedly, O mighty-armed one, the mind is difficult to control and restless — but it is subdued by practice and detachment, O son of Kunti.',
      shlokaMeaningHi: 'निःसंदेह हे महाबाहो, मन चंचल और कठिन से वश में होने वाला है — पर हे कुंतीपुत्र, अभ्यास और वैराग्य से वश में होता है।'
    },
    steady: {
      dominant: 'The Steady Mind', dominantHi: 'धीर मन',
      subtitle: 'Grounded in most weathers', subtitleHi: 'अधिकांश मौसम में स्थिर',
      reflection: "Dear seeker, your answers reveal a mind that has found its footing. You are not untouched by life — you feel joy, pain, loss, surprise — but you are not undone by them. There is a quality the Gita calls dhairya, steadiness, that has taken root in you. This is not indifference. This is maturity.\n\nKrishna tells us that when the mind is at peace — prasanna-chetas — all sorrows dissolve and the intellect swiftly becomes steady. You have glimpsed this. You know the difference between the storm and the center.\n\nYour invitation now is subtler: to offer this steadiness in service. A mind this stable can hold space for others, can act without self-protection, can receive truth without resistance. The sthitaprajna is not a person who has escaped life — it is one who has learned to move through it unshaken. You are learning this art. Go deeper.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक ऐसे मन को दिखाते हैं जिसने अपना आधार पाया है। जीवन आपको छूता है — आनंद, दुख, हानि — पर आप टूटते नहीं। गीता इसे धैर्य कहती है। यह उदासीनता नहीं है। यह परिपक्वता है।\n\nकृष्ण कहते हैं जब मन प्रसन्न हो — प्रसन्नचेतः — सब दुख दूर हो जाते हैं और बुद्धि स्थिर हो जाती है।\n\nअब निमंत्रण सूक्ष्म है: इस स्थिरता को सेवा में लगाएं। इतना स्थिर मन दूसरों के लिए स्थान धारण कर सकता है। और गहरे जाएं।",
      shloka: 'prasāde sarva-duḥkhānāṁ hānir asyopajāyate / prasanna-cetaso hy āśu buddhiḥ paryavatiṣṭhate',
      shlokaHi: 'प्रसादे सर्वदुःखानां हानिरस्योपजायते। प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते॥',
      shlokaRef: 'BG 2.65',
      shlokaMeaning: 'In that tranquility, all sorrows are destroyed. The intellect of one whose mind is at peace soon becomes completely steady.',
      shlokaMeaningHi: 'प्रसाद होने पर इसके सब दुखों का नाश हो जाता है और प्रसन्नचित्त की बुद्धि शीघ्र ही स्थिर हो जाती है।'
    },
    established: {
      dominant: 'Sthitaprajna', dominantHi: 'स्थितप्रज्ञ',
      subtitle: 'The witness is awake', subtitleHi: 'साक्षी जागृत है',
      reflection: "Dear seeker, your answers point toward something rare — a mind that has found its ground in the Self rather than in circumstances. The Gita calls this sthitaprajna: one established in wisdom, whose joy does not depend on what happens, whose peace is not conditional.\n\nKrishna's description in Chapter 2 is precise: they are not disturbed in sorrow, nor do they crave pleasure. Free from attachment, fear, and anger. Like a lamp in a windless place — unflickering.\n\nIf this is genuinely your experience, then your calling is clear: embody it, and by embodying it, serve. The sthitaprajna does not withdraw from life — they move through it as a flame that does not go out. Let your presence itself be the teaching. Let your stillness be the gift you bring to every room, every relationship, every moment of difficulty around you.\n\nAnd if there is any part of you that wonders whether you have truly arrived — that wondering is itself a sign of wisdom. Stay humble. Stay open. The truly established are often the least certain they have arrived.",
      reflectionHi: "प्रिय साधक, आपके उत्तर कुछ दुर्लभ की ओर इशारा करते हैं — एक मन जिसने परिस्थितियों में नहीं, आत्मा में अपना आधार पाया है। गीता इसे स्थितप्रज्ञ कहती है: ज्ञान में स्थापित, जिसका आनंद घटनाओं पर निर्भर नहीं, जिसकी शांति सशर्त नहीं।\n\nकृष्ण का वर्णन सटीक है: दुख में उद्विग्न नहीं, सुख की लालसा नहीं। आसक्ति, भय, क्रोध से मुक्त। वायुरहित स्थान में दीपक जैसे — अकंप।\n\nयदि यही आपका अनुभव है, तो आपका आह्वान स्पष्ट है: इसे जीएं, और जीकर सेवा करें। स्थितप्रज्ञ जीवन से नहीं हटता — वह उस लौ की तरह चलता है जो बुझती नहीं।",
      shloka: 'prajahāti yadā kāmān sarvān pārtha mano-gatān / ātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate',
      shlokaHi: 'प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्। आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते॥',
      shlokaRef: 'BG 2.55',
      shlokaMeaning: 'When one completely gives up all desires of the mind, O Partha, and is satisfied in the Self by the Self alone — then one is called a person of steady wisdom.',
      shlokaMeaningHi: 'हे पार्थ, जब मनुष्य मन में स्थित सब कामनाओं को त्याग देता है और आत्मा से ही आत्मा में संतुष्ट रहता है — तब वह स्थितप्रज्ञ कहलाता है।'
    }
  }
};
