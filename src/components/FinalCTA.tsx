import React from 'react';
import { PageId } from '../types';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onNavigate: (page: PageId) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta-section" className="py-24 bg-[#14171A] text-white relative overflow-hidden">
      {/* Subtle architectural background detail */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#1E56D6_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#CBD5E1]">
          <span className="w-2 h-2 rounded-full bg-[#1E56D6] animate-pulse"></span>
          <span>Ready to Accelerate Project Absorption?</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
          Turn Real Estate Inventory Into <span className="text-[#1E56D6]">Buyer Demand.</span>
        </h2>

        <p className="text-base sm:text-xl text-[#A0A6AC] max-w-2xl mx-auto leading-relaxed">
          NXZ builds performance-driven growth systems for developers, builders, brokers and channel partners — from project launch and buyer acquisition to qualified enquiries and site visits.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-get-plan"
            onClick={() => onNavigate('growth-plan')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E56D6] hover:bg-blue-600 text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Growth Plan</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            id="final-cta-contact"
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 text-base font-semibold px-7 py-4 rounded-xl transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-[#C5A880]" />
            <span>Speak With Our Team</span>
          </button>
        </div>

        {/* Verification guarantee checklist */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#A0A6AC]">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E56D6]" />
            <span>Dedicated Real Estate Growth Architecture</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E56D6]" />
            <span>100% Exclusive Project Lead Ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#1E56D6]" />
            <span>Integrated WhatsApp & CRM Routing</span>
          </div>
        </div>
      </div>
    </section>
  );
};
