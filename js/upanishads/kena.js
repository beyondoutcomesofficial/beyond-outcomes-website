// Kena Upanishad — verse data.
// Flat numbering 1..34 maps onto the four khandas:
//   Khanda 1 = 1–8 · Khanda 2 = 9–13 · Khanda 3 = 14–25 · Khanda 4 = 26–34
// `ref` carries the traditional citation (khanda.verse).
// Names are editorial titles — verify each against the translation during episode production.

window.UPANISHAD_KENA = {
  id: 'kena',
  verses: {

    1: {
      id: 1,
      ref: '1.1',
      name: 'By Whom?',
      devanagari: 'केनेषितं पतति प्रेषितं मनः\nकेन प्राणः प्रथमः प्रैति युक्तः ।\nकेनेषितां वाचमिमां वदन्ति\nचक्षुः श्रोत्रं क उ देवो युनक्ति ॥',
      transliteration: 'keneṣitaṁ patati preṣitaṁ manaḥ\nkena prāṇaḥ prathamaḥ praiti yuktaḥ\nkeneṣitāṁ vācam imāṁ vadanti\ncakṣuḥ śrotraṁ ka u devo yunakti',
      translation: 'By whom willed, by whom directed, does the mind alight on its objects? By whom commanded does the first breath move? By whose will do people speak this speech? What power yokes the eye and the ear?',
      words: [
        { word: 'kena iṣitam', meaning: 'by whom willed / impelled — the word that names the whole text' },
        { word: 'patati preṣitaṁ manaḥ', meaning: 'does the mind fly forth, directed, and land on its objects' },
        { word: 'kena prāṇaḥ prathamaḥ praiti yuktaḥ', meaning: 'by whom yoked does the first breath go forth' },
        { word: 'keneṣitāṁ vācam imāṁ vadanti', meaning: 'by whose will do people utter this speech' },
        { word: 'cakṣuḥ śrotraṁ ka u devo yunakti', meaning: 'what god / shining power harnesses the eye and the ear' }
      ],
      commentary: `Every Upanishad opens with a move, and Kena's is the most direct of them all: it interrupts you mid-experience. Right now, reading this, your mind has already flown to these words and landed — patati, the verb is of a bird alighting. You did not deliberate about that. The mind was already off and settled before "you" were consulted. So the student's question stands fresh after three millennia: sent by whom? Who — or what — directs the mind toward its objects?\n\nSit with how strange the question is. We assume "I direct my mind" the way we assume the ground under our feet. But watch even one minute of your own experience and the assumption cracks. Thoughts arrive; you do not compose them. Attention leaps to the notification, the memory, the worry — unbidden, unchosen. If you truly commanded the mind, you would never lose an argument with it, and everyone loses that argument daily. The Kena's opening is not rhetorical flourish. It is an empirical observation you can verify before you finish this paragraph: the mind is directed, and whatever directs it is not the thing you usually call "me." Then the question widens — breath, speech, eye, ear. The whole instrument panel of experience is running. Who is at the controls?\n\nNotice, finally, what makes this the most contemporary sentence in the ancient world. An entire industry now exists to answer the Kena's question from the outside: by whom is the mind directed? By the feed, by the algorithm, by whoever bids highest for the next moment of your attention. The engineers know the mind is steerable; that is the business model. The Upanishad knew it first — and asks the question in the direction the engineers never do: not "how do we steer it," but "what is the awareness behind it, by whose presence the mind is able to move at all?" The rest of the text is the teacher's answer — given, as we will see, almost entirely in riddles, because this is the one object the mind cannot turn around and look at. It is the eye of the eye, the ear of the ear. That is verse two.`
    },

    2:  { id: 2,  ref: '1.2', name: 'The Ear of the Ear, the Mind of the Mind' },
    3:  { id: 3,  ref: '1.3', name: 'There the Eye Does Not Go' },
    4:  { id: 4,  ref: '1.4', name: 'Other Than the Known, Beyond the Unknown' },
    5:  { id: 5,  ref: '1.5', name: 'What Speech Cannot Say' },
    6:  { id: 6,  ref: '1.6', name: 'What the Mind Cannot Think' },
    7:  { id: 7,  ref: '1.7', name: 'What the Eye Cannot See' },
    8:  { id: 8,  ref: '1.8', name: 'What the Ear Cannot Hear' },

    9:  { id: 9,  ref: '2.1', name: 'If You Think You Know It Well' },
    10: { id: 10, ref: '2.2', name: 'Nor Do I Know That I Know It Not' },
    11: { id: 11, ref: '2.3', name: 'Known to Those Who Know It Not' },
    12: { id: 12, ref: '2.4', name: 'Known in Each Awakening' },
    13: { id: 13, ref: '2.5', name: 'Here, If One Knows — If Not, Vast Is the Loss' },

    14: { id: 14, ref: '3.1',  name: 'The Gods Win a Victory — Not Theirs' },
    15: { id: 15, ref: '3.2',  name: 'A Spirit They Could Not Recognize' },
    16: { id: 16, ref: '3.3',  name: '"Agni, Find Out What That Is"' },
    17: { id: 17, ref: '3.4',  name: '"I Am Fire, Knower of All"' },
    18: { id: 18, ref: '3.5',  name: '"Then Burn This Blade of Grass"' },
    19: { id: 19, ref: '3.6',  name: 'He Could Not Burn It' },
    20: { id: 20, ref: '3.7',  name: 'Vayu, the All-Pervading, Tries' },
    21: { id: 21, ref: '3.8',  name: '"I Can Carry Off Anything"' },
    22: { id: 22, ref: '3.9',  name: 'He Could Not Move a Straw' },
    23: { id: 23, ref: '3.10', name: 'Indra Approaches — It Vanishes' },
    24: { id: 24, ref: '3.11', name: 'In That Very Sky: a Radiant Woman' },
    25: { id: 25, ref: '3.12', name: '"It Was Brahman"' },

    26: { id: 26, ref: '4.1', name: 'Uma Names the Nameless' },
    27: { id: 27, ref: '4.2', name: 'Why These Three Surpass the Gods' },
    28: { id: 28, ref: '4.3', name: 'Indra, First to Come Near' },
    29: { id: 29, ref: '4.4', name: 'Like a Flash of Lightning' },
    30: { id: 30, ref: '4.5', name: 'The Mind\'s Momentary Glimpse' },
    31: { id: 31, ref: '4.6', name: 'Tadvanam — the Adorable' },
    32: { id: 32, ref: '4.7', name: '"Teach Me the Upanishad" — "It Has Been Told"' },
    33: { id: 33, ref: '4.8', name: 'Its Feet: Austerity, Restraint, Work' },
    34: { id: 34, ref: '4.9', name: 'Who Knows This Stands Unshaken' }
  }
};
