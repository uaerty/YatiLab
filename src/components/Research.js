import React from 'react';
import './Research.css';

function Research() {
  const researches = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description: 'Deep learning, machine learning, and neural networks research',
      icon: 'fa-brain',
      color: 'color-ai'
    },
    {
      id: 2,
      title: 'Biotechnology',
      description: 'Genetic engineering, drug discovery, and medical innovations',
      icon: 'fa-dna',
      color: 'color-bio'
    },
    {
      id: 3,
      title: 'Quantum Computing',
      description: 'Quantum algorithms and distributed computing systems',
      icon: 'fa-cube',
      color: 'color-quantum'
    },
    {
      id: 4,
      title: 'Renewable Energy',
      description: 'Solar, wind, and sustainable energy solutions',
      icon: 'fa-leaf',
      color: 'color-energy'
    },
    {
      id: 5,
      title: 'Nanotechnology',
      description: 'Materials science and nanoscale engineering',
      icon: 'fa-microchip',
      color: 'color-nano'
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Advanced encryption and threat detection systems',
      icon: 'fa-shield',
      color: 'color-cyber'
    }
  ];

  return (
    <section id="research" className="research-section section-padding">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Our Research Areas</h2>
            <p className="section-subtitle">
              Exploring frontiers of science and technology
            </p>
          </div>
        </div>
        <div className="row">
          {researches.map((research) => (
            <div key={research.id} className="col-md-6 col-lg-4 mb-4">
              <div className={`research-card ${research.color}`}>
                <div className="research-icon">
                  <i className={`fas ${research.icon}`}></i>
                </div>
                <h3 className="research-title">{research.title}</h3>
                <p className="research-description">{research.description}</p>
                <a href="#contact" className="research-link">
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
