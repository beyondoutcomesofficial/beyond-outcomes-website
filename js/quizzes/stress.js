// Stress Pattern Quiz — Reactive, Withdrawn, Steady
// Rooted in Bhagavad Gita Chapter 2 — Arjuna's crisis and the Sthitaprajna
window.QUIZ_DATA = {
  id: 'stress',
  meta: {
    en: {
      title: 'What Is Your<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Stress Pattern?</span>',
      shareTitle: 'Stress Pattern',
      chapter: 'Bhagavad Gita · Chapter 2 · The Nature of the Steady Mind',
      intro: 'Arjuna — one of history\'s greatest warriors — collapsed on the battlefield under pressure. What he experienced is the same pattern you may recognise in yourself. This inquiry reveals how your mind responds to stress, and what it is quietly pointing toward.',
      tagPrefix: 'CHITTA · PATTERN',
      categoryNames: { reactive: 'Reactive', withdrawn: 'Withdrawn', steady: 'Steady' }
    },
    hi: {
      title: 'आपका<br><span style="color: var(--bo-gold-deep); font-weight: 500;">तनाव का स्वरूप क्या है?</span>',
      shareTitle: 'तनाव का स्वरूप',
      chapter: 'भगवद्गीता · अध्याय २ · स्थिर मन का स्वभाव',
      intro: 'अर्जुन — इतिहास के महानतम योद्धाओं में से एक — युद्धभूमि पर दबाव में टूट गए। जो उन्होंने अनुभव किया, वही आप भी अपने कठिन क्षणों में पहचान सकते हैं। यह जिज्ञासा बताती है कि आपका मन तनाव में कैसे प्रतिक्रिया करता है।',
      tagPrefix: 'चित्त · स्वरूप',
      categoryNames: { reactive: 'प्रतिक्रियाशील', withdrawn: 'अंतर्मुखी', steady: 'स्थिर' }
    }
  },
  categories: ['reactive', 'withdrawn', 'steady'],
  questions: {
    en: [
      {
        text: "When pressure builds, what does your body do first?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "It tightens — jaw, shoulders, chest feel the weight immediately",
          "I feel numb or disconnected, like watching from a distance",
          "I notice the sensation without immediately reacting to it",
          "I go quiet and want to withdraw from those around me"
        ]
      },
      {
        text: "When facing a high-stakes moment or looming deadline, you tend to:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Push harder, even when already stretched beyond capacity",
          "Delay or avoid — it is easier not to face it yet",
          "Break it into what is within my control and move through it",
          "Become sharp or irritable with people around me"
        ]
      },
      {
        text: "When someone criticises you during a stressful period:",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "I defend myself immediately — often before I have fully heard them",
          "I agree outwardly but carry the weight of it silently",
          "I pause — there may be something worth considering here",
          "I shut down and replay the exchange long afterward"
        ]
      },
      {
        text: "What happens to your sleep when you are under sustained stress?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "My mind runs through scenarios — sleep becomes another battlefield",
          "I sleep too much — it is easier than facing what waits",
          "Sleep is relatively unaffected — rest still comes",
          "I wake in the early hours and cannot return to stillness"
        ]
      },
      {
        text: "When life feels out of control, your first instinct is:",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "Take action — anything to reclaim a sense of agency",
          "Retreat — reduce contact and create distance",
          "Observe — ask honestly what is actually within my reach",
          "Stay still and hope the situation resolves on its own"
        ]
      },
      {
        text: "How do you speak to yourself in difficult periods?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Harshly — 'Why am I not handling this better?'",
          "With doubt — 'I probably don't have what this requires'",
          "With steadiness — 'This is hard, and I can move through it'",
          "With frustration — 'Why does this keep happening to me?'"
        ]
      },
      {
        text: "How do you relate to uncertainty?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "I find it nearly intolerable — I need to resolve it immediately",
          "I avoid thinking about it — the unknown feels too heavy",
          "I allow it — clarity will come when it is ready",
          "I feel a quiet heaviness when I cannot see the path ahead"
        ]
      },
      {
        text: "When you feel overwhelmed, who do you turn to?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "I express it — sometimes more forcefully than intended",
          "No one — I carry it alone",
          "Someone steady — I share, then return to myself",
          "I become unavailable to everyone, including myself"
        ]
      },
      {
        text: "What does stress feel like in your mind?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Racing — rapid thoughts, constant planning, no pause between",
          "A fog — slow and heavy, difficult to think clearly",
          "A heightened awareness I can observe without being consumed",
          "A loop — the same fears playing again and again"
        ]
      },
      {
        text: "After a highly stressful period passes, what do you notice?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "Exhaustion — I burned through reserves I didn't know I had",
          "Relief, but still feeling strangely flat and empty",
          "A sense of having learned something from the difficulty",
          "That I had disappeared from my own life during that time"
        ]
      },
      {
        text: "When your plans fall apart completely:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Frustration rises sharply — I need to regain control",
          "Defeat settles in — what is the point of trying again?",
          "I adjust — plans are not fixed, and neither am I",
          "Anger surfaces, sometimes directed at others nearby"
        ]
      },
      {
        text: "Under stress, how do you show up in your relationships?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "I become demanding or short — I know it, but can't always stop it",
          "I pull away and become unavailable without warning",
          "I remain present, though I may need more quiet time",
          "I go through the motions — disconnected from real contact"
        ]
      },
      {
        text: "The story you most often tell yourself in hard times is:",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "'If I just push harder, I can fix this'",
          "'I do not have what it takes for this'",
          "'This difficulty is also a teacher'",
          "'Things will not truly change — not for me'"
        ]
      },
      {
        text: "How does sustained pressure affect your energy?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Erratic — intense bursts followed by crashes",
          "Low and flat — difficult to find motivation",
          "Reduced but steady — I can still pace myself",
          "Wired and depleted at once — tense and tired together"
        ]
      },
      {
        text: "Which most honestly names your current relationship with stress?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "I fight it — and sometimes the fight becomes the problem",
          "I avoid it — and it quietly takes up more space",
          "I meet it — not easily, but without losing myself",
          "I have lost touch with what calm even feels like"
        ]
      },
      {
        text: "When you make a mistake that affects someone else, what happens inside?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "Defensiveness rises first — guilt follows only if I slow down",
          "I acknowledge it, apologise, and focus on what can be repaired",
          "I replay it for a long time — the shame is hard to release",
          "I treat myself as I would a friend — honest but not cruel"
        ]
      },
      {
        text: "Before entering a situation you know will be difficult, you:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "Over-prepare — I need to control as many variables as possible",
          "Hope it becomes easier on its own before you have to face it",
          "Acknowledge it will be hard and prepare your inner state",
          "Run through worst-case scenarios on repeat"
        ]
      },
      {
        text: "What genuinely restores you after a period of intense pressure?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "Achieving something — productivity restores my sense of order",
          "Stillness — a walk, silence, something that asks nothing of me",
          "Complete isolation — unreachable, no responsibilities",
          "Meaningful connection — sharing what happened and being truly heard"
        ]
      },
      {
        text: "When you observe yourself under stress, what do you most often notice?",
        tags: ["reactive", "steady", "withdrawn", "reactive"],
        options: [
          "I become someone I don't fully recognise",
          "I can witness it with some distance — watching the weather without becoming it",
          "I feel stuck — unable to act or think clearly",
          "I am fully inside the storm — there is no observer, only the reaction"
        ]
      },
      {
        text: "How does stress affect your ability to make decisions?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "I decide too fast — action feels better than uncertainty",
          "With deliberateness — I try to slow down before choosing",
          "I freeze — options feel impossible to weigh",
          "I pause and ask what I actually know to be true before I move"
        ]
      },
      {
        text: "When the stress involves someone you love or deeply care about:",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "My reaction intensifies — love amplifies everything",
          "I hold it more steadily — care brings out my clearer self",
          "I go further inward — I don't want to burden them",
          "I feel more lost — I don't know how to be both present and in pain"
        ]
      },
      {
        text: "When you think about the future during a difficult period:",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "I map every outcome — obsessively trying to prepare",
          "I stay close to the present — the future will reveal itself when it does",
          "It feels heavy and threatening — the unknown weighs on me",
          "I avoid thinking about it — it feels too large to hold"
        ]
      },
      {
        text: "How does your stress tend to end?",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "When I fix or resolve the situation — not before",
          "It dissolves gradually as I move through it and integrate what it taught me",
          "It doesn't really end — it shifts quietly into the next difficulty",
          "When I have had enough time alone to recover from it"
        ]
      },
      {
        text: "What does stillness feel like when you are under pressure?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "Dangerous — like falling behind or losing control",
          "Necessary — it is where I reconnect with what I actually know",
          "Heavy and uncomfortable — not restful, just stuck",
          "Rare but precious — I am learning to find it deliberately"
        ]
      },
      {
        text: "Which sentence lands most honestly right now?",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "I know I react too quickly — but in the moment I cannot seem to stop",
          "I am learning to meet difficulty without losing myself inside it",
          "I often don't know what I am truly feeling until much later",
          "I carry far more than I show — and it is getting heavy"
        ]
      }
    ],
    hi: [
      {
        text: "जब दबाव बढ़ता है, तो आपका शरीर सबसे पहले क्या करता है?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "कसाव आता है — जबड़ा, कंधे, सीना तुरंत महसूस करते हैं",
          "सुन्नता या अलगाव का अहसास होता है",
          "मैं संवेदना को नोटिस करता/करती हूं, तुरंत प्रतिक्रिया नहीं करता/करती",
          "चुप हो जाता/जाती हूं और अकेले रहना चाहता/चाहती हूं"
        ]
      },
      {
        text: "जब कोई बड़ा क्षण या समय-सीमा सामने हो, तो आप:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "और अधिक धकेलता/धकेलती हूं, चाहे थकान हो",
          "टालता/टालती हूं — अभी सामना करना कठिन लगता है",
          "नियंत्रण में जो है उसे पहचानकर आगे बढ़ता/बढ़ती हूं",
          "आसपास के लोगों से चिड़चिड़ा/चिड़चिड़ी हो जाता/जाती हूं"
        ]
      },
      {
        text: "जब कोई तनावपूर्ण समय में आलोचना करे:",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "तुरंत बचाव करता/करती हूं — पूरी बात सुने बिना भी",
          "बाहर से मान लेता/लेती हूं, पर भीतर बोझ उठाता/उठाती हूं",
          "रुककर सोचता/सोचती हूं — शायद कुछ सच्चाई हो",
          "बंद हो जाता/जाती हूं और बाद में वही दोहराता/दोहराती रहता/रहती हूं"
        ]
      },
      {
        text: "लगातार तनाव में नींद कैसी होती है?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "मन परिदृश्य चलाता रहता है — नींद भी एक युद्धभूमि बन जाती है",
          "बहुत सोता/सोती हूं — इंतजार से बचने का यही तरीका है",
          "नींद अपेक्षाकृत ठीक रहती है",
          "तड़के उठ जाता/जाती हूं और वापस नींद नहीं आती"
        ]
      },
      {
        text: "जब जीवन अनियंत्रित लगे, पहली प्रवृत्ति क्या है?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "कुछ करो — नियंत्रण वापस पाने के लिए कुछ भी",
          "पीछे हटो — संपर्क कम करो",
          "देखो — वास्तव में क्या मेरे नियंत्रण में है",
          "रुको और उम्मीद रखो कि स्थिति खुद सुलझेगी"
        ]
      },
      {
        text: "कठिन समय में आप खुद से कैसे बात करते/करती हैं?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "कड़ाई से — 'मैं इसे बेहतर क्यों नहीं संभाल रहा/रही?'",
          "संशय से — 'शायद मुझमें यह क्षमता नहीं है'",
          "स्थिरता से — 'यह कठिन है, और मैं इसे पार कर सकता/सकती हूं'",
          "खीझ से — 'यह बार-बार मेरे साथ ही क्यों होता है?'"
        ]
      },
      {
        text: "अनिश्चितता से आप कैसे संबंधित हैं?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "असहनीय लगती है — तुरंत सुलझाना जरूरी है",
          "सोचने से बचता/बचती हूं — अज्ञात बोझिल लगता है",
          "स्वीकार करता/करती हूं — स्पष्टता आएगी जब आएगी",
          "आगे का रास्ता न दिखे तो भारीपन छा जाता है"
        ]
      },
      {
        text: "जब अभिभूत महसूस हो, किसकी ओर मुड़ते/मुड़ती हैं?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "व्यक्त करता/करती हूं — कभी-कभी जरूरत से ज्यादा तीव्रता से",
          "किसी के पास नहीं — अकेले उठाता/उठाती हूं",
          "किसी स्थिर व्यक्ति के पास — साझा करके फिर खुद में लौटता/लौटती हूं",
          "सबके लिए अनुपलब्ध हो जाता/जाती हूं"
        ]
      },
      {
        text: "तनाव में मन कैसा महसूस होता है?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "दौड़ता हुआ — तेज विचार, निरंतर योजना, कोई विराम नहीं",
          "कोहरे जैसा — धीमा और भारी",
          "एक तीव्र जागरूकता जिसे मैं देख सकता/सकती हूं",
          "एक लूप — वही डर बार-बार"
        ]
      },
      {
        text: "तनावपूर्ण दौर बीतने पर क्या महसूस होता है?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "थकान — भंडार खाली हो गए जो थे ही नहीं",
          "राहत, पर अजीब सी सपाटता",
          "कुछ सीखा — कठिनाई भी शिक्षक थी",
          "एहसास कि उस दौरान अपने जीवन से गायब था/थी"
        ]
      },
      {
        text: "जब योजनाएं पूरी तरह बिखर जाएं:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "तेज खीझ — नियंत्रण वापस चाहिए",
          "हार — फिर कोशिश का क्या फायदा?",
          "अनुकूलन — योजनाएं बदलती हैं, मैं भी बदल सकता/सकती हूं",
          "क्रोध — कभी-कभी पास के लोगों पर"
        ]
      },
      {
        text: "तनाव में रिश्तों में कैसे दिखते/दिखती हैं?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "मांगलु या रूखा/रूखी — जानता/जानती हूं, पर रोक नहीं पाता/पाती",
          "बिना बताए दूर हो जाता/जाती हूं",
          "उपस्थित रहता/रहती हूं, पर कुछ शांति की जरूरत होती है",
          "दिखावटी उपस्थिति — असल संपर्क नहीं"
        ]
      },
      {
        text: "कठिन समय में खुद से सबसे अधिक कौन सी कहानी कहते/कहती हैं?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "'और धक्का मारूं तो ठीक कर सकता/सकती हूं'",
          "'मुझमें यह क्षमता नहीं है'",
          "'यह कठिनाई भी शिक्षक है'",
          "'मेरे लिए तो कुछ नहीं बदलेगा'"
        ]
      },
      {
        text: "लगातार दबाव ऊर्जा को कैसे प्रभावित करता है?",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "उतार-चढ़ाव — तीव्र उछाल, फिर गिरावट",
          "कम और सपाट — प्रेरणा ढूंढना मुश्किल",
          "कम पर स्थिर — गति बनाए रख सकता/सकती हूं",
          "तनावग्रस्त और थका — एकसाथ"
        ]
      },
      {
        text: "तनाव से आपके मौजूदा रिश्ते को सबसे ईमानदारी से कौन सा नाम देता है?",
        tags: ["reactive", "withdrawn", "steady", "withdrawn"],
        options: [
          "मैं लड़ता/लड़ती हूं — और कभी-कभी लड़ाई ही समस्या बन जाती है",
          "मैं टालता/टालती हूं — और वह चुपके से जगह लेता जाता है",
          "मैं सामना करता/करती हूं — आसानी से नहीं, पर खुद को खोए बिना",
          "शांति क्या होती है, यह भूल चुका/चुकी हूं"
        ]
      },
      {
        text: "जब आपकी गलती किसी और को प्रभावित करती है, तो भीतर क्या होता है?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "पहले बचाव उठता है — धीमा होने पर ही अपराध-बोध आता है",
          "स्वीकार करता/करती हूं, माफी मांगता/मांगती हूं, सुधार पर ध्यान देता/देती हूं",
          "लंबे समय तक दोहराता/दोहराती रहता/रहती हूं — शर्म आसानी से नहीं जाती",
          "अपने साथ वैसा व्यवहार करता/करती हूं जैसा एक मित्र के साथ — ईमानदार पर कठोर नहीं"
        ]
      },
      {
        text: "किसी कठिन स्थिति में जाने से पहले आप:",
        tags: ["reactive", "withdrawn", "steady", "reactive"],
        options: [
          "अत्यधिक तैयारी करता/करती हूं — अधिकतम नियंत्रण चाहिए",
          "उम्मीद करता/करती हूं कि सामना करने से पहले यह आसान हो जाए",
          "स्वीकार करता/करती हूं कि कठिन होगा और अपनी आंतरिक स्थिति तैयार करता/करती हूं",
          "बार-बार बुरे परिदृश्य दोहराता/दोहराती रहता/रहती हूं"
        ]
      },
      {
        text: "तीव्र दबाव के बाद आपको वास्तव में क्या पुनर्स्थापित करता है?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "कुछ हासिल करना — उत्पादकता व्यवस्था की भावना लौटाती है",
          "स्थिरता — कोई सैर, मौन, कुछ जो मुझसे कुछ नहीं मांगता",
          "पूर्ण अलगाव — अनुपलब्ध, कोई जिम्मेदारी नहीं",
          "सार्थक संवाद — जो हुआ उसे साझा करना और सुना जाना"
        ]
      },
      {
        text: "जब आप तनाव में खुद को देखते/देखती हैं, तो सबसे अधिक क्या नोटिस करते/करती हैं?",
        tags: ["reactive", "steady", "withdrawn", "reactive"],
        options: [
          "मैं कोई ऐसा बन जाता/जाती हूं जिसे मैं पूरी तरह नहीं पहचानता/पहचानती",
          "कुछ दूरी से देख सकता/सकती हूं — मौसम को देखना, उसमें खोना नहीं",
          "अटका/अटकी हुआ/हुई महसूस करता/करती हूं — सोचना या करना मुश्किल",
          "तूफान के बीच हूं — कोई साक्षी नहीं, केवल प्रतिक्रिया"
        ]
      },
      {
        text: "तनाव आपकी निर्णय लेने की क्षमता को कैसे प्रभावित करता है?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "बहुत जल्दी निर्णय लेता/लेती हूं — अनिश्चितता से कर्म बेहतर लगता है",
          "सोच-समझकर — चुनने से पहले धीमा होने की कोशिश करता/करती हूं",
          "जम जाता/जाती हूं — विकल्प असंभव लगते हैं",
          "रुककर पूछता/पूछती हूं: मैं वास्तव में क्या जानता/जानती हूं?"
        ]
      },
      {
        text: "जब तनाव किसी प्रिय व्यक्ति से जुड़ा हो:",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "प्रतिक्रिया और तीव्र होती है — प्रेम सब कुछ बढ़ा देता है",
          "अधिक स्थिरता से धरता/धरती हूं — देखभाल मेरा स्पष्ट स्वरूप लाती है",
          "और भीतर चला/चली जाता/जाती हूं — उन्हें बोझ नहीं बनाना",
          "और अधिक खोया/खोई महसूस करता/करती हूं — उपस्थित और दर्द में एक साथ नहीं रह पाता/पाती"
        ]
      },
      {
        text: "कठिन दौर में भविष्य के बारे में सोचते/सोचती हैं तो:",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "हर संभावना का नक्शा बनाता/बनाती हूं — जुनूनी तैयारी",
          "वर्तमान के करीब रहता/रहती हूं — भविष्य अपने समय पर आएगा",
          "भारीपन महसूस होता है — अज्ञात भयावह लगता है",
          "सोचने से बचता/बचती हूं — बहुत बड़ा लगता है"
        ]
      },
      {
        text: "आपका तनाव आमतौर पर कैसे समाप्त होता है?",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "जब स्थिति ठीक या हल हो जाए — अन्यथा नहीं",
          "धीरे-धीरे घुलता है जैसे-जैसे मैं इससे गुजरता/गुजरती और सीखता/सीखती हूं",
          "वास्तव में खत्म नहीं होता — अगली कठिनाई में बदल जाता है",
          "जब अकेले रहकर पर्याप्त समय मिल जाए"
        ]
      },
      {
        text: "दबाव में स्थिरता (stillness) कैसी लगती है?",
        tags: ["reactive", "steady", "withdrawn", "steady"],
        options: [
          "खतरनाक — जैसे पिछड़ रहा/रही हूं या नियंत्रण खो रहा/रही हूं",
          "जरूरी — यहीं मैं वापस जानता/जानती हूं कि मुझे वास्तव में क्या पता है",
          "भारी और असहज — विश्राम नहीं, बस जड़ता",
          "दुर्लभ पर मूल्यवान — मैं इसे जानबूझकर खोजना सीख रहा/रही हूं"
        ]
      },
      {
        text: "अभी कौन सा वाक्य सबसे ईमानदारी से उतरता है?",
        tags: ["reactive", "steady", "withdrawn", "withdrawn"],
        options: [
          "मैं जानता/जानती हूं कि बहुत जल्दी प्रतिक्रिया करता/करती हूं — पर उस पल रोक नहीं पाता/पाती",
          "मैं कठिनाई का सामना खुद को खोए बिना करना सीख रहा/रही हूं",
          "मुझे बाद में पता चलता है कि मैं वास्तव में क्या महसूस कर रहा/रही था/थी",
          "मैं जितना दिखाता/दिखाती हूं उससे कहीं अधिक उठाता/उठाती हूं — और यह भारी होता जा रहा है"
        ]
      }
    ]
  },
  staticReflections: {
    reactive: {
      dominant: 'The Fighter',
      dominantHi: 'योद्धा',
      subtitle: 'Stress that ignites and pushes outward',
      subtitleHi: 'तनाव जो बाहर की ओर धकेलता है',
      reflection: "Arjuna's first response on the battlefield was to reach for his bow. When pressure arrives, you reach for something too — action, control, confrontation. This is not weakness. It is the energy of someone who cares deeply, who refuses to be helpless, who would rather burn than go still.\n\nThe shadow of this pattern is that the fire meant to protect becomes the thing that harms. Words sharpen before wisdom arrives. Decisions accelerate past clarity. The body runs hot long after the danger has passed — and the people around you feel the heat they didn't cause.\n\nKrishna's counsel to Arjuna is not 'calm down.' It is: know what you are truly fighting for. When you can answer that clearly, the energy finds its right target. The pattern does not disappear — it becomes precise. That precision is your next work.",
      reflectionHi: "अर्जुन की पहली प्रतिक्रिया युद्धभूमि पर धनुष उठाना था। जब दबाव आता है, आप भी कुछ उठाते/उठाती हैं — कर्म, नियंत्रण, टकराव। यह कमज़ोरी नहीं है। यह उस व्यक्ति की ऊर्जा है जो गहराई से परवाह करता/करती है।\n\nइस स्वरूप की छाया यह है कि रक्षा के लिए जलाई गई आग कभी-कभी वही जला देती है जिसे बचाना था। शब्द तीखे हो जाते हैं, निर्णय जल्दबाजी में लिए जाते हैं।\n\nकृष्ण का उपदेश अर्जुन को 'शांत हो जाओ' नहीं था। वह था: जानो, तुम वास्तव में किसके लिए लड़ रहे हो। जब यह स्पष्ट हो जाएगा, ऊर्जा अपना सही लक्ष्य खोज लेगी।",
      shloka: 'dhyayato vishayan pumsah sangas teshu upajayate / sangat sanjayate kamah kamat krodhabhijayate',
      shlokaHi: 'ध्यायतो विषयान् पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
      shlokaRef: 'BG 2.62',
      shlokaMeaning: 'From dwelling on objects comes attachment; from attachment arises desire; from desire, anger ignites.',
      shlokaMeaningHi: 'विषयों के चिंतन से आसक्ति, आसक्ति से काम और काम से क्रोध उत्पन्न होता है।'
    },
    withdrawn: {
      dominant: 'The Retreater',
      dominantHi: 'अंतर्मुखी',
      subtitle: 'Stress that turns inward and goes quiet',
      subtitleHi: 'तनाव जो भीतर मुड़ता और चुप हो जाता है',
      reflection: "When pressure became unbearable, Arjuna sat down. He put his bow aside and turned away from the battlefield. This is not cowardice — it is a pattern that many of the most sensitive and deeply-feeling people know intimately. When the weight becomes too much, you disappear before it can find you.\n\nThere is something right in this impulse. Rest is real. Withdrawal can be wisdom. Not every situation requires engagement. But when retreat becomes the primary response rather than a chosen pause, the unaddressed weight does not dissolve — it grows heavier in the silence.\n\nWhat the Gita offers is not a push back into the fire. It is a question held gently: what is the thing you are retreating from — and is it as threatening as it feels? Often the pattern of withdrawal is older than the current situation. It was learned somewhere, to protect something. Naming it is the first step through it.",
      reflectionHi: "जब दबाव असहनीय हो गया, अर्जुन बैठ गए। उन्होंने धनुष रख दिया। यह कायरता नहीं है — यह एक परिचित स्वरूप है जो बहुत संवेदनशील लोग जानते हैं।\n\nइस प्रवृत्ति में कुछ सच्चाई भी है। विश्राम जरूरी है। पर जब पीछे हटना मुख्य प्रतिक्रिया बन जाए, तो अनसुलझा बोझ मौन में और भारी होता जाता है।\n\nगीता आग में वापस धकेलने की बात नहीं करती। वह धीरे से पूछती है: जिससे पीछे हट रहे हो, क्या वह उतना ही भयावह है जितना महसूस होता है?",
      shloka: 'klaibyam ma sma gamah partha naitat tvayy upapadyate / kshudram hridaya-daurbalyam tyaktvottishtha parantapa',
      shlokaHi: 'क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परंतप॥',
      shlokaRef: 'BG 2.3',
      shlokaMeaning: 'Do not yield to faint-heartedness — it does not become you. Arise, and burn through what feels impossible.',
      shlokaMeaningHi: 'हे पार्थ, कायरता को मत प्राप्त हो — यह तुम्हें शोभा नहीं देती। हृदय की क्षुद्र दुर्बलता को त्यागकर उठो।'
    },
    steady: {
      dominant: 'The Witness',
      dominantHi: 'साक्षी',
      subtitle: 'Stress met with equanimity and presence',
      subtitleHi: 'तनाव का सामना समभाव और उपस्थिति से',
      reflection: "The Gita describes the Sthitaprajna — the one of steady wisdom — as someone who is not swept away by sorrow, not intoxicated by joy, free from the grip of fear, anger, and attachment. Not because life does not touch them. Because they have learned to be touched without being toppled.\n\nThis is where you are moving. Perhaps not perfectly yet — steadiness is a practice, not an arrival. But your pattern reveals an ability to observe the storm rather than become it, to remain present when others dissolve, to find ground that does not move beneath pressure.\n\nThe invitation at this stage goes deeper than maintaining your calm. Steadiness that stays within the self is equanimity. Steadiness that moves outward — into presence, guidance, a quality of being that others can rest near — becomes something the Gita calls seva: service through who you are, not only what you do. That is the next horizon.",
      reflectionHi: "गीता स्थितप्रज्ञ का वर्णन करती है — वह जो दुख में विचलित नहीं होता, सुख में मग्न नहीं होता, भय, क्रोध और आसक्ति से मुक्त रहता है। इसलिए नहीं कि जीवन उसे छूता नहीं — बल्कि इसलिए कि वह बिना गिरे स्पर्श को झेल सकता है।\n\nआप इसी दिशा में हैं। शायद अभी पूरी तरह नहीं — स्थिरता एक अभ्यास है, कोई मंजिल नहीं। पर आपका स्वरूप दिखाता है कि आप तूफान को देख सकते/सकती हैं, उसमें खो नहीं जाते/जातीं।\n\nइस चरण में निमंत्रण और गहरा है। जो स्थिरता भीतर रहती है वह समभाव है। जो बाहर बहती है — उपस्थिति, मार्गदर्शन, एक ऐसा होना जिसके पास दूसरे विश्राम पा सकें — वही सेवा है।",
      shloka: 'duhkhesv anudvigna-manah sukhesu vigata-sprhah / vita-raga-bhaya-krodhah sthita-dhir munir ucyate',
      shlokaHi: 'दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥',
      shlokaRef: 'BG 2.56',
      shlokaMeaning: 'Undisturbed in sorrow, free from craving in joy, beyond attachment, fear and anger — such a sage is called steady in wisdom.',
      shlokaMeaningHi: 'जो दुख में उद्विग्न नहीं होता, सुख में स्पृहारहित है, जो राग, भय और क्रोध से मुक्त है — वह स्थितप्रज्ञ मुनि कहलाता है।'
    }
  }
};
