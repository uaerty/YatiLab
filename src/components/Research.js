import React, { useState } from 'react';
import './Research.css';

function Research() {
  const [selectedResearch, setSelectedResearch] = useState(null);

  const researches = [
    {
      id: 1,
      title: 'Artificial Intelligence',
      description: 'Deep learning, machine learning, and neural networks research',
      icon: 'fa-brain',
      color: 'color-ai',
      details: {
        overview: 'Artificial Intelligence represents the forefront of computational innovation, enabling machine systems to learn, reason, and adapt.',
        keyAreas: [
          'Deep Learning & Neural Networks',
          'Natural Language Processing',
          'Computer Vision',
          'Reinforcement Learning',
          'Robotics & Autonomous Systems'
        ],
        applications: [
          'Healthcare diagnostics and treatment planning',
          'Autonomous vehicles and transportation',
          'Financial forecasting and analysis',
          'Virtual assistants and chatbots',
          'Industrial automation and optimization'
        ],
        impact: 'AI is revolutionizing industries by automating complex tasks and providing intelligent insights across sectors.',
        team: '45+ researchers and engineers'
      }
    },
    {
      id: 2,
      title: 'Biotechnology',
      description: 'Genetic engineering, drug discovery, and medical innovations',
      icon: 'fa-dna',
      color: 'color-bio',
      details: {
        overview: 'Biotechnology harnesses biological systems to develop breakthrough treatments and sustainable solutions.',
        keyAreas: [
          'Gene Therapy & CRISPR Technology',
          'Protein Engineering',
          'Drug Discovery & Development',
          'Regenerative Medicine',
          'Agricultural Biotechnology'
        ],
        applications: [
          'Personalized medicine and genetic treatments',
          'Biomarker discovery for early disease detection',
          'Biofuel and sustainable energy production',
          'Disease-resistant crop development',
          'Cell and tissue engineering'
        ],
        impact: 'Biotechnology is transforming healthcare by enabling precise, targeted treatments at the molecular level.',
        team: '38+ scientists and researchers'
      }
    },
    {
      id: 3,
      title: 'Quantum Computing',
      description: 'Quantum algorithms and distributed computing systems',
      icon: 'fa-cube',
      color: 'color-quantum',
      details: {
        overview: 'Quantum Computing exploits quantum mechanics principles to solve computationally intractable problems.',
        keyAreas: [
          'Quantum Algorithms Development',
          'Quantum Hardware Optimization',
          'Error Correction Techniques',
          'Distributed Quantum Systems',
          'Quantum Cryptography'
        ],
        applications: [
          'Drug molecule simulation and discovery',
          'Financial portfolio optimization',
          'Cryptographic algorithm breaking',
          'Complex optimization problems',
          'Machine learning acceleration'
        ],
        impact: 'Quantum computing promises exponential speedups for problems beyond classical computation capabilities.',
        team: '32+ quantum physicists and engineers'
      }
    },
    {
      id: 4,
      title: 'Renewable Energy',
      description: 'Solar, wind, and sustainable energy solutions',
      icon: 'fa-leaf',
      color: 'color-energy',
      details: {
        overview: 'Renewable Energy research focuses on clean, sustainable solutions for global energy demands.',
        keyAreas: [
          'Solar Panel Innovation',
          'Wind Energy Systems',
          'Energy Storage Solutions',
          'Grid Integration & Smart Grids',
          'Hydrogen Fuel Technology'
        ],
        applications: [
          'High-efficiency photovoltaic cells',
          'Advanced wind turbine design',
          'Battery technologies and storage',
          'Distributed renewable networks',
          'Smart energy management systems'
        ],
        impact: 'Renewable energy reduces carbon emissions and promotes sustainable global development.',
        team: '40+ environmental and energy engineers'
      }
    },
    {
      id: 5,
      title: 'Nanotechnology',
      description: 'Materials science and nanoscale engineering',
      icon: 'fa-microchip',
      color: 'color-nano',
      details: {
        overview: 'Nanotechnology involves manipulating matter at atomic and molecular scales for novel applications.',
        keyAreas: [
          'Nanomaterials Development',
          'Nanoelectronics & Semiconductors',
          'Nanomedical Applications',
          'Nanophotonics',
          'Carbon Nanotube Engineering'
        ],
        applications: [
          'Ultra-efficient semiconductors',
          'Targeted drug delivery systems',
          'Lightweight composite materials',
          'Enhanced optical devices',
          'Water purification technologies'
        ],
        impact: 'Nanotechnology enables revolutionary advances in materials, electronics, and medical science.',
        team: '28+ materials scientists and engineers'
      }
    },
    {
      id: 6,
      title: 'Cybersecurity',
      description: 'Advanced encryption and threat detection systems',
      icon: 'fa-shield',
      color: 'color-cyber',
      details: {
        overview: 'Cybersecurity research develops advanced protection mechanisms against evolving digital threats.',
        keyAreas: [
          'Cryptography & Encryption',
          'Threat Detection & Prevention',
          'Zero Trust Security Models',
          'Blockchain Security',
          'Quantum-Safe Encryption'
        ],
        applications: [
          'Advanced persistent threat detection',
          'Post-quantum cryptography',
          'Secure data transmission protocols',
          'Intrusion prevention systems',
          'Network security infrastructure'
        ],
        impact: 'Cybersecurity protects critical infrastructure and sensitive data in an increasingly digital world.',
        team: '35+ security experts and researchers'
      }
    }
  ];

  const closeModal = () => {
    setSelectedResearch(null);
  };

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
              <div 
                className={`research-card ${research.color}`}
                onClick={() => setSelectedResearch(research)}
              >
                <div className="research-icon">
                  <i className={`fas ${research.icon}`}></i>
                </div>
                <h3 className="research-title">{research.title}</h3>
                <p className="research-description">{research.description}</p>
                <a href="#!" className="research-link" onClick={(e) => {
                  e.preventDefault();
                  setSelectedResearch(research);
                }}>
                  Learn More <i className="fas fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Research Details */}
      {selectedResearch && (
        <div className="research-modal-overlay" onClick={closeModal}>
          <div className="research-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header" style={{borderTopColor: getColorValue(selectedResearch.color)}}>
              <div className="modal-icon">
                <i className={`fas ${selectedResearch.icon}`}></i>
              </div>
              <h2 className="modal-title">{selectedResearch.title}</h2>
            </div>

            <div className="modal-body">
              <div className="detail-section">
                <h3>Overview</h3>
                <p>{selectedResearch.details.overview}</p>
              </div>

              <div className="detail-section">
                <h3>Key Research Areas</h3>
                <ul className="key-areas-list">
                  {selectedResearch.details.keyAreas.map((area, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Applications & Impact</h3>
                <ul className="applications-list">
                  {selectedResearch.details.applications.map((app, index) => (
                    <li key={index}>
                      <i className="fas fa-lightbulb"></i>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <p className="impact-text">
                  <strong>Global Impact:</strong> {selectedResearch.details.impact}
                </p>
              </div>

              <div className="detail-section team-info">
                <h3>Our Team</h3>
                <p>{selectedResearch.details.team}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-contact" onClick={() => {
                closeModal();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get in Touch <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function getColorValue(colorClass) {
  const colors = {
    'color-ai': '#8b5cf6',
    'color-bio': '#10b981',
    'color-quantum': '#f97316',
    'color-energy': '#06b6d4',
    'color-nano': '#ec4899',
    'color-cyber': '#ef4444'
  };
  return colors[colorClass] || '#3b82f6';
}

export default Research;
