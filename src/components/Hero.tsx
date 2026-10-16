import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import { FEATURED_BRANDS } from '../data/mockData';

interface HeroProps {
  onOpenTeenSignup: () => void;
  onOpenCompanyHire: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTeenSignup, onOpenCompanyHire }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Proof Strip - Clean Unboxed Metadata */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-medium text-neutral-600 mb-6">
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Shark Tank India S2 Backed
          </span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>1,000,000+ Teenlancers</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span>5,000+ Top Companies</span>
          <span aria-hidden="true" className="text-neutral-300">·</span>
          <span className="font-semibold text-neutral-900">₹3.5 Crore+ Earned</span>
        </div>

        {/* 2-Column Split: Value Proposition & High-Fidelity Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] [text-wrap:balance]">
              First income. Real experience. Built for India's smartest teens.
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl">
              Funngro connects teenagers (ages 14–25) with top brands and startups for paid micro-internships, reel editing, app testing, and design sprints. Build a verified portfolio before you step into college.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenTeenSignup}
                className="px-6 py-3.5 text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all rounded-xl shadow-sm hover:shadow-md whitespace-nowrap"
              >
                Join as Teenlancer
              </button>
              <a
                href="#explore"
                className="px-6 py-3.5 text-base font-semibold text-neutral-800 bg-white hover:bg-neutral-100 border border-neutral-300 active:scale-[0.98] transition-all rounded-xl shadow-xs whitespace-nowrap flex items-center gap-2"
              >
                <span>Browse Paid Gigs</span>
                <ArrowDown className="w-4 h-4 text-neutral-500" />
              </a>
              <button
                onClick={onOpenCompanyHire}
                className="text-sm font-semibold text-neutral-600 hover:text-neutral-950 underline underline-offset-4 px-2 py-1"
              >
                Hiring talent for your brand? →
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-neutral-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tabular-nums">₹1K–₹15K</div>
                <div className="text-xs text-neutral-500 font-medium">Monthly Earning Range</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tabular-nums">100%</div>
                <div className="text-xs text-neutral-500 font-medium">Verified Brand Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tabular-nums">48 Hrs</div>
                <div className="text-xs text-neutral-500 font-medium">Direct Bank / UPI Payout</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Story Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-100">
              <img
                src="/src/assets/images/funngro_hero_teenlancers_1792145455992.jpg"
                alt="Teenagers working together on laptops and mobile apps for freelance gigs"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-[16/11]"
              />

              {/* Verified Payout Card Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-neutral-200 shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                      RS
                    </div>
                    <div>
                      <div className="text-sm font-bold text-neutral-900">Riya Sen (17, Delhi)</div>
                      <div className="text-xs text-neutral-500">Completed 5 Reels for CarDekho</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-sm font-extrabold text-emerald-600 tabular-nums">+₹3,500</div>
                    <div className="text-[11px] text-neutral-400 font-medium">Paid via UPI</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Escrow Guarantee Pill Badge */}
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-neutral-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Escrow Protected: Money deposited before teen begins work</span>
            </div>
          </div>

        </div>

        {/* Brand Bar: Companies that hire Teenlancers */}
        <div className="mt-16 pt-8 border-t border-neutral-200">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-6">
            Trusted by 5,000+ Fast-Growing Brands & Enterprise Leaders
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {FEATURED_BRANDS.map((brand) => (
              <div 
                key={brand.name}
                className="p-3 text-center rounded-lg border border-neutral-200/80 bg-white shadow-xs hover:border-emerald-300 transition-colors"
              >
                <div className="text-sm font-bold text-neutral-800 tracking-tight">{brand.name}</div>
                <div className="text-[10px] text-neutral-400">{brand.category}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
