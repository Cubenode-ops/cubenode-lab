const express = require("express");
const router = express.Router();
const pool = require("../db");

// GET all notes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM notes ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Fehler" });
  }
});

// POST new note
router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    const result = await pool.query(
      "INSERT INTO notes (text) VALUES ($1) RETURNING *",
      [text]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Fehler" });
  }
});

module.exports = router;


