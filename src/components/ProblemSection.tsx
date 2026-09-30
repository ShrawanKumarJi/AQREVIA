import React from 'react';
import { PROBLEMS } from '../data/siteData';
import { TrendingUp, UserX, HelpCircle, Clock, MapPinOff, Building2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#14171A]" />;
      case 'UserX':
        return <UserX className="w-5 h-5 text-[#14171A]" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-[#14171A]" />;
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#14171A]" />;
      case 'MapPinOff':
        return <MapPinOff className="w-5 h-5 text-[#14171A]" />;
      case 'Building2':
        return <Building2 className="w-5 h-5 text-[#14171A]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#14171A]" />;
    }
  };

  return (
    <section id="problem-section" className="py-24 bg-[#FBFBF9] border-b border-[#E8E8E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase font-bold tracking-widest text-[#8D9399] mb-3">
            The Industry Bottleneck
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14171A] tracking-tight">
            Great Projects Still Need Great Demand.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
            A strong project does not automatically create a predictable flow of qualified buyers. Real estate growth requires the right positioning, acquisition, qualification, follow-up and sales process.
          </p>
        </div>

        {/* 6 Problem Cards in 3x2 Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((prob) => (
            <div
              key={prob.id}
              className="p-7 rounded-xl bg-white border border-[#E8E8E2] hover:border-[#1E56D6]/40 hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F4F0] flex items-center justify-center group-hover:bg-[#1E56D6]/10 transition-colors">
                    {getIcon(prob.iconName)}
                  </div>
                  <span className="text-xs font-mono text-[#A0A6AC]">0{prob.id}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#14171A] mb-2 group-hover:text-[#1E56D6] transition-colors">
                  {prob.title}
                </h3>

                <p className="text-sm text-[#5E646A] leading-relaxed">
                  {prob.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F4F4F0] text-[11px] font-semibold text-[#8D9399] uppercase tracking-wider">
                Impact: <span className="text-[#14171A] font-medium">{prob.metricImpact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
