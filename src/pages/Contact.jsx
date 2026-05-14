import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Building2, User, Mail } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) return false;
    
    // Check for business email
    const commonFreeProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com'];
    const domain = email.split('@')[1];
    return !commonFreeProviders.includes(domain);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please provide a valid official business email.');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo(0, 0);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="contact-success-container">
        <div className="success-content">
          <CheckCircle2 size={80} color="var(--accent-blue)" className="success-icon" />
          <h1>Message Received!</h1>
          <p>Thank you for reaching out to SequelVendorX. Our AI Strategy team will review your request and get back to you at <strong>{formData.email}</strong> within 24 hours.</p>
          <button className="btn-solid" onClick={() => window.location.href = '/'}>Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-page-wrapper">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <span className="badge">Get in Touch</span>
          <h1>Start Your <span className="text-gradient">Autonomous</span> Journey</h1>
          <p>Have questions about SequelVendorX? Our experts are here to help you navigate the future of Agentic Procurement.</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h2>Why Contact Us?</h2>
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Zap size={24} /></div>
                <div>
                  <h3>Personalized Demo</h3>
                  <p>See how Agentic AI can transform your specific category management.</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><ShieldCheck size={24} /></div>
                <div>
                  <h3>Architecture Review</h3>
                  <p>Discuss integration with your existing ERP ecosystem (SAP, Oracle, GEP).</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><TrendingUp size={24} /></div>
                <div>
                  <h3>ROI Roadmap</h3>
                  <p>Get a custom projection of potential savings and efficiency gains.</p>
                </div>
              </div>
            </div>

            <div className="contact-footer-info">
              <p>Email: <a href="mailto:hello@sequelvendorx.ai">hello@sequelvendorx.ai</a></p>
              <p>Global Headquarters: Silicon Valley | London | Singapore</p>
            </div>
          </div>

          <div className="contact-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label><User size={16} /> Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label><Mail size={16} /> Official Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@company.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label><Building2 size={16} /> Company Name</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Global Enterprise Inc." 
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label><MessageSquare size={16} /> How can we help?</label>
                <textarea 
                  name="message" 
                  placeholder="Tell us about your procurement challenges..." 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="btn-solid contact-submit">
                Send Message <Send size={18} />
              </button>
              
              <p className="privacy-note">
                By submitting this form, you agree to our <a href="#">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// Internal icon helpers if needed or import them
const Zap = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

const ShieldCheck = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

const TrendingUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default Contact;
