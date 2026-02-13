const express = require("express");
const router = express.Router();

/*
  GET /api/ai-insights
  Dummy AI & energy analytics data (ML simulation)
*/
router.get("/", (req, res) => {
  res.json({
    aiDecision: "Reduce cooling to optimise energy usage",
    recommendedTemperature: 24,
    confidenceScore: 0.87,

    usagePattern: {
      peakHours: ["10:00 - 12:00", "14:00 - 16:00"],
      lowUsageHours: ["08:00 - 09:00", "17:00 - 18:00"]
    },

    energySavings: {
      today: {
        unitsSaved: 4.2,
        costSavedINR: 38
      },
      thisMonth: {
        unitsSaved: 96,
        costSavedINR: 860
      }
    },

    carbonReduction: {
      co2SavedKgToday: 3.1,
      co2SavedKgMonth: 71
    },

    lastUpdated: new Date().toISOString()
  });
});

module.exports = router;
