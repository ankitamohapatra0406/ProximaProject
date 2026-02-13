import React, { useEffect, useState } from "react";
import "./AIInsights.css";


function AIInsights() {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/ai-insights")
      .then((res) => res.json())
      .then((data) => {
        setInsights(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching AI insights:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading AI insights...</p>;
  }

  if (!insights) {
    return <p>Failed to load AI insights</p>;
  }

  return (
  <div className="ai-insights">
    <h2>AI & Energy Insights</h2>

    <div className="ai-decision">
      <h3>AI Recommendation</h3>
      <p>{insights.aiDecision}</p>
      <p>
        <strong>Recommended Temperature:</strong>{" "}
        {insights.recommendedTemperature} °C
      </p>
      <p>
        <strong>Confidence:</strong>{" "}
        {Math.round(insights.confidenceScore * 100)}%
      </p>
    </div>

    {/* Usage pattern full width */}
<div className="metric-card usage-large">
  <h4>Energy Usage Pattern</h4>

  <div className="usage-chart">
    {insights.usagePattern.peakHours.map((hour, index) => (
      <div className="usage-row" key={`peak-${index}`}>
        <div className="usage-label">{hour}</div>
        <div className="usage-bar-container">
          <div
            className="usage-bar"
            style={{ width: "85%" }}
          ></div>
        </div>
      </div>
    ))}

    {insights.usagePattern.lowUsageHours.map((hour, index) => (
      <div className="usage-row low" key={`low-${index}`}>
        <div className="usage-label">{hour}</div>
        <div className="usage-bar-container">
          <div
            className="usage-bar"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

    {/* Energy & CO2 side-by-side */}
<div className="donut-container">
  <div className="donut-card">
    <h4>Energy Savings</h4>

    <div
      className="donut"
      style={{ "--value": "75%", "--color": "#22c55e" }}
    >
      <div className="donut-inner">
        ₹ {insights.energySavings.today.costSavedINR}
      </div>
    </div>

    <p>This Month: ₹ {insights.energySavings.thisMonth.costSavedINR}</p>
    <p style={{ color: "#16a34a" }}>Optimised power consumption</p>
  </div>

  <div className="donut-card">
    <h4>CO₂ Reduction</h4>

    <div
      className="donut"
      style={{ "--value": "65%", "--color": "#10b981" }}
    >
      <div className="donut-inner">
        {insights.carbonReduction.co2SavedKgToday} kg
      </div>
    </div>

    <p>This Month: {insights.carbonReduction.co2SavedKgMonth} kg</p>
    <p style={{ color: "#047857" }}>Lower carbon footprint</p>
  </div>
</div>



  </div>
);

}

export default AIInsights;
