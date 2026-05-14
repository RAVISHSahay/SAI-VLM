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
  ShieldCheck, TrendingUp, MonitorSmartphone, Timer,
  BookOpen, PlayCircle, Calendar, FileText, HelpCircle,
  MessageSquare, Briefcase, GraduationCap, Shield,
  Microscope, Landmark as Bank, Store, Rocket
} from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeSolutionTab, setActiveSolutionTab] = useState('process');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutionsData = {
    process: {
      title: 'By Process',
      col1: [
        { name: 'Source-to-Pay', icon: Globe, desc: 'The end-to-end umbrella covering the full procurement lifecycle.' },
        { name: 'Strategic Sourcing', icon: Cpu, desc: 'Drive category strategy and savings with AI co-pilots.' },
        { name: 'Supplier Management', icon: Users, desc: 'Single source of truth for every supplier relationship.' },
      ],
      col2: [
        { name: 'Procure-to-Pay', icon: Settings, desc: 'Transactional backbone from requisition to payment.' },
        { name: 'eProcurement', icon: ShoppingCart, desc: 'Guided buying experience with pre-negotiated prices.' },
        { name: 'Invoicing', icon: Receipt, desc: 'Automated 3-way matching and tax validation.' },
      ],
      col3: [
        { name: 'Inventory Collaboration', icon: ActivitySquare, desc: 'Real-time visibility on stock and demand forecasts.' },
        { name: 'Supply Chain Collaboration', icon: Network, desc: 'Multi-tier visibility across your entire supply base.' },
      ]
    },
    industry: {
      title: 'By Industry',
      col1: [
        { name: 'Manufacturing', icon: Factory, desc: 'Optimize supply chain resilience and quality tracking.' },
        { name: 'Retail & Consumer Goods', icon: ShoppingBag, desc: 'Manage high-volume vendor ecosystems.' },
      ],
      col2: [
        { name: 'Financial Services', icon: Bank, desc: 'Ensure rigorous regulatory compliance and vetting.' },
        { name: 'Healthcare', icon: Stethoscope, desc: 'Maintain strict data privacy and safety standards.' },
      ],
      col3: [
        { name: 'Technology', icon: Cpu, desc: 'Scale with automated IT vendor onboarding.' },
        { name: 'Automotive', icon: Car, desc: 'Streamline complex JIT part supply chains.' },
      ]
    },
    need: {
      title: 'By Business Need',
      col1: [
        { name: 'Reduce Costs', icon: TrendingDown, desc: 'Optimize TCO through strategic consolidation.' },
        { name: 'Mitigate Risk', icon: ShieldAlert, desc: 'Real-time supplier monitoring and disruption alerts.' },
      ],
      col2: [
        { name: 'Improve ESG', icon: Leaf, desc: 'Integrate ethical criteria into every sourcing event.' },
        { name: 'Compliance Management', icon: ShieldCheck, desc: 'Automate audit readiness and document tracking.' },
      ],
      col3: [
        { name: 'Digital Transformation', icon: MonitorSmartphone, desc: 'Digitize manual workflows and eliminate bottlenecks.' },
      ]
    }
  };

  const companyData = {
    col1: [
      { name: 'About SAI VLM', icon: Network, desc: 'Our mission to scale trust through agentic automation.' },
      { name: 'Our Leadership', icon: Users, desc: 'Meet the visionaries redefining enterprise procurement.' },
      { name: 'Careers', icon: Briefcase, desc: 'Join the team building the future of AI-driven supply chains.' },
    ],
    col2: [
      { name: 'Trust & Security', icon: Shield, desc: 'SOC2, ISO 27001, and enterprise-grade data privacy.' },
      { name: 'Compliance Center', icon: ShieldCheck, desc: 'Stay audit-ready across 100+ global mandates.' },
      { name: 'ESG Commitment', icon: Leaf, desc: 'Our journey toward a net-zero, ethical supply chain.' },
    ],
    col3: [
      { name: 'Newsroom', icon: Globe, desc: 'Latest announcements, PR, and company updates.' },
      { name: 'Contact Us', icon: Phone, desc: 'Get in touch with our global support and sales teams.' },
    ]
  };

  const resourceData = {
    col1: [
      { name: 'Resource Center', icon: BookOpen, desc: 'Playbooks, templates, and expert procurement guides.' },
      { name: 'VLM Blog', icon: FileText, desc: 'Insights on AI, risk, and global supply chain trends.' },
      { name: 'Industry Glossary', icon: GraduationCap, desc: 'Mastering complex VLM and procurement terminology.' },
    ],
    col2: [
      { name: 'Webinars', icon: Calendar, desc: 'Live monthly sessions with global industry leaders.' },
      { name: 'Video Library', icon: PlayCircle, desc: 'Product tours and masterclasses on agentic AI.' },
      { name: 'Global Events', icon: Globe, desc: 'See SAI VLM live at top procurement summits.' },
    ],
    col3: [
      { name: 'Developer Hub', icon: Cpu, desc: 'API documentation and integration blueprints.' },
      { name: 'Help Center', icon: HelpCircle, desc: 'Technical support and detailed user guides.' },
      { name: 'Community', icon: MessageSquare, desc: 'Share insights with fellow VLM practitioners.' },
    ]
  };

  const customerData = {
    col1: [
      { name: 'Drug Manufacturer', icon: Microscope, desc: 'How a global pharma giant automated 90% of vendor vetting.' },
      { name: 'Automotive Giant', icon: Car, desc: 'Scaling JIT supply chains with multi-tier visibility.' },
      { name: 'Retail Leader', icon: ShoppingBag, desc: 'Streamlining high-volume vendor ecosystems at scale.' },
    ],
    col2: [
      { name: 'Global Bank', icon: Bank, desc: 'Ensuring zero-leakage compliance across 10k+ vendors.' },
      { name: 'Tech Innovator', icon: Rocket, desc: 'Accelerating digital transformation with automated onboarding.' },
      { name: 'Consumer Goods', icon: Store, desc: 'Optimizing working capital and inventory cycles.' },
    ],
    col3: [
      { name: 'Case Studies', icon: FileText, desc: 'Measurable outcomes across every major vertical.' },
      { name: 'Testimonials', icon: Users, desc: 'Why 500+ enterprises trust SAI VLM.' },
      { name: 'ROI Calculator', icon: LineChart, desc: 'See your potential savings in under 3 minutes.' },
    ]
  };

  const renderMegaMenu = (data, isSolutions = false) => {
    const content = isSolutions ? data[activeSolutionTab] : data;
    
    return (
      <div className="mega-menu-overlay">
        <div className="mega-menu-container">
          {isSolutions && (
            <div className="mega-menu-sidebar">
              <h3 className="mega-menu-sidebar-title">Solutions</h3>
              <ul className="mega-menu-tabs">
                {Object.keys(solutionsData).map(tab => (
                  <li 
                    key={tab}
                    className={`mega-menu-tab ${activeSolutionTab === tab ? 'active' : ''}`}
                    onMouseEnter={() => setActiveSolutionTab(tab)}
                  >
                    {solutionsData[tab].title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mega-menu-content" style={{ width: isSolutions ? '75%' : '100%' }}>
            {[content.col1, content.col2, content.col3].map((col, cIdx) => (
              <div key={cIdx} className="mega-menu-column">
                {col?.map((item, idx) => {
                  const Icon = item.icon;
                  // Specific link mapping for solutions
                  let target = '/#';
                  if (item.name.toLowerCase().includes('source') || item.name.toLowerCase().includes('contract')) target = '/#four-pillars-s2c';
                  if (item.name.toLowerCase().includes('procure') && item.name.toLowerCase().includes('pay')) target = '/#four-pillars-p2p';
                  if (item.name.toLowerCase().includes('reconcile') || item.name.toLowerCase().includes('receive')) target = '/#four-pillars-p2r';
                  if (item.name.toLowerCase().includes('supplier') || item.name.toLowerCase().includes('intelligence')) target = '/#supplier-intelligence';

                  return (
                    <Link key={idx} to={item.name === 'ROI Calculator' ? '/roi-calculator' : target} className="mega-menu-link">
                      <div className="mega-icon-wrapper"><Icon size={18} /></div>
                      <div className="mega-link-content">
                        <span className="mega-link-name">{item.name}</span>
                        {item.desc && <p className="mega-link-desc">{item.desc}</p>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        <Link to="/" className="navbar-brand" style={{ textDecoration: 'none' }}>
          <Network color="var(--accent-blue)" size={28} />
          <span className="brand-text">SAI <span className="text-gradient">VLM</span></span>
        </Link>
        
        <div className="navbar-links">
          <div 
            className="nav-item" 
            onMouseEnter={() => setActiveMegaMenu('solutions')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span>Solutions</span>
            {activeMegaMenu === 'solutions' && renderMegaMenu(solutionsData, true)}
          </div>
          
          <Link to="/platform" className="nav-item" style={{ textDecoration: 'none' }}>Platform</Link>
          
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('company')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span>Company</span>
            {activeMegaMenu === 'company' && renderMegaMenu(companyData)}
          </div>

          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('resources')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span>Resources</span>
            {activeMegaMenu === 'resources' && renderMegaMenu(resourceData)}
          </div>

          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('customers')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span>Customers</span>
            {activeMegaMenu === 'customers' && renderMegaMenu(customerData)}
          </div>
          
          <div className="nav-item">Partners</div>
        </div>

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
