import React, { useState } from 'react';
import './About.css';

function About() {
  const [showMore, setShowMore] = useState(false);

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

            {showMore && (
              <div className="about-more">
                <div className="feature-detail">
                  <br />
                  <h4 className="feature-title">Advanced Research Facilities</h4>
                  <p className="feature-text">
                    Yati Lab offers cutting-edge laboratories equipped with modern instruments
                    and simulation environments. These facilities allow researchers to test
                    theories, prototype solutions, and validate results in real-world conditions.
                  </p>
                </div>

                <div className="feature-detail">
                  <h4 className="feature-title">Expert Team of Scientists</h4>
                  <p className="feature-text">
                    Our multidisciplinary team brings together specialists in AI, biotechnology,
                    energy, and materials science. Their combined expertise ensures that complex
                    problems are approached from multiple angles, leading to robust and innovative
                    solutions.
                  </p>
                </div>

                <div className="feature-detail">
                  <h4 className="feature-title">Cutting-Edge Technology</h4>
                  <p className="feature-text">
                    We integrate the latest advancements in computing, automation, and data
                    analytics into our research. This enables faster experimentation, deeper
                    insights, and scalable solutions that can be deployed across industries.
                  </p>
                </div>

                <div className="feature-detail">
                  <h4 className="feature-title">Collaborative Innovation</h4>
                  <p className="feature-text">
                    Yati Lab partners with universities, startups, and global enterprises to
                    co-develop projects. By fostering collaboration, we accelerate the journey
                    from concept to implementation, ensuring that innovations reach society
                    sooner and with greater impact.
                  </p>
                </div>
              </div>
            )}


            <button
              className="btn btn-primary-custom mt-4"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Discover More"}
              <i className="fas fa-arrow-right ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
