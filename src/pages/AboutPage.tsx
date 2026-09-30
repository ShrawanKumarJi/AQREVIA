import React from 'react';
import { LEADERSHIP } from '../data/siteData';
import { PageId } from '../types';
import { ArrowRight, Compass, Cpu, Layers, Target, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="about-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Hero */}
      <section className="py-14 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
              About NXZ
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#14171A] tracking-tight leading-tight">
              We Work Where Real Estate, Marketing and Technology Meet.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              NXZ is a real-estate growth company focused on helping developers, builders, project owners, brokers and channel partners create demand, generate qualified buyers and build scalable digital sales systems.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Why We Exist & Our Focus */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-[#E8E8E2] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#1E56D6]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#14171A]">
                Why We Exist
              </h2>
              <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                Traditional advertising agencies treat property developments like consumer products — measuring impressions, clicks, and generic lead counts while on-site sales managers struggle with empty weekend schedules.
              </p>
              <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                NXZ was formed to bridge the chasm between digital media and the physical sales gallery. We measure our systems by confirmed site visits, qualified buying capacity, and inventory liquidation velocity.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-[#E8E8E2] space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#1E56D6]" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#14171A]">
                Our Focus
              </h2>
              <p className="text-sm sm:text-base text-[#5E646A] leading-relaxed">
                We concentrate 100% on the real estate sector. Every campaign architecture, algorithmic audience profile, and automated qualification flow is informed by property economics:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-[#14171A] pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6]"></span>
                  <span>Residential launches, luxury towers, and gated villa communities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6]"></span>
                  <span>Commercial office plates, retail plazas, and plotted developments</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1E56D6]"></span>
                  <span>Mid-phase inventory absorption & ready-to-move liquidation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Our Approach & Capabilities */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl border border-[#E8E8E2] space-y-8">
            <div className="max-w-3xl">
              <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399] mb-2">
                Operational Foundation
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A]">
                Our Approach & Full Capabilities
              </h3>
              <p className="mt-2 text-sm text-[#5E646A]">
                A unified growth partner replacing multiple fragmented vendors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2] space-y-3">
                <div className="font-display text-base font-bold text-[#14171A] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#1E56D6]" />
                  <span>Performance Acquisition</span>
                </div>
                <p className="text-xs text-[#5E646A] leading-relaxed">
                  Algorithmic media planning across Google Search, Meta luxury cohorts, and display remarketing, focused on prospective buyers with genuine purchasing power.
                </p>
              </div>

              <div className="p-6 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2] space-y-3">
                <div className="font-display text-base font-bold text-[#14171A] flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#1E56D6]" />
                  <span>Technology & Automation</span>
                </div>
                <p className="text-xs text-[#5E646A] leading-relaxed">
                  Real-time conversational qualification, automated WhatsApp brochure handoffs, calendar scheduling engines, and CRM integrations for immediate sales team alerts.
                </p>
              </div>

              <div className="p-6 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2] space-y-3">
                <div className="font-display text-base font-bold text-[#14171A] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#1E56D6]" />
                  <span>Sales Enablement</span>
                </div>
                <p className="text-xs text-[#5E646A] leading-relaxed">
                  Closing feedback loops, sales rep routing, objection alignment, and attribution analytics that reveal which campaigns generated completed registrations.
                </p>
              </div>
            </div>
          </div>

          {/* 3. Leadership Section (Clean Editable Placeholders) */}
          <div className="bg-white p-8 lg:p-12 rounded-2xl border border-[#E8E8E2] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#8D9399] mb-2">
                  Executive Team
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A]">
                  Leadership
                </h3>
              </div>
              <span className="text-xs text-[#8D9399] bg-[#FBFBF9] px-3 py-1 rounded-md border border-[#E8E8E2]">
                Editable Leadership Placeholders
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LEADERSHIP.map((leader, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#FBFBF9] border border-[#E8E8E2] flex flex-col sm:flex-row gap-6 items-center sm:items-start"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#D5D5CD] shrink-0 bg-[#EDEDE8]">
                    <img
                      src={leader.placeholderImage}
                      alt={leader.role}
                      className="w-full h-full object-cover grayscale contrast-110"
                    />
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#1E56D6] font-bold">
                      [{leader.role} PROFILE]
                    </span>
                    <h4 className="font-display text-lg font-bold text-[#14171A]">
                      {leader.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#8D9399]">
                      {leader.experience}
                    </div>
                    <p className="text-xs text-[#5E646A] leading-relaxed pt-1">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="p-8 rounded-2xl bg-[#14171A] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-2xl font-bold text-white">
                Partner with NXZ on Your Next Development
              </h4>
              <p className="text-xs sm:text-sm text-[#A0A6AC] mt-1">
                Schedule an introductory consultation with our real estate growth team.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="whitespace-nowrap bg-[#1E56D6] hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors shrink-0"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
