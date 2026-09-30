import React from 'react';
import { SOLUTIONS } from '../data/siteData';
import { PageId, SolutionId } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface WhatWeBuildProps {
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const WhatWeBuild: React.FC<WhatWeBuildProps> = ({ onNavigate }) => {
  return (
    <section id="what-we-build-section" className="py-24 bg-[#FBFBF9] border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
            Real Estate Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            What We Build
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            Real-estate growth systems designed around the journey from project launch to buyer.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((sol, index) => {
            // Give the 1st and 4th card special visual balance or layout prominence
            const isFullWidthMobile = index === 4;

            return (
              <div
                key={sol.id}
                className={`bg-white rounded-2xl border border-[#E8E8E2] overflow-hidden flex flex-col justify-between hover:border-[#1E56D6]/40 hover:shadow-lg transition-all duration-300 group ${
                  isFullWidthMobile ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Architectural Image Header */}
                  <div className="relative h-48 overflow-hidden bg-[#EDEDE8]">
                    <img
                      src={sol.imageUrl}
                      alt={sol.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="font-display font-bold uppercase tracking-wider text-[11px] bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-sm">
                        System 0{index + 1}
                      </span>
                      <span className="text-[10px] text-white/80 font-mono">SPEC: {sol.id}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-[#14171A] group-hover:text-[#1E56D6] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#5E646A] leading-relaxed">
                      {sol.shortDescription}
                    </p>

                    {/* Capabilities list */}
                    <div className="mt-6 pt-5 border-t border-[#F4F4F0] space-y-2">
                      <div className="text-[11px] uppercase font-bold tracking-wider text-[#8D9399]">
                        Core Capabilities
                      </div>
                      <ul className="space-y-1.5">
                        {sol.capabilities.slice(0, 4).map((cap, capIdx) => (
                          <li key={capIdx} className="text-xs text-[#14171A] flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#1E56D6] shrink-0 mt-0.5" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <button
                    id={`explore-solution-${sol.id}`}
                    onClick={() => onNavigate('solutions', sol.id)}
                    className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-semibold text-[#14171A] hover:text-[#1E56D6] bg-[#FBFBF9] hover:bg-[#F4F4F0] p-3.5 rounded-xl border border-[#E8E8E2] transition-colors duration-200"
                  >
                    <span>Explore {sol.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
