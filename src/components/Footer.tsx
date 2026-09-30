import React from 'react';
import { PageId, SolutionId } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="nxz-footer" className="bg-[#14171A] text-white pt-20 pb-12 border-t border-[#262A2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#262A2E]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display font-black text-3xl tracking-tighter text-white">NXZ</span>
              <span className="text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold">
                Real Estate Growth & Performance
              </span>
            </div>
            <p className="text-sm text-[#A0A6AC] max-w-sm leading-relaxed">
              We engineer specialized buyer acquisition, project launch campaigns, and technology-driven sales systems for developers, builders, brokers and channel partners.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1F2429] border border-[#2F353C] text-xs text-[#CBD5E1]">
                <span className="w-2 h-2 rounded-full bg-[#1E56D6] animate-pulse"></span>
                <span>Active Across Key Indian Real Estate Markets</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#9CA3AF]">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'project-launch');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Project Launch
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'buyer-acquisition');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Buyer Acquisition
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'site-visit-generation');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Site Visit Generation
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'project-sales-growth');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Project Sales Growth
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('solutions', 'broker-partner-growth');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Broker & Partner Growth
                </button>
              </li>
            </ul>
          </div>

          {/* Who We Work With */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#9CA3AF]">
              Who We Work With
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('who-we-work-with');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Developers & Builders
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('who-we-work-with');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Project Owners
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('who-we-work-with');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Brokers
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('who-we-work-with');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Channel Partners
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#9CA3AF]">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('about');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  About NXZ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('results');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Results & Proof
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contact');
                    scrollToTop();
                  }}
                  className="text-[#D1D5DB] hover:text-white hover:underline transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('growth-plan');
                    scrollToTop();
                  }}
                  className="text-[#1E56D6] hover:text-blue-400 font-semibold transition-colors flex items-center gap-1"
                >
                  Request Growth Plan <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#262A2E]">
              <h5 className="text-[11px] uppercase font-semibold text-[#8D9399] tracking-wider mb-2">Connect</h5>
              <div className="flex items-center gap-3 text-xs text-[#9CA3AF]">
                <a href="#linkedin" onClick={(e) => e.preventDefault()} className="hover:text-white">LinkedIn</a>
                <span>•</span>
                <a href="#instagram" onClick={(e) => e.preventDefault()} className="hover:text-white">Instagram</a>
                <span>•</span>
                <a href="#youtube" onClick={(e) => e.preventDefault()} className="hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D9399]">
          <p>© 2026 NXZ. All rights reserved. Real Estate Growth & Performance.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#6C7278]">Performance Marketing • Technology • AI</span>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white">Privacy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
