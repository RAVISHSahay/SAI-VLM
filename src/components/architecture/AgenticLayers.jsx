import React from 'react';
import { Cpu } from 'lucide-react';

const layers = [
  {
    title: "L1 • STRATEGIC",
    colorClass: "layer-teal",
    agentsCount: 8,
    agents: [
      "Supplier Discovery", "Vendor Ranking", "Bid Scoring", "Reverse Auction",
      "Negotiation", "Contract Drafting", "Clause Analyzer", "Renewal Tracker"
    ]
  },
  {
    title: "L2 • OPERATIONAL",
    colorClass: "layer-purple",
    agentsCount: 8,
    agents: [
      "Demand Forecaster", "PR Generation", "Catalog Match", "Approval Routing",
      "PO Drafting", "PO Amendment", "Vendor Communication", "Approval Compliance"
    ]
  },
  {
    title: "L3 • LOGISTICS",
    colorClass: "layer-orange",
    agentsCount: 10,
    agents: [
      "ASN Tracking", "Logistics Optimizer", "ANPR Gate", "Cold-Chain Monitor",
      "Weighbridge", "Vision-QC", "Receiving", "Putaway", "Damage & Variance", "Returns / RTV"
    ]
  },
  {
    title: "L4 • FINANCE",
    colorClass: "layer-green",
    agentsCount: 10,
    agents: [
      "Invoice Capture (IDP)", "Header & Line Parser", "3-Way Match", "Tax Validation",
      "Park & Block Resolver", "Posting", "Cash-Disc / DPO", "Payment Run", "Vendor Statement", "FX & Hedging"
    ]
  },
  {
    title: "L5 • ANALYTICS",
    colorClass: "layer-red",
    agentsCount: 8,
    agents: [
      "Vendor Scorecard", "Reconciliation", "Spend Analytics", "Risk Monitoring",
      "ESG Compliance", "Anomaly Detection", "Performance Insights", "Renewal Strategy"
    ]
  }
];

const AgenticLayers = ({ hoveredStep }) => {
  return (
    <div className="arch-layer agents-layer">
      <div className="arch-layer-header agents-header">
        <div className="header-title">
          <Cpu className="header-icon" />
          <h2>AGENTIC AI LAYERS</h2>
        </div>
        <div className="header-badge">44 AGENTS &bull; 5 LAYERS</div>
      </div>
      <div className="agents-grid">
        {layers.map((layer, lIdx) => (
          <div key={lIdx} className={`agent-column ${layer.colorClass}`}>
            <div className="agent-column-header">
              <h4>{layer.title}</h4>
              <span className="agent-count">{layer.agentsCount} agents</span>
            </div>
            <ul className="agent-list">
              {layer.agents.map((agent, aIdx) => (
                <li key={aIdx} className="agent-item">
                  <span className="agent-dot"></span>
                  {agent}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgenticLayers;
