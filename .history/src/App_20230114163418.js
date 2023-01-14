import logo from "./logo.svg";
import "./App.css";
import Details from "./Details";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Jmeet from "./Jmeet";
import Smeet from "./Smeet";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/jmeet" element={<Jmeet />} />
            <Route path="/smeet" element={<Smeet />} />
            <Route path="/join" element={<Joinmeet />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
