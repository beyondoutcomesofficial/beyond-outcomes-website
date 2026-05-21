// Limiting Beliefs Quiz — Self Doubt, World View, Possibility
// Rooted in Bhagavad Gita Chapter 1 — Arjuna's collapse as the original field of limiting belief
window.QUIZ_DATA = {
  id: 'belief',
  meta: {
    en: {
      title: 'What Belief Is<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Holding You Back?</span>',
      shareTitle: 'Limiting Belief Pattern',
      chapter: 'Bhagavad Gita · Chapter 1 · The Battlefield of Belief',
      intro: 'Arjuna was not physically stopped on the battlefield. He was stopped by what he believed — about himself, about others, about what was possible. Every limiting pattern has a belief underneath it. This inquiry reveals the category of belief most actively shaping your life.',
      tagPrefix: 'BELIEF · PATTERN',
      categoryNames: { self_doubt: 'Self Doubt', world_view: 'World View', possibility: 'Possibility' }
    },
    hi: {
      title: 'कौन सी मान्यता आपको<br><span style="color: var(--bo-gold-deep); font-weight: 500;">पीछे खींच रही है?</span>',
      shareTitle: 'सीमित मान्यता का स्वरूप',
      chapter: 'भगवद्गीता · अध्याय १ · विश्वास का युद्धक्षेत्र',
      intro: 'अर्जुन को युद्धभूमि पर किसी शत्रु ने नहीं रोका। उन्हें उनकी अपनी मान्यताओं ने रोका — अपने बारे में, दूसरों के बारे में, और जो संभव है उसके बारे में। हर सीमित स्वरूप के नीचे एक मान्यता होती है। यह जिज्ञासा उस मान्यता की श्रेणी को उजागर करती है जो आपके जीवन को सबसे अधिक आकार दे रही है।',
      tagPrefix: 'विश्वास · स्वरूप',
      categoryNames: { self_doubt: 'आत्म-संशय', world_view: 'जगत-दृष्टि', possibility: 'संभावना' }
    }
  },
  categories: ['self_doubt', 'world_view', 'possibility'],
  questions: {
    en: [
      {
        text: "When you consider something you deeply want but do not yet have, the first thought that arrives is:",
        tags: ["self_doubt", "self_doubt", "world_view", "possibility"],
        options: [
          "I am probably not the kind of person who gets to have that",
          "I want it, but I am not sure I deserve it",
          "The world does not work that way — not for people like me in this environment",
          "Maybe once, but the window has already closed"
        ]
      },
      {
        text: "After a significant failure or setback, how do you explain what happened?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "I look inward first — what does this say about who I am?",
          "The situation was unfair — I was not given what I needed to succeed",
          "People I depended on did not come through",
          "It confirms something I already suspected — this kind of thing just doesn't work out for me"
        ]
      },
      {
        text: "When someone offers you genuine praise or recognition, your interior response is usually:",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "A quiet discomfort — like they are seeing something that isn't really there",
          "Mild suspicion — wondering what they want or what is behind it",
          "Gratitude mixed with uncertainty — do I actually deserve this?",
          "Pleasure followed quickly by the thought that it won't last"
        ]
      },
      {
        text: "When you think about trusting someone new — a partner, a colleague, a mentor — what arises?",
        tags: ["world_view", "self_doubt", "world_view", "possibility"],
        options: [
          "A hesitation — I have been here before, and it did not end well",
          "A wondering about whether I am someone worth trusting in return",
          "An assumption that they will eventually disappoint, even if they don't intend to",
          "A question about whether meaningful connection is actually available to me"
        ]
      },
      {
        text: "When you imagine becoming visible — truly seen by others in your work or life — what do you feel?",
        tags: ["self_doubt", "world_view", "world_view", "self_doubt"],
        options: [
          "Fear — if they see everything, they will find what is wrong with me",
          "Resistance — it is not safe to be seen; exposure invites attack",
          "Anxiety — those who rise too high are brought down",
          "A quiet conviction that I am not quite ready — and perhaps never will be"
        ]
      },
      {
        text: "If you have not made a change you have wanted to make for a long time, what is the most honest explanation?",
        tags: ["self_doubt", "world_view", "possibility", "possibility"],
        options: [
          "I do not trust myself to follow through — my track record speaks for itself",
          "The obstacles are real and external — circumstances have not allowed it",
          "It is simply too late to start now",
          "I have tried before — and the evidence says it does not work for me"
        ]
      },
      {
        text: "When you encounter someone living the life or doing the work you imagine for yourself, what is the honest first response?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "Admiration followed by a quiet sense that I do not have what they have",
          "A wondering about what advantages they were given that I was not",
          "The recognition that they started earlier — a door that is no longer open to me",
          "Something that feels uncomfortably close to unworthiness"
        ]
      },
      {
        text: "How do you relate to asking for help — from a friend, a teacher, a professional?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "Difficulty — asking feels like admitting what I cannot do alone",
          "Reluctance — I have been let down enough times that I prefer to manage myself",
          "Distrust — most help comes with conditions I haven't fully understood yet",
          "A resignation — even if I ask, I am not sure it will make a real difference for me"
        ]
      },
      {
        text: "When you think about your potential — the full scope of what you might be capable of — what is the internal climate?",
        tags: ["self_doubt", "self_doubt", "world_view", "possibility"],
        options: [
          "A ceiling I keep bumping against — something always stops me before I get there",
          "A gap between what I imagine and what I believe I actually am",
          "A sense that the world would not recognise it even if I reached it",
          "A faint and receding horizon — possible in theory, unlikely in practice"
        ]
      },
      {
        text: "When you speak about your goals or dreams to others, what do you hold back — and why?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "The real size of them — in case I fail and they witnessed it",
          "The vulnerability in them — I do not trust how others will respond",
          "The full truth — people generally do not want to see others rise too far",
          "The timeline — because saying it out loud makes it something that can expire"
        ]
      },
      {
        text: "How do you experience the concept of 'deserving' — as in, deserving good things, good outcomes, love, success?",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "It is something I struggle with at the root — deserving feels like something I have to earn continuously",
          "It feels arbitrary — deserving has little to do with what actually happens in this world",
          "I believe I deserve it intellectually, but somewhere deeper I am not certain",
          "I used to believe it more fully — now I am less sure it applies to me the way it once did"
        ]
      },
      {
        text: "When change is required — in a relationship, a career, a belief — what is the predominant feeling beneath the resistance?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "Fear that the change will expose something unflattering about who I am",
          "A sense that I cannot handle what comes after — that I am not built for it",
          "A quiet conviction that things do not actually change in any meaningful way",
          "A protection — it is better to deal with a known difficulty than an unknown one"
        ]
      },
      {
        text: "In your relationship with authority — institutions, systems, organisations — what does experience have you believing?",
        tags: ["world_view", "world_view", "self_doubt", "possibility"],
        options: [
          "That systems are generally not designed for people like me to succeed within them",
          "That those with power use it to protect themselves, not to enable others",
          "That I lack the credentials, connections, or profile to be taken seriously",
          "That even when opportunities exist, they are not as accessible as they appear"
        ]
      },
      {
        text: "When you think about a significant dream or goal you have quietly given up on, what is the story you tell yourself about it?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "The time for it has passed — perhaps it was never realistic to begin with",
          "I was not strong enough, consistent enough, or capable enough to see it through",
          "The world did not cooperate — the conditions were never in my favour",
          "I have made peace with it — though I notice I have not completely let it go"
        ]
      },
      {
        text: "The inner voice that speaks most loudly when you are about to take a risk — what does it most often say?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "'Who do you think you are to attempt this?'",
          "'The system will find a way to make this difficult for you'",
          "'You have left it too late — this window has already closed'",
          "'You are not ready — and you may never be'"
        ]
      },
      {
        text: "When you think about the kind of relationships you want — depth, honesty, real partnership — how likely do they feel?",
        tags: ["world_view", "possibility", "self_doubt", "world_view"],
        options: [
          "Uncommon — people generally do not offer that level of presence or honesty",
          "Available in theory, but not likely for me at this point",
          "Something I wonder whether I am truly capable of sustaining",
          "Something I have stopped expecting — the disappointments have been too consistent"
        ]
      },
      {
        text: "How do you respond when an opportunity arrives that is larger than what you have done before?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "A rush of interest followed quickly by a list of all the ways I am not enough for it",
          "Caution — large opportunities often come with hidden costs I have not seen yet",
          "A quiet deflation — I am not at the right stage of life to pursue something like this",
          "A search for evidence that I deserve to say yes — which I rarely find convincingly"
        ]
      },
      {
        text: "When you consider your health, energy, or physical wellbeing — what belief operates quietly underneath?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "That real change here is not sustainable — I have seen myself revert too many times",
          "That I lack the discipline or self-worth to maintain what I build",
          "That good health is harder to access in the environment I am in",
          "That I am past the age or stage where real physical transformation is available to me"
        ]
      },
      {
        text: "What is your honest relationship with the phrase 'I can figure this out'?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "It does not feel naturally available to me — confidence is something I perform, not feel",
          "I can, but the environment will create obstacles that cancel out what I build",
          "Maybe once — but I have been trying to figure this out for too long",
          "It requires a kind of self-belief I am not sure I possess"
        ]
      },
      {
        text: "When spiritual practice, therapy, or personal growth does not seem to be producing change, what do you conclude?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "That I am not doing it right — there is something I am not getting that others get",
          "That these things work differently for different people — and perhaps not as well for me",
          "That I have missed the moment where it could have worked — too much has calcified",
          "That there is something in me that resists — something fundamentally hard to change"
        ]
      },
      {
        text: "In the domain of career or meaningful work — what has experience led you to believe?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "That the game is not fair — who you know and where you come from matters more than merit",
          "That I am not as talented, driven, or distinctive as the work I want to do requires",
          "That meaningful work was available to me at a certain stage — less so now",
          "That the system rewards a kind of person I am not, and probably cannot become"
        ]
      },
      {
        text: "When someone you trust tells you that you are capable of something you do not yet believe about yourself, what happens?",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "I am moved, but the doubt outlasts the encouragement",
          "I appreciate it, but I suspect they don't fully see what I see about myself",
          "I want to believe it — and yet something deeper does not quite accept it",
          "It feels theoretical — possible for others, but not quite real as my own future"
        ]
      },
      {
        text: "Which sentence most honestly names your relationship with time and what is still possible?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "I feel behind — like others started sooner and the gap is now too wide",
          "I had the ability but did not use it well enough when I had the chance",
          "Time is not the issue — the world does not make space for what I want to build",
          "I am not sure what is genuinely still open to me — and I avoid thinking about it"
        ]
      },
      {
        text: "What does the phrase 'people like me' bring up when you apply it to success, joy, or a life that feels fully alive?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "A quiet awareness that this category of person is not usually the one the world makes room for",
          "A discomfort — like I have defined myself into a smaller space than I intended",
          "A resignation — people like me have a certain ceiling, and I have mostly accepted it",
          "A protectiveness — keeping my expectations modest is how I stay safe from disappointment"
        ]
      },
      {
        text: "Which of these comes closest to the belief that runs most quietly and persistently beneath your daily life?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "Something is fundamentally wrong with me — and I have been working around it for a long time",
          "The world is not arranged for people to genuinely thrive — something always takes it back",
          "What I most want is genuinely available — just not to me, not at this point",
          "I am not enough — not yet, not fully — and I am not sure what it would take to become so"
        ]
      }
    ],
    hi: [
      {
        text: "जब आप किसी ऐसी चीज़ के बारे में सोचते/सोचती हैं जो आप गहराई से चाहते/चाहती हैं पर अभी तक नहीं मिली, तो पहला विचार क्या आता है?",
        tags: ["self_doubt", "self_doubt", "world_view", "possibility"],
        options: [
          "शायद मैं उस तरह का इंसान नहीं हूं जिसे यह मिलता है",
          "मुझे यह चाहिए, पर मुझे नहीं लगता कि मैं इसके लायक हूं",
          "दुनिया ऐसे काम नहीं करती — खासकर मेरे जैसे लोगों के लिए इस माहौल में",
          "शायद एक बार संभव था, पर वह वक्त निकल गया"
        ]
      },
      {
        text: "किसी बड़ी विफलता या झटके के बाद आप क्या समझाते/समझाती हैं?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "पहले खुद को देखता/देखती हूं — यह मेरे बारे में क्या कहता है?",
          "हालात अनुचित थे — मुझे जो चाहिए था वह नहीं मिला",
          "जिन पर भरोसा किया वे साथ नहीं आए",
          "यह पुष्टि करता है जो मैंने पहले से महसूस किया था — मेरे लिए यह काम नहीं करता"
        ]
      },
      {
        text: "जब कोई आपकी सच्ची प्रशंसा या सराहना करता है, तो भीतर क्या होता है?",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "एक हल्की बेचैनी — जैसे वे कुछ ऐसा देख रहे हैं जो वास्तव में है नहीं",
          "हल्का संदेह — वे क्या चाहते हैं, इसके पीछे क्या है?",
          "कृतज्ञता के साथ अनिश्चितता — क्या मैं वाकई इसके लायक हूं?",
          "खुशी, जिसके बाद जल्दी यह विचार — यह टिकेगा नहीं"
        ]
      },
      {
        text: "जब आप किसी नए व्यक्ति पर — साथी, सहयोगी, गुरु पर — भरोसा करने के बारे में सोचते/सोचती हैं तो क्या उठता है?",
        tags: ["world_view", "self_doubt", "world_view", "possibility"],
        options: [
          "एक हिचकिचाहट — मैं यहां पहले भी था/थी, और अच्छा नहीं रहा",
          "यह सोच कि क्या मैं खुद भरोसे के लायक हूं",
          "यह अनुमान कि वे अंततः निराश करेंगे, चाहे न चाहें",
          "यह प्रश्न कि क्या मेरे लिए सच्चा जुड़ाव वास्तव में संभव है"
        ]
      },
      {
        text: "जब आप कल्पना करते/करती हैं कि आप वास्तव में दिखें — अपने काम या जीवन में — तो क्या महसूस होता है?",
        tags: ["self_doubt", "world_view", "world_view", "self_doubt"],
        options: [
          "डर — अगर सब दिखे तो मेरी खामियां भी दिखेंगी",
          "प्रतिरोध — दिखना सुरक्षित नहीं है; दिखाई देने से आलोचना का खतरा है",
          "चिंता — जो बहुत ऊपर जाते हैं उन्हें नीचे खींचा जाता है",
          "एक शांत विश्वास कि मैं अभी तैयार नहीं — और शायद कभी नहीं होऊंगा/होऊंगी"
        ]
      },
      {
        text: "अगर आपने लंबे समय से वह बदलाव नहीं किया जो आप चाहते/चाहती थे, तो सबसे ईमानदार कारण क्या है?",
        tags: ["self_doubt", "world_view", "possibility", "possibility"],
        options: [
          "मैं खुद पर भरोसा नहीं करता/करती — मेरा पिछला रिकॉर्ड खुद बोलता है",
          "बाधाएं वास्तविक और बाहरी हैं — परिस्थितियों ने इसकी अनुमति नहीं दी",
          "शुरू करने के लिए बहुत देर हो गई है",
          "पहले भी कोशिश की है — और प्रमाण कहता है कि मेरे लिए यह काम नहीं करता"
        ]
      },
      {
        text: "जब आप किसी ऐसे व्यक्ति को देखते/देखती हैं जो वह जीवन जी रहा है जिसकी आप कल्पना करते/करती हैं, तो पहली सच्ची प्रतिक्रिया क्या होती है?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "प्रशंसा, जिसके बाद यह शांत भाव कि मेरे पास वह नहीं है जो उनके पास है",
          "यह सोचना कि उन्हें क्या फायदे मिले जो मुझे नहीं मिले",
          "यह पहचान कि उन्होंने जल्दी शुरू किया — वह दरवाजा अब मेरे लिए बंद है",
          "कुछ जो अयोग्यता जैसा असहज रूप से महसूस होता है"
        ]
      },
      {
        text: "मदद मांगने से — किसी मित्र, शिक्षक, पेशेवर से — आप कैसे संबंधित हैं?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "कठिनाई — मांगना ऐसा लगता है जैसे यह स्वीकारना कि मैं अकेले नहीं कर सकता/सकती",
          "झिझक — पर्याप्त बार निराशा हुई है कि मैं खुद संभालना पसंद करता/करती हूं",
          "अविश्वास — अधिकतर मदद उन शर्तों के साथ आती है जो मैंने पूरी तरह नहीं समझी",
          "एक त्याग — अगर भी मांगूं, तो मुझे नहीं लगता यह मेरे लिए वास्तविक बदलाव लाएगी"
        ]
      },
      {
        text: "जब आप अपनी पूर्ण क्षमता के बारे में सोचते/सोचती हैं — जो आप कर सकते/सकती हैं — भीतर का वातावरण कैसा है?",
        tags: ["self_doubt", "self_doubt", "world_view", "possibility"],
        options: [
          "एक छत जिसमें मैं बार-बार टकराता/टकराती हूं — कुछ हमेशा रोकता है",
          "जो मैं सोचता/सोचती हूं और जो मैं वास्तव में हूं — उनके बीच की खाई",
          "यह भावना कि दुनिया इसे पहचानेगी भी नहीं, भले ही मैं पहुंच जाऊं",
          "एक क्षीण होता क्षितिज — सिद्धांत में संभव, व्यवहार में अनिश्चित"
        ]
      },
      {
        text: "जब आप दूसरों से अपने लक्ष्य या सपने साझा करते/करती हैं, तो क्या छिपाते/छिपाती हैं — और क्यों?",
        tags: ["self_doubt", "world_view", "world_view", "possibility"],
        options: [
          "उनका असली आकार — अगर विफल हुआ/हुई तो वे साक्षी थे",
          "उनकी कोमलता — मुझे भरोसा नहीं कि दूसरे कैसे प्रतिक्रिया देंगे",
          "पूरी सच्चाई — लोग आमतौर पर दूसरों को बहुत आगे जाते नहीं देखना चाहते",
          "समय-सीमा — ज़ोर से कहने से यह कुछ ऐसा बन जाता है जो समाप्त हो सकता है"
        ]
      },
      {
        text: "'लायक होना' की अवधारणा से — अच्छी चीजें, अच्छे परिणाम, प्रेम, सफलता के लायक होना — आप कैसे संबंधित हैं?",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "इससे मैं जड़ में जूझता/जूझती हूं — लायक होना कुछ ऐसा लगता है जो लगातार कमाना पड़ता है",
          "यह मनमाना लगता है — इस दुनिया में जो होता है उसका लायक होने से कम लेना-देना है",
          "बौद्धिक रूप से मानता/मानती हूं, पर कहीं गहरे में पूरी तरह आश्वस्त नहीं हूं",
          "पहले अधिक मानता/मानती था/थी — अब उतना नहीं लगता जितना एक बार लगता था"
        ]
      },
      {
        text: "जब परिवर्तन आवश्यक हो — रिश्ते, करियर, मान्यता में — प्रतिरोध के नीचे मुख्य भावना क्या है?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "डर कि बदलाव मेरे बारे में कुछ असुविधाजनक उजागर करेगा",
          "यह भाव कि मैं बाद में जो आएगा उसे संभाल नहीं सकता/सकती",
          "एक शांत विश्वास कि चीजें वास्तव में किसी सार्थक तरीके से नहीं बदलतीं",
          "एक सुरक्षा — ज्ञात कठिनाई अज्ञात से बेहतर है"
        ]
      },
      {
        text: "संस्थाओं, प्रणालियों, संगठनों के साथ आपके संबंध में — अनुभव ने आपको क्या मानने पर मजबूर किया है?",
        tags: ["world_view", "world_view", "self_doubt", "possibility"],
        options: [
          "कि प्रणालियां आमतौर पर मेरे जैसे लोगों के लिए नहीं बनी हैं",
          "कि जिनके पास शक्ति है वे इसका उपयोग खुद की रक्षा के लिए करते हैं, दूसरों को सक्षम बनाने के लिए नहीं",
          "कि मेरे पास गंभीरता से लिए जाने के लिए जरूरी योग्यता, संपर्क या प्रोफाइल नहीं है",
          "कि अवसर दिखते जितने सुलभ हैं उतने हैं नहीं"
        ]
      },
      {
        text: "जब आप किसी उस महत्वपूर्ण सपने या लक्ष्य के बारे में सोचते/सोचती हैं जिसे आपने चुपचाप छोड़ दिया है, तो क्या कहानी सुनाते/सुनाती हैं?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "उसका समय बीत गया — शायद यह शुरू से ही यथार्थवादी नहीं था",
          "मैं पर्याप्त मजबूत, निरंतर, या सक्षम नहीं था/थी इसे पूरा करने के लिए",
          "दुनिया ने सहयोग नहीं किया — परिस्थितियां कभी मेरे पक्ष में नहीं थीं",
          "मैंने इसके साथ शांति बना ली है — हालांकि मैं देखता/देखती हूं कि इसे पूरी तरह छोड़ा नहीं है"
        ]
      },
      {
        text: "जब आप कोई जोखिम लेने वाले होते/होती हैं, तो भीतरी आवाज़ सबसे अधिक क्या कहती है?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "'तुम कौन होते/होती हो यह करने की कोशिश करने वाले/वाली?'",
          "'प्रणाली इसे तुम्हारे लिए कठिन बनाने का रास्ता निकाल लेगी'",
          "'बहुत देर हो गई है — यह खिड़की पहले ही बंद हो चुकी है'",
          "'तुम तैयार नहीं हो — और शायद कभी नहीं होगे/होगी'"
        ]
      },
      {
        text: "जब आप उस तरह के रिश्तों के बारे में सोचते/सोचती हैं जो आप चाहते/चाहती हैं — गहराई, ईमानदारी, सच्ची साझेदारी — वे कितने संभव लगते हैं?",
        tags: ["world_view", "possibility", "self_doubt", "world_view"],
        options: [
          "असामान्य — लोग आमतौर पर उस स्तर की उपस्थिति या ईमानदारी नहीं देते",
          "सिद्धांत में उपलब्ध, पर इस बिंदु पर मेरे लिए संभव नहीं",
          "कुछ जिसे मैं सोचता/सोचती हूं कि मैं वास्तव में बनाए रख सकता/सकती हूं या नहीं",
          "कुछ जिसकी उम्मीद मैंने छोड़ दी है — निराशाएं बहुत लगातार रही हैं"
        ]
      },
      {
        text: "जब कोई अवसर आता है जो आपने पहले किया है उससे बड़ा हो, तो आप कैसे प्रतिक्रिया देते/देती हैं?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "रुचि का उछाल, जिसके बाद उन सभी तरीकों की सूची जिनमें मैं इसके लिए पर्याप्त नहीं हूं",
          "सावधानी — बड़े अवसर अक्सर छिपी कीमतों के साथ आते हैं जो मैंने अभी नहीं देखी",
          "एक शांत निराशा — मैं जीवन के उस चरण में नहीं हूं जब ऐसी चीज़ पर काम किया जाए",
          "इस बात का प्रमाण खोजना कि मैं हां कहने के लायक हूं — जो मुझे पर्याप्त रूप से मिलता नहीं"
        ]
      },
      {
        text: "अपने स्वास्थ्य, ऊर्जा, या शारीरिक कल्याण के बारे में — नीचे चुपचाप कौन सी मान्यता काम करती है?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "कि यहां वास्तविक बदलाव टिकाऊ नहीं है — मैंने खुद को बहुत बार वापस जाते देखा है",
          "कि मुझमें वह अनुशासन या आत्म-सम्मान नहीं है जो मैं बनाता/बनाती हूं उसे बनाए रखने के लिए",
          "कि मेरे माहौल में अच्छे स्वास्थ्य तक पहुंच कठिन है",
          "कि मैं उस उम्र या अवस्था से आगे हूं जहां वास्तविक शारीरिक परिवर्तन संभव है"
        ]
      },
      {
        text: "'मैं यह सुलझा सकता/सकती हूं' — इस वाक्य से आपका ईमानदार रिश्ता क्या है?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "यह मुझे स्वाभाविक रूप से उपलब्ध नहीं लगता — आत्मविश्वास कुछ ऐसा है जो मैं दिखाता/दिखाती हूं, महसूस नहीं करता/करती",
          "मैं कर सकता/सकती हूं, पर माहौल ऐसी बाधाएं पैदा करेगा जो मेरे बनाए को रद्द कर देंगी",
          "शायद एक बार — पर मैं इसे बहुत लंबे समय से सुलझाने की कोशिश कर रहा/रही हूं",
          "इसके लिए एक तरह के आत्म-विश्वास की जरूरत है जो मुझे नहीं पता मेरे पास है"
        ]
      },
      {
        text: "जब आध्यात्मिक अभ्यास, चिकित्सा, या व्यक्तिगत विकास बदलाव नहीं लाता, तो आप क्या निष्कर्ष निकालते/निकालती हैं?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "कि मैं इसे सही नहीं कर रहा/रही — कुछ ऐसा है जो दूसरे समझते हैं जो मैं नहीं समझता/समझती",
          "कि ये चीजें अलग-अलग लोगों के लिए अलग तरह काम करती हैं — और शायद मेरे लिए कम",
          "कि मैंने वह पल गंवा दिया जब यह काम कर सकता था — बहुत कुछ जम गया है",
          "कि मुझमें कुछ प्रतिरोध है — कुछ बदलना मूलतः कठिन है"
        ]
      },
      {
        text: "करियर या सार्थक काम के क्षेत्र में — अनुभव ने आपको क्या मानने पर ले जाया है?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "खेल निष्पक्ष नहीं है — आप किसे जानते हैं और कहां से हैं, यह प्रतिभा से ज्यादा मायने रखता है",
          "मैं उतना प्रतिभाशाली, प्रेरित, या विशिष्ट नहीं हूं जितना मेरे इच्छित काम की आवश्यकता है",
          "सार्थक काम एक निश्चित चरण में मेरे लिए उपलब्ध था — अब कम",
          "प्रणाली एक ऐसे व्यक्ति को पुरस्कृत करती है जो मैं नहीं हूं और शायद बन नहीं सकता/सकती"
        ]
      },
      {
        text: "जब कोई विश्वसनीय व्यक्ति कहता है कि आप किसी ऐसी चीज़ में सक्षम हैं जो आप खुद नहीं मानते, तो क्या होता है?",
        tags: ["self_doubt", "world_view", "self_doubt", "possibility"],
        options: [
          "मैं प्रभावित होता/होती हूं, पर संदेह उत्साह से अधिक समय तक टिकता है",
          "मैं इसकी सराहना करता/करती हूं, पर सोचता/सोचती हूं कि वे वह नहीं देख पाते जो मैं खुद में देखता/देखती हूं",
          "मैं विश्वास करना चाहता/चाहती हूं — और फिर भी कुछ गहरा इसे पूरी तरह स्वीकार नहीं करता",
          "यह सैद्धांतिक लगता है — दूसरों के लिए संभव, पर मेरे भविष्य के रूप में वास्तविक नहीं"
        ]
      },
      {
        text: "समय और जो अभी भी संभव है उसके साथ आपके रिश्ते को सबसे ईमानदारी से कौन सा वाक्य नाम देता है?",
        tags: ["possibility", "self_doubt", "world_view", "possibility"],
        options: [
          "मुझे लगता है मैं पीछे हूं — जैसे दूसरों ने पहले शुरू किया और अंतर अब बहुत बड़ा है",
          "मेरे पास क्षमता थी पर जब मौका था तब उसका उपयोग नहीं किया",
          "समय समस्या नहीं है — दुनिया जो मैं बनाना चाहता/चाहती हूं उसके लिए जगह नहीं बनाती",
          "मुझे नहीं पता कि मेरे लिए वास्तव में क्या खुला है — और मैं इसके बारे में सोचने से बचता/बचती हूं"
        ]
      },
      {
        text: "'मेरे जैसे लोग' — यह वाक्यांश सफलता, खुशी, या पूरी तरह जीवंत जीवन पर लागू करने पर क्या उठता है?",
        tags: ["world_view", "self_doubt", "possibility", "world_view"],
        options: [
          "एक शांत जागरूकता कि इस श्रेणी के व्यक्ति के लिए दुनिया आमतौर पर जगह नहीं बनाती",
          "एक असुविधा — जैसे मैंने खुद को उससे छोटी जगह में परिभाषित किया जितना मैंने चाहा था",
          "एक त्याग — मेरे जैसे लोगों की एक निश्चित सीमा है, और मैंने इसे काफी हद तक स्वीकार कर लिया है",
          "एक सुरक्षात्मकता — अपेक्षाएं कम रखना निराशा से सुरक्षित रहने का तरीका है"
        ]
      },
      {
        text: "इनमें से कौन सी बात उस मान्यता के सबसे करीब है जो आपके दैनिक जीवन के नीचे सबसे शांत और लगातार बहती है?",
        tags: ["self_doubt", "world_view", "possibility", "self_doubt"],
        options: [
          "मुझमें कुछ मूलतः गलत है — और मैं लंबे समय से उसके इर्द-गिर्द काम कर रहा/रही हूं",
          "दुनिया लोगों को वास्तव में फलने-फूलने देने के लिए नहीं बनी — कुछ हमेशा वापस ले लेता है",
          "जो मैं सबसे अधिक चाहता/चाहती हूं वह वास्तव में उपलब्ध है — बस मेरे लिए नहीं, इस समय नहीं",
          "मैं पर्याप्त नहीं हूं — अभी नहीं, पूरी तरह नहीं — और मुझे नहीं पता कि बनने के लिए क्या लगेगा"
        ]
      }
    ]
  },
  staticReflections: {
    self_doubt: {
      dominant: 'The Inner Critic',
      dominantHi: 'भीतरी आलोचक',
      subtitle: 'Beliefs that live in the gap between who you are and who you think you should be',
      subtitleHi: 'वे मान्यताएं जो आप जो हैं और जो आपको लगता है होना चाहिए — उनके बीच की खाई में रहती हैं',
      reflection: "Arjuna did not doubt his training. He doubted himself. Standing on the battlefield, surrounded by everything he had prepared for, he collapsed — not because the enemy was stronger, but because a voice inside him decided he was not enough for what stood before him. That voice is not new. It likely arrived long before this moment and found ways to make itself sound like truth.\n\nSelf-doubt of this kind does not stay in one area of life. It is not about a specific skill or a specific failure. It is a background conviction — quiet, persistent, and often invisible — that something is fundamentally insufficient about who you are. It shows up as difficulty receiving praise, as overworking to compensate, as shrinking before opportunities, as the strange feeling that even your genuine achievements are somehow fraudulent. It exhausts people. Not because they are not trying, but because they are trying while carrying a weight that others cannot see.\n\nThe Gita's answer to Arjuna's self-doubt is not reassurance. It is reorientation. Krishna does not tell Arjuna he is good enough. He tells him who he actually is — beneath the role, the fear, the story the mind has built around identity. The NLP lens offers the same: a belief is not a fact. It is a conclusion drawn — usually in a moment of pain, usually long ago — and then carried forward as though it were permanent. The work begins the moment you begin to notice the voice. Not to silence it, but to ask: whose is this? And is it actually true?",
      reflectionHi: "अर्जुन को अपने प्रशिक्षण पर संदेह नहीं था। उन्हें खुद पर संदेह था। युद्धभूमि पर खड़े, उस सब से घिरे जिसके लिए उन्होंने तैयारी की थी, वे टूट गए — इसलिए नहीं कि शत्रु अधिक बलवान था, बल्कि इसलिए कि भीतर की एक आवाज़ ने तय कर दिया कि वे इसके लिए पर्याप्त नहीं हैं। यह आवाज़ नई नहीं है। यह इस क्षण से बहुत पहले आई थी।\n\nइस तरह का आत्म-संशय जीवन के एक क्षेत्र में नहीं रहता। यह एक पृष्ठभूमि का विश्वास है — शांत, लगातार — कि आप जो हैं उसमें मूलतः कुछ अपर्याप्त है। यह प्रशंसा स्वीकारने में कठिनाई के रूप में, अवसरों से पहले सिकुड़ने के रूप में, और इस अजीब भावना के रूप में सामने आता है कि आपकी वास्तविक उपलब्धियां भी किसी तरह से धोखाधड़ी हैं।\n\nगीता का उत्तर आश्वासन नहीं है — यह पुनर्अभिविन्यास है। कृष्ण अर्जुन को यह नहीं बताते कि वे पर्याप्त हैं। वे उन्हें बताते हैं कि वे वास्तव में कौन हैं — भूमिका, भय, और मन की बनाई कहानी से परे। NLP भी यही कहता है: एक मान्यता तथ्य नहीं है। काम उस पल शुरू होता है जब आप आवाज़ को नोटिस करना शुरू करते हैं।",
      shloka: 'yaj jnatva na punar moham evam yasyasi pandava / yena bhutany asesani draksyasy atmany atho mayi',
      shlokaHi: 'यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव। येन भूतान्यशेषाणि द्रक्ष्यस्यात्मन्यथो मयि॥',
      shlokaRef: 'BG 4.35',
      shlokaMeaning: 'Knowing this, you will not fall into delusion again — you will see all beings in the Self, and then in Me.',
      shlokaMeaningHi: 'इसे जानकर हे पाण्डव, तुम फिर मोह को प्राप्त नहीं होगे — तुम सब प्राणियों को पहले आत्मा में और फिर मुझमें देखोगे।'
    },
    world_view: {
      dominant: 'The Disillusioned',
      dominantHi: 'मोहभंग',
      subtitle: 'Beliefs about a world that cannot be trusted, a system that does not work, people who will disappoint',
      subtitleHi: 'एक ऐसी दुनिया के बारे में मान्यताएं जिस पर भरोसा नहीं किया जा सकता, एक ऐसी व्यवस्था जो काम नहीं करती',
      reflection: "When Arjuna surveyed the battlefield and saw his teachers, his uncles, his kin arranged against him, he did not see a challenge. He saw a world that had organised itself to destroy what he loved. His belief was not about his own inadequacy — it was about the situation itself. The world had arranged things in a way that made right action impossible. Sound familiar?\n\nLimiting beliefs about the world are often the hardest to see clearly, because they frequently contain real evidence. The system is sometimes unfair. People do sometimes disappoint. Trust is sometimes broken. The beliefs formed around these experiences are not delusions — they are protections, built from genuine wounding. The problem is not that the belief was wrong when it formed. The problem is when it becomes a permanent lens through which every new situation is filtered — when the protection becomes the prison.\n\nThe Gita's most demanding teaching is this: you are the only one who can lift yourself. Not because the world is always fair, but because waiting for the world to change before you move is a form of bondage the world did not impose. Your capacity to respond — to choose your next action regardless of what the environment has done — is the one thing that remains sovereign. This is not naivete about injustice. It is clarity about where your actual freedom lives.",
      reflectionHi: "जब अर्जुन ने युद्धभूमि पर नजर डाली और अपने शिक्षकों, चाचाओं, स्वजनों को अपने विरुद्ध खड़े देखा, उन्होंने एक चुनौती नहीं देखी। उन्होंने एक ऐसी दुनिया देखी जिसने खुद को उसे नष्ट करने के लिए व्यवस्थित किया था जिसे वे प्यार करते थे। परिचित लगता है?\n\nदुनिया के बारे में सीमित मान्यताएं अक्सर सबसे कठिन होती हैं क्योंकि उनमें अक्सर वास्तविक साक्ष्य होते हैं। व्यवस्था कभी-कभी अनुचित है। लोग कभी-कभी निराश करते हैं। इन अनुभवों के इर्द-गिर्द बनी मान्यताएं भ्रम नहीं हैं — वे वास्तविक चोट से बनी सुरक्षा हैं। समस्या यह है कि जब यह सुरक्षा स्थायी लेंस बन जाती है।\n\nगीता की सबसे मांग करने वाली शिक्षा यह है: केवल आप ही अपने आप को उठा सकते हैं। इसलिए नहीं कि दुनिया हमेशा उचित है, बल्कि इसलिए कि दुनिया के बदलने की प्रतीक्षा करना एक बंधन है। आपकी प्रतिक्रिया देने की क्षमता — चाहे माहौल ने कुछ भी किया हो — वह एकमात्र चीज़ है जो आपकी अपनी रहती है।",
      shloka: 'uddhared atmanatmanam natmanam avasadayet / atmaiva hy atmano bandhur atmaiva ripur atmanah',
      shlokaHi: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
      shlokaRef: 'BG 6.5',
      shlokaMeaning: 'Let a person lift themselves by their own self — let them not allow the self to fall. For the self alone is the friend of the self, and the self alone is the enemy.',
      shlokaMeaningHi: 'अपने आप से अपना उद्धार करें — अपने आप को अधोगति में न जाने दें। क्योंकि आत्मा ही आत्मा का मित्र है और आत्मा ही आत्मा का शत्रु है।'
    },
    possibility: {
      dominant: 'The Forecloser',
      dominantHi: 'संभावना बंद करने वाले',
      subtitle: 'Beliefs that decide the future before it has been lived',
      subtitleHi: 'वे मान्यताएं जो भविष्य को जीने से पहले ही तय कर देती हैं',
      reflection: "Arjuna's deepest crisis was not self-doubt and not distrust of the world. It was the conviction that what lay ahead was already determined — and that the determination was terrible. He saw only one outcome: catastrophe. The Gita begins here, on the battlefield of a closed future, and its entire teaching is the reopening of what belief had sealed shut.\n\nLimiting beliefs about possibility are perhaps the most quietly devastating of the three, because they operate before the attempt. They do not say 'I am not enough' or 'the world is unfair.' They say something simpler and harder to argue with: 'It will not work. It is too late. That door is not open to you.' And so the door is never tried. The evidence of its being closed is never actually gathered — because you never go to check. The belief maintains itself through the absence of disconfirmation.\n\nThe Gita's most radical assertion is about the nature of what you are. Not the role you play, not the timeline you are on, not the circumstances that surround you — but what is actually, essentially, indestructibly present within you. That which cannot be cut, burned, drowned, or dried. That which was never born and will never die. If that is what you are, then the question of what is still possible for you becomes a very different inquiry. Not 'is there time?' — but 'am I willing to see?'",
      reflectionHi: "अर्जुन का सबसे गहरा संकट आत्म-संशय नहीं था और दुनिया पर अविश्वास नहीं था। यह यह दृढ़ विश्वास था कि आगे जो है वह पहले से तय है — और वह भयानक है। उन्होंने केवल एक परिणाम देखा: तबाही। गीता यहीं से शुरू होती है — एक बंद भविष्य के युद्धक्षेत्र पर।\n\nसंभावना के बारे में सीमित मान्यताएं शायद तीनों में सबसे शांत तरीके से विनाशकारी हैं, क्योंकि वे प्रयास से पहले काम करती हैं। वे यह नहीं कहतीं कि 'मैं पर्याप्त नहीं हूं' या 'दुनिया अनुचित है।' वे कुछ सरल और बहस करने में कठिन कहती हैं: 'यह काम नहीं करेगा। बहुत देर हो गई है।' और इसलिए दरवाजा कभी नहीं आजमाया जाता।\n\nगीता का सबसे मौलिक दावा इस बारे में है कि आप वास्तव में क्या हैं। वह जो काटा नहीं जा सकता, जलाया नहीं जा सकता, डुबोया नहीं जा सकता। वह जो कभी पैदा नहीं हुआ और कभी मरेगा नहीं। अगर यही आप हैं, तो आपके लिए क्या संभव है — यह एक बहुत अलग जिज्ञासा बन जाती है। 'क्या समय है?' नहीं — बल्कि 'क्या मैं देखने के लिए तैयार हूं?'",
      shloka: 'na jayate mriyate va kadacin nayam bhutva bhavita va na bhuyah / ajo nityah sasvato yam purano na hanyate hanyamane sarire',
      shlokaHi: 'न जायते म्रियते वा कदाचिन् नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥',
      shlokaRef: 'BG 2.20',
      shlokaMeaning: 'It is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.',
      shlokaMeaningHi: 'यह न कभी जन्म लेती है और न मरती है। यह न तो उत्पन्न हुई है, न होती है, और न होगी। यह अजन्मा, नित्य, शाश्वत और पुरातन है। शरीर के मारे जाने पर यह नहीं मारी जाती।'
    }
  }
};
