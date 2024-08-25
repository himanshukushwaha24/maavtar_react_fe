import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          {/* Replace with your logo */}
          <img src="path-to-your-logo.png" alt="Logo" />
        </div>
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-peace"></i>
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-basketball-ball"></i>
          </a>
        </div>
      </div>
      <div className="footer-text">
        <p>MaaVatar2024</p>
        <p>© 2077 ApolloNFT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
