const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend läuft 🚀");
});

app.listen(3000, () => {
  console.log("Backend läuft auf Port 3000");
});
