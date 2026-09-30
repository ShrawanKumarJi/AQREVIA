import React from 'react';
import { CASE_STUDIES } from '../data/siteData';
import { PageId } from '../types';
import { ArrowRight, MapPin, Target, Layers } from 'lucide-react';

interface FeaturedCaseStudyProps {
  onNavigate: (page: PageId) => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({ onNavigate }) => {
  const caseStudy = CASE_STUDIES[0]; // Hyderabad featured case study

  return (
    <section id="featured-case-study-section" className="py-24 bg-white border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
              Performance Verification
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
              Real Estate. Real Numbers.
            </h2>
          </div>
          <button
            onClick={() => onNavigate('results')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E56D6] hover:underline"
          >
            <span>Explore All Results</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Editorial Case Study Card */}
        <div className="rounded-2xl border border-[#E8E8E2] bg-[#FBFBF9] overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Architectural Visual */}
            <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[500px]">
              <img
                src={caseStudy.imageUrl}
                alt={caseStudy.project}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Badges on image */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="bg-white/95 text-[#14171A] text-xs font-bold px-3 py-1 rounded-md tracking-wider uppercase backdrop-blur-xs">
                  {caseStudy.category}
                </span>
                <span className="bg-black/60 text-white text-xs font-mono px-2.5 py-1 rounded-md border border-white/20">
                  REF: HYD-RES-01
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <div className="text-xs uppercase font-bold tracking-widest text-white/80">
                  Featured Project Case Study
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {caseStudy.project}
                </h3>
              </div>
            </div>

            {/* Right: Project Parameters & Structured Metrics */}
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Meta Attributes */}
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-[#E8E8E2]">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-[#1E56D6]" />
                      Location
                    </div>
                    <div className="text-sm font-semibold text-[#14171A]">
                      {caseStudy.location}
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] flex items-center gap-1.5 mb-1">
                      <Target className="w-3.5 h-3.5 text-[#1E56D6]" />
                      Objective
                    </div>
                    <div className="text-sm font-semibold text-[#14171A]">
                      {caseStudy.objective}
                    </div>
                  </div>
                </div>

                {/* Strategy Pill List */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] flex items-center gap-1.5 mb-2.5">
                    <Layers className="w-3.5 h-3.5 text-[#1E56D6]" />
                    Growth Strategy Deployed
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.strategy.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-white border border-[#E8E8E2] text-xs font-medium text-[#14171A] px-3 py-1 rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Structured Results (Strictly [XX] Placeholders as instructed) */}
                <div className="pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-3 flex items-center justify-between">
                    <span>Campaign Results (Awaiting Verification)</span>
                    <span className="text-[10px] text-[#C5A880] font-mono">[XX] PLACEHOLDER MODE</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3.5 bg-white rounded-xl border border-[#E8E8E2]">
                      <div className="text-2xl font-black font-display text-[#14171A]">
                        {caseStudy.results.leads}
                      </div>
                      <div className="text-xs font-medium text-[#71777D] mt-1">Leads</div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#E8E8E2]">
                      <div className="text-2xl font-black font-display text-[#1E56D6]">
                        {caseStudy.results.qualifiedLeads}
                      </div>
                      <div className="text-xs font-medium text-[#71777D] mt-1">Qualified Leads</div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#E8E8E2]">
                      <div className="text-2xl font-black font-display text-[#14171A]">
                        {caseStudy.results.siteVisits}
                      </div>
                      <div className="text-xs font-medium text-[#71777D] mt-1">Site Visits</div>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#E8E8E2]">
                      <div className="text-2xl font-black font-display text-[#14171A]">
                        {caseStudy.results.bookings}
                      </div>
                      <div className="text-xs font-medium text-[#71777D] mt-1">Bookings</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Case Study CTA */}
              <div className="mt-8 pt-6 border-t border-[#E8E8E2] flex items-center justify-between">
                <span className="text-xs text-[#71777D]">
                  Structured template ready for live campaign analytics ingestion.
                </span>
                <button
                  id="view-case-study-btn"
                  onClick={() => onNavigate('results')}
                  className="inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
