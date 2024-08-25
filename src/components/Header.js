import React from "react";
import "../assets/styles/Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        {/* Replace with your logo */}
        <img src="path-to-your-logo.png" alt="Logo" />
      </div>
      <div className="navbar-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-peace"></i>
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-basketball-ball"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
