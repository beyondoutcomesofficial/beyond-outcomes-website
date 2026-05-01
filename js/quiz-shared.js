// Shared Quiz Logic — works with any quiz that follows the QUIZ_DATA contract
const UI_LANG = {
  en: { depthLabel: 'Choose the depth of your inquiry', qLabel: 'Questions', d10: 'Focused reflection', d15: 'Deeper inquiry', start: 'Begin the Inquiry', back: 'Back', next: 'Next', seeResult: 'See My Result', question: 'Question', loadingMsgs: ['The Gita contemplates your answers...', 'Reading the pattern within...', 'Weaving your inner portrait...'], loadingSub: 'A moment of patience', yourResult: 'Your dominant pattern', emailTitle: 'Carry this insight with you', emailSub: 'Weekly Gita wisdom tailored to your inner pattern. No noise — only depth.', emailBtn: 'Subscribe', emailSuccess: 'You are now on the path. Check your inbox.', emailError: 'Please enter a valid email.', shareLabel: 'Share your result', waBtn: 'WhatsApp', copyBtn: 'Copy Text', copied: 'Copied to clipboard', retake: 'Retake Quiz', explore: 'More Quizzes ↗' },
  hi: { depthLabel: 'अपनी जिज्ञासा की गहराई चुनें', qLabel: 'प्रश्न', d10: 'केंद्रित चिंतन', d15: 'गहरी जिज्ञासा', start: 'जिज्ञासा आरंभ करें', back: 'वापस', next: 'आगे', seeResult: 'परिणाम देखें', question: 'प्रश्न', loadingMsgs: ['गीता आपके उत्तरों पर विचार कर रही है...', 'भीतर का स्वरूप पढ़ा जा रहा है...'], loadingSub: 'धैर्य का एक क्षण', yourResult: 'आपका प्रमुख स्वरूप', emailTitle: 'इस अंतर्दृष्टि को साथ ले जाएं', emailSub: 'आपके अनुरूप साप्ताहिक गीता ज्ञान।', emailBtn: 'सदस्य बनें', emailSuccess: 'आप मार्ग पर हैं।', emailError: 'कृपया वैध ईमेल दर्ज करें।', shareLabel: 'अपना परिणाम साझा करें', waBtn: 'WhatsApp', copyBtn: 'टेक्स्ट कॉपी', copied: 'क्लिपबोर्ड पर कॉपी', retake: 'पुनः प्रयास', explore: 'और प्रश्नोत्तरी ↗' }
};

let lang = 'en', selectedDepth = 0, currentQ = 0, answers = [], questions = [], resultData = null;
const QD = window.QUIZ_DATA;

function setLang(l) {
  lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', (l === 'en' && b.textContent === 'EN') || (l === 'hi' && b.textContent === 'हिं')));
  applyLang();
}

function applyLang() {
  const ui = UI_LANG[lang], meta = QD.meta[lang];
  const set = (id, val, html = false) => { const el = document.getElementById(id); if (el) { html ? el.innerHTML = val : el.textContent = val; } };
  set('l-title', meta.title, true);
  set('l-chapter', meta.chapter);
  set('l-intro', meta.intro);
  set('l-depth-label', ui.depthLabel);
  set('l-q10', ui.qLabel); set('l-q15', ui.qLabel);
  set('l-d10', ui.d10); set('l-d15', ui.d15);
  document.getElementById('btn-start').textContent = ui.start;
  set('l-back', ui.back);
  set('l-next', currentQ === selectedDepth - 1 ? ui.seeResult : ui.next);
  set('l-loading-sub', ui.loadingSub);
  set('l-your-guna', ui.yourResult);
  set('l-email-title', ui.emailTitle); set('l-email-sub', ui.emailSub); set('l-email-btn', ui.emailBtn);
  set('l-share-label', ui.shareLabel); set('l-wa-btn', ui.waBtn); set('l-copy-btn', ui.copyBtn);
  set('l-retake', ui.retake); set('l-explore', ui.explore);
  // Update category labels in result bars
  const cats = QD.categories;
  cats.forEach((c, i) => {
    const labelEl = document.getElementById('lb-' + i);
    if (labelEl) labelEl.textContent = meta.categoryNames[c];
    const scLabelEl = document.getElementById('sc-lb-' + i);
    if (scLabelEl) scLabelEl.textContent = meta.categoryNames[c];
  });
  if (questions.length > 0) showQ();
  if (resultData) applyResultLang();
}

function applyResultLang() {
  const isHi = lang === 'hi', d = resultData;
  document.getElementById('result-guna').textContent = isHi ? d.dominantHi : d.dominant;
  document.getElementById('result-subtitle').textContent = isHi ? d.subtitleHi : d.subtitle;
  document.getElementById('result-body').textContent = isHi ? d.reflectionHi : d.reflection;
  document.getElementById('shloka-text').textContent = isHi ? d.shlokaHi : d.shloka;
  document.getElementById('shloka-ref-el').textContent = d.shlokaRef || '';
  document.getElementById('shloka-meaning').textContent = isHi ? d.shlokaMeaningHi : d.shlokaMeaning;
  document.getElementById('sc-guna').textContent = isHi ? d.dominantHi : d.dominant;
  document.getElementById('sc-sub').textContent = isHi ? d.subtitleHi : d.subtitle;
  document.getElementById('sc-quote').textContent = ((isHi ? d.shlokaHi : d.shloka) + ' — ' + (d.shlokaRef || '')).trim();
}

function selectDepth(n) {
  selectedDepth = n;
  document.querySelectorAll('.depth-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('depth-' + n).classList.add('selected');
  document.getElementById('btn-start').disabled = false;
}

function startQuiz() {
  questions = [...QD.questions[lang] || QD.questions.en].sort(() => Math.random() - 0.5).slice(0, selectedDepth);
  answers = new Array(selectedDepth).fill(null);
  currentQ = 0; showQ(); showScreen('screen-quiz');
}

function showQ() {
  const ui = UI_LANG[lang], meta = QD.meta[lang], q = questions[currentQ];
  if (!q) return;
  document.getElementById('q-label').textContent = ui.question + ' ' + (currentQ + 1);
  document.getElementById('q-fraction').textContent = (currentQ + 1) + ' / ' + selectedDepth;
  document.getElementById('progress-fill').style.width = (currentQ / selectedDepth * 100) + '%';
  document.getElementById('q-num-tag').textContent = meta.tagPrefix + ' ' + ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV'][currentQ];
  document.getElementById('q-text').textContent = q.text;
  const list = document.getElementById('options-list'); list.innerHTML = '';
  const optLetters = ['A','B','C','D','E','F'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn' + (answers[currentQ] === i ? ' selected' : '');
    btn.innerHTML = '<span class="opt-letter">' + (optLetters[i] || (i+1)) + '</span>' + opt;
    btn.onclick = () => selectOption(i);
    list.appendChild(btn);
  });
  document.getElementById('btn-back').style.visibility = currentQ === 0 ? 'hidden' : 'visible';
  const nb = document.getElementById('btn-next');
  nb.disabled = answers[currentQ] === null;
  nb.className = 'btn-next' + (answers[currentQ] !== null ? ' ready' : '');
  document.getElementById('l-next').textContent = currentQ === selectedDepth - 1 ? ui.seeResult : ui.next;
}

function selectOption(i) {
  answers[currentQ] = i;
  document.querySelectorAll('.option-btn').forEach((b, idx) => b.classList.toggle('selected', idx === i));
  const nb = document.getElementById('btn-next'); nb.disabled = false; nb.className = 'btn-next ready';
}

function goNext() {
  if (answers[currentQ] === null) return;
  if (currentQ < selectedDepth - 1) { currentQ++; showQ(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  else submitQuiz();
}
function goBack() { if (currentQ > 0) { currentQ--; showQ(); window.scrollTo({ top: 0, behavior: 'smooth' }); } }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function submitQuiz() {
  showScreen('screen-loading');
  const ui = UI_LANG[lang], msgs = ui.loadingMsgs;
  let mi = 0; document.getElementById('loading-msg').textContent = msgs[0];
  const iv = setInterval(() => { mi = (mi + 1) % msgs.length; document.getElementById('loading-msg').textContent = msgs[mi]; }, 2200);

  const sc = {};
  QD.categories.forEach(c => sc[c] = 0);
  answers.forEach((a, qi) => { sc[questions[qi].tags[a]]++; });
  const tot = selectedDepth;
  const pcts = {};
  QD.categories.forEach(c => pcts[c] = Math.round(sc[c] / tot * 100));
  const dom = Object.entries(sc).sort((a, b) => b[1] - a[1])[0][0];

  let useAI = false;
  try {
    const aiResp = await fetch('/api/reflect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quizId: QD.id, answers, questions, percentages: pcts, dom })
    });
    if (aiResp.ok) {
      resultData = await aiResp.json();
      resultData._pcts = pcts;
      useAI = true;
    }
  } catch (e) { useAI = false; }

  if (!useAI) {
    resultData = { ...QD.staticReflections[dom], _pcts: pcts };
  }

  clearInterval(iv);
  applyResultLang();
  document.getElementById('shloka-box').style.display = 'block';
  document.getElementById('email-success').style.display = 'none';
  document.getElementById('copy-confirm').style.display = 'none';

  setTimeout(() => {
    QD.categories.forEach((c, i) => {
      const v = pcts[c] + '%';
      const colors = ['fill-1', 'fill-2', 'fill-3', 'fill-4'];
      const bar = document.getElementById('bar-' + i);
      const scBar = document.getElementById('sc-bar-' + i);
      const pct = document.getElementById('pct-' + i);
      const scPct = document.getElementById('sc-pct-' + i);
      if (bar) bar.style.width = v;
      if (scBar) scBar.style.width = v;
      if (pct) pct.textContent = v;
      if (scPct) scPct.textContent = v;
    });
  }, 500);

  showScreen('screen-result');
}

async function submitEmail() {
  const ui = UI_LANG[lang], v = document.getElementById('email-input').value.trim();
  const s = document.getElementById('email-success');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    s.style.color = '#a04040'; s.textContent = ui.emailError; s.style.display = 'block';
    return;
  }
  // Disable button while submitting
  const btn = document.getElementById('l-email-btn');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }
  try {
    const resp = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: v, source: 'quiz-taker' })
    });
    if (!resp.ok) throw new Error('Subscribe failed');
    s.style.color = '#3a7a52';
    s.textContent = ui.emailSuccess;
    s.style.display = 'block';
    document.getElementById('email-input').value = '';
  } catch (e) {
    s.style.color = '#a04040';
    s.textContent = ui.emailError + ' Please try again.';
    s.style.display = 'block';
  } finally {
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
  }
}

function buildShareText() {
  const ui = UI_LANG[lang], meta = QD.meta[lang], d = resultData;
  const guna = lang === 'hi' ? d.dominantHi : d.dominant;
  const sub = lang === 'hi' ? d.subtitleHi : d.subtitle;
  const cats = QD.categories.map(c => meta.categoryNames[c] + ': ' + d._pcts[c] + '%').join(' · ');
  return (lang === 'hi' ? 'मेरा परिणाम' : 'My result') + ' (' + meta.shareTitle + '): ' + guna + '\n' + sub + '\n\n' + cats + '\n\nBeyond Outcomes\nbeyondoutcomes.in';
}

function shareWhatsApp() { window.open('https://wa.me/?text=' + encodeURIComponent(buildShareText()), '_blank'); }
function copyText() {
  navigator.clipboard.writeText(buildShareText()).then(() => {
    const el = document.getElementById('copy-confirm'); el.textContent = UI_LANG[lang].copied; el.style.display = 'block';
    setTimeout(() => el.style.display = 'none', 2500);
  });
}

function retake() {
  answers = []; currentQ = 0; selectedDepth = 0; resultData = null;
  document.querySelectorAll('.depth-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btn-start').disabled = true;
  showScreen('screen-landing'); applyLang();
}

// Initialize once data is loaded
applyLang();
