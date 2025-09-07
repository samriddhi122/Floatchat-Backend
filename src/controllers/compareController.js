import db from "../config/duckdb.js";

export const compareParameters = (req, res) => {
  const { param1, param2 } = req.query;

  const query = `
    SELECT date, ${param1}, ${param2}, depth
    FROM 'data/argo_data.parquet'
    LIMIT 100
  `;

  db.all(query, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ data: rows });
  });
};
