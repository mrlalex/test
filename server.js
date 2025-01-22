const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișierele statice din folderul dist
app.use(express.static(path.join(__dirname, "dist")));

// Endpoint pentru procesare imagine
app.post("/api/process", (req, res) => {
  res.json({ message: "Imagine procesată cu succes!" });
});

// Rulează serverul
app.listen(PORT, () => {
  console.log(`Serverul rulează pe portul ${PORT}`);
});
