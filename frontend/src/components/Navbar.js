import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import "../styles/global.css";

function Navbar() {

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
    </ul>
  </div>
</nav>


  );
}

export default Navbar;
