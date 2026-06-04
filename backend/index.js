const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

app.use(cors());
app.use(express.json());

const pool = require("./db");

// ROUTES
const notesRoutes = require("./routes/notes");
const authRoutes = require("./routes/auth");

app.use("/notes", notesRoutes);
app.use("/auth", authRoutes);

// ROOT
app.get("/", (req, res) => {
  res.send("Backend läuft 🚀");
});

// DB TEST
app.get("/time", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// JWT AUTH MIDDLEWARE (FIXED)
// =========================
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Malformed token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// PROTECTED ROUTE
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user
  });
});

// OPTIONAL: ADMIN TEST ROUTE (für später RBAC)
app.get("/admin", authMiddleware, (req, res) => {
  res.json({
    message: "Admin endpoint reached (no RBAC yet)",
    user: req.user
  });
});

// SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Backend läuft auf Port " + PORT);
});