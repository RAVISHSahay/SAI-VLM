import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, Search, Globe, ArrowRight,
  Users, Monitor, LineChart, LayoutDashboard,
  Settings, ShoppingCart, Receipt, Coins, CreditCard,
  Inbox, Factory, GitMerge, PlusSquare,
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
        { name: 'Source-to-Pay', icon: Globe },
        { name: 'Strategic Sourcing', icon: Globe },
        { name: 'Supplier Management', icon: Users },
        { name: 'Sourcing', icon: Globe },
        { name: 'Contract Management', icon: Monitor },
        { name: 'Environmental Impact Center', icon: Globe },
        { name: 'Spend Analysis', icon: LineChart },
        { name: 'Analytics', icon: LayoutDashboard },
      ],
      col2: [
        { name: 'Procure-to-Pay', icon: Settings },
        { name: 'eProcurement', icon: ShoppingCart },
        { name: 'External Workforce Management', icon: Users },
        { name: 'Invoicing', icon: Receipt },
        { name: 'Payments', icon: Coins },
        { name: 'Payment Cards', icon: CreditCard },
        { name: 'Inventory Collaboration', icon: Monitor },
        { name: 'Intake Management', icon: Inbox },
      ],
      col3: [
        { name: 'Direct Materials Spend Management', icon: Factory },
        { name: 'Direct Materials Sourcing', icon: Factory },
        { name: 'Supply Chain Collaboration', icon: GitMerge },
        { name: 'Additional Solutions', icon: PlusSquare },
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
                          <span>{item.name}</span>
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
                          <span>{item.name}</span>
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
                          <span>{item.name}</span>
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
