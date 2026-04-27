// Karma Yoga Quiz — What Kind of Doer Are You?
// Categories: Nishkama (selfless), Sakama (desire-driven), Inert, Compulsive
window.QUIZ_DATA = {
  id: 'karma-yoga',
  meta: {
    en: {
      title: 'What Kind of<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Doer Are You?</span>',
      shareTitle: 'Karma Yoga Style',
      chapter: 'Bhagavad Gita · Chapter 3 · The Yoga of Action',
      intro: 'Krishna teaches that you cannot avoid action, but you can transform how you act. This inquiry reveals your dominant relationship with action — the inner stance behind your doing.',
      tagPrefix: 'KARMA · STAGE',
      categoryNames: { nishkama: 'Selfless Action', sakama: 'Driven Action', inert: 'Reluctant Action', compulsive: 'Restless Action' }
    },
    hi: {
      title: 'आप किस प्रकार के<br><span style="color: var(--bo-gold-deep); font-weight: 500;">कर्ता हैं?</span>',
      shareTitle: 'कर्म योग शैली',
      chapter: 'भगवद्गीता · अध्याय ३ · कर्म योग',
      intro: 'कृष्ण सिखाते हैं कि आप कर्म से बच नहीं सकते, पर बदल सकते हैं कि आप कैसे कर्म करते हैं। यह जिज्ञासा कर्म के साथ आपके प्रमुख संबंध को प्रकट करती है।',
      tagPrefix: 'कर्म · चरण',
      categoryNames: { nishkama: 'निष्काम कर्म', sakama: 'सकाम कर्म', inert: 'अकर्म', compulsive: 'विकर्म' }
    }
  },
  categories: ['nishkama', 'sakama', 'inert', 'compulsive'],
  questions: {
    en: [
      { text: "When you start a new project, what truly drives you?", tags: ["nishkama","sakama","inert","compulsive"], options: ["A sense that this work needs to be done well, regardless of who notices", "The reward, recognition, or specific outcome I'm aiming for", "I usually start because someone else asked me to", "The energy of starting itself — the next thing, then the next"] },
      { text: "How do you respond when your work goes unrecognized?", tags: ["nishkama","sakama","compulsive","inert"], options: ["I am content if the work itself was true and complete", "I feel deflated; recognition was part of why I did it", "I move on quickly to the next thing without dwelling", "It bothers me but I tell myself it doesn't"] },
      { text: "When you finish a task, what do you naturally feel?", tags: ["nishkama","sakama","inert","compulsive"], options: ["A quiet completion — the work was its own purpose", "Anticipation of the result or reward", "Relief that it's over", "Already restless, thinking about what's next"] },
      { text: "What is your relationship to outcomes?", tags: ["nishkama","sakama","compulsive","inert"], options: ["I aim for excellence but release what happens after", "Outcomes are why I act — they matter deeply", "I rarely think about outcomes; I just keep moving", "I avoid taking on things where I might fail"] },
      { text: "When duty feels heavy or unwanted, what is your usual response?", tags: ["nishkama","compulsive","sakama","inert"], options: ["I do it anyway, because it is mine to do", "I push through aggressively, fueled by willpower", "I do it for the reward at the end", "I delay or avoid until I cannot anymore"] },
      { text: "How do you experience effort itself?", tags: ["nishkama","compulsive","sakama","inert"], options: ["Effort that feels right is its own reward", "I work intensely — sometimes too intensely", "Effort makes sense only when it leads somewhere I want", "I prefer ease and avoid sustained effort"] },
      { text: "What happens when you face a setback?", tags: ["nishkama","sakama","compulsive","inert"], options: ["I learn, adjust, and continue without much drama", "I feel defeated until the situation turns around", "I throw myself harder at the problem", "I question whether I should have started at all"] },
      { text: "How do you choose what to take on?", tags: ["nishkama","sakama","compulsive","inert"], options: ["I follow what feels rightful to me, my dharma", "I follow what looks rewarding or strategic", "I take on whatever crosses my path — I struggle to say no", "I take on as little as I can"] },
      { text: "When a task feels boring or unglamorous, what do you do?", tags: ["nishkama","sakama","inert","compulsive"], options: ["I give it the same care as anything else", "I lose motivation and the quality drops", "I avoid it as long as possible", "I rush through to get to something more stimulating"] },
      { text: "What does success look like to you?", tags: ["nishkama","sakama","compulsive","inert"], options: ["Doing the right thing well, regardless of recognition", "External markers — money, status, achievement", "Constant motion, never standing still", "Comfort, safety, and being left alone"] },
      { text: "How attached are you to your way of doing things?", tags: ["nishkama","sakama","compulsive","inert"], options: ["I have preferences but can release them when needed", "I'm very attached — my way is part of my identity", "I'm always switching methods, seeking what works", "I do whatever requires the least adjustment from me"] },
      { text: "When you act, what is your inner state?", tags: ["nishkama","sakama","compulsive","inert"], options: ["Steady, present, with the work at hand", "Hopeful, anxious, watching for the result", "Driven, intense, slightly tense", "Reluctant, distracted, somewhere else"] },
      { text: "How do you respond to praise for your work?", tags: ["nishkama","sakama","inert","compulsive"], options: ["I receive it gracefully but it doesn't change my work", "It motivates me deeply — I want more of it", "I feel awkward and deflect quickly", "I barely notice; I'm already onto the next thing"] },
      { text: "What is your relationship with rest?", tags: ["nishkama","compulsive","sakama","inert"], options: ["I rest naturally when work is complete", "Rest feels like wasting time", "I rest after I've earned it through achievement", "I rest more than I act"] },
      { text: "Which best describes your soul's question right now?", tags: ["nishkama","sakama","compulsive","inert"], options: ["How do I serve what is true through my work?", "How do I get what I want through my efforts?", "How do I keep going without falling apart?", "How do I avoid having to do this?"] }
    ],
    hi: [
      { text: "जब आप कोई नया कार्य शुरू करते हैं, वास्तव में क्या आपको चलाता है?", tags: ["nishkama","sakama","inert","compulsive"], options: ["यह बोध कि यह कार्य ठीक से होना चाहिए", "पुरस्कार, मान्यता या परिणाम", "किसी और ने कहा इसलिए", "शुरू करने की ऊर्जा"] },
      { text: "कार्य की पहचान न होने पर कैसी प्रतिक्रिया?", tags: ["nishkama","sakama","compulsive","inert"], options: ["कार्य सच्चा था, तो संतुष्ट हूं", "निराश — मान्यता एक कारण थी", "जल्दी अगले पर बढ़ता हूं", "परेशान करता है पर खुद से कहता हूं नहीं"] },
      { text: "कार्य पूरा करने पर स्वाभाविक रूप से क्या महसूस होता है?", tags: ["nishkama","sakama","inert","compulsive"], options: ["शांत पूर्णता", "परिणाम की प्रतीक्षा", "राहत कि खत्म हुआ", "अगले की चिंता"] },
      { text: "परिणामों से आपका संबंध?", tags: ["nishkama","sakama","compulsive","inert"], options: ["उत्कृष्टता का लक्ष्य पर परिणाम छोड़ देता हूं", "परिणाम ही कारण हैं", "परिणामों के बारे में सोचता ही नहीं", "जहां असफल हो सकूं वो टालता हूं"] },
      { text: "जब कर्तव्य भारी लगे, सामान्य प्रतिक्रिया?", tags: ["nishkama","compulsive","sakama","inert"], options: ["फिर भी करता हूं — मेरा है", "इच्छाशक्ति से धकेलता हूं", "अंत के पुरस्कार के लिए", "टालता रहता हूं"] },
      { text: "प्रयास का अनुभव कैसा?", tags: ["nishkama","compulsive","sakama","inert"], options: ["सही प्रयास अपना पुरस्कार है", "तीव्रता से काम — कभी अति", "तभी करता हूं जब लाभ हो", "सहजता पसंद, प्रयास टालता हूं"] },
      { text: "बाधा आने पर क्या होता है?", tags: ["nishkama","sakama","compulsive","inert"], options: ["सीखता, समायोजित करता, चलता हूं", "जब तक न पलटे तब तक हारा महसूस", "और जोर से लगता हूं", "क्या शुरू करना चाहिए था सोचता हूं"] },
      { text: "क्या लेना है कैसे चुनते हैं?", tags: ["nishkama","sakama","compulsive","inert"], options: ["जो धर्म लगे", "जो लाभदायक लगे", "जो भी सामने आए", "जितना कम हो सके"] },
      { text: "उबाऊ कार्य आने पर क्या?", tags: ["nishkama","sakama","inert","compulsive"], options: ["वही ध्यान देता हूं जो किसी और कार्य को", "प्रेरणा खोती है, गुणवत्ता गिरती है", "जब तक संभव टालता हूं", "जल्दी निपटाता हूं"] },
      { text: "सफलता आपके लिए?", tags: ["nishkama","sakama","compulsive","inert"], options: ["सही कार्य अच्छे से, मान्यता से परे", "बाहरी चिह्न", "लगातार गति", "आराम और सुरक्षा"] },
      { text: "अपने तरीके से कितना जुड़ाव?", tags: ["nishkama","sakama","compulsive","inert"], options: ["प्राथमिकताएं हैं पर छोड़ सकता हूं", "बहुत जुड़ाव", "लगातार बदलता हूं", "जो कम बदलाव मांगे"] },
      { text: "कर्म करते समय आंतरिक स्थिति?", tags: ["nishkama","sakama","compulsive","inert"], options: ["स्थिर, उपस्थित, कार्य के साथ", "आशावान, चिंतित, परिणाम देखते", "तीव्र, कुछ तनाव", "अनिच्छुक, ध्यान और कहीं"] },
      { text: "प्रशंसा पर प्रतिक्रिया?", tags: ["nishkama","sakama","inert","compulsive"], options: ["स्वीकार पर कार्य नहीं बदलता", "गहरी प्रेरणा देती है", "अजीब लगता है, टालता हूं", "ध्यान नहीं — अगले पर हूं"] },
      { text: "विश्राम से संबंध?", tags: ["nishkama","compulsive","sakama","inert"], options: ["कार्य पूरा होने पर स्वाभाविक", "समय की बर्बादी लगती है", "कमाने के बाद आराम", "कार्य से अधिक आराम करता हूं"] },
      { text: "अभी आपकी आत्मा का प्रश्न क्या है?", tags: ["nishkama","sakama","compulsive","inert"], options: ["कैसे सच की सेवा करूं?", "कैसे जो चाहता हूं वह मिले?", "कैसे बिना टूटे चलता रहूं?", "कैसे यह करना न पड़े?"] }
    ]
  },
  staticReflections: {
    nishkama: {
      dominant: 'Nishkama Karma', dominantHi: 'निष्काम कर्मी',
      subtitle: 'The art of selfless action', subtitleHi: 'निःस्वार्थ कर्म की कला',
      reflection: "You are walking the path Krishna calls highest — the path of action without grasping for fruit. There is a quiet steadiness in how you engage with work. You do because the doing is right, not because of what it might bring you.\n\nThis is rarer than it seems. Most people are caught in the gravity of outcomes — they cannot release the result. You have learned, perhaps through pain or perhaps through grace, that the work itself is the offering.\n\nThe Gita's only caution to the Nishkama Karmi is subtle: do not become attached to your own non-attachment. Even the identity of 'one who does not crave reward' can become a quiet form of pride. Stay loose. Keep serving. Keep offering.",
      reflectionHi: "आप वह मार्ग चल रहे हैं जिसे कृष्ण सर्वोच्च कहते हैं — फल की चाह बिना कर्म। आपके कार्य में एक शांत स्थिरता है।\n\nयह दिखने से दुर्लभ है। अधिकांश लोग परिणामों की पकड़ में हैं। आपने सीखा है कि कर्म स्वयं अर्पण है।\n\nएक सूक्ष्म चेतावनी: अपनी अनासक्ति से भी मत बंधो।",
      shloka: 'karmany evadhikaras te ma phaleshu kadachana',
      shlokaHi: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
      shlokaRef: 'BG 2.47',
      shlokaMeaning: 'You have a right to action alone, never to its fruits.',
      shlokaMeaningHi: 'तुम्हारा अधिकार केवल कर्म पर है, कभी फलों पर नहीं।'
    },
    sakama: {
      dominant: 'Sakama Karmi', dominantHi: 'सकाम कर्मी',
      subtitle: 'The doer driven by desire', subtitleHi: 'इच्छा से प्रेरित कर्ता',
      reflection: "You act with intention, with hunger, with a clear sense of what you want from your efforts. This is honest — Krishna does not condemn it. The world moves because of people who reach for things, who refuse to be passive. There is dignity in your striving.\n\nBut the Gita is also direct about what desire-driven action costs. You will be lifted high by success and crushed low by failure. You will exhaust yourself chasing one outcome only to find another waiting. The fruits, when they come, will not satisfy as long as you imagined.\n\nThe invitation is not to stop wanting. It is to slowly, gently, loosen your grip on the result. Begin to notice when the work itself feels good — separate from what it might bring. That is the doorway from Sakama to Nishkama.",
      reflectionHi: "आप इच्छा के साथ कर्म करते हैं। यह ईमानदार है — कृष्ण निंदा नहीं करते। संसार उन से चलता है जो पहुंचते हैं।\n\nपर गीता स्पष्ट है: इच्छा-कर्म की कीमत है। सफलता से ऊंचे और असफलता से नीचे जाएंगे।\n\nइच्छा छोड़ना नहीं — परिणाम की पकड़ ढीली करना है।",
      shloka: 'kama esha krodha esha rajo-guna-samudbhavah',
      shlokaHi: 'काम एष क्रोध एष रजोगुणसमुद्भवः',
      shlokaRef: 'BG 3.37',
      shlokaMeaning: 'It is desire, born of Rajas, that becomes anger when blocked.',
      shlokaMeaningHi: 'यह काम है, क्रोध है, रजोगुण से उत्पन्न।'
    },
    inert: {
      dominant: 'The Reluctant Doer', dominantHi: 'अनिच्छुक कर्ता',
      subtitle: 'Action through resistance', subtitleHi: 'प्रतिरोध से कर्म',
      reflection: "There is a heaviness around action for you right now — a wish, often, that things could simply be left alone. Krishna addresses this state directly in the Gita, because Arjuna himself enters it: he wants to drop his bow, retreat, refuse to act.\n\nYou may be in a season of this. The work feels heavy. The starting feels heavy. Even resting feels heavy. The Gita does not shame this — but it does insist that withdrawal is not the answer. Inaction itself is a kind of action, and a binding one.\n\nThe path forward is small. Do one true thing. Then another. Krishna does not ask Arjuna to feel ready — he asks him to rise and act. Movement creates more movement. Begin where you are.",
      reflectionHi: "अभी कर्म के चारों ओर एक भारीपन है — एक इच्छा कि सब कुछ छोड़ दिया जाए। कृष्ण इस स्थिति से सीधे संबोधित करते हैं।\n\nआप ऐसे मौसम में हो सकते हैं। पर गीता शर्म नहीं देती — पर कहती है कि अकर्म ही उत्तर नहीं।\n\nएक सच्चा कार्य करें। फिर अगला।",
      shloka: 'na hi kashchit kshanam api jatu tishthaty akarma-krit',
      shlokaHi: 'न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्',
      shlokaRef: 'BG 3.5',
      shlokaMeaning: 'No one can remain even for a moment without performing some action.',
      shlokaMeaningHi: 'कोई भी क्षण भर भी बिना कर्म किए नहीं रह सकता।'
    },
    compulsive: {
      dominant: 'The Restless Doer', dominantHi: 'विकर्मी',
      subtitle: 'Action without stillness', subtitleHi: 'विश्राम-रहित कर्म',
      reflection: "You are constantly in motion — and there is power in this, but also a cost the Gita names clearly. Action that cannot stop is no longer free. It binds you the way idleness binds others. The mind that cannot rest in completion will manufacture the next task, and the next, until exhaustion is the only stopping point.\n\nKrishna would tell you what he tells everyone caught in Rajas's grip: it is not the action itself that binds, but the inability to release it. Your hands move beautifully. Your spirit forgets to land.\n\nThe practice is unfamiliar but simple — finish one thing fully before reaching for the next. Sit with completion. Let the in-breath finish before the out-breath begins. Stillness is not the absence of action; it is the soil from which true action grows.",
      reflectionHi: "आप लगातार गति में हैं — इसमें शक्ति है, पर एक कीमत भी जो गीता स्पष्ट कहती है। जो कर्म रुक नहीं सकता वह स्वतंत्र नहीं।\n\nकृष्ण कहेंगे: कर्म नहीं बांधता, उसे छोड़ न पाना बांधता है।\n\nअभ्यास सरल है — एक काम पूरा करें फिर अगला।",
      shloka: 'yogah karmasu kaushalam',
      shlokaHi: 'योगः कर्मसु कौशलम्',
      shlokaRef: 'BG 2.50',
      shlokaMeaning: 'Yoga is skill in action — and skill includes knowing when to stop.',
      shlokaMeaningHi: 'योग कर्मों में कुशलता है।'
    }
  }
};
