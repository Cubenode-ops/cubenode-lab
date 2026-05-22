require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());

// ==========================
// ROUTES
// ==========================
const notesRoutes = require("./routes/notes");
const authRoutes = require("./routes/auth");

app.use("/notes", notesRoutes);
app.use("/auth", authRoutes);

// ==========================
// ROOT ROUTE
// ==========================
app.get("/", (req, res) => {
  res.send("Backend läuft 🚀");
});

// ==========================
// JWT MIDDLEWARE
// ==========================
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

// ==========================
// PROTECTED ROUTE
// ==========================
app.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user
  });
});

// ==========================
// SERVER
// ==========================
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Backend läuft auf Port " + PORT);
});

