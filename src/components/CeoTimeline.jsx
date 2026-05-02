import React from 'react';
import { ArrowRight } from 'lucide-react';

const CeoTimeline = () => {
  const steps = [
    { name: "Discover", phase: "S2C" }, { name: "Source", phase: "S2C" }, 
    { name: "Onboard", phase: "S2C" }, { name: "Verify", phase: "S2C" }, 
    { name: "Control", phase: "S2C" }, { name: "Contract", phase: "S2C" }, 
    { name: "Comply", phase: "S2C" },
    { name: "Standardize", phase: "P2P" }, { name: "Procure", phase: "P2P" }, 
    { name: "Execute", phase: "P2P" }, { name: "Capture", phase: "P2P" }, 
    { name: "Validate", phase: "P2P" }, { name: "Pay", phase: "P2P" },
    { name: "Reconcile", phase: "P2R" },
    { name: "Evaluate", phase: "SRM" }, { name: "Engage", phase: "SRM" }, 
    { name: "Renew", phase: "SRM" }, { name: "Exit", phase: "SRM" }
  ];

  const getPhaseColor = (phase) => {
    switch(phase) {
      case 'S2C': return '#00d2ff';
      case 'P2P': return '#3a7bd5';
      case 'P2R': return '#4facfe';
      case 'SRM': return '#00f2fe';
      default: return '#fff';
    }
  };

  return (
    <section id="timeline" className="section" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            The Ultra-Clean <span className="text-gradient">CEO View</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            18 enterprise stages condensed into a single pane of glass. Full visibility from initial discovery to contract closure.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
            width: '80%', height: '1px', background: 'var(--glass-border)', zIndex: 0
          }}/>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
            {steps.map((step, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{
                  padding: '12px 20px',
                  borderRadius: '30px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid ${getPhaseColor(step.phase)}40`,
                  color: 'var(--text-main)',
                  boxShadow: `0 4px 20px ${getPhaseColor(step.phase)}15`,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = `rgba(255, 255, 255, 0.1)`;
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                  e.currentTarget.style.transform = 'none';
                }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{step.name}</span>
                  <div style={{ position: 'absolute', top: 0, left: 0, height: '2px', width: '100%', background: getPhaseColor(step.phase) }}/>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight size={16} color="var(--text-muted)" style={{ opacity: 0.5 }} />
                )}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
            {['S2C', 'P2P', 'P2R', 'SRM'].map(phase => (
              <div key={phase} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: getPhaseColor(phase) }} />
                {phase} Phase
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoTimeline;
