// Cognitive Bias / Blind Spot Quiz — Pattern Seeker, Story Teller, Loss Avoider
// Rooted in Bhagavad Gita Chapter 3 — The Veils of the Mind (maya)
window.QUIZ_DATA = {
  id: 'bias',
  meta: {
    en: {
      title: 'What Is Your<br><span style="color: var(--bo-gold-deep); font-weight: 500;">Blind Spot?</span>',
      shareTitle: 'Blind Spot',
      chapter: 'Bhagavad Gita · Chapter 3 · The Veils of the Mind',
      intro: 'The Gita teaches that the mind does not see reality — it sees a version of reality shaped by its own patterns, desires, and fears. In NLP this is called filtering. In psychology, cognitive bias. Whatever the name, the pattern is the same: your mind has a favourite way of distorting the truth. This inquiry helps you find yours.',
      tagPrefix: 'MAYA · MIND',
      categoryNames: { pattern_seeker: 'Pattern Seeker', story_teller: 'Story Teller', loss_avoider: 'Loss Avoider' }
    },
    hi: {
      title: 'आपका<br><span style="color: var(--bo-gold-deep); font-weight: 500;">अंध-स्थान क्या है?</span>',
      shareTitle: 'अंध-स्थान',
      chapter: 'भगवद्गीता · अध्याय ३ · मन के आवरण',
      intro: 'गीता सिखाती है कि मन वास्तविकता को नहीं देखता — वह अपने स्वयं के स्वरूपों, इच्छाओं और भयों से आकारित एक संस्करण देखता है। NLP में इसे फ़िल्टरिंग कहते हैं, मनोविज्ञान में संज्ञानात्मक पूर्वाग्रह। नाम चाहे जो हो, स्वरूप एक ही है: आपके मन का सत्य को विकृत करने का एक पसंदीदा तरीका है। यह जिज्ञासा आपको वही खोजने में मदद करती है।',
      tagPrefix: 'माया · मन',
      categoryNames: { pattern_seeker: 'पैटर्न-खोजी', story_teller: 'कथाकार', loss_avoider: 'हानि-भयी' }
    }
  },
  categories: ['pattern_seeker', 'story_teller', 'loss_avoider'],
  questions: {
    en: [
      {
        text: "When you receive information that contradicts something you already believe, your first instinct is to:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Look for what is wrong with the new information — there must be a flaw",
          "Interpret it through the lens of what I already know — fit it in somewhere",
          "Hold both possibilities — though the familiar one still feels more real",
          "Feel unsettled — if this is wrong, what else might be?"
        ]
      },
      {
        text: "When something bad happens to you, your mind most naturally explains it by:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "Tracing it to what other people did or failed to do",
          "Finding the pattern — this isn't the first time this has happened",
          "Calculating what I've lost and what I can no longer get back",
          "Constructing a reason that makes it feel less random and more meaningful"
        ]
      },
      {
        text: "When you meet someone new and feel uncomfortable around them, you tend to:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Notice things about them that confirm the discomfort was justified",
          "Build a mental profile — who they remind me of, what type they are",
          "Stay alert — trust is something I extend slowly and guardedly",
          "Wonder what I might be missing about them if I write them off"
        ]
      },
      {
        text: "You are three months into a project that is not working. You most likely:",
        tags: ["loss_avoider", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Continue — I've come too far to stop now, the investment demands it",
          "Tell myself the story of why it will eventually work if I just push harder",
          "Look for signs I missed earlier that should have told me this would fail",
          "Feel a deep reluctance to cut my losses — it would mean the past was wasted"
        ]
      },
      {
        text: "When you succeed at something difficult, you explain it to yourself as:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "Proof that my judgement and effort made the difference",
          "Confirmation that my approach was right — the pattern I was following worked",
          "Partly luck, partly skill — I tell the story where I was the protagonist",
          "A relief — not losing feels more significant than the win itself"
        ]
      },
      {
        text: "When you look back at a failed relationship or partnership, you most often:",
        tags: ["story_teller", "loss_avoider", "pattern_seeker", "story_teller"],
        options: [
          "Have a clear narrative — I can tell you exactly where it went wrong and whose choices caused it",
          "Feel the weight of what was lost more than curiosity about what was learned",
          "Notice the signals you ignored because they didn't fit what you wanted to see",
          "Retell the story differently depending on who is listening"
        ]
      },
      {
        text: "You are shown two studies on the same topic — one confirms your view, one challenges it. You:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Scrutinise the challenging study for methodological problems",
          "Read both — but find yourself remembering the confirming one more clearly",
          "Feel validated — the confirming study was obviously better designed",
          "Feel anxious — changing your view would mean the decisions based on it were wrong"
        ]
      },
      {
        text: "When a colleague takes credit for work you contributed to, you explain their behaviour as:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "Deliberate — they knew what they were doing and chose to do it anyway",
          "A pattern — this kind of person always does this, I should have seen it coming",
          "Complex — I construct a story that explains their motive, even if I wasn't there",
          "Costly — more than the credit, I focus on what the relationship now cannot be"
        ]
      },
      {
        text: "When making a significant decision, what does your mind do with evidence that points the other way?",
        tags: ["pattern_seeker", "loss_avoider", "story_teller", "pattern_seeker"],
        options: [
          "I notice it, but somehow it carries less weight than the evidence I was already holding",
          "It makes me reluctant to decide — I might make the wrong move and not recover",
          "I incorporate it into the story I'm building — I can usually make it fit",
          "I look for a reason to discount it — it probably doesn't apply to this situation"
        ]
      },
      {
        text: "You have been doing something a particular way for years. Someone suggests a better method. You:",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "Feel a quiet resistance — my way has worked, so there must be something wrong with theirs",
          "Listen, then reframe it in a way that is more consistent with what I already do",
          "Feel reluctant — changing now would mean all that time doing it the old way was less well spent",
          "Consider it, but keep looking for evidence that my original approach is still valid"
        ]
      },
      {
        text: "When you read the news or social media, you mostly notice:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Stories that confirm what I already believe about the world",
          "Human drama — the motivations, the characters, who is the hero, who is the villain",
          "The same patterns repeating — I can predict how this will go",
          "What might go wrong — the downside, the risk, the thing people are not seeing"
        ]
      },
      {
        text: "When someone you trusted disappoints you, your mind:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "Rewrites the relationship — reinterpreting past moments in light of this betrayal",
          "Recognises a pattern — sees this as consistent with something I should have caught earlier",
          "Feels the loss deeply — what I thought we had, and what I now cannot get back from them",
          "Builds a case — assembling evidence that explains why they turned out this way"
        ]
      },
      {
        text: "When you are in a conversation and someone makes a point you disagree with, you:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Begin forming your counter-argument while they are still speaking",
          "Listen — but mainly to understand their worldview, which I then translate into mine",
          "Notice how many times they've held this kind of wrong view before",
          "Hesitate to push back — disagreement might cost more than it gains"
        ]
      },
      {
        text: "Imagine a business idea fails. What story do you most naturally tell?",
        tags: ["story_teller", "loss_avoider", "pattern_seeker", "story_teller"],
        options: [
          "The market wasn't ready, the timing was off, the team didn't execute — I can name the cause",
          "I focus on what I put in — the money, the time, the opportunity cost of all I didn't do",
          "I trace the failure to patterns — places where the early signals were pointing this way",
          "I construct a version where I was acting on the best information available — it softens the loss"
        ]
      },
      {
        text: "When you are asked to change a long-held opinion in light of new evidence:",
        tags: ["pattern_seeker", "loss_avoider", "story_teller", "pattern_seeker"],
        options: [
          "I feel genuine discomfort — the opinion felt like part of how I understand the world",
          "I resist — changing it feels like admitting I was wrong, and I don't recover from that easily",
          "I may appear to change it while quietly building a new story that preserves my original position",
          "I look for the flaw in the evidence before I'm willing to update what I believe"
        ]
      },
      {
        text: "When you reflect on a situation where you were clearly wrong, you tend to:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "Find a narrative that explains why it was reasonable to think what I thought at the time",
          "See the signs I missed — the data I had and didn't weight correctly",
          "Focus on the cost of having been wrong — what it lost me",
          "Retell it in a way that puts the responsibility somewhere more distributed"
        ]
      },
      {
        text: "You are job-hunting and a role that matches your current skills appears. A stretch role also appears. You are most drawn to:",
        tags: ["loss_avoider", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "The matching role — the stretch role might not work out and I'd lose what I have",
          "The matching role — it fits the pattern of what has worked for me before",
          "The stretch role — I can tell myself a story about who I will become",
          "Staying where I am — both options involve risk and what I have isn't that bad"
        ]
      },
      {
        text: "When someone gives you feedback that surprises you, you first:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Look for what they might be missing about me that would explain why they're wrong",
          "Try to understand their perspective — what is the story they have about me?",
          "Check it against your own existing sense of yourself — does it fit or not?",
          "Worry about what this means for how others see you — what might you be losing in their eyes?"
        ]
      },
      {
        text: "When two people you know have a conflict, and you only hear one side, you:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "Form a fairly complete picture of what happened and who was at fault",
          "Look for the pattern — this kind of conflict usually plays out in a predictable way",
          "Build the narrative — who is the protagonist, what was the wound, who is the villain",
          "Stay cautious — I might lose the trust of both if I get involved or take sides"
        ]
      },
      {
        text: "When you notice you have been procrastinating on something, the story you tell yourself is usually:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "That I am waiting for the right conditions — when they arrive, I will act",
          "That this is a pattern I've had since a certain time in my life — I know where it comes from",
          "That if I start and it doesn't go well, the effort and risk will have been wasted",
          "That I'm not really procrastinating — I'm thinking, gathering, preparing"
        ]
      },
      {
        text: "When you think about a decision you made that turned out badly, you mostly feel:",
        tags: ["loss_avoider", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Regret about what I gave up or lost in making that choice",
          "A need to understand it — I replay it to make sense of how I got there",
          "Recognition — there were clues and I'm learning to read them better now",
          "A reluctance to make similar-sized decisions again — the cost was too high"
        ]
      },
      {
        text: "When you read something that challenges your worldview, you feel:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "Mildly irritated — you look for what the author is getting wrong",
          "Curious about the author — what shaped their perspective, what are they not seeing",
          "Able to engage, but your original view feels more supported by what you already know",
          "Wary — if they're right, I may have made choices I cannot easily undo"
        ]
      },
      {
        text: "When you are starting something new — a habit, a project, a relationship — what voice do you hear most?",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "The one that says: this fits with what I know works",
          "The one that says: this could be the beginning of something significant",
          "The one that says: what happens if this doesn't work and I've committed?",
          "The one that says: let me check if this is consistent with my usual approach"
        ]
      },
      {
        text: "When you watch someone make what you consider a mistake, your internal commentary is:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "A complete explanation of why they made that choice — their history, their blind spots",
          "Recognition — I've seen this before, this is how it usually goes",
          "A narrative where I know what they should have done differently",
          "A sense of caution — if they can get this wrong, so might I"
        ]
      },
      {
        text: "Which sentence lands most honestly when you consider your relationship with your own thinking?",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "I trust my judgement — and I'm probably more certain than the evidence warrants",
          "I am the author of the meaning I make — and my stories feel more true than they may be",
          "I measure gains and losses carefully — and losses always feel larger than they look",
          "I see patterns everywhere — and I'm never quite sure whether I found them or made them"
        ]
      }
    ],
    hi: [
      {
        text: "जब आपको कोई ऐसी जानकारी मिलती है जो आपकी मौजूदा धारणा के विपरीत हो, तो आपकी पहली प्रवृत्ति होती है:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "नई जानकारी में खामी ढूंढना — जरूर कोई दोष होगा",
          "इसे अपनी मौजूदा जानकारी के चश्मे से देखना — कहीं फिट कर देना",
          "दोनों संभावनाओं को साथ रखना — पर जाना-पहचाना ही अधिक सच लगता है",
          "बेचैनी महसूस करना — अगर यह गलत है, तो और क्या गलत हो सकता है?"
        ]
      },
      {
        text: "जब आपके साथ कुछ बुरा होता है, तो आपका मन उसे सबसे स्वाभाविक रूप से कैसे समझाता है?",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "दूसरों ने क्या किया या नहीं किया — उनकी कमी में",
          "पैटर्न ढूंढना — पहले भी ऐसा हुआ है",
          "हिसाब लगाना — मैंने क्या खोया और अब क्या वापस नहीं मिलेगा",
          "एक कारण बनाना जो इसे कम यादृच्छिक और अधिक अर्थपूर्ण बनाए"
        ]
      },
      {
        text: "जब आप किसी नए व्यक्ति से मिलते हैं और असहज महसूस करते हैं, तो आप:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "उनमें ऐसी बातें नोटिस करते हैं जो असहजता को उचित ठहराती हैं",
          "मानसिक प्रोफाइल बनाते हैं — वे किसकी याद दिलाते हैं, किस प्रकार के हैं",
          "सतर्क रहते हैं — विश्वास धीरे-धीरे और सावधानी से देते हैं",
          "सोचते हैं कि अगर मैंने इन्हें नकार दिया तो क्या छूट जाएगा"
        ]
      },
      {
        text: "आप किसी ऐसे प्रोजेक्ट में तीन महीने से हैं जो काम नहीं कर रहा। आप सबसे अधिक संभावना है:",
        tags: ["loss_avoider", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "जारी रखना — इतनी दूर आ चुका/चुकी हूं, अब रोकना उचित नहीं",
          "खुद से कहना कि अगर और मेहनत करूं तो यह काम करेगा",
          "उन संकेतों को ढूंढना जो पहले दिख रहे थे कि यह असफल होगा",
          "नुकसान स्वीकार करने में गहरी हिचकिचाहट — इसका मतलब होगा कि पुराना समय बर्बाद गया"
        ]
      },
      {
        text: "जब आप किसी कठिन काम में सफल होते हैं, तो आप खुद से इसे कैसे समझाते हैं?",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "इस बात का प्रमाण कि मेरे निर्णय और परिश्रम ने फर्क डाला",
          "पुष्टि कि मेरा तरीका सही था — जो पैटर्न मैं फॉलो कर रहा/रही था वह काम आया",
          "कुछ भाग्य, कुछ कौशल — एक कहानी जहाँ मैं नायक/नायिका हूं",
          "राहत — कुछ न खोना, जीत से भी अधिक महत्वपूर्ण लगता है"
        ]
      },
      {
        text: "जब आप किसी असफल रिश्ते या साझेदारी को पीछे मुड़कर देखते हैं, तो अक्सर:",
        tags: ["story_teller", "loss_avoider", "pattern_seeker", "story_teller"],
        options: [
          "आपके पास एक स्पष्ट कहानी होती है — कहाँ गलत हुआ और किसके निर्णयों से",
          "जो खोया उसका बोझ, जो सीखा उससे अधिक भारी लगता है",
          "उन संकेतों को देखते हैं जिन्हें आपने नजरअंदाज किया क्योंकि वे फिट नहीं बैठते थे",
          "कहानी को अलग-अलग तरह से सुनाते हैं, यह निर्भर करता है कि कौन सुन रहा है"
        ]
      },
      {
        text: "एक ही विषय पर दो अध्ययन दिखाए जाएं — एक आपकी राय की पुष्टि करे, एक चुनौती दे। आप:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "चुनौती देने वाले अध्ययन में पद्धति संबंधी समस्याएं खोजते हैं",
          "दोनों पढ़ते हैं — पर पुष्टि करने वाला अधिक स्पष्ट याद रहता है",
          "मान्य महसूस करते हैं — पुष्टि करने वाला अध्ययन स्पष्ट रूप से बेहतर था",
          "चिंतित होते हैं — राय बदलने का मतलब होगा कि उस पर आधारित निर्णय गलत थे"
        ]
      },
      {
        text: "जब कोई सहकर्मी उस काम का श्रेय ले लेता है जिसमें आपका योगदान था, आप उनके व्यवहार को समझाते हैं:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "जानबूझकर — वे जानते थे और फिर भी किया",
          "एक पैटर्न — इस प्रकार के लोग हमेशा ऐसा करते हैं, मुझे पहले दिखना चाहिए था",
          "जटिल — उनके इरादे की कहानी बनाता/बनाती हूं, भले ही मैं वहाँ नहीं था/थी",
          "नुकसान पर ध्यान — श्रेय से अधिक, इस रिश्ते से अब क्या संभव नहीं"
        ]
      },
      {
        text: "किसी महत्वपूर्ण निर्णय लेते समय, आपका मन विपरीत दिशा में इशारा करने वाले साक्ष्य के साथ क्या करता है?",
        tags: ["pattern_seeker", "loss_avoider", "story_teller", "pattern_seeker"],
        options: [
          "मैं उसे नोटिस करता/करती हूं, पर वह उतना भारी नहीं लगता जितना मेरे पास पहले से था",
          "मुझे निर्णय लेने में हिचकिचाहट होती है — गलत कदम उठाकर संभल नहीं पाऊंगा/पाऊंगी",
          "मैं उसे अपनी बना रही कहानी में शामिल कर लेता/लेती हूं — फिट हो जाता है",
          "मैं उसे नकारने का कारण ढूंढता/ढूंढती हूं — शायद यह इस स्थिति पर लागू नहीं होता"
        ]
      },
      {
        text: "आप वर्षों से कोई काम एक खास तरीके से करते आए हैं। कोई बेहतर तरीका सुझाता है। आप:",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "एक शांत प्रतिरोध महसूस करते हैं — मेरा तरीका काम आया है, उनके में जरूर कमी होगी",
          "सुनते हैं, फिर इसे इस तरह से प्रस्तुत करते हैं जो मेरे तरीके के अनुरूप हो",
          "हिचकिचाते हैं — अब बदलने का मतलब होगा कि पुराने तरीके में बिताया समय कम मूल्यवान था",
          "विचार करते हैं, पर अपने मूल दृष्टिकोण की वैधता के लिए सबूत ढूंढते रहते हैं"
        ]
      },
      {
        text: "जब आप समाचार या सोशल मीडिया पढ़ते हैं, तो आप सबसे अधिक नोटिस करते हैं:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "वे कहानियां जो दुनिया के बारे में मेरी पहले से मानी बातों की पुष्टि करती हैं",
          "मानवीय नाटक — प्रेरणाएं, पात्र, नायक कौन है, खलनायक कौन",
          "वही पैटर्न दोहराते हुए — मैं अनुमान लगा सकता/सकती हूं कि यह कैसे जाएगा",
          "क्या गलत हो सकता है — नकारात्मक पक्ष, जोखिम, जो लोग नहीं देख रहे"
        ]
      },
      {
        text: "जब कोई भरोसेमंद व्यक्ति आपको निराश करता है, तो आपका मन:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "रिश्ते को फिर से लिखता है — पुराने क्षणों की नई व्याख्या करता है",
          "एक पैटर्न पहचानता है — यह उस चीज़ के अनुरूप है जो मुझे पहले दिखनी चाहिए थी",
          "हानि को गहराई से महसूस करता है — जो था, और जो अब उनसे वापस नहीं मिलेगा",
          "एक मामला बनाता है — सबूत इकट्ठे करता है कि वे इस तरह क्यों निकले"
        ]
      },
      {
        text: "जब बातचीत में कोई ऐसी बात कहे जिससे आप असहमत हों, तो आप:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "उनके बोलते समय ही प्रतिवाद बनाना शुरू कर देते हैं",
          "सुनते हैं — पर मुख्यतः उनके नजरिए को समझने के लिए, फिर अपने में बदल लेते हैं",
          "ध्यान देते हैं कि उन्होंने कितनी बार पहले इस तरह की गलत धारणाएं रखी हैं",
          "पीछे हटने में झिझकते हैं — असहमति शायद पाने से अधिक खो दे"
        ]
      },
      {
        text: "मान लीजिए एक व्यावसायिक विचार विफल हो जाता है। आप स्वाभाविक रूप से कौन सी कहानी बताते हैं?",
        tags: ["story_teller", "loss_avoider", "pattern_seeker", "story_teller"],
        options: [
          "बाजार तैयार नहीं था, समय सही नहीं था, टीम ने अच्छा नहीं किया — मैं कारण बता सकता/सकती हूं",
          "मैंने क्या लगाया उस पर ध्यान केंद्रित होता है — पैसा, समय, अवसर लागत",
          "विफलता के पैटर्न को ढूंढता/ढूंढती हूं — शुरुआती संकेत कहाँ थे",
          "एक ऐसा संस्करण बनाता/बनाती हूं जहाँ मैं उपलब्ध सर्वोत्तम जानकारी के आधार पर काम कर रहा/रही था/थी"
        ]
      },
      {
        text: "जब नए साक्ष्य के आलोक में दीर्घकालिक राय बदलने के लिए कहा जाए:",
        tags: ["pattern_seeker", "loss_avoider", "story_teller", "pattern_seeker"],
        options: [
          "वास्तविक असुविधा महसूस होती है — यह राय मेरी दुनिया की समझ का हिस्सा लगती थी",
          "प्रतिरोध होता है — बदलना मतलब गलत होना स्वीकार करना, और यह आसानी से नहीं भूलता",
          "दिखने में बदल सकता/सकती हूं जबकि भीतर एक नई कहानी बनाता/बनाती हूं जो मूल स्थिति को बनाए रखे",
          "साक्ष्य में खामी ढूंढता/ढूंढती हूं इससे पहले कि अपनी मान्यता बदलूं"
        ]
      },
      {
        text: "जब आप किसी ऐसी स्थिति पर विचार करते हैं जिसमें आप स्पष्ट रूप से गलत थे, तो आप:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "एक ऐसी कहानी ढूंढते हैं जो बताए कि उस समय वैसा सोचना उचित था",
          "उन संकेतों को देखते हैं जो छूट गए — जो डेटा था और जिसे सही वज़न नहीं मिला",
          "गलत होने की लागत पर ध्यान केंद्रित होता है — इससे क्या खोया",
          "इसे इस तरह से फिर से बताते हैं कि जिम्मेदारी कई लोगों में बंटी हो"
        ]
      },
      {
        text: "आप नौकरी की तलाश में हैं। एक भूमिका आपके मौजूदा कौशल से मेल खाती है। एक चुनौतीपूर्ण भूमिका भी है। आप सबसे अधिक आकर्षित हैं:",
        tags: ["loss_avoider", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "मेल खाने वाली भूमिका की ओर — चुनौतीपूर्ण भूमिका काम न आए और जो है वह भी जाए",
          "मेल खाने वाली भूमिका की ओर — यह उस पैटर्न में फिट है जो पहले काम आया",
          "चुनौतीपूर्ण भूमिका की ओर — एक कहानी बना सकता/सकती हूं कि मैं कौन बनूंगा/बनूंगी",
          "जहाँ हूं वहीं रहना — दोनों विकल्पों में जोखिम है और जो है वह बुरा नहीं"
        ]
      },
      {
        text: "जब कोई आपको ऐसी प्रतिक्रिया दे जो आपको आश्चर्यचकित करे, तो आप पहले:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "ढूंढते हैं कि वे मेरे बारे में क्या नहीं समझ रहे जो बताए कि वे गलत हैं",
          "उनके दृष्टिकोण को समझने की कोशिश करते हैं — मेरे बारे में उनकी क्या कहानी है?",
          "अपने मौजूदा स्व-बोध से जांचते हैं — यह फिट बैठता है या नहीं?",
          "चिंता करते हैं कि दूसरे आपको कैसे देखते हैं — क्या आप उनकी नज़रों में कुछ खो रहे हैं?"
        ]
      },
      {
        text: "जब आप जानते हों कि दो लोगों के बीच विवाद है और केवल एक पक्ष सुना हो, तो आप:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "काफी पूरी तस्वीर बना लेते हैं — क्या हुआ और किसकी गलती थी",
          "पैटर्न ढूंढते हैं — इस प्रकार का विवाद आमतौर पर एक अनुमानित तरीके से होता है",
          "कहानी बनाते हैं — नायक कौन, घाव क्या था, खलनायक कौन",
          "सावधान रहते हैं — अगर शामिल हुआ/हुई या पक्ष लिया तो दोनों का विश्वास खो सकता है"
        ]
      },
      {
        text: "जब आप नोटिस करते हैं कि आप किसी काम को टाल रहे हैं, तो आप खुद से जो कहानी बताते हैं वह आमतौर पर होती है:",
        tags: ["story_teller", "pattern_seeker", "loss_avoider", "story_teller"],
        options: [
          "कि मैं सही परिस्थितियों का इंतजार कर रहा/रही हूं — जब वे आएंगी, मैं काम करूंगा/करूंगी",
          "कि यह एक पैटर्न है जो मुझे एक खास समय से है — मैं जानता/जानती हूं यह कहाँ से आया",
          "कि अगर शुरू किया और अच्छा न हुआ, तो प्रयास और जोखिम बर्बाद होगा",
          "कि मैं वास्तव में टाल नहीं रहा/रही — सोच रहा/रही हूं, जमा कर रहा/रही, तैयार हो रहा/रही हूं"
        ]
      },
      {
        text: "जब आप किसी ऐसे निर्णय के बारे में सोचते हैं जो बुरा निकला, तो आप मुख्यतः महसूस करते हैं:",
        tags: ["loss_avoider", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "पछतावा — वह चुनाव करने में जो खोया",
          "समझने की जरूरत — मैं उसे दोबारा चलाता/चलाती हूं यह जानने के लिए कि वहाँ कैसे पहुंचा/पहुंची",
          "पहचान — संकेत थे और मैं उन्हें बेहतर पढ़ना सीख रहा/रही हूं",
          "इसी आकार के निर्णय फिर न लेने की झिझक — कीमत बहुत अधिक थी"
        ]
      },
      {
        text: "जब आप कुछ ऐसा पढ़ते हैं जो आपके विश्वदृष्टि को चुनौती देता है, तो आप महसूस करते हैं:",
        tags: ["pattern_seeker", "story_teller", "pattern_seeker", "loss_avoider"],
        options: [
          "हल्की जलन — आप ढूंढते हैं कि लेखक कहाँ गलत है",
          "लेखक के बारे में जिज्ञासा — उनके दृष्टिकोण को किसने आकार दिया, वे क्या नहीं देख रहे",
          "संलग्न होने में सक्षम, पर आपका मूल दृष्टिकोण जो आप पहले से जानते थे उससे अधिक समर्थित लगता है",
          "सतर्कता — अगर वे सही हैं, तो मैंने ऐसे निर्णय लिए होंगे जो आसानी से वापस नहीं होंगे"
        ]
      },
      {
        text: "जब आप कुछ नया शुरू कर रहे हों — एक आदत, एक प्रोजेक्ट, एक रिश्ता — आप सबसे अधिक कौन सी आवाज सुनते हैं?",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "वह जो कहती है: यह उस चीज़ से मेल खाता है जो काम करती है",
          "वह जो कहती है: यह किसी महत्वपूर्ण चीज़ की शुरुआत हो सकती है",
          "वह जो कहती है: अगर यह काम न आया और मैंने प्रतिबद्धता की, तो क्या होगा?",
          "वह जो कहती है: देखो क्या यह मेरे सामान्य दृष्टिकोण के अनुरूप है"
        ]
      },
      {
        text: "जब आप किसी को वह गलती करते देखते हैं जिसे आप गलती मानते हैं, तो आपकी आंतरिक टिप्पणी होती है:",
        tags: ["story_teller", "pattern_seeker", "story_teller", "loss_avoider"],
        options: [
          "उनके उस चुनाव का पूरा स्पष्टीकरण — उनका इतिहास, उनके अंध-स्थान",
          "पहचान — मैंने यह पहले देखा है, यह आमतौर पर इसी तरह होता है",
          "एक कहानी जहाँ मैं जानता/जानती हूं कि उन्हें अलग तरह से क्या करना चाहिए था",
          "सावधानी का भाव — अगर वे गलत कर सकते हैं, तो मैं भी कर सकता/सकती हूं"
        ]
      },
      {
        text: "अपनी सोच के साथ अपने रिश्ते पर विचार करते समय कौन सा वाक्य सबसे ईमानदारी से उतरता है?",
        tags: ["pattern_seeker", "story_teller", "loss_avoider", "pattern_seeker"],
        options: [
          "मैं अपने निर्णय पर भरोसा करता/करती हूं — और शायद साक्ष्य से अधिक आश्वस्त हूं",
          "मैं अपने द्वारा बनाए गए अर्थ का लेखक हूं — और मेरी कहानियाँ जितनी सच लगती हैं, उतनी हों ज़रूरी नहीं",
          "मैं लाभ और हानि को सावधानी से मापता/मापती हूं — और हानियाँ हमेशा बड़ी लगती हैं",
          "मैं हर जगह पैटर्न देखता/देखती हूं — और कभी पूरी तरह नहीं जानता/जानती कि मिले या बनाए"
        ]
      }
    ]
  },
  staticReflections: {
    pattern_seeker: {
      dominant: 'The Pattern Seeker',
      dominantHi: 'पैटर्न-खोजी',
      subtitle: 'You see what you expect to see',
      subtitleHi: 'आप वही देखते हैं जो आप देखने की अपेक्षा करते हैं',
      reflection: "The Gita speaks of jnana — knowledge — covered by smoke, as fire is hidden before it can illuminate. The Pattern Seeker's mind is one of the sharpest instruments available to a human being. You notice connections others miss. You anticipate. You find signal in noise. This is real intelligence — and it becomes the very veil it needs to see through.\n\nIn NLP, the filter that shapes what you notice is called a meta-program. You are running a powerful one: your mind looks for what confirms its existing map of the world and steps past what doesn't fit. This is confirmation bias — not a flaw of unintelligent minds, but precisely of minds that are very good at pattern recognition. The brain that is best at finding patterns is also most at risk of finding patterns that are not truly there.\n\nThe Gita's counsel here is not to stop seeking — it is to hold your patterns with a lighter grip. Sri Krishna does not tell Arjuna his reasoning is wrong. He asks him to look again — wider, with more stillness. Your next inquiry is not about finding more patterns. It is about sitting, for a moment, with the unsettling possibility that the pattern you are most certain of may be the one most worth questioning.",
      reflectionHi: "गीता ज्ञान के धुएं से ढके होने की बात करती है — जैसे आग रोशन करने से पहले छुपी रहती है। पैटर्न-खोजी का मन मनुष्य के पास उपलब्ध सबसे तेज उपकरणों में से एक है। आप वे संबंध देखते हैं जो दूसरे चूक जाते हैं, शोर में संकेत पाते हैं।\n\nNLP में, जो फ़िल्टर तय करता है कि आप क्या नोटिस करते हैं, उसे मेटा-प्रोग्राम कहते हैं। आपका मन एक शक्तिशाली एक चला रहा है: यह वह खोजता है जो उसके मौजूदा नक्शे की पुष्टि करे। पैटर्न पहचान में सबसे अच्छा मस्तिष्क उन पैटर्न को खोजने के सबसे अधिक जोखिम में भी होता है जो वास्तव में वहाँ नहीं हैं।\n\nगीता का परामर्श यहाँ खोजना बंद करना नहीं है — यह है कि अपने पैटर्न को हल्की पकड़ से थामें। आपकी अगली जिज्ञासा यह है: उस संभावना के साथ एक पल बैठें कि जिस पैटर्न पर आपको सबसे अधिक विश्वास है, वही सबसे अधिक प्रश्न करने योग्य हो सकता है।",
      shloka: 'avrttam jnanam etena jnanino nitya-vairina / kama-rupena kaunteya duspurenanalena ca',
      shlokaHi: 'आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा। कामरूपेण कौन्तेय दुष्पूरेणानलेन च॥',
      shlokaRef: 'BG 3.39',
      shlokaMeaning: 'Knowledge is veiled by this eternal enemy of the wise, O Arjuna — insatiable as fire, taking the form of desire and delusion.',
      shlokaMeaningHi: 'हे कौन्तेय! ज्ञानी के इस नित्य-शत्रु द्वारा ज्ञान आवृत रहता है — यह काम-रूपी अग्नि कभी तृप्त नहीं होती।'
    },
    story_teller: {
      dominant: 'The Story Teller',
      dominantHi: 'कथाकार',
      subtitle: 'You make meaning through narrative',
      subtitleHi: 'आप कहानी के माध्यम से अर्थ बनाते हैं',
      reflection: "The Gita warns that one who sees themselves as the sole cause — the sole author — does not truly see. The Story Teller's gift is profound: you inhabit life fully, you make meaning from raw experience, you understand people with a depth that comes from genuine attentiveness. You have an inner life that is rich, textured, layered.\n\nThe shadow is this: the story you construct is not the event itself. In NLP, the process that bridges raw experience to meaning is called modelling — and every model involves deletion, distortion, and generalisation. The Story Teller modelling mind does all three with great fluency. It assigns cause, constructs motive, fills in what was not witnessed, and narrates with a confidence that feels like memory but is partly composition.\n\nThe Bhagavad Gita invites you into a stance it calls sakshi-bhava — the witness. Not the narrator, but the one who watches the narrator narrate. What changes when you notice not just what happened, but the story you built around it? Your richness is not the problem. Knowing that the story is a story — while still honouring its truth — is the doorway the Gita is pointing toward.",
      reflectionHi: "गीता चेतावनी देती है कि जो खुद को एकमात्र कर्ता देखता है — एकमात्र लेखक — वह वास्तव में नहीं देखता। कथाकार का उपहार गहरा है: आप जीवन को पूरी तरह अनुभव करते हैं, कच्चे अनुभव से अर्थ बनाते हैं, लोगों को गहरी समझ से जानते हैं।\n\nछाया यह है: जो कहानी आप बनाते हैं वह घटना नहीं है। NLP में इसे मॉडलिंग कहते हैं — और हर मॉडल में विलोपन, विरूपण और सामान्यीकरण होता है। कथाकार का मन ये तीनों बड़ी दक्षता से करता है। यह कारण सौंपता है, इरादे बनाता है, जो नहीं देखा उसे भरता है।\n\nगीता आपको साक्षी-भाव की ओर आमंत्रित करती है — कथाकार नहीं, बल्कि वह जो कथाकार को कथा कहते देखता है। क्या बदलता है जब आप न केवल यह देखते हैं कि क्या हुआ, बल्कि वह कहानी भी देखते हैं जो आपने उसके चारों ओर बनाई?",
      shloka: 'tatraivaṁ sati kartāram ātmānaṁ kevalaṁ tu yaḥ / paśyaty akṛta-buddhitvān na sa paśyati durmatiḥ',
      shlokaHi: 'तत्रैवं सति कर्तारमात्मानं केवलं तु यः। पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः॥',
      shlokaRef: 'BG 18.16',
      shlokaMeaning: 'One who sees the self as the sole doer, owing to impure understanding, does not truly see — such a one is of clouded intelligence.',
      shlokaMeaningHi: 'जो अपने अशुद्ध बुद्धि के कारण अपने आप को ही एकमात्र कर्ता देखता है, वह वास्तव में नहीं देखता — वह दुर्मति है।'
    },
    loss_avoider: {
      dominant: 'The Loss Avoider',
      dominantHi: 'हानि-भयी',
      subtitle: 'Losses feel larger than equivalent gains',
      subtitleHi: 'हानियाँ समान लाभों से बड़ी लगती हैं',
      reflection: "The Gita's most radical gift is perhaps its teaching on action without attachment to outcome — nishkama karma. For the Loss Avoider, this lands differently than for anyone else. You do not merely want results. You fear their absence. Loss, failure, wasted investment — these carry a weight in your nervous system that gain simply does not match.\n\nThis pattern is not a character flaw. It is a survival architecture — one that evolved to protect you from squandering resources, from repeating costly mistakes, from being caught exposed. In NLP terms, your brain's away-from motivation is more powerful than your toward motivation. You are excellent at avoiding what goes wrong. The cost is that you may hold on past the point of wisdom — to projects, relationships, beliefs — because releasing them means acknowledging that time, energy, and hope were spent.\n\nKrishna's instruction in Chapter 2 is precise: you have the right to the action, never to the fruit. This is not an invitation to recklessness — it is an invitation to freedom. The moment you act because the action is right, rather than because the outcome is safe, something changes in your relationship with loss. Loss becomes information. Not catastrophe.",
      reflectionHi: "गीता का सबसे क्रांतिकारी उपहार शायद फल की आसक्ति के बिना कर्म की शिक्षा है — निष्काम कर्म। हानि-भयी के लिए यह विशेष रूप से उतरती है। आप केवल परिणाम नहीं चाहते — आप उनकी अनुपस्थिति से डरते हैं। हानि, विफलता, बर्बाद निवेश — ये आपके तंत्रिका तंत्र में वह वजन उठाते हैं जो लाभ नहीं उठाता।\n\nयह स्वरूप कोई चरित्र दोष नहीं है। यह एक अस्तित्व संरचना है। NLP के शब्दों में, आपके मस्तिष्क की दूर-जाने की प्रेरणा, की-ओर-जाने की प्रेरणा से अधिक शक्तिशाली है।\n\nकृष्ण का निर्देश स्पष्ट है: आपका अधिकार कर्म पर है, फल पर कभी नहीं। जिस क्षण आप इसलिए कार्य करते हैं क्योंकि कर्म सही है, न कि इसलिए कि परिणाम सुरक्षित है — हानि के साथ आपका रिश्ता बदल जाता है। हानि जानकारी बन जाती है। तबाही नहीं।",
      shloka: 'karmany evadhikaras te ma phalesu kadacana / ma karma-phala-hetur bhur ma te sango stv akarmani',
      shlokaHi: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
      shlokaRef: 'BG 2.47',
      shlokaMeaning: 'You have the right to action alone, never to its fruits. Let not the fruits of action be your motive, nor let attachment to inaction be yours.',
      shlokaMeaningHi: 'तुम्हारा अधिकार केवल कर्म में है, फलों में कभी नहीं। कर्म के फल की इच्छा को अपना प्रयोजन मत बनाओ, और न ही अकर्म में आसक्त हो।'
    }
  }
};
