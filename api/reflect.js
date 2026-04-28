// api/reflect.js

export default async function handler(req, res) {
  // ✅ Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // ✅ DO NOT JSON.parse — Vercel already parses it
    const { input } = req.body;

    if (!input || typeof input !== "string") {
      return res.status(400).json({ error: "Invalid input" });
    }

    // ✅ Check API key
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.warn("⚠️ GEMINI_API_KEY missing — using fallback");

      return res.status(200).json({
        reply:
          "Pause for a moment. Notice what you're feeling right now. That itself is the beginning of clarity."
      });
    }

    // ✅ Call Gemini API (REST — stable, no SDK issues)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a calm, insightful guide inspired by the Bhagavad Gita.

User reflection:
"${input}"

Respond with a short, clear, introspective insight (2–4 sentences max).
No fluff. No jargon. Just clarity.`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // ✅ Safe extraction (Gemini responses can vary)
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Observe the pattern behind your thoughts. That awareness itself creates distance.";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Reflection error:", error);

    // ✅ Never break UI
    return res.status(200).json({
      reply:
        "Something interrupted the flow. Take a breath and return to the question — what is this moment asking of you?"
    });
  }
}
