// Locus of Control Quiz — Internal, External, Surrendered
// Rooted in Bhagavad Gita Chapter 3 (Karma Yoga) and Chapter 18 — Nishkama Karma
window.QUIZ_DATA = {
  id: 'locus',
  meta: {
    en: {
      title: 'Where Does Your<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Power Live?</span>',
      shareTitle: 'Locus of Control',
      chapter: 'Bhagavad Gita · Chapter 3 · The Yoga of Action',
      intro: 'Arjuna believed he was powerless — that the outcomes were already written. Krishna\'s answer is the heart of the Gita: act fully, own your effort completely, and release your grip on what follows. This inquiry reveals where you locate your power.',
      tagPrefix: 'KARMA · LOCUS',
      categoryNames: { internal: 'Internal', external: 'External', surrendered: 'Surrendered' }
    },
    hi: {
      title: 'आपकी<br><span style="color: var(--bo-gold-deep); font-weight: 500;">शक्ति कहाँ रहती है?</span>',
      shareTitle: 'नियंत्रण का केंद्र',
      chapter: 'भगवद्गीता · अध्याय ३ · कर्म योग',
      intro: 'अर्जुन को लगा कि वे असहाय हैं — कि परिणाम पहले से लिखे हैं। कृष्ण का उत्तर गीता का हृदय है: पूरी तरह कर्म करो, अपने प्रयास का पूरा स्वामित्व लो, और परिणाम पर अपनी पकड़ छोड़ दो। यह जिज्ञासा बताती है कि आप अपनी शक्ति कहाँ रखते हैं।',
      tagPrefix: 'कर्म · केंद्र',
      categoryNames: { internal: 'आंतरिक', external: 'बाह्य', surrendered: 'समर्पित' }
    }
  },
  categories: ['internal', 'external', 'surrendered'],
  questions: {
    en: [
      {
        text: "When something goes wrong in your life, your first explanation is usually:",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "I made choices that led here — this is mine to understand",
          "The situation, other people, or timing was against me",
          "Something I could not control unfolded — my work is to respond well",
          "This is how life works for me — it rarely goes as I plan"
        ]
      },
      {
        text: "When something goes genuinely well, how do you explain it?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "I worked for this — it reflects my preparation and effort",
          "I was lucky, or the conditions were just right this time",
          "I gave it everything I had — and then something larger made it possible",
          "Good results come when I act from the right place, not just the right strategy"
        ]
      },
      {
        text: "Before making an important decision, you tend to:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "Research and deliberate — the more information I control, the better",
          "Wait to see what others think or which way the wind is blowing",
          "Do the inner work first — clarity of intention shapes what I choose",
          "Gather what I can, decide carefully, and accept I can't predict the rest"
        ]
      },
      {
        text: "When you face a repeated failure in the same area of life, you think:",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "I must be doing something wrong — this is within my power to change",
          "Some people just aren't meant to succeed at certain things",
          "I may be attached to a particular outcome — the pattern is teaching me something",
          "Forces outside me keep blocking this — it is not for lack of trying"
        ]
      },
      {
        text: "How much do you believe your daily effort actually matters?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "Enormously — effort is the primary driver of what happens in my life",
          "Less than most people believe — too many things are out of anyone's control",
          "Effort matters completely; results are not mine to determine",
          "My effort is the only true offering — what comes of it is not my domain"
        ]
      },
      {
        text: "When circumstances change and your plans are disrupted, you:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "Adapt quickly — I look for what I can still act on",
          "Feel helpless — disruption confirms how little control I actually have",
          "Accept the change and ask what right action looks like from here",
          "Reassess and rebuild — I find it hard to simply let the disruption be"
        ]
      },
      {
        text: "How do you relate to the concept of luck?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "Luck is mostly what people call preparation meeting opportunity",
          "Luck is enormously powerful — it shapes outcomes more than people admit",
          "What looks like luck is often grace — something beyond mere chance",
          "Some people are just born luckier — I have seen enough to believe that"
        ]
      },
      {
        text: "After you make a significant mistake, what do you do?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "Analyse what went wrong and correct my approach — this is my responsibility",
          "Look for what or who contributed to the mistake outside of me",
          "Acknowledge it honestly, make amends where I can, and release the rest",
          "Learn from it without punishing myself — the action is done; what matters is now"
        ]
      },
      {
        text: "When you think about your future, what feels most true?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "My choices today are actively building the life I will live",
          "The future is largely shaped by forces I didn't choose and can't control",
          "My future is unwritten — my work is to act well in the present",
          "I plant seeds with care; what flowers is not entirely mine to decide"
        ]
      },
      {
        text: "How do you handle things that are genuinely outside your control?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "I struggle — it takes real effort to accept what I cannot change",
          "They confirm what I have always sensed — I am not the one in charge",
          "I identify clearly what is mine to act on and release the rest completely",
          "I work harder on the things I can influence to compensate"
        ]
      },
      {
        text: "In a difficult relationship, where do you locate the problem?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "In my own patterns first — I look at what I am bringing before looking outward",
          "In the other person or the dynamic — some people are simply difficult",
          "In the gap between our inner states — when each of us grows, the relationship shifts",
          "In the attachment to how it should be — the suffering often lives there"
        ]
      },
      {
        text: "How do you respond when someone tells you that your fate is already written?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "I disagree — I believe my choices shape what happens to me",
          "It resonates — it explains why effort does not always seem to matter",
          "Both are true: the field is fixed, but how I walk it is mine to determine",
          "Fate and freedom are not opposites — the Gita holds both simultaneously"
        ]
      },
      {
        text: "When a project succeeds beyond your expectations, your first thought is:",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "My preparation and persistence paid off",
          "The timing was right and the pieces fell into place",
          "I gave my full effort and something larger carried it forward",
          "I was the instrument — the result came through me, not from me"
        ]
      },
      {
        text: "How do you think about your position in the world — your circumstances, privileges, or disadvantages?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "Anyone can rise above their circumstances with enough determination",
          "Circumstances matter more than most people want to admit",
          "I was born into a particular field — my work is to act well within it",
          "The conditions were given; how I meet them is the only question I have authority over"
        ]
      },
      {
        text: "After sustained effort that did not produce the results you wanted, what stays with you?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "A search for what I could have done differently",
          "A sense that the world did not cooperate despite my trying",
          "The effort itself — it was complete, regardless of what followed",
          "Equanimity — I did what was mine to do; I cannot mourn what was never in my hands"
        ]
      },
      {
        text: "When someone else succeeds where you have struggled, what is your inner response?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "Motivation — if they found a way, so can I",
          "Deflation — they had circumstances or advantages I did not",
          "Appreciation — their success and mine are not in competition",
          "A quiet sense that some things are simply distributed unequally"
        ]
      },
      {
        text: "How do you relate to spiritual practice or prayer?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "I appreciate it, but I believe most outcomes are shaped by what I actually do",
          "I rely on it — the outcome often feels beyond me, so I turn outward",
          "Practice clarifies my intention so I can act from the right place",
          "Prayer is not asking for outcomes — it is aligning myself so right action becomes natural"
        ]
      },
      {
        text: "When you receive critical feedback, your first instinct is:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "To take it seriously — even if it stings, there is likely something useful here",
          "To question the source — the feedback often says more about them than me",
          "To sit with it without defending or collapsing — let what is true land",
          "To separate the signal from the noise, integrate what serves me, and release the rest"
        ]
      },
      {
        text: "How do you feel when you cannot explain why something happened to you?",
        tags: ["internal", "external", "external", "surrendered"],
        options: [
          "Uncomfortable — I look harder until I find a causal explanation I can work with",
          "Resigned — some things are simply outside any pattern or reason",
          "Curious and open — not everything needs to be explained to be accepted",
          "At peace — mystery is not a problem to solve but a dimension of existence to inhabit"
        ]
      },
      {
        text: "When a goal you care about is not moving forward despite real effort, you:",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "Push harder or try a different approach — there must be something I have not yet tried",
          "Step back and question whether the goal was ever really achievable for someone like me",
          "Continue the effort and loosen my grip on the timeline",
          "Ask whether my attachment to the outcome is the obstacle — and act from a cleaner place"
        ]
      },
      {
        text: "How do you experience the relationship between your inner state and your outer results?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "Strong — my mindset and discipline directly shape what I achieve",
          "Weak — external conditions override inner state most of the time",
          "The inner state shapes the quality of the action; the results are downstream of that",
          "When I am clear and unattached inside, the right things seem to find their way through"
        ]
      },
      {
        text: "When you feel powerless, what does that experience point to?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "A situation I have not yet found the lever for — there is usually something I can do",
          "The truth — that much of life is determined by forces larger than any individual",
          "A signal to examine what kind of power I am looking for",
          "An invitation to shift from control to right action — from outcome to dharma"
        ]
      },
      {
        text: "When you look back at the hardest chapter of your life, you see:",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "Choices I made that I would now make differently — and how that shaped what followed",
          "The weight of circumstances I didn't choose and couldn't escape",
          "A period where what was asked of me exceeded what I understood at the time — and still I moved",
          "A crucible — something that stripped away what I was holding too tightly"
        ]
      },
      {
        text: "How do you relate to the idea that you are the author of your own story?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "Fully — I believe my choices are the primary narrative engine",
          "Partially — I am a character in a story where the larger plot was already set",
          "I am the author of my action, not my outcome — that distinction is everything",
          "The Gita's metaphor is more precise: I am the instrument; the story is being written through me"
        ]
      },
      {
        text: "Which sentence lands most honestly right now?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "I know I hold the power to change my situation — and that knowledge drives me",
          "I often feel that no matter what I do, the outcome is not really in my hands",
          "I am learning to give everything to what I do and let go of what follows",
          "The more I release my grip on results, the more clearly I can see what the moment is asking of me"
        ]
      }
    ],
    hi: [
      {
        text: "जब आपके जीवन में कुछ गलत होता है, तो आपकी पहली व्याख्या आमतौर पर क्या होती है?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "मेरे निर्णयों ने यहाँ तक पहुँचाया — यह मेरी समझ का विषय है",
          "परिस्थिति, दूसरे लोग, या समय मेरे खिलाफ था",
          "कुछ ऐसा हुआ जो मेरे नियंत्रण में नहीं था — मेरा काम है सही ढंग से उत्तर देना",
          "जीवन मेरे साथ ऐसा ही चलता है — यह शायद ही कभी मेरी योजना के अनुसार होता है"
        ]
      },
      {
        text: "जब कुछ वास्तव में अच्छा होता है, तो आप उसे कैसे समझाते हैं?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "मैंने इसके लिए काम किया — यह मेरी तैयारी और परिश्रम को दर्शाता है",
          "मैं भाग्यशाली था, या इस बार परिस्थितियाँ अनुकूल थीं",
          "मैंने अपना सब कुछ दिया — और फिर किसी बड़ी शक्ति ने इसे संभव बनाया",
          "सही परिणाम तब आते हैं जब मैं सही जगह से कार्य करता हूँ, न केवल सही रणनीति से"
        ]
      },
      {
        text: "कोई महत्वपूर्ण निर्णय लेने से पहले, आप:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "शोध और विचार करता हूँ — जितनी अधिक जानकारी, उतना बेहतर",
          "प्रतीक्षा करता हूँ कि दूसरे क्या सोचते हैं या हवा किस दिशा में बह रही है",
          "पहले आंतरिक काम करता हूँ — इरादे की स्पष्टता मेरी पसंद को आकार देती है",
          "जो जान सकता हूँ जानता हूँ, सावधानी से निर्णय लेता हूँ और स्वीकार करता हूँ कि बाकी अनिश्चित है"
        ]
      },
      {
        text: "जब जीवन के किसी क्षेत्र में बार-बार असफलता मिलती है, तो आप सोचते हैं:",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "मुझसे कहीं गलती हो रही है — यह बदलने की मेरी क्षमता में है",
          "कुछ लोग कुछ चीजों में सफल होने के लिए नहीं बने होते",
          "मैं किसी परिणाम से बंधा हो सकता हूँ — यह पैटर्न मुझे कुछ सिखा रहा है",
          "मेरे बाहर की शक्तियाँ इसे बार-बार रोक रही हैं — प्रयास की कमी नहीं है"
        ]
      },
      {
        text: "आप कितना विश्वास करते हैं कि आपका दैनिक प्रयास वास्तव में मायने रखता है?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "बहुत — प्रयास मेरे जीवन में जो होता है उसका मुख्य चालक है",
          "अधिकांश लोगों के विश्वास से कम — बहुत कुछ किसी के नियंत्रण से बाहर है",
          "प्रयास पूरी तरह से मायने रखता है; परिणाम तय करना मेरा काम नहीं",
          "मेरा प्रयास एकमात्र सच्ची अर्पण है — उससे क्या होता है, वह मेरे दायरे में नहीं"
        ]
      },
      {
        text: "जब परिस्थितियाँ बदलती हैं और आपकी योजनाएँ बाधित होती हैं, तो आप:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "जल्दी अनुकूलित होता हूँ — देखता हूँ कि मैं अभी भी क्या कर सकता हूँ",
          "असहाय महसूस करता हूँ — बाधा यह बताती है कि मेरा नियंत्रण कितना कम है",
          "परिवर्तन को स्वीकार करता हूँ और पूछता हूँ कि यहाँ से सही कर्म क्या है",
          "पुनर्मूल्यांकन करता हूँ और फिर से बनाता हूँ — बाधा को बस स्वीकार करना मुझे मुश्किल लगता है"
        ]
      },
      {
        text: "भाग्य की अवधारणा से आप कैसे संबंधित हैं?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "भाग्य ज्यादातर वही है जिसे लोग तैयारी और अवसर का मिलन कहते हैं",
          "भाग्य बहुत शक्तिशाली है — यह परिणामों को उससे कहीं अधिक आकार देता है जितना लोग मानते हैं",
          "जो भाग्य की तरह दिखता है वह अक्सर कृपा है — केवल संयोग से परे",
          "कुछ लोग बस भाग्यशाली पैदा होते हैं — मैंने पर्याप्त देखा है यह मानने के लिए"
        ]
      },
      {
        text: "कोई बड़ी गलती करने के बाद, आप क्या करते हैं?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "विश्लेषण करता हूँ कि क्या गलत हुआ और अपना दृष्टिकोण सुधारता हूँ — यह मेरी जिम्मेदारी है",
          "देखता हूँ कि मेरे बाहर से गलती में क्या योगदान था",
          "ईमानदारी से स्वीकार करता हूँ, जहाँ हो सके सुधार करता हूँ, और बाकी छोड़ देता हूँ",
          "इससे सीखता हूँ, खुद को दंड दिए बिना — कर्म हो गया; अब जो महत्वपूर्ण है वह वर्तमान है"
        ]
      },
      {
        text: "जब आप अपने भविष्य के बारे में सोचते हैं, तो सबसे सच क्या लगता है?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "आज मेरे विकल्प सक्रिय रूप से वह जीवन बना रहे हैं जो मैं जीऊँगा",
          "भविष्य काफी हद तक उन शक्तियों द्वारा आकारित है जो मैंने नहीं चुनीं और नियंत्रित नहीं कर सकता",
          "मेरा भविष्य अलिखित है — मेरा काम वर्तमान में अच्छा कर्म करना है",
          "मैं ध्यान से बीज बोता हूँ; क्या फूलता है, यह पूरी तरह मेरा तय नहीं"
        ]
      },
      {
        text: "जो चीजें वास्तव में आपके नियंत्रण से बाहर हैं, उन्हें आप कैसे संभालते हैं?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "मुझे संघर्ष होता है — जो नहीं बदल सकता उसे स्वीकार करने में वास्तविक प्रयास लगता है",
          "वे पुष्टि करती हैं जो मुझे हमेशा लगा — मैं प्रभारी नहीं हूँ",
          "मैं स्पष्ट रूप से पहचानता हूँ कि क्या मेरा है और बाकी पूरी तरह छोड़ देता हूँ",
          "उन चीजों पर अधिक मेहनत करता हूँ जिन्हें प्रभावित कर सकता हूँ, क्षतिपूर्ति के लिए"
        ]
      },
      {
        text: "किसी कठिन रिश्ते में, आप समस्या कहाँ रखते हैं?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "पहले अपने स्वयं के पैटर्न में — बाहर देखने से पहले मैं क्या ला रहा हूँ यह देखता हूँ",
          "दूसरे व्यक्ति या गतिशीलता में — कुछ लोग बस कठिन होते हैं",
          "हमारी आंतरिक स्थितियों के बीच अंतर में — जब दोनों बढ़ते हैं, रिश्ता बदलता है",
          "यह कैसा होना चाहिए उससे लगाव में — पीड़ा अक्सर वहीं रहती है"
        ]
      },
      {
        text: "जब कोई आपसे कहता है कि आपकी किस्मत पहले से लिखी है, तो आप कैसे प्रतिक्रिया देते हैं?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "मैं असहमत हूँ — मेरा मानना है कि मेरे विकल्प मेरे साथ क्या होता है उसे आकार देते हैं",
          "यह प्रतिध्वनित होता है — यह समझाता है कि प्रयास हमेशा क्यों मायने नहीं रखता",
          "दोनों सच हैं: क्षेत्र तय है, लेकिन मैं उसमें कैसे चलता हूँ यह मेरा निर्धारण है",
          "भाग्य और स्वतंत्रता विपरीत नहीं हैं — गीता दोनों को एक साथ धारण करती है"
        ]
      },
      {
        text: "जब कोई प्रोजेक्ट आपकी अपेक्षाओं से परे सफल होता है, तो आपका पहला विचार है:",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "मेरी तैयारी और दृढ़ता ने काम किया",
          "समय सही था और टुकड़े जगह पर गिर गए",
          "मैंने अपना पूरा प्रयास दिया — और किसी बड़ी शक्ति ने इसे आगे बढ़ाया",
          "मैं उपकरण था — परिणाम मेरे माध्यम से आया, मुझसे नहीं"
        ]
      },
      {
        text: "आप दुनिया में अपनी स्थिति — अपनी परिस्थितियों, विशेषाधिकारों या नुकसान — के बारे में कैसे सोचते हैं?",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "पर्याप्त दृढ़ संकल्प के साथ कोई भी अपनी परिस्थितियों से ऊपर उठ सकता है",
          "परिस्थितियाँ उससे कहीं अधिक मायने रखती हैं जितना अधिकांश लोग मानना चाहते हैं",
          "मैं एक विशेष क्षेत्र में पैदा हुआ — मेरा काम उसमें अच्छा कर्म करना है",
          "परिस्थितियाँ दी गई थीं; मैं उनसे कैसे मिलता हूँ — यही एकमात्र प्रश्न है जिस पर मेरा अधिकार है"
        ]
      },
      {
        text: "वास्तविक प्रयास के बाद जो परिणाम चाहते थे वह नहीं मिला, तो क्या आपके साथ रहता है?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "मैं क्या अलग कर सकता था इसकी खोज",
          "यह अहसास कि कोशिश के बावजूद दुनिया ने सहयोग नहीं किया",
          "प्रयास स्वयं — वह पूर्ण था, चाहे बाद में कुछ भी हुआ",
          "समभाव — मैंने जो करना था किया; जो कभी मेरे हाथ में नहीं था उसका शोक नहीं"
        ]
      },
      {
        text: "जब कोई और वहाँ सफल होता है जहाँ आप संघर्ष करते रहे, तो आपकी आंतरिक प्रतिक्रिया क्या है?",
        tags: ["internal", "external", "surrendered", "external"],
        options: [
          "प्रेरणा — अगर उन्हें रास्ता मिला, तो मुझे भी मिल सकता है",
          "निराशा — उनके पास ऐसी परिस्थितियाँ या फायदे थे जो मेरे पास नहीं थे",
          "सराहना — उनकी सफलता और मेरी प्रतिस्पर्धा में नहीं हैं",
          "एक शांत अहसास कि कुछ चीजें बस असमान रूप से वितरित हैं"
        ]
      },
      {
        text: "आप आध्यात्मिक अभ्यास या प्रार्थना से कैसे संबंधित हैं?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "मैं इसकी सराहना करता हूँ, लेकिन मानता हूँ कि अधिकांश परिणाम वास्तव में जो मैं करता हूँ उससे आकारित होते हैं",
          "मैं इस पर निर्भर करता हूँ — परिणाम अक्सर मेरे परे लगता है, इसलिए मैं बाहर मुड़ता हूँ",
          "अभ्यास मेरे इरादे को स्पष्ट करता है ताकि मैं सही जगह से कर्म कर सकूँ",
          "प्रार्थना परिणाम माँगना नहीं है — यह खुद को संरेखित करना है ताकि सही कर्म स्वाभाविक हो जाए"
        ]
      },
      {
        text: "जब आपको आलोचनात्मक प्रतिक्रिया मिलती है, तो आपकी पहली प्रवृत्ति है:",
        tags: ["internal", "external", "surrendered", "internal"],
        options: [
          "इसे गंभीरता से लेना — चाहे चोट लगे, यहाँ कुछ उपयोगी हो सकता है",
          "स्रोत पर सवाल उठाना — प्रतिक्रिया अक्सर मेरे बारे में कम उनके बारे में अधिक कहती है",
          "बचाव या टूटे बिना उसके साथ बैठना — जो सच है वह उतरने देना",
          "संकेत को शोर से अलग करना, जो सेवा करे उसे एकीकृत करना, और बाकी छोड़ देना"
        ]
      },
      {
        text: "जब आप यह नहीं समझा सकते कि आपके साथ कुछ क्यों हुआ, तो आप कैसा महसूस करते हैं?",
        tags: ["internal", "external", "external", "surrendered"],
        options: [
          "असहज — मैं तब तक और खोजता हूँ जब तक कोई कारण नहीं मिल जाता जिससे काम किया जा सके",
          "इस्तीफे के साथ — कुछ चीजें बस किसी पैटर्न या कारण के बाहर हैं",
          "जिज्ञासु और खुला — हर चीज को स्वीकार करने के लिए समझाने की जरूरत नहीं",
          "शांति में — रहस्य कोई हल करने की समस्या नहीं बल्कि अस्तित्व का एक आयाम है"
        ]
      },
      {
        text: "जब वास्तविक प्रयास के बावजूद जो लक्ष्य आपको प्रिय है वह आगे नहीं बढ़ रहा, तो आप:",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "और जोर लगाता हूँ या अलग दृष्टिकोण आजमाता हूँ — कुछ तो होगा जो मैंने अभी नहीं आजमाया",
          "पीछे हटता हूँ और सोचता हूँ कि क्या मेरे जैसे किसी के लिए लक्ष्य कभी प्राप्य था",
          "प्रयास जारी रखता हूँ और समयरेखा पर अपनी पकड़ ढीली करता हूँ",
          "पूछता हूँ कि क्या परिणाम से मेरा लगाव ही बाधा है — और साफ जगह से कर्म करता हूँ"
        ]
      },
      {
        text: "आप अपनी आंतरिक स्थिति और बाहरी परिणामों के बीच संबंध को कैसे अनुभव करते हैं?",
        tags: ["internal", "external", "internal", "surrendered"],
        options: [
          "मजबूत — मेरी मानसिकता और अनुशासन सीधे प्रभावित करते हैं कि मैं क्या हासिल करता हूँ",
          "कमजोर — बाहरी परिस्थितियाँ आंतरिक स्थिति को अधिकांश समय ओवरराइड करती हैं",
          "आंतरिक स्थिति कर्म की गुणवत्ता को आकार देती है; परिणाम उसके बाद होते हैं",
          "जब मैं अंदर से स्पष्ट और अनासक्त होता हूँ, सही चीजें अपना रास्ता खोज लेती हैं"
        ]
      },
      {
        text: "जब आप असहाय महसूस करते हैं, तो यह अनुभव किसकी ओर इशारा करता है?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "एक ऐसी स्थिति जिसका मुझे अभी तक लीवर नहीं मिला — आमतौर पर कुछ किया जा सकता है",
          "सच्चाई — कि जीवन का बहुत कुछ किसी भी व्यक्ति से बड़ी शक्तियों द्वारा निर्धारित है",
          "एक संकेत कि मैं किस तरह की शक्ति खोज रहा हूँ इसकी जाँच करूँ",
          "नियंत्रण से सही कर्म की ओर जाने का निमंत्रण — परिणाम से धर्म की ओर"
        ]
      },
      {
        text: "जब आप अपने जीवन के सबसे कठिन अध्याय को पीछे मुड़कर देखते हैं, तो आप क्या देखते हैं?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "वे विकल्प जो मैं अब अलग तरह से लेता — और उन्होंने जो बाद में हुआ उसे कैसे आकार दिया",
          "उन परिस्थितियों का बोझ जो मैंने नहीं चुनीं और जिनसे बच नहीं सका",
          "एक ऐसा दौर जहाँ जो माँगा गया वह उससे अधिक था जो मैं तब समझता था — और फिर भी मैं चला",
          "एक भट्टी — कुछ ऐसा जिसने वह सब हटा दिया जिसे मैं बहुत कस के पकड़े था"
        ]
      },
      {
        text: "इस विचार से कि आप अपनी कहानी के लेखक हैं, आप कैसे संबंधित हैं?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "पूरी तरह — मेरा मानना है कि मेरे विकल्प प्राथमिक कथा इंजन हैं",
          "आंशिक रूप से — मैं एक ऐसी कहानी का पात्र हूँ जहाँ बड़ा कथानक पहले से तय था",
          "मैं अपने कर्म का लेखक हूँ, परिणाम का नहीं — वह अंतर ही सब कुछ है",
          "गीता का रूपक अधिक सटीक है: मैं उपकरण हूँ; कहानी मेरे माध्यम से लिखी जा रही है"
        ]
      },
      {
        text: "अभी कौन सा वाक्य सबसे ईमानदारी से उतरता है?",
        tags: ["internal", "external", "surrendered", "surrendered"],
        options: [
          "मैं जानता हूँ कि मेरे पास अपनी स्थिति बदलने की शक्ति है — और यह ज्ञान मुझे आगे बढ़ाता है",
          "मुझे अक्सर लगता है कि मैं चाहे कुछ भी करूँ, परिणाम वास्तव में मेरे हाथ में नहीं है",
          "मैं जो करता हूँ उसमें सब कुछ देना और जो होता है उसे जाने देना सीख रहा हूँ",
          "जितना अधिक मैं परिणामों पर अपनी पकड़ छोड़ता हूँ, उतना स्पष्ट दिखता है कि क्षण क्या माँग रहा है"
        ]
      }
    ]
  },
  staticReflections: {
    internal: {
      dominant: 'Internal',
      dominantHi: 'आंतरिक',
      subtitle: 'Power claimed, sometimes more than is yours',
      subtitleHi: 'शक्ति का दावा, कभी-कभी जरूरत से अधिक',
      reflection: "You are the one who looks inward first. When something goes wrong, you search for your part in it. When something goes right, you credit your preparation. This is not arrogance — it is a profound sense of agency, a refusal to be a passive object in your own story. The Gita honours this. Krishna does not tell Arjuna to give up and wait. He tells him to act.\n\nAnd yet BG 3.27 is the verse that speaks directly to this pattern: 'the ego, deluded by identification with nature, believes itself to be the doer.' The shadow of internal locus is subtle — not laziness or helplessness, but a form of inflation. When we own everything, we silently claim that we are the prime cause. We carry the burden of every outcome as if the universe depended on our management.\n\nThe invitation here is not to relinquish your agency — it is to widen it. You can be a full and committed actor without believing that the entire script is yours to write. Your work is complete action. The result belongs to something larger. That is not passivity. That is the most mature form of power the Gita describes.",
      reflectionHi: "आप वही हैं जो पहले अंदर देखते हैं। जब कुछ गलत होता है, तो आप अपनी भूमिका खोजते हैं। जब कुछ सही होता है, तो आप अपनी तैयारी को श्रेय देते हैं। यह अहंकार नहीं है — यह कर्तृत्व की गहरी भावना है।\n\nफिर भी गीता ३.२७ सीधे इस स्वरूप से बात करती है: 'प्रकृति के गुणों द्वारा भ्रमित अहंकार खुद को कर्ता मानता है।' आंतरिक केंद्र की छाया सूक्ष्म है — यह आलस्य नहीं, बल्कि एक प्रकार का फुलाव है। जब हम सब कुछ अपना मानते हैं, तो हम चुपचाप दावा करते हैं कि हम प्रमुख कारण हैं।\n\nयहाँ निमंत्रण आपकी कर्तृत्व-शक्ति छोड़ना नहीं है — बल्कि उसे विस्तृत करना है। आप पूर्ण कर्ता हो सकते हैं, यह विश्वास किए बिना कि पूरी पटकथा आपकी लिखी है। आपका काम पूर्ण कर्म है। परिणाम किसी बड़ी चीज का है। यही गीता की सबसे परिपक्व शक्ति है।",
      shloka: 'prakrteh kriyamanani gunaih karmani sarvasah / ahankara-vimudhatma kartaham iti manyate',
      shlokaHi: 'प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहंकारविमूढात्मा कर्ताहमिति मन्यते॥',
      shlokaRef: 'BG 3.27',
      shlokaMeaning: 'Actions are in every way performed by the qualities of nature; the self deluded by ego thinks "I am the doer."',
      shlokaMeaningHi: 'सभी कर्म प्रकृति के गुणों द्वारा किए जाते हैं; अहंकार से भ्रमित आत्मा सोचती है "मैं कर्ता हूँ।"'
    },
    external: {
      dominant: 'External',
      dominantHi: 'बाह्य',
      subtitle: 'Power placed outside — in fate, others, circumstance',
      subtitleHi: 'शक्ति बाहर रखी — भाग्य, दूसरों, परिस्थिति में',
      reflection: "There is something honest in this pattern. You are not wrong that circumstances shape outcomes. You are not wrong that luck exists, that privilege is real, that the field is not equal. Arjuna himself laid down his bow because he felt the situation was beyond any individual act. The Gita does not dismiss that experience — it begins there.\n\nBG 18.14 is remarkably clear: five factors combine in every action — the body, the agent, the instruments, the effort, and the fifth: daiva, the unseen. The Gita is not a doctrine of pure willpower. It acknowledges that something beyond you is always present in every result. You have sensed this correctly.\n\nWhat the Gita adds — and what NLP also illuminates — is the question of where you place your attention. When power is located entirely outside, the inner world contracts. Agency, even the small genuine agency you do possess, goes unexercised. The work here is not to pretend you control everything. It is to reclaim the territory that is genuinely yours: the quality of your attention, the sincerity of your effort, the orientation of your inner state. That ground belongs to you, regardless of what surrounds it.",
      reflectionHi: "इस स्वरूप में कुछ ईमानदारी है। आप गलत नहीं हैं कि परिस्थितियाँ परिणामों को आकार देती हैं। भाग्य है, विशेषाधिकार वास्तविक है, क्षेत्र समान नहीं है। अर्जुन ने भी अपना धनुष इसलिए रखा क्योंकि उन्हें लगा कि स्थिति किसी व्यक्तिगत कर्म से परे है।\n\nगीता १८.१४ स्पष्ट है: हर कर्म में पाँच कारक जुड़ते हैं — शरीर, कर्ता, उपकरण, प्रयास, और पाँचवाँ: दैव, अदृश्य। गीता शुद्ध इच्छाशक्ति का सिद्धांत नहीं है। वह स्वीकार करती है कि हर परिणाम में आपसे परे कुछ हमेशा उपस्थित है।\n\nगीता जो जोड़ती है — और NLP भी यही दिखाता है — वह यह प्रश्न है कि आप अपना ध्यान कहाँ रखते हैं। जब शक्ति पूरी तरह बाहर होती है, तो आंतरिक संसार सिकुड़ता है। यहाँ काम यह नहीं है कि सब कुछ नियंत्रित करने का नाटक करें। यह है कि जो वास्तव में आपका है उसे वापस लें: आपके ध्यान की गुणवत्ता, आपके प्रयास की ईमानदारी, आपकी आंतरिक स्थिति का झुकाव।",
      shloka: 'adhisthanam tatha karta karanam ca prthag-vidham / vividhas ca prthak cesta daivam caivatra pancamam',
      shlokaHi: 'अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्। विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्॥',
      shlokaRef: 'BG 18.14',
      shlokaMeaning: 'The body, the agent, the instruments of various kinds, the many kinds of effort — and the fifth: the unseen. These five combine in every action.',
      shlokaMeaningHi: 'शरीर, कर्ता, विभिन्न प्रकार के करण, अनेक प्रकार की चेष्टाएँ — और पाँचवाँ दैव — ये पाँच हर कर्म में एकत्र होते हैं।'
    },
    surrendered: {
      dominant: 'Surrendered',
      dominantHi: 'समर्पित',
      subtitle: 'Full ownership of action, full release of outcome',
      subtitleHi: 'कर्म का पूर्ण स्वामित्व, फल का पूर्ण त्याग',
      reflection: "This is the position the Gita is most deeply trying to describe — and the rarest pattern to embody. It is not the withdrawal of effort, nor is it helpless acceptance of whatever comes. It is the integration of two things that ordinarily feel like opposites: complete ownership of your action, and complete release of what follows from it.\n\nBG 3.19 holds this beautifully: 'Always do what must be done, without attachment. It is through unattached action that a person reaches the highest.' Nishkama Karma is not indifference. It is a fierce, clear engagement with what this moment requires, free from the distortion of neediness for a particular outcome. You act not because you need the result to feel safe, worthy, or successful — you act because right action is its own dignity.\n\nWhat NLP calls 'ecology' — the alignment of your actions with your deeper values — maps closely to this. When your inner state is clean, your actions become clean. When you are not pulling results toward you out of anxiety or pushing them away out of fear, you become a remarkably clear instrument. The Gita's word for this clarity is yoga. You are learning to live there.",
      reflectionHi: "यह वह स्थिति है जिसे गीता सबसे गहराई से समझाने की कोशिश करती है — और सबसे दुर्लभ स्वरूप। यह प्रयास का त्याग नहीं है, न ही जो आए उसकी लाचार स्वीकृति। यह दो चीजों का एकीकरण है जो आमतौर पर विपरीत लगती हैं: अपने कर्म का पूर्ण स्वामित्व, और उससे जो होता है उसका पूर्ण त्याग।\n\nगीता ३.१९ इसे सुंदर ढंग से धारण करती है: 'सदैव जो करना है वह करो, बिना आसक्ति के। अनासक्त कर्म के माध्यम से ही मनुष्य सर्वोच्च को प्राप्त होता है।' निष्काम कर्म उदासीनता नहीं है। यह एक तीव्र, स्पष्ट संलग्नता है — किसी विशेष परिणाम की जरूरत से मुक्त।\n\nजब आपकी आंतरिक स्थिति स्वच्छ होती है, तो आपके कर्म स्वच्छ हो जाते हैं। जब आप चिंता से परिणाम नहीं खींच रहे और भय से नहीं धकेल रहे, तो आप एक उल्लेखनीय रूप से स्पष्ट उपकरण बन जाते हैं। गीता इस स्पष्टता को योग कहती है। आप वहाँ जीना सीख रहे हैं।",
      shloka: 'tasmad asaktah satatam karyam karma samacara / asakto hy acaran karma param apnoti purusah',
      shlokaHi: 'तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥',
      shlokaRef: 'BG 3.19',
      shlokaMeaning: 'Therefore, always do what must be done without attachment. Through unattached action, the highest is attained.',
      shlokaMeaningHi: 'इसलिए सदैव आसक्ति रहित होकर कर्तव्य-कर्म का आचरण करो। आसक्ति रहित होकर कर्म करने वाला मनुष्य परम को प्राप्त होता है।'
    }
  }
};
