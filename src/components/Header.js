import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#hero">
          <i className="fas fa-microscope"></i> Yati R&D Lab
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleScroll('about')}
                href="#about"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleScroll('research')}
                href="#research"
              >
                Research
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleScroll('team')}
                href="#team"
              >
                Team
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleScroll('contact')}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
