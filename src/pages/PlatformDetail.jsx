import React, { useEffect } from 'react';
import { Database, Layers, Workflow, Bot, CheckCircle2 } from 'lucide-react';
import './PlatformDetail.css';

const PlatformDetail = () => {
  // Scroll to top on load since this is a new page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="platform-page">
      <div className="container">
        <div className="platform-header animate-fade-up">
          <h1>
            A Foundation Built for <span className="text-gradient">Scale</span>
          </h1>
          <p className="platform-subtitle">
            The SAI VLM Platform is a unified, cloud-native architecture designed to handle the complexities of enterprise Source-to-Pay management. Built on a single codebase with embedded Agentic AI, it provides unmatched visibility, configurability, and intelligence.
          </p>
        </div>

        <div className="platform-features-grid">
          
          {/* Feature 1: Unified Data Model */}
          <div className="glass-panel feature-card animate-fade-up delay-100">
            <div className="feature-icon-wrapper">
              <Database size={32} />
            </div>
            <h3>Unified Data Model & Single Codebase</h3>
            <p>
              Unlike cobbled-together solutions resulting from acquisitions, SAI VLM is built organically on a single code base. This eliminates integration barriers between sourcing, contracting, and procurement modules, ensuring absolute data consistency.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Single "Golden Record" for all supplier data</li>
              <li><CheckCircle2 size={16} className="list-icon" /> No data synchronization delays across modules</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Universal reporting and analytics across the entire suite</li>
            </ul>
          </div>

          {/* Feature 2: Multi-Instance Architecture */}
          <div className="glass-panel feature-card animate-fade-up delay-200">
            <div className="feature-icon-wrapper">
              <Layers size={32} />
            </div>
            <h3>Multi-Instance Cloud Architecture</h3>
            <p>
              We deliver logical single tenancy through a robust multi-instance architecture. This approach strictly isolates your enterprise data for superior security and compliance, while still providing the seamless upgrades and scalability of a cloud-native SaaS model.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Strict data isolation meeting global compliance standards</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Dedicated processing power for peak performance</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Granular control over upgrade schedules</li>
            </ul>
          </div>

          {/* Feature 3: Open Ecosystem */}
          <div className="glass-panel feature-card animate-fade-up delay-300">
            <div className="feature-icon-wrapper">
              <Workflow size={32} />
            </div>
            <h3>Open Ecosystem & Deep Integration</h3>
            <p>
              A true platform does not exist in a vacuum. The SAI VLM open architecture is engineered to sit at the center of your IT ecosystem, providing deep, agnostic integrations with core ERPs (SAP, Oracle), decentralized finance environments, and third-party data providers.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> Native API, ETL, and web services integration framework</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Seamless bi-directional sync with legacy ERPs</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Highly configurable UI and workflow engine (no-code/low-code)</li>
            </ul>
          </div>

          {/* Feature 4: Agentic AI Framework */}
          <div className="glass-panel feature-card animate-fade-up delay-300">
            <div className="feature-icon-wrapper">
              <Bot size={32} />
            </div>
            <h3>Embedded Agentic AI Framework</h3>
            <p>
              We've moved beyond simple automation. SAI VLM embeds an ecosystem of 44 specialized AI Agents operating across 5 distinct layers (Strategic to Analytics). These agents autonomously negotiate, monitor risk, draft contracts, and flag anomalies across your entire vendor lifecycle.
            </p>
            <ul className="feature-list">
              <li><CheckCircle2 size={16} className="list-icon" /> L1-L5 Agentic mapping from strategy to execution</li>
              <li><CheckCircle2 size={16} className="list-icon" /> GenAI applied directly to the unified supplier golden record</li>
              <li><CheckCircle2 size={16} className="list-icon" /> Driving up to 85% touchless processing across 21 workflow steps</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PlatformDetail;
