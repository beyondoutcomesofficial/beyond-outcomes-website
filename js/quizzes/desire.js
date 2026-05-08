// Desire Quiz — Your Relationship with Desire
window.QUIZ_DATA = {
  id: 'desire',

  meta: {
    en: {
      title: 'Your Relationship<br><span style="color: var(--bo-gold-deep); font-weight: 500;">with Desire</span>',
      shareTitle: 'Desire Profile',
      chapter: 'Bhagavad Gita · Chapter 2 · The Stable Mind',
      intro: 'The Gita does not condemn desire — it maps it. There are four ways the human soul relates to wanting: driven, conflicted, detached, or surrendered. This inquiry reveals where you stand.',
      tagPrefix: 'DESIRE · PATTERN',
      categoryNames: {
        driven: 'Driven',
        conflicted: 'Conflicted',
        detached: 'Detached',
        surrendered: 'Surrendered'
      }
    },
    hi: {
      title: 'इच्छा से<br><span style="color: var(--bo-gold-deep); font-weight: 500;">आपका संबंध</span>',
      shareTitle: 'इच्छा का स्वरूप',
      chapter: 'भगवद्गीता · अध्याय २ · स्थिर मन',
      intro: 'गीता इच्छा की निंदा नहीं करती — वह उसका मानचित्र बनाती है। इस जिज्ञासा में जानें कि आप चाहत के साथ कैसे जीते हैं।',
      tagPrefix: 'इच्छा · स्वरूप',
      categoryNames: {
        driven: 'इच्छा-प्रेरित',
        conflicted: 'द्वंद्व में',
        detached: 'अनासक्त',
        surrendered: 'समर्पित'
      }
    }
  },

  categories: ['driven', 'conflicted', 'detached', 'surrendered'],

  questions: {
    en: [
      {
        text: 'When you want something deeply, you...',
        options: ['Go after it with full energy — wanting energizes me', 'Feel conflicted — wanting something this much seems wrong', 'Observe the wanting without being strongly pulled by it', 'Offer it to God or the universe and act from that space'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When a desire goes unfulfilled, you feel...',
        options: ['Frustrated and hungry — it genuinely matters', 'Ashamed — as if wanting was the mistake', 'Relatively undisturbed — it wasn\'t that important', 'Trust that what is meant to come, will come'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'What best describes your inner life around wanting?',
        options: ['A continuous stream of things I am reaching for', 'A constant tension between wanting and wanting to not want', 'Fairly quiet — I am not pulled in many directions', 'A sense that my deepest desire is to align with something larger'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When you achieve something you wanted, you...',
        options: ['Feel satisfied briefly — then want the next thing', 'Question whether I deserved it or wanted it too much', 'Move on without much inner reaction', 'Feel gratitude, like it was given rather than taken'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'Your relationship with ambition is...',
        options: ['Ambition is fuel — I need it to move forward', 'Ambition makes me anxious — should I want this much?', 'I have low ambition and it rarely troubles me', 'I am ambitious about inner growth more than outer gain'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When something you love is taken away...',
        options: ['I feel burning urgency — I must get it back', 'I blame myself for becoming too attached', 'I observe the loss without strong emotional response', 'I grieve, but eventually trust that it was meant to be'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'How do you relate to pleasure?',
        options: ['I seek it actively — it is part of why I act', 'I enjoy it but feel guilty when I do', 'I neither seek nor avoid — it comes and goes', 'Pleasure is fine, but it does not anchor me'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When you see others receive what you wanted...',
        options: ['A sharp sense of envy or competition arises', 'Sadness, mixed with guilt for feeling that way', 'Barely an emotional response', 'Genuine happiness — their gain feels separate from mine'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'Imagining a life with nothing left to pursue feels...',
        options: ['Hollow — what would be the point?', 'Frightening and secretly appealing at the same time', 'Peaceful', 'Like freedom'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When a desire arises, your first instinct is...',
        options: ['Move toward it', 'Question whether I should', 'Notice it and let it pass', 'Ask if this aligns with my deeper path'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'What does unfulfilled desire usually create in you?',
        options: ['Restlessness and urgency', 'Inner conflict and self-criticism', 'Little disturbance — I move on quickly', 'A kind of prayer — a turning toward something deeper'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'Your primary motivation in daily life is...',
        options: ['Building what I want and getting what I envision', 'Navigating tension between what I want and what I think is right', 'Fulfilling responsibilities without strong personal investment', 'Being useful and trusting the rest to the divine'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'What do you wish you could change about how you desire?',
        options: ['I wish I could be satisfied more easily', 'I wish I could want without the guilt', 'I sometimes wonder if I have numbed myself too much', 'I wish I could surrender even more fully'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'When desire and duty conflict, you...',
        options: ['Follow desire — I trust what I want', 'Get paralyzed between the two', 'Follow duty without much emotional struggle', 'Offer both to a higher discernment and wait for clarity'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'Which best captures your current relationship with wanting?',
        options: ['I want, therefore I am — desire is my life force', 'I want, but I feel I shouldn\'t — it is a constant war', 'I want very little, and that itself feels like peace', 'I want only what serves the deepest good — and I am learning to trust that'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      }
    ],
    hi: [
      {
        text: 'जब आप किसी चीज की गहरी इच्छा रखते हैं, तो...',
        options: ['पूरी ऊर्जा से उसकी ओर बढ़ता हूं', 'द्वंद्व महसूस होता है — इतना चाहना गलत लगता है', 'इच्छा को देखता हूं, पर खिंचाव नहीं होता', 'ईश्वर को समर्पित करके उस भाव से कर्म करता हूं'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'जब कोई इच्छा पूरी नहीं होती, तो...',
        options: ['निराश और बेचैन — यह सच में मायने रखता है', 'शर्म — जैसे चाहना ही गलती थी', 'अपेक्षाकृत शांत — इतना महत्वपूर्ण नहीं था', 'भरोसा — जो आना था, आएगा'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'इच्छाओं के इर्द-गिर्द आपकी आंतरिक दुनिया कैसी है?',
        options: ['हर समय कुछ न कुछ पाने की ओर लगा हूं', 'चाहने और न चाहने के बीच लगातार तनाव', 'काफी शांत — बहुत दिशाओं में नहीं खिंचता', 'सबसे गहरी इच्छा किसी बड़े से जुड़ने की है'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'जो चाहा वह मिलने पर...',
        options: ['थोड़ा संतोष — फिर अगली इच्छा', 'सोचता हूं कि क्या मैं इसके लायक था', 'बिना विशेष प्रतिक्रिया के आगे बढ़ जाता हूं', 'कृतज्ञता — जैसे यह मिला नहीं, दिया गया'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'महत्वाकांक्षा के साथ संबंध?',
        options: ['ईंधन है — इसके बिना गति नहीं', 'चिंताजनक — क्या मुझे इतना चाहना चाहिए?', 'कम महत्वाकांक्षा है, परेशान नहीं करती', 'आंतरिक विकास की ओर ज्यादा, बाहरी लाभ की ओर कम'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'जो कुछ प्रिय था वह छिन जाए तो...',
        options: ['जलन — वापस पाना है', 'खुद को दोष देता हूं — अधिक आसक्त हो गया था', 'हानि को देखता हूं, बड़ी भावनात्मक प्रतिक्रिया नहीं', 'दुख होता है, पर अंत में भरोसा रहता है'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'सुख से संबंध?',
        options: ['सक्रिय रूप से खोजता हूं — यह कर्म का कारण है', 'आनंद तो आता है पर अपराध बोध भी', 'न खोजता हूं न टालता हूं — आता है, जाता है', 'ठीक है, पर यह मेरा आधार नहीं'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'जब दूसरों को वह मिलता है जो आप चाहते थे...',
        options: ['ईर्ष्या या प्रतिस्पर्धा का बोध', 'दुख और उस भाव के लिए अपराध बोध', 'विशेष भावनात्मक प्रतिक्रिया नहीं', 'सच्ची प्रसन्नता — उनकी उपलब्धि अलग है मुझसे'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'बिना कोई लक्ष्य के जीवन की कल्पना कैसी लगती है?',
        options: ['खोखला — अर्थ क्या रहेगा?', 'भयावह और गुप्त रूप से आकर्षक एक साथ', 'शांतिपूर्ण', 'मुक्ति जैसा'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'इच्छा उठने पर पहली प्रवृत्ति?',
        options: ['उसकी ओर बढ़ना', 'सोचना — क्या यह उचित है?', 'देखकर जाने देना', 'पूछना — क्या यह मेरे गहरे मार्ग के अनुरूप है?'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'अपूर्ण इच्छा क्या उत्पन्न करती है?',
        options: ['बेचैनी और तात्कालिकता', 'आंतरिक संघर्ष और आत्म-आलोचना', 'कोई विशेष परेशानी नहीं', 'एक प्रार्थना — किसी गहरे की ओर मुड़ना'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'दैनिक जीवन में प्रमुख प्रेरणा?',
        options: ['जो चाहता हूं वह पाना और बनाना', 'चाहत और उचितता के बीच संतुलन बनाना', 'बिना विशेष आसक्ति के कर्तव्य निभाना', 'उपयोगी होना और बाकी ईश्वर पर छोड़ना'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'इच्छा के साथ अपने संबंध में क्या बदलना चाहते हैं?',
        options: ['काश जल्दी संतुष्ट हो पाता', 'काश बिना अपराध बोध के चाहता', 'कभी सोचता हूं — कहीं खुद को सुन्न तो नहीं किया?', 'काश और भी समर्पित हो पाता'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'जब इच्छा और कर्तव्य टकराते हैं...',
        options: ['इच्छा का अनुसरण — मैं जो चाहता हूं उस पर भरोसा है', 'दोनों के बीच अटक जाता हूं', 'बिना ज्यादा संघर्ष के कर्तव्य का पालन', 'दोनों को उच्च विवेक पर समर्पित करता हूं'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      },
      {
        text: 'इच्छा के साथ अपना अभी का संबंध कौन सा है?',
        options: ['मैं चाहता हूं इसलिए हूं — इच्छा मेरी जीवन-शक्ति है', 'चाहता हूं पर नहीं चाहना चाहिए — निरंतर युद्ध है', 'बहुत कम चाहता हूं — यही शांति लगती है', 'केवल वह चाहता हूं जो सबसे गहरे भले के लिए हो'],
        tags: ['driven', 'conflicted', 'detached', 'surrendered']
      }
    ]
  },

  staticReflections: {
    driven: {
      dominant: 'The Driven Desirer', dominantHi: 'इच्छा-प्रेरित',
      subtitle: 'Moved by wanting', subtitleHi: 'चाहत से चलने वाले',
      reflection: "Dear seeker, your answers reveal a soul that is vitally, powerfully alive with wanting. You move toward things. You feel the pull of life deeply. The Gita does not call this sinful — desire is the force that animates creation itself.\n\nBut you know the shadow too: the cycle of wanting, getting, and finding it not enough. The fruit of achievement that dissolves the moment it is tasted. The restlessness that waits for you even in success.\n\nKrishna's teaching is not 'stop wanting.' It is far more subtle: learn to act with full passion, but loosen the grip on the result. The wanting is not the problem — the clinging to the outcome is. Begin by noticing the difference between the joy of pursuing and the anxiety of needing. That gap is where freedom lives.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक ऐसी आत्मा को प्रकट करते हैं जो इच्छाओं से भरपूर जीवंत है। आप आगे बढ़ते हैं, जीवन के खिंचाव को गहराई से महसूस करते हैं।\n\nपर आप छाया भी जानते हैं: चाहने, पाने और अपर्याप्त पाने का चक्र।\n\nकृष्ण की शिक्षा है: पूरे जुनून से कर्म करो, पर परिणाम की पकड़ ढीली करो। इच्छा समस्या नहीं — परिणाम से चिपकना समस्या है।",
      shloka: 'kama esha krodha esha rajo-guna-samudbhavah / maha-shano maha-papma viddhy enam iha vairinam',
      shlokaHi: 'काम एष क्रोध एष रजोगुणसमुद्भवः। महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥',
      shlokaRef: 'BG 3.37',
      shlokaMeaning: 'It is desire, born of Rajas, that becomes anger when blocked — know this to be the enemy here.',
      shlokaMeaningHi: 'यह काम है, क्रोध है, रजोगुण से उत्पन्न — इसे यहां शत्रु जानो।'
    },
    conflicted: {
      dominant: 'The Conflicted Soul', dominantHi: 'द्वंद्व में',
      subtitle: 'Torn between wanting and renouncing', subtitleHi: 'चाहत और त्याग के बीच',
      reflection: "Dear seeker, you live in a space the Gita understands intimately — the tension between desire and the wish to be free of it. You want, and then feel you shouldn't want. You reach, and then pull back. This inner war is exhausting, and you know it well.\n\nThe Gita's wisdom here is liberating: you are not wrong for wanting. Desire is part of nature — all beings desire. The mistake is not the wanting but the judgment you add to it, the shame that turns a natural movement into a source of suffering.\n\nKrishna would tell you: do not try to kill desire by willpower — it returns stronger. Instead, understand it. Watch where each desire comes from. When you understand desire clearly, it begins to loosen its grip not through suppression, but through wisdom. You are closer to freedom than you think.",
      reflectionHi: "प्रिय साधक, आप उस जगह जीते हैं जिसे गीता गहराई से समझती है — इच्छा और उससे मुक्त होने की चाहत के बीच का तनाव। आप चाहते हैं, फिर लगता है नहीं चाहना चाहिए।\n\nगीता का ज्ञान मुक्तिदायक है: आप चाहने के लिए गलत नहीं हैं। इच्छा प्रकृति का हिस्सा है।\n\nकृष्ण कहेंगे: इच्छा को इच्छाशक्ति से मारने की कोशिश न करो — वह और मजबूत लौटती है। उसे समझो। आप स्वतंत्रता के करीब हैं।",
      shloka: 'sadrisham ceshtate svasyah prakriter jnanavan api / prakritim yanti bhutani nigrahah kim karishyati',
      shlokaHi: 'सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि। प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति॥',
      shlokaRef: 'BG 3.33',
      shlokaMeaning: 'Even the wise act according to their own nature. All beings follow nature — what can suppression achieve?',
      shlokaMeaningHi: 'ज्ञानवान भी अपनी प्रकृति के अनुसार आचरण करता है। सब प्राणी प्रकृति का अनुसरण करते हैं — निग्रह क्या करेगा?'
    },
    detached: {
      dominant: 'The Detached One', dominantHi: 'अनासक्त',
      subtitle: 'Beyond the pull of wanting', subtitleHi: 'इच्छा की पकड़ से परे',
      reflection: "Dear seeker, you carry a quality the Gita honors deeply — vairagya, dispassion, the capacity to not be swept by wanting. There is a quietness in you around desire that most people spend lifetimes trying to cultivate.\n\nBut the Gita also holds a subtle question for you: is this true vairagya — a freedom born of understanding — or has some part of you simply withdrawn from wanting to avoid the pain of loss? There is a difference between the sage who does not desire because they have seen through desire, and the one who does not desire because they have been hurt enough times to stop reaching.\n\nIf it is true non-attachment, go deeper — offer your equanimity in service. If there is some numbness underneath, be compassionate with yourself. The goal is not to not feel, but to feel fully without being controlled.",
      reflectionHi: "प्रिय साधक, आप वह गुण रखते हैं जिसे गीता गहराई से सम्मान देती है — वैराग्य, अनासक्ति। अधिकांश लोग जीवन भर इसे पाने की कोशिश करते हैं।\n\nपर गीता एक सूक्ष्म प्रश्न पूछती है: क्या यह सच्चा वैराग्य है — समझ से उत्पन्न — या कहीं दर्द से बचने के लिए पीछे हट गए हैं?\n\nयदि सच्ची अनासक्ति है, तो और गहरे जाएं। यदि कुछ सुन्नपन है, तो खुद के प्रति करुणावान रहें।",
      shloka: 'vishaya vinivartante niraharasya dehinah / rasa-varjam raso\'py asya param drishtva nivartate',
      shlokaHi: 'विषया विनिवर्तन्ते निराहारस्य देहिनः। रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते॥',
      shlokaRef: 'BG 2.59',
      shlokaMeaning: 'The senses withdraw from their objects for one who abstains, but the taste for them remains. Even this taste fades when the Supreme is seen.',
      shlokaMeaningHi: 'इंद्रियों के विषय तो निराहारी के लिए हट जाते हैं, पर रस नहीं। परमेश्वर को देखने से यह रस भी जाता है।'
    },
    surrendered: {
      dominant: 'The Surrendered Seeker', dominantHi: 'समर्पित',
      subtitle: 'Desire offered to the divine', subtitleHi: 'ईश्वर को समर्पित इच्छा',
      reflection: "Dear seeker, your answers reveal a soul that has begun to move desire from the personal to the sacred. You still want — but you want from a different center. You reach — but you offer the reaching. This is perhaps the highest form the Gita describes: the one who acts fully, desires genuinely, but holds it all lightly because it is offered.\n\nKrishna promises the devotee in Bhagavad Gita 9.22 that what they need will be provided, that what they have will be protected. This is not passivity — it is a different kind of agency: trust rather than grasping.\n\nYour path is to deepen this trust. Notice when surrender becomes an excuse for passivity — true surrender is full engagement without clinging. And notice when the ego sneaks back in wearing the mask of devotion. Stay humble. Stay wide open. This is the path of the true bhakta.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक ऐसी आत्मा को दिखाते हैं जो इच्छा को व्यक्तिगत से पवित्र की ओर ले जाने लगी है। आप चाहते हैं — पर अलग केंद्र से। यह गीता का सर्वोच्च रूप है।\n\nकृष्ण वादा करते हैं कि जो चाहिए वह मिलेगा, जो है वह सुरक्षित रहेगा।\n\nआपका मार्ग: इस भरोसे को गहरा करें। समर्पण को निष्क्रियता का बहाना न बनने दें। अहंकार सावधानी से भक्ति का मुखौटा पहन लेता है।",
      shloka: 'ananyas cintayanto mam ye janah paryupasate / tesham nitya-abhiyuktanam yoga-kshemam vahamy aham',
      shlokaHi: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते। तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
      shlokaRef: 'BG 9.22',
      shlokaMeaning: 'For those who worship Me with devotion, meditating on My transcendental form, I carry what they lack and preserve what they have.',
      shlokaMeaningHi: 'जो अनन्य भाव से मेरी उपासना करते हैं, उन नित्ययुक्त भक्तों का योगक्षेम मैं वहन करता हूं।'
    }
  }
};
