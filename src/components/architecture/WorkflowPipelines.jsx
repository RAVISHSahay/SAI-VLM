import React from 'react';
import { 
  Search, Edit3, Users, ShieldCheck, List, FileBadge,
  FileText, PackagePlus, Truck, BoomBox, Box, Settings,
  FileCheck, CheckSquare, Percent, ParkingCircle, Landmark,
  CreditCard, Activity, Star, AlertTriangle 
} from 'lucide-react';

const phases = [
  {
    title: "SOURCE TO CONTRACT",
    colorClass: "phase-teal",
    stepsCount: 6,
    steps: [
      { name: "Vendor Discovery", icon: Search },
      { name: "RFI / RFQ / Reverse Auction", icon: Edit3 },
      { name: "Onboarding & KYC", icon: Users },
      { name: "Compliance Screening", icon: ShieldCheck },
      { name: "Vendor Cataloguing", icon: List },
      { name: "Contract Management", icon: FileBadge },
    ]
  },
  {
    title: "PROCURE TO PAY",
    colorClass: "phase-purple",
    stepsCount: 9,
    steps: [
      { name: "Purchase Requisition", icon: FileText },
      { name: "PO Creation", icon: PackagePlus },
      { name: "ASN", icon: Truck },
      { name: "Gate Entry", icon: BoomBox },
      { name: "Inbound Delivery", icon: Box },
      { name: "MIGO (GR Posting)", icon: Settings },
      { name: "Invoice Parsing", icon: FileCheck },
      { name: "4-Way Match", icon: CheckSquare },
      { name: "Tax Validation", icon: Percent },
    ]
  },
  {
    title: "INVOICE TO PERFORMANCE",
    colorClass: "phase-red",
    stepsCount: 6,
    steps: [
      { name: "Invoice Parking", icon: ParkingCircle },
      { name: "Invoice Posting (MIRO)", icon: Landmark },
      { name: "Payment Processing", icon: CreditCard },
      { name: "Reconciliation", icon: Activity },
      { name: "Vendor Scorecard", icon: Star },
      { name: "Risk Monitoring", icon: AlertTriangle },
    ]
  }
];

const WorkflowPipelines = ({ onHoverStep }) => {
  return (
    <div className="arch-layer workflow-layer">
      {phases.map((phase, pIdx) => (
        <div key={pIdx} className={`workflow-phase ${phase.colorClass}`}>
          <div className="phase-header-bar">
            <h3 className="phase-title">{phase.title}</h3>
            <div className="phase-badge">{phase.stepsCount} steps</div>
          </div>
          <div className="phase-steps-container">
            {phase.steps.map((step, sIdx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={sIdx} 
                  className="workflow-step-wrapper"
                  onMouseEnter={() => onHoverStep && onHoverStep(step.name)}
                  onMouseLeave={() => onHoverStep && onHoverStep(null)}
                >
                  <div className="workflow-step">
                    <div className="step-icon-wrapper">
                      <Icon className="step-icon" size={24} />
                    </div>
                    <span className="step-name">{step.name}</span>
                  </div>
                  {sIdx < phase.steps.length - 1 && (
                    <div className="step-connector">
                      <div className="connector-line"></div>
                      <div className="connector-arrow"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkflowPipelines;
