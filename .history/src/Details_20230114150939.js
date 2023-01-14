import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
    axios.post("https://api.meethour.io /api/{version}/getjwt").then((res) => {
      console.log(res);
    });
    navigate("/jmeet");
  };

  const handleSchedule = () => {
    axios.post("https://api.meethour.io /api/{version}/getjwt").then((res1) => {
      console.log(res1);
    });
    navigate("/smeet");
  };

  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <button style={{ backgroundColor: "green", marginRight: 50 }}>
          Instant Meeting
        </button>
        <button style={{ backgroundColor: "orange" }} onClick={handleJoin}>
          Join a meeting
        </button>
      </div>
      <button style={{ backgroundColor: "blue" }} onClick={handleSchedule}>
        Schedule a meeting
      </button>
    </div>
  );
};

export default Details;
