// Shraddha Quiz — Sattvic, Rajasic, Tamasic Faith
window.QUIZ_DATA = {
  id: 'shraddha',
  meta: {
    en: {
      title: 'What Is the Nature<br><span style="color: var(--bo-gold-deep); font-weight: 500;">of Your Faith?</span>',
      shareTitle: 'Nature of Faith',
      chapter: 'Bhagavad Gita · Chapter 17 · The Three Kinds of Shraddha',
      intro: 'The Gita says: "Man is made of faith — whatever his faith is, that is what he is." Chapter 17 describes three kinds of shraddha — Sattvic, Rajasic, and Tamasic. This inquiry reveals the nature of your faith right now.',
      tagPrefix: 'SHRADDHA · FAITH',
      categoryNames: { sattvic: 'Sattvic Shraddha', rajasic: 'Rajasic Shraddha', tamasic: 'Tamasic Shraddha' }
    },
    hi: {
      title: 'आपकी श्रद्धा<br><span style="color: var(--bo-gold-deep); font-weight: 500;">किस प्रकार की है?</span>',
      shareTitle: 'श्रद्धा का स्वरूप',
      chapter: 'भगवद्गीता · अध्याय १७ · तीन प्रकार की श्रद्धा',
      intro: 'गीता कहती है: "श्रद्धामयोऽयं पुरुषः — मनुष्य श्रद्धा से बना है।" अध्याय १७ तीन प्रकार की श्रद्धा बताता है। यह जिज्ञासा अभी आपकी श्रद्धा का स्वरूप प्रकट करती है।',
      tagPrefix: 'श्रद्धा · विश्वास',
      categoryNames: { sattvic: 'सात्त्विक श्रद्धा', rajasic: 'राजसिक श्रद्धा', tamasic: 'तामसिक श्रद्धा' }
    }
  },
  categories: ['sattvic', 'rajasic', 'tamasic'],
  questions: {
    en: [
      { text: "What is the deepest object of your trust right now?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["Truth, consciousness, the divine — something I sense is eternal and real", "My own capacity — my effort, intelligence, and power to achieve", "Habit and the familiar — I trust what has always been done", "I am not sure — my trust feels scattered or absent"] },
      { text: "How do you most honestly approach spiritual practice?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["With sincere longing for clarity, purification, and inner growth", "With an eye toward merit, recognition, or obtaining what I want", "Mechanically or rarely — practice feels like obligation", "Imperfectly but genuinely — I try even when I fall short"] },
      { text: "When you give or offer something — time, money, care — what is most honestly in your heart?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["Pure generosity — I give because giving is right, without expectation", "Hope for merit, recognition, or the feeling of being virtuous", "Reluctance — I give because I must, not from genuine care", "A mix of both — I give but hope for something in return"] },
      { text: "What does worship, prayer, or any form of inner practice feel like for you?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["A genuine inner turning toward the sacred — something real happens", "A negotiation — I offer in order to receive outcomes I want", "A formality I observe mostly out of habit or social expectation", "Something I have mostly abandoned — it no longer means much"] },
      { text: "How do you relate to spiritual teachers, guides, or genuine wisdom?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["With genuine humility and real openness — I want to be changed", "With calculation — what is their status? What can they offer me?", "With indifference or mild dismissal — I don't feel drawn", "With longing but also resistance — I sense truth but struggle to surrender to it"] },
      { text: "What is your relationship to discipline and voluntary self-restraint?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["I embrace it — I know purification through discipline is real", "I practice it strategically — for results, appearance, or competitive advantage", "I avoid it — ease and comfort feel more natural than austerity", "I begin and abandon — my commitment wavers"] },
      { text: "What most honestly guides your choices about what you eat, consume, or take in?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["What is pure, light, and genuinely nourishing — I try to eat consciously", "What is bold, stimulating, and impressive — I like intensity", "Whatever is convenient, heavy, or requires the least thought", "Whatever my mood dictates — there is no real intention behind it"] },
      { text: "When you make any kind of sacrifice or offering, what is your inner state?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["Pure offering — I give without attachment to what returns", "Hope for reward or fear of spiritual consequence", "Obligation — I do it because I am supposed to, not from the heart", "Show — the inner state and the outer action are not aligned"] },
      { text: "When you face hardship or difficulty, what is your deepest orientation?", tags: ["sattvic","tamasic","rajasic","tamasic"], options: ["It is teaching me something — I look for the growth hidden inside it", "Proof that effort is often futile — why bother if this is the result?", "An obstacle to overcome — I fight or scheme my way through", "Resignation — I endure it without trying to understand or transform it"] },
      { text: "What is your relationship to scripture, philosophy, or teachings of wisdom?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["Genuine curiosity — I read to understand, not to appear knowledgeable", "Instrumental — I use it to seem learned or spiritually credible", "Avoidance — I don't engage with it seriously", "Inconsistent — I go through periods of real interest and then drift away"] },
      { text: "When you help someone, what is most honestly motivating you?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["Pure care — nothing for myself in return", "Expectation of gratitude, recognition, or reciprocation", "Avoiding judgment — I help so others won't criticize me", "Both care and expectation — the motives are mixed"] },
      { text: "What is the quality of your inner conviction — what you actually live by?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["Grounded and clear — there is something true I orient my life around", "Conditional and shifting — my convictions follow my interests", "Absent or confused — I am not sure what I actually believe", "Inconsistent — I know what I believe but don't always act from it"] },
      { text: "How do you experience contentment?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["An inner steadiness that does not depend on circumstances", "Contentment follows achievement — I feel it when I get what I worked for", "A kind of numbness — I have stopped wanting much and call it peace", "Rarely — I know what it is but cannot sustain it"] },
      { text: "How do you use your speech — words, promises, commitments?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["With care and truthfulness — I mean what I say and say what I mean", "For effect — to impress, persuade, position, or gain something", "Without much care — words are exchanged but not felt deeply", "Inconsistently — my intentions are good but follow-through is weak"] },
      { text: "Which most honestly describes the quality of your faith right now?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["Living and active — a genuine trust in truth and the highest good", "Energized but conditional — it rises and falls with my circumstances", "Dim or mechanical — something once there that has grown faint", "Absent or scattered — I am not sure I have faith in much right now"] }
    ],
    hi: [
      { text: "अभी आपके विश्वास का सबसे गहरा विषय क्या है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["सत्य, चेतना, ईश्वर — कुछ शाश्वत", "मेरी अपनी क्षमता — प्रयास, बुद्धि और उपलब्धि", "आदत और परिचित — जो हमेशा होता रहा है", "मुझे नहीं पता — विश्वास बिखरा या अनुपस्थित लगता है"] },
      { text: "आध्यात्मिक अभ्यास से आपका वास्तविक संबंध कैसा है?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["स्पष्टता और शुद्धि की सच्ची लालसा", "पुण्य, मान्यता या फल प्राप्ति की दृष्टि से", "यांत्रिक या विरले — दायित्व जैसा लगता है", "अपूर्ण पर ईमानदार — कोशिश करता हूं"] },
      { text: "देते समय — समय, धन, देखभाल — हृदय में क्या होता है?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["शुद्ध उदारता — बिना अपेक्षा के", "पुण्य, मान्यता या सद्गुणी होने की भावना", "अनिच्छा — देना पड़ता है, मन से नहीं", "दोनों — देता हूं पर बदले में कुछ चाहता भी हूं"] },
      { text: "पूजा, प्रार्थना या कोई भी साधना कैसी लगती है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["वास्तविक आंतरिक मोड़ — कुछ सच्चा होता है", "सौदेबाज़ी — अर्पित करता हूं ताकि फल मिले", "औपचारिकता — आदत या सामाजिक अपेक्षा से", "जो अब अर्थहीन लगती है — मैंने छोड़ दी है"] },
      { text: "आप आध्यात्मिक गुरुओं और ज्ञान से कैसे संबंधित हैं?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["वास्तविक विनम्रता और खुलेपन के साथ", "गणना से — उनकी प्रतिष्ठा, मुझे क्या मिलेगा", "उदासीनता या हल्की उपेक्षा से", "लालसा पर प्रतिरोध के साथ — सत्य दिखता है पर समर्पण कठिन"] },
      { text: "अनुशासन और स्वैच्छिक संयम से आपका संबंध?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["अपनाता हूं — शुद्धि वास्तविक है", "रणनीतिक — परिणाम, दिखावे या प्रतिस्पर्धा के लिए", "टालता हूं — सुविधा स्वाभाविक लगती है", "शुरू करता हूं और छोड़ देता हूं"] },
      { text: "खान-पान और जो ग्रहण करते हैं उसे क्या मार्गदर्शित करता है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["शुद्ध, हल्का और पोषक — सचेत रूप से खाने की कोशिश", "तीखा, उत्तेजक और प्रभावशाली", "जो भी सुविधाजनक और भारी हो", "जो भी मन करे — कोई वास्तविक इरादा नहीं"] },
      { text: "किसी भी यज्ञ या अर्पण में आपकी आंतरिक अवस्था?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["शुद्ध अर्पण — बिना आसक्ति के", "पुरस्कार की आशा या आध्यात्मिक परिणाम का भय", "दायित्व — हृदय से नहीं", "दिखावा — भीतर और बाहर संरेखित नहीं"] },
      { text: "कठिनाई का सामना करने पर सबसे गहरी वृत्ति?", tags: ["sattvic","tamasic","rajasic","tamasic"], options: ["यह कुछ सिखा रही है — छिपी वृद्धि खोजता हूं", "प्रयास अक्सर व्यर्थ है — क्यों करें?", "बाधा दूर करनी है — लड़ता या योजना बनाता हूं", "सहन करता हूं — समझने या बदलने की कोशिश नहीं"] },
      { text: "शास्त्र, दर्शन और ज्ञान की शिक्षाओं से संबंध?", tags: ["sattvic","rajasic","tamasic","sattvic"], options: ["वास्तविक जिज्ञासा — समझने के लिए पढ़ता हूं", "उपकरण — विद्वान या आध्यात्मिक दिखने के लिए", "टालना — गंभीरता से नहीं जुड़ता", "असंगत — रुचि आती जाती रहती है"] },
      { text: "किसी की मदद करते समय सबसे ईमानदार प्रेरणा?", tags: ["sattvic","rajasic","tamasic","rajasic"], options: ["शुद्ध देखभाल — कुछ नहीं चाहिए", "कृतज्ञता, मान्यता या बदले की अपेक्षा", "आलोचना से बचना — ताकि कोई गलत न समझे", "दोनों — देखभाल और अपेक्षा मिली हुई"] },
      { text: "आपकी आंतरिक दृढ़ता — जो वास्तव में जीते हैं — कैसी है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["स्थिर और स्पष्ट — कुछ सच्चा है जिसके इर्द-गिर्द जीवन है", "शर्तों वाली — विश्वास हितों के साथ बदलता है", "अनुपस्थित या भ्रमित — नहीं पता वास्तव में क्या मानता हूं", "असंगत — जानता हूं पर उससे कार्य नहीं करता"] },
      { text: "संतोष का अनुभव कैसे होता है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["आंतरिक स्थिरता जो परिस्थितियों पर निर्भर नहीं", "उपलब्धि के बाद — जब चाहा मिलता है", "एक प्रकार की सुन्नता — कम चाहना और उसे शांति कहना", "शायद ही — जानता हूं क्या है पर बना नहीं रह पाता"] },
      { text: "शब्द, वादे और प्रतिबद्धताएं कैसे उपयोग करते हैं?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["सावधानी और सत्यता से — जो कहता हूं वह मानता हूं", "प्रभाव के लिए — प्रभावित करना, मनाना, कुछ पाना", "बिना खास परवाह — शब्द बोले जाते हैं, महसूस नहीं", "असंगत — नीयत अच्छी है पर पालन कमज़ोर"] },
      { text: "अभी आपकी श्रद्धा का स्वरूप कौन सा है?", tags: ["sattvic","rajasic","tamasic","tamasic"], options: ["जीवित और सक्रिय — सत्य और परम में वास्तविक विश्वास", "ऊर्जावान पर शर्तों वाली — परिस्थितियों के साथ उठती-गिरती", "मंद या यांत्रिक — कभी था जो अब धीमा पड़ गया", "अनुपस्थित या बिखरी — किसी चीज़ में श्रद्धा नहीं"] }
    ]
  },
  staticReflections: {
    sattvic: {
      dominant: 'Sattvic Shraddha', dominantHi: 'सात्त्विक श्रद्धा',
      subtitle: 'Faith rooted in truth and pure aspiration', subtitleHi: 'सत्य और शुद्ध आकांक्षा में निहित श्रद्धा',
      reflection: "Your faith is predominantly Sattvic — rooted in truth, genuine aspiration, and a sincere turning toward the highest. The Gita says: 'Sattva — being pure — illuminates and frees from suffering.' Sattvic shraddha is not naive belief but a living trust in what is real — an orientation toward truth, goodness, and the possibility of genuine liberation.\n\nYou worship in sincerity, give without calculation, and practice without needing an audience. This is rare. The Gita honors it as the threshold of wisdom. The person of Sattvic faith is, as BG 17.3 says, shaped by their faith: 'whatever his shraddha is, that is what he is.'\n\nThe work of Sattvic shraddha is to deepen without clinging to the purity itself. Even Sattva has a subtle attachment — to goodness, to clarity, to feeling elevated. True freedom lies beyond all three Gunas. Sattvic faith is the most luminous stepping stone.",
      reflectionHi: "आपकी श्रद्धा मुख्यतः सात्त्विक है — सत्य, शुद्ध आकांक्षा और उच्चतम की ओर सच्चे झुकाव में निहित। गीता कहती है: 'सत्त्व निर्मल होने से प्रकाशक है।' सात्त्विक श्रद्धा भोली मान्यता नहीं बल्कि वास्तविक में जीवंत विश्वास है।\n\nआप सच्चाई से पूजते हैं, बिना गणना के देते हैं। गीता इसे ज्ञान की दहलीज मानती है।\n\nकार्य है सात्त्विक शुद्धता से भी आसक्ति न रखना।",
      shloka: 'sattvanurupam sarvasya shraddha bhavati bharata / shraddhamayo\'yam purushah yo yac-chraddha sa eva sah', shlokaHi: 'सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत / श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः',
      shlokaRef: 'BG 17.3',
      shlokaMeaning: 'The faith of every being accords with their nature. Man is made of faith — whatever his faith is, that is what he is.',
      shlokaMeaningHi: 'प्रत्येक प्राणी की श्रद्धा उसके स्वभाव के अनुरूप होती है। मनुष्य श्रद्धामय है — जैसी उसकी श्रद्धा, वैसा ही वह है।'
    },
    rajasic: {
      dominant: 'Rajasic Shraddha', dominantHi: 'राजसिक श्रद्धा',
      subtitle: 'Faith energized by desire and results', subtitleHi: 'इच्छा और परिणाम से संचालित श्रद्धा',
      reflection: "Your faith is predominantly Rajasic — animated by desire, colored by ambition, and oriented toward results. This is not without power. Rajasic shraddha can drive extraordinary effort, devoted practice, and genuine achievement. It has built much of what the world calls civilization.\n\nBut the Gita is precise about its limitation: Rajasic faith worships instrumentally — as a path toward what it wants. It gives in order to receive, prays with an agenda, and practices for merit. The Gita calls such austerity 'unstable and transitory' (BG 17.18).\n\nThe invitation is not to dampen your energy — it is to purify its direction. What would your practice look like if you acted without any expectation of return, even spiritual return? That shift — from transactional to unconditional — is the movement from Rajas toward Sattva. It begins with one honest offering.",
      reflectionHi: "आपकी श्रद्धा मुख्यतः राजसिक है — इच्छा, महत्वाकांक्षा और परिणाम की दिशा में। इसमें शक्ति है।\n\nपर गीता इसकी सीमा स्पष्ट करती है: राजसिक श्रद्धा उपकरण की तरह उपासना करती है। देती है ताकि मिले। गीता ऐसी तपस्या को 'चंचल और अस्थायी' कहती है।\n\nआमंत्रण है ऊर्जा को शुद्ध करना — एक बिना किसी अपेक्षा के सच्चा अर्पण।",
      shloka: 'satkara-mana-pujartham tapo dambhena caiva yat / kriyate tad iha proktam rajasam calam adhruvam', shlokaHi: 'सत्कारमानपूजार्थं तपो दम्भेन चैव यत् / क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम्',
      shlokaRef: 'BG 17.18',
      shlokaMeaning: 'Austerity performed with pride, for the sake of honor and worship, is said to be Rajasic — unstable and transitory.',
      shlokaMeaningHi: 'दिखावे और सम्मान की प्राप्ति के लिए किया गया तप राजसिक कहा जाता है — चंचल और अस्थायी।'
    },
    tamasic: {
      dominant: 'Tamasic Shraddha', dominantHi: 'तामसिक श्रद्धा',
      subtitle: 'Faith dimmed by inertia and confusion', subtitleHi: 'जड़ता और भ्रम से मंद पड़ी श्रद्धा',
      reflection: "Tamasic shraddha is presently dominant — a faith that has grown mechanical, dim, or largely absent. The Gita describes it without condemnation: it is a condition, not a verdict. It often comes from accumulated exhaustion, disillusionment, or simply never having had genuine, living contact with truth.\n\nThe Gita's genius is that it speaks to all three levels — not only the already-elevated. Every Gita teaching is offered to someone who cannot see clearly, who is sitting in confusion on a battlefield wondering what anything is for. That is the human starting place.\n\nThe path forward does not require a dramatic transformation. It asks for one small, honest movement: one genuine prayer. One line of scripture held in the heart for a day. One act of real giving. One moment of genuine stillness. Tamas lifts slowly, but it lifts. Light always disperses fog — not through force, but through presence.",
      reflectionHi: "तामसिक श्रद्धा अभी प्रमुख है — यांत्रिक, मंद या अनुपस्थित। गीता बिना निंदा के इसे बताती है: यह दशा है, निर्णय नहीं। यह थकान, मोहभंग या सत्य से सच्चे संपर्क के अभाव से आती है।\n\nगीता की प्रतिभा यह है कि वह तीनों स्तरों से बात करती है।\n\nआगे का मार्ग नाटकीय परिवर्तन नहीं मांगता — एक छोटा, ईमानदार कदम। तमस धीरे उठता है, पर उठता है।",
      shloka: 'vidhihinam asrishtannam mantrahinam adakshinam / shraddhavirahitam yajnam tamasam paricakshate', shlokaHi: 'विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम् / श्रद्धाविरहितं यज्ञं तामसं परिचक्षते',
      shlokaRef: 'BG 17.13',
      shlokaMeaning: 'A sacrifice performed without regard to injunction, without food distributed, without hymns, without gifts, and devoid of faith — is called Tamasic.',
      shlokaMeaningHi: 'जो यज्ञ विधि, अन्न, मंत्र, दक्षिणा और श्रद्धा के बिना किया जाए — वह तामसिक कहलाता है।'
    }
  }
};
