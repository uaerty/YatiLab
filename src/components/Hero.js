import React from 'react';
import './Hero.css';

function Hero() {
  const handleCTA = () => {
    const contactSection = document.getElementById('about');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="row w-100 text-center text-md-start">
          <div className="col-md-8">
            <h1 className="hero-title">
              Welcome to <span className="highlight">Yati R&D Lab</span>
            </h1>
            <p className="hero-subtitle">
              Pioneering Innovation in Research and Development
            </p>
            <p className="hero-description">
              Driving technological advancement through cutting-edge research, 
              collaborative innovation, and dedicated scientific excellence.
            </p>
            <div className="hero-buttons mt-4">
              <button 
                className="btn btn-primary-custom me-3 mb-2"
                onClick={handleCTA}
              >
                Get Started <i className="fas fa-arrow-right ms-2"></i>
              </button>
              <button className="btn btn-outline-light mb-2">
                Learn More <i className="fas fa-book ms-2"></i>
              </button>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center">
            <div className="hero-image">
              <i className="fas fa-flask-vial"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
