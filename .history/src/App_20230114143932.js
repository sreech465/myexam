import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <button style={{ backgroundColor: "green" }}>Instant Meeting</button>
      <button style={{ backgroundColor: "orange" }}>Join a meeting</button>
      <button style={{ backgroundColor: "blue" }}>Schedule a meeting</button>
    </div>
  );
}

export default App;
