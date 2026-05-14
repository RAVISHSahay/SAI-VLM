import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, Search, Globe, ArrowRight,
  Users, Monitor, LineChart, LayoutDashboard,
  Settings, ShoppingCart, Receipt, Coins, CreditCard,
  Inbox, Factory, GitMerge, PlusSquare, ActivitySquare,
  Building2, ShoppingBag, Landmark, Stethoscope, 
  Car, Cpu, Zap, Plane, Phone,
  TrendingDown, ShieldAlert, Leaf, UsersRound, 
  ShieldCheck, TrendingUp, MonitorSmartphone, Timer
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('process');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsData = {
    process: {
      col1: [
        { name: 'Source-to-Pay', icon: Globe, desc: 'The end-to-end umbrella covering the full procurement lifecycle from sourcing to payment. Unifies all upstream and downstream modules into one connected flow.' },
        { name: 'Strategic Sourcing', icon: Cpu, desc: 'The strategic brain of procurement — drives category strategy, market intelligence, and savings programs with AI co-pilots.' },
        { name: 'Supplier Management', icon: Users, desc: 'The single source of truth for every supplier relationship. Manages onboarding, risk monitoring, and performance scorecards.' },
        { name: 'Sourcing', icon: Zap, desc: 'The execution engine for RFx events — RFI, RFP, RFQ, and reverse auctions with AI-assisted bid evaluation and award optimization.' },
        { name: 'Contract Management', icon: Monitor, desc: 'Full contract lifecycle management — authoring, redlining, e-signature, and obligation tracking with LLM-based metadata extraction.' },
        { name: 'Environmental Impact Center', icon: Leaf, desc: 'The ESG nerve center — captures Scope 1, 2, and 3 emissions and supplier ESG scores. Generates CDP, BRSR, and CSRD-ready reports.' },
        { name: 'Spend Analysis', icon: LineChart, desc: 'Real-time spend cubes with AI-driven classification. Detects maverick activity and surfaces savings opportunities without manual effort.' },
        { name: 'Analytics', icon: LayoutDashboard, desc: 'Cross-module BI with predictive insights. Embedded GenAI lets users ask questions in natural language and get charted answers.' },
      ],
      col2: [
        { name: 'Procure-to-Pay', icon: Settings, desc: 'The transactional backbone covering requisition to payment. AI-driven 3-way matching targets 80%+ touchless invoice processing.' },
        { name: 'eProcurement', icon: ShoppingCart, desc: 'The user-facing buying experience with catalogs and guided buying. Channels users to preferred suppliers and pre-negotiated prices.' },
        { name: 'External Workforce Management', icon: UsersRound, desc: 'Manages contingent labor, contractors, and SOW-based services. Covers onboarding, rate cards, and compliance regulations.' },
        { name: 'Invoicing', icon: Receipt, desc: 'Multi-channel invoice capture via e-invoicing, EDI, and OCR. Performs automated 3-way matching and tax validation across global mandates.' },
        { name: 'Payments', icon: Coins, desc: 'Orchestrates payments across ACH, SWIFT, and virtual cards. Optimizes DPO, captures discounts, and screens every payment for fraud.' },
        { name: 'Payment Cards', icon: CreditCard, desc: 'Virtual and physical card programs for tail-spend purchases. Includes spend controls and automated reconciliation without raising a PO.' },
        { name: 'Inventory Collaboration', icon: ActivitySquare, desc: 'Real-time visibility on stock, demand forecasts, and ASNs. Supports VMI, Kanban, and JIT — reducing stockouts and the bullwhip effect.' },
        { name: 'Intake Management', icon: Inbox, desc: 'The "front door" of procurement — a unified portal for any employee request (buy, hire, NDA). AI triages and routes each request.' },
      ],
      col3: [
        { name: 'Direct Materials (Sourcing)', icon: Factory, desc: 'Specialized sourcing for production materials — BOM-linked, multi-tier, with rigorous quality and regulatory rigor.' },
        { name: 'Direct Materials (Planning/Execution)', icon: GitMerge, desc: 'Connects MRP and production schedules with scheduling agreements and ASNs. Critical where materials drive 50–70% of COGS.' },
        { name: 'Supply Chain Collaboration', icon: Network, desc: 'Multi-tier visibility and coordination covering Tier-2/3 suppliers, in-transit shipments, and disruption events.' },
        { name: 'Additional Modules', icon: PlusSquare, desc: 'Vertical-specific extensions — Services Procurement, CapEx, and Trade Compliance tailored for pharma, BFSI, and energy.' },
      ]
    },
    industry: {
      col1: [
        { name: 'Manufacturing', icon: Factory, desc: 'Optimize supply chain resilience with raw material quality tracking and predictive partner maintenance.' },
        { name: 'Retail & Consumer Goods', icon: ShoppingBag, desc: 'Manage high-volume vendor ecosystems and seasonal demand with automated replenishment.' },
        { name: 'Financial Services', icon: Landmark, desc: 'Ensure rigorous regulatory compliance and cybersecurity with automated vendor vetting.' },
        { name: 'Healthcare', icon: Stethoscope, desc: 'Maintain strict data privacy and patient safety standards with comprehensive security assessments.' },
      ],
      col2: [
        { name: 'Public Sector', icon: Building2, desc: 'Enhance transparency and accountability with auditable procurement and regulatory compliance.' },
        { name: 'Automotive', icon: Car, desc: 'Streamline complex parts supply chains with strict engineering standards and JIT coordination.' },
        { name: 'Technology', icon: Cpu, desc: 'Manage rapid digital transformation with automated IT vendor onboarding and license tracking.' },
        { name: 'Energy & Utilities', icon: Zap, desc: 'Ensure infrastructure reliability and safety with rigorous subcontractor and subcontractor management.' },
      ],
      col3: [
        { name: 'Aerospace & Defense', icon: Plane, desc: 'Maintain high-security standards and supply chain integrity with strict export control compliance.' },
        { name: 'Telecommunications', icon: Phone, desc: 'Scale 5G rollouts with high-volume contract management and strict performance SLA tracking.' },
      ]
    },
    need: {
      col1: [
        { name: 'Reduce Costs', icon: TrendingDown, desc: 'Optimize Total Cost of Ownership through strategic consolidation and automated spend management.' },
        { name: 'Mitigate Risk', icon: ShieldAlert, desc: 'Ensure business continuity with real-time supplier monitoring to proactively mitigate disruptions.' },
        { name: 'Improve ESG', icon: Leaf, desc: 'Integrate ethical and sustainable criteria into sourcing to ensure a compliant supply base.' },
      ],
      col2: [
        { name: 'Supplier Diversity', icon: UsersRound, desc: 'Promote inclusive procurement by identifying and onboarding diverse-owned businesses.' },
        { name: 'Compliance Management', icon: ShieldCheck, desc: 'Automate regulatory adherence and audit readiness with centralized document tracking.' },
        { name: 'Optimize Working Capital', icon: TrendingUp, desc: 'Improve cash flow by aligning payment terms and optimizing inventory cycles through data.' },
      ],
      col3: [
        { name: 'Digital Transformation', icon: MonitorSmartphone, desc: 'Digitize manual workflows to eliminate bottlenecks and enable data-driven decision-making.' },
        { name: 'Faster Time-to-Market', icon: Timer, desc: 'Accelerate source-to-contract cycles through automated approvals and pre-vetted catalogs.' },
      ]
    }
  };

  const activeData = solutionsData[activeTab];

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
          <Network color="var(--accent-blue)" size={28} />
          <span className="brand-text">
            SAI <span className="text-gradient">VLM</span>
          </span>
        </Link>
        
        {/* Main Links */}
        <div className="navbar-links">
          
          <div className="nav-item">
            <span>Solutions</span>
            
            {/* Mega Menu Dropdown */}
            <div className="mega-menu-overlay">
              <div className="mega-menu-container">
                {/* Left Sidebar */}
                <div className="mega-menu-sidebar">
                  <h3 className="mega-menu-sidebar-title">Solutions</h3>
                  <ul className="mega-menu-tabs">
                    <li 
                      className={`mega-menu-tab ${activeTab === 'process' ? 'active' : ''}`}
                      onMouseEnter={() => setActiveTab('process')}
                      onClick={() => setActiveTab('process')}
                    >
                      By Process
                    </li>
                    <li 
                      className={`mega-menu-tab ${activeTab === 'industry' ? 'active' : ''}`}
                      onMouseEnter={() => setActiveTab('industry')}
                      onClick={() => setActiveTab('industry')}
                    >
                      By Industry
                    </li>
                    <li 
                      className={`mega-menu-tab ${activeTab === 'need' ? 'active' : ''}`}
                      onMouseEnter={() => setActiveTab('need')}
                      onClick={() => setActiveTab('need')}
                    >
                      By Business Need
                    </li>
                  </ul>
                </div>
                
                {/* Main Grid Content */}
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    {activeData?.col1?.map((item, idx) => {
                      const Icon = item.icon;
                      const target = item.name.toLowerCase().includes('source') ? '/#four-pillars-s2c' : 
                                    item.name.toLowerCase().includes('contract') ? '/#four-pillars-s2c' : '/#';
                      return (
                        <Link key={idx} to={target} className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mega-menu-column">
                    {activeData?.col2?.map((item, idx) => {
                      const Icon = item.icon;
                      const target = item.name.toLowerCase().includes('procure') ? '/#four-pillars-p2p' : 
                                    item.name.toLowerCase().includes('invoice') ? '/#procurement-lifecycle' : '/#';
                      return (
                        <Link key={idx} to={target} className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="mega-menu-column">
                    {activeData?.col3?.map((item, idx) => {
                      const Icon = item.icon;
                      const target = item.name.toLowerCase().includes('direct') ? '/#four-pillars-s2c' : 
                                    item.name.toLowerCase().includes('collaboration') ? '/#procurement-lifecycle' : '/#';
                      return (
                        <Link key={idx} to={target} className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Link to="/platform" className="nav-item" style={{ textDecoration: 'none' }}>Platform</Link>
          <div className="nav-item">Company</div>
          <div className="nav-item">Resources</div>
          <div className="nav-item">Partners</div>
          <div className="nav-item">Customers</div>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><Globe size={20} /></button>
          <button className="btn-outline">Why SAI VLM <ArrowRight size={16}/></button>
          <button className="btn-solid">Contact Us <ArrowRight size={16}/></button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
