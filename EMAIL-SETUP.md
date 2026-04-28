# Email Capture Setup (Brevo)

Your website forms are now wired up to send subscribers to Brevo automatically.
There are 4 different forms across the site, each tagged with a different source:

| Form Location | Source Tag |
|---|---|
| Quiz results page (any quiz) | `quiz-taker` |
| Coming Soon — NLP page | `nlp-waitlist` |
| Coming Soon — Newsletter page | `newsletter-waitlist` |
| Coming Soon — Groups page | `groups-waitlist` |

All subscribers go into your single Brevo list. The `SOURCE_TAG` attribute
tells you where they signed up, so you can email them targeted content.

## Required Environment Variables on Vercel

Two new environment variables are needed:

| Name | Value |
|---|---|
| `BREVO_API_KEY` | Your Brevo API key (starts with `xkeysib-`) |
| `BREVO_LIST_ID` | Your Brevo list ID (a number, like `2` or `3`) |

These are added in the same place as `GEMINI_API_KEY`:
**Vercel → Project → Settings → Environment Variables → Add**

After adding, Vercel needs to redeploy for the changes to take effect.

## How to Verify It's Working

1. After deploying, visit your site
2. Go to any quiz, finish it, and submit your email at the result page
3. Check Brevo → Contacts → your list
4. Your email should appear with `SOURCE_TAG: quiz-taker`

## Targeting Tagged Subscribers Later

When you want to email just one segment:

1. Brevo → Email Campaigns → Create campaign
2. In recipients, click "Filter contacts"
3. Filter by attribute: `SOURCE_TAG equals nlp-waitlist`
4. Now you're only emailing NLP-interested subscribers

This is how you avoid spamming your whole list with content not relevant to them.
