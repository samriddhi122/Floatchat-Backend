import db from "../config/duckdb.js";

export const biogeochemical = (req, res) => {
  const query = `
    SELECT date, oxygen, nitrate, chlorophyll, latitude, longitude, depth
    FROM 'data/argo_data.parquet'
    LIMIT 100
  `;

  db.all(query, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data: rows });
  });
};
