// Vercel Serverless Function — POST /api/reflect
// Generates personalized AI reflection using Google Gemini API
// Requires environment variable: GEMINI_API_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { quizId, answers, questions, percentages, dom } = req.body;

    const summary = questions.map((q, i) => `Q: ${q.text}\nA: ${q.options[answers[i]]} [${q.tags[answers[i]]}]`).join('\n\n');
    const pctsStr = Object.entries(percentages).map(([k, v]) => `${k}: ${v}%`).join(', ');

    const quizContext = quizId === 'karma-yoga'
      ? 'This is a Karma Yoga quiz from Bhagavad Gita Chapter 3. The categories are: nishkama (selfless action), sakama (desire-driven action), inert (reluctant action), compulsive (restless action).'
      : 'This is a Guna quiz from Bhagavad Gita Chapter 14. The categories are Sattva (clarity, harmony), Rajas (passion, restlessness), Tamas (inertia, heaviness).';

    // Simplified prompt asking for pure JSON output
    const prompt = `You are a wise Bhagavad Gita teacher. ${quizContext}

Quiz results:
${summary}

Scores: ${pctsStr}
Dominant: ${dom}

Create a personalized reflection. Return ONLY a valid JSON object with these exact keys (no markdown, no code blocks, no preamble):

{
  "dominant": "English name",
  "dominantHi": "Hindi name in Devanagari",
  "subtitle": "poetic 6-8 word English description",
  "subtitleHi": "Hindi translation",
  "reflection": "3-4 paragraphs in English, 180-220 words total, warm and personalized to their specific answers",
  "reflectionHi": "natural Hindi translation in Devanagari",
  "shloka": "Sanskrit transliteration of a relevant BG verse",
  "shlokaHi": "Devanagari script",
  "shlokaRef": "e.g. BG 14.6",
  "shlokaMeaning": "poetic English translation, 20-30 words",
  "shlokaMeaningHi": "Hindi translation"
}

Return ONLY the JSON object. No other text.`;

    const geminiResp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
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
      console.error('Gemini API error:', geminiResp.status, errText);
      return res.status(500).json({ error: 'AI service error' });
    }

    const data = await geminiResp.json();
    let raw = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    if (!raw) {
      console.error('Empty Gemini response:', JSON.stringify(data));
      return res.status(500).json({ error: 'Empty AI response' });
    }

    // Clean the response - remove markdown code blocks if present
    raw = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
    
    // Remove any leading/trailing non-JSON text
    const jsonStart = raw.indexOf('{');
    const jsonEnd = raw.lastIndexOf('}');
    if (jsonStart !== -1 && jsonEnd !== -1) {
      raw = raw.substring(jsonStart, jsonEnd + 1);
    }

    // Parse and validate
    const parsed = JSON.parse(raw);
    
    // Basic validation - ensure required fields exist
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
