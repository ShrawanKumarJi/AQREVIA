import React, { useState, useEffect } from 'react';
import { PageId, SolutionId } from '../types';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, solutionId?: SolutionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: PageId; hasSubmenu?: boolean }[] = [
    { label: 'Solutions', page: 'solutions', hasSubmenu: true },
    { label: 'Who We Work With', page: 'who-we-work-with' },
    { label: 'Results', page: 'results' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const solutionList: { id: SolutionId; label: string; sub: string }[] = [
    { id: 'project-launch', label: 'Project Launch', sub: 'Pre-launch & opening velocity' },
    { id: 'buyer-acquisition', label: 'Buyer Acquisition', sub: 'High-intent buyer funnels' },
    { id: 'site-visit-generation', label: 'Site Visit Generation', sub: 'Turning inquiries into walk-ins' },
    { id: 'project-sales-growth', label: 'Project Sales Growth', sub: 'CRM & revenue acceleration' },
    { id: 'broker-partner-growth', label: 'Broker & Channel Partner', sub: 'Exclusive partner pipelines' },
  ];

  return (
    <header
      id="nxz-global-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FBFBF9]/95 backdrop-blur-md border-b border-[#E8E8E2] py-3 shadow-xs'
          : 'bg-[#FBFBF9]/80 backdrop-blur-xs py-5 border-b border-[#E8E8E2]/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: NXZ Wordmark */}
        <button
          id="nxz-logo-btn"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group text-left flex items-baseline gap-2 focus:outline-hidden"
        >
          <span className="font-display font-black text-2xl tracking-tighter text-[#14171A] group-hover:text-[#1E56D6] transition-colors">
            NXZ
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-semibold tracking-widest text-[#5E646A] border-l border-[#D5D5CD] pl-2">
            Real Estate Growth
          </span>
        </button>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.page}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setSolutionsDropdownOpen(true)}
              onMouseLeave={() => item.hasSubmenu && setSolutionsDropdownOpen(false)}
            >
              <button
                id={`nav-link-${item.page}`}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 py-1 ${
                  currentPage === item.page
                    ? 'text-[#1E56D6] font-semibold'
                    : 'text-[#5E646A] hover:text-[#14171A]'
                }`}
              >
                {item.label}
                {item.hasSubmenu && (
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-[#1E56D6]' : ''}`} />
                )}
              </button>

              {/* Submenu for Solutions */}
              {item.hasSubmenu && solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-lg border border-[#E8E8E2] p-2 py-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="text-[11px] font-bold text-[#8D9399] uppercase tracking-wider px-3 py-1.5 border-b border-[#F4F4F0] mb-1">
                    Real Estate Systems
                  </div>
                  {solutionList.map((sol) => (
                    <button
                      key={sol.id}
                      onClick={() => {
                        onNavigate('solutions', sol.id);
                        setSolutionsDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F4F4F0] transition-colors group flex flex-col"
                    >
                      <span className="text-xs font-semibold text-[#14171A] group-hover:text-[#1E56D6] transition-colors">
                        {sol.label}
                      </span>
                      <span className="text-[11px] text-[#71777D]">{sol.sub}</span>
                    </button>
                  ))}
                  <div className="mt-1 pt-1.5 border-t border-[#F4F4F0] px-3">
                    <button
                      onClick={() => {
                        onNavigate('solutions');
                        setSolutionsDropdownOpen(false);
                      }}
                      className="text-xs font-semibold text-[#1E56D6] hover:underline flex items-center gap-1 py-1"
                    >
                      View All Solutions Overview →
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Primary CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            id="nav-cta-growth-plan"
            onClick={() => onNavigate('growth-plan')}
            className="group inline-flex items-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get a Growth Plan</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => onNavigate('growth-plan')}
            className="text-xs font-semibold bg-[#14171A] text-white px-3.5 py-1.5 rounded-full"
          >
            Growth Plan
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#14171A] hover:text-[#1E56D6] focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBFBF9] border-b border-[#E8E8E2] px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-1">
            <button
              onClick={() => {
                onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'home' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                onNavigate('solutions');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'solutions' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              Solutions
            </button>
            <div className="pl-4 space-y-1.5 border-l-2 border-[#E8E8E2] my-1">
              {solutionList.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => {
                    onNavigate('solutions', sol.id);
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-xs text-[#5E646A] hover:text-[#1E56D6] py-1"
                >
                  • {sol.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                onNavigate('who-we-work-with');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'who-we-work-with' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              Who We Work With
            </button>
            <button
              onClick={() => {
                onNavigate('results');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'results' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              Results
            </button>
            <button
              onClick={() => {
                onNavigate('about');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'about' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2.5 text-base font-medium ${
                currentPage === 'contact' ? 'text-[#1E56D6] font-bold' : 'text-[#14171A]'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-4 border-t border-[#E8E8E2]">
            <button
              onClick={() => {
                onNavigate('growth-plan');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1E56D6] text-white font-semibold py-3 px-4 rounded-xl text-sm"
            >
              <span>Get a Growth Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
