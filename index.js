const express = require("express");
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.post("/diagnose", (req, res) => {
  const { symptoms } = req.body;
  console.log("Received symptoms:", symptoms);

  // Sample logic: if symptoms contain "fever", return a diagnosis of 'Flu'
  if (symptoms && symptoms.toLowerCase().includes("fever")) {
    return res.json({ diagnosis: "Flu" });
  }

  res.json({ diagnosis: "No diagnosis available" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const checkSymptoms = async (symptoms) => {
  const response = await fetch("http://localhost:5000/diagnose", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ symptoms }),
  });

  const data = await response.json();
  return data;
};
