const express = require("express");
const router = express.Router();

/*
  GET /api/status
  Dummy live system status (IoT simulation)
*/
router.get("/", (req, res) => {
  res.json({
    room: "Classroom SC-202",
    occupancy: "Occupied",
    indoorTemperature: 26,
    outdoorTemperature: 32,
    deviceStatus: "ON",
    setTemperature: 24,
    lastUpdated: new Date().toISOString()
  });
});

module.exports = router;
