import React, { useState } from 'react';
import { SOLUTIONS } from '../data/siteData';
import { PageId, SolutionId, SolutionItem } from '../types';
import { ArrowRight, Check, ChevronDown, HelpCircle, Target, Sparkles, Building, Layers } from 'lucide-react';

interface SolutionsPageProps {
  initialSolutionId?: SolutionId;
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ initialSolutionId, onNavigate }) => {
  // If an initial solution is passed or selected, we show the deep-dive template
  const [selectedSolutionId, setSelectedSolutionId] = useState<SolutionId | 'overview'>(
    initialSolutionId || 'overview'
  );

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const currentSolution: SolutionItem =
    SOLUTIONS.find((s) => s.id === selectedSolutionId) || SOLUTIONS[0];

  const handleTabChange = (id: SolutionId | 'overview') => {
    setSelectedSolutionId(id);
    setOpenFaqIndex(0);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div id="solutions-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Solutions Page Hero */}
      <section className="py-12 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
              Specialized Real Estate Solutions
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#14171A] tracking-tight">
              Real Estate Growth, Built Around the Sales Journey.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              We design modular acquisition and performance systems addressing every milestone from initial land positioning to final deed registry.
            </p>
          </div>

          {/* Solution Tabs Selector */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => handleTabChange('overview')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedSolutionId === 'overview'
                  ? 'bg-[#14171A] text-white shadow-xs'
                  : 'bg-[#F4F4F0] text-[#5E646A] hover:text-[#14171A] hover:bg-[#E8E8E2]'
              }`}
            >
              All Solutions Overview
            </button>
            {SOLUTIONS.map((sol) => (
              <button
                key={sol.id}
                onClick={() => handleTabChange(sol.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedSolutionId === sol.id
                    ? 'bg-[#1E56D6] text-white shadow-xs'
                    : 'bg-[#F4F4F0] text-[#5E646A] hover:text-[#14171A] hover:bg-[#E8E8E2]'
                }`}
              >
                {sol.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW VIEW: Shows all 5 solutions stacked with rich details */}
      {selectedSolutionId === 'overview' ? (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {SOLUTIONS.map((sol, index) => (
              <div
                key={sol.id}
                id={`sol-card-${sol.id}`}
                className="bg-white rounded-2xl border border-[#E8E8E2] overflow-hidden shadow-xs hover:border-[#1E56D6]/40 transition-colors p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left info */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#1E56D6] bg-[#1E56D6]/10 px-2.5 py-0.5 rounded-sm">
                        SYSTEM 0{index + 1}
                      </span>
                      <span className="text-xs font-semibold uppercase text-[#8D9399]">
                        {sol.tagline}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A]">
                      {sol.title}
                    </h2>

                    <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                      {sol.shortDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2]">
                        <div className="text-[11px] uppercase font-bold text-[#8D9399] mb-1">
                          Common Challenge
                        </div>
                        <p className="text-xs text-[#5E646A] leading-relaxed">
                          {sol.problem}
                        </p>
                      </div>

                      <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2]">
                        <div className="text-[11px] uppercase font-bold text-[#1E56D6] mb-1">
                          Our Approach
                        </div>
                        <p className="text-xs text-[#5E646A] leading-relaxed">
                          {sol.approach}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-xs uppercase font-bold text-[#8D9399] mb-2.5">
                        Key Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {sol.capabilities.slice(0, 4).map((cap, i) => (
                          <div key={i} className="text-xs text-[#14171A] flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#1E56D6] shrink-0" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                      <button
                        onClick={() => handleTabChange(sol.id)}
                        className="inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                      >
                        <span>Inspect Full Solution Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onNavigate('growth-plan')}
                        className="text-xs font-semibold text-[#1E56D6] hover:underline"
                      >
                        Request Plan for this System →
                      </button>
                    </div>
                  </div>

                  {/* Right image visual */}
                  <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-xl overflow-hidden border border-[#E8E8E2]">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                      <div className="text-[10px] uppercase font-mono tracking-wider text-white/80">Architecture View</div>
                      <div className="font-display font-bold text-sm text-white mt-0.5">{sol.exampleCase.title}</div>
                      <div className="text-[11px] text-white/80">{sol.exampleCase.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        /* INDIVIDUAL SOLUTION TEMPLATE (Section 20 of requirements) */
        <div id="solution-detail-template" className="py-12 space-y-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* 1. Solution Hero Banner */}
            <div className="bg-white rounded-2xl border border-[#E8E8E2] p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider">
                    {currentSolution.tagline}
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#14171A]">
                    {currentSolution.title}
                  </h2>
                  <p className="text-base sm:text-lg text-[#5E646A] leading-relaxed">
                    {currentSolution.shortDescription}
                  </p>
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onNavigate('growth-plan')}
                      className="inline-flex items-center gap-2 bg-[#1E56D6] hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-xs"
                    >
                      <span>Get a Growth Plan for {currentSolution.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleTabChange('overview')}
                      className="text-xs font-semibold text-[#5E646A] hover:text-[#14171A] underline"
                    >
                      ← Back to Overview
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 h-80 rounded-xl overflow-hidden border border-[#E8E8E2] relative">
                  <img
                    src={currentSolution.imageUrl}
                    alt={currentSolution.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="font-bold text-sm">{currentSolution.exampleCase.title}</div>
                    <div className="text-[11px] text-white/80">{currentSolution.exampleCase.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Problem & Our Approach */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-[#E8E8E2] space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399]">
                  The Real Estate Challenge
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14171A]">
                  Why Generic Methods Break Down
                </h3>
                <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                  {currentSolution.problem}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-[#E8E8E2] space-y-4">
                <div className="text-xs font-bold uppercase tracking-widest text-[#1E56D6]">
                  The NXZ Approach
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14171A]">
                  Engineered Acquisition Architecture
                </h3>
                <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                  {currentSolution.approach}
                </p>
              </div>
            </div>

            {/* 3. What We Build & Capabilities */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-[#E8E8E2] space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399] mb-2">
                  System Deliverables
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14171A]">
                  What We Build for {currentSolution.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentSolution.capabilities.map((cap, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2] flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#1E56D6] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-[#14171A] leading-snug">{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Growth Workflow */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-[#E8E8E2] space-y-8">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399] mb-2">
                  Sequential Progression
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14171A]">
                  Implementation Workflow
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentSolution.workflow.map((wf) => (
                  <div key={wf.step} className="p-5 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2] space-y-2">
                    <span className="font-mono text-xs font-bold text-[#1E56D6] bg-[#1E56D6]/10 px-2 py-0.5 rounded-sm">
                      PHASE {wf.step}
                    </span>
                    <h4 className="font-display text-base font-bold text-[#14171A]">
                      {wf.label}
                    </h4>
                    <p className="text-xs text-[#5E646A] leading-relaxed">
                      {wf.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Example Case Study with Placeholders */}
            <div className="bg-[#14171A] text-white p-8 lg:p-10 rounded-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#262A2E] pb-4">
                <div>
                  <div className="text-[11px] uppercase font-mono tracking-widest text-[#A0A6AC]">
                    Example Project Implementation
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mt-1">
                    {currentSolution.exampleCase.title}
                  </h3>
                  <div className="text-xs text-[#C5A880]">
                    {currentSolution.exampleCase.location} • {currentSolution.exampleCase.propertyType}
                  </div>
                </div>
                <div className="text-xs font-mono text-[#8D9399]">
                  [XX] PLACEHOLDER TEMPLATE
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3">
                  <div className="text-xs text-[#A0A6AC]">
                    <strong className="text-white">Objective:</strong> {currentSolution.exampleCase.objective}
                  </div>
                  <div className="text-xs text-[#A0A6AC]">
                    <strong className="text-white">Deployed Strategy:</strong>{' '}
                    {currentSolution.exampleCase.strategy.join(' • ')}
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-3 gap-3">
                  {currentSolution.exampleCase.results.map((res, idx) => (
                    <div key={idx} className="p-3 bg-[#1F2429] rounded-xl border border-[#2F353C] text-center">
                      <div className="text-xl font-bold font-display text-white">{res.value}</div>
                      <div className="text-[10px] text-[#A0A6AC] mt-1 leading-tight">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. FAQ Accordion */}
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-[#E8E8E2] space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399] mb-2">
                  Clarity & Assurance
                </div>
                <h3 className="font-display text-2xl font-bold text-[#14171A]">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {currentSolution.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-[#E8E8E2] rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#14171A] hover:bg-[#FBFBF9]"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#71777D] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#5E646A] leading-relaxed bg-[#FBFBF9] border-t border-[#E8E8E2]">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 7. Bottom CTA */}
            <div className="p-8 rounded-2xl bg-[#F4F4F0] border border-[#E8E8E2] flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display text-xl font-bold text-[#14171A]">
                  Ready to deploy {currentSolution.title} for your inventory?
                </h4>
                <p className="text-xs sm:text-sm text-[#5E646A] mt-1">
                  We formulate customized launch timelines, audience profiles and acquisition budgets.
                </p>
              </div>
              <button
                onClick={() => onNavigate('growth-plan')}
                className="whitespace-nowrap bg-[#14171A] hover:bg-[#1E56D6] text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shrink-0"
              >
                Get a Growth Plan →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
