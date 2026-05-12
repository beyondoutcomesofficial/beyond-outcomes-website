// Yoga Path Quiz — Bhakti, Jnana, Karma, Dhyana
window.QUIZ_DATA = {
  id: 'yoga-path',
  meta: {
    en: {
      title: 'Which Yoga Path<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Calls You?</span>',
      shareTitle: 'Yoga Path',
      chapter: 'Bhagavad Gita · Chapter 12 · The Four Paths',
      intro: 'The Gita offers not one but four paths to the same summit — Bhakti, Jnana, Karma, and Dhyana. This inquiry reveals which path your nature most naturally calls you toward right now.',
      tagPrefix: 'YOGA · PATH',
      categoryNames: { bhakti: 'Bhakti Yoga', jnana: 'Jnana Yoga', karma: 'Karma Yoga', dhyana: 'Dhyana Yoga' }
    },
    hi: {
      title: 'आपको कौन सा<br><span style="color: var(--bo-gold-deep); font-weight: 500;">योग मार्ग बुलाता है?</span>',
      shareTitle: 'योग मार्ग',
      chapter: 'भगवद्गीता · अध्याय १२ · चार मार्ग',
      intro: 'गीता एक ही शिखर के चार मार्ग देती है — भक्ति, ज्ञान, कर्म और ध्यान। यह जिज्ञासा बताती है कि आपकी प्रकृति अभी किस मार्ग को बुलाती है।',
      tagPrefix: 'योग · मार्ग',
      categoryNames: { bhakti: 'भक्ति योग', jnana: 'ज्ञान योग', karma: 'कर्म योग', dhyana: 'ध्यान योग' }
    }
  },
  categories: ['bhakti', 'jnana', 'karma', 'dhyana'],
  questions: {
    en: [
      { text: "When you feel most spiritually alive, what is happening?", tags: ["bhakti","jnana","karma","dhyana"], options: ["I am in prayer, devotion, or deep gratitude — a felt connection to something greater", "I am in inquiry — reading, contemplating, questioning the nature of reality", "I am in service — fully engaged in action offered without thought of return", "I am in stillness — meditating, watching the mind, resting in pure awareness"] },
      { text: "What draws you most naturally toward the inner life?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Love — for the divine, for life, for others — it pulls me inward", "Understanding — I need to know what is truly real beyond appearances", "Right action — living with integrity matters more than belief or practice", "Silence — the truth feels closer when the mind grows still"] },
      { text: "Which description of the spiritual path resonates most deeply?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Falling in love with God — surrendering into what is infinitely greater", "Waking up from illusion by seeing with absolute clarity", "Purifying the ego through selfless, disciplined action", "Quieting the mind until the Self shines on its own"] },
      { text: "When you face suffering, what most helps you through?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Surrender — offering it up, trusting something greater holds it", "Inquiry — understanding why suffering arises and what it truly is", "Movement — serving others lifts me beyond my own pain", "Stillness — simply sitting with what is, without adding to it"] },
      { text: "What is your natural mode of learning and insight?", tags: ["jnana","bhakti","karma","dhyana"], options: ["Reading, deep reflection, philosophical dialogue", "Through relationship, feeling, and the opening of the heart", "By doing — lived experience is my truest teacher", "Through silence and direct perception, beyond words"] },
      { text: "When you practice, which feels most like coming home?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Chanting, prayer, devotional ritual — the heart reaching outward", "Study, satsang, sustained contemplation of deep questions", "Service, charity, disciplined right action in the world", "Meditation, breathwork, sustained inner silence"] },
      { text: "What blocks you most on your inner path?", tags: ["bhakti","jnana","karma","dhyana"], options: ["A closed heart — feeling cut off from love and divine presence", "Mental fog — confusion about what is real versus constructed", "Selfishness — forgetting to act without attachment to outcomes", "Restlessness — the inability to be genuinely still"] },
      { text: "What gives your life its deepest sense of meaning?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Connection — love, devotion, the warmth of belonging", "Clarity — understanding the nature of existence itself", "Contribution — making a real and lasting difference", "Presence — simply being awake, here, fully"] },
      { text: "How do you most naturally experience moments of peace?", tags: ["bhakti","jnana","karma","dhyana"], options: ["When I feel loved and held by something greater than myself", "When confusion dissolves and I see with sudden, startling clarity", "When I am fully absorbed in meaningful work, giving everything", "When the mind falls completely silent, even for a moment"] },
      { text: "Which of these Gita teachings speaks most directly to you right now?", tags: ["karma","jnana","bhakti","dhyana"], options: ["'You have a right to action alone, never to its fruits.'", "'The wise see the same Self in all beings, without exception.'", "'Fix your mind on Me, be devoted to Me — you shall come to Me.'", "'Let the yogi constantly engage the mind in meditation on the Self.'"] },
      { text: "What is your relationship to community and fellowship on the path?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Central — I am deeply nourished by shared devotion and love", "Important as a field of inquiry and honest truth-telling", "It is the very field — I show up to give and to serve", "Secondary — my deepest practice is ultimately solitary"] },
      { text: "Which teacher archetype resonates most with what you are seeking?", tags: ["bhakti","jnana","karma","dhyana"], options: ["The saint who radiates love without condition", "The sage who sees through every appearance", "The servant who gives without ever keeping score", "The meditator absorbed in luminous, wordless awareness"] },
      { text: "What is your deepest understanding of liberation?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Merging in divine presence — union through love, nothing held back", "Realizing I was never separate — the illusion dissolved completely", "Ego dissolving through a lifetime of pure, offerings action", "The mind growing so still that only the Self remains"] },
      { text: "What is the spiritual quality you most want to strengthen right now?", tags: ["bhakti","jnana","karma","dhyana"], options: ["Devotion — the capacity to love and surrender more fully", "Discernment — the ability to see clearly, without distortion", "Selflessness — acting with full intensity and zero attachment", "Stillness — resting in awareness without grasping or fleeing"] },
      { text: "Which of these feels like your deepest current longing?", tags: ["bhakti","jnana","karma","dhyana"], options: ["To love and be loved — wholly, without walls", "To see truly — to know what is real behind all appearances", "To act rightly — to live in full alignment with dharma", "To simply rest in silence — to be, without becoming anything"] }
    ],
    hi: [
      { text: "आप सबसे अधिक आध्यात्मिक रूप से जीवित कब महसूस करते हैं?", tags: ["bhakti","jnana","karma","dhyana"], options: ["प्रार्थना, भक्ति या गहरी कृतज्ञता में — एक गहरा संबंध", "जिज्ञासा में — पढ़ना, चिंतन, वास्तविकता पर विचार", "सेवा में — बिना फल की इच्छा के कर्म", "मौन में — ध्यान, साक्षी भाव, शुद्ध जागरूकता"] },
      { text: "आपको आंतरिक जीवन की ओर क्या खींचता है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["प्रेम — ईश्वर के लिए, जीवन के लिए", "समझ — वास्तविकता को जानने की आवश्यकता", "सही कर्म — विश्वास से अधिक सदाचार", "मौन — शांति में सत्य निकट लगता है"] },
      { text: "आध्यात्मिक मार्ग का कौन सा वर्णन सबसे गहरा लगता है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["ईश्वर से प्रेम — समर्पण", "स्पष्टता से माया का नाश", "निःस्वार्थ कर्म से अहंकार की शुद्धि", "मन की शांति से स्वयं का प्रकाश"] },
      { text: "कष्ट में सबसे अधिक क्या मदद करता है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["समर्पण — किसी महान शक्ति को अर्पित करना", "जिज्ञासा — कष्ट के कारण को समझना", "सेवा — दूसरों की मदद से स्वयं के दर्द से उठना", "स्थिरता — जो है उसके साथ बस बैठना"] },
      { text: "आपका सीखने का स्वाभाविक तरीका क्या है?", tags: ["jnana","bhakti","karma","dhyana"], options: ["पठन, गहन चिंतन, दार्शनिक संवाद", "संबंध और हृदय के खुलने से", "कर्म से — अनुभव ही शिक्षक", "मौन और प्रत्यक्ष अनुभव से"] },
      { text: "कौन सी साधना सबसे अधिक घर जैसी लगती है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["कीर्तन, प्रार्थना, भक्ति अनुष्ठान", "अध्ययन, सत्संग, गहरे प्रश्नों पर चिंतन", "सेवा, दान, सदाचार", "ध्यान, प्राणायाम, आंतरिक मौन"] },
      { text: "आपके मार्ग पर सबसे बड़ी बाधा क्या है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["बंद हृदय — प्रेम और उपस्थिति से कटा हुआ", "मानसिक धुंध — वास्तविक और निर्मित में भ्रम", "स्वार्थ — फल की आसक्ति", "बेचैनी — स्थिर रहने में कठिनाई"] },
      { text: "जीवन का सबसे गहरा अर्थ क्या है आपके लिए?", tags: ["bhakti","jnana","karma","dhyana"], options: ["संबंध — प्रेम, भक्ति, आपसीपन", "स्पष्टता — अस्तित्व को समझना", "योगदान — सार्थक अंतर बनाना", "उपस्थिति — जागरूक होकर बस होना"] },
      { text: "शांति का अनुभव कब होता है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["जब किसी महान शक्ति से प्रेम और सुरक्षा महसूस होती है", "जब भ्रम टूटता है और स्पष्टता आती है", "जब सार्थक कार्य में पूरी तरह लीन होता हूं", "जब मन पूरी तरह शांत हो जाता है"] },
      { text: "गीता का कौन सा उपदेश अभी सबसे गहरा लगता है?", tags: ["karma","jnana","bhakti","dhyana"], options: ["'कर्म करो, फल की आसक्ति मत रखो।'", "'ज्ञानी सभी में एक ही आत्मा देखता है।'", "'मुझ में मन लगाओ, मेरे भक्त बनो।'", "'योगी निरंतर मन को आत्मा में लगाए।'"] },
      { text: "समुदाय और सत्संग का आपके मार्ग में क्या स्थान है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["केंद्रीय — साझा भक्ति से पोषण मिलता है", "महत्वपूर्ण — सत्य-अन्वेषण के लिए", "यही क्षेत्र है — सेवा के लिए उपस्थित होना", "गौण — मेरी गहरी साधना एकांत में है"] },
      { text: "कौन से गुरु का आदर्श आपको आकर्षित करता है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["संत जो बिना शर्त प्रेम की किरण है", "ऋषि जो हर रूप में सत्य देखता है", "सेवक जो बिना हिसाब दिए देता है", "ध्यानी जो मौन जागरूकता में डूबा है"] },
      { text: "मुक्ति के बारे में आपकी गहरी समझ क्या है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["दिव्य उपस्थिति में विलीन होना — प्रेम से मिलन", "भेद का नाश — मैं कभी अलग था ही नहीं", "निःस्वार्थ कर्म से अहंकार का विसर्जन", "मन इतना शांत हो कि केवल आत्मा शेष रहे"] },
      { text: "अभी कौन सा गुण सबसे अधिक गहरा करना चाहते हैं?", tags: ["bhakti","jnana","karma","dhyana"], options: ["भक्ति — अधिक प्रेम और समर्पण", "विवेक — बिना विकृति के स्पष्ट देखना", "निःस्वार्थता — पूर्ण तीव्रता और शून्य आसक्ति", "स्थिरता — बिना पकड़ के जागरूकता में विश्राम"] },
      { text: "अभी आपकी सबसे गहरी लालसा क्या है?", tags: ["bhakti","jnana","karma","dhyana"], options: ["प्रेम करना और प्रेम पाना — बिना दीवार के", "सत्य देखना — सभी रूपों के पार", "धर्म के अनुसार जीना — पूर्ण संरेखण में", "मौन में बस होना — कुछ बने बिना"] }
    ]
  },
  staticReflections: {
    bhakti: {
      dominant: 'Bhakti Yoga', dominantHi: 'भक्ति योग',
      subtitle: 'The path of love and devotion', subtitleHi: 'प्रेम और भक्ति का मार्ग',
      reflection: "Bhakti is your natural language of the sacred. Your heart is the instrument — love, devotion, surrender. The Gita places Bhakti at the summit of all paths, calling it the most natural for human beings because it works with our deepest impulse: the longing to connect, to belong, to love without reserve.\n\nBhakti does not ask you to transcend emotion — it asks you to aim it at the highest. The same longing that reaches toward another person, when offered to the Infinite, becomes a path of liberation. Nothing is rejected; everything is transformed.\n\nYour work is to keep the channel of the heart open. Do not let it harden. Every act of genuine love — even the smallest, even when unseen — is your practice.",
      reflectionHi: "भक्ति आपकी पवित्रता की स्वाभाविक भाषा है। हृदय ही वाद्य है — प्रेम, भक्ति, समर्पण। गीता भक्ति को सर्वोच्च स्थान देती है क्योंकि यह हमारी सबसे गहरी प्रकृति के साथ काम करती है।\n\nभक्ति भावना को दबाने के लिए नहीं कहती — वह कहती है उसे उच्चतम की ओर मोड़ो। वही लालसा जो किसी व्यक्ति की ओर जाती है, जब अनंत को अर्पित होती है, मुक्ति का मार्ग बन जाती है।\n\nआपका कार्य है हृदय का द्वार खुला रखना।",
      shloka: 'mayy eva mana adhatsva mayi buddhim niveshaya', shlokaHi: 'मय्येव मन आधत्स्व मयि बुद्धिं निवेशय',
      shlokaRef: 'BG 12.8',
      shlokaMeaning: 'Fix your mind in Me alone, place your intellect in Me — you shall live in Me hereafter, without doubt.',
      shlokaMeaningHi: 'मुझ में ही मन लगाओ, मुझ में बुद्धि लगाओ — फिर तुम मुझ में ही निवास करोगे।'
    },
    jnana: {
      dominant: 'Jnana Yoga', dominantHi: 'ज्ञान योग',
      subtitle: 'The path of wisdom and inquiry', subtitleHi: 'ज्ञान और जिज्ञासा का मार्ग',
      reflection: "Jnana is the path that calls you — the razor-sharp inquiry into what is real. Your natural instrument is discernment: the capacity to distinguish the permanent from the passing, the Self from the story the mind tells about it. The Gita calls this viveka, and honors it as among the highest human capacities.\n\nYet Jnana has its own subtle shadow: the intellect can become a fortress. Understanding can be mistaken for realization. The Gita is clear — knowledge that remains only in the mind has not yet done its work. It must descend into experience.\n\nYour path is to let inquiry dissolve into being. Use the mind to transcend the mind. When the questions finally fall silent — not from giving up, but from full seeing — what remains is what you were searching for.",
      reflectionHi: "ज्ञान योग आपका मार्ग है — वास्तविक को जानने की तीव्र जिज्ञासा। आपका स्वाभाविक वाद्य है विवेक — स्थायी और क्षणिक में भेद।\n\nपर ज्ञान की अपनी छाया है: बुद्धि दुर्ग बन सकती है। समझ को अनुभव समझ लेना।\n\nआपका मार्ग है जिज्ञासा को सत्ता में विलीन होने देना। मन का उपयोग मन से परे जाने के लिए करो।",
      shloka: 'na hi jnanena sadrisham pavitram iha vidyate', shlokaHi: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते',
      shlokaRef: 'BG 4.38',
      shlokaMeaning: 'There is nothing in this world as purifying as knowledge.',
      shlokaMeaningHi: 'इस संसार में ज्ञान के समान पवित्र करने वाला कुछ भी नहीं है।'
    },
    karma: {
      dominant: 'Karma Yoga', dominantHi: 'कर्म योग',
      subtitle: 'The path of selfless action', subtitleHi: 'निःस्वार्थ कर्म का मार्ग',
      reflection: "The world is your temple, and action is your prayer. Karma Yoga is the path for those who are most fully alive in doing — who find meaning through engagement, contribution, and the discipline of showing up completely while releasing attachment to results.\n\nThe Gita's gift to the active soul is this: you do not need to withdraw from life to find liberation. You need only change your relationship to your actions — from doing for yourself to offering everything as seva. The same work, a different inner stance, a completely different result.\n\nYour work is to keep acting with full intensity while cultivating inner non-attachment. Not half-effort with detachment — full effort with freedom. The fire of action, purified of ego, becomes the fire of liberation.",
      reflectionHi: "संसार आपका मंदिर है, कर्म आपकी प्रार्थना। कर्म योग उनके लिए है जो कर्म में सबसे अधिक जीवित हैं।\n\nगीता का सक्रिय आत्मा को उपहार: जीवन से पीछे हटने की आवश्यकता नहीं। केवल कर्म के प्रति संबंध बदलो — अपने लिए करने से सेवा में।\n\nपूर्ण तीव्रता के साथ कर्म करो, आंतरिक अनासक्ति के साथ।",
      shloka: 'yogah karmasu kaushalam', shlokaHi: 'योगः कर्मसु कौशलम्',
      shlokaRef: 'BG 2.50',
      shlokaMeaning: 'Yoga is skill in action.',
      shlokaMeaningHi: 'योग कर्मों में कुशलता है।'
    },
    dhyana: {
      dominant: 'Dhyana Yoga', dominantHi: 'ध्यान योग',
      subtitle: 'The path of meditation and stillness', subtitleHi: 'ध्यान और मौन का मार्ग',
      reflection: "Silence is your native country. Dhyana Yoga — the path of meditation — is the most direct route: quieting the mind until the Self that was always present becomes undeniable. You are drawn to stillness because something in you already senses what lies beneath the noise.\n\nThe Gita devotes all of Chapter 6 to Dhyana Yoga, describing the meditator who steadies the breath, withdraws the senses, and rests attention on the witness behind all experience. This is your natural orientation — to be the one who watches, before becoming the one who reacts.\n\nYour work is to make stillness a practice, not only a preference. Even brief, regular sitting deepens what you already intuit. The silence you touch in meditation is not absence — it is the most real thing there is.",
      reflectionHi: "मौन आपका स्वदेश है। ध्यान योग — सबसे सीधा मार्ग: मन को इतना शांत करो कि आत्मा प्रकट हो।\n\nगीता अध्याय ६ पूरा ध्यान योग को समर्पित है — श्वास स्थिर करना, इंद्रियों को समेटना, साक्षी में स्थिर होना।\n\nआपका कार्य है मौन को प्राथमिकता नहीं, अभ्यास बनाना।",
      shloka: 'shanaih shanair uparamed buddhya dhriti-grihitaya / atma-samstham manah kritva na kincid api cintayet', shlokaHi: 'शनैः शनैरुपरमेद् बुद्ध्या धृतिगृहीतया / आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्',
      shlokaRef: 'BG 6.25',
      shlokaMeaning: 'Gradually, with the intellect held firm, let the mind be established in the Self alone — think of nothing else.',
      shlokaMeaningHi: 'धीरे-धीरे बुद्धि की धैर्यपूर्ण पकड़ से मन को आत्मा में स्थिर करो — किसी अन्य बात का चिंतन न करो।'
    }
  }
};
