import React from "react";
import Logo2 from "./Logo2.png";
import About from "./About";

function NavigationBar() {
  return (
    <header className="navbar">
      <img src={Logo2} alt="Logo" className="logo" />
      <nav className="nav-links">
        <button  className="nav-btn">
          About Us
        </button>
        <button className="nav-btn">Settings</button>
      </nav>
    </header>
  );
}

export default NavigationBar;