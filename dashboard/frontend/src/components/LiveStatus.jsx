import React, { useEffect, useState } from "react";
import "./LiveStatus.css";


function LiveStatus() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [setTemp, setSetTemp] = useState(null);
  const [deviceOn, setDeviceOn] = useState(false);



  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data);
        setSetTemp(data.setTemperature); // initialise controllable temp
        setDeviceOn(data.deviceStatus === "ON"); // for on and off 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching status:", err);
        setLoading(false);
      });
  }, []);
  const increaseTemp = () => {
      setSetTemp((prev) => prev + 1);
    };

    const decreaseTemp = () => {
      setSetTemp((prev) => prev - 1);
    };

    const turnOnDevice = () => {
      setDeviceOn(true);
    };

    const turnOffDevice = () => {
      setDeviceOn(false);
    };


  if (loading) {
    return <p>Loading live status...</p>;
  }

  if (!status) {
    return <p>Failed to load status</p>;
  }

  return (
  <div className="live-status">
    <h2>Live System Status</h2>

    <div className="status-cards">
      <div className="status-card">
        <h4>Room</h4>
        <p>{status.room}</p>
      </div>

      <div className="status-card">
        <h4>Occupancy</h4>
        <p>{status.occupancy}</p>
      </div>

      <div className="status-card">
        <h4>Indoor Temperature</h4>
        <p>{status.indoorTemperature} °C</p>
      </div>

      <div className="status-card">
        <h4>Outdoor Temperature</h4>
        <p>{status.outdoorTemperature} °C</p>
      </div>

      <div className="status-card-ds">
        <h4>Device Status</h4>
        <p className="ds">{deviceOn ? "ON" : "OFF"}</p>
      </div>


      <div className="control-panel">
        <div className="temp-controller">
          <h4>Set Temperature</h4>

          <button className="arrow" onClick={increaseTemp}>▲</button>

          <div className="temp-value">
            {setTemp} °C
          </div>

          <button className="arrow" onClick={decreaseTemp}>▼</button>
        </div>

        <div className="power-controls">
          <button
            onClick={turnOnDevice}
            disabled={deviceOn}
          >
            Turn ON
          </button>

          <button
            className="off"
            onClick={turnOffDevice}
            disabled={!deviceOn}
          >
            Turn OFF
          </button>
        </div>

      </div>
    </div>
  </div>

);

}

export default LiveStatus;
