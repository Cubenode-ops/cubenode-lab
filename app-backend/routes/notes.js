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

// DELETE note
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM notes WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Note nicht gefunden" });
    }

    res.json({
      message: "Note gelöscht",
      deleted: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Fehler" });
  }
});

// UPDATE note
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    const result = await pool.query(
      "UPDATE notes SET text = $1 WHERE id = $2 RETURNING *",
      [text, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: "Note nicht gefunden" });
    }

    res.json({
      message: "Note aktualisiert",
      note: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB Fehler" });
  }
});

module.exports = router;


// Update massage
