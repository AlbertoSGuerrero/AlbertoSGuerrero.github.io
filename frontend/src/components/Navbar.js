import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../styles/global.css";

function Navbar() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle dark mode
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save preference
  };

  return (
<nav className="navbar">
  <div className="navbar-container">
    <div>
    <h2 className="nav-title">Alberto Guerrero</h2>
    </div>
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
          Contact
        </NavLink>
      </li>
      <li>
      <div class="dropdown">
      <button class="dropbtn">Settings
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
      </div>
      </li>
    </ul>
  </div>
</nav>


  );
}

export default Navbar;
