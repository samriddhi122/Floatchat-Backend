import db from "../config/duckdb.js";

export const checkQuality = (req, res) => {
  const query = `
    SELECT date, temperature, salinity, qc_flag
    FROM 'data/argo_data.parquet'
    WHERE qc_flag != 'good'
    LIMIT 100
  `;

  db.all(query, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ issues: rows });
  });
};
