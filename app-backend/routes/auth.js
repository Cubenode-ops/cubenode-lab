const express = require("express");
const router = express.Router();
const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ==========================
// REGISTER
// ==========================

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // password hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // user speichern
    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPassword]
    );

    res.json({
      message: "User created",
      user: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Register failed" });
  }
});

// ==========================
// LOGIN
// ==========================

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // user suchen
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    // user existiert nicht
    if (result.rows.length === 0) {
      return res.status(401).json({
        error: "Invalid credentials"
      });
    }

    const user = result.rows[0];

    // password vergleichen
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(401).json({
        error: "Invalid credentials"
      });
    }

    // JWT token erstellen
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h"
      }
    );

    res.json({
      message: "Login successful",
      token
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
