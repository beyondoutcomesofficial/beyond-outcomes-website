// Decision-Making Style Quiz — Deliberate, Impulsive, Avoidant
// Rooted in Bhagavad Gita Chapter 18 — The Three Natures of Action (Gunas and Buddhi)
window.QUIZ_DATA = {
  id: 'decision',
  meta: {
    en: {
      title: 'How Do You<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Make Decisions?</span>',
      shareTitle: 'Decision-Making Style',
      chapter: 'Bhagavad Gita · Chapter 18 · The Three Natures of Action',
      intro: 'The moment of decision is the moment of power. The Gita teaches that how you decide reveals your inner nature more than what you decide. This inquiry reveals your dominant decision-making pattern — where your clarity lives, where it gets lost, and what it costs you.',
      tagPrefix: 'VIVEKA · DECISION',
      categoryNames: { deliberate: 'Deliberate', impulsive: 'Impulsive', avoidant: 'Avoidant' }
    },
    hi: {
      title: 'आप निर्णय<br><span style="color: var(--bo-gold-deep); font-weight: 500;">कैसे लेते हैं?</span>',
      shareTitle: 'निर्णय-शैली',
      chapter: 'भगवद्गीता · अध्याय १८ · कर्म के तीन स्वभाव',
      intro: 'निर्णय का क्षण शक्ति का क्षण होता है। गीता सिखाती है कि आप क्या निर्णय लेते हैं, इससे अधिक आप कैसे लेते हैं — यह आपके भीतरी स्वभाव को प्रकट करता है। यह जिज्ञासा आपकी प्रमुख निर्णय-शैली दर्शाती है — स्पष्टता कहाँ जीती है, कहाँ खो जाती है, और इसकी क्या कीमत है।',
      tagPrefix: 'विवेक · निर्णय',
      categoryNames: { deliberate: 'विवेकशील', impulsive: 'आवेगशील', avoidant: 'परिहारी' }
    }
  },
  categories: ['deliberate', 'impulsive', 'avoidant'],
  questions: {
    en: [
      {
        text: "When you face a major life decision, what happens first?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "I gather information and think it through before I feel ready to move",
          "I feel an immediate pull toward one option — the gut speaks first",
          "I feel the weight of it and hope more time will bring more clarity",
          "I feel stuck — every option seems to carry a cost I am not willing to pay"
        ]
      },
      {
        text: "When you have to decide something quickly, under time pressure:",
        tags: ["impulsive", "deliberate", "avoidant", "impulsive"],
        options: [
          "I decide fast — urgency sharpens me and I trust my instinct",
          "I identify the most important factor and use that to anchor my choice",
          "The pressure makes it harder — I feel forced rather than clear",
          "I go with whatever feels most energising in that moment"
        ]
      },
      {
        text: "A significant decision is sitting with you unresolved. After two weeks, you notice:",
        tags: ["avoidant", "deliberate", "impulsive", "avoidant"],
        options: [
          "I have been avoiding thinking about it — each time it surfaces, I push it away",
          "I have gathered more clarity — the extra time has been useful",
          "I have probably already decided — the delay was just me confirming it",
          "I feel more anxious, not less — the unresolved weight is growing"
        ]
      },
      {
        text: "How much do you rely on other people's opinions when deciding?",
        tags: ["deliberate", "avoidant", "impulsive", "deliberate"],
        options: [
          "I consult selectively — I want input, but the final call is mine",
          "Quite a lot — it is easier when someone I trust tells me what to do",
          "Not much — others' opinions slow me down when I already know what I want",
          "I seek multiple opinions and then feel more confused than before"
        ]
      },
      {
        text: "When you think about a past decision you regret, what does the regret feel like?",
        tags: ["impulsive", "impulsive", "deliberate", "deliberate"],
        options: [
          "Sharp — I moved too fast, and I knew it even as I was moving",
          "Dull and heavy — I wish I had just done something, anything",
          "Mild and instructive — I know what I would do differently and why",
          "A quiet ache — I still replay the moment when I could have chosen differently"
        ]
      },
      {
        text: "When two options are genuinely equal — both have real merit and real cost — you tend to:",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "Work through the difference slowly until something tilts my clarity",
          "Pick the one that excites me more and move — deliberating past a point is wasteful",
          "Ask someone else to help me choose — I lose perspective when things are even",
          "Stay undecided much longer than is useful, hoping the choice will become obvious"
        ]
      },
      {
        text: "Small daily decisions — what to eat, what to say in a message, how to spend an afternoon — feel:",
        tags: ["impulsive", "deliberate", "avoidant", "deliberate"],
        options: [
          "Easy and instinctive — I decide without overthinking and move on",
          "Fine — I have a sense of what I value and that guides small things naturally",
          "Surprisingly draining — I second-guess even minor choices",
          "Like practice — small decisions help me learn my own preferences more clearly"
        ]
      },
      {
        text: "Once you have made a significant decision, what happens in the hours after?",
        tags: ["deliberate", "impulsive", "impulsive", "impulsive"],
        options: [
          "A quiet settling — I may revisit it once, but I generally feel at peace",
          "Momentum — I move quickly to act on it before doubt can arrive",
          "Second-guessing — I wonder if I got it wrong",
          "Excitement, followed eventually by some doubt about whether I thought it through enough"
        ]
      },
      {
        text: "What is your relationship with irreversible decisions — ones you cannot undo?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "I find them harder — permanence adds weight that I do not always handle well",
          "I do not dwell on them — what is done is done, and I face what comes next",
          "I approach them more carefully, but I can still make them when the clarity is there",
          "I avoid them as long as possible — irreversibility feels dangerous to me"
        ]
      },
      {
        text: "What role does logic play in how you decide?",
        tags: ["deliberate", "impulsive", "avoidant", "deliberate"],
        options: [
          "A significant one — I want reasons I can articulate, not just feelings",
          "A secondary one — logic is useful for confirming what I already sense is right",
          "A confusing one — I have logic for both options, which makes it harder",
          "A structuring one — I use logic to organise my thinking, then test it against feeling"
        ]
      },
      {
        text: "What role does your gut or intuition play?",
        tags: ["impulsive", "deliberate", "avoidant", "impulsive"],
        options: [
          "Everything — I trust my instinct completely and rarely override it",
          "An important signal — I take it seriously, then investigate whether it holds",
          "An unreliable one — my gut is often just anxiety wearing the mask of intuition",
          "A loud one — it speaks, but it speaks before I have thought, and I can't always trust it"
        ]
      },
      {
        text: "When someone asks you to decide for the group — what restaurant, what plan, what direction — you:",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "Deflect — I would rather someone else hold that responsibility",
          "Decide quickly and confidently — I enjoy being the one who moves things forward",
          "Ask a clarifying question or two, then offer a considered suggestion",
          "Offer a few options rather than one — it feels safer than naming a definitive choice"
        ]
      },
      {
        text: "When you imagine a decision you have been avoiding, what does the image feel like?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "Heavy — like a door I don't want to open because I can't see what is behind it",
          "Remote — I don't tend to avoid decisions, they just get made",
          "A bit uncomfortable, but manageable — I know I will face it when I am ready",
          "Like a stone in my chest — present even when I am thinking about something else"
        ]
      },
      {
        text: "When you make a decision that affects someone you love, what changes?",
        tags: ["deliberate", "avoidant", "impulsive", "avoidant"],
        options: [
          "I slow down more — the stakes feel higher and I want to get it right",
          "I become more likely to avoid or defer — I don't want to get it wrong for them",
          "I move more freely — love gives me clarity and courage",
          "I become paralysed — too much fear of the impact to think clearly"
        ]
      },
      {
        text: "When you look back over the past year, the decisions you most regret are:",
        tags: ["avoidant", "impulsive", "deliberate", "impulsive"],
        options: [
          "The ones I didn't make — the unlived choices that still sit with me",
          "The ones I made too fast, without enough thought about the consequences",
          "Honestly, not many — I mostly trust my process even when outcomes disappoint",
          "The ones I made in the heat of emotion rather than from a settled place"
        ]
      },
      {
        text: "Imagine you are at a crossroads — a genuine fork, two very different lives. You notice:",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "I need to sit with this longer than the moment allows — I want to understand both paths",
          "I already know which way I want to go — thinking too long would only confuse me",
          "I feel overwhelmed — both paths feel risky and I wish someone could tell me",
          "I freeze — the weight of the choice makes forward movement feel impossible"
        ]
      },
      {
        text: "When you have to decide and the information you have is incomplete:",
        tags: ["impulsive", "deliberate", "avoidant", "deliberate"],
        options: [
          "I decide anyway — waiting for complete information is waiting forever",
          "I identify what I know with confidence and move from that foundation",
          "I delay and keep researching — incomplete information feels like no information",
          "I ask: what is the minimum I need to know to make a sound choice?"
        ]
      },
      {
        text: "Before you make a significant decision, what does the internal experience feel like?",
        tags: ["deliberate", "impulsive", "deliberate", "avoidant"],
        options: [
          "Thoughtful weight — I take decisions seriously and that feels appropriate",
          "Alive and ready — I feel most engaged when something needs to be chosen",
          "Tense and sticky — the decision itself is uncomfortable before it is made",
          "Dread, often — like the moment before something costly that I cannot undo"
        ]
      },
      {
        text: "When you finally commit to a decision, what does that commitment feel like?",
        tags: ["deliberate", "impulsive", "avoidant", "impulsive"],
        options: [
          "Clear and settled — I commit fully once I have found my clarity",
          "Natural — I have already been living the decision before I formally said it",
          "Fragile — I am never fully certain that I won't reconsider it",
          "Energising — the moment of commitment is always the best part"
        ]
      },
      {
        text: "How do you relate to decisions other people make that affect you?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "With some relief, honestly — I am glad the weight is with them and not with me",
          "With occasional frustration — they do not always move with the quality I would want",
          "With equanimity — I can offer my view and then genuinely release the outcome",
          "With anxiety — I worry their decision will put me in a harder position"
        ]
      },
      {
        text: "When a decision you made turns out to have been wrong, your first honest response is:",
        tags: ["deliberate", "avoidant", "impulsive", "impulsive"],
        options: [
          "Curiosity — what was the flaw in my thinking? What did I not see clearly?",
          "Withdrawal — I feel the failure quietly and find it hard to trust myself afterward",
          "A moment of frustration, then forward movement — I don't dwell for long",
          "Self-criticism — I replay what I should have done until the mental loop exhausts itself"
        ]
      },
      {
        text: "How long does a typical significant decision take you — from first awareness to final choice?",
        tags: ["deliberate", "impulsive", "deliberate", "avoidant"],
        options: [
          "Much longer than it probably needs to — I am slow and I know it",
          "Quickly — I trust my first strong sense and I rarely need more than that",
          "As long as it needs — I pace myself, and the process generally lands in good time",
          "Indefinitely, sometimes — I do not always arrive at a final choice at all"
        ]
      },
      {
        text: "What most often derails a decision that was almost made?",
        tags: ["deliberate", "deliberate", "impulsive", "avoidant"],
        options: [
          "A doubt that surfaces at the last moment — what if I am wrong?",
          "New information I want to consider before I finalize",
          "An emotion — excitement or fear shifts the calculus entirely",
          "Someone else's concern — if someone expresses worry, I fold back into uncertainty"
        ]
      },
      {
        text: "When you imagine the version of you who decides well — calm, clear, free — what do you notice?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "That I have access to this version — not always, but more than I give myself credit for",
          "That I already am this version — I trust myself and I move from that trust",
          "That it feels distant — I am not sure I have ever truly decided from that place",
          "That it feels beautiful and foreign — a way of being I have wanted but not yet inhabited"
        ]
      },
      {
        text: "Which sentence lands most honestly right now?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "I take decisions seriously — perhaps too seriously — but I generally find my way through",
          "I move fast and trust myself — my decisions are sometimes costly, but I never stay frozen",
          "I find decisions genuinely hard — not from laziness but from a real fear of getting it wrong",
          "The decisions I haven't made are living in me — and they are heavier than the ones I have"
        ]
      }
    ],
    hi: [
      {
        text: "जब आप किसी बड़े जीवन निर्णय का सामना करते हैं, तो सबसे पहले क्या होता है?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "मैं जानकारी जुटाता/जुटाती हूं और सोचता/सोचती हूं — जब तैयार महसूस हो तब आगे बढ़ता/बढ़ती हूं",
          "एक विकल्प की ओर तत्काल खिंचाव होता है — अंतर्मन पहले बोलता है",
          "उसका बोझ महसूस होता है और उम्मीद रहती है कि समय के साथ स्पष्टता आएगी",
          "अटकाव महसूस होता है — हर विकल्प में एक कीमत लगती है जो देना नहीं चाहता/चाहती"
        ]
      },
      {
        text: "जब समय के दबाव में जल्दी निर्णय लेना हो:",
        tags: ["impulsive", "deliberate", "avoidant", "impulsive"],
        options: [
          "मैं जल्दी निर्णय लेता/लेती हूं — तात्कालिकता मुझे पैना करती है और मैं अंतर्ज्ञान पर भरोसा करता/करती हूं",
          "सबसे महत्वपूर्ण कारक पहचानकर उसे आधार बनाता/बनाती हूं",
          "दबाव इसे कठिन बनाता है — मैं मजबूर महसूस करता/करती हूं, स्पष्ट नहीं",
          "उस क्षण जो सबसे ऊर्जावान लगे उसी के साथ जाता/जाती हूं"
        ]
      },
      {
        text: "दो सप्ताह से एक महत्वपूर्ण निर्णय अनसुलझा है। आप क्या नोटिस करते/करती हैं?",
        tags: ["avoidant", "deliberate", "impulsive", "avoidant"],
        options: [
          "मैं इसके बारे में सोचने से बचता/बचती रहा/रही हूं — जब भी उठता है, टाल देता/देती हूं",
          "अधिक स्पष्टता आई है — अतिरिक्त समय उपयोगी रहा",
          "शायद मैं पहले ही निर्णय ले चुका/चुकी हूं — देरी तो बस पुष्टि थी",
          "पहले से अधिक बेचैन हूं — अनसुलझा बोझ बढ़ता जा रहा है"
        ]
      },
      {
        text: "निर्णय लेते समय आप दूसरों की राय पर कितना निर्भर करते/करती हैं?",
        tags: ["deliberate", "avoidant", "impulsive", "deliberate"],
        options: [
          "चुनिंदा — सुझाव चाहिए, पर अंतिम निर्णय मेरा होता है",
          "काफी अधिक — जब कोई विश्वासपात्र बता दे तो आसान हो जाता है",
          "बहुत कम — दूसरों की राय मुझे धीमा करती है जब मैं पहले से जानता/जानती हूं",
          "कई राय लेता/लेती हूं फिर भी पहले से अधिक भ्रमित हो जाता/जाती हूं"
        ]
      },
      {
        text: "किसी पछताए गए निर्णय को याद करें — वह पछतावा कैसा महसूस होता है?",
        tags: ["impulsive", "impulsive", "deliberate", "deliberate"],
        options: [
          "तीखा — बहुत जल्दी बढ़ा, और चलते समय भी पता था",
          "मंद और भारी — काश कुछ किया होता, कुछ भी",
          "हल्का और शिक्षाप्रद — जानता/जानती हूं क्या अलग करता/करती",
          "एक चुप दर्द — वह क्षण अब भी दोहराता है जब बदल सकता/सकती था/थी"
        ]
      },
      {
        text: "जब दो विकल्प वास्तव में बराबर हों — दोनों में गुण भी हों और कीमत भी — आप:",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "धीरे-धीरे अंतर निकालता/निकालती हूं जब तक स्पष्टता न आए",
          "जो अधिक रोमांचित करे उसे चुनता/चुनती हूं — अधिक सोचना व्यर्थ है",
          "किसी और से चुनने में मदद मांगता/मांगती हूं — समान विकल्पों में दृष्टि खो जाती है",
          "जरूरत से कहीं अधिक अनिर्णीत रहता/रहती हूं, उम्मीद करता/करती हूं कि यह स्पष्ट हो जाए"
        ]
      },
      {
        text: "छोटे दैनिक निर्णय — क्या खाएं, संदेश में क्या लिखें, दोपहर कैसे बिताएं — कैसे महसूस होते हैं?",
        tags: ["impulsive", "deliberate", "avoidant", "deliberate"],
        options: [
          "आसान और स्वाभाविक — बिना अधिक सोचे निर्णय लेता/लेती हूं और आगे बढ़ता/बढ़ती हूं",
          "ठीक — मेरी प्राथमिकताओं का बोध है जो छोटी चीजें स्वाभाविक रूप से तय करता है",
          "आश्चर्यजनक रूप से थकाने वाले — मामूली विकल्पों में भी दोबारा सोचता/सोचती हूं",
          "अभ्यास की तरह — छोटे निर्णय मुझे अपनी पसंद-नापसंद बेहतर समझने में मदद करते हैं"
        ]
      },
      {
        text: "कोई महत्वपूर्ण निर्णय लेने के कुछ घंटे बाद आप क्या महसूस करते/करती हैं?",
        tags: ["deliberate", "impulsive", "impulsive", "impulsive"],
        options: [
          "एक शांत स्थिरता — शायद एक बार दोहराऊं, पर आमतौर पर चैन रहता है",
          "गति — संदेह आए इससे पहले तुरंत उस पर काम शुरू कर देता/देती हूं",
          "पुनर्विचार — सोचता/सोचती हूं कहीं गलत तो नहीं किया",
          "उत्साह, फिर कुछ संदेह — क्या मैंने पर्याप्त सोचा था?"
        ]
      },
      {
        text: "अपरिवर्तनीय निर्णयों — जो वापस नहीं हो सकते — से आपका रिश्ता कैसा है?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "मुझे वे कठिन लगते हैं — स्थायित्व का बोझ मैं हमेशा अच्छी तरह नहीं उठा पाता/पाती",
          "मैं उन पर नहीं रुकता/रुकती — जो हो गया हो गया, आगे क्या आता है वह देखता/देखती हूं",
          "अधिक सावधानी से संपर्क करता/करती हूं, पर जब स्पष्टता हो तो ले सकता/सकती हूं",
          "जितना हो सके टालता/टालती हूं — अपरिवर्तनीयता मुझे खतरनाक लगती है"
        ]
      },
      {
        text: "तर्क आपके निर्णय में क्या भूमिका निभाता है?",
        tags: ["deliberate", "impulsive", "avoidant", "deliberate"],
        options: [
          "महत्वपूर्ण — मुझे ऐसे कारण चाहिए जो मैं समझा सकूं, केवल भावनाएं नहीं",
          "द्वितीयक — तर्क उसे पुष्ट करता है जो मुझे पहले से सही लगता है",
          "भ्रमित करने वाला — दोनों विकल्पों के लिए तर्क हैं, जिससे और कठिन हो जाता है",
          "संरचना देने वाला — तर्क से सोच व्यवस्थित करता/करती हूं, फिर भावना से जांचता/जांचती हूं"
        ]
      },
      {
        text: "आपकी अंतर्ज्ञान या भीतरी आवाज क्या भूमिका निभाती है?",
        tags: ["impulsive", "deliberate", "avoidant", "impulsive"],
        options: [
          "सब कुछ — मैं पूरी तरह अंतर्ज्ञान पर भरोसा करता/करती हूं और शायद ही कभी उसे नकारता/नकारती हूं",
          "एक महत्वपूर्ण संकेत — इसे गंभीरता से लेता/लेती हूं, फिर जांचता/जांचती हूं",
          "अविश्वसनीय — मेरा अंतर्ज्ञान अक्सर चिंता का मुखौटा पहने होता है",
          "जोर से बोलने वाली — बोलती है, पर सोचने से पहले, और मैं हमेशा भरोसा नहीं कर सकता/सकती"
        ]
      },
      {
        text: "जब समूह के लिए निर्णय लेने को कहा जाए — कहाँ खाएं, क्या करें — आप:",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "टाल देता/देती हूं — इस जिम्मेदारी को कोई और उठाए तो बेहतर",
          "जल्दी और आत्मविश्वास से निर्णय लेता/लेती हूं — आगे बढ़ाना मुझे अच्छा लगता है",
          "एक-दो स्पष्टीकरण पूछता/पूछती हूं, फिर एक विचारपूर्ण सुझाव देता/देती हूं",
          "एक विकल्प की बजाय कुछ विकल्प देता/देती हूं — सीधा जवाब देना जोखिम भरा लगता है"
        ]
      },
      {
        text: "किसी टाले गए निर्णय की कल्पना करें — वह तस्वीर कैसी लगती है?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "भारी — एक दरवाजा जो खोलना नहीं चाहता/चाहती क्योंकि पीछे क्या है पता नहीं",
          "दूर — मैं निर्णय नहीं टालता/टालती, वे बस हो जाते हैं",
          "थोड़ी असुविधाजनक, पर संभव — जब तैयार होऊंगा/होऊंगी, करूंगा/करूंगी",
          "सीने में एक पत्थर — कुछ और सोचते हुए भी वहाँ मौजूद रहता है"
        ]
      },
      {
        text: "जब आपका निर्णय किसी प्रिय को प्रभावित करता हो, तब क्या बदलता है?",
        tags: ["deliberate", "avoidant", "impulsive", "avoidant"],
        options: [
          "मैं और धीमा होता/होती हूं — दांव ऊंचे हैं और सही करना चाहता/चाहती हूं",
          "टालने की अधिक संभावना हो जाती है — उनके लिए गलत नहीं होना चाहता/चाहती",
          "अधिक स्वतंत्रता से निर्णय लेता/लेती हूं — प्रेम स्पष्टता और साहस देता है",
          "लकवाग्रस्त हो जाता/जाती हूं — प्रभाव के भय से स्पष्ट नहीं सोच पाता/पाती"
        ]
      },
      {
        text: "पिछले साल पर नजर डालें — जिन निर्णयों पर सबसे अधिक पछताते हैं वे:",
        tags: ["avoidant", "impulsive", "deliberate", "impulsive"],
        options: [
          "वे जो मैंने लिए ही नहीं — वे अनजिए विकल्प जो अभी भी मेरे साथ हैं",
          "वे जो बहुत जल्दी लिए, परिणाम सोचे बिना",
          "ईमानदारी से कहूं, बहुत कम — मैं अपनी प्रक्रिया पर भरोसा करता/करती हूं",
          "वे जो भावनाओं के आवेश में लिए, स्थिरता से नहीं"
        ]
      },
      {
        text: "कल्पना करें कि आप एक चौराहे पर हैं — दो बिल्कुल अलग रास्ते। आप क्या नोटिस करते/करती हैं?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "मुझे यहाँ से अधिक समय चाहिए — दोनों रास्ते समझना चाहता/चाहती हूं",
          "मैं पहले से जानता/जानती हूं किधर जाना है — अधिक सोचना भ्रम पैदा करेगा",
          "अभिभूत महसूस करता/करती हूं — दोनों जोखिम भरे लगते हैं, काश कोई बता दे",
          "जम जाता/जाती हूं — निर्णय का बोझ आगे बढ़ना असंभव कर देता है"
        ]
      },
      {
        text: "जब निर्णय लेना हो पर जानकारी अधूरी हो:",
        tags: ["impulsive", "deliberate", "avoidant", "deliberate"],
        options: [
          "फिर भी निर्णय लेता/लेती हूं — पूरी जानकारी का इंतजार करना अनंत काल का इंतजार है",
          "जो मुझे निश्चित रूप से पता है उसे पहचानता/पहचानती हूं और उसी से आगे बढ़ता/बढ़ती हूं",
          "देरी करता/करती हूं और शोध जारी रखता/रखती हूं — अधूरी जानकारी कोई जानकारी नहीं",
          "पूछता/पूछती हूं: सही निर्णय के लिए न्यूनतम क्या चाहिए?"
        ]
      },
      {
        text: "किसी महत्वपूर्ण निर्णय से पहले भीतर का अनुभव कैसा होता है?",
        tags: ["deliberate", "impulsive", "deliberate", "avoidant"],
        options: [
          "विचारशील भार — निर्णयों को गंभीरता से लेता/लेती हूं और यह उचित लगता है",
          "जीवंत और तैयार — जब कुछ चुनना हो तब मैं सबसे अधिक सक्रिय महसूस करता/करती हूं",
          "तनावपूर्ण और चिपचिपा — निर्णय लेने से पहले ही असुविधा होती है",
          "भय, अक्सर — किसी ऐसी चीज़ से पहले का वह क्षण जो वापस नहीं हो सकती"
        ]
      },
      {
        text: "जब आप किसी निर्णय के प्रति प्रतिबद्ध होते/होती हैं, वह प्रतिबद्धता कैसी महसूस होती है?",
        tags: ["deliberate", "impulsive", "avoidant", "impulsive"],
        options: [
          "स्पष्ट और स्थिर — स्पष्टता मिलने पर पूरी तरह प्रतिबद्ध होता/होती हूं",
          "स्वाभाविक — औपचारिक रूप से कहने से पहले ही मैं उस निर्णय में जी रहा/रही होता/होती हूं",
          "नाजुक — कभी पूरी तरह निश्चित नहीं कि पुनर्विचार नहीं करूंगा/करूंगी",
          "ऊर्जादायी — प्रतिबद्धता का क्षण हमेशा सबसे अच्छा होता है"
        ]
      },
      {
        text: "दूसरों के उन निर्णयों से जो आपको प्रभावित करते हों, आपका संबंध कैसा है?",
        tags: ["avoidant", "impulsive", "deliberate", "avoidant"],
        options: [
          "कुछ राहत के साथ — यह बोझ उनके पास है मेरे नहीं, यह अच्छा लगता है",
          "कभी-कभी निराशा के साथ — वे उस गुणवत्ता से नहीं चलते जो मैं चाहता/चाहती",
          "समभाव से — मैं अपनी राय दे सकता/सकती हूं और फिर परिणाम सच में छोड़ सकता/सकती हूं",
          "चिंता के साथ — डर रहता है कि उनका निर्णय मुझे कठिन स्थिति में न डाल दे"
        ]
      },
      {
        text: "जब आपका कोई निर्णय गलत निकले, आपकी पहली ईमानदार प्रतिक्रिया क्या है?",
        tags: ["deliberate", "avoidant", "impulsive", "impulsive"],
        options: [
          "जिज्ञासा — मेरी सोच में क्या खामी थी? मैंने क्या नहीं देखा?",
          "अंतर्मुखी — विफलता को चुपचाप महसूस करता/करती हूं और फिर खुद पर भरोसा करना कठिन लगता है",
          "एक पल की खीझ, फिर आगे — मैं ज्यादा देर नहीं रुकता/रुकती",
          "आत्म-आलोचना — वही सोचता/सोचती रहता/रहती हूं कि क्या करना चाहिए था"
        ]
      },
      {
        text: "एक महत्वपूर्ण निर्णय में — पहली जागरूकता से अंतिम चुनाव तक — आप कितना समय लेते/लेती हैं?",
        tags: ["deliberate", "impulsive", "deliberate", "avoidant"],
        options: [
          "जरूरत से कहीं अधिक — मैं धीमा/धीमी हूं और यह जानता/जानती हूं",
          "जल्दी — पहली मजबूत भावना पर भरोसा करता/करती हूं, बस इतना काफी है",
          "जितनी जरूरत हो — खुद को गति देता/देती हूं और प्रक्रिया आमतौर पर सही समय पर पहुंचती है",
          "कभी-कभी अनिश्चित काल तक — कभी-कभी अंतिम निर्णय पर पहुंचता/पहुंचती ही नहीं"
        ]
      },
      {
        text: "लगभग तैयार निर्णय को अक्सर क्या डगमगाता है?",
        tags: ["deliberate", "deliberate", "impulsive", "avoidant"],
        options: [
          "अंतिम क्षण में उठने वाला संदेह — क्या होगा अगर गलत हुआ?",
          "नई जानकारी जिसे अंतिम निर्णय से पहले विचार करना चाहता/चाहती हूं",
          "एक भावना — उत्साह या भय पूरा हिसाब बदल देता है",
          "किसी की चिंता — अगर कोई आशंका जताए, मैं फिर से अनिश्चितता में आ जाता/जाती हूं"
        ]
      },
      {
        text: "उस संस्करण की कल्पना करें जो शांत, स्पष्ट और स्वतंत्र होकर निर्णय लेता/लेती है — आप क्या नोटिस करते/करती हैं?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "यह संस्करण मेरे पास है — हमेशा नहीं, पर उससे अधिक जितना मैं स्वीकार करता/करती हूं",
          "मैं पहले से यही हूं — खुद पर भरोसा करता/करती हूं और उसी से चलता/चलती हूं",
          "यह दूर लगता है — मुझे नहीं लगता मैंने कभी उस जगह से वास्तव में निर्णय लिया हो",
          "यह सुंदर और अपरिचित लगता है — एक ऐसा होना जो चाहा है, पर अभी तक जिया नहीं"
        ]
      },
      {
        text: "अभी कौन सा वाक्य सबसे ईमानदारी से उतरता है?",
        tags: ["deliberate", "impulsive", "avoidant", "avoidant"],
        options: [
          "मैं निर्णयों को गंभीरता से लेता/लेती हूं — शायद बहुत — पर आमतौर पर रास्ता निकाल लेता/लेती हूं",
          "मैं तेज चलता/चलती हूं और खुद पर भरोसा करता/करती हूं — निर्णय कभी-कभी महंगे होते हैं, पर जमा नहीं रहता",
          "निर्णय लेना मुझे वास्तव में कठिन लगता है — आलस्य से नहीं, बल्कि गलत होने के असली भय से",
          "जो निर्णय मैंने लिए नहीं वे मेरे भीतर जी रहे हैं — और वे लिए हुए निर्णयों से भारी हैं"
        ]
      }
    ]
  },
  staticReflections: {
    deliberate: {
      dominant: 'The Deliberate',
      dominantHi: 'विवेकशील',
      subtitle: 'Decisions made from clarity, not compulsion',
      subtitleHi: 'स्पष्टता से लिए गए निर्णय, मजबूरी से नहीं',
      reflection: "The Gita names your quality of mind: Sattvic buddhi — the intellect that knows what to do and what not to do, what deserves courage and what deserves restraint. You do not rush decisions. You gather, consider, and arrive at your choices with care. This is not weakness or indecision — it is the beginning of wisdom.\n\nThe shadow of this pattern is worth naming honestly. Deliberateness can shade into perfectionism, and perfectionism into paralysis. There are moments when your careful mind circles the same ground too many times, when clarity has arrived but you are still holding the decision up to the light, checking for flaws that are no longer there. The Gita's Sattvic quality is not endless deliberation — it is discernment followed by action. Viveka — the capacity to discriminate clearly — is only fully expressed when it moves.\n\nKrishna's invitation to the Sattvic decision-maker is not to slow down further. It is to trust the clarity you have already found. The habit of over-checking often protects a deeper uncertainty about whether your judgment is trustworthy. It is. The work now is to act from what you know, and to hold the outcome lightly — results belong to the field, not to the decision-maker.",
      reflectionHi: "गीता आपकी मन की गुणवत्ता को नाम देती है: सात्विक बुद्धि — वह बुद्धि जो जानती है क्या करना है और क्या नहीं, किसमें साहस और किसमें संयम। आप निर्णयों में जल्दी नहीं करते/करतीं। आप जुटाते/जुटाती हैं, सोचते/सोचती हैं और सावधानी से निर्णय पर पहुंचते/पहुंचती हैं। यह कमज़ोरी नहीं — यह ज्ञान की शुरुआत है।\n\nइस स्वरूप की छाया को ईमानदारी से नाम देना जरूरी है। विवेकशीलता परिपूर्णतावाद बन सकती है, और परिपूर्णतावाद लकवे में। कभी-कभी स्पष्टता आ चुकी होती है, पर आप निर्णय को अभी भी रोशनी में उठाए हुए हैं, उन खामियों को ढूंढते/ढूंढती हैं जो अब हैं नहीं। गीता की सात्विक गुणवत्ता अंतहीन विचार-विमर्श नहीं है — यह विवेक के बाद कर्म है।\n\nकृष्ण का निमंत्रण सात्विक निर्णयकर्ता को और धीमे होने का नहीं है। यह है: उस स्पष्टता पर भरोसा करो जो पहले से मिल चुकी है। परिणाम क्षेत्र का है, निर्णयकर्ता का नहीं।",
      shloka: 'pravrttim ca nivrttim ca karyakarye bhayabhaye / bandham moksam ca ya vetti buddhih sa partha sattviki',
      shlokaHi: 'प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये। बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी॥',
      shlokaRef: 'BG 18.30',
      shlokaMeaning: 'The Sattvic intellect knows what to do and what not to do, what to fear and what not to fear, what binds and what frees.',
      shlokaMeaningHi: 'हे पार्थ, जो बुद्धि प्रवृत्ति और निवृत्ति को, कर्तव्य और अकर्तव्य को, भय और अभय को, बंधन और मोक्ष को जानती है — वह सात्विकी बुद्धि है।'
    },
    impulsive: {
      dominant: 'The Impulsive',
      dominantHi: 'आवेगशील',
      subtitle: 'Decisions made from energy, fire, and momentum',
      subtitleHi: 'ऊर्जा, अग्नि और गति से लिए गए निर्णय',
      reflection: "The Gita names your quality of mind: Rajasic buddhi — the intellect that moves by desire, momentum, and the fire of engagement. You decide with energy. You feel the pull of what you want and you move toward it without waiting for the permission that others seem to need. This is not recklessness — it is a form of courage that the avoidant person does not have.\n\nThe shadow of this pattern is worth examining without judgment. Rajasic decisiveness confuses what is wanted right now with what is truly needed. It mistakes excitement for discernment, and momentum for wisdom. Regret is familiar to you — not because you are careless, but because you are honest enough to know when the decision was made from want rather than clarity. The cost is real. But so is what you gain: you move. You act. You try things that the deliberate person is still considering.\n\nKrishna's invitation to the Rajasic decision-maker is not to suppress the fire — that fire is the source of your courage and your aliveness. It is to pause, briefly, before the leap. Not to doubt yourself, but to ask: is this truly what I see, or what I want to see? That single moment of honest inquiry, inserted before action, is the difference between Rajasic reactivity and genuine discernment.",
      reflectionHi: "गीता आपकी मन की गुणवत्ता को नाम देती है: राजसी बुद्धि — वह बुद्धि जो इच्छा, गति और उत्साह की अग्नि से चलती है। आप ऊर्जा के साथ निर्णय लेते/लेती हैं। आप जो चाहते/चाहती हैं उसकी ओर बिना उस अनुमति के बढ़ते/बढ़ती हैं जिसका दूसरे इंतजार करते हैं। यह अविवेक नहीं — यह साहस का एक रूप है जो परिहारी व्यक्ति के पास नहीं है।\n\nइस स्वरूप की छाया को बिना निर्णय के देखना जरूरी है। राजसी निर्णायकता अभी क्या चाहिए को वास्तव में क्या आवश्यक है से भ्रमित कर देती है। उत्साह को विवेक और गति को ज्ञान मान लेती है। पछतावा आपका परिचित है — लापरवाही से नहीं, बल्कि इसलिए कि आप इतने ईमानदार/ईमानदार हैं कि जानते/जानती हैं जब निर्णय इच्छा से लिया, स्पष्टता से नहीं।\n\nकृष्ण का निमंत्रण राजसी निर्णयकर्ता को आग बुझाने का नहीं है। यह है: छलांग से पहले, बस एक पल रुको। पूछो: क्या यह वाकई वैसा है, या मैं वैसा देखना चाहता/चाहती हूं? यही एक क्षण राजसी आवेग और सच्चे विवेक के बीच का अंतर है।",
      shloka: 'yaya dharmamadharmam ca karyam cakaryam eva ca / ayathavat prajanati buddhih sa partha rajasi',
      shlokaHi: 'यया धर्ममधर्मं च कार्यं चाकार्यमेव च। अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी॥',
      shlokaRef: 'BG 18.31',
      shlokaMeaning: 'The Rajasic intellect confuses duty with non-duty, and does not see things as they truly are.',
      shlokaMeaningHi: 'हे पार्थ, जो बुद्धि धर्म और अधर्म को, कर्तव्य और अकर्तव्य को यथावत नहीं जानती — वह राजसी बुद्धि है।'
    },
    avoidant: {
      dominant: 'The Avoidant',
      dominantHi: 'परिहारी',
      subtitle: 'Decisions deferred, delayed, or handed to others',
      subtitleHi: 'टाले गए, विलंबित, या दूसरों को सौंपे गए निर्णय',
      reflection: "The Gita names your quality of mind: Tamasic buddhi — the intellect covered in heaviness, where clarity is obscured and choices feel dangerous before they are even examined. You do not delay decisions because you are lazy or indifferent. You delay them because they feel costly in a way you cannot fully articulate — as if the act of choosing might reveal something you would rather not know, or commit you to a path you are not sure you can sustain.\n\nThere is something worth protecting in this pattern, and it deserves to be named without shame. The avoidant person is often protecting a vulnerability that is real — a past decision that went badly, a relationship in which their choices were not honoured, a deep uncertainty about whether their judgment can be trusted. The reluctance to decide is not weakness — it is the scar tissue of risk. But scar tissue, when thick enough, prevents not only pain but also movement.\n\nKrishna's invitation to the Tamasic decision-maker is gentle and firm at once: arise. Not into recklessness, but into engagement. The unlived decision does not disappear — it accumulates. It becomes the weight you carry in your body, the unease you feel in the quiet, the life that is happening around you while you wait for certainty that cannot come before the choice. The path through is not a perfect decision. It is any honest, considered decision — made from where you stand right now.",
      reflectionHi: "गीता आपकी मन की गुणवत्ता को नाम देती है: तामसी बुद्धि — वह बुद्धि जो भारीपन से ढकी है, जहाँ स्पष्टता धुंधली है और विकल्प परखे जाने से पहले ही खतरनाक लगते हैं। आप निर्णय इसलिए नहीं टालते/टालतीं कि आप आलसी या उदासीन हैं। आप इसलिए टालते/टालतीं हैं क्योंकि वे एक ऐसी कीमत लिए लगते हैं जिसे आप पूरी तरह बयान नहीं कर सकते/सकतीं।\n\nइस स्वरूप में कुछ संरक्षण के योग्य है, और उसे बिना शर्म के नाम देना जरूरी है। परिहारी व्यक्ति अक्सर एक वास्तविक संवेदनशीलता की रक्षा करता/करती है — एक पुराना बुरा निर्णय, एक रिश्ता जहाँ उनके चुनावों का सम्मान नहीं हुआ। निर्णय से झिझक कमज़ोरी नहीं — यह जोखिम का निशान है। पर जब यह निशान बहुत मोटा हो जाए, तो दर्द ही नहीं, गति भी रुक जाती है।\n\nकृष्ण का निमंत्रण तामसी निर्णयकर्ता को एक साथ कोमल और दृढ़ है: उठो। लापरवाही में नहीं, बल्कि संलग्नता में। अनलिया निर्णय गायब नहीं होता — वह जमा होता जाता है। रास्ता परिपूर्ण निर्णय नहीं है। यह कोई भी ईमानदार, विचारशील निर्णय है — जहाँ आप अभी खड़े/खड़ी हैं, वहाँ से लिया गया।",
      shloka: 'adharmam dharmam iti ya manyate tamasavrta / sarvarthan viparitams ca buddhih sa partha tamasi',
      shlokaHi: 'अधर्मं धर्ममिति या मन्यते तमसावृता। सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी॥',
      shlokaRef: 'BG 18.32',
      shlokaMeaning: 'The Tamasic intellect, covered in darkness, mistakes wrong for right and sees all things in a distorted way.',
      shlokaMeaningHi: 'हे पार्थ, जो बुद्धि तमस से आवृत होकर अधर्म को धर्म मानती है और सभी अर्थों को विपरीत देखती है — वह तामसी बुद्धि है।'
    }
  }
};
