import React, { useState } from 'react';
import { 
  Handshake, TrendingUp, LifeBuoy, Sprout, 
  CheckCircle2, ArrowRight, Building2, User, 
  Mail, Phone, Globe, MessageSquare, ShieldCheck 
} from 'lucide-react';
import './Partners.css';

const Partners = () => {
  const [activeTab, setActiveTab] = useState('become-partner');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    website: '',
    partnerType: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle'); // idle, loading, success, error
  const [emailError, setEmailError] = useState('');

  const tabs = [
    { id: 'become-partner', label: 'Become a Partner', icon: Handshake },
    { id: 'benefits', label: 'Benefit to Partner', icon: TrendingUp },
    { id: 'support', label: 'Support Partner Gets', icon: LifeBuoy },
    { id: 'grow', label: 'Grow Together', icon: Sprout },
  ];

  const validateEmail = (email) => {
    const businessEmailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!outlook\.com)(?!hotmail\.com)(?!icloud\.com)(?!aol\.com)(?!mail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return businessEmailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmailError('');

    if (!validateEmail(formData.email)) {
      setEmailError('Please use an official/business email address.');
      return;
    }

    setFormStatus('loading');
    // Mock API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'become-partner':
        return (
          <div className="tab-content-panel animate-fade-in">
            <div className="tab-header">
              <h2>Join the <span className="text-gradient">VLM Ecosystem</span></h2>
              <p>Partner with the leader in agentic AI for vendor management and transform how enterprises operate.</p>
            </div>
            
            <div className="partner-form-grid">
              <div className="partner-info-card glass-panel">
                <h4>Application Process</h4>
                <ul className="process-list">
                  <li>
                    <span className="num">01</span>
                    <div>
                      <strong>Submit Interest</strong>
                      <p>Fill out the form with your company details and core competencies.</p>
                    </div>
                  </li>
                  <li>
                    <span className="num">02</span>
                    <div>
                      <strong>Strategic Review</strong>
                      <p>Our partnership team will review your application for ecosystem fit.</p>
                    </div>
                  </li>
                  <li>
                    <span className="num">03</span>
                    <div>
                      <strong>Onboarding & Training</strong>
                      <p>Get certified on the SAI VLM platform and access our resource hub.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="partner-form-wrapper glass-panel">
                {formStatus === 'success' ? (
                  <div className="success-message text-center">
                    <CheckCircle2 size={48} color="#10b981" />
                    <h3>Application Submitted!</h3>
                    <p>Thank you for your interest in partnering with SAI VLM. Our team will reach out within 48 hours.</p>
                    <button className="btn-outline" onClick={() => setFormStatus('idle')}>Submit Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label><Building2 size={14} /> Company Name</label>
                        <input type="text" placeholder="Organization" required onChange={e => setFormData({...formData, companyName: e.target.value})} />
                      </div>
                      <div className="form-group">
                        <label><User size={14} /> Contact Person</label>
                        <input type="text" placeholder="Your Name" required onChange={e => setFormData({...formData, contactPerson: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label><Mail size={14} /> Official Email</label>
                        <input type="email" placeholder="name@company.com" required className={emailError ? 'error' : ''} onChange={e => setFormData({...formData, email: e.target.value})} />
                        {emailError && <span className="error-text">{emailError}</span>}
                      </div>
                      <div className="form-group">
                        <label><Phone size={14} /> Business Phone</label>
                        <input type="tel" placeholder="+1 (555) 000-0000" required onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label><Globe size={14} /> Company Website</label>
                      <input type="url" placeholder="https://..." required onChange={e => setFormData({...formData, website: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Partner Category</label>
                      <select required onChange={e => setFormData({...formData, partnerType: e.target.value})}>
                        <option value="">Select Type</option>
                        <option value="si">System Integrator</option>
                        <option value="tech">Technology Partner</option>
                        <option value="consulting">Management Consulting</option>
                        <option value="reseller">Value Added Reseller</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label><MessageSquare size={14} /> Message / Partnership Goals</label>
                      <textarea rows="4" placeholder="How do you see us working together?" onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                    </div>
                    <button type="submit" className="btn-solid wide" disabled={formStatus === 'loading'}>
                      {formStatus === 'loading' ? 'Submitting...' : 'Apply for Partnership'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div className="tab-content-panel animate-fade-in">
            <div className="tab-header">
              <h2>Unlock Shared <span className="text-gradient">Revenue & Growth</span></h2>
              <p>SAI VLM partners enjoy a premium support structure designed for long-term scalability.</p>
            </div>
            <div className="benefits-grid">
              {[
                { title: 'Revenue Share', desc: 'Attractive commissions on every license sold and renewed.', icon: TrendingUp },
                { title: 'Co-Marketing', icon: MessageSquare, desc: 'Access to joint webinars, whitepapers, and event sponsorships.' },
                { title: 'Technical Access', icon: Globe, desc: 'Priority access to our API roadmap and dev-tools.' },
                { title: 'Exclusive Training', icon: User, desc: 'Role-based certification for sales and technical teams.' }
              ].map((b, i) => (
                <div key={i} className="benefit-card glass-panel">
                  <div className="benefit-icon"><b.icon size={24} /></div>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="tab-content-panel animate-fade-in">
            <div className="tab-header">
              <h2>Unmatched <span className="text-gradient">Partner Enablement</span></h2>
              <p>We invest heavily in our partners, providing the tools and experts needed to win.</p>
            </div>
            <div className="support-layout">
              <div className="support-features glass-panel">
                <div className="feature-item">
                  <CheckCircle2 size={20} color="#10b981" />
                  <div>
                    <strong>Dedicated Account Manager</strong>
                    <p>Single point of contact for strategic alignment and escalations.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={20} color="#10b981" />
                  <div>
                    <strong>Pre-Sales Support</strong>
                    <p>Access our solution architects for complex enterprise demos.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <CheckCircle2 size={20} color="#10b981" />
                  <div>
                    <strong>Marketing Development Funds (MDF)</strong>
                    <p>Co-investing in your market-facing demand generation activities.</p>
                  </div>
                </div>
              </div>
              <div className="support-visual glass-panel">
                <div className="support-badge">24/7 Priority Support</div>
                <div className="sla-circles">
                  <div className="circle">99.9%<span>Uptime</span></div>
                  <div className="circle">2h<span>Response</span></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'grow':
        return (
          <div className="tab-content-panel animate-fade-in">
            <div className="tab-header">
              <h2>Scale with <span className="text-gradient">SAI VLM</span></h2>
              <p>We treat our partners as extensions of our team, sharing product vision and market trends.</p>
            </div>
            <div className="growth-row">
              <div className="growth-text">
                <h3>Joint Roadmap Planning</h3>
                <p>Influence the future of agentic AI. Our strategic partners participate in quarterly product advisory councils (PAC) to shape new features.</p>
                <button className="btn-outline">Download Growth Blueprint <ArrowRight size={16} /></button>
              </div>
              <div className="growth-stats glass-panel">
                <div className="stat">
                  <strong>300%</strong>
                  <span>Avg. Partner ROI</span>
                </div>
                <div className="stat">
                  <strong>12+</strong>
                  <span>Global Markets</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="partners-page">
      <div className="container">
        
        <div className="partners-hero text-center">
          <h1>Ecosystem of <span className="text-gradient">Excellence</span></h1>
          <p>Collaborating with the world's leading consultants, integrators, and tech pioneers.</p>
        </div>

        <div className="partners-tabs-container glass-panel">
          {tabs.map(tab => (
            <button 
              key={tab.id}
              className={`partner-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="partners-content">
          {renderTabContent()}
        </div>

      </div>
    </div>
  );
};

export default Partners;
