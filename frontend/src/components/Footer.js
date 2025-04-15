import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa"; // ← Import icons
import "./Footer.css";
import "../styles/global.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/images/AG.png" alt="Alberto Guerrero" className="footer-logo" />
          <h2 className="footer-title">Alberto Guerrero</h2>
        </div>

        <ul className="footer-list">
          <li>
            <a
              href="mailto:alberto3224@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> Email
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alberto-guerrero-7607b3250/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="/documents/Alberto_Guerrero_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <FaFileDownload /> Resume
            </a>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
