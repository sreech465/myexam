import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <div style={{ display: "flex" }}>
        <button style={{ backgroundColor: "green", marginRight: 50 }}>
          Instant Meeting
        </button>
        <button style={{ backgroundColor: "orange" }}>Join a meeting</button>
      </div>
      <button style={{ backgroundColor: "blue" }}>Schedule a meeting</button>
    </div>
  );
}

export default App;
