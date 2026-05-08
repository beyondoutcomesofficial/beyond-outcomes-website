# Beyond Outcomes Website — v2.0

Timeless Gita Wisdom for Modern Life. Multi-quiz architecture, AI-powered results, and a coming-soon system for unreleased features.

## What's New in v2.0

- **Quizzes hub** at `quizzes.html` — a card grid showing all available quizzes
- **Generic quiz template** — `quiz.html?q={quiz-id}` loads any quiz dynamically
- **Two live quizzes**: Guna (Sattva/Rajas/Tamas) and Karma Yoga (Nishkama/Sakama/Inert/Compulsive)
- **Three placeholder quizzes**: Desire, Fear, Pandava archetypes (shown as "Coming Soon" cards)
- **Coming-soon page** at `coming-soon.html?feature={nlp|newsletter|groups}` with email waitlist
- **Larger fonts** (17px base, all sizes scaled up)

## Project Structure

```
beyond-outcomes-website/
├── index.html              ← Home / landing page
├── quizzes.html            ← Quiz hub (lists all quizzes as cards)
├── quiz.html               ← Generic quiz template (use ?q=guna or ?q=karma-yoga)
├── coming-soon.html        ← Waitlist page (use ?feature=nlp etc.)
├── css/
│   ├── beyond-outcomes.css ← Brand design tokens (master)
│   └── quiz.css            ← Quiz UI styles
├── js/
│   ├── quizzes-index.js    ← Master list of all quizzes (hub uses this)
│   ├── quiz-shared.js      ← Shared quiz logic (used by every quiz)
│   └── quizzes/
│       ├── guna.js         ← Guna quiz data (questions + reflections)
│       └── karma-yoga.js   ← Karma Yoga quiz data
├── api/
│   └── reflect.js          ← Vercel serverless function (AI backend)
├── package.json
└── README.md
```

## How It Works

### Adding a New Quiz (the architecture pays off here)

1. Copy `js/quizzes/guna.js` to `js/quizzes/your-new-quiz.js`
2. Edit the file: change the `id`, meta info, questions, categories, and `staticReflections`
3. Add an entry to `js/quizzes-index.js` with `status: 'live'`
4. Done. The hub will auto-show it, and `quiz.html?q=your-new-quiz` will work.

### URL Patterns
- `/` or `/index.html` — homepage
- `/quizzes.html` — quiz library
- `/quiz.html?q=guna` — Guna quiz
- `/quiz.html?q=karma-yoga` — Karma Yoga quiz
- `/coming-soon.html?feature=nlp` — NLP waitlist
- `/coming-soon.html?feature=newsletter` — Newsletter waitlist
- `/coming-soon.html?feature=groups` — Group programs waitlist

## Local Testing

### Quick test (no AI, static reflections work)
1. Right-click `index.html` in Finder → Open With → Safari/Chrome

### With local server (recommended)
1. Open Terminal, `cd` into this folder
2. Run: `python3 -m http.server 8000`
3. Open browser to `http://localhost:8000`

### Full test with AI (requires Vercel CLI)
1. Install Node.js from https://nodejs.org
2. `npm install -g vercel`
3. Get a Gemini API key from https://aistudio.google.com/app/apikey
4. Create `.env.local` in this folder:
   ```
   GEMINI_API_KEY=your-gemini-key-here
   ```
5. Run: `vercel dev`
6. Open `http://localhost:3000`

## Deploying to the Internet (Free)

1. Create accounts: GitHub + Vercel (free)
2. Upload this folder to a new GitHub repo
3. In Vercel: "Add New Project" → import the repo
4. Add environment variable: `GEMINI_API_KEY` = your key
5. Deploy

Site goes live at `your-project.vercel.app` in 60 seconds.

## Brand Reuse

`css/beyond-outcomes.css` is your master brand file. Drop it into ANY future Beyond Outcomes project. Use utility classes like `.bo-title-hero`, `.bo-btn-primary`, `.bo-card` — everything stays on-brand automatically.

---

Built for Satya · Beyond Outcomes · Chennai, India
