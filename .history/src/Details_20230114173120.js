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
      <div style={{ display: "flex", left: 100, position: "fixed" }}>
        <button
          style={{
            backgroundColor: "green",
            marginRight: 50,
            border: "none",
            borderRadius: 10,
            width: 100,
            height: 120,
          }}
        >
          Instant Meeting
        </button>
        <button
          style={{
            backgroundColor: "orange",
            border: "none",
            borderRadius: 10,
          }}
          onClick={handleJoin}
        >
          Join a meeting
        </button>
      </div>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "none",
          marginTop: 40,
          position: "fixed",
          left: 500,
          borderRadius: 10,
          justifyContent: "center",
          width: 100,
          height: 120,
        }}
        onClick={handleSchedule}
      >
        Schedule a meeting
      </button>
    </div>
  );
};

export default Details;
