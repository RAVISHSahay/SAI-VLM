import React, { useState } from 'react';
import { Database, Bot, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import './MasterDataIntelligence.css';

const masterDataEntities = [
  {
    id: 'vendor',
    title: '1. Vendor Master',
    issues: 'Duplicate vendor codes (e.g., "Reliance Industries Ltd," "Reliance Inds.," "RIL"), inactive vendors still active in the system, missing PAN/GST/tax IDs, mismatched bank details, related-party suppliers not flagged.',
    agents: [
      { name: 'Discovery Agent', desc: 'Scans the vendor table, ERP extensions, and AP records to identify all vendor records and their usage patterns.' },
      { name: 'Deduplication Agent', desc: 'Uses fuzzy matching, phonetic algorithms (Soundex, Metaphone), and LLM-based semantic similarity to cluster likely duplicates — even across language variations and abbreviations.' },
      { name: 'Enrichment Agent', desc: 'Auto-fetches missing data (PAN, GST, LEI, D-U-N-S, address) from authoritative external sources (GSTN portal, MCA, D&B, OFAC, sanctions lists).' },
      { name: 'Validation Agent', desc: 'Verifies tax IDs, bank account validity (penny-drop / IFSC validation), and watchlist screening.' },
      { name: 'Golden Record Agent', desc: 'Merges duplicates into a single trusted record with surviving attributes, while preserving an audit trail.' },
      { name: 'Governance Agent', desc: 'Routes exceptions to data stewards only for edge cases, learning from every human decision to reduce future intervention.' }
    ]
  },
  {
    id: 'material',
    title: '2. Material Master',
    issues: 'Same item created with multiple SKUs across plants, inconsistent descriptions ("M8 bolt SS304" vs. "Bolt M-8 stainless"), missing UoM, incorrect HSN codes, no commodity classification.',
    agents: [
      { name: 'Classification Agent', desc: 'Uses NLP and LLMs to read free-text descriptions and auto-tag each item with UNSPSC / eClass / company-specific commodity codes.' },
      { name: 'Deduplication Agent', desc: 'Clusters items based on technical attributes (dimension, grade, specification) rather than just descriptions, identifying functionally identical SKUs.' },
      { name: 'Standardization Agent', desc: 'Rewrites descriptions into a uniform "noun-modifier-attribute" format (e.g., Bolt, Hex Head, M8 x 25mm, SS304).' },
      { name: 'Enrichment Agent', desc: 'Pulls technical attributes, manufacturer part numbers, and HSN codes from supplier catalogs, manufacturer databases, and historical PO data.' },
      { name: 'Lifecycle Agent', desc: 'Flags obsolete, slow-moving, or never-used materials for archival.' }
    ]
  },
  {
    id: 'service',
    title: '3. Service Master',
    issues: 'Services described as free text, no SAC code mapping, inconsistent units (per hour vs. per day vs. per visit), poor mapping to GL accounts.',
    agents: [
      { name: 'Categorization Agent', desc: 'Uses LLMs to read service descriptions and map them to standardized service categories (facility management, IT consulting, legal, logistics).' },
      { name: 'SAC Mapping Agent', desc: 'Auto-assigns GST SAC codes based on service nature, using regulatory rules and prior tax filings.' },
      { name: 'UoM Normalization Agent', desc: 'Harmonizes service units (hour, day, deliverable, milestone) so rate cards become comparable across vendors.' },
      { name: 'Linkage Agent', desc: 'Ties each service to the correct GL, cost center, and approval workflow, eliminating misclassified spend.' }
    ]
  },
  {
    id: 'contract',
    title: '4. Contract Master',
    issues: 'Contracts stored as PDFs in shared drives, no metadata, expired contracts still referenced in POs, missing renewal dates, terms not extracted.',
    agents: [
      { name: 'Document Ingestion Agent', desc: 'Sweeps shared drives, email attachments, and CLM repositories to locate every contract.' },
      { name: 'Extraction Agent', desc: 'Uses LLMs to parse PDFs and extract key metadata: parties, effective date, expiry, value, payment terms, SLAs, penalty clauses, auto-renewal flags.' },
      { name: 'Linkage Agent', desc: 'Matches each contract to the correct vendor master, material/service master, and pricing master records.' },
      { name: 'Obligation Agent', desc: 'Continuously tracks milestones, renewal windows, and price escalation clauses, alerting stakeholders before expiry.' },
      { name: 'Compliance Agent', desc: 'Flags contracts missing mandatory clauses (data privacy, indemnity, anti-bribery) and triggers remediation.' }
    ]
  },
  {
    id: 'pricing',
    title: '5. Pricing Master',
    issues: 'Multiple price lists for the same item, expired contract prices still active, no link to negotiated discounts/rebates, manual rate updates causing errors.',
    agents: [
      { name: 'Reconciliation Agent', desc: 'Compares contract pricing, PO pricing, and invoice pricing to surface inconsistencies and price leakage.' },
      { name: 'Versioning Agent', desc: 'Maintains effective-dated pricing with clear validity windows, retiring expired prices automatically.' },
      { name: 'Rebate Agent', desc: 'Tracks volume thresholds, tiered discounts, and accrual calculations across the year to ensure earned rebates are claimed.' },
      { name: 'Benchmarking Agent', desc: 'Compares negotiated prices to market indices (commodity prices, Should-Cost models) and flags off-market pricing for renegotiation.' }
    ]
  },
  {
    id: 'tax',
    title: '6. Tax / HSN / SAC',
    issues: 'Wrong HSN codes leading to GST mismatches, outdated tax rates, missing reverse-charge flags, incorrect place-of-supply mappings.',
    agents: [
      { name: 'Mapping Agent', desc: 'Uses LLMs trained on GST/HSN regulatory texts to auto-classify materials and services to correct codes.' },
      { name: 'Rate Update Agent', desc: 'Continuously monitors tax notifications (CBIC, state GST circulars) and updates rate tables in real time.' },
      { name: 'Validation Agent', desc: 'Reconciles HSN/SAC on POs, invoices, and GSTR filings — catching mismatches before they cause GSTR-2B reconciliation issues or ITC loss.' },
      { name: 'Geo-Tax Agent', desc: 'Ensures correct CGST/SGST/IGST application based on vendor and plant locations.' }
    ]
  },
  {
    id: 'gl',
    title: '7. GL / Chart of Accounts',
    issues: 'Inconsistent GL coding across business units, redundant accounts, accounts no longer in use, expense miscoding causing P&L distortions.',
    agents: [
      { name: 'Rationalization Agent', desc: 'Analyzes posting patterns to identify dormant, redundant, or overlapping GL accounts and proposes consolidation.' },
      { name: 'Coding Agent', desc: 'Uses ML models to auto-suggest GL accounts on requisitions and invoices based on historical patterns, vendor, and item category — drastically reducing miscoding.' },
      { name: 'Hierarchy Agent', desc: 'Maintains group → company → BU → department mappings so consolidated reporting stays clean.' },
      { name: 'Audit Agent', desc: 'Flags unusual postings (manual JEs, round-number entries, weekend postings) for review.' }
    ]
  },
  {
    id: 'cost',
    title: '8. Cost & Profit Centre',
    issues: 'Cost centers left open after org restructuring, employees mapped to wrong centers, allocation rules outdated, no link to budget owners.',
    agents: [
      { name: 'Org Sync Agent', desc: 'Integrates with HR systems to automatically realign cost centers when reporting structures change.' },
      { name: 'Allocation Agent', desc: 'Validates allocation rules (e.g., shared services cost split) and flags drift from agreed allocation logic.' },
      { name: 'Lifecycle Agent', desc: 'Identifies cost centers with no postings for 6+ months and recommends closure.' },
      { name: 'Budget Linkage Agent', desc: 'Ensures every cost center is tied to a budget owner, preventing orphan spend.' }
    ]
  },
  {
    id: 'bank',
    title: '9. Bank Master',
    issues: 'Outdated IFSC/SWIFT codes, bank account fraud risk (vendor bank changes via email phishing), duplicate banking records, missing penny-drop verification.',
    agents: [
      { name: 'Validation Agent', desc: 'Runs penny-drop / API-based account verification against IFSC and SWIFT registries.' },
      { name: 'Fraud Detection Agent', desc: 'Flags suspicious bank changes — especially when changes coincide with email-based requests, rerouted to non-domestic accounts, or come from a recently created email domain.' },
      { name: 'Sync Agent', desc: 'Keeps bank reference data (IFSC, BIC) current using RBI / SWIFT feeds.' },
      { name: 'Sanctions Agent', desc: 'Continuously screens beneficiary banks against OFAC, UN, and EU sanctions lists.' }
    ]
  },
  {
    id: 'payment',
    title: '10. Payment Terms',
    issues: 'Dozens of variants of "Net 30" coded differently, payment terms inconsistent between contract and PO, missing early-payment discount terms.',
    agents: [
      { name: 'Standardization Agent', desc: 'Consolidates payment term variants into a controlled vocabulary (e.g., NT30, NT45, NT60, 2/10 NET 30).' },
      { name: 'Reconciliation Agent', desc: 'Ensures the term on the PO matches the contract; flags unauthorized deviations.' },
      { name: 'Working Capital Agent', desc: 'Simulates DPO impact of different terms across the supplier base and recommends harmonization to optimize cash flow.' },
      { name: 'Discount Capture Agent', desc: 'Identifies opportunities where early-payment discounts are available but not being captured.' }
    ]
  },
  {
    id: 'uom',
    title: '11. UoM & Currency',
    issues: 'Same item bought in "EA," "PC," "NOS," "Each"; currency codes inconsistent (USD vs. US$); FX rates not updated daily; conversion factors missing.',
    agents: [
      { name: 'Normalization Agent', desc: 'Maps all UoM variants to ISO standards (PCE, KG, M, HR) with conversion factors maintained for cross-UoM transactions.' },
      { name: 'FX Sync Agent', desc: 'Pulls daily exchange rates from authoritative sources (RBI, ECB, central bank feeds) and updates the rate table automatically.' },
      { name: 'Conversion Agent', desc: 'Validates that all multi-UoM and multi-currency transactions reconcile correctly to the base UoM and reporting currency.' },
      { name: 'Consistency Agent', desc: 'Ensures unit conversions are uniform across master data (e.g., a 25kg bag of cement consistently treated as 1 BAG = 25 KG).' }
    ]
  },
  {
    id: 'plant',
    title: '12. Plant / Location',
    issues: 'Closed plants still active, GST registration mismatched to plant location, address formats inconsistent, no geo-coordinates for logistics planning.',
    agents: [
      { name: 'Geo-Validation Agent', desc: 'Standardizes addresses using mapping APIs (Google Maps, HERE) and assigns lat-long coordinates.' },
      { name: 'GSTIN Linkage Agent', desc: 'Ensures every plant has the correct GSTIN tied to its state, enabling accurate place-of-supply determination.' },
      { name: 'Lifecycle Agent', desc: 'Monitors plant status (active / under construction / decommissioned) by cross-referencing posting activity and HR/asset data.' },
      { name: 'Logistics Enrichment Agent', desc: 'Adds operational metadata — receiving hours, dock capacity, lead time from major hubs — to support inbound planning.' }
    ]
  }
];

const MasterDataIntelligence = () => {
  const [activeEntity, setActiveEntity] = useState(masterDataEntities[0].id);

  const currentEntity = masterDataEntities.find(e => e.id === activeEntity);

  const handleTabClick = (id) => {
    setActiveEntity(id);
    const detailsSection = document.getElementById('entity-details');
    if (detailsSection) {
      // Small delay to allow state to render first
      setTimeout(() => {
        detailsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
    }
  };

  return (
    <section className="mdi-section" id="master-data-intelligence">
      <div className="container">
        <div className="mdi-header text-center">
          <h2>Master Data Cleansing & Harmonisation via <span className="text-gradient">Agentic AI</span></h2>
          <p className="mdi-subtitle">
            An Agentic AI layer transforms manual data stewardship into a continuous, autonomous, self-healing process where specialized agents discover, deduplicate, enrich, validate, and govern all 12 foundational entities in real time.
          </p>
        </div>

        <div className="mdi-layout-horizontal">
          
          {/* Horizontal Navigation */}
          <div className="mdi-top-nav-section">
            <div className="mdi-section-title-wrapper">
              <Database size={32} color="var(--accent-blue)" />
              <h3 className="mdi-section-title">The 12 Foundational Entities</h3>
            </div>
            
            <div className="mdi-tabs-container">
              <ul className="mdi-horizontal-tabs">
                {masterDataEntities.map(entity => (
                  <li 
                    key={entity.id}
                    className={`mdi-tab-item ${activeEntity === entity.id ? 'active' : ''}`}
                    onClick={() => handleTabClick(entity.id)}
                  >
                    {/* Splitting the title into two lines as shown in the image if possible, or just space */}
                    {entity.title.replace('. ', '.\n')}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="mdi-content glass-panel animate-fade-up" id="entity-details">
            <div className="mdi-content-header">
              <h3>{currentEntity.title}</h3>
            </div>

            <div className="mdi-issues-box">
              <div className="mdi-issues-title">
                <AlertTriangle size={18} color="#f59e0b" /> Common Issues Addressed
              </div>
              <p>{currentEntity.issues}</p>
            </div>

            <h4 className="mdi-agents-title"><Bot size={20} color="var(--accent-blue)" /> Agentic Cleansing Approach</h4>
            <div className="mdi-agents-grid">
              {currentEntity.agents.map((agent, idx) => (
                <div key={idx} className="mdi-agent-card">
                  <h5>{agent.name}</h5>
                  <p>{agent.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Overview Bottom Section */}
        <div className="mdi-system-overview glass-panel">
          <div className="system-header">
            <Cpu size={24} color="var(--accent-blue)" />
            <h3>How the Agentic Layer Operates as a System</h3>
          </div>
          <p className="system-intro">
            The 12 entities don't exist in isolation — they are deeply interconnected. The agentic layer provides cross-cutting capabilities that traditional MDM tools cannot:
          </p>
          <div className="system-features">
            <div className="sys-feat"><ShieldCheck size={18} color="#10b981" /> <strong>Continuous, not periodic:</strong> Runs 24/7, catching errors at entry and self-healing.</div>
            <div className="sys-feat"><ShieldCheck size={18} color="#10b981" /> <strong>Cross-entity orchestration:</strong> A Master Orchestrator Agent ensures changes ripple correctly across all linked entities.</div>
            <div className="sys-feat"><ShieldCheck size={18} color="#10b981" /> <strong>Human-in-the-loop:</strong> Handles 80–90% autonomously, escalating only ambiguous cases to data stewards.</div>
            <div className="sys-feat"><ShieldCheck size={18} color="#10b981" /> <strong>Audit and explainability:</strong> Every action is logged with reasoning, satisfying SOX, GDPR, and internal audit requirements.</div>
            <div className="sys-feat"><ShieldCheck size={18} color="#10b981" /> <strong>Closed-loop learning:</strong> Patterns from exceptions feed back into AI models, strengthening the foundation with every transaction.</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MasterDataIntelligence;
