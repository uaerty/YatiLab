import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section section-padding bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="about-image">
              <i className="fas fa-building"></i>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="section-title">About Yati R&D Lab</h2>
            <p className="section-subtitle">
              Excellence in Research and Innovation
            </p>
            <p className="about-text">
              Yati R&D Lab is a state-of-the-art research and development facility 
              dedicated to advancing technology and scientific knowledge. With a team 
              of expert researchers and engineers, we focus on solving complex problems 
              and creating innovative solutions for tomorrow's challenges.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Advanced Research Facilities</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Expert Team of Scientists</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Cutting-Edge Technology</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Collaborative Innovation</span>
              </div>
            </div>
            <button className="btn btn-primary-custom mt-4">
              Discover More <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
