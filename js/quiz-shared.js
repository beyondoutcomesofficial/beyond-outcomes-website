// Shared Quiz Logic — works with any quiz that follows the QUIZ_DATA contract
const UI_LANG = {
  en: { depthLabel: 'Choose the depth of your inquiry', qLabel: 'Questions', d10: 'Focused reflection', d15: 'Deeper inquiry', start: 'Begin the Inquiry', back: 'Back', next: 'Next', seeResult: 'See My Result', question: 'Question', loadingMsgs: ['The Gita contemplates your answers...', 'Reading the pattern within...', 'Weaving your inner portrait...'], loadingSub: 'A moment of patience', yourResult: 'Your dominant pattern', emailTitle: 'Get your results in your inbox', emailSub: "We'll send you this reflection to revisit — and let you know when new quizzes arrive.", emailBtn: 'Send My Results', emailSuccess: 'Done. Check your inbox.', emailError: 'Please enter a valid email.', shareLabel: 'Share your result', saveBtn: 'Save as Image', saveSub: 'Share to Instagram, WhatsApp Stories & more', waBtn: 'WhatsApp', copyBtn: 'Copy Text', copied: 'Copied to clipboard', retake: 'Retake Quiz', explore: 'More Quizzes ↗' },
  hi: { depthLabel: 'अपनी जिज्ञासा की गहराई चुनें', qLabel: 'प्रश्न', d10: 'केंद्रित चिंतन', d15: 'गहरी जिज्ञासा', start: 'जिज्ञासा आरंभ करें', back: 'वापस', next: 'आगे', seeResult: 'परिणाम देखें', question: 'प्रश्न', loadingMsgs: ['गीता आपके उत्तरों पर विचार कर रही है...', 'भीतर का स्वरूप पढ़ा जा रहा है...'], loadingSub: 'धैर्य का एक क्षण', yourResult: 'आपका प्रमुख स्वरूप', emailTitle: 'अपने परिणाम inbox में पाएं', emailSub: 'यह चिंतन दोबारा देखने के लिए भेजेंगे — और नई प्रश्नोत्तरी आने पर सूचित करेंगे।', emailBtn: 'परिणाम भेजें', emailSuccess: 'हो गया। अपना inbox देखें।', emailError: 'कृपया वैध ईमेल दर्ज करें।', shareLabel: 'अपना परिणाम साझा करें', saveBtn: 'चित्र सहेजें', saveSub: 'Instagram, WhatsApp Stories पर शेयर करें', waBtn: 'WhatsApp', copyBtn: 'टेक्स्ट कॉपी', copied: 'क्लिपबोर्ड पर कॉपी', retake: 'पुनः प्रयास', explore: 'और प्रश्नोत्तरी ↗' }
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
  set('l-share-label', ui.shareLabel); set('l-save-btn', ui.saveBtn); set('l-save-sub', ui.saveSub); set('l-wa-btn', ui.waBtn); set('l-copy-btn', ui.copyBtn);
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
  const imgEl = document.getElementById('result-image');
  if (imgEl) {
    if (d.image) { imgEl.src = d.image; imgEl.alt = isHi ? d.dominantHi : d.dominant; imgEl.style.display = 'block'; }
    else { imgEl.style.display = 'none'; }
  }
  // Update OG / Twitter meta tags for social sharing
  if (d._dom) {
    const base = window.location.origin;
    const ogImg = base + '/images/og/' + QD.id + '-' + d._dom + '.png';
    const ogTitle = (isHi ? d.dominantHi : d.dominant) + ' — Beyond Outcomes';
    const ogDesc = isHi ? d.subtitleHi : d.subtitle;
    const setMeta = (sel, val) => { const el = document.querySelector(sel); if (el) el.setAttribute('content', val); };
    setMeta('meta[property="og:image"]', ogImg);
    setMeta('meta[property="og:title"]', ogTitle);
    setMeta('meta[property="og:description"]', ogDesc);
    setMeta('meta[name="twitter:image"]', ogImg);
    setMeta('meta[name="twitter:title"]', ogTitle);
    setMeta('meta[name="twitter:description"]', ogDesc);
    document.title = ogTitle;
  }
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
      resultData._dom = dom;
      if (QD.staticReflections[dom] && QD.staticReflections[dom].image) {
        resultData.image = QD.staticReflections[dom].image;
      }
      useAI = true;
    }
  } catch (e) { useAI = false; }

  if (!useAI) {
    resultData = { ...QD.staticReflections[dom], _pcts: pcts, _dom: dom };
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
    const d = resultData;
    const resp = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: v,
        source: 'quiz-taker',
        quizTitle: QD.meta.en.shareTitle,
        dominant: d.dominant,
        subtitle: d.subtitle,
        reflection: d.reflection,
        shloka: d.shloka,
        shlokaRef: d.shlokaRef || '',
        shlokaMeaning: d.shlokaMeaning
      })
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

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  let lines = [];
  for (const word of words) {
    const test = line ? line + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineHeight));
  return lines.length;
}

async function downloadCard() {
  const d = resultData;
  if (!d) return;

  const btn = document.getElementById('btn-save-img');
  if (btn) { btn.disabled = true; btn.style.opacity = '0.6'; }

  await document.fonts.ready;

  const S = 1080;
  const canvas = document.createElement('canvas');
  canvas.width = S; canvas.height = S;
  const ctx = canvas.getContext('2d');

  // Background
  const bg = ctx.createLinearGradient(0, 0, S, S);
  bg.addColorStop(0, '#fbf3df');
  bg.addColorStop(0.5, '#f7ead0');
  bg.addColorStop(1, '#ede0c0');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, S, S);

  // Outer border
  ctx.strokeStyle = 'rgba(169,126,48,0.4)';
  ctx.lineWidth = 3;
  ctx.strokeRect(44, 44, S - 88, S - 88);
  // Inner border
  ctx.strokeStyle = 'rgba(169,126,48,0.18)';
  ctx.lineWidth = 1;
  ctx.strokeRect(58, 58, S - 116, S - 116);

  const isHi = lang === 'hi';
  const dominant = isHi ? d.dominantHi : d.dominant;
  const subtitle = isHi ? d.subtitleHi : d.subtitle;
  const shloka = (isHi ? d.shlokaHi : d.shloka) || '';
  const meta = QD.meta[lang];

  ctx.textAlign = 'center';
  let y = 130;

  // ॐ
  ctx.font = '64px "Cormorant Garamond"';
  ctx.fillStyle = '#c9a84c';
  ctx.globalAlpha = 0.65;
  ctx.fillText('ॐ', S / 2, y);
  ctx.globalAlpha = 1;
  y += 56;

  // Brand
  ctx.font = '500 19px "Cinzel"';
  ctx.fillStyle = '#a07830';
  ctx.fillText('BEYOND OUTCOMES', S / 2, y);
  y += 24;
  ctx.font = '400 15px "Cinzel"';
  ctx.fillStyle = '#c9a84c';
  ctx.globalAlpha = 0.6;
  ctx.fillText('· SELF-INQUIRY ·', S / 2, y);
  ctx.globalAlpha = 1;
  y += 48;

  // Divider
  const drawDivider = (yy) => {
    ctx.strokeStyle = 'rgba(169,126,48,0.28)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(160, yy); ctx.lineTo(S / 2 - 20, yy); ctx.stroke();
    ctx.beginPath(); ctx.arc(S / 2, yy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#c9a84c'; ctx.globalAlpha = 0.5; ctx.fill(); ctx.globalAlpha = 1;
    ctx.beginPath(); ctx.moveTo(S / 2 + 20, yy); ctx.lineTo(S - 160, yy); ctx.stroke();
  };
  drawDivider(y);
  y += 52;

  // "Your dominant pattern"
  ctx.font = '300 16px "Jost"';
  ctx.fillStyle = '#a07830';
  ctx.globalAlpha = 0.7;
  ctx.fillText((isHi ? 'आपका प्रमुख स्वरूप' : 'YOUR DOMINANT PATTERN'), S / 2, y);
  ctx.globalAlpha = 1;
  y += 78;

  // Dominant result
  const domFontSize = dominant.length > 12 ? 68 : dominant.length > 8 ? 80 : 92;
  ctx.font = '500 ' + domFontSize + 'px "Cinzel"';
  ctx.fillStyle = '#7a5a1e';
  ctx.fillText(dominant, S / 2, y);
  y += 44;

  // Subtitle
  ctx.font = 'italic 300 30px "Cormorant Garamond"';
  ctx.fillStyle = '#a07830';
  const subLines = wrapText(ctx, subtitle, S / 2, y, 780, 38);
  y += subLines * 38 + 52;

  // Score bars
  const cats = QD.categories;
  const barW = 420, barH = 7;
  const barX = (S - barW) / 2;
  const barColors = ['#5da876', '#c9a84c', '#9b85b8', '#c9924a'];

  cats.forEach((c, i) => {
    const pct = d._pcts[c] || 0;
    const label = meta.categoryNames[c];
    const color = barColors[i] || '#c9a84c';

    ctx.font = '400 17px "Cinzel"';
    ctx.fillStyle = '#7a5a1e';
    ctx.textAlign = 'left';
    ctx.fillText(label, barX, y);

    ctx.font = 'italic 17px "Cormorant Garamond"';
    ctx.fillStyle = '#a07830';
    ctx.textAlign = 'right';
    ctx.fillText(pct + '%', barX + barW, y);
    y += 14;

    ctx.fillStyle = 'rgba(169,126,48,0.15)';
    ctx.fillRect(barX, y, barW, barH);
    ctx.fillStyle = color;
    ctx.fillRect(barX, y, barW * (pct / 100), barH);
    y += 28;
  });

  y += 24;
  drawDivider(y);
  y += 44;

  // Shloka
  const shlokaShort = shloka.length > 90 ? shloka.slice(0, 88) + '…' : shloka;
  ctx.font = 'italic 300 24px "Cormorant Garamond"';
  ctx.fillStyle = '#7a5a1e';
  ctx.globalAlpha = 0.78;
  ctx.textAlign = 'center';
  wrapText(ctx, shlokaShort, S / 2, y, 740, 34);
  ctx.globalAlpha = 1;
  if (d.shlokaRef) {
    const shlokaLines = Math.ceil(shlokaShort.length / 55);
    y += shlokaLines * 34 + 8;
    ctx.font = '300 16px "Jost"';
    ctx.fillStyle = '#b08a4a';
    ctx.fillText(d.shlokaRef, S / 2, y);
  }

  // URL at bottom
  ctx.font = '500 17px "Cinzel"';
  ctx.fillStyle = '#a07830';
  ctx.globalAlpha = 0.85;
  ctx.fillText('BEYONDOUTCOMES.IN', S / 2, S - 72);
  ctx.globalAlpha = 1;

  // Export
  const fileName = 'beyond-outcomes-' + (d._dom || 'result') + '.png';
  canvas.toBlob(async (blob) => {
    if (btn) { btn.disabled = false; btn.style.opacity = '1'; }
    // Native share on mobile if supported
    if (navigator.share && navigator.canShare) {
      const file = new File([blob], fileName, { type: 'image/png' });
      if (navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ files: [file], title: dominant + ' — Beyond Outcomes', text: buildShareText() });
          return;
        } catch (e) { /* fall through to download */ }
      }
    }
    // Download fallback
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = fileName; a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

function retake() {
  answers = []; currentQ = 0; selectedDepth = 0; resultData = null;
  document.querySelectorAll('.depth-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('btn-start').disabled = true;
  showScreen('screen-landing'); applyLang();
}

// Initialize once data is loaded
applyLang();
