// Vercel Serverless Function — POST /api/feedback
// Forwards user feedback to krishna@beyondoutcomes.in via Brevo
// Sends a confirmation email to the user
// Requires environment variable: BREVO_API_KEY

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'Brevo not configured' });

  try {
    const { email, message } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    if (!message || message.trim().length < 10) {
      return res.status(400).json({ error: 'Message too short' });
    }

    const trimmedMessage = message.trim().slice(0, 5000);

    // Send feedback to krishna@beyondoutcomes.in
    const notifyResp = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'Beyond Outcomes Feedback', email: 'krishna@beyondoutcomes.in' },
        to: [{ email: 'krishna@beyondoutcomes.in', name: 'Krishna' }],
        replyTo: { email: email.toLowerCase().trim() },
        subject: 'New Feedback — Beyond Outcomes',
        htmlContent: `<p><strong>From:</strong> ${email.toLowerCase().trim()}</p><p><strong>Message:</strong></p><p style="white-space:pre-wrap;">${trimmedMessage.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>`
      })
    });

    if (!notifyResp.ok) {
      const err = await notifyResp.json();
      console.error('Brevo notify error:', err);
      return res.status(500).json({ error: 'Could not send feedback' });
    }

    // Send confirmation to user
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: 'Beyond Outcomes', email: 'krishna@beyondoutcomes.in' },
        to: [{ email: email.toLowerCase().trim() }],
        subject: 'We received your feedback — Beyond Outcomes',
        htmlContent: `<p style="font-family: Georgia, serif; color: #3a2505; font-size: 16px; line-height: 1.8;">Namaste,</p><p style="font-family: Georgia, serif; color: #3a2505; font-size: 16px; line-height: 1.8;">Thank you for writing to us. We have received your feedback.</p><p style="font-family: Georgia, serif; color: #3a2505; font-size: 16px; line-height: 1.8;">With gratitude,<br>Beyond Outcomes</p>`
      })
    });

    return res.status(200).json({ success: true });
  } catch (e) {
    console.error('Feedback error:', e);
    return res.status(500).json({ error: e.message });
  }
}
