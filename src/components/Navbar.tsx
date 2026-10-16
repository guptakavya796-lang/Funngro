import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTeenSignup: () => void;
  onOpenCompanyHire: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTeenSignup, onOpenCompanyHire }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-1.5 text-2xl font-extrabold tracking-tight text-neutral-950 whitespace-nowrap shrink-0">
          <span>funngro</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
        </a>

        {/* Zone 2: 4-5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-neutral-600">
          <a href="#explore" className="hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0">
            Live Projects
          </a>
          <a href="#shark-tank" className="hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0">
            Shark Tank India
          </a>
          <a href="#calculator" className="hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0">
            Earnings Calculator
          </a>
          <a href="#how-it-works" className="hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0">
            How It Works
          </a>
          <button 
            onClick={onOpenCompanyHire}
            className="hover:text-neutral-950 transition-colors whitespace-nowrap shrink-0 font-medium"
          >
            Hire Teen Talent
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenTeenSignup}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all rounded-lg shadow-sm whitespace-nowrap shrink-0"
          >
            <span>Start Earning</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 bg-white px-4 pt-2 pb-6 space-y-3">
          <a
            href="#explore"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-neutral-800 hover:text-emerald-600"
          >
            Live Projects
          </a>
          <a
            href="#shark-tank"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-neutral-800 hover:text-emerald-600"
          >
            Shark Tank India
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-neutral-800 hover:text-emerald-600"
          >
            Earnings Calculator
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-neutral-800 hover:text-emerald-600"
          >
            How It Works
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTeenSignup();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm"
            >
              Start Earning (For Teens)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompanyHire();
              }}
              className="w-full py-2.5 px-4 text-center text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg"
            >
              Post a Project (For Brands)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
