import db from "../config/duckdb.js";

export const biogeochemical = (req, res) => {
  const query = `
    SELECT date, oxygen, nitrate, chlorophyll, latitude, longitude, depth
    FROM 'data/argo_data.parquet'
    LIMIT 100
  `;

  db.all(query, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    // Convert BigInt → String
    const safeRows = JSON.parse(
      JSON.stringify(rows, (_, v) => (typeof v === "bigint" ? v.toString() : v))
    );

    res.json(safeRows);
  });
};
