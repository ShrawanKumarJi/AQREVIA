import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/siteData';
import { CaseStudy, PageId } from '../types';
import { ArrowRight, MapPin, Target, Layers, X, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface ResultsPageProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'All' | 'Residential' | 'Commercial' | 'Project Launch' | 'Lead Generation' | 'Project Sales';

export const ResultsPage: React.FC<ResultsPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudy | null>(null);

  const filterOptions: FilterCategory[] = [
    'All',
    'Residential',
    'Commercial',
    'Project Launch',
    'Lead Generation',
    'Project Sales',
  ];

  const filteredStudies = CASE_STUDIES.filter((cs) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Residential') return cs.propertyType === 'Residential' || cs.propertyType === 'Villas';
    if (activeFilter === 'Commercial') return cs.propertyType === 'Commercial';
    return cs.category === activeFilter;
  });

  return (
    <div id="results-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Hero */}
      <section className="py-14 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
              Case Studies & Field Proof
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#14171A] tracking-tight">
              Proof, Not Promises.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              Explore how performance marketing, creative, technology and sales systems can work together for real estate.
            </p>
          </div>

          {/* Verification Protocol Notice */}
          <div className="mt-8 p-4 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2] flex items-center gap-3 text-xs text-[#71777D]">
            <ShieldAlert className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span>
              <strong>Integrity Protocol:</strong> In accordance with client NDAs and RERA compliance disclosures, sensitive client trade names and uncertified metrics are held as structured [XX] placeholders until verified live attribution reports are authorized for publication.
            </span>
          </div>

          {/* Filters Bar */}
          <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-[#14171A] text-white shadow-xs'
                    : 'bg-[#F4F4F0] text-[#5E646A] hover:text-[#14171A] hover:bg-[#E8E8E2]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-[#E8E8E2] overflow-hidden shadow-xs hover:border-[#1E56D6]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image header */}
                  <div className="relative h-64 overflow-hidden bg-[#EDEDE8]">
                    <img
                      src={study.imageUrl}
                      alt={study.project}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white/95 text-[#14171A] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        {study.propertyType}
                      </span>
                      <span className="bg-black/50 text-white text-[10px] font-mono px-2 py-1 rounded-md border border-white/20">
                        {study.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-xs uppercase font-mono tracking-wider text-[#C5A880] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{study.location}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mt-1">
                        {study.project}
                      </h3>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-1">
                        Objective
                      </div>
                      <p className="text-xs sm:text-sm text-[#5E646A] leading-relaxed">
                        {study.objective}
                      </p>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-1.5">
                        Ad Channels & Media Strategy
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {study.adChannels.map((ch, i) => (
                          <span
                            key={i}
                            className="bg-[#FBFBF9] border border-[#E8E8E2] text-[11px] text-[#14171A] px-2.5 py-0.5 rounded-sm"
                          >
                            {ch}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results Metrics Block */}
                    <div className="pt-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#8D9399] mb-2 flex items-center justify-between">
                        <span>Campaign Funnel Results</span>
                        <span className="text-[10px] font-mono text-[#C5A880]">[XX] PLACEHOLDER</span>
                      </div>

                      <div className="grid grid-cols-4 gap-2 text-center">
                        <div className="p-2 bg-[#FBFBF9] rounded-lg border border-[#E8E8E2]">
                          <div className="font-display font-black text-lg text-[#14171A]">
                            {study.results.leads}
                          </div>
                          <div className="text-[10px] text-[#71777D]">Leads</div>
                        </div>

                        <div className="p-2 bg-[#FBFBF9] rounded-lg border border-[#E8E8E2]">
                          <div className="font-display font-black text-lg text-[#1E56D6]">
                            {study.results.qualifiedLeads}
                          </div>
                          <div className="text-[10px] text-[#71777D]">Qualified</div>
                        </div>

                        <div className="p-2 bg-[#FBFBF9] rounded-lg border border-[#E8E8E2]">
                          <div className="font-display font-black text-lg text-[#14171A]">
                            {study.results.siteVisits}
                          </div>
                          <div className="text-[10px] text-[#71777D]">Site Visits</div>
                        </div>

                        <div className="p-2 bg-[#FBFBF9] rounded-lg border border-[#E8E8E2]">
                          <div className="font-display font-black text-lg text-[#14171A]">
                            {study.results.bookings}
                          </div>
                          <div className="text-[10px] text-[#71777D]">Bookings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActiveModalCase(study)}
                    className="w-full inline-flex items-center justify-between bg-[#FBFBF9] hover:bg-[#14171A] hover:text-white text-[#14171A] text-xs font-semibold p-3 rounded-xl border border-[#E8E8E2] transition-colors duration-200"
                  >
                    <span>View Case Study Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Deep-Dive Modal */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E8E8E2] shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setActiveModalCase(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F4F4F0] hover:bg-[#E8E8E2] text-[#14171A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono font-bold text-[#1E56D6] uppercase tracking-wider">
                DETAILED CASE BLUEPRINT
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A] mt-1">
                {activeModalCase.project}
              </h3>
              <p className="text-xs text-[#5E646A] flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-[#1E56D6]" />
                <span>{activeModalCase.location} • {activeModalCase.propertyType}</span>
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2]">
                <div className="text-[11px] font-bold uppercase text-[#8D9399] mb-1">
                  Core Objective
                </div>
                <p className="text-sm text-[#14171A]">{activeModalCase.objective}</p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase text-[#8D9399] mb-2">
                  Key Strategic Deployments
                </div>
                <div className="space-y-2">
                  {activeModalCase.strategy.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#14171A]">
                      <CheckCircle2 className="w-4 h-4 text-[#1E56D6] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#14171A] text-white rounded-xl space-y-2">
                <div className="text-[10px] uppercase font-mono tracking-wider text-[#A0A6AC]">
                  Key Strategic Takeaway
                </div>
                <blockquote className="text-sm font-medium italic text-[#CBD5E1]">
                  "{activeModalCase.highlightQuote}"
                </blockquote>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8E8E2] flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveModalCase(null);
                  onNavigate('growth-plan');
                }}
                className="w-full bg-[#1E56D6] hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors text-center"
              >
                Request Similar Growth Strategy For Your Project →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
