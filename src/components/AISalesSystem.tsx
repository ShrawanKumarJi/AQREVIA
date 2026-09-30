import React, { useState } from 'react';
import { PageId, SolutionId } from '../types';
import { ArrowRight, Cpu, CheckCircle2, MessageSquareCode, PhoneCall, Calendar } from 'lucide-react';

interface AISalesSystemProps {
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const AISalesSystem: React.FC<AISalesSystemProps> = ({ onNavigate }) => {
  // Interactive lead simulator states
  const [selectedBudget, setSelectedBudget] = useState('₹2.5 Cr - ₹4.0 Cr');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate (< 30 days)');
  const [selectedPurpose, setSelectedPurpose] = useState('End Use');

  const isHot = selectedTimeline.includes('30 days') && selectedBudget !== '< ₹1 Cr';
  const tier = isHot ? 'HOT' : 'WARM';
  const score = isHot ? 94 : 76;

  return (
    <section id="ai-sales-system-section" className="py-24 bg-white border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
            Intelligent Pipeline Automation
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            Every Lead Doesn’t Deserve the Same Sales Call.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            NXZ uses AI-assisted qualification and automation to help sales teams identify intent, prioritize conversations and follow up faster.
          </p>
        </div>

        {/* Real-time System Flow Visualization */}
        <div className="bg-[#FBFBF9] rounded-2xl border border-[#E8E8E2] p-6 lg:p-10 shadow-xs">
          {/* Top pipeline stages banner */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 pb-8 border-b border-[#E8E8E2] text-center">
            <div className="p-3 bg-white rounded-lg border border-[#E8E8E2]">
              <div className="text-[10px] font-bold text-[#8D9399] uppercase">01 / INGESTION</div>
              <div className="text-xs font-bold text-[#14171A] mt-1">NEW LEAD</div>
            </div>
            <div className="p-3 bg-[#1E56D6]/10 border border-[#1E56D6]/30 rounded-lg">
              <div className="text-[10px] font-bold text-[#1E56D6] uppercase">02 / SCREENING</div>
              <div className="text-xs font-bold text-[#1E56D6] mt-1">AI QUALIFICATION</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E8E8E2]">
              <div className="text-[10px] font-bold text-[#8D9399] uppercase">03 / SEGREGATION</div>
              <div className="text-xs font-bold text-[#14171A] mt-1">HOT / WARM / NURTURE</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E8E8E2]">
              <div className="text-[10px] font-bold text-[#8D9399] uppercase">04 / PIPELINE</div>
              <div className="text-xs font-bold text-[#14171A] mt-1">DEVELOPER CRM</div>
            </div>
            <div className="p-3 bg-white rounded-lg border border-[#E8E8E2]">
              <div className="text-[10px] font-bold text-[#8D9399] uppercase">05 / OUTREACH</div>
              <div className="text-xs font-bold text-[#14171A] mt-1">SALES TEAM DISPATCH</div>
            </div>
            <div className="p-3 bg-[#14171A] text-white rounded-lg">
              <div className="text-[10px] font-bold text-[#C5A880] uppercase">06 / CONVERSION</div>
              <div className="text-xs font-bold text-white mt-1">SITE VISIT ATTENDED</div>
            </div>
          </div>

          {/* Interactive Live Qualification Demonstration */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Input Simulator */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-[#14171A] flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#1E56D6]" />
                  <span>Interactive AI Screening Engine</span>
                </h3>
                <p className="text-xs text-[#5E646A] mt-1">
                  Select candidate parameters to see how NXZ classifies and routes property inquiries instantly.
                </p>
              </div>

              {/* Parameter 1: Budget */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                  1. Budget Band (Verified Ticket Size)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['< ₹1.5 Cr', '₹1.5 Cr - ₹2.5 Cr', '₹2.5 Cr - ₹4.0 Cr'].map((b) => (
                    <button
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`text-xs font-semibold py-2 px-3 rounded-lg border transition-all ${
                        selectedBudget === b
                          ? 'bg-[#14171A] text-white border-[#14171A]'
                          : 'bg-white text-[#5E646A] border-[#D5D5CD] hover:border-[#14171A]'
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 2: Buying Timeline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                  2. Buying Timeline
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Immediate (< 30 days)', 'Exploratory (3 - 6 months)'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTimeline(t)}
                      className={`text-xs font-semibold py-2 px-3 rounded-lg border transition-all ${
                        selectedTimeline === t
                          ? 'bg-[#14171A] text-white border-[#14171A]'
                          : 'bg-white text-[#5E646A] border-[#D5D5CD] hover:border-[#14171A]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter 3: Purpose */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                  3. Purchase Purpose
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['End Use', 'Investment / Rental Yield'].map((p) => (
                    <button
                      key={p}
                      onClick={() => setSelectedPurpose(p)}
                      className={`text-xs font-semibold py-2 px-3 rounded-lg border transition-all ${
                        selectedPurpose === p
                          ? 'bg-[#14171A] text-white border-[#14171A]'
                          : 'bg-white text-[#5E646A] border-[#D5D5CD] hover:border-[#14171A]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Automated Logic Output Card */}
            <div className="lg:col-span-6 bg-white rounded-xl border border-[#E8E8E2] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#F4F4F0]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-xs font-mono font-bold text-[#14171A]">AI ENGINE OUTPUT</span>
                </div>
                <span
                  className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${
                    tier === 'HOT' ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-amber-50 text-amber-600 border border-amber-200'
                  }`}
                >
                  TIER: {tier} PRIORITY
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#5E646A]">Intent Confidence Score:</span>
                  <span className="font-mono font-black text-base text-[#14171A]">{score}/100</span>
                </div>
                <div className="w-full bg-[#F4F4F0] h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#1E56D6] h-full rounded-full transition-all duration-500"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>

                {/* Simulated Automated Actions */}
                <div className="pt-3 space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#FBFBF9] border border-[#E8E8E2] flex items-center gap-2">
                    <MessageSquareCode className="w-4 h-4 text-[#1E56D6] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#14171A]">WhatsApp Dispatch:</span>{' '}
                      <span className="text-[#5E646A]">Personalized brochure delivered within 12 seconds.</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FBFBF9] border border-[#E8E8E2] flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#1E56D6] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#14171A]">Sales Rep Alert:</span>{' '}
                      <span className="text-[#5E646A]">
                        {isHot ? 'High-priority notification sent to Project Closing Lead.' : 'Routed to nurturing queue for automated follow-up.'}
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#FBFBF9] border border-[#E8E8E2] flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#1E56D6] shrink-0" />
                    <div>
                      <span className="font-semibold text-[#14171A]">Site Visit Booking:</span>{' '}
                      <span className="text-[#5E646A]">Interactive weekend calendar slot proposed to prospect.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#F4F4F0] flex items-center justify-between text-[11px] text-[#71777D]">
                <span>Integrates with LeadSquared, Salesforce & Sell.Do</span>
                <span className="font-mono">STATUS: SYNCED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer CTA */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('solutions', 'site-visit-generation')}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] hover:text-[#1E56D6] transition-colors"
          >
            <span>Explore Our Growth System</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
