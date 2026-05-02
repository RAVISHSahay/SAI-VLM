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
        { name: 'Manufacturing', icon: Factory },
        { name: 'Retail & Consumer Goods', icon: ShoppingBag },
        { name: 'Financial Services', icon: Landmark },
        { name: 'Healthcare', icon: Stethoscope },
      ],
      col2: [
        { name: 'Public Sector', icon: Building2 },
        { name: 'Automotive', icon: Car },
        { name: 'Technology', icon: Cpu },
        { name: 'Energy & Utilities', icon: Zap },
      ],
      col3: [
        { name: 'Aerospace & Defense', icon: Plane },
        { name: 'Telecommunications', icon: Phone },
      ]
    },
    need: {
      col1: [
        { name: 'Reduce Costs', icon: TrendingDown },
        { name: 'Mitigate Risk', icon: ShieldAlert },
        { name: 'Improve ESG', icon: Leaf },
      ],
      col2: [
        { name: 'Supplier Diversity', icon: UsersRound },
        { name: 'Compliance Management', icon: ShieldCheck },
        { name: 'Optimize Working Capital', icon: TrendingUp },
      ],
      col3: [
        { name: 'Digital Transformation', icon: MonitorSmartphone },
        { name: 'Faster Time-to-Market', icon: Timer },
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
                      return (
                        <a key={idx} href="#" className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mega-menu-column">
                    {activeData?.col2?.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a key={idx} href="#" className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="mega-menu-column">
                    {activeData?.col3?.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <a key={idx} href="#" className="mega-menu-link">
                          <div className="mega-icon-wrapper"><Icon size={18} /></div>
                          <div className="mega-link-content">
                            <span className="mega-link-name">{item.name}</span>
                            {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                          </div>
                        </a>
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
