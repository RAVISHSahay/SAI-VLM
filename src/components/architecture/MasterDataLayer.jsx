import React from 'react';
import { Database } from 'lucide-react';

const masterDataEntities = [
  "Vendor Master", "Material Master", "Service Master", "Contract Master",
  "Pricing Master", "Tax / HSN / SAC", "GL / Chart of Accts", "Cost & Profit Centre",
  "Bank Master", "Payment Terms", "UoM & Currency", "Plant / Location"
];

const MasterDataLayer = () => {
  const handleScrollToDetails = () => {
    const detailsSection = document.getElementById('master-data-intelligence');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="arch-layer master-data-layer" onClick={handleScrollToDetails} style={{ cursor: 'pointer', transition: 'transform 0.2s' }} title="Click to view detailed AI Agent logic">
      <div className="arch-layer-header master-header">
        <div className="header-title">
          <Database className="header-icon" />
          <h2>MASTER DATA CLEANSING & HARMONISATION</h2>
        </div>
        <div className="header-badge">FOUNDATION &bull; 12 entities</div>
      </div>
      <div className="master-data-grid">
        {masterDataEntities.map((entity, idx) => (
          <div key={idx} className="master-data-card">
            {entity}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasterDataLayer;
