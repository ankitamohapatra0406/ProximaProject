import React, { useState } from "react";
import LiveStatus from "./components/LiveStatus";
import AIInsights from "./components/AIInsights";
import "./App.css";


function App() {
  const [activeTab, setActiveTab] = useState("status");

  return (
  <div className="app-container">
    <div className="app-header">
      <div className="app-title">
        <h1 >
          🌱 Smart Temperature Optimiser
        </h1>
        <h2>
          by team Serial-Coders
        </h2>
        <p>
          AI-powered • Energy-efficient • Sustainable
        </p>
      </div>

    </div>

    <div className="tabs">
      <button
        className={`tab-button ${activeTab === "status" ? "active" : ""}`}
        onClick={() => setActiveTab("status")}
      >
        Live Status
      </button>

      <button
        className={`tab-button ${activeTab === "ai" ? "active" : ""}`}
        onClick={() => setActiveTab("ai")}
      >
        AI Insights
      </button>
    </div>

    <div className="tab-content">
      {activeTab === "status" && <LiveStatus />}
      {activeTab === "ai" && <AIInsights />}
    </div>
  </div>
);

}

export default App;
