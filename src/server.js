const express = require('express');
const { hexToRgb } = require('./hexToRgb');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Moikka! Palvelin toimii."));

// GET /hexToRgb endpoint
app.get('/hexToRgb', (req, res) => {
  const { hex } = req.query;
  console.log("Received hex parameter:", hex);
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return res.status(400).json({
      success: false,
      error: 'Invalid hex format.'
    });
  }
  res.send(rgb);
});

app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});

module.exports = app;