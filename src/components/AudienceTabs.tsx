import React, { useState } from 'react';
import { UserCheck, Building2, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';

interface AudienceTabsProps {
  onOpenTeenSignup: () => void;
  onOpenCompanyHire: () => void;
}

export const AudienceTabs: React.FC<AudienceTabsProps> = ({ onOpenTeenSignup, onOpenCompanyHire }) => {
  const [activeTab, setActiveTab] = useState<'teens' | 'companies' | 'parents'>('teens');

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            Empowering the Entire Youth Ecosystem
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Funngro aligns teen aspirations, corporate hiring needs, and parental peace of mind in one secure platform.
          </p>

          {/* Segmented Filter Control */}
          <div className="mt-8 inline-flex p-1.5 bg-neutral-100 rounded-xl border border-neutral-200">
            <button
              onClick={() => setActiveTab('teens')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'teens'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              For Teenlancers
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'companies'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              For Companies
            </button>
            <button
              onClick={() => setActiveTab('parents')}
              className={`px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'parents'
                  ? 'bg-white text-emerald-700 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              For Parents
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-10">
          {activeTab === 'teens' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Teenlancers (Ages 14–25)
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Earn your first income while doing what you love
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Stop scrolling for free. Turn your social media savvy, creative design instincts, and tech skills into actual paid projects with India's most recognized brands.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Direct UPI or Bank transfer upon project approval</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Experience certificates co-signed by client brands</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Beginner-friendly micro-tasks with mentor guidance</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Work around your exams and homework schedules</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenTeenSignup}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm"
                  >
                    <span>Create Your Teen Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
                  <img
                    src="/src/assets/images/funngro_teen_creator_1792145456226.jpg"
                    alt="Teen freelancer editing multimedia content on laptop"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span>Average Payout / Gig: ₹1,500 – ₹5,000</span>
                    <span className="text-emerald-600 font-bold">100% Free for Teens</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'companies' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  For Startups, D2C & Enterprises
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Hire nimble, digitally native Gen-Z talent on demand
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Traditional agencies take weeks and charge hefty retainers. Funngro lets you tap into thousands of energetic teens for reel creation, app testing, social marketing, and field research with zero hiring friction.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Curated & vetted candidates within 24 hours</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Quality-checked submissions before you approve payout</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Cost-effective micro-budgets starting at ₹1,500</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Escrow model: Funds released only upon satisfaction</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenCompanyHire}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-sm"
                  >
                    <span>Post a Project Brief</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
                  <img
                    src="/src/assets/images/funngro_company_collaboration_1792145457184.jpg"
                    alt="Company marketing team collaborating on project outcomes"
                    referrerPolicy="no-referrer"
                    className="w-full h-64 sm:h-72 object-cover"
                  />
                  <div className="p-4 bg-white border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
                    <span>Turnaround Time: 3 to 7 Days</span>
                    <span className="text-neutral-900 font-bold">5,000+ Brands Served</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'parents' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-block text-xs font-bold text-emerald-700 uppercase tracking-wider">
                  Parental Peace of Mind
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950">
                  Real financial literacy & career readiness in a safe environment
                </h3>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  Funngro was built by parents who wanted their children to understand the value of honest earning, budgeting, and responsibility early in life without jeopardizing their schooling.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Mandatory parent consent and visibility for minors</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Only verified corporate tasks (no unsafe requests)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Time-capped at 3–5 hours per week (weekend friendly)</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-neutral-800">Earnings sent directly to teen minor savings account</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-4 text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-900">Protected by Funngro Safety Guidelines</span>
                  <span aria-hidden="true">·</span>
                  <span>100% Escrow Protection</span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-neutral-200 space-y-4">
                <div className="font-bold text-neutral-900 text-sm">Parent FAQ Quick-Guide:</div>
                <div className="space-y-3 text-xs text-neutral-600">
                  <div className="p-3 bg-neutral-50 rounded-lg">
                    <span className="font-bold text-neutral-900 block mb-1">Does this distract from school exams?</span>
                    No. Teens set their own project deadlines and can pause active applications during exam months with zero penalty.
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-lg">
                    <span className="font-bold text-neutral-900 block mb-1">Are client companies verified?</span>
                    Yes. Every organization undergoes strict GST/KYC corporate verification before any assignment is listed.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
