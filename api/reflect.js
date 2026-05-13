// Vercel Serverless Function — POST /api/reflect
// Generates personalized AI reflection using Claude API
// Requires environment variable: ANTHROPIC_API_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('ANTHROPIC_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { quizId, answers, questions, percentages, dom } = req.body;

    const summary = questions.map((q, i) => `Q: ${q.text}\nA: ${q.options[answers[i]]} [${q.tags[answers[i]]}]`).join('\n\n');
    const pctsStr = Object.entries(percentages).map(([k, v]) => `${k}: ${v}%`).join(', ');

    const quizContextMap = {
      'guna': 'This is a Guna quiz from Bhagavad Gita Chapter 14. The categories are: sattva (clarity, harmony, wisdom), rajas (passion, ambition, restlessness), tamas (inertia, heaviness, delusion).',
      'karma-yoga': 'This is a Karma Yoga quiz from Bhagavad Gita Chapter 3. The categories are: nishkama (selfless, desireless action), sakama (desire-driven action seeking reward), inert (reluctant, dragged-along action), compulsive (restless, driven-by-habit action).',
      'desire': 'This is a desire-pattern quiz from Bhagavad Gita Chapter 2. The categories are: driven (consumed by desire, chasing outcomes), conflicted (pulled between wanting and renouncing), detached (cool withdrawal from desire), surrendered (transcended desire through wisdom and surrender).',
      'fear': 'This is a fear-pattern quiz from Bhagavad Gita Chapter 2. The categories are: failure (fear of not achieving or being enough), judgment (fear of others\' opinions and rejection), loss (fear of losing what one holds dear), insignificance (fear of being forgotten or meaningless).',
      'pandava': 'This is a Pandava archetype quiz from the Mahabharata. The categories are: yudhishthira (dharma, righteousness, moral clarity), bhima (raw strength, loyalty, direct action), arjuna (skill, discipline, spiritual quest), nakula (beauty, grace, practical intelligence), sahadeva (wisdom, foresight, quiet knowing).',
      'sthitaprajna': 'This is a Sthitaprajna (steady wisdom) quiz from Bhagavad Gita Chapter 2. The categories are: stirred (easily moved by pleasure, pain, desire, and fear), striving (actively working toward steadiness but still reactive), steady (largely even-minded, only occasionally shaken), established (the Sthitaprajna — fully rooted in the Self, unshaken).',
      'yoga-path': 'This is a yoga path quiz from Bhagavad Gita Chapter 12. The categories are: bhakti (the path of love and devotion), jnana (the path of wisdom and inquiry), karma (the path of selfless action), dhyana (the path of meditation and stillness).',
      'inner-enemy': 'This is an inner-enemy quiz from Bhagavad Gita Chapters 3 and 16. The categories are: kama (the veil of restless craving), krodha (the veil of reactive anger), lobha (the veil of greed and tight-holding), moha (the veil of confusion and delusion).',
      'shraddha': 'This is a shraddha (faith) quiz from Bhagavad Gita Chapter 17. The categories are: sattvic (faith rooted in truth, clarity, and the highest good), rajasic (faith conditioned by desire and outcome), tamasic (faith that is mechanical, dim, or absent).',
      'svadharma': 'This is a svadharma (essential nature) quiz from Bhagavad Gita Chapter 18. The categories are: seeker (the Brahmanic nature — wisdom, inquiry, teaching), warrior (the Kshatriya nature — courage, duty, leadership), builder (the Vaishya nature — enterprise, creativity, abundance), server (the service nature — devotion, care, nurturing).'
    };
    const quizContext = quizContextMap[quizId] || quizContextMap['guna'];

    const prompt = `You are a wise Bhagavad Gita teacher. ${quizContext}

Quiz results:
${summary}

Scores: ${pctsStr}
Dominant: ${dom}

Create a personalized reflection based on their specific answers. Return ONLY a valid JSON object with these exact keys (no markdown, no preamble, no code blocks):

{
  "dominant": "English name of dominant category",
  "dominantHi": "Hindi name in Devanagari",
  "subtitle": "poetic 6-8 word English description",
  "subtitleHi": "Hindi translation",
  "reflection": "3-4 paragraphs in English, 180-220 words total, warm and personalized to their specific quiz answers",
  "reflectionHi": "natural Hindi translation in Devanagari",
  "shloka": "Sanskrit transliteration of a relevant Bhagavad Gita verse",
  "shlokaHi": "Devanagari script of the verse",
  "shlokaRef": "verse reference like BG 14.6",
  "shlokaMeaning": "poetic English translation, 20-30 words",
  "shlokaMeaningHi": "Hindi translation of the meaning"
}

Return ONLY the JSON object. Start with { and end with }. No other text before or after.`;

    const claudeResp = await fetch(
      'https://api.anthropic.com/v1/messages',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 2000,
          messages: [{
            role: 'user',
            content: prompt
          }]
        })
      }
    );

    if (!claudeResp.ok) {
      const errText = await claudeResp.text();
      console.error('Claude API error:', claudeResp.status, errText);
      return res.status(500).json({ error: 'AI service error' });
    }

    const data = await claudeResp.json();
    let raw = data.content?.[0]?.text || '';
    
    if (!raw) {
      console.error('Empty Claude response:', JSON.stringify(data));
      return res.status(500).json({ error: 'Empty AI response' });
    }

    // Clean the response - remove markdown code blocks if present
    raw = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    
    // Find JSON boundaries
    const jsonStart = raw.indexOf('{');
    const jsonEnd = raw.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      raw = raw.substring(jsonStart, jsonEnd + 1);
    }

    // Parse and validate
    const parsed = JSON.parse(raw);
    
    // Basic validation
    const required = ['dominant', 'dominantHi', 'subtitle', 'subtitleHi', 'reflection', 'reflectionHi', 'shloka', 'shlokaHi', 'shlokaRef', 'shlokaMeaning', 'shlokaMeaningHi'];
    for (const field of required) {
      if (!parsed[field]) {
        console.error('Missing field in AI response:', field);
        return res.status(500).json({ error: 'Incomplete AI response' });
      }
    }

    return res.status(200).json(parsed);

  } catch (e) {
    console.error('Reflection error:', e.message, e.stack);
    return res.status(500).json({ error: e.message });
  }
}
