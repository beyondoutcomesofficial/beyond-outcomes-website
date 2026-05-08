// Vercel Serverless Function — POST /api/subscribe
// Adds a subscriber to your Brevo list with a source tag
// Requires environment variables:
//   BREVO_API_KEY  — your Brevo API key (starts with xkeysib-)
//   BREVO_LIST_ID  — the numeric list ID from Brevo

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Brevo not configured' });
  }

  try {
    const { email, source } = req.body;

    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Map of source codes — used to tag subscribers by where they signed up from
    const validSources = ['quiz-taker', 'nlp-waitlist', 'newsletter-waitlist', 'groups-waitlist'];
    const sourceTag = validSources.includes(source) ? source : 'unknown';

    // Brevo API: create or update contact and add to list
    const brevoResp = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: {
          SOURCE_TAG: sourceTag
        },
        listIds: [parseInt(listId, 10)],
        updateEnabled: true  // If contact already exists, just update them
      })
    });

    const data = await brevoResp.json();

    if (!brevoResp.ok) {
      // Brevo returns "duplicate_parameter" if email already exists in some plans
      // We treat that as success so users don't see errors when re-subscribing
      if (data.code === 'duplicate_parameter') {
        return res.status(200).json({ success: true, message: 'Already subscribed' });
      }
      console.error('Brevo error:', data);
      return res.status(500).json({ error: 'Subscription service error' });
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Subscribe error:', e);
    return res.status(500).json({ error: e.message });
  }
}
