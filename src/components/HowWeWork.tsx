import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';
import { Check } from 'lucide-react';

export const HowWeWork: React.FC = () => {
  return (
    <section id="how-we-work-section" className="py-24 bg-[#FBFBF9] border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
            Execution Methodology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            From Project to Buyer.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            Our disciplined six-stage methodology ensures zero disconnect between marketing budgets and site sales closures.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white rounded-xl border border-[#E8E8E2] p-5 flex flex-col justify-between hover:border-[#1E56D6]/40 hover:shadow-md transition-all duration-200 group relative"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#1E56D6] bg-[#1E56D6]/10 px-2.5 py-1 rounded-sm">
                    {step.step}
                  </span>
                  <span className="text-[10px] text-[#8D9399] uppercase tracking-wider font-semibold">
                    PHASE
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#14171A] group-hover:text-[#1E56D6] transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#5E646A] leading-relaxed mb-4">
                  {step.summary}
                </p>

                {/* Sub details */}
                <div className="pt-3 border-t border-[#F4F4F0] space-y-1.5">
                  {step.details.slice(0, 2).map((detail, dIdx) => (
                    <div key={dIdx} className="text-[11px] text-[#71777D] flex items-start gap-1">
                      <Check className="w-3 h-3 text-[#1E56D6] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
