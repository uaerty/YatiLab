import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-title">
              <i className="fas fa-microscope"></i> Yati R&D Lab
            </h5>
            <p className="footer-text">
              Advancing science and technology through innovative research and development.
            </p>
            <div className="footer-social">
              <a href="/#" className="social-link" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook"></i></a>
              <a href="/#" className="social-link" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter"></i></a>
              <a href="/#" className="social-link" onClick={(e) => e.preventDefault()}><i className="fab fa-linkedin"></i></a>
              <a href="/#" className="social-link" onClick={(e) => e.preventDefault()}><i className="fab fa-github"></i></a>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-title">Research Areas</h5>
            <ul className="footer-links">
              <li><a href="#research">AI & Machine Learning</a></li>
              <li><a href="#research">Biotechnology</a></li>
              <li><a href="#research">Quantum Computing</a></li>
              <li><a href="#research">Cybersecurity</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-title">Contact Info</h5>
            <p className="footer-text">
              <i className="fas fa-map-marker-alt"></i> Research Park, Innovation Hub<br />
              <i className="fas fa-phone"></i> +1 (555) 123-4567<br />
              <i className="fas fa-envelope"></i> info@yatirndlab.com
            </p>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row">
          <div className="col-md-6">
            <p className="footer-copyright">
              &copy; {currentYear} Yati R&D Lab. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="footer-bottom-links">
              <li><a href="/#" onClick={(e) => e.preventDefault()}>Privacy Policy</a></li>
              <li><a href="/#" onClick={(e) => e.preventDefault()}>Terms of Service</a></li>
              <li><a href="/#" onClick={(e) => e.preventDefault()}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
