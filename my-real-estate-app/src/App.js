import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./images/Logo.jpg";
import InfoPage from "./InfoPage";
import "./App.css";

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <img src={logo} alt="Zona Premium Residence Logo" className="logo" />
        </div>
        <div className="cta-container">
          <Link to="/info" className="cta-button">
            Learn More <span className="arrow">→</span>
          </Link>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
