// Fear Quiz — What Is Your Dominant Fear?
window.QUIZ_DATA = {
  id: 'fear',

  meta: {
    en: {
      title: 'What Is Your<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Dominant Fear?</span>',
      shareTitle: 'Fear Pattern',
      chapter: 'Bhagavad Gita · Chapter 2 · The Fearless Mind',
      intro: 'The Gita names fear as one of the root causes of human suffering — and maps four dominant patterns: fear of failure, judgment, loss, or insignificance. This inquiry reveals which runs deepest in you.',
      tagPrefix: 'BHAYA · PATTERN',
      categoryNames: {
        failure: 'Fear of Failure',
        judgment: 'Fear of Judgment',
        loss: 'Fear of Loss',
        insignificance: 'Fear of Insignificance'
      }
    },
    hi: {
      title: 'आपका प्रमुख<br><span style="color: var(--bo-gold-deep); font-weight: 500;">भय क्या है?</span>',
      shareTitle: 'भय का स्वरूप',
      chapter: 'भगवद्गीता · अध्याय २ · निर्भय मन',
      intro: 'गीता भय को दुख का मूल कारण मानती है। चार प्रमुख स्वरूप हैं: असफलता का भय, निर्णय का भय, हानि का भय, या अर्थहीनता का भय। यह जिज्ञासा बताती है कि आपमें कौन सा गहरा है।',
      tagPrefix: 'भय · स्वरूप',
      categoryNames: {
        failure: 'असफलता का भय',
        judgment: 'निर्णय का भय',
        loss: 'हानि का भय',
        insignificance: 'अर्थहीनता का भय'
      }
    }
  },

  categories: ['failure', 'judgment', 'loss', 'insignificance'],

  questions: {
    en: [
      {
        text: 'The thought that unsettles you most is...',
        options: ['What if I fail at this?', 'What will people think of me?', 'What if I lose what I have?', 'What if none of this ever truly matters?'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'Before attempting something difficult, your main hesitation is...',
        options: ['I might not do it well enough', 'People will see me struggle or fall short', 'I could lose something I have built', 'Even if I succeed, it might not mean anything'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'When you make a visible mistake, what is your deepest discomfort?',
        options: ['I did not perform to the standard I expect of myself', 'Others witnessed it and will remember', 'It could cost me something important', 'It is evidence that I am not enough'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'What kind of dream wakes you with dread?',
        options: ['Dreams of failing an exam, missing a deadline, or being unprepared', 'Dreams of being humiliated, exposed, or rejected publicly', 'Dreams of losing someone or something precious', 'Dreams of being forgotten, erased, or having never existed'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'When you imagine your worst-case scenario, it is...',
        options: ['A life of incomplete goals and wasted potential', 'Being seen as foolish, weak, or a fraud', 'Ending up alone, without the people or security I love', 'Dying without having made any real difference'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'What makes you pull back from taking risks?',
        options: ['Fear of not succeeding at a high enough level', 'Fear of how I will look if it goes wrong', 'Fear of what I might lose in the attempt', 'Fear that the effort will not lead to anything lasting'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'When someone criticizes you, what stings most?',
        options: ['That they may be right — I did not do well enough', 'That others heard and now think less of me', 'That this relationship or standing might be damaged', 'That I am fundamentally not as capable or worthy as I hoped'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'What keeps you working hard, even when exhausted?',
        options: ['Fear of falling short and having to live with that', 'Fear of being seen as lazy, average, or uncommitted', 'Fear of losing what my effort has secured', 'Fear of reaching the end having done nothing real'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'In relationships, what do you fear most?',
        options: ['Not being good enough for the people I love', 'Being truly seen and found lacking', 'Losing the people who matter most to me', 'Being replaced or forgotten once I am gone'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'What thought tends to arise when you lie awake at night?',
        options: ['All the things I have not done well enough', 'What others think of me or a recent interaction', 'What could go wrong and what I stand to lose', 'Whether any of this will last or matter'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'What would feel most like a personal catastrophe?',
        options: ['A visible, public failure in something I care about', 'Being exposed, mocked, or deeply misunderstood', 'Losing a beloved person, home, or sense of security', 'Looking back and realizing I made no meaningful impact'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'Which fear most shapes your daily choices?',
        options: ['I must keep performing to avoid the shame of failing', 'I must manage others\' perceptions carefully', 'I must protect what I have before it is taken', 'I must prove my existence meant something'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'When you see others succeed dramatically, you feel...',
        options: ['Pressure — I must match or exceed that', 'Anxiety — how am I being compared to them?', 'Wistfulness — I hope I don\'t lose my place too', 'Existential unease — will anything I do be remembered the way theirs is?'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'Which phrase would hurt you most to believe is true?',
        options: ['"You never quite fulfilled your potential."', '"People see through you — they know you are not as capable as you pretend."', '"The people you love will leave or be taken from you."', '"Your life will pass without leaving a real mark on the world."'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'At the deepest level, what are you most afraid of being?',
        options: ['Incompetent — someone who could not do what was required', 'Rejected — someone who was seen and found unworthy', 'Alone — someone who ended up with nothing left to hold', 'Forgotten — someone who passed through without a trace'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      }
    ],
    hi: [
      {
        text: 'वह विचार जो आपको सबसे अधिक अस्थिर करता है...',
        options: ['क्या होगा यदि मैं यह नहीं कर पाया?', 'लोग मेरे बारे में क्या सोचेंगे?', 'क्या होगा यदि मैं जो है वह खो दूं?', 'क्या होगा यदि यह सब कभी मायने न रखा?'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'कठिन काम करने से पहले मुख्य संकोच क्या है?',
        options: ['शायद पर्याप्त अच्छा न कर पाऊं', 'लोग मुझे संघर्ष करते या कम पड़ते देखेंगे', 'जो बनाया है वह खो सकता है', 'सफल भी हुआ तो शायद कोई अर्थ न हो'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'सबके सामने गलती होने पर सबसे गहरी तकलीफ क्या है?',
        options: ['मेरे अपने मानक पर खरा नहीं उतरा', 'दूसरों ने देखा और याद रखेंगे', 'इससे कुछ महत्वपूर्ण जा सकता है', 'यह प्रमाण है कि मैं पर्याप्त नहीं हूं'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'किस तरह का सपना डरा कर जगाता है?',
        options: ['परीक्षा में फेल होना, समयसीमा चूकना', 'सार्वजनिक रूप से अपमान, बेनकाब होना', 'किसी प्रिय को या कुछ अनमोल खोना', 'भुला दिया जाना या जैसे कभी था ही नहीं'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'आपके लिए सबसे बुरा परिदृश्य क्या है?',
        options: ['अधूरे लक्ष्यों और बर्बाद क्षमता का जीवन', 'मूर्ख, कमजोर या धोखेबाज माना जाना', 'अकेले रहना, प्रिय लोगों और सुरक्षा के बिना', 'बिना कोई वास्तविक बदलाव लाए मर जाना'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'जोखिम लेने से क्या रोकता है?',
        options: ['पर्याप्त स्तर पर सफल न होने का डर', 'गलत होने पर कैसा दिखूंगा', 'प्रयास में क्या खो सकता है', 'प्रयास कुछ स्थायी नहीं देगा'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'आलोचना में सबसे अधिक क्या तकलीफ देती है?',
        options: ['शायद वे सही हैं — अच्छा नहीं किया', 'दूसरों ने सुना और अब कम समझते हैं', 'यह रिश्ता या स्थान खराब हो सकता है', 'मैं उतना योग्य नहीं जितना सोचता था'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'थके होने पर भी मेहनत क्यों जारी रहती है?',
        options: ['कम पड़ने और उसके साथ जीने का डर', 'आलसी, औसत या असंबद्ध देखे जाने का डर', 'जो प्रयास ने सुरक्षित किया उसे खोने का डर', 'बिना कुछ वास्तविक किए अंत तक पहुंचने का डर'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'रिश्तों में सबसे बड़ा डर क्या है?',
        options: ['प्रिय लोगों के लिए पर्याप्त अच्छा न होना', 'सच में देखा जाना और अपर्याप्त पाया जाना', 'सबसे महत्वपूर्ण लोगों को खो देना', 'जाने के बाद बदल दिया जाना या भुला दिया जाना'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'रात को जागते समय कौन सा विचार आता है?',
        options: ['वे सब चीजें जो पर्याप्त अच्छी नहीं हुईं', 'दूसरे क्या सोच रहे हैं या हाल की बातचीत', 'क्या गलत हो सकता है और क्या खो सकता है', 'क्या यह सब टिकेगा या मायने रखेगा'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'क्या व्यक्तिगत तबाही जैसा लगेगा?',
        options: ['किसी महत्वपूर्ण चीज में सार्वजनिक असफलता', 'बेनकाब होना, उपहास होना, गलत समझा जाना', 'प्रिय व्यक्ति, घर या सुरक्षा खोना', 'पीछे देखकर पाना कि कोई असर नहीं छोड़ा'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'कौन सा भय दैनिक चुनावों को सबसे अधिक आकार देता है?',
        options: ['असफलता की शर्म से बचने के लिए प्रदर्शन जरूरी है', 'दूसरों की धारणाओं को सावधानी से संभालना होगा', 'जो है उसे छिनने से पहले बचाना होगा', 'अस्तित्व का अर्थ साबित करना होगा'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'दूसरों को बड़ी सफलता मिलने पर कैसा लगता है?',
        options: ['दबाव — मुझे बराबरी या आगे जाना होगा', 'चिंता — मेरी तुलना कैसी होगी?', 'उदासी — कहीं मेरी जगह न जाए', 'अस्तित्वगत बेचैनी — क्या मेरा भी ऐसे याद रहेगा?'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'कौन सा वाक्य सुनना सबसे कठिन होगा?',
        options: ['"तुमने कभी अपनी क्षमता पूरी नहीं की।"', '"लोग जानते हैं — तुम उतने काबिल नहीं जितना दिखाते हो।"', '"जिन्हें तुम चाहते हो वे चले जाएंगे या छिन जाएंगे।"', '"तुम बिना कोई असली निशान छोड़े गुजर गए।"'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      },
      {
        text: 'सबसे गहरे स्तर पर, आप सबसे अधिक क्या होने से डरते हैं?',
        options: ['अयोग्य — जो जरूरी था वह नहीं कर सका', 'अस्वीकृत — देखा गया और अपर्याप्त पाया गया', 'अकेला — अंत में कुछ भी पास न बचा', 'भुला दिया गया — बिना कोई निशान छोड़े गुजर गया'],
        tags: ['failure', 'judgment', 'loss', 'insignificance']
      }
    ]
  },

  staticReflections: {
    failure: {
      dominant: 'Fear of Failure', dominantHi: 'असफलता का भय',
      subtitle: 'The weight of not being enough', subtitleHi: 'पर्याप्त न होने का बोझ',
      reflection: "Dear seeker, your answers reveal a soul haunted by the gap between what you could be and what you have managed to become. You hold yourself to a high standard — and that is not wrong. Excellence is a noble pursuit. But the Gita makes a crucial distinction: there is a difference between striving with full effort and being enslaved by fear of the result.\n\nArjuna himself was paralyzed by this fear on the battlefield — the fear that he would fail, that his actions would lead to catastrophe. Krishna's response was not to reassure him of success. It was to free him from the tyranny of outcome altogether.\n\nYou are not your results. Your worth is not measured by whether you succeed or fail at any particular thing. The Gita asks you to act with excellence — and then release. The warrior who fights without fear of death is not reckless; they are free. This is the freedom Krishna offers you.",
      reflectionHi: "प्रिय साधक, आपके उत्तर एक ऐसी आत्मा को प्रकट करते हैं जो हो सकने और हो पाने के बीच की खाई से परेशान है। आप खुद से ऊंचा मानक रखते हैं।\n\nअर्जुन स्वयं इसी भय से युद्धक्षेत्र में लकवाग्रस्त था। कृष्ण ने सफलता का आश्वासन नहीं दिया — परिणाम की दासता से ही मुक्त किया।\n\nआप अपने परिणाम नहीं हैं। गीता कहती है: उत्कृष्टता से कर्म करो — फिर छोड़ दो।",
      shloka: 'karmany evadhikaras te ma phaleshu kadachana / ma karma-phala-hetur bhur ma te sango\'stv akarmani',
      shlokaHi: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      shlokaRef: 'BG 2.47',
      shlokaMeaning: 'You have a right to action alone, never to its fruits. Let not the fruits be your motive, nor let attachment to inaction be yours.',
      shlokaMeaningHi: 'कर्म करने में ही तुम्हारा अधिकार है, फलों में कभी नहीं। न फल की प्रेरणा हो, न अकर्म में आसक्ति।'
    },
    judgment: {
      dominant: 'Fear of Judgment', dominantHi: 'निर्णय का भय',
      subtitle: 'Living beneath others\' gaze', subtitleHi: 'दूसरों की नजरों में जीना',
      reflection: "Dear seeker, you carry the weight of the world's eyes on you — or so it feels. Every action filtered through the question of how it will look. Every step shadowed by the possibility of exposure or rejection. This is one of the most common and most exhausting forms of suffering the Gita names.\n\nKrishna describes the liberated person — the sthitaprajna — as someone who is not elated by praise nor crushed by criticism. Not indifferent to people, but not enslaved by their opinion either. This is not arrogance; it is a deep rootedness in one's own nature.\n\nThe Gita's question for you is this: who are you when no one is watching? That person — the one who acts from inner truth rather than outer validation — is who you are being invited to become. The path is not to stop caring about others, but to care more about what is true and right than about what is approved.",
      reflectionHi: "प्रिय साधक, आप पर दुनिया की नजरों का बोझ है। हर कदम इस प्रश्न से गुजरता है — यह कैसा दिखेगा?\n\nकृष्ण स्थितप्रज्ञ का वर्णन करते हैं — जो प्रशंसा से उत्साहित नहीं, आलोचना से टूटता नहीं। यह अहंकार नहीं — अपनी प्रकृति में गहरी जड़ें हैं।\n\nगीता का प्रश्न: जब कोई नहीं देख रहा, तब आप कौन हैं? वही व्यक्ति बनने का आमंत्रण है।",
      shloka: 'duhkhesv anudvigna-manah sukhesu vigata-sprhah / vita-raga-bhaya-krodhah sthita-dhir munir uchyate',
      shlokaHi: 'दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥',
      shlokaRef: 'BG 2.56',
      shlokaMeaning: 'One whose mind is undisturbed by sorrow, who does not crave pleasures, who is free from attachment, fear, and anger — such a one is called a sage of steady wisdom.',
      shlokaMeaningHi: 'जिसका मन दुखों से विचलित नहीं, सुखों की लालसा नहीं, आसक्ति-भय-क्रोध से मुक्त — वह स्थितप्रज्ञ मुनि कहलाता है।'
    },
    loss: {
      dominant: 'Fear of Loss', dominantHi: 'हानि का भय',
      subtitle: 'Holding on against impermanence', subtitleHi: 'अनित्यता के विरुद्ध पकड़',
      reflection: "Dear seeker, you have loved things and people deeply enough to fear losing them. There is no shame in this — it is the mark of a full heart. But the Gita sees in this fear a deeper invitation: to understand the nature of what truly cannot be lost.\n\nKrishna speaks of the soul as imperishable — beyond birth and death, beyond gain and loss. The things we cling to most fiercely are precisely the things that, by their nature, cannot stay. And yet the love itself — the capacity to love — that is permanent.\n\nThe Gita does not ask you to love less. It asks you to love without the grasping that turns love into anxiety. Grieve what is lost — fully, without shame. And then, slowly, widen your circle of what you call 'mine' until it includes everything. When all is the divine's, nothing can truly be taken from you.",
      reflectionHi: "प्रिय साधक, आपने इतनी गहराई से प्रेम किया है कि खोने का डर लगता है। इसमें शर्म नहीं — यह भरे दिल की निशानी है।\n\nकृष्ण आत्मा को अविनाशी कहते हैं। जिसे हम सबसे मजबूती से पकड़ते हैं, उसकी प्रकृति ही है कि वह रहता नहीं।\n\nगीता कम प्रेम करने को नहीं कहती। वह कहती है — बिना पकड़ के प्रेम करो। जब सब ईश्वर का है, तब कुछ सच में नहीं जाता।",
      shloka: 'na jayate mriyate va kadacin nayam bhutva bhavita va na bhuyah / ajo nityah shashvato\'yam purano na hanyate hanyamane sharire',
      shlokaHi: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥',
      shlokaRef: 'BG 2.20',
      shlokaMeaning: 'The soul is never born and never dies. It has not come into being and will not cease to be. Unborn, eternal, ever-existing — it is not slain when the body is slain.',
      shlokaMeaningHi: 'यह आत्मा कभी जन्म नहीं लेती और न मरती है। अजन्मा, नित्य, शाश्वत — शरीर के मारे जाने पर यह नहीं मारी जाती।'
    },
    insignificance: {
      dominant: 'Fear of Insignificance', dominantHi: 'अर्थहीनता का भय',
      subtitle: 'The longing to matter', subtitleHi: 'अर्थ की गहरी तलाश',
      reflection: "Dear seeker, beneath your answers lies one of the deepest human fears — the fear that one's existence does not matter, that one will pass through this world and leave no real trace. This fear is not shallow. It is, in a strange way, spiritual — it arises from a soul that senses it is here for something, even if it cannot name what.\n\nKrishna speaks of every soul as a fragment of the divine itself — not metaphorically, but literally. Your existence is not incidental. The Gita teaches that every action done with awareness, every moment of genuine presence, every act of love, reverberates further than you can see.\n\nThe path is not to build a bigger monument to yourself. It is to serve more deeply, to love more truly, to act from the place in you that already knows it is connected to everything. That is the legacy the Gita points to — not in stone, but in souls touched.",
      reflectionHi: "प्रिय साधक, आपके उत्तरों के नीचे मानव का एक गहरा भय है — कि अस्तित्व मायने नहीं रखता, कोई निशान नहीं छूटेगा। यह भय उथला नहीं — यह एक आत्मा की आध्यात्मिक भूख है।\n\nकृष्ण हर आत्मा को ईश्वर का अंश कहते हैं — रूपक में नहीं, सच में। आपका अस्तित्व संयोग नहीं है।\n\nमार्ग बड़ा स्मारक बनाना नहीं है। गहरी सेवा, सच्चा प्रेम, हर जागरूक कर्म — यही गीता की विरासत है।",
      shloka: 'mamaivamsho jiva-loke jiva-bhutah sanatanah / manah-shashthanindriyani prakriti-sthani karshati',
      shlokaHi: 'ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥',
      shlokaRef: 'BG 15.7',
      shlokaMeaning: 'The living beings in this world are My eternal fragments. They carry the mind and the five senses, which abide in nature.',
      shlokaMeaningHi: 'इस जगत में जीव मेरा सनातन अंश है। वह प्रकृति में स्थित मन सहित छह इंद्रियों को खींचता है।'
    }
  }
};
