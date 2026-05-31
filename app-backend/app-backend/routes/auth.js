const express = require("express");
const router = express.Router();

const pool = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/jwt");


// ==========================
// REGISTER
// ==========================
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password required"
      });
    }

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (email, password)
       VALUES ($1, $2)
       RETURNING id, email, role`,
      [email, hashedPassword]
    );

    return res.json({
      message: "User created",
      user: result.rows[0]
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    return res.status(500).json({
      error: err.message
    });
  }
});


// ==========================
// LOGIN
// ==========================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({
        error: "Email and password required"
      });
    }

    const result = await pool.query(
      `SELECT id, email, password, role
       FROM users
       WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return res.json({
      message: "Login successful",
      accessToken,
      refreshToken
    });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return res.status(500).json({
      error: "Login failed"
    });
  }
});


// ==========================
// REFRESH TOKEN
// ==========================
router.post("/refresh", (req, res) => {
  try {
    const { refreshToken } = req.body || {};

    if (!refreshToken) {
      return res.status(400).json({
        error: "No refresh token provided"
      });
    }

    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const newAccessToken = generateAccessToken({
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role
    });

    return res.json({
      accessToken: newAccessToken
    });

  } catch (err) {
    return res.status(403).json({
      error: "Invalid refresh token"
    });
  }
});

module.exports = router;