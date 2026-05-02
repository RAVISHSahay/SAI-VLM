import React from 'react';
import { Network } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '4rem 0 2rem 0', background: 'rgba(2, 6, 23, 0.8)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Network color="var(--accent-blue)" size={24} />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.5px' }}>
                SAI <span className="text-gradient">VLM</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Govern Smarter. Operate Leaner. Impact Greener.<br/>
              DPIIT-Recognized Enterprise AI & Automation Company.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#fff' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0, m: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Source-to-Contract</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Procure-to-Pay</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Procure-to-Reconcile</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Supplier Intelligence</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '1.5rem', color: '#fff' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, m: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>About Us</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Careers</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Contact</a></li>
              <li><a href="#" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='var(--accent-blue)'} onMouseOut={e => e.target.style.color='var(--text-muted)'}>Partners</a></li>
            </ul>
          </div>

        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          <div>&copy; 2026 SAI VLM. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
