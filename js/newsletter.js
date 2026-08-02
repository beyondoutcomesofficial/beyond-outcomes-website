// Reusable newsletter / stay-connected capture widget.
// Drop <div class="bo-newsletter"></div> onto any page and include this script.
// Auto-detects the page theme (daylight / dawn / night) for readable contrast,
// and POSTs to the existing /api/subscribe endpoint (source: newsletter-waitlist).
// Optional data attributes on the div: data-title, data-sub, data-source.
(function () {
  var STYLE_ID = 'bo-newsletter-style';

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var css = [
      '.bo-nl{max-width:620px;margin:2.4rem auto 0;border-radius:14px;padding:1.7rem 1.8rem;text-align:center;',
        'border:1px solid rgba(201,168,76,0.45);background:linear-gradient(150deg,rgba(201,168,76,0.10),rgba(201,168,76,0.03));}',
      '.bo-nl-label{font-family:var(--bo-font-ui,sans-serif);font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#c9a84c;margin-bottom:0.6rem;}',
      '.bo-nl-title{font-family:var(--bo-font-display,Georgia,serif);font-size:1.35rem;line-height:1.25;margin-bottom:0.5rem;}',
      '.bo-nl-sub{font-family:var(--bo-font-body,Georgia,serif);font-style:italic;font-size:1.02rem;line-height:1.65;margin-bottom:1.15rem;}',
      '.bo-nl-row{display:flex;gap:8px;max-width:420px;margin:0 auto;flex-wrap:wrap;justify-content:center;}',
      '.bo-nl-input{flex:1;min-width:180px;padding:0.8rem 1rem;border-radius:8px;font-family:var(--bo-font-body,Georgia,serif);',
        'font-size:1rem;border:1px solid rgba(201,168,76,0.5);background:rgba(255,255,255,0.06);outline:none;}',
      '.bo-nl-input:focus{border-color:#c9a84c;}',
      '.bo-nl-btn{padding:0.8rem 1.5rem;border-radius:8px;border:none;cursor:pointer;white-space:nowrap;',
        'font-family:var(--bo-font-ui,sans-serif);font-size:12px;letter-spacing:0.14em;text-transform:uppercase;',
        'background:linear-gradient(135deg,#d9b463,#a07830);color:#2a1c05;font-weight:600;transition:opacity .2s;}',
      '.bo-nl-btn:hover{opacity:0.88;}',
      '.bo-nl-msg{margin-top:0.85rem;font-family:var(--bo-font-body,Georgia,serif);font-size:0.98rem;display:none;}',
      // dark themes: light text
      '.bo-nl.nl-dark .bo-nl-title{color:#fff3d6;} .bo-nl.nl-dark .bo-nl-sub{color:rgba(240,225,200,0.85);}',
      '.bo-nl.nl-dark .bo-nl-input{color:#fff;background:rgba(255,255,255,0.08);}',
      '.bo-nl.nl-dark .bo-nl-input::placeholder{color:rgba(255,240,210,0.5);}',
      // light theme: dark ink
      '.bo-nl.nl-light .bo-nl-title{color:#3a2505;} .bo-nl.nl-light .bo-nl-sub{color:#7a5a1e;}',
      '.bo-nl.nl-light .bo-nl-input{color:#3a2505;background:rgba(255,255,255,0.6);}',
      '.bo-nl.nl-light .bo-nl-input::placeholder{color:#b08a4a;}'
    ].join('');
    var el = document.createElement('style');
    el.id = STYLE_ID; el.textContent = css;
    document.head.appendChild(el);
  }

  function isDark() {
    var c = document.body.className || '';
    return /\bvd-body\b|\bup-body\b|\bdark\b/.test(c);
  }

  function render(host) {
    var title = host.getAttribute('data-title') || 'Walk upstream with us';
    var sub = host.getAttribute('data-sub') ||
      'Beyond Outcomes is being built slowly, in the open. Leave your email for the occasional reflection — and first word when the long-form video series begins.';
    var source = host.getAttribute('data-source') || 'newsletter-waitlist';

    host.className = 'bo-nl ' + (isDark() ? 'nl-dark' : 'nl-light');
    host.innerHTML =
      '<div class="bo-nl-label">Stay on the path</div>' +
      '<div class="bo-nl-title">' + title + '</div>' +
      '<div class="bo-nl-sub">' + sub + '</div>' +
      '<div class="bo-nl-row">' +
        '<input class="bo-nl-input" type="email" placeholder="your@email.com" aria-label="Email address">' +
        '<button class="bo-nl-btn" type="button">Subscribe</button>' +
      '</div>' +
      '<div class="bo-nl-msg"></div>';

    var input = host.querySelector('.bo-nl-input');
    var btn = host.querySelector('.bo-nl-btn');
    var msg = host.querySelector('.bo-nl-msg');

    function show(text, ok) {
      msg.textContent = text;
      msg.style.color = ok ? '#4c9a6c' : '#c26a5a';
      msg.style.display = 'block';
    }

    async function submit() {
      var v = (input.value || '').trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { show('Please enter a valid email address.', false); return; }
      btn.disabled = true; btn.style.opacity = '0.6';
      try {
        var resp = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: v, source: source })
        });
        if (!resp.ok) throw new Error('failed');
        show('✓ You’re on the list. Thank you — walk well.', true);
        input.value = '';
        if (typeof gtag === 'function') gtag('event', 'email_submitted', { source: source });
      } catch (e) {
        show('Something went wrong. Please try again.', false);
      } finally {
        btn.disabled = false; btn.style.opacity = '1';
      }
    }

    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });
  }

  function init() {
    var hosts = document.querySelectorAll('.bo-newsletter');
    if (!hosts.length) return;
    injectStyle();
    hosts.forEach(render);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
