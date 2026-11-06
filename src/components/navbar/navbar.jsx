import React from "react";
import "./navbar.css";
const Navbar=()=> {
  return (
    <header className="main-header">
      <div className="navbar-container">

        <div className="nav-logo">
          <span className="logo-symbol">D</span>
          <div className="logo-text">
            <span>DIGITAL</span>
            <span>IMPACTS</span>
          </div>
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About Us</a>
          <a href="#portfolio">Portfolio</a>
        </nav>

        <button className="contact-btn">
          Contact Us
        </button>

      </div>
    </header>
  );
}

export default Navbar;
