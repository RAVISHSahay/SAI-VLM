import React from 'react';
import { 
  ArrowRight, Search, ClipboardList, ShieldCheck, FileText, 
  Package, Truck, TrendingUp, Star, Award, Gauge,
  ActivitySquare, Zap, ShieldAlert, Leaf, Receipt
} from 'lucide-react';
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
        <div className="glass-panel ucc-container animate-fade-up" style={{ animationDelay: '0.25s' }}>
          
          <div className="ucc-header-row">
            <div className="ucc-title-group">
              <h3>Unified <span className="text-gradient">Command Centre</span></h3>
              <p>Real-time organizational intelligence & vendor economy orchestration.</p>
            </div>
            <div className="ucc-system-status">
              <div className="status-item">
                <span className="status-dot pulse-green"></span>
                System Operational
              </div>
              <div className="status-item">
                <ShieldCheck size={14} />
                Trust Score: 98.4
              </div>
            </div>
          </div>

          <div className="ucc-main-grid">
            
            {/* Left: Operations Summary */}
            <div className="ucc-sidebar-left">
              <div className="ucc-stat-card">
                <span className="label">Total Managed Spend</span>
                <span className="value">$1.2B</span>
                <span className="trend positive">+12.4% vs LY</span>
              </div>
              <div className="ucc-stat-card">
                <span className="label">Active Vendors</span>
                <span className="value">4,821</span>
                <span className="trend">82 Critical</span>
              </div>
              <div className="ucc-stat-card">
                <span className="label">Compliance Index</span>
                <span className="value">94.2%</span>
                <div className="mini-chart"><div className="fill" style={{width: '94%'}}></div></div>
              </div>
            </div>

            {/* Center: Live Action Hub */}
            <div className="ucc-center-hub">
              <div className="hub-header">
                <h4><ActivitySquare size={16} /> Live Orchestration Hub</h4>
                <span className="badge">12 New Events</span>
              </div>
              
              <div className="hub-events-list">
                <div className="hub-event">
                  <div className="event-icon sourcing"><Zap size={14} /></div>
                  <div className="event-info">
                    <strong>Direct Material RFQ Awarded</strong>
                    <span>Pharma Division • $4.2M Savings Identified</span>
                  </div>
                  <span className="event-time">Just now</span>
                </div>
                <div className="hub-event">
                  <div className="event-icon risk"><ShieldAlert size={14} /></div>
                  <div className="event-info">
                    <strong>Supplier Risk Alert</strong>
                    <span>Tier-2 Logistics Provider • Financial Anomaly Detected</span>
                  </div>
                  <span className="event-time">12m ago</span>
                </div>
                <div className="hub-event">
                  <div className="event-icon esg"><Leaf size={14} /></div>
                  <div className="event-info">
                    <strong>ESG Report Generated</strong>
                    <span>Monthly Scope 3 Emissions across 200 Vendors</span>
                  </div>
                  <span className="event-time">45m ago</span>
                </div>
              </div>

              <div className="hub-footer">
                <div className="hub-actions">
                  <button className="hub-btn">View All Tasks</button>
                  <button className="hub-btn primary">Analyze Anomalies</button>
                </div>
              </div>
            </div>

            {/* Right: Functional Modules */}
            <div className="ucc-modules-grid">
              <div className="ucc-module-card">
                <div className="module-top">
                  <Search size={14} />
                  <span>Sourcing</span>
                </div>
                <div className="module-val">14 Active RFQs</div>
                <div className="module-sub">7 Awards Pending</div>
              </div>
              <div className="ucc-module-card">
                <div className="module-top">
                  <ClipboardList size={14} />
                  <span>Onboarding</span>
                </div>
                <div className="module-val">28 In Progress</div>
                <div className="module-sub">12 Ready for Approval</div>
              </div>
              <div className="ucc-module-card">
                <div className="module-top">
                  <FileText size={14} />
                  <span>Contracts</span>
                </div>
                <div className="module-val">1,240 Active</div>
                <div className="module-sub">18 Expiring 30d</div>
              </div>
              <div className="ucc-module-card">
                <div className="module-top">
                  <Receipt size={14} />
                  <span>Invoicing</span>
                </div>
                <div className="module-val">82% Touchless</div>
                <div className="module-sub">34 Exceptions Flagged</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
