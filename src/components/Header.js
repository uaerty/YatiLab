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
            {/* Home link */}
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleScroll('hero')}
                href="#hero"
              >
                Home
              </a>
            </li>

            {/* Dropdown for About */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#about"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Work
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="aboutDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleScroll('about')}
                    href="#about"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleScroll('research')}
                    href="#research"
                  >
                    Research
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => handleScroll('team')}
                    href="#team"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </li>
            {/* Users */}
            <li className="nav-item">
              <a className="nav-link" onClick={() => handleScroll('users')}
                href="#users"
              >
                Users
              </a>
            </li>
            {/* Contact remains separate */}
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
