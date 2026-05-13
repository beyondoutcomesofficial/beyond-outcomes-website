// Vercel Serverless Function — POST /api/subscribe
// Adds a subscriber to Brevo and sends a transactional result email
// Requires environment variables:
//   BREVO_API_KEY      — your Brevo API key (starts with xkeysib-)
//   BREVO_LIST_ID      — the numeric list ID from Brevo
//   BREVO_TEMPLATE_ID  — the numeric ID of the quiz result email template in Brevo

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  const templateId = process.env.BREVO_TEMPLATE_ID;

  if (!apiKey || !listId) {
    return res.status(500).json({ error: 'Brevo not configured' });
  }

  try {
    const { email, source, quizTitle, dominant, subtitle, reflection, shloka, shlokaRef, shlokaMeaning } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    const validSources = ['quiz-taker', 'nlp-waitlist', 'newsletter-waitlist', 'groups-waitlist'];
    const sourceTag = validSources.includes(source) ? source : 'unknown';

    // Add contact to Brevo list
    const brevoResp = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email: email.toLowerCase().trim(),
        attributes: { SOURCE_TAG: sourceTag },
        listIds: [parseInt(listId, 10)],
        updateEnabled: true
      })
    });

    // Brevo returns 204 No Content (empty body) when updating an existing contact
    const data = brevoResp.status === 204 ? {} : await brevoResp.json();

    if (!brevoResp.ok && data.code !== 'duplicate_parameter') {
      console.error('Brevo contact error:', data);
      return res.status(500).json({ error: 'Subscription service error' });
    }

    // Send transactional result email if template is configured and result data is present
    if (templateId && dominant) {
      const emailResp = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': apiKey,
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          to: [{ email: email.toLowerCase().trim() }],
          templateId: parseInt(templateId, 10),
          params: {
            QUIZ_TITLE: quizTitle || 'Self-Inquiry',
            DOMINANT: dominant || '',
            SUBTITLE: subtitle || '',
            REFLECTION: reflection || '',
            SHLOKA: shloka || '',
            SHLOKA_REF: shlokaRef || '',
            SHLOKA_MEANING: shlokaMeaning || ''
          }
        })
      });

      if (!emailResp.ok) {
        const emailErr = await emailResp.json();
        console.error('Brevo transactional error:', emailErr);
        // Still return success — contact was saved, email failure is non-critical
      }
    }

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Subscribe error:', e);
    return res.status(500).json({ error: e.message });
  }
}
