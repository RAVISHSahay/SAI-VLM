import React from 'react';
import { Target, Zap, FileSearch, BarChart3 } from 'lucide-react';

const ModulesOverview = () => {
  const modules = [
    {
      title: "Source-to-Contract (S2C)",
      subtitle: "Cost Optimization",
      icon: <Target size={32} color="var(--accent-blue)" />,
      desc: "Strategic Procurement from discovery to contract activation.",
      bulletPoints: ["Market Intelligence", "Reverse Auction", "Risk Pre-Screening", "Comparative Analysis (TCO)"]
    },
    {
      title: "Procure-to-Pay (P2P)",
      subtitle: "Operational Efficiency",
      icon: <Zap size={32} color="#3a7bd5" />,
      desc: "Execution Layer covering catalogs, ordering, and validation.",
      bulletPoints: ["Guided Buying Enablement", "Invoice Digitization", "Auto-sourcing", "3-way Matching"]
    },
    {
      title: "Procure-to-Reconcile (P2R)",
      subtitle: "Financial Accuracy",
      icon: <FileSearch size={32} color="#00d2ff" />,
      desc: "CFO Layer handling ledgers, reconciliation, and audit.",
      bulletPoints: ["GL Match & Sync", "Cash Flow Validation", "Month-End Close", "CFO Dashboards"]
    },
    {
      title: "Supplier Relationship (SRM)",
      subtitle: "Value Maximization",
      icon: <BarChart3 size={32} color="#4facfe" />,
      desc: "Long-term Vendor ROI emphasizing performance and ESG.",
      bulletPoints: ["SLA Monitoring", "Vendor Scorecards", "Risk & ESG Tracking", "Corrective Actions"]
    }
  ];

  return (
    <section id="modules" className="section" style={{ background: 'rgba(2, 6, 23, 0.5)', position: 'relative' }}>
      <div className="container">
        
        <div style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '800px', mx: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Enterprise Architecture <span className="text-gradient">Mapping</span></h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Unifying procurement, finance, and vendor intelligence into one AI-driven operating system.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {modules.map((mod, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2.5rem 2rem', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} 
                 onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = 'var(--shadow-glow)'; }}
                 onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', width: 64, height: 64, borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}>
                {mod.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{mod.title}</h3>
              <div style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem' }}>{mod.subtitle}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {mod.desc}
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                {mod.bulletPoints.map((bp, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '0.9rem', color: '#cbd5e1' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-blue)' }} />
                    {bp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesOverview;
