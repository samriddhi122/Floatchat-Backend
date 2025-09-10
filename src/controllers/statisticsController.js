import db from "../config/duckdb.js";

export const getStatistics = (req, res) => {
  const { parameter } = req.query; // e.g., "temperature"

  const query = `
    SELECT 
      AVG(${parameter}) AS avg,
      MIN(${parameter}) AS min,
      MAX(${parameter}) AS max
    FROM 'data/argo_data.parquet'
  `;

  db.all(query, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // Convert BigInt → String
    const safeRows = JSON.parse(
      JSON.stringify(rows, (_, v) => (typeof v === "bigint" ? v.toString() : v))
    );

    res.json({stats : safeRows[0]});
  });
};
