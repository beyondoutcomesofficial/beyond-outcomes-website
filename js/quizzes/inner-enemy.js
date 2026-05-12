// Inner Enemy Quiz — Kama, Krodha, Lobha, Moha
window.QUIZ_DATA = {
  id: 'inner-enemy',
  meta: {
    en: {
      title: 'What Veils<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Your Wisdom?</span>',
      shareTitle: 'Inner Veil',
      chapter: 'Bhagavad Gita · Chapter 3 & 16 · The Four Inner Obstacles',
      intro: 'The Gita identifies four primary veils over human wisdom — Kama (craving), Krodha (anger), Lobha (clinging), and Moha (delusion). This inquiry reveals which obstacle most clouds your inner clarity right now.',
      tagPrefix: 'INNER · VEIL',
      categoryNames: { kama: 'Kama — Craving', krodha: 'Krodha — Anger', lobha: 'Lobha — Clinging', moha: 'Moha — Delusion' }
    },
    hi: {
      title: 'आपके ज्ञान को<br><span style="color: var(--bo-gold-deep); font-weight: 500;">क्या ढक रहा है?</span>',
      shareTitle: 'आंतरिक बाधा',
      chapter: 'भगवद्गीता · अध्याय ३ व १६ · चार आंतरिक बाधाएं',
      intro: 'गीता चार मुख्य आवरण पहचानती है — काम, क्रोध, लोभ और मोह। यह जिज्ञासा बताती है कि अभी कौन सी बाधा आपकी आंतरिक स्पष्टता पर सबसे अधिक पर्दा डाल रही है।',
      tagPrefix: 'आंतरिक · आवरण',
      categoryNames: { kama: 'काम — लालसा', krodha: 'क्रोध — आवेश', lobha: 'लोभ — आसक्ति', moha: 'मोह — भ्रम' }
    }
  },
  categories: ['kama', 'krodha', 'lobha', 'moha'],
  questions: {
    en: [
      { text: "When you cannot get something you want, what most typically arises inside?", tags: ["kama","krodha","lobha","moha"], options: ["The wanting intensifies — I become consumed by it, my mind keeps returning", "Frustration rises quickly — I may lash out or seethe", "I start calculating how to get it, or anxiously protect what I have", "I feel lost or unclear — I am not even sure what I truly want"] },
      { text: "When something you value is threatened, your first inner reaction is:", tags: ["krodha","kama","lobha","moha"], options: ["Anger — something defensive and fierce rises immediately", "Desperation — a surge of longing to hold on at any cost", "Fear — intense worry about losing what I have built or accumulated", "Confusion — I cannot think clearly, I feel fog"] },
      { text: "Which inner experience feels most familiar to you?", tags: ["kama","krodha","lobha","moha"], options: ["A restless ache — always reaching for something more, something better", "A quick flash of heat — irritation rising before I can pause", "A tight grip — reluctance to let go, to share, to risk what I have", "A foggy blur — difficulty seeing situations and myself clearly"] },
      { text: "After making a decision you regret, what most often happened?", tags: ["kama","krodha","lobha","moha"], options: ["I was pulled by craving — I wanted the outcome too badly", "I reacted in anger or frustration without fully thinking it through", "I was holding too tightly — fear of loss drove the choice", "I was genuinely confused about what was right — I could not see clearly"] },
      { text: "What is your relationship to pleasure and enjoyment?", tags: ["kama","krodha","lobha","moha"], options: ["I chase it — it is hard to feel genuinely content with what already is", "I enjoy when things go my way; disruption disturbs my inner weather quickly", "I enjoy accumulating and do not release easily — generosity feels costly", "I mistake certain things for happiness that do not ultimately satisfy"] },
      { text: "In your closest relationships, what most often creates friction?", tags: ["kama","krodha","lobha","moha"], options: ["My longing — needing more than the other can give", "My reactions — I say or do things in the heat of the moment I later regret", "My holding — reluctance to be generous with time, attention, or care", "My confusion — not seeing the other, or myself, with real clarity"] },
      { text: "When you sit quietly, what pulls the mind most insistently?", tags: ["kama","krodha","lobha","moha"], options: ["Fantasies, plans, longing for things not yet here", "Replaying arguments, injustices, or things that disturbed me", "Worry about security — what might be lost, what needs protecting", "A general foggy drift — the mind wanders without a clear pull"] },
      { text: "Which pattern have others noticed in you — or have you noticed yourself?", tags: ["kama","krodha","lobha","moha"], options: ["That I want a lot — more, better, different — rarely fully satisfied", "That I react quickly, or have a short fuse that surprises even me", "That I hold tightly — with money, time, or approval — giving reluctantly", "That I sometimes seem unclear to myself — confused about what I want or feel"] },
      { text: "When facing an important decision, what most often clouds your judgment?", tags: ["kama","krodha","lobha","moha"], options: ["Wanting a specific outcome too badly — desire distorts the view", "Reactivity — emotions rise and hijack careful reasoning", "Fear of loss — clinging to security makes me unwilling to risk or move", "Confusion — I cannot clearly see what is truly right"] },
      { text: "How do you relate to other people's success or good fortune?", tags: ["kama","krodha","lobha","moha"], options: ["With longing — I want what they have, or what it represents", "Sometimes with irritation — especially when I feel I deserved it more", "With vigilance — quietly assessing how it affects my position", "With confusion — I am often unclear about what their success means for me"] },
      { text: "What is hardest for you to practice consistently?", tags: ["kama","krodha","lobha","moha"], options: ["Contentment — being fully at ease with what already is, right now", "Equanimity — remaining steady and open when something provokes me", "Generosity — giving freely, without inner resistance or calculation", "Discernment — seeing clearly, including seeing myself honestly"] },
      { text: "Which of these best describes a recurring inner weather?", tags: ["kama","krodha","lobha","moha"], options: ["A constant undertow of wanting, seeking, reaching for the next thing", "A quick fire that rises and sometimes scorches what is around it", "A tightness — holding, calculating, securing, not releasing", "A haze — situations feel murky, choices feel harder than they should"] },
      { text: "What does the Gita's concept of detachment feel most challenging for you?", tags: ["kama","krodha","lobha","moha"], options: ["Letting go of desire itself — it feels like the engine of my entire life", "Not reacting when I am genuinely wronged, frustrated, or disrespected", "Releasing the grip on what I have built, earned, or accumulated", "Knowing what to be detached from — I am often unclear about what I am even holding"] },
      { text: "When you examine why your peace gets disturbed most often, the root is:", tags: ["kama","krodha","lobha","moha"], options: ["Wanting something I do not have, or losing something I wanted", "Being provoked — by words, actions, or situations that ignite my reaction", "Fearing that I will lose what gives me security, comfort, or status", "Not seeing clearly — operating from an unclear picture of reality"] },
      { text: "Which of these Gita prescriptions do you feel you most need right now?", tags: ["kama","krodha","lobha","moha"], options: ["'Abandon all desires born of intention' — the peace of wanting less", "'Free from anger and agitation' — the clarity that follows true stillness", "'Free from covetousness' — the lightness of open, unclenched hands", "'Destroy the enemy called delusion' — to see yourself and the world truly"] }
    ],
    hi: [
      { text: "जब आप कुछ चाहते हैं और नहीं मिलता, भीतर क्या उठता है?", tags: ["kama","krodha","lobha","moha"], options: ["चाहत तेज हो जाती है, मन बार-बार वहीं लौटता है", "जल्दी निराशा, प्रतिक्रिया या उबाल", "गणना शुरू — कैसे पाऊं, या जो है उसे कैसे बचाऊं", "खो जाता हूं — स्पष्ट नहीं कि वास्तव में चाहता क्या हूं"] },
      { text: "जो आप मूल्यवान मानते हैं उस पर खतरा हो, पहली प्रतिक्रिया?", tags: ["krodha","kama","lobha","moha"], options: ["क्रोध — एक रक्षात्मक आग तुरंत उठती है", "व्याकुलता — किसी भी कीमत पर पकड़े रहने की लालसा", "भय — खो देने की तीव्र चिंता", "भ्रम — स्पष्ट नहीं सोच पाता, धुंध छा जाती है"] },
      { text: "कौन सा आंतरिक अनुभव सबसे परिचित है?", tags: ["kama","krodha","lobha","moha"], options: ["बेचैन पीड़ा — हमेशा कुछ और, कुछ बेहतर की ओर", "तेज़ ताप — रुकने से पहले ही चिड़चिड़ापन उठता है", "कसी हुई पकड़ — छोड़ने, साझा करने से अनिच्छा", "धुंधलापन — स्थितियों और खुद को स्पष्ट देखने में कठिनाई"] },
      { text: "पछताए हुए निर्णय के पीछे अक्सर क्या था?", tags: ["kama","krodha","lobha","moha"], options: ["इच्छा बहुत तीव्र थी — परिणाम चाहना ने दृष्टि विकृत की", "क्रोध या हताशा में बिना सोचे प्रतिक्रिया", "खोने के डर से बहुत कसकर पकड़ा", "वास्तव में उलझन थी — सही क्या है, नहीं दिख रहा था"] },
      { text: "आनंद और भोग से आपका संबंध कैसा है?", tags: ["kama","krodha","lobha","moha"], options: ["मैं इसका पीछा करता हूं — जो है उससे पूरी तरह संतुष्ट होना कठिन", "जब सब मनमुताबिक हो तो अच्छा लगता है, व्यवधान जल्दी परेशान करता है", "संग्रह में आनंद है, आसानी से नहीं छोड़ता", "कुछ चीज़ों को सुख समझता हूं जो वास्तव में संतुष्ट नहीं करतीं"] },
      { text: "करीबी संबंधों में सबसे अधिक क्या घर्षण बनाता है?", tags: ["kama","krodha","lobha","moha"], options: ["मेरी लालसा — जितना दूसरा दे सकता है, उससे अधिक चाहिए", "मेरी प्रतिक्रियाएं — गर्मी में कुछ कह या कर देता हूं", "मेरी पकड़ — समय, ध्यान, देखभाल में उदार होने में हिचकिचाहट", "मेरा भ्रम — दूसरे को या खुद को स्पष्ट नहीं देख पाता"] },
      { text: "शांत बैठने पर मन को सबसे अधिक क्या खींचता है?", tags: ["kama","krodha","lobha","moha"], options: ["कल्पनाएं, योजनाएं, अभी न मिली चीज़ों की चाहत", "झगड़ों, अन्याय या परेशानियों को दोबारा जीना", "सुरक्षा की चिंता — क्या खो सकता है, क्या बचाना है", "अस्पष्ट भटकाव — बिना किसी स्पष्ट खिंचाव के मन भटकता है"] },
      { text: "दूसरों ने या आपने खुद में क्या देखा है?", tags: ["kama","krodha","lobha","moha"], options: ["बहुत चाहत — और, बेहतर, अलग — शायद ही कभी पूरी तृप्ति", "जल्दी प्रतिक्रिया या छोटा फ्यूज", "कसकर पकड़ना — पैसे, समय, स्वीकृति में अनिच्छुक उदारता", "खुद के बारे में अस्पष्टता — क्या चाहता हूं, क्या महसूस करता हूं"] },
      { text: "महत्वपूर्ण निर्णय में निर्णय को सबसे अधिक क्या धुंधला करता है?", tags: ["kama","krodha","lobha","moha"], options: ["परिणाम की तीव्र इच्छा — नज़रिया विकृत होता है", "प्रतिक्रियाशीलता — भावनाएं तर्क पर हावी होती हैं", "खोने का भय — सुरक्षा की पकड़ जोखिम उठाने से रोकती है", "भ्रम — स्पष्ट नहीं कि वास्तव में सही क्या है"] },
      { text: "दूसरों की सफलता से आपका संबंध कैसा है?", tags: ["kama","krodha","lobha","moha"], options: ["लालसा से — मैं वह चाहता हूं जो उनके पास है", "कभी-कभी चिड़चिड़ाहट से — विशेषकर जब लगे मैं अधिक योग्य था", "सतर्कता से — यह मेरी स्थिति को कैसे प्रभावित करता है", "उलझन से — मुझे अक्सर स्पष्ट नहीं होता यह मेरे लिए क्या अर्थ रखता है"] },
      { text: "लगातार अभ्यास करना सबसे कठिन क्या है?", tags: ["kama","krodha","lobha","moha"], options: ["संतोष — अभी जो है उससे पूरी तरह सहज होना", "समभाव — उकसावे पर स्थिर रहना", "उदारता — बिना आंतरिक प्रतिरोध के देना", "विवेक — स्पष्ट देखना, ईमानदारी से खुद को देखना"] },
      { text: "कौन सा आंतरिक मौसम बार-बार आता है?", tags: ["kama","krodha","lobha","moha"], options: ["चाहत का निरंतर खिंचाव — अगली चीज़ की ओर", "एक तेज़ आग जो उठती है और जला देती है", "तनाव — पकड़ना, गणना करना, सुरक्षित करना", "धुंध — स्थितियां अस्पष्ट, निर्णय कठिन"] },
      { text: "गीता की अनासक्ति सबसे कठिन किस रूप में लगती है?", tags: ["kama","krodha","lobha","moha"], options: ["इच्छा को ही छोड़ना — यह जीवन का इंजन लगती है", "वास्तव में अन्याय होने पर भी न प्रतिक्रिया करना", "जो बनाया, कमाया है उसकी पकड़ छोड़ना", "जानना कि किससे अनासक्त होना है — स्पष्टता ही नहीं"] },
      { text: "शांति सबसे अधिक किससे भंग होती है?", tags: ["kama","krodha","lobha","moha"], options: ["कुछ न मिलना जो चाहिए था, या जो था वह खोना", "उकसाना — शब्द, कर्म जो प्रतिक्रिया जगाते हैं", "सुरक्षा, आराम या प्रतिष्ठा खोने का भय", "स्पष्ट न देख पाना — वास्तविकता की धुंधली तस्वीर"] },
      { text: "गीता का कौन सा उपदेश आपको अभी सबसे अधिक चाहिए?", tags: ["kama","krodha","lobha","moha"], options: ["'सभी इच्छाओं को छोड़ो' — कम चाहने की शांति", "'क्रोध से मुक्त' — सच्ची स्थिरता की स्पष्टता", "'लोभ से मुक्त' — खुली, ढीली हथेलियों की हल्कापन", "'मोह रूपी शत्रु को नष्ट करो' — स्वयं को और संसार को सच में देखना"] }
    ]
  },
  staticReflections: {
    kama: {
      dominant: 'Kama', dominantHi: 'काम',
      subtitle: 'The veil of restless craving', subtitleHi: 'अतृप्त लालसा का आवरण',
      reflection: "Kama — the energy of craving, of restless wanting — is the dominant veil right now. Not all desire is the obstacle: the Gita distinguishes between desire that serves dharma and the consuming hunger that never finds rest in what it receives.\n\nWhat makes Kama such a powerful veil is that it masquerades as aliveness. It feels like motivation. But the Gita sees through it: 'As fire is covered by smoke, as a mirror by dust — so knowledge is covered by desire.' The mind bent by Kama cannot see clearly, because it is always angled toward what is not yet here.\n\nThe medicine is not suppression but understanding. Trace each craving to its root. The Gita says the infinite fullness you are seeking outside yourself is already your nature. The longing points inward. Follow it there.",
      reflectionHi: "काम — लालसा की ऊर्जा — अभी प्रमुख आवरण है। सभी इच्छाएं बाधा नहीं हैं, पर वह भूख जो कभी तृप्त नहीं होती वह है।\n\nकाम इतना शक्तिशाली है क्योंकि यह जीवंतता जैसा लगता है। पर गीता देखती है: 'जैसे अग्नि धुएं से ढकी, दर्पण धूल से — वैसे ज्ञान काम से।'\n\nदवा दमन नहीं बल्कि समझ है। प्रत्येक लालसा की जड़ तक जाओ।",
      shloka: 'avritam jnanam etena jnanino nitya-vairina / kama-rupena kaunteya dushpurenanalena ca', shlokaHi: 'आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा / कामरूपेण कौन्तेय दुष्पूरेणानलेन च',
      shlokaRef: 'BG 3.39',
      shlokaMeaning: 'Knowledge is covered by this eternal enemy of the wise — desire, which is insatiable like fire.',
      shlokaMeaningHi: 'ज्ञान इस नित्य शत्रु द्वारा ढका है — काम, जो अग्नि की तरह अतृप्त है।'
    },
    krodha: {
      dominant: 'Krodha', dominantHi: 'क्रोध',
      subtitle: 'The veil of reactive fire', subtitleHi: 'प्रतिक्रियाशील अग्नि का आवरण',
      reflection: "Krodha — the fire of anger — is the primary veil right now. The Gita traces its lineage with precision: 'From desire comes frustration, from frustration comes anger, from anger comes delusion of mind, from delusion the destruction of reason — and from the destruction of reason, ruin.'\n\nKrodha is not without function — righteous anger at injustice is real. But the Gita is asking you to examine honestly: how often does this fire serve clarity and right action, and how often does it burn what you are building?\n\nThe practice is not to freeze anger but to create space between stimulus and response. In that gap lives freedom. Each moment you choose to pause before reacting — even once — is a real movement against the veil. The gap grows with practice.",
      reflectionHi: "क्रोध — प्रतिक्रियाशील अग्नि — अभी प्रमुख आवरण है। गीता इसकी वंशावली बताती है: 'काम से निराशा, निराशा से क्रोध, क्रोध से मोह, मोह से स्मृतिभ्रंश, स्मृतिभ्रंश से बुद्धिनाश।'\n\nक्रोध सदा गलत नहीं है, पर परीक्षण करो: यह स्पष्टता की सेवा कर रहा है या जो बना रहे हो उसे जला रहा है?\n\nप्रतिक्रिया और उत्तर के बीच एक क्षण का अंतर — वही स्वतंत्रता है।",
      shloka: 'krodhad bhavati sammohah sammohat smriti-vibhramah / smritibhramsad buddhinasho buddhinashat pranashyati', shlokaHi: 'क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः / स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति',
      shlokaRef: 'BG 2.63',
      shlokaMeaning: 'From anger comes delusion; from delusion, loss of memory; from that, destruction of intelligence; and from that — ruin.',
      shlokaMeaningHi: 'क्रोध से सम्मोह, सम्मोह से स्मृतिभ्रंश, स्मृतिभ्रंश से बुद्धिनाश और बुद्धिनाश से विनाश।'
    },
    lobha: {
      dominant: 'Lobha', dominantHi: 'लोभ',
      subtitle: 'The veil of tight holding', subtitleHi: 'कसी हुई पकड़ का आवरण',
      reflection: "Lobha — the quality of clinging, of accumulating, of tight-fisted holding — is the dominant pattern right now. The Gita names it among the triple gates that lead away from clarity alongside desire and anger: 'These three are the destroyers of the self.'\n\nLobha does not always look like greed for money. It can be hoarding approval, time, attention, or the security of not being wrong. The fist that will not open is Lobha. The inner voice that calculates before giving is Lobha.\n\nThe medicine is dana — genuine giving. Not as performance but as an experiment in trust: that the universe replenishes what flows through open hands. Practice giving one thing today that feels slightly uncomfortable to give. That mild resistance is the edge of Lobha. That is exactly where the practice begins.",
      reflectionHi: "लोभ — कसकर पकड़ने, संग्रह करने की प्रवृत्ति — अभी प्रमुख आवरण है। गीता इसे उन तीन द्वारों में रखती है जो स्वयं के विनाश की ओर ले जाते हैं।\n\nलोभ हमेशा धन का लालच नहीं दिखता। यह स्वीकृति, समय, सुरक्षा का संग्रह भी हो सकता है।\n\nदवा है दान — वास्तविक देना। आज कुछ ऐसा दो जो देने में थोड़ा असहज लगे। वह हल्की प्रतिरोध ही लोभ की सीमा है।",
      shloka: 'tri-vidham narakasyedam dvaram nashanam atmanah / kamah krodhah tatha lobhas tasmad etat trayam tyajet', shlokaHi: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः / कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्',
      shlokaRef: 'BG 16.21',
      shlokaMeaning: 'There are three gates leading to the self-destruction of hell — desire, anger, and greed. Therefore, one should abandon all three.',
      shlokaMeaningHi: 'नरक के तीन द्वार हैं जो आत्मा का नाश करते हैं — काम, क्रोध और लोभ। इसलिए इन तीनों को त्यागें।'
    },
    moha: {
      dominant: 'Moha', dominantHi: 'मोह',
      subtitle: 'The veil of confused seeing', subtitleHi: 'भ्रमित दृष्टि का आवरण',
      reflection: "Moha — delusion, the fog of confused seeing — is the most subtle of the four veils, and the most fundamental. While desire and anger announce themselves loudly, Moha whispers. It is the inability to see clearly: what is real, what is constructed, what truly matters, what you are actually feeling.\n\nThe entire Bhagavad Gita is, in one sense, Krishna's cure for Arjuna's Moha. The Gita opens with Arjuna overwhelmed and unable to see clearly — and every teaching that follows is the dissolution of that fog. It ends when Arjuna declares: 'Nashto mohah smritir labdha — My delusion is destroyed, my memory restored.'\n\nYour path is viveka — the slow sharpening of the inner eye. Not cleverness, but honest self-inquiry. Silence, study, genuine spiritual conversation, and the willingness to see yourself clearly — these are the tools that lift this particular veil.",
      reflectionHi: "मोह — भ्रम, अस्पष्ट देखने की धुंध — चारों आवरणों में सबसे सूक्ष्म और सबसे मूलभूत है। काम और क्रोध ज़ोर से घोषणा करते हैं, मोह फुसफुसाता है।\n\nपूरी भगवद्गीता एक अर्थ में अर्जुन के मोह का उपचार है। और वह तब समाप्त होती है जब अर्जुन कहता है: 'नष्टो मोहः स्मृतिर्लब्धा।'\n\nआपका मार्ग विवेक है — आंतरिक दृष्टि की धीरे-धीरे तेज होना।",
      shloka: 'nashto mohah smritir labdha tvat-prasadan mayachyuta / sthito\'smi gata-sandehah karishye vacanam tava', shlokaHi: 'नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत / स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव',
      shlokaRef: 'BG 18.73',
      shlokaMeaning: "My delusion is destroyed. By Your grace, my memory is restored. I stand firm, free from doubt — I shall act according to Your word.",
      shlokaMeaningHi: 'मेरा मोह नष्ट हो गया। आपकी कृपा से स्मृति प्राप्त हुई। मैं संदेह से मुक्त स्थित हूं — आपके वचन के अनुसार करूंगा।'
    }
  }
};
