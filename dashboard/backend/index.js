const express = require("express");
const cors = require("cors");

const statusRoutes = require("./routes/status");
const aiInsightsRoutes = require("./routes/aiInsights");



const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/status", statusRoutes);
app.use("/api/ai-insights", aiInsightsRoutes);



app.get("/", (req, res) => {
  res.send("Proxima Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
