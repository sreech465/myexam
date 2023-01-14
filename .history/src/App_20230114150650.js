import logo from "./logo.svg";
import "./App.css";
import Details from "./Details";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Jmeet from "./Jmeet";
import Smeet from "./Smeet";

function App() {
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/jmeet" element={<Jmeet />} />
        <Route path="/smeet" element={<Smeet />} />
      </Routes>
    </BrowserRouter>
  </div>;

  return <div className="App"></div>;
}

export default App;
