import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try { // Step 1: Authenticate and get JWT 
    const authResponse = await fetch('http://localhost:8080/api/auth/login', { 
      method: 'POST', 
      headers: { 'Content-Type': 'application/json', }, 
      body: JSON.stringify({ 
        username: 'testuser', // replace with actual username
        password: 'testpass' // replace with actual password 
      }), }); 
      if (!authResponse.ok) 
        { throw new Error('Authentication failed'); } 
      // If backend returns raw token string: 
      const token = await authResponse.text();

      // Step 2: Store token in cookie 
      document.cookie = `jwt=${token}; path=/; secure; samesite=strict`; 
      
      // Step 3: Use token in Authorization header 
      const response = await fetch('http://localhost:8080/api/contact', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${token}` 
        },
         body: JSON.stringify(formData), 
        }); 
        
        if (!response.ok) { 
          throw new Error('Failed to submit contact form'); 
        } 
        
        setSuccess('Thank you for your message! We will get back to you soon.'); 
        setFormData({ 
          name: '',
           email: '', 
           subject: '',
            message: '' 
          }); 
        } catch (err) { 
          setError('There was an error submitting your message. Please try again later.');
           console.error(err); 
          } 
        };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h2 className="section-title" style={{ color: 'white' }}>
              Get In Touch
            </h2>
            <p className="section-subtitle" style={{ color: '#d1d5db' }}>
              Have a project or question? Contact us today
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="contact-wrapper">
              {/* Contact Info */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <h5>Location</h5>
                    <p>Research Park, Innovation Hub<br />Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="contact-info-item">
                    <div className="contact-icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <h5>Phone</h5>
                    <p>+1 (555) 123-4567<br />+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-secondary-custom w-100">
                  Send Message <i className="fas fa-paper-plane ms-2"></i>
                </button>
              </form>

              {/* Success/Error Notifications */}
              {success && <div className="alert alert-success mt-3">{success}</div>}
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
