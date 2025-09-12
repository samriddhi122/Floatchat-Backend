import db from "../config/duckdb.js";

export const getLocationData = (req, res) => {
  const { latMin, latMax, lonMin, lonMax } = req.query;
  
  const query = `
    SELECT *
    FROM 'C:/Users/Sandeep Parmar/OneDrive/Desktop/sih/back/Floatchat-Backend/data/uploads/INDIAN_OCEAN.parquet'
    WHERE latitude BETWEEN ${latMin} AND ${latMax}
    AND longitude BETWEEN ${lonMin} AND ${lonMax}
    LIMIT 5
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
