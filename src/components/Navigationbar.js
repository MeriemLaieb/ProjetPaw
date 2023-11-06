import React from "react";
import Logo2 from "./Logo2.png";

function NavigationBar() {
  return (
    <header className="navbar">
      <nav className="nav-links">
        <a href="#">My Day</a>
        <a href="#">Planned</a>
      </nav>
   
      <img src={Logo2} alt="Logo" className="logo" />
      
      <nav className="nav-links">
        <a href="#">About Us</a>
        <a href="#">Settings</a>
      </nav>
    </header>
  );
}

export default NavigationBar;
