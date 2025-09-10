import db from "../config/duckdb.js";

export const getParameterData = (req, res) => {
  const { startDate, endDate } = req.query;

  const query = `
    SELECT date, temperature, salinity
    FROM 'data/argo_data.parquet'
    WHERE date BETWEEN '${startDate}' AND '${endDate}'
    ORDER BY date ASC
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
