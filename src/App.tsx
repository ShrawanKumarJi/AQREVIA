import React, { useState, useEffect } from 'react';
import { PageId, SolutionId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { WhoWeWorkWithPage } from './pages/WhoWeWorkWithPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { GrowthPlanPage } from './pages/GrowthPlanPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [activeSolutionId, setActiveSolutionId] = useState<SolutionId | undefined>(undefined);

  // Synchronize hash for convenient browser back/forward buttons and direct navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('solutions/')) {
        const solId = hash.split('/')[1] as SolutionId;
        setCurrentPage('solutions');
        setActiveSolutionId(solId);
      } else if (hash === 'solutions') {
        setCurrentPage('solutions');
        setActiveSolutionId(undefined);
      } else if (
        ['home', 'who-we-work-with', 'results', 'about', 'contact', 'growth-plan'].includes(hash)
      ) {
        setCurrentPage(hash as PageId);
        setActiveSolutionId(undefined);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId, solutionId?: SolutionId) => {
    setCurrentPage(page);
    setActiveSolutionId(solutionId);

    if (page === 'solutions' && solutionId) {
      window.location.hash = `solutions/${solutionId}`;
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#14171A] font-sans antialiased selection:bg-[#1E56D6]/15 selection:text-[#1E56D6]">
      {/* 1. Global Sticky Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'solutions' && (
          <SolutionsPage initialSolutionId={activeSolutionId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'who-we-work-with' && (
          <WhoWeWorkWithPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'results' && <ResultsPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        {currentPage === 'growth-plan' && <GrowthPlanPage onNavigate={handleNavigate} />}
      </div>

      {/* Global Editorial Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
