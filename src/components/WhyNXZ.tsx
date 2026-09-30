import React from 'react';
import { WHY_REASONS } from '../data/siteData';
import { Building, Target, GitBranch, Cpu, Sparkles, ShieldCheck } from 'lucide-react';

export const WhyNXZ: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building':
        return <Building className="w-5 h-5 text-[#1E56D6]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#1E56D6]" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-[#1E56D6]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#1E56D6]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#1E56D6]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#1E56D6]" />;
      default:
        return <Building className="w-5 h-5 text-[#1E56D6]" />;
    }
  };

  return (
    <section id="why-nxz-section" className="py-24 bg-white border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
            The Specialized Advantage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            Built for Real Estate. Designed Around Performance.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            NXZ operates with real estate economic literacy — where cost per site visit and inventory absorption velocity determine true campaign success.
          </p>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="p-8 rounded-2xl bg-[#FBFBF9] border border-[#E8E8E2] hover:border-[#1E56D6]/40 hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E8E2] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                {getIcon(reason.icon)}
              </div>

              <h3 className="font-display text-xl font-bold text-[#14171A] group-hover:text-[#1E56D6] transition-colors mb-3">
                {reason.title}
              </h3>

              <p className="text-sm text-[#5E646A] leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
