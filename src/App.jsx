import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import ProcurementLifecycle from './components/ProcurementLifecycle';
import MasterDataIntelligence from './components/MasterDataIntelligence';
import CeoTimeline from './components/CeoTimeline';
import Footer from './components/Footer';
import PlatformTabs from './components/PlatformTabs';
import PlatformDetail from './pages/PlatformDetail';
import ROICalculator from './components/ROICalculator';
import Partners from './pages/Partners';
import CompetitiveAnalysis from './pages/CompetitiveAnalysis';
import Contact from './pages/Contact';
import './App.css';

// Component to handle hash scrolling
const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const scroll = () => {
        let targetId = hash.substring(1);
        let element = document.getElementById(targetId);
        
        if (!element && targetId.includes('-')) {
          // Try to find the section by prefix
          const baseId = targetId.split('-').slice(0, 2).join('-'); 
          element = document.getElementById(baseId);
        }
        
        if (!element && targetId === 'supplier-intelligence') {
          element = document.getElementById('master-data-intelligence');
        }

        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Delay to ensure components are rendered
      const timer = setTimeout(scroll, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

// Create a simple Home wrapper to keep App clean
const HomePage = () => (
  <main>
    <Hero />
    <PlatformTabs />
    <FourPillars />
    <ProcurementLifecycle />
    <MasterDataIntelligence />
    <CeoTimeline />
  </main>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToHash />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformDetail />} />
          <Route path="/roi-calculator" element={<ROICalculator />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/competitive-analysis" element={<CompetitiveAnalysis />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
