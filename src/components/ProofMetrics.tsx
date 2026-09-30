import React from 'react';
import { PROOF_METRICS } from '../data/siteData';
import { ShieldCheck } from 'lucide-react';

export const ProofMetrics: React.FC = () => {
  return (
    <section id="proof-metrics-section" className="py-14 bg-white border-y border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h3 className="text-xs uppercase tracking-widest font-bold text-[#8D9399]">
              Performance Metrics & Benchmark Architecture
            </h3>
            <p className="text-sm text-[#5E646A] mt-1">
              Engineered acquisition metrics awaiting project-verified deployment numbers.
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#8D9399] bg-[#FBFBF9] px-3 py-1.5 rounded-md border border-[#E8E8E2]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#1E56D6]" />
            <span>Structured Verification Mode</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {PROOF_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2] hover:border-[#C5A880] transition-colors duration-200 group"
            >
              <div className="font-display text-3xl sm:text-4xl font-black text-[#14171A] group-hover:text-[#1E56D6] tracking-tight transition-colors">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-[#14171A] mt-2 leading-snug">
                {metric.label}
              </div>
              {metric.note && (
                <div className="text-[11px] text-[#71777D] mt-1 leading-normal">
                  {metric.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
