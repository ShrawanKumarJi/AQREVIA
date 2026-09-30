import React, { useState } from 'react';
import { GROWTH_SYSTEM_STAGES } from '../data/siteData';
import { PageId } from '../types';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface GrowthSystemProps {
  onNavigate: (page: PageId) => void;
}

export const GrowthSystem: React.FC<GrowthSystemProps> = ({ onNavigate }) => {
  const [activeStageId, setActiveStageId] = useState<number>(6); // Default highlight AI QUALIFICATION

  const activeStage = GROWTH_SYSTEM_STAGES.find((s) => s.id === activeStageId) || GROWTH_SYSTEM_STAGES[0];

  return (
    <section id="growth-system-section" className="py-24 bg-white border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-4">
            The NXZ Pipeline Engine
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            We Connect Marketing to the Sales Pipeline.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            Most digital efforts fail because they stop at lead delivery. NXZ engineers every subsequent millimeter of the funnel — from initial positioning to on-site closure.
          </p>
        </div>

        {/* 10-Stage Pipeline Visual */}
        <div className="bg-[#FBFBF9] rounded-2xl p-6 lg:p-8 border border-[#E8E8E2] shadow-xs">
          <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8D9399]">
              Full Funnel Sequence (10 Synchronized Modules)
            </span>
            <span className="text-xs text-[#5E646A] hidden sm:inline">
              Click any stage to inspect technical execution
            </span>
          </div>

          {/* Horizontal Scrollable / Responsive Pipeline Steps */}
          <div className="overflow-x-auto pb-4 pt-2 -mx-2 px-2">
            <div className="min-w-[980px] flex items-center justify-between relative">
              {/* Connecting Background Line */}
              <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-[#E8E8E2] -translate-y-1/2 z-0"></div>

              {GROWTH_SYSTEM_STAGES.map((stage, idx) => {
                const isActive = stage.id === activeStageId;
                const isPassed = stage.id < activeStageId;

                return (
                  <div key={stage.id} className="relative z-10 flex flex-col items-center group">
                    <button
                      onClick={() => setActiveStageId(stage.id)}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center font-display text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-[#1E56D6] text-white ring-4 ring-[#1E56D6]/20 scale-110 shadow-md'
                          : isPassed
                          ? 'bg-[#14171A] text-white'
                          : 'bg-white text-[#5E646A] border border-[#D5D5CD] hover:border-[#1E56D6]'
                      }`}
                    >
                      {stage.id === 10 ? <CheckCircle2 className="w-4 h-4" /> : String(stage.id).padStart(2, '0')}
                    </button>

                    <div className="mt-3 text-center">
                      <div
                        className={`text-[11px] font-bold tracking-tight uppercase whitespace-nowrap transition-colors ${
                          isActive ? 'text-[#1E56D6]' : 'text-[#14171A]'
                        }`}
                      >
                        {stage.label}
                      </div>
                      <div className="text-[10px] text-[#8D9399] whitespace-nowrap">
                        {stage.sublabel}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Stage Deep Dive Detail Card */}
          <div className="mt-8 p-6 sm:p-8 bg-white rounded-xl border border-[#E8E8E2] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-[#1E56D6] bg-[#1E56D6]/10 px-2.5 py-0.5 rounded-sm">
                  STAGE 0{activeStage.id} OF 10
                </span>
                <span className="text-xs text-[#8D9399] uppercase font-semibold">
                  {activeStage.sublabel}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-[#14171A]">
                {activeStage.label}
              </h3>
              <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                {activeStage.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FBFBF9] p-4 rounded-lg border border-[#E8E8E2] space-y-2">
              <div className="text-[11px] font-bold text-[#8D9399] uppercase tracking-wider">
                Underlying Technology
              </div>
              <div className="text-xs font-semibold text-[#14171A]">
                {activeStage.techStack}
              </div>
              <div className="pt-2 text-[11px] text-[#71777D] border-t border-[#E8E8E2]">
                Synchronized automatically into real estate client dashboards.
              </div>
            </div>
          </div>
        </div>

        {/* Below the diagram copy & CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2]">
          <p className="text-base text-[#14171A] font-medium max-w-2xl leading-relaxed">
            NXZ does not stop at generating enquiries. We build the acquisition system around what happens after the lead arrives.
          </p>

          <button
            id="growth-system-cta"
            onClick={() => onNavigate('solutions')}
            className="group whitespace-nowrap inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <span>See How It Works</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
