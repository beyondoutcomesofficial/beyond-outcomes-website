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
      'svadharma': 'This is a svadharma (essential nature) quiz from Bhagavad Gita Chapter 18. The categories are: seeker (the Brahmanic nature — wisdom, inquiry, teaching), warrior (the Kshatriya nature — courage, duty, leadership), builder (the Vaishya nature — enterprise, creativity, abundance), server (the service nature — devotion, care, nurturing).',
      'stress': 'This is a stress pattern quiz rooted in Bhagavad Gita Chapter 2, specifically Arjuna\'s crisis (verses 1.28-2.10) and the description of the Sthitaprajna (2.54-72). The categories are: reactive (the Fighter — stress that ignites outward through action, control, confrontation; connected to the Rajasic stress response), withdrawn (the Retreater — stress that turns inward through silence, avoidance, and withdrawal; connected to the Tamasic stress response), steady (the Witness — stress met with equanimity and presence; the Sthitaprajna of the Gita). Personalize the reflection to the specific answers, noting whether their reactivity or withdrawal is mild or intense, and what their dominant stress experience feels like in the body and mind. For steady types, affirm the quality while pointing toward deeper service.',
      'locus': 'This is a locus of control quiz rooted in Bhagavad Gita Chapter 3 (Karma Yoga) and Chapter 18 (surrender of results). The categories are: internal (strong personal agency — believes effort and choice determine outcomes; can shade into excessive self-blame), external (believes circumstances, others, or fate control outcomes — can be helplessness or genuine surrender, the difference matters enormously), surrendered (the Gita\'s unique third position — full ownership of action combined with complete non-attachment to results; Nishkama Karma; the rarest and most mature pattern). Personalize the reflection to draw out whether their internal or external locus is serving or limiting them, and point toward the surrendered position as the Gita\'s resolution.',
      'bias': 'This is a cognitive bias quiz rooted in Bhagavad Gita Chapter 3 verses 38-39 — the teaching on how desire and delusion veil knowledge (maya). The categories are: pattern_seeker (confirmation bias and pattern-matching — sees what they expect to see, filters contradictory evidence; very common in intelligent, analytically-oriented minds), story_teller (attribution bias and narrative bias — explains events through stories about self and others that feel true but may be constructed; assigns motives and meanings), loss_avoider (loss aversion and sunk cost thinking — feels losses more sharply than gains, holds on past the point of wisdom, motivated more by avoiding loss than gaining something new). Personalize the reflection to the specific blind spot pattern, name it clearly but warmly, show how it formed, and point toward the Gita\'s invitation to see more clearly.',
      'belief': 'This is a limiting beliefs quiz rooted in Bhagavad Gita Chapter 1 — Arjuna\'s collapse driven entirely by beliefs (not facts) about himself, others, and what is possible. The categories are: self_doubt (limiting beliefs about the self — "I am not enough, not capable, not deserving"; the deepest and most painful category, often developed early and mistaken for facts), world_view (limiting beliefs about how the world works — "people cannot be trusted, it is not safe to be visible, life is fundamentally unfair"; beliefs about the external environment), possibility (limiting beliefs about what is achievable — "it is too late, people like me do not get to have that, I have tried before and it never works"; beliefs that close off futures before they are explored). Give the reflection extra depth — this is the core of NLP work. Show how the belief formed, why it once made sense, and point toward Krishna\'s dismantling of Arjuna\'s limiting beliefs as the template.',
      'decision': 'This is a decision-making style quiz rooted in Bhagavad Gita Chapter 18, specifically the description of three types of intellect (buddhi) corresponding to the three Gunas. The categories are: deliberate (Sattvic buddhi — decides from clarity and discernment, weighs carefully, acts wisely; can over-think; BG 18.30), impulsive (Rajasic buddhi — decides from desire, ambition, and momentum; fast and sometimes brilliant, sometimes costly; regret is not a stranger but neither is courage; BG 18.31), avoidant (Tamasic buddhi — decisions feel heavy or dangerous, tends to defer or let situations decide themselves, the unlived decision accumulates; BG 18.32). Be honest about both the gift and shadow of each style. The impulsive person has courage. The avoidant person is often protecting something real. Personalize to their specific decision patterns.'
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
