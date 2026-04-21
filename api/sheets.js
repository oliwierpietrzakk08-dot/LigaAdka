/**
 * Normalizuje nazwę kolumny z GViz API.
 * Problem: komórka nagłówkowa może zawierać długi opis (np. instrukcje),
 * a właściwa nazwa kolumny pojawia się na końcu lub w środku.
 * Rozwiązanie: dla długich nagłówków wyciągnij ostatni token
 * zaczynający się małą literą (a–z lub polska litera).
 */
function normalizeHeader(label) {
  const s = (label ?? '').trim();
  // Krótkie, czyste nazwy — zwróć od razu
  if (s.length <= 30 && !/\s/.test(s)) return s;
  // Dla długich nagłówków: znajdź ostatni token zaczynający się od małej litery
  // (polskie/łacińskie litery), długości >= 2 znaków
  const re = /[a-ząćęłńóśźż][a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ0-9_]*/g;
  let last = null;
  let m;
  while ((m = re.exec(s)) !== null) {
    if (m[0].length >= 2) last = m[0];
  }
  return last ?? s;
}

export default async function handler(req, res) {
  const { sheet } = req.query;
  if (!sheet) return res.status(400).json({ error: 'Brak parametru sheet' });

  const SHEET_ID = process.env.SHEET_ID;
  if (!SHEET_ID) return res.status(500).json({ error: 'Brak konfiguracji SHEET_ID' });

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheet)}&t=${Date.now()}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Sheets HTTP ${response.status}`);
    const text = await response.text();
    const json = JSON.parse(text.substring(47).slice(0, -2));
    const headers = json.table.cols.map(col => normalizeHeader(col.label));
    const rows = json.table.rows
      .filter(row => row && row.c && row.c.some(c => c && c.v != null && c.v !== ''))
      .map(row => Object.fromEntries(headers.map((h, i) => [h, row.c[i]?.v ?? ''])));
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(rows);
  } catch (err) {
    console.error('Sheets error:', err.message);
    return res.status(500).json({ error: 'Błąd pobierania danych z arkusza' });
  }
}
