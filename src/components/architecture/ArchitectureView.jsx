import React, { useState } from 'react';
import MasterDataLayer from './MasterDataLayer';
import WorkflowPipelines from './WorkflowPipelines';
import AgenticLayers from './AgenticLayers';
import './ArchitectureView.css';

const ArchitectureView = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section className="architecture-view-section">
      <div className="arch-container">
        <div className="arch-main-header">
          <div className="arch-logo-top-right">
            <span className="logo-text-main">SAI</span> <span className="logo-text-sub">VLM</span>
          </div>
          <h1>END-TO-END VENDOR LIFECYCLE <span className="highlight-dot">&bull;</span> ARCHITECTURE VIEW</h1>
          <p className="arch-subtitle">Master Data Foundation + 21-Step Workflow + 44 AI Agents across 5 Layers</p>
        </div>

        <div className="arch-diagram-wrapper">
          <MasterDataLayer />
          <WorkflowPipelines onHoverStep={setHoveredStep} />
          <AgenticLayers hoveredStep={hoveredStep} />
        </div>

        <div className="arch-footer-banner">
          <div className="footer-tagline">Govern Smarter. Operate Leaner. Impact Greener.</div>
          <div className="footer-stats">
            Agentic AI across 18 of 21 steps <span className="divider">&bull;</span> 60-70% cycle-time &darr; <span className="divider">&bull;</span> 85%+ touchless
          </div>
          <div className="footer-company">
            SAI VLM <span className="divider">&bull;</span> www.saivlm.com
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureView;
