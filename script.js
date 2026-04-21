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

// ── STAŁY TERMINARZ ─────────────────────────────────────
// Wyniki nakładane dynamicznie z /api/sheets?sheet=wyniki

const TERMINARZ = [

  // ── GRUPA A ──────────────────────────────────────────

  // Kolejka 1 — Niedziela 26.04.2026
  { kolejka:1, grupa:'A', data:'26.04.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'Latino Boys' },
  { kolejka:1, grupa:'A', data:'26.04.2026', godz:'14:00', gospodarz:'FC Rails',          gosc:'Marvex Łowicz' },
  { kolejka:1, grupa:'A', data:'26.04.2026', godz:'15:00', gospodarz:'Popowiacy',         gosc:'FC Skowroda' },
  { kolejka:1, grupa:'A', data:'26.04.2026', godz:'16:00', gospodarz:'JKM Łowicz',       gosc:'Orły Shiltona' },
  { kolejka:1, grupa:'A', data:'26.04.2026', godz:'17:00', gospodarz:'ZKS Zatorze',      gosc:'Monster Kiernozia' },

  // Kolejka 2 — Sobota 02.05.2026
  { kolejka:2, grupa:'A', data:'02.05.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'Marvex Łowicz' },
  { kolejka:2, grupa:'A', data:'02.05.2026', godz:'14:00', gospodarz:'Latino Boys',      gosc:'FC Skowroda' },
  { kolejka:2, grupa:'A', data:'02.05.2026', godz:'15:00', gospodarz:'FC Rails',          gosc:'Orły Shiltona' },
  { kolejka:2, grupa:'A', data:'02.05.2026', godz:'16:00', gospodarz:'Popowiacy',         gosc:'Monster Kiernozia' },
  { kolejka:2, grupa:'A', data:'02.05.2026', godz:'17:00', gospodarz:'JKM Łowicz',       gosc:'ZKS Zatorze' },

  // Kolejka 3 — Sobota 09.05.2026
  { kolejka:3, grupa:'A', data:'09.05.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'FC Skowroda' },
  { kolejka:3, grupa:'A', data:'09.05.2026', godz:'14:00', gospodarz:'Marvex Łowicz',    gosc:'Orły Shiltona' },
  { kolejka:3, grupa:'A', data:'09.05.2026', godz:'15:00', gospodarz:'Latino Boys',      gosc:'Monster Kiernozia' },
  { kolejka:3, grupa:'A', data:'09.05.2026', godz:'16:00', gospodarz:'FC Rails',          gosc:'ZKS Zatorze' },
  { kolejka:3, grupa:'A', data:'09.05.2026', godz:'17:00', gospodarz:'Popowiacy',         gosc:'JKM Łowicz' },

  // Kolejka 4 — Sobota 16.05.2026
  { kolejka:4, grupa:'A', data:'16.05.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'Orły Shiltona' },
  { kolejka:4, grupa:'A', data:'16.05.2026', godz:'14:00', gospodarz:'FC Skowroda',      gosc:'Monster Kiernozia' },
  { kolejka:4, grupa:'A', data:'16.05.2026', godz:'15:00', gospodarz:'Marvex Łowicz',    gosc:'ZKS Zatorze' },
  { kolejka:4, grupa:'A', data:'16.05.2026', godz:'16:00', gospodarz:'Latino Boys',      gosc:'JKM Łowicz' },
  { kolejka:4, grupa:'A', data:'16.05.2026', godz:'17:00', gospodarz:'FC Rails',          gosc:'Popowiacy' },

  // Kolejka 5 — Sobota 23.05.2026
  { kolejka:5, grupa:'A', data:'23.05.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'Monster Kiernozia' },
  { kolejka:5, grupa:'A', data:'23.05.2026', godz:'14:00', gospodarz:'Orły Shiltona',    gosc:'ZKS Zatorze' },
  { kolejka:5, grupa:'A', data:'23.05.2026', godz:'15:00', gospodarz:'FC Skowroda',      gosc:'JKM Łowicz' },
  { kolejka:5, grupa:'A', data:'23.05.2026', godz:'16:00', gospodarz:'Marvex Łowicz',    gosc:'Popowiacy' },
  { kolejka:5, grupa:'A', data:'23.05.2026', godz:'17:00', gospodarz:'Latino Boys',      gosc:'FC Rails' },

  // Kolejka 6 — Sobota 30.05.2026
  { kolejka:6, grupa:'A', data:'30.05.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'ZKS Zatorze' },
  { kolejka:6, grupa:'A', data:'30.05.2026', godz:'14:00', gospodarz:'Monster Kiernozia', gosc:'JKM Łowicz' },
  { kolejka:6, grupa:'A', data:'30.05.2026', godz:'15:00', gospodarz:'Orły Shiltona',    gosc:'Popowiacy' },
  { kolejka:6, grupa:'A', data:'30.05.2026', godz:'16:00', gospodarz:'FC Skowroda',      gosc:'FC Rails' },
  { kolejka:6, grupa:'A', data:'30.05.2026', godz:'17:00', gospodarz:'Marvex Łowicz',    gosc:'Latino Boys' },

  // Kolejka 7 — Sobota 06.06.2026
  { kolejka:7, grupa:'A', data:'06.06.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'JKM Łowicz' },
  { kolejka:7, grupa:'A', data:'06.06.2026', godz:'14:00', gospodarz:'ZKS Zatorze',      gosc:'Popowiacy' },
  { kolejka:7, grupa:'A', data:'06.06.2026', godz:'15:00', gospodarz:'Monster Kiernozia', gosc:'FC Rails' },
  { kolejka:7, grupa:'A', data:'06.06.2026', godz:'16:00', gospodarz:'Orły Shiltona',    gosc:'Latino Boys' },
  { kolejka:7, grupa:'A', data:'06.06.2026', godz:'17:00', gospodarz:'FC Skowroda',      gosc:'Marvex Łowicz' },

  // Kolejka 8 — Sobota 13.06.2026
  { kolejka:8, grupa:'A', data:'13.06.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'Popowiacy' },
  { kolejka:8, grupa:'A', data:'13.06.2026', godz:'14:00', gospodarz:'JKM Łowicz',       gosc:'FC Rails' },
  { kolejka:8, grupa:'A', data:'13.06.2026', godz:'15:00', gospodarz:'ZKS Zatorze',      gosc:'Latino Boys' },
  { kolejka:8, grupa:'A', data:'13.06.2026', godz:'16:00', gospodarz:'Monster Kiernozia', gosc:'Marvex Łowicz' },
  { kolejka:8, grupa:'A', data:'13.06.2026', godz:'17:00', gospodarz:'Orły Shiltona',    gosc:'FC Skowroda' },

  // Kolejka 9 — Sobota 20.06.2026
  { kolejka:9, grupa:'A', data:'20.06.2026', godz:'13:00', gospodarz:'Sportowa Domanka', gosc:'FC Rails' },
  { kolejka:9, grupa:'A', data:'20.06.2026', godz:'14:00', gospodarz:'Popowiacy',         gosc:'Latino Boys' },
  { kolejka:9, grupa:'A', data:'20.06.2026', godz:'15:00', gospodarz:'JKM Łowicz',       gosc:'Marvex Łowicz' },
  { kolejka:9, grupa:'A', data:'20.06.2026', godz:'16:00', gospodarz:'ZKS Zatorze',      gosc:'FC Skowroda' },
  { kolejka:9, grupa:'A', data:'20.06.2026', godz:'17:00', gospodarz:'Monster Kiernozia', gosc:'Orły Shiltona' },

  // ── GRUPA B ──────────────────────────────────────────

  // Kolejka 1 — Sobota 25.04.2026
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'Browar Bednary' },
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'14:00', gospodarz:'KS Stefan',               gosc:'MSP' },
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'15:00', gospodarz:'KS Adek',                 gosc:'NTP Przedmieście' },
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'16:00', gospodarz:'Parado no Bailão Górki',  gosc:'Mops z Bielawy' },
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'17:00', gospodarz:'WKS Bratki',              gosc:'FC Pivko' },
  { kolejka:1, grupa:'B', data:'25.04.2026', godz:'—',     gospodarz:'FC Zatorze',              gosc:'PAUZA' },

  // Kolejka 2 — Niedziela 03.05.2026
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'MSP' },
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'14:00', gospodarz:'Browar Bednary',          gosc:'NTP Przedmieście' },
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'15:00', gospodarz:'KS Stefan',               gosc:'Mops z Bielawy' },
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'16:00', gospodarz:'KS Adek',                 gosc:'FC Pivko' },
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'17:00', gospodarz:'WKS Bratki',              gosc:'FC Zatorze' },
  { kolejka:2, grupa:'B', data:'03.05.2026', godz:'—',     gospodarz:'Parado no Bailão Górki',  gosc:'PAUZA' },

  // Kolejka 3 — Niedziela 10.05.2026
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'NTP Przedmieście' },
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'14:00', gospodarz:'MSP',                     gosc:'Mops z Bielawy' },
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'15:00', gospodarz:'Browar Bednary',          gosc:'FC Pivko' },
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'16:00', gospodarz:'KS Adek',                 gosc:'FC Zatorze' },
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'17:00', gospodarz:'Parado no Bailão Górki',  gosc:'WKS Bratki' },
  { kolejka:3, grupa:'B', data:'10.05.2026', godz:'—',     gospodarz:'KS Stefan',               gosc:'PAUZA' },

  // Kolejka 4 — Niedziela 17.05.2026
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'Mops z Bielawy' },
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'14:00', gospodarz:'NTP Przedmieście',        gosc:'FC Pivko' },
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'15:00', gospodarz:'Browar Bednary',          gosc:'FC Zatorze' },
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'16:00', gospodarz:'KS Stefan',               gosc:'WKS Bratki' },
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'17:00', gospodarz:'KS Adek',                 gosc:'Parado no Bailão Górki' },
  { kolejka:4, grupa:'B', data:'17.05.2026', godz:'—',     gospodarz:'MSP',                     gosc:'PAUZA' },

  // Kolejka 5 — Niedziela 24.05.2026
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'FC Pivko' },
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'14:00', gospodarz:'NTP Przedmieście',        gosc:'FC Zatorze' },
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'15:00', gospodarz:'MSP',                     gosc:'WKS Bratki' },
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'16:00', gospodarz:'Browar Bednary',          gosc:'Parado no Bailão Górki' },
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'17:00', gospodarz:'KS Stefan',               gosc:'KS Adek' },
  { kolejka:5, grupa:'B', data:'24.05.2026', godz:'—',     gospodarz:'Mops z Bielawy',          gosc:'PAUZA' },

  // Kolejka 6 — Niedziela 31.05.2026
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'13:00', gospodarz:'FC Pivko',                gosc:'FC Zatorze' },
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'14:00', gospodarz:'Mops z Bielawy',          gosc:'WKS Bratki' },
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'15:00', gospodarz:'NTP Przedmieście',        gosc:'Parado no Bailão Górki' },
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'16:00', gospodarz:'MSP',                     gosc:'KS Adek' },
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'17:00', gospodarz:'Browar Bednary',          gosc:'KS Stefan' },
  { kolejka:6, grupa:'B', data:'31.05.2026', godz:'—',     gospodarz:'Asy z B-klasy',           gosc:'PAUZA' },

  // Kolejka 7 — Niedziela 07.06.2026
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'FC Zatorze' },
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'14:00', gospodarz:'FC Pivko',                gosc:'Parado no Bailão Górki' },
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'15:00', gospodarz:'Mops z Bielawy',          gosc:'KS Adek' },
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'16:00', gospodarz:'NTP Przedmieście',        gosc:'KS Stefan' },
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'17:00', gospodarz:'MSP',                     gosc:'Browar Bednary' },
  { kolejka:7, grupa:'B', data:'07.06.2026', godz:'—',     gospodarz:'WKS Bratki',              gosc:'PAUZA' },

  // Kolejka 8 — Niedziela 14.06.2026
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'WKS Bratki' },
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'14:00', gospodarz:'FC Zatorze',              gosc:'Parado no Bailão Górki' },
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'15:00', gospodarz:'FC Pivko',                gosc:'KS Stefan' },
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'16:00', gospodarz:'Mops z Bielawy',          gosc:'Browar Bednary' },
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'17:00', gospodarz:'NTP Przedmieście',        gosc:'MSP' },
  { kolejka:8, grupa:'B', data:'14.06.2026', godz:'—',     gospodarz:'KS Adek',                 gosc:'PAUZA' },

  // Kolejka 9 — Niedziela 21.06.2026
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'13:00', gospodarz:'Asy z B-klasy',           gosc:'Parado no Bailão Górki' },
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'14:00', gospodarz:'WKS Bratki',              gosc:'KS Adek' },
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'15:00', gospodarz:'FC Zatorze',              gosc:'KS Stefan' },
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'16:00', gospodarz:'FC Pivko',                gosc:'MSP' },
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'17:00', gospodarz:'Mops z Bielawy',          gosc:'NTP Przedmieście' },
  { kolejka:9, grupa:'B', data:'21.06.2026', godz:'—',     gospodarz:'Browar Bednary',          gosc:'PAUZA' },

  // Kolejka 10 — Niedziela 28.06.2026
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'13:00', gospodarz:'Asy z B-klasy',          gosc:'KS Adek' },
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'14:00', gospodarz:'Parado no Bailão Górki', gosc:'KS Stefan' },
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'15:00', gospodarz:'WKS Bratki',             gosc:'Browar Bednary' },
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'16:00', gospodarz:'FC Zatorze',             gosc:'MSP' },
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'17:00', gospodarz:'FC Pivko',               gosc:'Mops z Bielawy' },
  { kolejka:10, grupa:'B', data:'28.06.2026', godz:'—',     gospodarz:'NTP Przedmieście',       gosc:'PAUZA' },

  // Kolejka 11 — Niedziela 05.07.2026
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'13:00', gospodarz:'Asy z B-klasy',          gosc:'KS Stefan' },
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'14:00', gospodarz:'KS Adek',                gosc:'Browar Bednary' },
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'15:00', gospodarz:'Parado no Bailão Górki', gosc:'MSP' },
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'16:00', gospodarz:'WKS Bratki',             gosc:'NTP Przedmieście' },
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'17:00', gospodarz:'FC Zatorze',             gosc:'Mops z Bielawy' },
  { kolejka:11, grupa:'B', data:'05.07.2026', godz:'—',     gospodarz:'FC Pivko',               gosc:'PAUZA' },
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

// ── MERGE RESULTS INTO TERMINARZ ────────────────────────
/**
 * Nakłada wyniki z arkusza na stały terminarz.
 * Dopasowanie po: gospodarz + gosc + kolejka + grupa
 */
function mergeResults(terminarz, wyniki) {
  return terminarz.map(m => {
    const r = wyniki.find(w =>
      String(w.gospodarz).trim() === String(m.gospodarz).trim() &&
      String(w.gosc).trim()      === String(m.gosc).trim()
    );
    return r
      ? { ...m, gole_gospodarz: r.gole_gospodarz ?? '', gole_gosc: r.gole_gosc ?? '' }
      : { ...m, gole_gospodarz: '', gole_gosc: '' };
  });
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
  const players = (_zawodnicy || []).filter(p => p.klub === clubName && String(p.imie ?? '').trim() !== '');
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
          Skład zostanie ogłoszony wkrótce.
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

  const headers = ['#', 'Klub', 'W', 'Bramki', 'Pkt'];
  let html = `<div class="table-wrapper"><table><thead><tr>`;
  headers.forEach(h => { html += `<th>${h}</th>`; });
  html += `</tr></thead><tbody>`;

  rows.forEach((r, i) => {
    const adv         = i < PLAYOFFS_SPOTS ? 'advances' : '';
    const leaderStyle = i === 0 ? ' style="background:linear-gradient(90deg,#fef9e7 0%,#fffdf0 100%)"' : '';
    const bramki = `${r.bramki_zdobyte ?? 0}:${r.bramki_stracone ?? 0}`;
    html += `<tr class="${adv}"${leaderStyle}>
      <td>${i + 1}</td>
      <td>
        <button class="club-link" data-club="${r.nazwa ?? ''}" data-grupa="${r.grupa ?? ''}">
          ${r.nazwa ?? ''}
        </button>
      </td>
      <td>${r.wygrane ?? 0}</td>
      <td>${bramki}</td>
      <td class="pts">${r.punkty ?? 0}</td>
    </tr>`;
    if (i === PLAYOFFS_SPOTS - 1) {
      html += `<tr><td colspan="5" style="padding:0;height:2px;background:rgba(39,174,96,0.35)"></td></tr>`;
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

  let wyniki = [];
  try {
    const data = await fetchSheet('wyniki');
    if (Array.isArray(data)) wyniki = data;
  } catch { /* brak wyników — terminarz bez wyników */ }

  const merged = mergeResults(TERMINARZ, wyniki);
  renderRoundNavigator(merged.filter(r => r.grupa === 'A'), cA);
  renderRoundNavigator(merged.filter(r => r.grupa === 'B'), cB);
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

    // ── match cards (skip PAUZA)
    matches.filter(m => m.gosc !== 'PAUZA').forEach(m => {
      const st       = matchStatus(m.data);
      const gh       = m.gole_gospodarz;
      const gg       = m.gole_gosc;
      const hasScore = gh !== '' && gh != null && gg !== '' && gg != null;
      const score    = hasScore ? `${gh}–${gg}` : 'vs';
      const godz     = m.godz && m.godz !== '—' ? ` · ${m.godz}` : '';
      const label    = smartDateLabel(m.data);
      const todayTag = st === 'today' ? `<span class="today-label">DZISIAJ</span>` : '';
      const cardStyle = hasScore
        ? 'background:#fff'
        : 'background:#f0f0f0;opacity:0.85';

      html += `<div class="match-card status-${st}" style="${cardStyle}"
        <span class="match-date">${label}${godz}${todayTag}</span>
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

  let wyniki = [];
  try {
    const data = await fetchSheet('wyniki');
    if (Array.isArray(data)) wyniki = data;
  } catch { /* terminarz bez wyników */ }

  const merged = mergeResults(TERMINARZ, wyniki);
  const dataA  = merged.filter(r => r.grupa === 'A' && r.gosc !== 'PAUZA');
  const dataB  = merged.filter(r => r.grupa === 'B' && r.gosc !== 'PAUZA');
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
      const score    = hasScore ? `${gh}–${gg}` : 'vs';
      const godz     = m.godz && m.godz !== '—' ? ` · ${m.godz}` : '';
      const cardStyle = hasScore ? 'background:#fff' : 'background:#f0f0f0;opacity:0.85';
      return `<div class="match-card status-${st}" style="${cardStyle}">
        <span class="match-date">${smartDateLabel(m.data)}${godz}${st === 'today' ? '<span class="today-label">DZISIAJ</span>' : ''}</span>
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

  const headers = ['#', 'Imię i nazwisko', 'Klub', 'Bramki'];
  let html = `<div class="table-wrapper"><table><thead><tr>`;
  headers.forEach(h => { html += `<th>${h}</th>`; });
  html += `</tr></thead><tbody>`;

  let rank = 1;
  rows.forEach((r, i) => {
    if (i > 0 && Number(rows[i].bramki) < Number(rows[i - 1].bramki)) rank = i + 1;
    const cls   = rank === 1 ? 'gold' : rank === 2 ? 'silver' : rank === 3 ? 'bronze' : '';
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
    html += `<tr class="${cls}">
      <td>${medal}</td>
      <td><strong>${r.imie ?? ''} ${r.nazwisko ?? ''}</strong></td>
      <td>${r.klub ?? ''}</td>
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
