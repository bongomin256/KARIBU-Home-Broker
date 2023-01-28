import React from "react";
// import logo from "./assets/icons/logo.svg";
import "./assets/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
