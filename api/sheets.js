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
    const headers = json.table.cols.map(col => col.label);
    const rows = json.table.rows.map(row =>
      Object.fromEntries(headers.map((h, i) => [h, row.c[i]?.v ?? '']))
    );
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    return res.status(200).json(rows);
  } catch (err) {
    console.error('Sheets error:', err.message);
    return res.status(500).json({ error: 'Błąd pobierania danych z arkusza' });
  }
}
