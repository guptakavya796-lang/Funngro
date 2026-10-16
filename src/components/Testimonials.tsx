import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
            Real Stories, Real Earnings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            Trusted by Over 1 Million Teenlancers and Parents
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Hear from Indian teens who bought their first devices, financed their own skills, and built real confidence before turning 18.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs relative"
            >
              <div>
                {/* Metric Kicker */}
                <div className="flex items-center justify-between text-xs text-neutral-500 mb-4 pb-3 border-b border-neutral-100">
                  <span className="font-bold text-emerald-700">{t.earnings}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.completedGigs} Projects Completed</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.city}</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Lockup */}
              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-neutral-950">{t.name}, {t.age}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
                <div className="text-xs font-semibold text-neutral-400">
                  {t.companyWorkedWith}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quantitative Proof Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-neutral-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">1.2M+</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Verified Teen Profiles</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">₹35,000+</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Highest Single-Month Payout</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">4.8 / 5.0</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">Play Store & App Store Rating</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-neutral-900 tabular-nums">98.4%</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">On-Time Escrow Payment Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};
