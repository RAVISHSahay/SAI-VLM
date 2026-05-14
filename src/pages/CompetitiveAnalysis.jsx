import React from 'react';
import { 
  Check, X, Zap, Shield, Globe, Cpu, 
  BarChart3, Users, LayoutDashboard, Search,
  ArrowRight, Bot, Activity, Layers
} from 'lucide-react';
import './ComparativeAnalysis.css';

const competitors = [
  { name: 'Coupa Software', focus: 'Business Spend Management', type: 'Legacy Workflow' },
  { name: 'SAP Ariba', focus: 'Global Network & ERP', type: 'Legacy Workflow' },
  { name: 'Jaggaer', focus: 'Direct Spend & Mfg', type: 'Legacy Workflow' },
  { name: 'GEP SMART', focus: 'Unified S2P Cloud', type: 'Legacy Workflow' },
  { name: 'Oracle Procurement', focus: 'ERP Integration', type: 'Legacy Workflow' },
  { name: 'Zycus', focus: 'AI-Powered S2P', type: 'Early AI' },
  { name: 'Basware', focus: 'AP Automation', type: 'Legacy Workflow' },
  { name: 'Corcentric', focus: 'Procure-to-Pay', type: 'Legacy Workflow' },
  { name: 'Tradeshift', focus: 'B2B Network', type: 'Legacy Workflow' },
  { name: 'SynerTrade', focus: 'Digital Procurement', type: 'Legacy Workflow' }
];

const features = [
  { 
    title: 'Autonomous Execution (Agentic AI)', 
    sequel: true, 
    others: false, 
    desc: 'SequelVendorX agents don\'t just suggest; they execute tasks end-to-end within guardrails.' 
  },
  { 
    title: 'Self-Healing Master Data', 
    sequel: true, 
    others: false, 
    desc: 'Continuous autonomous deduplication and enrichment vs. periodic manual cleansing.' 
  },
  { 
    title: 'Predictive Risk Intelligence', 
    sequel: true, 
    others: 'Limited', 
    desc: 'Detects supply chain anomalies before they happen using global signal processing.' 
  },
  { 
    title: 'Multi-ERP Integration', 
    sequel: true, 
    others: true, 
    desc: 'Connects seamlessly to SAP, Oracle, and legacy systems simultaneously.' 
  },
  { 
    title: 'Natural Language Interface', 
    sequel: true, 
    others: 'Basic', 
    desc: 'Talk to your procurement system as a teammate, not a database.' 
  },
  { 
    title: '90-Day Time-to-Value', 
    sequel: true, 
    others: false, 
    desc: 'Legacy suites take 12-18 months. SequelVendorX deploys in weeks.' 
  }
];

const CompetitiveAnalysis = () => {
  return (
    <div className="comp-analysis-page">
      {/* Hero Section */}
      <section className="comp-hero text-center">
        <div className="container">
          <div className="badge-agentic"><Bot size={16} /> The Next Evolution</div>
          <h1>SequelVendorX vs. <span className="text-gradient">Legacy Suites</span></h1>
          <p className="subtitle">
            While incumbents manage workflows, SequelVendorX manages outcomes. 
            Experience the shift from process-centric software to agent-centric intelligence.
          </p>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="comparison-section">
        <div className="container">
          <div className="comparison-card glass-panel">
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Capabilities</th>
                    <th className="column-sequel">
                      <div className="brand-badge">SequelVendorX</div>
                      <span className="badge-ai">Agentic AI</span>
                    </th>
                    <th>Incumbent Suites</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="feature-info">
                          <strong>{feature.title}</strong>
                          <p>{feature.desc}</p>
                        </div>
                      </td>
                      <td className="column-sequel">
                        <div className="status-check positive">
                          <Check size={24} strokeWidth={3} />
                        </div>
                      </td>
                      <td>
                        {feature.others === true ? (
                          <div className="status-check neutral">
                            <Check size={20} />
                          </div>
                        ) : feature.others === 'Limited' || feature.others === 'Basic' ? (
                          <div className="status-tag">{feature.others}</div>
                        ) : (
                          <div className="status-check negative">
                            <X size={20} />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Overview */}
      <section className="competitor-grid-section">
        <div className="container">
          <h2 className="section-title text-center">The Competitive Landscape</h2>
          <div className="competitor-cards">
            {competitors.map((comp, idx) => (
              <div key={idx} className="comp-item glass-panel">
                <h4>{comp.name}</h4>
                <div className="comp-meta">
                  <span className="tag-focus">{comp.focus}</span>
                  <span className="tag-type">{comp.type}</span>
                </div>
                <p>Strong foundations in {comp.focus.toLowerCase()}, but reliant on legacy workflow architectures and manual oversight.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agents Win */}
      <section className="why-agents">
        <div className="container">
          <div className="agents-win-grid">
            <div className="agents-content">
              <h2>Why <span className="text-gradient">AI Agents</span> are the Future</h2>
              <div className="value-props">
                <div className="prop">
                  <div className="prop-icon"><Activity /></div>
                  <div className="prop-text">
                    <strong>Autonomous Reasoning</strong>
                    <p>Agents don't wait for triggers; they seek opportunities for cost reduction and risk mitigation.</p>
                  </div>
                </div>
                <div className="prop">
                  <div className="prop-icon"><Layers /></div>
                  <div className="prop-text">
                    <strong>Zero-Manual Stewardship</strong>
                    <p>Agents maintain your vendor and material masters autonomously, eliminating 95% of data errors.</p>
                  </div>
                </div>
                <div className="prop">
                  <div className="prop-icon"><Cpu /></div>
                  <div className="prop-text">
                    <strong>Real-time Market Synthesis</strong>
                    <p>Aggregates global signals to give you a strategic advantage in every negotiation.</p>
                  </div>
                </div>
              </div>
              <button className="btn-cta">
                Transition to Autonomous Procurement <ArrowRight size={18} />
              </button>
            </div>
            <div className="agents-visual">
              <div className="visual-circle">
                <Bot size={80} color="var(--accent-blue)" />
                <div className="pulse-ring"></div>
              </div>
              <div className="floating-stat stat-1">80% Manual Reduction</div>
              <div className="floating-stat stat-2">99.9% Data Accuracy</div>
              <div className="floating-stat stat-3">Instant ROI</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitiveAnalysis;
