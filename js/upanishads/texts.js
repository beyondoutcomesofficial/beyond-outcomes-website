// Master list of Upanishad texts — the "seasons" of the Upanishads track.
// upanishads/index.html renders the text cards from this;
// text.html and verse.html use it for meta, episodes and navigation.
//
// Each text:
//   id          — slug used in URLs (text.html?u=isha, verse.html?u=isha&v=1)
//   status      — 'live' | 'coming-soon'
//   verses      — total verse count (verse pages are 1..verses)
//   episodes    — long-form video map. One episode covers a verse RANGE.
//                 youtube: null until the video ships, then { id: 'VIDEOID', title: '...' }
//   invocation  — shanti mantra shown on the text page

// Episode 0 — the channel-level launch video for the whole track.
// Featured on upanishads/index.html. Set youtube: { id: 'VIDEOID' } when it ships.
window.UPANISHAD_EPISODE_ZERO = {
  title: 'Why Study 3,000-Year-Old Texts in the Age of AI?',
  description: 'The case for this whole journey in one sitting — what the Upanishads are, when they were born, why they speak to this exact moment, and where we are going together.',
  duration: '~13 min',
  youtube: null
};

window.UPANISHAD_TEXTS = [
  {
    id: 'isha',
    season: 1,
    status: 'live',
    sanskrit: 'Īśāvāsya Upaniṣad',
    name: 'Isha Upanishad',
    meaning: 'Wrapped in the Lord',
    veda: 'Shukla Yajur Veda',
    verses: 18,
    tagline: 'Eighteen verses. The whole worldview in miniature.',
    summary: 'The shortest of the principal Upanishads — and the one Gandhi said could stand for all of Hindu scripture if everything else were lost. In eighteen verses it takes up the largest questions a person can ask: how to live in a world you do not own, how to act for a hundred years without being bound by a single act, and how knowledge itself can become a subtler form of darkness. It opens with a renunciation that is not withdrawal but the secret of enjoyment — "enjoy through letting go" — and closes with a dying person\'s prayer as the golden lid over truth is asked to open. Everything the Bhagavad Gita later teaches in seven hundred verses is compressed here, waiting.',
    themes: ['Ownership', 'Action Without Bondage', 'The Self', 'Knowledge & Ignorance', 'Death & the Deathless'],
    invocation: {
      devanagari: 'ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते ॥\nॐ शान्तिः शान्तिः शान्तिः ॥',
      transliteration: 'oṁ pūrṇam adaḥ pūrṇam idaṁ pūrṇāt pūrṇam udacyate\npūrṇasya pūrṇam ādāya pūrṇam evāvaśiṣyate\noṁ śāntiḥ śāntiḥ śāntiḥ',
      translation: 'That is whole; this is whole. From the whole, the whole arises. When the whole is taken from the whole, the whole alone remains. Om, peace, peace, peace.'
    },
    episodes: [
      { id: 1, title: "The Owner's Illusion",                  from: 1,  to: 3,  youtube: null },
      { id: 2, title: 'The Self That Moves and Moves Not',     from: 4,  to: 8,  youtube: null },
      { id: 3, title: 'The Paradox of Knowing',                from: 9,  to: 14, youtube: null },
      { id: 4, title: "The Golden Lid — a Dying Man's Prayer", from: 15, to: 18, youtube: null }
    ]
  },
  {
    id: 'katha',
    season: 2,
    status: 'open',
    sanskrit: 'Kaṭha Upaniṣad',
    name: 'Katha Upanishad',
    meaning: 'The Story Upanishad',
    veda: 'Krishna Yajur Veda',
    verses: 119,
    tagline: 'A teenager interviews Death — and Death tries to change the subject.',
    summary: 'The story season. Nachiketa, a boy who calls out his father\'s hollow ritualism, is sent in anger to the house of Death. Death, embarrassed at keeping a young guest waiting three nights, offers him three boons — and the third one is the question Death himself does not want to answer: what happens to a person after they die? Death offers wealth, long life, kingdoms, pleasures. The boy refuses them all: "keep your chariots; will any of it last?" What follows is the tradition\'s deepest teaching on death, desire, and the choice between the pleasant and the good — and the source of the chariot metaphor and of several of the Gita\'s most famous verses.',
    themes: ['Death', 'Preyas vs Shreyas', 'The Chariot', 'Desire', 'The Unborn Self'],
    invocation: {
      devanagari: 'ॐ सह नाववतु । सह नौ भुनक्तु ।\nसह वीर्यं करवावहै ।\nतेजस्वि नावधीतमस्तु मा विद्विषावहै ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
      transliteration: 'oṁ saha nāv avatu, saha nau bhunaktu\nsaha vīryaṁ karavāvahai\ntejasvi nāv adhītam astu mā vidviṣāvahai\noṁ śāntiḥ śāntiḥ śāntiḥ',
      translation: 'May we both be protected. May we both be nourished. May we work together with vigor. May what we study be luminous — and may we never resent each other. Om, peace, peace, peace. (A prayer for student and teacher — spoken before every lesson.)'
    },
    episodes: [
      { id: 1, title: 'The Boy Who Called Out His Father',        from: 1,   to: 29,  youtube: null },
      { id: 2, title: "Death's Test — the Pleasant or the Good",  from: 30,  to: 54,  youtube: null },
      { id: 3, title: 'The Chariot',                              from: 55,  to: 71,  youtube: null },
      { id: 4, title: "The Razor's Edge, Turned Inward",          from: 72,  to: 86,  youtube: null },
      { id: 5, title: 'The City of Eleven Gates',                 from: 87,  to: 101, youtube: null },
      { id: 6, title: 'The Tree With Its Roots in Heaven',        from: 102, to: 119, youtube: null }
    ]
  },
  {
    id: 'kena',
    season: 3,
    status: 'open',
    sanskrit: 'Kena Upaniṣad',
    name: 'Kena Upanishad',
    meaning: 'By Whom?',
    veda: 'Sama Veda',
    verses: 34,
    tagline: 'By whom commanded does the mind alight on its objects?',
    summary: 'The attention season. Kena opens with the question behind every distracted hour of modern life: who — or what — directs the mind? What sees through the eye that the eye cannot see? The text answers in riddles on purpose: "it is other than the known, and beyond the unknown." Then it tells a story — the gods, drunk on a victory that was never theirs, are humbled by a spirit they cannot identify. A text for an age in which everyone is bidding for your attention and almost no one asks where it comes from.',
    themes: ['Attention', 'The Knower', 'Humility', 'The Limits of Knowledge'],
    invocation: {
      devanagari: 'ॐ आप्यायन्तु ममाङ्गानि वाक्प्राणश्चक्षुः श्रोत्रमथो बलमिन्द्रियाणि च सर्वाणि ।\nसर्वं ब्रह्मौपनिषदं माहं ब्रह्म निराकुर्यां मा मा ब्रह्म निराकरोत् ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
      transliteration: 'oṁ āpyāyantu mamāṅgāni vāk prāṇaś cakṣuḥ śrotram atho balam indriyāṇi ca sarvāṇi\nsarvaṁ brahmaupaniṣadaṁ māhaṁ brahma nirākuryāṁ mā mā brahma nirākarot\noṁ śāntiḥ śāntiḥ śāntiḥ',
      translation: 'May my limbs grow strong — speech, breath, eye, ear, and every power. All is the Brahman of the Upanishads. May I never deny Brahman; may Brahman never deny me. Om, peace, peace, peace.'
    },
    episodes: [
      { id: 1, title: 'By Whom? — the Opening Question',       from: 1,  to: 8,  youtube: null },
      { id: 2, title: 'Beyond Knowing and Not-Knowing',        from: 9,  to: 13, youtube: null },
      { id: 3, title: 'The Spirit the Gods Could Not Name',    from: 14, to: 25, youtube: null },
      { id: 4, title: 'The Lightning Flash',                   from: 26, to: 34, youtube: null }
    ]
  },
  {
    id: 'mandukya',
    season: 4,
    status: 'open',
    sanskrit: 'Māṇḍūkya Upaniṣad',
    name: 'Mandukya Upanishad',
    meaning: 'The Frog Sage\'s Teaching',
    veda: 'Atharva Veda',
    verses: 12,
    tagline: 'Twelve verses on waking, dreaming, deep sleep — and the one who watches all three.',
    summary: 'The consciousness season. The shortest Upanishad of all — twelve verses — and by tradition the most complete: "Mandukya alone is enough for the seeker of liberation." It maps the entire territory of experience into four quarters: waking, dreaming, dreamless sleep, and turiya — the fourth, the pure awareness in which the other three appear. It is the text modern consciousness research keeps circling back to, and the deepest reading ever given of a single syllable: Om.',
    themes: ['Consciousness', 'The Four States', 'Om', 'The Witness'],
    invocation: {
      devanagari: 'ॐ भद्रं कर्णेभिः शृणुयाम देवाः । भद्रं पश्येमाक्षभिर्यजत्राः ।\nस्थिरैरङ्गैस्तुष्टुवांसस्तनूभिः । व्यशेम देवहितं यदायुः ।\nॐ शान्तिः शान्तिः शान्तिः ॥',
      transliteration: 'oṁ bhadraṁ karṇebhiḥ śṛṇuyāma devāḥ, bhadraṁ paśyemākṣabhir yajatrāḥ\nsthirair aṅgais tuṣṭuvāṁsas tanūbhiḥ, vyaśema devahitaṁ yad āyuḥ\noṁ śāntiḥ śāntiḥ śāntiḥ',
      translation: 'May we hear what is auspicious. May we see what is auspicious. With steady limbs and bodies may we live out the full span given to us. Om, peace, peace, peace.'
    },
    episodes: [
      { id: 1, title: 'One Syllable, Everything',                          from: 1, to: 2,  youtube: null },
      { id: 2, title: 'Waking, Dreaming, Deep Sleep — and the Fourth',     from: 3, to: 7,  youtube: null },
      { id: 3, title: 'A · U · M',                                         from: 8, to: 12, youtube: null }
    ]
  }
];
