import React from "react";

import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
    navigate("/jmeet");
  };

  const handleSchedule = () => {
    navigate("/smeet");
  };

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <button
          style={{ backgroundColor: "green", marginRight: 50, border: "none" }}
        >
          Instant Meeting
        </button>
        <button
          style={{ backgroundColor: "orange", border: "none" }}
          onClick={handleJoin}
        >
          Join a meeting
        </button>
      </div>
      <button
        style={{
          backgroundColor: "blue",
          border: "none",
          marginTop: 40,
          position: "fixed",
          left: 30,
        }}
        onClick={handleSchedule}
      >
        Schedule a meeting
      </button>
    </div>
  );
};

export default Details;
