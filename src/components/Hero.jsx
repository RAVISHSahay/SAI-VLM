import React from 'react';
import { ArrowRight, Search, ClipboardList, ShieldCheck, FileText, Package, Truck, TrendingUp, Star, Award, Gauge } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="section hero-section">
      
      {/* Abstract Background Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container hero-container">
        {/* Top Row: Text Left + Vendor Scoring Right */}
        <div className="hero-top-row">
          <div className="hero-text-block" style={{ animation: 'fadeInUp 0.8s ease-out forwards' }}>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              AI-Driven Vendor Lifecycle Management
            </div>
            
            <h1 className="hero-heading">
              Govern Smarter. <br/>
              Operate Leaner. <br/>
              <span className="text-gradient">Impact Greener.</span>
            </h1>
            
            <p className="hero-desc">
              Traditional systems manage vendors. SAI VLM manages the entire vendor economy — from sourcing to financial closure to performance optimization — powered by AI.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn-primary" 
                onClick={() => document.getElementById('platform-tabs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Platform <ArrowRight size={18} />
              </button>
              <button 
                className="btn-secondary" 
                onClick={() => document.getElementById('platform-tabs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Architecture
              </button>
            </div>
          </div>

          {/* Overall Vendor Scoring Panel */}
          <div className="glass-panel vendor-scoring-panel" style={{ animation: 'fadeInUp 0.9s ease-out forwards', animationDelay: '0.15s', opacity: 0 }}>
            <div className="vs-header">
              <div>
                <h3>Overall Vendor Scoring</h3>
                <span className="vs-subtitle">Composite Performance Index</span>
              </div>
              <div className="vs-overall-score">
                <Gauge size={18} />
                <span className="vs-score-value">82.4</span>
                <span className="vs-score-unit">/ 100</span>
              </div>
            </div>

            <div className="vs-metrics-grid">
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">Quality Score</span>
                  <strong>91%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill success" style={{ width: '91%' }} /></div>
              </div>
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">Delivery Timeliness</span>
                  <strong>87%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill" style={{ width: '87%' }} /></div>
              </div>
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">Compliance Index</span>
                  <strong>94%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill success" style={{ width: '94%' }} /></div>
              </div>
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">Cost Competitiveness</span>
                  <strong>76%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill warning" style={{ width: '76%' }} /></div>
              </div>
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">Responsiveness</span>
                  <strong>83%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill" style={{ width: '83%' }} /></div>
              </div>
              <div className="vs-metric">
                <div className="vs-metric-top">
                  <span className="vs-metric-label">ESG / Sustainability</span>
                  <strong>68%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill short" style={{ width: '68%' }} /></div>
              </div>
            </div>

            {/* Tier Breakdown */}
            <div className="vs-tiers">
              <div className="vs-tier">
                <Star size={12} />
                <span>Tier 1 (Strategic)</span>
                <strong className="tier-green">4</strong>
              </div>
              <div className="vs-tier">
                <Award size={12} />
                <span>Tier 2 (Preferred)</span>
                <strong className="tier-blue">8</strong>
              </div>
              <div className="vs-tier">
                <TrendingUp size={12} />
                <span>Tier 3 (Transactional)</span>
                <strong className="tier-muted">12</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Unified Command Centre */}
        <div className="glass-panel ucc-panel" style={{ animation: 'fadeInUp 1s ease-out forwards', animationDelay: '0.25s', opacity: 0 }}>
          
          {/* Mockup Header */}
          <div className="ucc-header">
            <h3>Unified Command Centre</h3>
            <div className="ucc-dots">
              <div className="ucc-dot red" />
              <div className="ucc-dot yellow" />
              <div className="ucc-dot green" />
            </div>
          </div>

          {/* Top Stats Bar */}
          <div className="ucc-stats-bar">
            <span className="ucc-stat"><strong>0</strong> Active Vendors</span>
            <span className="ucc-stat highlight"><strong>3</strong> Pending Actions</span>
            <span className="ucc-stat"><strong>1</strong> Active Contracts</span>
            <span className="ucc-stat"><strong>3</strong> Open Orders</span>
          </div>

          {/* Dashboard Cards Grid */}
          <div className="ucc-cards-grid">
            
            {/* Sourcing */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><Search size={14} /></span>
                  <div>
                    <h4>Sourcing</h4>
                    <span className="ucc-card-sub">Supplier Discovery & RFQs</span>
                  </div>
                </div>
                <span className="ucc-badge blue">7 RFQs</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Total RFIs</span><strong>7</strong></div>
                <div className="ucc-row"><span>Total RFQs</span><strong>7</strong></div>
                <div className="ucc-row"><span>Total Auctions</span><strong>7</strong></div>
                <div className="ucc-progress-row">
                  <span>RFI to RFQ Conversion</span>
                  <strong>67%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill" style={{ width: '67%' }} /></div>
                <div className="ucc-progress-row">
                  <span>Full Cycle Conversion</span>
                  <strong>33%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill short" style={{ width: '33%' }} /></div>
              </div>
            </div>

            {/* Vendor Onboarding */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><ClipboardList size={14} /></span>
                  <div>
                    <h4>Vendor Onboarding</h4>
                    <span className="ucc-card-sub">New Vendor Registrations</span>
                  </div>
                </div>
                <span className="ucc-badge amber">3 Pending</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Total Vendors</span><strong>3</strong></div>
                <div className="ucc-row"><span>Approved Vendors</span><strong>0</strong></div>
                <div className="ucc-row"><span>Rejected Vendors</span><strong>0</strong></div>
                <div className="ucc-progress-row">
                  <span>Pending Review</span>
                  <strong>100%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill warning" style={{ width: '100%' }} /></div>
              </div>
            </div>

            {/* Vendor Due Diligence */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><ShieldCheck size={14} /></span>
                  <div>
                    <h4>Vendor Due Diligence</h4>
                    <span className="ucc-card-sub">Risk & Compliance Checks</span>
                  </div>
                </div>
                <span className="ucc-badge red">0 Non-Compliant</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Total MSME</span><strong>1</strong></div>
                <div className="ucc-row"><span>Compliant</span><strong>1</strong></div>
                <div className="ucc-row"><span>Non-Compliant</span><strong>0</strong></div>
                <div className="ucc-progress-row">
                  <span>Compliance Split</span>
                  <strong>100%</strong>
                </div>
                <div className="ucc-progress-bar"><div className="ucc-progress-fill success" style={{ width: '100%' }} /></div>
              </div>
            </div>

            {/* Contract Lifecycle */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><FileText size={14} /></span>
                  <div>
                    <h4>Contract Lifecycle</h4>
                    <span className="ucc-card-sub">Creation to Renewal</span>
                  </div>
                </div>
                <span className="ucc-badge green">0 Expiring</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Active</span><strong>1</strong></div>
                <div className="ucc-row"><span>Expiring (30d)</span><strong>0</strong></div>
                <div className="ucc-row"><span>Draft/Pending</span><strong>0</strong></div>
              </div>
            </div>

            {/* Catalogue */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><Package size={14} /></span>
                  <div>
                    <h4>Catalogue</h4>
                    <span className="ucc-card-sub">Store & Product Metrics</span>
                  </div>
                </div>
                <span className="ucc-badge blue">5 Products</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Total Store</span><strong>3</strong></div>
                <div className="ucc-row"><span>Total Products</span><strong>5</strong></div>
                <div className="ucc-row"><span>Total Orders</span><strong>0</strong></div>
              </div>
            </div>

            {/* Order Management */}
            <div className="ucc-card">
              <div className="ucc-card-header">
                <div className="ucc-card-title">
                  <span className="ucc-card-icon"><Truck size={14} /></span>
                  <div>
                    <h4>Order Management</h4>
                    <span className="ucc-card-sub">Purchase Orders & Fulfillment</span>
                  </div>
                </div>
                <span className="ucc-badge green">On Track</span>
              </div>
              <div className="ucc-card-body">
                <div className="ucc-row"><span>Open Orders</span><strong>3</strong></div>
                <div className="ucc-row"><span>Fulfilled Today</span><strong>0</strong></div>
                <div className="ucc-row"><span>7-Day Payments</span><strong>₹3,990</strong></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
