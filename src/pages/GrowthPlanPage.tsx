import React, { useState } from 'react';
import { GrowthPlanFormData, PageId } from '../types';
import { ArrowRight, ArrowLeft, Check, CheckCircle2, Sparkles, Building, Layers, Target, ShieldCheck, Download } from 'lucide-react';

interface GrowthPlanPageProps {
  onNavigate: (page: PageId) => void;
}

export const GrowthPlanPage: React.FC<GrowthPlanPageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 5;

  const [formData, setFormData] = useState<GrowthPlanFormData>({
    fullName: '',
    role: 'Developer',
    organization: '',
    city: 'Hyderabad',
    projectName: '',
    propertyType: 'Luxury Residential',
    priceSegment: '₹2.0 Cr - ₹4.0 Cr',
    inventoryUnits: '50 - 150 Units',
    currentChannels: ['Meta Ads', 'Hoardings / Print'],
    currentMonthlyLeads: '50 - 150 Inquiries',
    primaryBottleneck: 'Unqualified leads & low site visit conversion',
    targetMonthlyVisits: '60 - 100 Site Visits/Month',
    launchTimeline: 'Next 30 - 60 Days',
    salesTargetValue: '₹50 Cr - ₹150 Cr',
    phone: '',
    email: '',
    preferredContactTime: 'Morning (10 AM - 1 PM)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const toggleChannel = (ch: string) => {
    if (formData.currentChannels.includes(ch)) {
      setFormData({
        ...formData,
        currentChannels: formData.currentChannels.filter((c) => c !== ch),
      });
    } else {
      setFormData({
        ...formData,
        currentChannels: [...formData.currentChannels, ch],
      });
    }
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsCompleted(true);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }, 1000);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const stepsMeta = [
    { step: 1, label: 'About You' },
    { step: 2, label: 'The Project' },
    { step: 3, label: 'Marketing' },
    { step: 4, label: 'Objectives' },
    { step: 5, label: 'Delivery' },
  ];

  return (
    <div id="growth-plan-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Hero */}
      <section className="py-12 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider">
            Custom Acquisition Architecture
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-[#14171A] tracking-tight">
            Let's Build Your Real Estate Growth Plan.
          </h1>
          <p className="text-base sm:text-lg text-[#5E646A] max-w-xl mx-auto leading-relaxed">
            Tell us where your project is today and what you want to achieve.
          </p>

          {/* Progress Indicator */}
          {!isCompleted && (
            <div className="pt-8 max-w-xl mx-auto">
              <div className="flex items-center justify-between text-xs font-semibold text-[#8D9399] mb-2">
                <span>Step {currentStep} of {totalSteps}: {stepsMeta[currentStep - 1].label}</span>
                <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
              </div>
              <div className="w-full bg-[#F4F4F0] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#1E56D6] h-full rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between mt-3 text-[11px] text-[#A0A6AC]">
                {stepsMeta.map((s) => (
                  <span
                    key={s.step}
                    className={`${currentStep >= s.step ? 'text-[#14171A] font-bold' : ''}`}
                  >
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Multi-Step Form Container */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {isCompleted ? (
            /* COMPLETED BLUEPRINT SUMMARY CARD */
            <div className="bg-white rounded-2xl border border-[#E8E8E2] p-8 sm:p-12 shadow-sm space-y-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-[#F4F4F0] pb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-sm border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>GROWTH PLAN REGISTERED</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A] mt-2">
                    NXZ Growth Architecture Blueprint
                  </h2>
                  <p className="text-xs text-[#5E646A]">
                    Prepared for: <strong>{formData.fullName || 'Project Leader'}</strong> • {formData.organization || 'Development Entity'}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#8D9399] hidden sm:inline">REF: GP-2026-NXZ</span>
              </div>

              {/* Dynamic Summary Based on Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2]">
                  <div className="text-[10px] uppercase font-bold text-[#8D9399]">Project Focus</div>
                  <div className="text-sm font-bold text-[#14171A] mt-1">{formData.propertyType}</div>
                  <div className="text-xs text-[#5E646A]">{formData.city} • {formData.priceSegment}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2]">
                  <div className="text-[10px] uppercase font-bold text-[#8D9399]">Target Velocity</div>
                  <div className="text-sm font-bold text-[#1E56D6] mt-1">{formData.targetMonthlyVisits}</div>
                  <div className="text-xs text-[#5E646A]">{formData.salesTargetValue} Value</div>
                </div>

                <div className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2]">
                  <div className="text-[10px] uppercase font-bold text-[#8D9399]">Target Pipeline</div>
                  <div className="text-sm font-bold text-[#14171A] mt-1">{formData.inventoryUnits}</div>
                  <div className="text-xs text-[#5E646A]">{formData.launchTimeline}</div>
                </div>
              </div>

              {/* Strategic Recommendations Card */}
              <div className="p-6 rounded-xl bg-[#14171A] text-white space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880]">
                  <Sparkles className="w-4 h-4" />
                  <span>PRELIMINARY STRATEGIC RECOMMENDATIONS</span>
                </div>
                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <p>
                    • <strong>Acquisition Mix:</strong> Prioritize high-intent Google Search for "{formData.propertyType} in {formData.city}" combined with Meta video showcasing floor plan geometry.
                  </p>
                  <p>
                    • <strong>Qualification Shield:</strong> Deploy automated WhatsApp screening gating prospects strictly by {formData.priceSegment} ticket capability.
                  </p>
                  <p>
                    • <strong>Site Visit Ramp:</strong> Target calendar booking system to convert 20–25% of verified inquiries into scheduled weekend walkthroughs.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F4F4F0]">
                <p className="text-xs text-[#71777D]">
                  Our strategy partner will reach out via WhatsApp / Phone to confirm schedule.
                </p>
                <button
                  onClick={() => onNavigate('home')}
                  className="bg-[#14171A] hover:bg-[#1E56D6] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Return to NXZ Home
                </button>
              </div>
            </div>
          ) : (
            /* ACTIVE FORM STEPS */
            <form
              onSubmit={handleNext}
              className="bg-white rounded-2xl border border-[#E8E8E2] p-6 sm:p-10 shadow-xs space-y-8"
            >
              {/* STEP 1: ABOUT YOU */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Step 1: About You & Your Role
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Help us understand who will be coordinating the growth system.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Your Role *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="Developer">Real Estate Developer</option>
                        <option value="Builder">Builder / Promoter</option>
                        <option value="Project Owner">Project Owner / Asset Holding</option>
                        <option value="Broker">Real Estate Broker</option>
                        <option value="Channel Partner">Channel Partner Network</option>
                        <option value="Sales Director">Sales / Marketing Director</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Company / Entity Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Prestige Heights Pvt Ltd"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Primary City / Market *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Hyderabad / Bengaluru / Mumbai"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: ABOUT THE PROJECT */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Step 2: About the Project & Inventory
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Information regarding configuration, ticket size and inventory scale.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Project Name (or Working Title) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. The Grand Courtyard"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Property Asset Category *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="Luxury Residential">Luxury High-Rise (3, 4 BHK)</option>
                        <option value="Gated Villas">Gated Luxury Villas</option>
                        <option value="Commercial Office">Commercial Grade-A Office Spaces</option>
                        <option value="Retail & Showrooms">Retail Mall / High Street Showrooms</option>
                        <option value="Plotted Development">Residential Plotted Development</option>
                        <option value="Mixed Use">Integrated Mixed-Use Township</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Average Ticket Size Band *
                      </label>
                      <select
                        value={formData.priceSegment}
                        onChange={(e) => setFormData({ ...formData, priceSegment: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="₹75 L - ₹1.5 Cr">₹75 Lakhs - ₹1.5 Crore</option>
                        <option value="₹1.5 Cr - ₹3.0 Cr">₹1.5 Crore - ₹3.0 Crore</option>
                        <option value="₹3.0 Cr - ₹6.0 Cr">₹3.0 Crore - ₹6.0 Crore</option>
                        <option value="₹6.0 Cr+ Ultra-Luxury">₹6.0 Crore+ Ultra-Luxury</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Units in Current Scope *
                      </label>
                      <select
                        value={formData.inventoryUnits}
                        onChange={(e) => setFormData({ ...formData, inventoryUnits: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="< 50 Units">&lt; 50 Units (Boutique / Remainder Phase)</option>
                        <option value="50 - 150 Units">50 - 150 Units (Standard Tower Launch)</option>
                        <option value="150 - 500 Units">150 - 500 Units (Large Phase)</option>
                        <option value="500+ Units">500+ Units (Township / Multi-Tower)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: CURRENT MARKETING */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Step 3: Current Marketing & Lead Dynamics
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Identify where current digital spend is being utilized.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2.5">
                      Current Active Channels (Select all in use)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        'Meta Ads (FB/Insta)',
                        'Google Search Ads',
                        'Real Estate Portals (99acres/MB)',
                        'Hoardings / Print Media',
                        'Channel Partner Network',
                        'Cold Telephony Database',
                      ].map((ch) => {
                        const active = formData.currentChannels.includes(ch);
                        return (
                          <button
                            type="button"
                            key={ch}
                            onClick={() => toggleChannel(ch)}
                            className={`p-3 rounded-xl text-xs font-semibold text-left border transition-all ${
                              active
                                ? 'bg-[#14171A] text-white border-[#14171A]'
                                : 'bg-[#FBFBF9] text-[#5E646A] border-[#D5D5CD] hover:border-[#14171A]'
                            }`}
                          >
                            {active ? '✓ ' : '+ '}
                            {ch}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Current Monthly Lead Volume
                      </label>
                      <select
                        value={formData.currentMonthlyLeads}
                        onChange={(e) => setFormData({ ...formData, currentMonthlyLeads: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="New Launch (Zero Current Leads)">New Launch (Zero Current Leads)</option>
                        <option value="< 50 Leads/month">&lt; 50 Leads/month</option>
                        <option value="50 - 150 Leads/month">50 - 150 Leads/month</option>
                        <option value="150 - 500 Leads/month">150 - 500 Leads/month</option>
                        <option value="500+ Leads/month">500+ Leads/month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Primary Bottleneck Faced
                      </label>
                      <select
                        value={formData.primaryBottleneck}
                        onChange={(e) => setFormData({ ...formData, primaryBottleneck: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="Unqualified leads & low site visit conversion">Unqualified leads & low site visit conversion</option>
                        <option value="High cost per acquisition on Meta/Google">High cost per acquisition on Meta/Google</option>
                        <option value="Slow sales rep follow-up & bad contact data">Slow sales rep follow-up & bad contact data</option>
                        <option value="Low project launch velocity & awareness">Low project launch velocity & awareness</option>
                        <option value="Unsold inventory in later phases">Unsold inventory in later phases</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: GROWTH OBJECTIVES */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Step 4: Your Target Growth Objectives
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Define the target footfall and revenue velocity required.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Target Site Visits Per Month *
                      </label>
                      <select
                        value={formData.targetMonthlyVisits}
                        onChange={(e) => setFormData({ ...formData, targetMonthlyVisits: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="30 - 50 Confirmed Visits/Mo">30 - 50 Confirmed Site Visits / Month</option>
                        <option value="50 - 100 Confirmed Visits/Mo">50 - 100 Confirmed Site Visits / Month</option>
                        <option value="100 - 250 Confirmed Visits/Mo">100 - 250 Confirmed Site Visits / Month</option>
                        <option value="250+ High Velocity Visits/Mo">250+ High Velocity Site Visits / Month</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Launch Timeline
                      </label>
                      <select
                        value={formData.launchTimeline}
                        onChange={(e) => setFormData({ ...formData, launchTimeline: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      >
                        <option value="Immediate (Within 15 Days)">Immediate (Within 15 Days)</option>
                        <option value="Next 30 - 60 Days">Next 30 - 60 Days</option>
                        <option value="Quarterly Planning (60 - 90 Days)">Quarterly Planning (60 - 90 Days)</option>
                        <option value="Pre-RERA Planning Phase">Pre-RERA Planning Phase</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                      Target Sales Value Under Growth Plan
                    </label>
                    <select
                      value={formData.salesTargetValue}
                      onChange={(e) => setFormData({ ...formData, salesTargetValue: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                    >
                      <option value="₹25 Cr - ₹50 Cr">₹25 Crore - ₹50 Crore</option>
                      <option value="₹50 Cr - ₹150 Cr">₹50 Crore - ₹150 Crore</option>
                      <option value="₹150 Cr - ₹300 Cr">₹150 Crore - ₹300 Crore</option>
                      <option value="₹300 Cr+ Large Portfolio">₹300 Crore+ Large Portfolio</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT DETAILS */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Step 5: Delivery & Discussion Schedule
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Where should our team deliver your custom real estate growth blueprint?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        WhatsApp / Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="promoter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                      Preferred Consultation Window
                    </label>
                    <select
                      value={formData.preferredContactTime}
                      onChange={(e) => setFormData({ ...formData, preferredContactTime: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden"
                    >
                      <option value="Morning (10 AM - 1 PM)">Morning (10:00 AM - 1:00 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2:00 PM - 5:00 PM)</option>
                      <option value="Evening (5 PM - 7:30 PM)">Evening (5:00 PM - 7:30 PM)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-6 border-t border-[#F4F4F0] flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E646A] hover:text-[#14171A] px-4 py-2.5 rounded-xl border border-[#D5D5CD] hover:bg-[#F4F4F0] transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : (
                  <div></div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white font-semibold text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-all shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Generating Growth Plan...</span>
                  ) : currentStep < totalSteps ? (
                    <>
                      <span>Continue to Step {currentStep + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>Request My Growth Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
