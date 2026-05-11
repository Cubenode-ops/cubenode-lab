const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "postgres",
  password: "postgres",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Backend läuft 🚀");
});

app.get("/db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB Fehler");
  }
});

app.listen(3000, () => {
  console.log("Backend läuft auf Port 3000");
});
