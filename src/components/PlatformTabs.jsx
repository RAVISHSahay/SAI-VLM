import React, { useState } from 'react';
import { 
  Compass, Layers, Crosshair, Database, Zap, 
  ActivitySquare, ShieldCheck, MessageSquare, 
  BarChart4, CheckCircle2, Bot, Network, Briefcase, UserCheck
} from 'lucide-react';
import './PlatformTabs.css';

const PlatformTabs = () => {
  const [activeTab, setActiveTab] = useState('explore'); // 'explore' or 'architecture'

  const capabilities = [
    { icon: <Crosshair size={24} />, title: 'Intelligent Sourcing Workspace', desc: 'A single command center where category managers run RFx events, conduct market intelligence scans, simulate negotiation scenarios, and award contracts — all powered by AI co-pilots that suggest suppliers, draft RFPs, and score responses automatically.' },
    { icon: <Database size={24} />, title: 'Autonomous Master Data Hub', desc: 'The 12-entity foundation is continuously cleansed, enriched, and harmonised by specialized agents — creating a self-healing data backbone.' },
    { icon: <Zap size={24} />, title: 'Touchless Procure-to-Pay', desc: 'Requisitions, POs, GRNs, invoices, and payments flow through the system with minimal human intervention. Agents handle 3-way matching, exception resolution, tax compliance, and payment scheduling — driving 80%+ touchless processing.' },
    { icon: <ActivitySquare size={24} />, title: 'Demand & Supply Sync', desc: 'Integrated Plan-to-Receive engine connects forecasts, MRP, inventory, and supplier capacity in real time. AI agents detect demand shifts, recommend reorder actions, and pre-empt stockouts before they happen.' },
    { icon: <ShieldCheck size={24} />, title: 'Supplier 360 & Risk Cockpit', desc: 'Every supplier has a live dashboard combining performance scorecards, financial health, ESG ratings, sanctions exposure, and cyber posture. Risk agents continuously monitor 1,000+ external signals.' },
    { icon: <MessageSquare size={24} />, title: 'Conversational AI Co-Pilot', desc: 'Users interact in natural language: "Show me all open POs over ₹10 lakh with delayed delivery" — the platform parses, queries, visualizes, and even drafts the follow-up email to the supplier.' },
    { icon: <BarChart4 size={24} />, title: 'Spend Intelligence & Analytics', desc: 'Real-time spend cubes with drill-down across category, supplier, geography, contract compliance, and savings realization — powered by an agent that auto-generates insights, anomaly alerts, and CFO-ready narratives.' },
    { icon: <CheckCircle2 size={24} />, title: 'Compliance & Control Tower', desc: 'Built-in guardrails for GST, e-invoicing, anti-bribery, ESG, data privacy (GDPR/DPDP), and audit trails. Every action is logged, explainable, and SOX-ready.' }
  ];

  const differentiators = [
    { title: 'Agent-First, Not App-First', desc: 'Tasks are orchestrated by AI agents working collaboratively across modules, not siloed transactional screens.' },
    { title: 'Continuous Learning Loop', desc: 'Every exception, decision, and outcome trains the system, so it gets smarter and more autonomous each cycle.' },
    { title: 'API-Composable', desc: 'Plug into SAP, Oracle, Workday, Coupa, Ariba, banks, GSTN, sanctions feeds, and logistics partners without custom integration projects.' },
    { title: 'Vertical-Aware', desc: 'Pre-built playbooks for manufacturing, BFSI, pharma, retail, and energy — out of the box.' },
    { title: 'Human-in-the-Loop', desc: 'Agents escalate the right decisions to the right person at the right time, never bypassing governance.' }
  ];

  const outcomes = [
    { metric: 'Procurement Cycle Time', impact: '↓ 60–70%' },
    { metric: 'Touchless Invoice Processing', impact: '↑ to 85%+' },
    { metric: 'Maverick Spend', impact: '↓ 50–80%' },
    { metric: 'Master Data Accuracy', impact: '↑ to 98%+' },
    { metric: 'Supplier Onboarding Time', impact: '↓ from weeks to hours' },
    { metric: 'Negotiated Savings Realization', impact: '↑ 15–25%' },
    { metric: 'Working Capital (DPO)', impact: 'Optimized by 8–15 days' }
  ];

  const layers = [
    { num: 6, name: 'EXPERIENCE LAYER', desc: 'Web Portal • Mobile App • MS Teams/Slack Bots • Voice • Email • Conversational Co-Pilot • Approval Inbox • Dashboards', color: '#1e293b' },
    { num: 5, name: 'AGENTIC ORCHESTRATION LAYER', desc: 'MASTER ORCHESTRATOR AGENT (Planner + Router) → Sourcing Agent • MDM Agent • P2P Agent • SRM Agent • Risk Agent • Negotiation Agent • Compliance Agent • Spend Insight Agent', color: '#0f172a' },
    { num: 4, name: 'AI / ML & REASONING SERVICES', desc: 'LLMs (Claude / GPT) • Embeddings • Vector DB • RAG Engine • Forecasting Models • Classification • Anomaly Detection • OCR • NLP • Decision Engine • Guardrails', color: '#112a46' },
    { num: 3, name: 'DOMAIN SERVICES & WORKFLOWS', desc: 'Sourcing • Contracts • Catalog • PR/PO • GRN • Invoice • Pay • Supplier Mgmt • Risk • Analytics • Compliance • Tax', color: '#003366' },
    { num: 2, name: 'DATA FOUNDATION', desc: 'Master Data Hub (12 entities) • Transactional DB • Data Lake • Knowledge Graph • Audit Store • Vector Store', color: '#004080' },
    { num: 1, name: 'INTEGRATION & SECURITY FABRIC', desc: 'ERP (SAP/Oracle) • Banks • GSTN • D&B • Sanctions • Logistics • iPaaS • API Gateway • IAM • Encryption • Audit Logs', color: '#001f3f' }
  ];

  return (
    <section className="platform-tabs-section" id="platform-tabs">
      <div className="container">
        
        {/* Tab Controls */}
        <div className="tabs-header-controls">
          <button 
            className={`tab-btn ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveTab('explore')}
          >
            <Compass size={20} />
            Explore Platform
          </button>
          <button 
            className={`tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <Layers size={20} />
            View Architecture
          </button>
        </div>

        {/* TAB 1: EXPLORE PLATFORM */}
        {activeTab === 'explore' && (
          <div className="tab-content animate-fade-up">
            <div className="tab-title-area text-center">
              <h2>A Unified Agentic <span className="text-gradient">Procurement & Finance</span> Platform</h2>
              <p className="tab-subtitle">
                Our platform is a next-generation, AI-native suite that unifies the entire Source-to-Pay, Plan-to-Receive, and Supplier Lifecycle into one intelligent, self-operating fabric. Built on an agentic AI core, it transforms procurement from a series of disconnected transactions into a continuous, learning, value-generating ecosystem.
              </p>
            </div>

            {/* Capabilities Grid */}
            <h3 className="section-divider">Core Platform Capabilities</h3>
            <div className="capabilities-grid">
              {capabilities.map((cap, idx) => (
                <div key={idx} className="cap-card glass-panel">
                  <div className="cap-icon-wrapper">{cap.icon}</div>
                  <h4>{idx + 1}. {cap.title}</h4>
                  <p>{cap.desc}</p>
                </div>
              ))}
            </div>

            <div className="explore-bottom-grid">
              {/* What Makes It Different */}
              <div className="diff-section glass-panel">
                <h3>What Makes It Different</h3>
                <ul className="diff-list">
                  {differentiators.map((diff, idx) => (
                    <li key={idx}>
                      <strong>{diff.title}</strong> — {diff.desc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes Delivered */}
              <div className="outcomes-section glass-panel">
                <h3>Outcomes Delivered</h3>
                <table className="outcomes-table">
                  <thead>
                    <tr>
                      <th>Metric</th>
                      <th>Typical Improvement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {outcomes.map((out, idx) => (
                      <tr key={idx}>
                        <td>{out.metric}</td>
                        <td className="outcome-impact">{out.impact}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VIEW ARCHITECTURE */}
        {activeTab === 'architecture' && (
          <div className="tab-content animate-fade-up">
            <div className="tab-title-area text-center">
              <h2>Platform Architecture — <span className="text-gradient">A Layered Agentic Blueprint</span></h2>
              <p className="tab-subtitle">
                The architecture is organized into six logical layers, each with specialized agents, services, and integration patterns.
              </p>
            </div>

            {/* 6 Layer Stack */}
            <h3 className="section-divider">The Six-Layer Architecture</h3>
            <div className="layer-stack">
              {layers.map((layer, idx) => (
                <div key={idx} className="arch-layer-block">
                  <div className="arch-layer-left" style={{ backgroundColor: layer.color }}>
                    LAYER {layer.num}
                  </div>
                  <div className="arch-layer-right">
                    <h4>{layer.name}</h4>
                    <p>{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="architecture-footer" style={{ marginTop: '3rem' }}>
              The platform is not just a tool — it's an intelligent operating system for procurement and finance, where agents, data, and humans collaborate seamlessly to deliver speed, savings, compliance, and insight at scale.
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

// Simple icon mocks for the deployment list missing imports above
const Cloud = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>;
const Box = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
const Lock = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const Server = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>;

export default PlatformTabs;
