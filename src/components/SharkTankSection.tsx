import React from 'react';
import { Quote, Trophy, TrendingUp, CheckCircle } from 'lucide-react';

export const SharkTankSection: React.FC = () => {
  return (
    <section id="shark-tank" className="py-16 sm:py-24 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">
            The Shark Tank India Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
            Backed by India's Top Business Leaders on Shark Tank Season 2
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
            Founders Payal Jain and Anik Jain presented their mission on national television to bridge education and real-world income for 100M+ Indian teens, securing ₹50 Lakhs investment from Namita Thapar and Amit Jain.
          </p>
        </div>

        {/* 2-Column Pitch & Metrics Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Pitch Photography Card */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 relative">
            <img
              src="/src/assets/images/funngro_shark_tank_pitch_1792145456115.jpg"
              alt="Funngro founders presenting their youth earning app on Shark Tank India pitch stage"
              referrerPolicy="no-referrer"
              className="w-full h-72 sm:h-84 object-cover"
            />
            <div className="p-6 bg-gradient-to-t from-neutral-950 via-neutral-950/90 to-transparent">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
                <Trophy className="w-4 h-4" />
                <span>Season 2 Success Story</span>
              </div>
              <div className="text-xl font-bold text-white">Deal: ₹50 Lakhs for 4% Equity</div>
              <div className="text-xs text-neutral-400 mt-1">
                Investors: Namita Thapar (Executive Director, Emcure) & Amit Jain (CEO & Co-founder, CarDekho)
              </div>
            </div>
          </div>

          {/* Sharks Feedback & Post-Show Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Quote Cards */}
            <div className="space-y-4">
              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 relative">
                <Quote className="w-6 h-6 text-emerald-500/30 absolute top-4 right-4" />
                <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
                  "Teaching teens financial independence, practical execution, and responsibility early on is transformative for our country. Funngro is creating the future workforce of India."
                </p>
                <div className="mt-3 text-xs font-bold text-emerald-400">
                  — Namita Thapar, Shark & Executive Director, Emcure Pharmaceuticals
                </div>
              </div>

              <div className="p-5 rounded-xl border border-neutral-800 bg-neutral-950/60 relative">
                <Quote className="w-6 h-6 text-emerald-500/30 absolute top-4 right-4" />
                <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
                  "Companies desperately need authentic Gen-Z perspectives for marketing, user testing, and content. Funngro bridges this gap with structured mentor checks and safety."
                </p>
                <div className="mt-3 text-xs font-bold text-emerald-400">
                  — Amit Jain, Shark & CEO, CarDekho Group
                </div>
              </div>
            </div>

            {/* Post-Tank Scale Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">16X</div>
                <div className="text-xs text-neutral-400 font-medium mt-0.5">Revenue Growth Post-Tank</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">70X</div>
                <div className="text-xs text-neutral-400 font-medium mt-0.5">Daily Traffic Surge</div>
              </div>
              <div className="p-4 rounded-xl bg-neutral-800/40 border border-neutral-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tabular-nums">1.2M+</div>
                <div className="text-xs text-neutral-400 font-medium mt-0.5">Projects Delivered</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
