import React, { useState } from 'react';
import './FourPillars.css';

const pillars = [
  {
    id: 's2c',
    tabLabel: 'S2C Phase',
    dotColor: '#00e5ff',
    title: '1. S2C — Source-to-Contract Phase',
    definition: 'Source-to-Contract is the strategic, upstream portion of procurement. It covers everything from identifying a sourcing need to signing a binding agreement with the chosen supplier. The focus here is on strategy, value creation, and risk mitigation rather than transactional execution.',
    subprocesses: [
      { name: 'a) Spend Analysis & Category Management', desc: 'The cycle begins by analyzing historical spend data to understand where money is going, with which suppliers, and under what terms. Spend is then grouped into categories (IT hardware, MRO, marketing, logistics, etc.), and a strategy is built for each category based on market conditions, demand patterns, and business priorities.' },
      { name: 'b) Sourcing Strategy & Market Analysis', desc: 'For each category, procurement teams study the supply market — number of qualified suppliers, pricing trends, geopolitical risks, technology shifts, and Porter\'s Five Forces dynamics. This shapes the sourcing approach: single source vs. multi-source, global vs. local, partnership vs. competitive bidding.' },
      { name: 'c) Supplier Identification & RFx', desc: 'Potential suppliers are identified, pre-qualified, and invited to participate in a structured event:\n• RFI (Request for Information): to gather capability data\n• RFP (Request for Proposal): for complex needs requiring solutions\n• RFQ (Request for Quotation): for well-defined goods/services where price is the main differentiator\n• Reverse auctions: for commodities' },
      { name: 'd) Supplier Evaluation & Selection', desc: 'Responses are evaluated using weighted scoring on commercial, technical, financial stability, ESG, and risk parameters. Total Cost of Ownership (TCO) — not just unit price — drives the decision.' },
      { name: 'e) Negotiation', desc: 'Procurement teams negotiate price, payment terms, SLAs, warranties, indemnities, IP rights, exit clauses, and volume rebates. Strategies range from positional bargaining to integrative, value-based negotiation.' },
      { name: 'f) Contract Creation & Execution', desc: 'Legal terms are finalized through Contract Lifecycle Management (CLM) tools. The contract is signed, stored in a central repository, and key obligations and milestones are flagged for tracking.' }
    ],
    outcome: 'A qualified supplier base, signed contracts, negotiated savings, and a documented audit trail. S2C typically delivers the bulk of measurable procurement savings.',
    tools: 'SAP Ariba Sourcing, Coupa, Jaggaer, GEP SMART, Icertis CLM, DocuSign CLM.'
  },
  {
    id: 'p2p',
    tabLabel: 'P2P Phase',
    dotColor: '#3b82f6',
    title: '2. P2P — Procure-to-Pay Phase',
    definition: 'Procure-to-Pay is the operational, transactional, downstream half of procurement. It begins when a user raises a need and ends when the supplier is paid. The focus is on efficiency, control, compliance, and accuracy at scale.',
    subprocesses: [
      { name: 'a) Purchase Requisition (PR)', desc: 'An end-user (e.g., engineering, marketing, plant) creates a requisition specifying what is needed, quantity, required delivery date, budget code, and justification. The PR moves through approval workflows based on amount and category.' },
      { name: 'b) Purchase Order (PO) Creation', desc: 'Once the PR is approved, it is converted into a Purchase Order — a legally binding document referencing pre-negotiated contracts, prices, and terms. Catalog-based purchasing (punch-out catalogs, hosted catalogs) drives most indirect spend automatically.' },
      { name: 'c) Order Acknowledgement & Expediting', desc: 'The supplier confirms the PO, commits to delivery dates, and flags any discrepancies. Buyers monitor open orders, expedite delays, and manage exceptions.' },
      { name: 'd) Goods/Services Receipt (GRN)', desc: 'When goods arrive or services are delivered, the receiver records quantity, quality, and condition in the system. For services, this often means timesheet approval or milestone sign-off.' },
      { name: 'e) Invoice Receipt & Three-Way Matching', desc: 'The supplier submits an invoice. The system then performs a three-way match between the PO, the GRN, and the invoice. If quantities, prices, and tax all align within tolerance, the invoice is auto-approved. Mismatches go to exception handling.' },
      { name: 'f) Payment Processing', desc: 'Approved invoices are scheduled for payment per agreed terms (Net 30, Net 60, dynamic discounting, supply chain finance). Payment is executed through ACH, wire, virtual cards, or check.' },
      { name: 'g) Accounting & Reporting', desc: 'Transactions are posted to the GL, accruals are reversed, taxes are accounted for, and dashboards report on PO compliance, maverick spend, on-time payment, and DPO (Days Payable Outstanding).' }
    ],
    outcome: 'Goods and services delivered on time, accurate payments to suppliers, audit-ready records, and minimized leakage from off-contract spend.',
    tools: 'SAP S/4HANA, Oracle Fusion Procurement, Coupa, Ariba Buying & Invoicing, Basware, Tipalti.'
  },
  {
    id: 'p2r',
    tabLabel: 'P2R Phase',
    dotColor: '#60a5fa',
    title: '3. P2R — Plan-to-Receive Phase',
    definition: 'Plan-to-Receive (sometimes called Plan-to-Replenish or Forecast-to-Receive) bridges demand planning and supply chain execution. It ensures that the right materials arrive at the right place, at the right time, and in the right quantities to meet operational needs — a phase that is critical in manufacturing, retail, and distribution-heavy industries. While S2C decides who to buy from and P2P handles the transaction, P2R decides what, when, and how much to buy and ensures physical receipt aligns with the plan.',
    subprocesses: [
      { name: 'a) Demand Forecasting', desc: 'Historical sales data, market trends, promotions, seasonality, and external indicators are used to forecast demand. Statistical models (moving averages, exponential smoothing, ARIMA) and AI/ML models generate the baseline, which is refined through sales & operations planning (S&OP) consensus.' },
      { name: 'b) Inventory Planning & Replenishment Strategy', desc: 'Safety stock levels, reorder points, EOQ (Economic Order Quantity), and service-level targets are calculated for every SKU. Replenishment models — min/max, kanban, VMI (Vendor Managed Inventory), JIT — are selected based on item criticality and lead time.' },
      { name: 'c) MRP / Supply Planning', desc: 'Material Requirements Planning explodes the BOM (Bill of Materials), nets gross requirements against on-hand inventory, and generates planned orders aligned to production schedules. Capacity constraints and supplier lead times are factored in.' },
      { name: 'd) Purchase Order Release', desc: 'Planned orders convert to firm POs and flow into the P2P process. Lead time, supplier capacity commitments, and contractual flexibilities (rolling forecasts, capacity reservations) are honored.' },
      { name: 'e) Order Tracking & Expediting', desc: 'Inbound shipments are tracked through ASN (Advance Shipping Notices), EDI, and freight tracking. Delays trigger expediting, mode upgrades, or alternate sourcing.' },
      { name: 'f) Goods Receipt & Quality Inspection', desc: 'Material physically arrives and goes through receiving, quality inspection (incoming QC), and put-away into stores or production lines. Non-conforming material is quarantined and a Supplier Corrective Action Request (SCAR) is raised.' },
      { name: 'g) Inventory Reconciliation', desc: 'Receipts are reconciled with POs, ASNs, and demand forecasts. Discrepancies feed back into supplier performance metrics and forecasting accuracy reviews.' }
    ],
    outcome: 'Synchronized supply with demand, optimal working capital tied up in inventory, high fill rates, and low stockouts/excesses.',
    tools: 'SAP IBP, Oracle Demand Management Cloud, Kinaxis RapidResponse, o9 Solutions, Blue Yonder, Anaplan.'
  },
  {
    id: 'srm',
    tabLabel: 'SRM Phase',
    dotColor: '#00e5ff',
    title: '4. SRM — Supplier Relationship Management Phase',
    definition: 'SRM is the continuous, strategic discipline of managing, measuring, and growing the relationship with suppliers after contracts are signed. It treats key suppliers as partners in value creation rather than as commodity sources, and runs in parallel with all other phases.',
    subprocesses: [
      { name: 'a) Supplier Segmentation', desc: 'Not every supplier deserves the same level of attention. Suppliers are segmented using a Kraljic-style matrix or similar models into categories such as:\n• Strategic partners: high spend, high risk, hard to replace\n• Bottleneck suppliers: low spend but high risk\n• Leverage suppliers: high spend, low risk, easily switchable\n• Routine/transactional suppliers: low spend, low risk\nThe segment determines governance intensity, communication cadence, and investment.' },
      { name: 'b) Onboarding & Master Data Management', desc: 'New suppliers are formally onboarded — KYC/KYS, banking details, tax forms (W-9, GST, etc.), insurance certificates, code-of-conduct sign-off, ESG declarations, and cybersecurity attestations are collected and validated.' },
      { name: 'c) Performance Management (SPM)', desc: 'Suppliers are measured on a balanced scorecard: quality (PPM defect rates), delivery (OTIF — On Time In Full), cost (PPV — Purchase Price Variance), responsiveness, innovation, and sustainability. Scorecards are reviewed in quarterly business reviews (QBRs).' },
      { name: 'd) Risk Management', desc: 'Continuous monitoring of supplier financial health, geopolitical exposure, single-source dependencies, cyber posture, and ESG compliance. Tools like Dun & Bradstreet, RapidRatings, and EcoVadis feed risk dashboards. Mitigation includes dual sourcing, stockpiling, and contingency contracts.' },
      { name: 'e) Supplier Development', desc: 'For strategic suppliers underperforming or with growth potential, joint improvement plans (lean workshops, capacity build-up, technology transfer, training) are executed. The buyer invests in supplier capability because the return flows back as quality, cost, or innovation gains.' },
      { name: 'f) Innovation & Collaboration', desc: 'Strategic suppliers are brought in early into product design (Early Supplier Involvement), joint R&D programs, and value engineering workshops. Innovation pipelines are jointly tracked.' },
      { name: 'g) Governance & Relationship Reviews', desc: 'Multi-tier governance is set up: operational reviews (monthly), tactical reviews (quarterly), strategic reviews (annual executive-level). Issues are escalated through defined channels.' },
      { name: 'h) Contract Compliance & Renewal', desc: 'Compliance to negotiated terms — pricing, rebates, SLAs — is audited. As contracts approach expiry, renewal strategy is decided and the cycle loops back to S2C if renegotiation or rebidding is needed.' }
    ],
    outcome: 'Reduced supply risk, higher quality, joint innovation, preferential treatment from strategic suppliers, and continuously improving total value beyond the contracted price.',
    tools: 'SAP Ariba SLP, Coupa SIM, GEP SMART SRM, HICX, EcoVadis (sustainability), Riskmethods.'
  }
];

const FourPillars = () => {
  const [activeTab, setActiveTab] = useState('s2c');

  const activeData = pillars.find(p => p.id === activeTab);

  return (
    <section className="four-pillars-section">
      <div className="container">
        
        <div className="pillars-intro text-center">
          <h2>The Four Pillars of <span className="text-gradient">Procurement</span></h2>
          <p className="pillars-intro-text">
            These four phases together form the end-to-end procurement and supply chain lifecycle. Each has a distinct purpose, set of activities, stakeholders, and outcomes, but they are deeply interconnected.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="pillars-tabs-container">
          <ul className="pillars-tabs">
            {pillars.map((pillar) => (
              <li 
                key={pillar.id}
                className={`pillar-tab ${activeTab === pillar.id ? 'active' : ''}`}
                onClick={() => setActiveTab(pillar.id)}
              >
                <span className="pillar-dot" style={{ backgroundColor: pillar.dotColor }}></span>
                {pillar.tabLabel}
              </li>
            ))}
          </ul>
        </div>

        {/* Tab Content */}
        <div className="pillar-content glass-panel animate-fade-up">
          <h3 className="pillar-title">{activeData.title}</h3>
          
          <div className="pillar-definition">
            <strong>Definition:</strong> {activeData.definition}
          </div>

          <h4 className="pillar-section-title">Key Sub-processes:</h4>
          <div className="pillar-subprocesses">
            {activeData.subprocesses.map((sub, idx) => (
              <div key={idx} className="subprocess-item">
                <h5>{sub.name}</h5>
                <p>
                  {sub.desc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < sub.desc.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>

          <div className="pillar-footer-info">
            <div className="outcome-box">
              <strong>Outcome:</strong> {activeData.outcome}
            </div>
            <div className="tools-box">
              <strong>Common tools:</strong> {activeData.tools}
            </div>
          </div>
        </div>

        {/* Connection Section */}
        <div className="pillars-connection glass-panel">
          <h4 className="connection-title">How the Four Phases Connect</h4>
          <p>
            Think of these as a continuous loop rather than a linear sequence:
            <br/><br/>
            <strong>S2C</strong> sets the strategy and the contract → <strong>P2P</strong> executes the transactions under that contract → <strong>P2R</strong> ensures the right quantities flow at the right time → <strong>SRM</strong> runs continuously across all of them, ensuring the supplier delivers value, gets developed, and stays aligned.
            <br/><br/>
            Insights from SRM and P2P (performance, risk, spend leakage) feed back into the next S2C cycle, closing the loop and driving continuous improvement.
            <br/><br/>
            A mature procurement function balances all four — strong S2C without strong P2P leaks savings; strong P2P without P2R causes stockouts or overstocking; and none of it sustains without SRM holding the supplier ecosystem together.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FourPillars;
