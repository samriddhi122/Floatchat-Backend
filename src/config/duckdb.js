import duckdb from "duckdb";

const db = new duckdb.Database(":memory:");
const connection = db.connect();


export default connection;
