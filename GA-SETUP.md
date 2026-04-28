# Google Analytics Setup

## Important — Replace the placeholder with your real ID

All 4 HTML files (`index.html`, `quiz.html`, `quizzes.html`, `coming-soon.html`)
contain a Google Analytics snippet near the bottom of the `<head>` section.

The snippet uses `G-70BM48WVYR` as a placeholder. You need to replace this
with YOUR actual Measurement ID (also starts with `G-`).

## How to replace

Use VS Code's "Find & Replace Across Files" feature:

1. In VS Code, press: `Cmd + Shift + H` (or `Cmd + Shift + F` then click the
   replace toggle)
2. In the "Search" box, type: `G-70BM48WVYR`
3. In the "Replace" box, type your real Measurement ID (e.g. `G-AB12CD34EF`)
4. Click "Replace All"
5. Verify all 4 HTML files show the change

## How to verify it's working

1. Deploy the updated files to Vercel
2. Visit your live site at https://beyondoutcomes.in
3. Open Google Analytics → Reports → Realtime
4. You should see "1 user" appear within 30 seconds (you visiting your own site)

## Where the snippet lives

In each HTML file, look just before `</head>`. You'll see:

```html
<!-- Google Analytics 4 — Replace G-70BM48WVYR with your Measurement ID -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-70BM48WVYR"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-70BM48WVYR');
</script>
```

## Note

Each page has TWO instances of `G-70BM48WVYR` to replace:
- One in the script src URL
- One in the gtag('config', '...') call

Find & Replace All catches both at once.
