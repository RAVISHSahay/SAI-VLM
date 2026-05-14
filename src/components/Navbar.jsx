import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Network, Search, Globe, ArrowRight,
  Users, Monitor, LineChart, LayoutDashboard,
  Settings, ShoppingCart, Receipt, Coins, CreditCard,
  Inbox, Factory, GitMerge, PlusSquare, Activity,
  Building2, ShoppingBag, Landmark, Stethoscope, 
  Car, Cpu, Zap, Plane, Phone,
  TrendingDown, ShieldAlert, Leaf, UsersRound, 
  ShieldCheck, TrendingUp, MonitorSmartphone, Timer,
  BookOpen, PlayCircle, Calendar, FileText, HelpCircle,
  MessageSquare, Briefcase, GraduationCap, Shield,
  Microscope, Landmark as Bank, Store, Rocket,
  Handshake, HeartHandshake, LifeBuoy, Sprout, ClipboardCheck,
  Database
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
        { name: 'Invoice Processing', icon: Receipt, desc: 'Automated 3-way matching for PO-based and AI-driven workflows for Non-PO based invoices.' },
        { name: 'eProcurement', icon: ShoppingCart, desc: 'Guided buying experience with pre-negotiated prices.' },
      ],
      col3: [
        { name: 'Non-PO Categories', icon: ClipboardCheck, desc: '25+ Configurable & ready-to-deploy categories: Utilities, Rent, R&D, Logistics, Professional Fees, and more.' },
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

  const whyData = {
    col1: [
      { name: 'Competitive Analysis', icon: Activity, desc: 'How we stack up against Coupa, SAP Ariba, and 8 others.' },
      { name: 'The Agentic Edge', icon: Zap, desc: 'Why autonomous agents outperform legacy workflows.' },
    ],
    col2: [
      { name: 'ROI Framework', icon: Coins, desc: 'Calculating the value of autonomous procurement.' },
      { name: 'Case Studies', icon: FileText, desc: 'Real-world impact across global enterprises.' },
    ],
    col3: [
      { name: 'Platform Vision', icon: Rocket, desc: 'The future of autonomous vendor lifecycle management.' },
    ]
  };

  const platformData = {
    col1: [
      { name: 'Unified Command Centre', icon: LayoutDashboard, desc: 'Single pane of glass for your entire VLM operation.' },
      { name: 'Master Data Intelligence', icon: Database, desc: 'Continuous, self-healing cleansing of 12 foundational entities.' },
    ],
    col2: [
      { name: 'Agentic Workflow Layer', icon: GitMerge, desc: 'Autonomous orchestration of complex procurement tasks.' },
      { name: 'Integrations', icon: GitMerge, desc: 'Connect seamlessly with SAP, Oracle, MS Dynamics, and more.' },
    ],
    col3: [
      { name: 'Security & Compliance', icon: ShieldCheck, desc: 'Enterprise-grade protection and audit readiness.' },
    ]
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

  const partnerData = {
    col1: [
      { name: 'Become a Partner', icon: Handshake, desc: 'Submit your application to join the SequelVendorX ecosystem.' },
      { name: 'Benefit to Partner', icon: TrendingUp, desc: 'Unlock new revenue streams and co-marketing opportunities.' },
    ],
    col2: [
      { name: 'Support Partner Gets', icon: LifeBuoy, desc: 'Technical enablement, dedicated account managers, and pre-sales support.' },
      { name: 'Grow Together', icon: Sprout, desc: 'Joint product roadmaps and strategic market expansion plans.' },
    ],
    col3: [
      { name: 'Partner Portal', icon: Monitor, desc: 'Access resources, deal registration, and training modules.' },
      { name: 'Partner Testimonials', icon: MessageSquare, desc: 'See how our partners are scaling their impact.' },
    ]
  };

  const renderMegaMenu = (data, isSolutions = false) => {
    const content = isSolutions ? data[activeSolutionTab] : data;
    if (!content) return null;
    
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
                  let target = '/#';
                  const itemName = item.name.toLowerCase();
                  if (itemName.includes('source') || itemName.includes('contract')) target = '/#four-pillars-s2c';
                  if (itemName.includes('procure') && itemName.includes('pay')) target = '/#four-pillars-p2p';
                  if (itemName.includes('reconcile') || itemName.includes('receive')) target = '/#four-pillars-p2r';
                  if (itemName.includes('supplier') || itemName.includes('intelligence')) target = '/#supplier-intelligence';
                  if (item.name === 'Competitive Analysis') target = '/competitive-analysis';
                  if (item.name === 'Unified Command Centre') target = '/#unified-command-centre';
                  if (item.name === 'Master Data Intelligence') target = '/#master-data-intelligence';
                  if (item.name === 'Become a Partner') target = '/partners#become-partner';
                  if (item.name === 'Benefit to Partner') target = '/partners#benefits';
                  if (item.name === 'Support Partner Gets') target = '/partners#support';
                  if (item.name === 'Grow Together') target = '/partners#grow';

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
          <span className="brand-text">SequelVendor<span className="text-gradient">X</span></span>
        </Link>
        
        <div className="navbar-links">
          {/* Solutions */}
          <div 
            className="nav-item" 
            onMouseEnter={() => setActiveMegaMenu('solutions')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span className="nav-label">Solutions</span>
            {activeMegaMenu === 'solutions' && renderMegaMenu(solutionsData, true)}
          </div>
          
          {/* Why SequelVendorX */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('why')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <NavLink to="/competitive-analysis" className={({isActive}) => `nav-label ${isActive ? 'active' : ''}`}>
              Why SequelVendorX
            </NavLink>
            {activeMegaMenu === 'why' && renderMegaMenu(whyData)}
          </div>
          
          {/* Platform */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('platform')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <NavLink to="/platform" className={({isActive}) => `nav-label ${isActive ? 'active' : ''}`}>
              Platform
            </NavLink>
            {activeMegaMenu === 'platform' && renderMegaMenu(platformData)}
          </div>
          
          {/* Company */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('company')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span className="nav-label">Company</span>
            {activeMegaMenu === 'company' && renderMegaMenu(companyData)}
          </div>

          {/* Resources */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('resources')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span className="nav-label">Resources</span>
            {activeMegaMenu === 'resources' && renderMegaMenu(resourceData)}
          </div>

          {/* Customers */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('customers')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <span className="nav-label">Customers</span>
            {activeMegaMenu === 'customers' && renderMegaMenu(customerData)}
          </div>
          
          {/* Partners */}
          <div 
            className="nav-item"
            onMouseEnter={() => setActiveMegaMenu('partners')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <NavLink to="/partners" className={({isActive}) => `nav-label ${isActive ? 'active' : ''}`}>
              Partners
            </NavLink>
            {activeMegaMenu === 'partners' && renderMegaMenu(partnerData)}
          </div>
        </div>

        <div className="navbar-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn"><Globe size={20} /></button>
          <button className="btn-solid">Contact Us <ArrowRight size={16}/></button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
