/* ======================================================
   Liga Adka – script.js
   ====================================================== */

const PLAYOFFS_SPOTS = 4;

// ── MOCK DATA ───────────────────────────────────────────

const MOCK_KLUBY = [
  // Grupa A
  { id:1,  nazwa:'Sportowa Domanka',          grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:2,  nazwa:'FC Rails',                  grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:3,  nazwa:'Popowiacy',                 grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:4,  nazwa:'JKM Łowicz',               grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:5,  nazwa:'ZKS Zatorze',              grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:6,  nazwa:'Monster Kiernozia',         grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:7,  nazwa:'Marvex Łowicz',            grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:8,  nazwa:'Latino Boys',              grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:9,  nazwa:'Orły Shiltona',            grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:10, nazwa:'FC Skowroda',              grupa:'A', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  // Grupa B
  { id:11, nazwa:'WKS Bratki',               grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:12, nazwa:'KS Adek',                  grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:13, nazwa:'KS Stefan',                grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:14, nazwa:'Parado no Bailão Górki',   grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:15, nazwa:'Browar Bednary',           grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:16, nazwa:'Asy z B-klasy',            grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:17, nazwa:'NTP Przedmieście',         grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:18, nazwa:'FC Pivko',                 grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:19, nazwa:'MSP',                      grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
  { id:20, nazwa:'Mops z Bielawy',           grupa:'B', mecze:0, wygrane:0, remisy:0, porazki:0, bramki_zdobyte:0, bramki_stracone:0, punkty:0 },
];

const MOCK_WYNIKI = [
  // ── GRUPA A ── (brak wyników — sezon startuje 25.04.2026)
  { kolejka:1, grupa:'A', data:'25.04.2026', gospodarz:'Sportowa Domanka',  gosc:'ZKS Zatorze',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'A', data:'25.04.2026', gospodarz:'FC Rails',          gosc:'Monster Kiernozia',      gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'A', data:'25.04.2026', gospodarz:'Popowiacy',         gosc:'Marvex Łowicz',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'A', data:'25.04.2026', gospodarz:'JKM Łowicz',       gosc:'Latino Boys',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'A', data:'25.04.2026', gospodarz:'Orły Shiltona',    gosc:'FC Skowroda',            gole_gospodarz:'', gole_gosc:'' },

  { kolejka:2, grupa:'A', data:'02.05.2026', gospodarz:'Sportowa Domanka',  gosc:'Monster Kiernozia',      gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'A', data:'02.05.2026', gospodarz:'FC Rails',          gosc:'Marvex Łowicz',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'A', data:'02.05.2026', gospodarz:'Popowiacy',         gosc:'Latino Boys',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'A', data:'02.05.2026', gospodarz:'JKM Łowicz',       gosc:'FC Skowroda',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'A', data:'02.05.2026', gospodarz:'Orły Shiltona',    gosc:'ZKS Zatorze',            gole_gospodarz:'', gole_gosc:'' },

  { kolejka:3, grupa:'A', data:'09.05.2026', gospodarz:'Sportowa Domanka',  gosc:'Marvex Łowicz',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'A', data:'09.05.2026', gospodarz:'FC Rails',          gosc:'Latino Boys',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'A', data:'09.05.2026', gospodarz:'Popowiacy',         gosc:'FC Skowroda',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'A', data:'09.05.2026', gospodarz:'JKM Łowicz',       gosc:'ZKS Zatorze',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'A', data:'09.05.2026', gospodarz:'Orły Shiltona',    gosc:'Monster Kiernozia',      gole_gospodarz:'', gole_gosc:'' },

  { kolejka:4, grupa:'A', data:'16.05.2026', gospodarz:'Sportowa Domanka',  gosc:'Latino Boys',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'A', data:'16.05.2026', gospodarz:'FC Rails',          gosc:'FC Skowroda',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'A', data:'16.05.2026', gospodarz:'Popowiacy',         gosc:'ZKS Zatorze',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'A', data:'16.05.2026', gospodarz:'JKM Łowicz',       gosc:'Monster Kiernozia',      gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'A', data:'16.05.2026', gospodarz:'Orły Shiltona',    gosc:'Marvex Łowicz',          gole_gospodarz:'', gole_gosc:'' },

  { kolejka:5, grupa:'A', data:'23.05.2026', gospodarz:'Sportowa Domanka',  gosc:'FC Skowroda',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'A', data:'23.05.2026', gospodarz:'FC Rails',          gosc:'ZKS Zatorze',            gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'A', data:'23.05.2026', gospodarz:'Popowiacy',         gosc:'Monster Kiernozia',      gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'A', data:'23.05.2026', gospodarz:'JKM Łowicz',       gosc:'Marvex Łowicz',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'A', data:'23.05.2026', gospodarz:'Orły Shiltona',    gosc:'Latino Boys',            gole_gospodarz:'', gole_gosc:'' },

  // ── GRUPA B ──
  { kolejka:1, grupa:'B', data:'25.04.2026', gospodarz:'WKS Bratki',              gosc:'Asy z B-klasy',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'B', data:'25.04.2026', gospodarz:'KS Adek',                 gosc:'NTP Przedmieście',       gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'B', data:'25.04.2026', gospodarz:'KS Stefan',               gosc:'FC Pivko',               gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'B', data:'25.04.2026', gospodarz:'Parado no Bailão Górki',  gosc:'MSP',                    gole_gospodarz:'', gole_gosc:'' },
  { kolejka:1, grupa:'B', data:'25.04.2026', gospodarz:'Browar Bednary',          gosc:'Mops z Bielawy',         gole_gospodarz:'', gole_gosc:'' },

  { kolejka:2, grupa:'B', data:'02.05.2026', gospodarz:'WKS Bratki',              gosc:'NTP Przedmieście',       gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'B', data:'02.05.2026', gospodarz:'KS Adek',                 gosc:'FC Pivko',               gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'B', data:'02.05.2026', gospodarz:'KS Stefan',               gosc:'MSP',                    gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'B', data:'02.05.2026', gospodarz:'Parado no Bailão Górki',  gosc:'Mops z Bielawy',         gole_gospodarz:'', gole_gosc:'' },
  { kolejka:2, grupa:'B', data:'02.05.2026', gospodarz:'Browar Bednary',          gosc:'Asy z B-klasy',          gole_gospodarz:'', gole_gosc:'' },

  { kolejka:3, grupa:'B', data:'09.05.2026', gospodarz:'WKS Bratki',              gosc:'FC Pivko',               gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'B', data:'09.05.2026', gospodarz:'KS Adek',                 gosc:'MSP',                    gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'B', data:'09.05.2026', gospodarz:'KS Stefan',               gosc:'Mops z Bielawy',         gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'B', data:'09.05.2026', gospodarz:'Parado no Bailão Górki',  gosc:'Asy z B-klasy',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:3, grupa:'B', data:'09.05.2026', gospodarz:'Browar Bednary',          gosc:'NTP Przedmieście',       gole_gospodarz:'', gole_gosc:'' },

  { kolejka:4, grupa:'B', data:'16.05.2026', gospodarz:'WKS Bratki',              gosc:'MSP',                    gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'B', data:'16.05.2026', gospodarz:'KS Adek',                 gosc:'Mops z Bielawy',         gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'B', data:'16.05.2026', gospodarz:'KS Stefan',               gosc:'Asy z B-klasy',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'B', data:'16.05.2026', gospodarz:'Parado no Bailão Górki',  gosc:'NTP Przedmieście',       gole_gospodarz:'', gole_gosc:'' },
  { kolejka:4, grupa:'B', data:'16.05.2026', gospodarz:'Browar Bednary',          gosc:'FC Pivko',               gole_gospodarz:'', gole_gosc:'' },

  { kolejka:5, grupa:'B', data:'23.05.2026', gospodarz:'WKS Bratki',              gosc:'Mops z Bielawy',         gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'B', data:'23.05.2026', gospodarz:'KS Adek',                 gosc:'Asy z B-klasy',          gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'B', data:'23.05.2026', gospodarz:'KS Stefan',               gosc:'NTP Przedmieście',       gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'B', data:'23.05.2026', gospodarz:'Parado no Bailão Górki',  gosc:'FC Pivko',               gole_gospodarz:'', gole_gosc:'' },
  { kolejka:5, grupa:'B', data:'23.05.2026', gospodarz:'Browar Bednary',          gosc:'MSP',                    gole_gospodarz:'', gole_gosc:'' },
];

// Zawodnicy – ładowane z Google Sheets (zakładka "zawodnicy")
// Pusta tablica — dane wpisywane ręcznie w arkuszu
const MOCK_ZAWODNICY = [];

// ── DATE INTELLIGENCE ───────────────────────────────────

function parseMatchDate(str) {
  if (!str) return null;
  const p = String(str).trim().split('.');
  if (p.length !== 3) return null;
  const d = new Date(Number(p[2]), Number(p[1]) - 1, Number(p[0]));
  return isNaN(d) ? null : d;
}

function todayMidnight() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function daysFromToday(date) {
  return Math.round((date - todayMidnight()) / 86400000);
}

function matchStatus(dateStr) {
  const d = parseMatchDate(dateStr);
  if (!d) return 'unknown';
  const diff = daysFromToday(d);
  if (diff < 0)  return 'past';
  if (diff === 0) return 'today';
  return 'upcoming';
}

function smartDateLabel(dateStr) {
  const d = parseMatchDate(dateStr);
  if (!d) return dateStr ?? '';
  const diff = daysFromToday(d);
  if (diff === 0)  return 'Dzisiaj';
  if (diff === 1)  return 'Jutro';
  if (diff === -1) return 'Wczoraj';
  if (diff > 1 && diff <= 6)
    return d.toLocaleDateString('pl-PL', { weekday: 'long', day: 'numeric', month: 'short' });
  return dateStr;
}

function formatRoundDate(dateStr) {
  const d = parseMatchDate(dateStr);
  if (!d) return dateStr ?? '';
  return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

/**
 * Detect the "active" round for a group:
 * 1. Today's round → that one
 * 2. No match today → most recent past round (progress check)
 * 3. No past rounds → first upcoming
 */
function detectCurrentRound(rows) {
  const rounds = groupRowsByRound(rows);
  const keys = Object.keys(rounds).map(Number).sort((a, b) => a - b);
  if (!keys.length) return null;

  // Any round happening today?
  for (const k of keys) {
    if (rounds[k].some(r => matchStatus(r.data) === 'today')) return k;
  }

  // Most recent past round
  let lastPast = null;
  for (const k of keys) {
    const allPast = rounds[k].every(r => matchStatus(r.data) === 'past');
    if (allPast) lastPast = k;
  }
  if (lastPast !== null) return lastPast;

  // Fall back to first upcoming
  return keys[0];
}

function groupRowsByRound(rows) {
  const out = {};
  rows.forEach(r => {
    const k = Number(r.kolejka) || 0;
    (out[k] = out[k] || []).push(r);
  });
  return out;
}

function roundBadgeHTML(rounds, activeKey) {
  const matches = rounds[activeKey] || [];
  const hasToday  = matches.some(r => matchStatus(r.data) === 'today');
  const allPast   = matches.every(r => matchStatus(r.data) === 'past');
  if (hasToday)  return `<span class="round-badge today-badge-round">● Dzisiaj</span>`;
  if (!allPast)  return `<span class="round-badge upcoming-badge">Nadchodzi</span>`;
  return `<span class="round-badge past-badge">Zakończona</span>`;
}

// ── FETCH ───────────────────────────────────────────────

async function fetchSheet(sheetName) {
  const res = await fetch(`/api/sheets?sheet=${sheetName}`);
  if (!res.ok) throw new Error('Błąd serwera');
  return await res.json();
}

function showSpinner(el) {
  if (el) el.innerHTML = '<div class="spinner-wrap"><div class="spinner"></div></div>';
}

function showError(el) {
  if (el) el.innerHTML = '<p class="error-msg">Nie udało się załadować danych. Spróbuj odświeżyć stronę.</p>';
}

// ── HAMBURGER ───────────────────────────────────────────

function initHamburger() {
  const btn       = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const overlay   = document.querySelector('.nav-overlay');
  if (!btn) return;

  function close() {
    btn.classList.remove('open');
    mobileNav.classList.remove('open');
    overlay.classList.remove('open');
  }
  function open() {
    btn.classList.add('open');
    mobileNav.classList.add('open');
    overlay.classList.add('open');
  }

  btn.addEventListener('click', () => btn.classList.contains('open') ? close() : open());
  overlay.addEventListener('click', close);
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

// ── TABS ────────────────────────────────────────────────

function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabBar => {
    tabBar.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target  = btn.dataset.tab;
        const wrapper = btn.closest('.tabs-wrapper');
        wrapper.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        wrapper.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = wrapper.querySelector(`[data-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });
}

// ── FADE-UP OBSERVER ────────────────────────────────────

function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ── ACTIVE NAV LINK ─────────────────────────────────────

function setActiveLink() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header > nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href.includes(page) && page !== '') a.classList.add('active');
    if ((page === '' || page === 'index.html') && href.includes('index.html')) a.classList.add('active');
  });
}

// ── CLUB MODAL ───────────────────────────────────────────

let _zawodnicy = null;

function ensureModal() {
  if (document.getElementById('club-modal-overlay')) return;
  const el = document.createElement('div');
  el.id = 'club-modal-overlay';
  el.className = 'club-modal-overlay';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = `
    <div class="club-modal" id="club-modal">
      <div class="club-modal-header">
        <div>
          <div class="club-modal-badge" id="club-modal-badge"></div>
          <h2 class="club-modal-title" id="club-modal-title"></h2>
        </div>
        <button class="club-modal-close" id="club-modal-close" aria-label="Zamknij">✕</button>
      </div>
      <div class="club-modal-body" id="club-modal-body"></div>
    </div>`;
  document.body.appendChild(el);

  el.addEventListener('click', e => { if (e.target === el) closeClubModal(); });
  document.getElementById('club-modal-close').addEventListener('click', closeClubModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeClubModal(); });
}

function openClubModal(clubName, grupa) {
  ensureModal();
  const players = (_zawodnicy || []).filter(p => p.klub === clubName);
  players.sort((a, b) => Number(b.bramki) - Number(a.bramki));

  const totalGoals   = players.reduce((s, p) => s + Number(p.bramki || 0), 0);
  const scorers      = players.filter(p => Number(p.bramki) > 0);
  const count        = players.length;

  document.getElementById('club-modal-title').textContent = clubName;
  document.getElementById('club-modal-badge').textContent = `Grupa ${grupa}`;

  let html = `
    <div class="club-stats-row">
      <div class="club-stat">
        <div class="club-stat-num">${count}</div>
        <div class="club-stat-label">Zawodników</div>
      </div>
      <div class="club-stat">
        <div class="club-stat-num">${scorers.length}</div>
        <div class="club-stat-label">Strzelców</div>
      </div>
      <div class="club-stat">
        <div class="club-stat-num">${totalGoals}</div>
        <div class="club-stat-label">Bramek łącznie</div>
      </div>
    </div>`;

  if (!count) {
    html += `
      <div style="text-align:center;padding:2rem 1rem">
        <div style="font-size:2.5rem;margin-bottom:0.75rem">👥</div>
        <p style="color:#888;font-size:0.9rem;line-height:1.6">
          Zawodnicy tego klubu nie zostali jeszcze wpisani.<br>
          Dane pojawią się po uzupełnieniu arkusza.
        </p>
      </div>`;
  } else {
    html += `<div class="club-players-list">`;
    players.forEach((p, i) => {
      const name   = `${p.imie ?? ''} ${p.nazwisko ?? ''}`.trim();
      const goals  = Number(p.bramki || 0);
      const isTop  = i === 0 && goals > 0;
      html += `
        <div class="club-player-row ${isTop ? 'top-scorer' : ''}">
          <span class="club-player-name">${name}</span>
          <span class="club-player-goals ${goals > 0 ? 'has-goals' : ''}">
            ${goals > 0 ? `⚽ ${goals}` : '—'}
          </span>
        </div>`;
    });
    html += `</div>`;
  }

  document.getElementById('club-modal-body').innerHTML = html;
  document.getElementById('club-modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeClubModal() {
  const el = document.getElementById('club-modal-overlay');
  if (el) el.classList.remove('open');
  document.body.style.overflow = '';
}

// ── GRUPY PAGE ──────────────────────────────────────────

async function initGrupy() {
  const cA = document.getElementById('tabela-a');
  const cB = document.getElementById('tabela-b');
  if (!cA && !cB) return;

  showSpinner(cA); showSpinner(cB);

  // Fetch kluby and zawodnicy in parallel
  const [klubyRaw, zawodnicyRaw] = await Promise.allSettled([
    fetchSheet('kluby'),
    fetchSheet('zawodnicy'),
  ]);

  const kluby = (klubyRaw.status === 'fulfilled' && Array.isArray(klubyRaw.value) && klubyRaw.value.length)
    ? klubyRaw.value : MOCK_KLUBY;

  _zawodnicy = (zawodnicyRaw.status === 'fulfilled' && Array.isArray(zawodnicyRaw.value) && zawodnicyRaw.value.length)
    ? zawodnicyRaw.value : MOCK_ZAWODNICY;

  renderTabela(kluby.filter(r => r.grupa === 'A'), cA);
  renderTabela(kluby.filter(r => r.grupa === 'B'), cB);
}

function renderTabela(rows, container) {
  if (!container) return;
  rows = [...rows].sort((a, b) => {
    const pd = Number(b.punkty) - Number(a.punkty);
    if (pd !== 0) return pd;
    const diffA = Number(a.bramki_zdobyte) - Number(a.bramki_stracone);
    const diffB = Number(b.bramki_zdobyte) - Number(b.bramki_stracone);
    if (diffB !== diffA) return diffB - diffA;
    return Number(b.bramki_zdobyte) - Number(a.bramki_zdobyte);
  });

  if (!rows.length) {
    container.innerHTML = '<p style="padding:1.5rem;color:#888">Brak danych.</p>';
    return;
  }

  const headers = ['#', 'Klub', 'M', 'W', 'R', 'P', 'Bramki', 'Pkt'];
  let html = `<div class="table-wrapper"><table><thead><tr>`;
  headers.forEach(h => { html += `<th>${h}</th>`; });
  html += `</tr></thead><tbody>`;

  rows.forEach((r, i) => {
    const adv    = i < PLAYOFFS_SPOTS ? 'advances' : '';
    const bramki = `${r.bramki_zdobyte ?? 0}:${r.bramki_stracone ?? 0}`;
    html += `<tr class="${adv}">
      <td>${i + 1}</td>
      <td>
        <button class="club-link" data-club="${r.nazwa ?? ''}" data-grupa="${r.grupa ?? ''}">
          ${r.nazwa ?? ''}
        </button>
      </td>
      <td>${r.mecze ?? 0}</td>
      <td>${r.wygrane ?? 0}</td>
      <td>${r.remisy ?? 0}</td>
      <td>${r.porazki ?? 0}</td>
      <td>${bramki}</td>
      <td class="pts">${r.punkty ?? 0}</td>
    </tr>`;
    if (i === PLAYOFFS_SPOTS - 1) {
      html += `<tr><td colspan="8" style="padding:0;height:2px;background:rgba(39,174,96,0.35)"></td></tr>`;
    }
  });

  html += `</tbody></table></div>`;
  html += `<div class="playoffs-legend">
    <div class="playoffs-legend-dot"></div>
    Miejsca 1–${PLAYOFFS_SPOTS} awansują do play-off
    <span style="margin-left:auto;color:#aaa;font-size:0.75rem;font-weight:400">Kliknij klub → skład</span>
  </div>`;

  container.innerHTML = html;

  container.querySelectorAll('.club-link').forEach(btn => {
    btn.addEventListener('click', () => openClubModal(btn.dataset.club, btn.dataset.grupa));
  });
}

// ── MECZE PAGE — ROUND NAVIGATOR ────────────────────────

async function initMecze() {
  const cA = document.getElementById('mecze-a');
  const cB = document.getElementById('mecze-b');
  if (!cA && !cB) return;

  showSpinner(cA); showSpinner(cB);

  let data;
  try {
    data = await fetchSheet('wyniki');
    if (!Array.isArray(data) || !data.length) throw new Error('empty');
  } catch {
    data = MOCK_WYNIKI;
  }

  renderRoundNavigator(data.filter(r => r.grupa === 'A'), cA);
  renderRoundNavigator(data.filter(r => r.grupa === 'B'), cB);
}

function renderRoundNavigator(rows, container) {
  if (!container) return;
  if (!rows.length) {
    container.innerHTML = '<p style="padding:1.5rem;color:#888">Brak danych.</p>';
    return;
  }

  const rounds  = groupRowsByRound(rows);
  const keys    = Object.keys(rounds).map(Number).sort((a, b) => a - b);
  let active    = detectCurrentRound(rows);

  function paint() {
    const matches = rounds[active] || [];
    const idx     = keys.indexOf(active);
    const hasPrev = idx > 0;
    const hasNext = idx < keys.length - 1;
    const roundDate = matches[0]?.data ?? '';

    // ── navigation bar
    let html = `
      <div class="round-nav">
        <button class="round-nav-btn" data-dir="prev" ${hasPrev ? '' : 'disabled'} aria-label="Poprzednia kolejka">
          <svg viewBox="0 0 24 24"><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6z"/></svg>
        </button>
        <div class="round-nav-center">
          <span class="round-nav-num">Kolejka ${active}</span>
          <span class="round-nav-date">${formatRoundDate(roundDate)}</span>
          ${roundBadgeHTML(rounds, active)}
        </div>
        <button class="round-nav-btn" data-dir="next" ${hasNext ? '' : 'disabled'} aria-label="Następna kolejka">
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
        </button>
      </div>`;

    // ── match cards
    matches.forEach(m => {
      const st    = matchStatus(m.data);
      const gh    = m.gole_gospodarz;
      const gg    = m.gole_gosc;
      const hasScore = gh !== '' && gh != null && gg !== '' && gg != null;
      const score = hasScore ? `${gh}–${gg}` : 'vs';
      const label = smartDateLabel(m.data);
      const todayTag = st === 'today' ? `<span class="today-label">DZISIAJ</span>` : '';
      const cardStyle = hasScore ? 'background:#fff' : 'background:#f0f0f0;opacity:0.85';

      html += `<div class="match-card status-${st}" style="${cardStyle}">
        <span class="match-date">${label}${todayTag}</span>
        <span class="match-home">${m.gospodarz ?? ''}</span>
        <span class="match-score ${hasScore ? '' : 'pending'}">${score}</span>
        <span class="match-away">${m.gosc ?? ''}</span>
      </div>`;
    });

    // ── round dots
    html += `<div class="round-dots">`;
    keys.forEach(k => {
      const ms = rounds[k];
      const hasT = ms.some(r => matchStatus(r.data) === 'today');
      const allP = ms.every(r => matchStatus(r.data) === 'past');
      const dotClass = k === active ? 'active' : hasT ? 'today' : allP ? 'past' : 'upcoming';
      html += `<div class="round-dot ${dotClass}" data-round="${k}" title="Kolejka ${k}"></div>`;
    });
    html += `</div>`;

    container.innerHTML = html;

    // ── events
    container.querySelector('[data-dir="prev"]')?.addEventListener('click', () => {
      const i = keys.indexOf(active);
      if (i > 0) { active = keys[i - 1]; paint(); }
    });
    container.querySelector('[data-dir="next"]')?.addEventListener('click', () => {
      const i = keys.indexOf(active);
      if (i < keys.length - 1) { active = keys[i + 1]; paint(); }
    });
    container.querySelectorAll('.round-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        active = Number(dot.dataset.round);
        paint();
      });
    });
  }

  paint();
}

// ── INDEX PAGE — ROUND PREVIEW ──────────────────────────

async function initIndexRound() {
  const container = document.getElementById('index-round-preview');
  if (!container) return;
  showSpinner(container);

  let data;
  try {
    data = await fetchSheet('wyniki');
    if (!Array.isArray(data) || !data.length) throw new Error('empty');
  } catch {
    data = MOCK_WYNIKI;
  }

  const dataA = data.filter(r => r.grupa === 'A');
  const dataB = data.filter(r => r.grupa === 'B');
  const roundA = detectCurrentRound(dataA);
  const roundB = detectCurrentRound(dataB);
  const matchesA = dataA.filter(r => Number(r.kolejka) === roundA);
  const matchesB = dataB.filter(r => Number(r.kolejka) === roundB);

  // Find the headline round (today > upcoming > most recent past)
  function headlineLabel(matches, round) {
    if (!round) return '';
    const hasToday = matches.some(r => matchStatus(r.data) === 'today');
    const allPast  = matches.every(r => matchStatus(r.data) === 'past');
    if (hasToday) return `<span class="round-badge today-badge-round">● Dzisiaj</span>`;
    if (!allPast) return `<span class="round-badge upcoming-badge">Nadchodzi</span>`;
    return `<span class="round-badge past-badge">Zakończona</span>`;
  }

  function miniCards(matches) {
    return matches.map(m => {
      const st = matchStatus(m.data);
      const gh = m.gole_gospodarz;
      const gg = m.gole_gosc;
      const hasScore = gh !== '' && gh != null && gg !== '' && gg != null;
      const score = hasScore ? `${gh}–${gg}` : 'vs';
      const cardStyle = hasScore ? 'background:#fff' : 'background:#f0f0f0;opacity:0.85';
      return `<div class="match-card status-${st}" style="${cardStyle}">
        <span class="match-date">${smartDateLabel(m.data)}${st === 'today' ? '<span class="today-label">DZISIAJ</span>' : ''}</span>
        <span class="match-home">${m.gospodarz ?? ''}</span>
        <span class="match-score ${hasScore ? '' : 'pending'}">${score}</span>
        <span class="match-away">${m.gosc ?? ''}</span>
      </div>`;
    }).join('');
  }

  container.innerHTML = `
    <div class="round-preview-grid">
      <div class="round-preview-col">
        <h3>Grupa A</h3>
        <div class="round-preview-info">
          Kolejka ${roundA} ${headlineLabel(matchesA, roundA)}
        </div>
        ${miniCards(matchesA)}
      </div>
      <div class="round-preview-col">
        <h3>Grupa B</h3>
        <div class="round-preview-info">
          Kolejka ${roundB} ${headlineLabel(matchesB, roundB)}
        </div>
        ${miniCards(matchesB)}
      </div>
    </div>`;
}

// ── KROL STRZELCOW ──────────────────────────────────────

async function initKrol() {
  const container = document.getElementById('tabela-strzelcy');
  if (!container) return;
  showSpinner(container);

  let data;
  try {
    // Primary source: zawodnicy sheet (same as club profiles)
    data = await fetchSheet('zawodnicy');
    if (!Array.isArray(data) || !data.length) throw new Error('empty');
  } catch {
    data = MOCK_ZAWODNICY;
  }

  // Also cache for modal use if grupy wasn't visited first
  if (!_zawodnicy) _zawodnicy = data;

  // Only players with at least 1 goal
  renderStrzelcy(data.filter(p => Number(p.bramki) > 0), container);
}

function renderStrzelcy(rows, container) {
  rows = [...rows].sort((a, b) => Number(b.bramki) - Number(a.bramki));

  if (!rows.length) {
    container.innerHTML = '<p style="padding:1.5rem;color:#888;text-align:center">Sezon w toku — pierwsze bramki wkrótce!</p>';
    return;
  }

  const headers = ['#', 'Imię i nazwisko', 'Klub', 'Gr.', 'Bramki'];
  let html = `<div class="table-wrapper"><table><thead><tr>`;
  headers.forEach(h => { html += `<th>${h}</th>`; });
  html += `</tr></thead><tbody>`;

  let rank = 1;
  rows.forEach((r, i) => {
    if (i > 0 && Number(rows[i].bramki) < Number(rows[i - 1].bramki)) rank = i + 1;
    const cls = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
    html += `<tr class="${cls}">
      <td>${rank}</td>
      <td><strong>${r.imie ?? ''} ${r.nazwisko ?? ''}</strong></td>
      <td>${r.klub ?? ''}</td>
      <td>${r.grupa ?? ''}</td>
      <td class="pts">${r.bramki ?? 0}</td>
    </tr>`;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;
}

// ── INIT ────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initHamburger();
  initTabs();
  initFadeUp();
  setActiveLink();
  initGrupy();
  initMecze();
  initIndexRound();
  initKrol();
});
