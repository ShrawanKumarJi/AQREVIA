import React from 'react';
import { PageId, SolutionId } from '../types';
import { Hero } from '../components/Hero';
import { ProofMetrics } from '../components/ProofMetrics';
import { ProblemSection } from '../components/ProblemSection';
import { GrowthSystem } from '../components/GrowthSystem';
import { WhatWeBuild } from '../components/WhatWeBuild';
import { FeaturedCaseStudy } from '../components/FeaturedCaseStudy';
import { WhoWeWorkWithSection } from '../components/WhoWeWorkWithSection';
import { AISalesSystem } from '../components/AISalesSystem';
import { HowWeWork } from '../components/HowWeWork';
import { WhyNXZ } from '../components/WhyNXZ';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main id="nxz-home-page" className="w-full">
      {/* 2. Hero */}
      <Hero onNavigate={onNavigate} />

      {/* 3. Proof / Metrics */}
      <ProofMetrics />

      {/* 4. Real Estate Problem */}
      <ProblemSection />

      {/* 5. NXZ Growth System */}
      <GrowthSystem onNavigate={onNavigate} />

      {/* 6. What We Build */}
      <WhatWeBuild onNavigate={onNavigate} />

      {/* 7. Featured Results / Case Studies */}
      <FeaturedCaseStudy onNavigate={onNavigate} />

      {/* 8. Who We Work With */}
      <WhoWeWorkWithSection onNavigate={onNavigate} />

      {/* 9. AI + Sales System */}
      <AISalesSystem onNavigate={onNavigate} />

      {/* 10. How We Work */}
      <HowWeWork />

      {/* 11. Why NXZ */}
      <WhyNXZ />

      {/* 12. Final CTA */}
      <FinalCTA onNavigate={onNavigate} />
    </main>
  );
};
