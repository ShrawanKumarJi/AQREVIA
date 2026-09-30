import React from 'react';
import { PageId } from '../types';
import { IMAGES } from '../data/siteData';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="hero-section" className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#FBFBF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow / Positioning badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E8E2] text-xs font-semibold text-[#14171A] shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#1E56D6]"></span>
          <span className="tracking-wide uppercase text-[11px] text-[#5E646A]">
            Real Estate Growth & Performance
          </span>
          <span className="text-[#C5A880]">✦</span>
          <span className="text-[11px] text-[#8D9399]">For Developers, Builders & Partners</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-7 z-10">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14171A] tracking-tight leading-[1.08]">
              Turn Real Estate Inventory Into{' '}
              <span className="text-[#1E56D6] inline-block">Buyer Demand.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5E646A] leading-relaxed max-w-xl font-normal">
              NXZ builds performance-driven growth systems for developers, builders, brokers and channel partners — from project launch and buyer acquisition to qualified enquiries and site visits.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-cta-growth-plan"
                onClick={() => onNavigate('growth-plan')}
                className="group inline-flex items-center justify-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-sm sm:text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Get a Growth Plan</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-cta-view-results"
                onClick={() => onNavigate('results')}
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F4F4F0] text-[#14171A] border border-[#D5D5CD] text-sm sm:text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-center"
              >
                <span>View Results</span>
                <ChevronRight className="w-4 h-4 text-[#71777D] group-hover:text-[#14171A] transition-colors" />
              </button>
            </div>

            {/* Subtle Hero Trust Line */}
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-[#71777D] tracking-wide">
              <span className="text-[#14171A] font-semibold">Real Estate Growth</span>
              <span className="text-[#D5D5CD]">•</span>
              <span>Performance Marketing</span>
              <span className="text-[#D5D5CD]">•</span>
              <span>Technology</span>
              <span className="text-[#D5D5CD]">•</span>
              <span>AI Qualification</span>
            </div>
          </div>

          {/* Right Column: Architectural Hero Visual with Integrated Data Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8E8E2] bg-white group">
              {/* Primary Architectural Image */}
              <div className="relative aspect-4/5 w-full overflow-hidden bg-[#EDEDE8]">
                <img
                  src={IMAGES.hero}
                  alt="Contemporary luxury residential high-rise architecture under daylight"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#14171A]/70 via-transparent to-black/10 pointer-events-none"></div>

                {/* Bottom caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs z-10 flex items-center justify-between pointer-events-none">
                  <div className="backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-md border border-white/20">
                    <span className="font-semibold tracking-wider uppercase text-[10px]">Real Estate Pipeline Architecture</span>
                  </div>
                  <div className="text-[10px] text-white/80 font-mono">NXZ / SYSTEM</div>
                </div>
              </div>

              {/* Integrated Data Flow Pipeline Overlay (Desktop floating badge) */}
              <div className="absolute top-4 right-4 z-20 backdrop-blur-md bg-white/95 rounded-xl p-3 border border-[#E8E8E2] shadow-lg max-w-[210px] pointer-events-none">
                <div className="text-[9px] uppercase font-bold tracking-widest text-[#8D9399] mb-2 flex items-center justify-between">
                  <span>Acquisition Engine</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6] animate-ping"></span>
                </div>
                
                {/* 5-Step Micro Flow */}
                <div className="space-y-1.5 text-[11px] font-medium text-[#14171A]">
                  <div className="flex items-center gap-1.5 bg-[#F4F4F0] px-2 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5E646A]"></span>
                    <span className="font-semibold text-[10px]">PROJECT</span>
                  </div>
                  <div className="text-center text-[#8D9399] leading-none text-[9px]">↓</div>
                  <div className="flex items-center gap-1.5 bg-[#F4F4F0] px-2 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6]"></span>
                    <span className="font-semibold text-[10px]">DEMAND</span>
                  </div>
                  <div className="text-center text-[#8D9399] leading-none text-[9px]">↓</div>
                  <div className="flex items-center gap-1.5 bg-[#F4F4F0] px-2 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6]"></span>
                    <span className="font-semibold text-[10px]">QUALIFIED LEADS</span>
                  </div>
                  <div className="text-center text-[#8D9399] leading-none text-[9px]">↓</div>
                  <div className="flex items-center gap-1.5 bg-[#F4F4F0] px-2 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                    <span className="font-semibold text-[10px]">SITE VISITS</span>
                  </div>
                  <div className="text-center text-[#8D9399] leading-none text-[9px]">↓</div>
                  <div className="flex items-center gap-1.5 bg-[#14171A] text-white px-2 py-1 rounded-sm">
                    <CheckCircle2 className="w-3 h-3 text-[#1E56D6]" />
                    <span className="font-bold text-[10px] tracking-wide">SALES</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent Detail */}
            <div className="mt-3 flex items-center justify-between px-2 text-[11px] text-[#71777D]">
              <span>Verified Buyer Ingestion System</span>
              <span className="font-mono text-[10px]">ID: NXZ-RE-2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
