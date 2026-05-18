const express = require("express");
const app = express();

app.use(express.json());

// routes
const notesRoutes = require("./routes/notes");
app.use("/notes", notesRoutes);

app.get("/", (req, res) => {
  res.send("Backend läuft 🚀");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Backend läuft auf Port 3000");
});


