// Vercel Serverless Function — POST /api/reflect
// Generates personalized AI reflection using Google Gemini API
// Requires environment variable: GEMINI_API_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const { quizId, answers, questions, percentages, dom } = req.body;

    const summary = questions.map((q, i) => `Q: ${q.text}\nA: ${q.options[answers[i]]} [${q.tags[answers[i]]}]`).join('\n\n');
    const pctsStr = Object.entries(percentages).map(([k, v]) => `${k}: ${v}%`).join(', ');

    const quizContext = quizId === 'karma-yoga'
      ? 'This is a Karma Yoga quiz from Bhagavad Gita Chapter 3. The categories are: nishkama (selfless action), sakama (desire-driven action), inert (reluctant action), compulsive (restless action).'
      : 'This is a Guna quiz from Bhagavad Gita Chapter 14. The categories are Sattva (clarity, harmony), Rajas (passion, restlessness), Tamas (inertia, heaviness).';

    const prompt = `You are a wise teacher of the Bhagavad Gita. ${quizContext}

Quiz answers:
${summary}

Scores: ${pctsStr}
Dominant: ${dom}

Return ONLY valid JSON (no markdown code blocks, no preamble, just the raw JSON object) with these exact keys:
{"dominant":"English name","dominantHi":"Hindi name in Devanagari","subtitle":"poetic 6-8 word English description","subtitleHi":"Hindi","reflection":"3-4 paragraphs English, 180-220 words, warm, personalized to their answers","reflectionHi":"natural Hindi translation in Devanagari","shloka":"Sanskrit transliteration of relevant BG verse","shlokaHi":"Devanagari script","shlokaRef":"e.g. BG 14.6","shlokaMeaning":"poetic English 20-30 words","shlokaMeaningHi":"Hindi"}`;

    const geminiResp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 2000,
            responseMimeType: 'application/json'
          }
        })
      }
    );

    if (!geminiResp.ok) {
      const errText = await geminiResp.text();
      console.error('Gemini API error:', errText);
      return res.status(500).json({ error: 'AI service error' });
    }

    const data = await geminiResp.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    if (!raw) {
      console.error('Empty Gemini response:', JSON.stringify(data));
      return res.status(500).json({ error: 'Empty AI response' });
    }

    return res.status(200).json(JSON.parse(raw.replace(/```json|```/g, '').trim()));
  } catch (e) {
    console.error('Reflection error:', e);
    return res.status(500).json({ error: e.message });
  }
}
