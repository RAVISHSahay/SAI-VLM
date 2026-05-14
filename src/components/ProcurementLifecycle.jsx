import React, { useState } from 'react';
import { ArrowRight, Target, LayoutGrid, MonitorDot } from 'lucide-react';
import './ProcurementLifecycle.css';

const lifecycleData = [
  // ROW 1: Strategic Foundation
  { id: 'discover', row: 1, label: 'Discover', 
    text: 'Identify business needs, scan the supply market, and surface potential vendors. This is where demand signals meet market intelligence to shape what to buy and from whom.',
    kpi: 'Spend Visibility %, Number of Potential Suppliers Identified',
    system: 'SAP Ariba Discovery, Coupa Sourcing, Scout RFP' },
  { id: 'source', row: 1, label: 'Source', 
    text: 'Run structured RFx events (RFI / RFP / RFQ), evaluate proposals, and shortlist candidates. Sourcing strategy is finalized — single vs. multi-source, global vs. local, partnership vs. competitive.',
    kpi: 'Sourcing Savings %, RFP Cycle Time',
    system: 'SAP Ariba Sourcing, GEP SMART, Ivalua Sourcing' },
  { id: 'onboard', row: 1, label: 'Onboard', 
    text: 'Bring the selected supplier into your ecosystem: collect KYC, banking, tax, insurance, and code-of-conduct documents; create the supplier master record in ERP/SRM systems.',
    kpi: 'Onboarding Cycle Time, Data Completeness %',
    system: 'SAP Ariba SLP, Coupa SIM, HICX' },
  { id: 'verify', row: 1, label: 'Verify', 
    text: 'Conduct due diligence — financial health, sanctions screening, ESG attestations, cybersecurity posture, and reference checks — to confirm the supplier is fit to engage.',
    kpi: 'Supplier Risk Score, Compliance Audit Pass Rate',
    system: 'EcoVadis, Riskmethods, Dun & Bradstreet' },
  { id: 'control', row: 1, label: 'Control', 
    text: 'Establish governance, risk controls, approval workflows, and policy guardrails so all future transactions with this supplier stay within sanctioned boundaries.',
    kpi: 'Policy Adherence %, Workflow Bottlenecks',
    system: 'Coupa Procurement, SAP S/4HANA Core' },
  { id: 'contract', row: 1, label: 'Contract', 
    text: 'Draft, negotiate, and execute the legal agreement. Pricing, SLAs, liabilities, IP, indemnities, and exit clauses are locked in via CLM tools and digital signature.',
    kpi: 'Contract Cycle Time, % Spend Under Contract',
    system: 'Icertis CLM, SAP Ariba Contracts, DocuSign CLM' },
  { id: 'comply', row: 1, label: 'Comply', 
    text: 'Ensure ongoing adherence to regulatory, contractual, and internal policy obligations — tax, trade, anti-bribery, data privacy, ESG, and certification renewals.',
    kpi: 'Non-Compliance Incidents, Expired Certifications',
    system: 'SAP Ariba Supplier Risk, Coupa Risk Assess' },

  // ROW 2: Transactional Execution
  { id: 'standardize', row: 2, label: 'Standardize', 
    text: 'Drive consistency through punch-out catalogs, preferred-supplier lists, standard terms, and templates. This is the antidote to maverick spend and rogue purchasing.',
    kpi: 'Catalog Spend %, Maverick Spend %',
    system: 'Coupa Catalogs, SAP Ariba Buying' },
  { id: 'procure', row: 2, label: 'Procure', 
    text: 'End user raises a requisition; once approved through workflow, it converts into a Purchase Order referencing the contract, catalog price, and budget code.',
    kpi: 'PR-to-PO Cycle Time, Touchless PO %',
    system: 'SAP Ariba Procurement, Coupa BSM' },
  { id: 'execute', row: 2, label: 'Execute', 
    text: 'Supplier acknowledges the PO, commits to delivery dates, and fulfills the order — shipping goods or delivering services within agreed timelines.',
    kpi: 'PO Confirmation Rate, Lead Time Variance',
    system: 'SAP Business Network (Ariba Network)' },
  { id: 'capture', row: 2, label: 'Capture', 
    text: 'Record the Goods Receipt Note (GRN) or service confirmation, and capture the supplier invoice through digital channels (e-invoicing, OCR, EDI).',
    kpi: 'E-Invoicing %, GRN Processing Time',
    system: 'Basware, Tradeshift, Coupa Invoicing' },
  { id: 'validate', row: 2, label: 'Validate', 
    text: 'Perform 3-way matching (PO ↔ GRN ↔ Invoice). Auto-approve clean matches; route exceptions on price, quantity, or tax mismatches for resolution.',
    kpi: 'First-Pass Yield %, Invoice Exception Rate',
    system: 'SAP S/4HANA Finance, OpenText OCR' },
  { id: 'pay', row: 2, label: 'Pay', 
    text: 'Schedule and execute payment per agreed terms — Net 30/60, early-payment discounts, dynamic discounting, or supply chain financing — via ACH, wire, or virtual card.',
    kpi: 'Days Payable Outstanding (DPO), Early Payment Discounts Captured',
    system: 'Taulia, Tipalti, Coupa Pay' },
  { id: 'reconcile', row: 2, label: 'Reconcile', 
    text: 'Post entries to the General Ledger, reverse accruals, reconcile supplier statements, close out the transaction, and feed data into spend analytics.',
    kpi: 'Time to Close, Reconciliation Error Rate',
    system: 'SAP ERP, Oracle NetSuite, BlackLine' },

  // ROW 3: Lifecycle Management
  { id: 'evaluate', row: 3, label: 'Evaluate', 
    text: 'Measure supplier performance on a balanced scorecard: quality (PPM defects), delivery (OTIF), cost (PPV), responsiveness, innovation, and sustainability.',
    kpi: 'On-Time In-Full (OTIF), Defect Rate (PPM)',
    system: 'SAP Ariba Supplier Performance, Coupa Supplier Insights' },
  { id: 'engage', row: 3, label: 'Engage', 
    text: 'Run QBRs, joint improvement programs, innovation workshops, and executive reviews. Strategic suppliers move from vendors to value-creating partners here.',
    kpi: 'Joint Innovation Projects, QBR Completion Rate',
    system: 'Ivalua SRM, GEP SMART' },
  { id: 'renew', row: 3, label: 'Renew', 
    text: 'As the contract nears expiry, decide the path forward: renew as-is, renegotiate, rebid, or extend — feeding intelligence back into the Source stage if a fresh tender is needed.',
    kpi: 'Contract Renewal Rate, Time to Renew',
    system: 'Icertis CLM, SAP Ariba Contracts' },
  { id: 'exit', row: 3, label: 'Exit', 
    text: 'When the relationship ends, offboard cleanly: deactivate system access, settle final dues, recover assets/data/IP, archive records, and document lessons learned for future sourcing.',
    kpi: 'Offboarding Compliance %, System Access Revocation Time',
    system: 'SailPoint (Identity), ERP Master Data Management' }
];

const ProcurementLifecycle = () => {
  const [activeStage, setActiveStage] = useState('discover');

  const rows = [1, 2, 3];
  const activeData = lifecycleData.find(stage => stage.id === activeStage);

  return (
    <section className="lifecycle-section" id="procurement-lifecycle">
      <div className="container">
        
        <div className="lifecycle-header text-center">
          <h2>The 18-Stage Procurement <span className="text-gradient">Lifecycle</span></h2>
          <p className="lifecycle-subtitle">
            Expanding the four pillars into granular execution steps. The flow loops continuously from discovering a need to eventually exiting a relationship.
          </p>
        </div>

        {/* Interactive Flowchart */}
        <div className="lifecycle-flowchart">
          {rows.map(rowNum => {
            const rowStages = lifecycleData.filter(s => s.row === rowNum);
            return (
              <div key={rowNum} className="flowchart-row-wrapper">

                <div className="flowchart-row">
                  {rowStages.map((stage, idx) => (
                    <React.Fragment key={stage.id}>
                      <button 
                        className={`lifecycle-node ${activeStage === stage.id ? 'active' : ''} row-${rowNum}`}
                        onClick={() => setActiveStage(stage.id)}
                      >
                        {stage.label}
                      </button>
                      {idx < rowStages.length - 1 && (
                        <ArrowRight size={16} className="flowchart-arrow" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lifecycle-footer text-center">
          <p>
            <strong>The flow in one line:</strong> Discover the need → Source and contract a supplier → Onboard, verify, and control them → Standardize and run transactions → Pay and reconcile → Continuously evaluate, engage, renew, and eventually exit. The cycle then loops back to Discover for the next need.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProcurementLifecycle;
