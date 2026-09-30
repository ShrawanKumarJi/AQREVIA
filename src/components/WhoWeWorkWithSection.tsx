import React from 'react';
import { CLIENT_TYPES } from '../data/siteData';
import { PageId } from '../types';
import { ArrowRight, Check } from 'lucide-react';

interface WhoWeWorkWithSectionProps {
  onNavigate: (page: PageId) => void;
}

export const WhoWeWorkWithSection: React.FC<WhoWeWorkWithSectionProps> = ({ onNavigate }) => {
  return (
    <section id="who-we-work-with-section" className="py-24 bg-[#FBFBF9] border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
              Specialized Ecosystem Focus
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
              Built Around the Real Estate Ecosystem.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              We exclusively support real estate stakeholders. Our systems are tuned to the precise financial and sales rhythms of property absorption.
            </p>
          </div>
          <button
            onClick={() => onNavigate('who-we-work-with')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E56D6] hover:underline shrink-0"
          >
            <span>Explore All Client Profiles</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_TYPES.map((client, idx) => (
            <div
              key={client.id}
              className="bg-white rounded-2xl border border-[#E8E8E2] overflow-hidden flex flex-col justify-between hover:border-[#1E56D6]/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Architectural image */}
                <div className="relative h-44 overflow-hidden bg-[#EDEDE8]">
                  <img
                    src={client.imageUrl}
                    alt={client.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                      PARTNER TYPE 0{idx + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-white leading-tight mt-0.5">
                      {client.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-xs font-semibold text-[#1E56D6] uppercase tracking-wider mb-2">
                    {client.headline}
                  </p>
                  <p className="text-xs text-[#5E646A] leading-relaxed mb-4">
                    {client.challenge}
                  </p>

                  <div className="pt-3 border-t border-[#F4F4F0] space-y-1.5">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#8D9399]">
                      System Deliverables
                    </div>
                    {client.systemIncludes.slice(0, 2).map((item, i) => (
                      <div key={i} className="text-xs text-[#14171A] flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#1E56D6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom link */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onNavigate('who-we-work-with')}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#14171A] group-hover:text-[#1E56D6] py-2 border-t border-[#E8E8E2] transition-colors"
                >
                  <span>Learn How We Work</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
