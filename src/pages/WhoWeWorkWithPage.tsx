import React from 'react';
import { CLIENT_TYPES } from '../data/siteData';
import { PageId } from '../types';
import { ArrowRight, Check, Building, Key, Users, Network } from 'lucide-react';

interface WhoWeWorkWithPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhoWeWorkWithPage: React.FC<WhoWeWorkWithPageProps> = ({ onNavigate }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'developers-builders':
        return <Building className="w-6 h-6 text-[#1E56D6]" />;
      case 'project-owners':
        return <Key className="w-6 h-6 text-[#1E56D6]" />;
      case 'brokers':
        return <Users className="w-6 h-6 text-[#1E56D6]" />;
      case 'channel-partners':
        return <Network className="w-6 h-6 text-[#1E56D6]" />;
      default:
        return <Building className="w-6 h-6 text-[#1E56D6]" />;
    }
  };

  return (
    <div id="who-we-work-with-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Page Hero */}
      <section className="py-14 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
              Target Stakeholders
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#14171A] tracking-tight">
              Built Around the Real Estate Ecosystem.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              We do not serve e-commerce, B2B SaaS, or consumer apps. We strictly engineer customer acquisition systems for developers, builders, project owners, brokers and channel partners.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Dedicated Stakeholder Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CLIENT_TYPES.map((stakeholder, index) => (
            <div
              key={stakeholder.id}
              id={`stakeholder-${stakeholder.id}`}
              className="bg-white rounded-2xl border border-[#E8E8E2] overflow-hidden shadow-xs hover:border-[#1E56D6]/40 transition-colors p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4F4F0] flex items-center justify-center">
                      {getIcon(stakeholder.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#1E56D6] uppercase tracking-wider">
                        STAKEHOLDER PROFILE 0{index + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#14171A]">
                        {stakeholder.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base font-semibold text-[#1E56D6]">
                    "{stakeholder.headline}"
                  </p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4">
                    <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-1">
                        Their Common Challenge
                      </div>
                      <p className="text-xs sm:text-sm text-[#5E646A] leading-relaxed">
                        {stakeholder.challenge}
                      </p>
                    </div>

                    <div className="p-4 bg-[#FBFBF9] rounded-xl border border-[#E8E8E2]">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#14171A] mb-1">
                        What NXZ Provides
                      </div>
                      <p className="text-xs sm:text-sm text-[#5E646A] leading-relaxed">
                        {stakeholder.solution}
                      </p>
                    </div>
                  </div>

                  {/* System & Engagement Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        How Acquisition System Works
                      </div>
                      <ul className="space-y-1.5">
                        {stakeholder.systemIncludes.map((item, i) => (
                          <li key={i} className="text-xs text-[#14171A] flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#1E56D6] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Engagement Scope
                      </div>
                      <ul className="space-y-1.5">
                        {stakeholder.engagementScope.map((item, i) => (
                          <li key={i} className="text-xs text-[#14171A] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0 mt-1.5"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => onNavigate('growth-plan')}
                      className="inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
                    >
                      <span>Request {stakeholder.title} Growth Plan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right image visual */}
                <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-xl overflow-hidden border border-[#E8E8E2]">
                  <img
                    src={stakeholder.imageUrl}
                    alt={stakeholder.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <div className="text-[10px] uppercase font-mono tracking-wider text-white/80">Ecosystem Architecture</div>
                    <div className="font-display font-bold text-sm text-white mt-0.5">{stakeholder.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-white border border-[#E8E8E2] text-center space-y-4">
            <h3 className="font-display text-2xl font-bold text-[#14171A]">
              Operating Across India's Core Real Estate Markets
            </h3>
            <p className="text-sm text-[#5E646A] max-w-xl mx-auto">
              Hyderabad, Bengaluru, Mumbai MMR, Delhi NCR, Pune, Chennai, and tier-1 expansion corridors.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('growth-plan')}
                className="inline-flex items-center gap-2 bg-[#1E56D6] hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <span>Initiate Your Growth Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
