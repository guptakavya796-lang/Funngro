import React from 'react';
import { UserPlus, Briefcase, FileCheck, Banknote, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onOpenTeenSignup: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Download & Build Profile',
    icon: UserPlus,
    description: 'Sign up for free in 2 minutes. Pick your top interests (content, testing, design, research) and get quick parental confirmation if under 18.'
  },
  {
    step: '02',
    title: 'Pick Gigs & Take Sample Test',
    icon: Briefcase,
    description: 'Explore live assignments from top companies. Complete a 10-minute micro-brief or submit past samples to show your creative spark.'
  },
  {
    step: '03',
    title: 'Work With Mentor Support',
    icon: FileCheck,
    description: 'Get clear guidelines and milestone checkpoints. Funngro project mentors ensure quality control so companies love your output.'
  },
  {
    step: '04',
    title: 'Get Paid & Verified Certificate',
    icon: Banknote,
    description: 'Once approved, your stipend is deposited directly via UPI or Bank Transfer. Receive a co-signed Experience Certificate for your resume.'
  }
];

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTeenSignup }) => {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            The Safe Earning Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            From Zero Experience to Paid Projects in 4 Steps
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Funngro's structured milestone model guarantees safety for teenagers and high-caliber delivery for companies.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-neutral-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-emerald-300 transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-neutral-300 tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center text-[11px] font-semibold text-emerald-700">
                  <span>Guaranteed Escrow Safety</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-neutral-950">Ready to start your first freelance assignment?</h4>
            <p className="text-xs sm:text-sm text-neutral-600">Join over 1,000,000 teens turning hobbies into real income.</p>
          </div>
          <button
            onClick={onOpenTeenSignup}
            className="px-6 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-xs whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            <span>Register for Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
