
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from "./components/Logo";
import Backg from "./components/backgrnd";


function App() {
  return (
    <Router>
      <div className="App">
        <Logo />
        
      </div>
    </Router>
  );
}

export default App;
