import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Clock, ShieldCheck, DollarSign, 
  ArrowRight, CheckCircle2, AlertCircle, Building2,
  User, Mail, Phone, Briefcase, Calendar, Info
} from 'lucide-react';
import './ROICalculator.css';

const ROICalculator = () => {
  const [step, setStep] = useState(1);
  const [inputs, setInputs] = useState({
    annualSpend: 50000000, // $50M default
    vendorCount: 500,
    manualHours: 20,
    avgSalary: 85000
  });

  const [results, setResults] = useState({
    operationalSavings: 0,
    spendSavings: 0,
    riskValue: 0,
    totalAnnualSavings: 0,
    paybackMonths: 4
  });

  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    company: '',
    budget: '',
    decisionTime: '',
    designation: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Calculation Logic
  useEffect(() => {
    const hourlyRate = inputs.avgSalary / 2000; // ~2000 work hours/year
    
    // 1. Operational Savings: Reduction in manual onboarding/management time
    // Assumption: 70% reduction in manual hours via agentic automation
    const opSavings = inputs.vendorCount * (inputs.manualHours * 0.7) * hourlyRate;
    
    // 2. Spend Optimization: Negotiated savings + maverick spend reduction
    // Assumption: Conservative 1.5% of annual spend
    const spendSavings = inputs.annualSpend * 0.015;
    
    // 3. Risk Mitigation: Reduction in compliance penalties and disruptions
    // Assumption: 0.5% of annual spend as risk value
    const riskValue = inputs.annualSpend * 0.005;
    
    const total = opSavings + spendSavings + riskValue;
    
    setResults({
      operationalSavings: Math.round(opSavings),
      spendSavings: Math.round(spendSavings),
      riskValue: Math.round(riskValue),
      totalAnnualSavings: Math.round(total),
      paybackMonths: total > 50000 ? 4 : 8 // Mock payback based on scale
    });
  }, [inputs]);

  const handleInputChange = (name, value) => {
    setInputs(prev => ({ ...prev, [name]: parseFloat(value) }));
  };

  const validateEmail = (email) => {
    const businessEmailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com)(?!yahoo\.com)(?!outlook\.com)(?!hotmail\.com)(?!icloud\.com)(?!aol\.com)(?!mail\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return businessEmailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid official/business email address.';
    }
    if (!formData.phone) errors.phone = 'Required';
    if (!formData.company) errors.company = 'Required';
    if (!formData.budget) errors.budget = 'Required';
    if (!formData.decisionTime) errors.decisionTime = 'Required';
    if (!formData.designation) errors.designation = 'Required';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setStep(3); // Thank you / Final Report state
    }
  };

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div className="roi-page-container">
      <div className="container">
        
        {/* Header Section */}
        <div className="roi-header text-center animate-fade-up">
          <div className="roi-badge">ROI Calculator</div>
          <h1>Quantify Your <span className="text-gradient">VLM Transformation</span></h1>
          <p className="roi-subtitle">
            Discover the financial impact of moving from manual vendor management to SequelVendorX's agentic AI framework.
          </p>
        </div>

        <div className="roi-layout">
          
          {/* Step 1: Inputs & Live Results */}
          {step === 1 && (
            <div className="roi-calculator-grid animate-fade-in">
              <div className="roi-inputs-panel glass-panel">
                <h3 className="section-title">Step 1: Your Current Environment</h3>
                
                <div className="input-group">
                  <div className="label-row">
                    <label>Annual Indirect Spend</label>
                    <span className="value">{formatCurrency(inputs.annualSpend)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1000000" 
                    max="1000000000" 
                    step="1000000"
                    value={inputs.annualSpend}
                    onChange={(e) => handleInputChange('annualSpend', e.target.value)}
                  />
                  <div className="range-labels">
                    <span>$1M</span>
                    <span>$1B</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="label-row">
                    <label>Number of Managed Vendors</label>
                    <span className="value">{inputs.vendorCount}</span>
                  </div>
                  <input 
                    type="range" 
                    min="50" 
                    max="10000" 
                    step="50"
                    value={inputs.vendorCount}
                    onChange={(e) => handleInputChange('vendorCount', e.target.value)}
                  />
                  <div className="range-labels">
                    <span>50</span>
                    <span>10k</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="label-row">
                    <label>Manual Hours per Onboarding</label>
                    <span className="value">{inputs.manualHours} hrs</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="80" 
                    step="1"
                    value={inputs.manualHours}
                    onChange={(e) => handleInputChange('manualHours', e.target.value)}
                  />
                  <div className="range-labels">
                    <span>5h</span>
                    <span>80h</span>
                  </div>
                </div>

                <div className="input-group">
                  <div className="label-row">
                    <label>Avg. Procurement Salary</label>
                    <span className="value">{formatCurrency(inputs.avgSalary)}</span>
                  </div>
                  <input 
                    type="range" 
                    min="40000" 
                    max="200000" 
                    step="5000"
                    value={inputs.avgSalary}
                    onChange={(e) => handleInputChange('avgSalary', e.target.value)}
                  />
                  <div className="range-labels">
                    <span>$40k</span>
                    <span>$200k</span>
                  </div>
                </div>

                <div className="formula-info">
                  <Info size={16} />
                  <p>Formula: Savings = (Op. Efficiency) + (Spend Opt. @ 1.5%) + (Risk Avoidance @ 0.5%)</p>
                </div>
              </div>

              <div className="roi-results-panel">
                <div className="total-savings-card glass-panel highlight">
                  <div className="card-label">Potential Annual Savings</div>
                  <div className="total-value">{formatCurrency(results.totalAnnualSavings)}</div>
                  <div className="payback-badge">Est. Payback: {results.paybackMonths} Months</div>
                </div>

                <div className="breakdown-grid">
                  <div className="breakdown-card glass-panel">
                    <Clock className="icon" color="#3b82f6" size={24} />
                    <div className="label">Operational Gain</div>
                    <div className="val">{formatCurrency(results.operationalSavings)}</div>
                  </div>
                  <div className="breakdown-card glass-panel">
                    <TrendingUp className="icon" color="#10b981" size={24} />
                    <div className="label">Spend Optimization</div>
                    <div className="val">{formatCurrency(results.spendSavings)}</div>
                  </div>
                  <div className="breakdown-card glass-panel">
                    <ShieldCheck className="icon" color="#8b5cf6" size={24} />
                    <div className="label">Risk Value</div>
                    <div className="val">{formatCurrency(results.riskValue)}</div>
                  </div>
                </div>

                <button className="btn-solid wide" onClick={() => setStep(2)}>
                  Get Detailed ROI Report <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Lead Capture Form */}
          {step === 2 && (
            <div className="roi-form-container animate-fade-up">
              <div className="roi-form-layout glass-panel">
                <div className="form-header">
                  <h3>Final Step: Personalized ROI Report</h3>
                  <p>We'll send a multi-page PDF breakdown of these savings to your business email.</p>
                </div>

                <form onSubmit={handleFormSubmit}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label><User size={16} /> Your Designation</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Head of Procurement"
                        required
                        value={formData.designation}
                        onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label><Mail size={16} /> Official Email Address</label>
                      <input 
                        type="email" 
                        placeholder="name@company.com"
                        required
                        className={formErrors.email ? 'error' : ''}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                      {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                    </div>
                    <div className="form-group">
                      <label><Phone size={16} /> Business Phone</label>
                      <input 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label><Building2 size={16} /> Company Name</label>
                      <input 
                        type="text" 
                        placeholder="Organization Name"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label><DollarSign size={16} /> Projected VLM Budget</label>
                      <select 
                        required
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      >
                        <option value="">Select Range</option>
                        <option value="<50k">Less than $50k</option>
                        <option value="50k-150k">$50k - $150k</option>
                        <option value="150k-500k">$150k - $500k</option>
                        <option value="500k+">$500k+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label><Calendar size={16} /> Decision Timeline</label>
                      <select 
                        required
                        value={formData.decisionTime}
                        onChange={(e) => setFormData({...formData, decisionTime: e.target.value})}
                      >
                        <option value="">Select Timeline</option>
                        <option value="immediate">Within 1 month</option>
                        <option value="qtr">1-3 months</option>
                        <option value="mid">3-6 months</option>
                        <option value="long">Exploring for next year</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-footer">
                    <button type="button" className="btn-outline" onClick={() => setStep(1)}>Back to Calculator</button>
                    <button type="submit" className="btn-solid">Send My Report <CheckCircle2 size={18} /></button>
                  </div>

                  <p className="privacy-note">
                    <ShieldCheck size={14} /> By submitting, you agree to our privacy policy and consent to receive ROI insights.
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* Step 3: Success State */}
          {step === 3 && (
            <div className="roi-success-container text-center animate-scale-in">
              <div className="success-icon-wrapper">
                <CheckCircle2 size={64} color="#10b981" />
              </div>
              <h2>Report Successfully Generated!</h2>
              <p>
                The detailed ROI analysis for <strong>{formData.company}</strong> has been sent to <strong>{formData.email}</strong>.
              </p>
              <div className="success-stats glass-panel">
                <div className="stat">
                  <span>Target Savings</span>
                  <strong>{formatCurrency(results.totalAnnualSavings)}</strong>
                </div>
                <div className="stat">
                  <span>Efficiency Gain</span>
                  <strong>70%</strong>
                </div>
              </div>
              <button className="btn-outline" onClick={() => setStep(1)}>Calculate for another scenario</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
