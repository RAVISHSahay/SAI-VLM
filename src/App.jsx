import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FourPillars from './components/FourPillars';
import ProcurementLifecycle from './components/ProcurementLifecycle';
import MasterDataIntelligence from './components/MasterDataIntelligence';
import CeoTimeline from './components/CeoTimeline';
import Footer from './components/Footer';
import PlatformTabs from './components/PlatformTabs';
import PlatformDetail from './pages/PlatformDetail';
import './App.css';

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
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<PlatformDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
