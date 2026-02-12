import React from 'react';
import './Team.css';

function Team() {
  const team = [
    {
      id: 1,
      name: 'Dr. Raj Kumar',
      title: 'Lab Director',
      expertise: 'AI & Machine Learning',
      image: '👨‍🔬'
    },
    {
      id: 2,
      name: 'Dr. Priya Singh',
      title: 'Lead Researcher',
      expertise: 'Biotechnology',
      image: '👩‍🔬'
    },
    {
      id: 3,
      name: 'Alan Johnson',
      title: 'Senior Engineer',
      expertise: 'Quantum Computing',
      image: '👨‍💼'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      title: 'Research Scientist',
      expertise: 'Cybersecurity',
      image: '👩‍💼'
    },
    {
      id: 5,
      name: 'Dr. Chen Wei',
      title: 'Research Associate',
      expertise: 'Nanotechnology',
      image: '👨‍🔬'
    },
    {
      id: 6,
      name: 'Emma Davis',
      title: 'Project Manager',
      expertise: 'Research Operations',
      image: '👩‍💼'
    }
  ];

  return (
    <section id="team" className="team-section section-padding bg-light">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Brilliant minds working towards innovation
            </p>
          </div>
        </div>
        <div className="row">
          {team.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4 mb-4">
              <div className="team-card">
                <div className="team-image">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-expertise">{member.expertise}</p>
                <div className="team-social">
                  <a href="#contact" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#contact" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#contact" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
