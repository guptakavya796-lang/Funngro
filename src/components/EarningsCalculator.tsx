import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, TrendingUp, Laptop, Award, ArrowRight } from 'lucide-react';

interface EarningsCalculatorProps {
  onOpenTeenSignup: () => void;
}

const SKILL_RATES: Record<string, { beginnerRate: number; proRate: number; avgGigHours: number; sampleTitle: string }> = {
  'Video Editing': {
    beginnerRate: 400, // per hour equivalent
    proRate: 750,
    avgGigHours: 6,
    sampleTitle: 'Short-form Reels, YouTube Cutdowns & Subtitles'
  },
  'Social Media & Memes': {
    beginnerRate: 300,
    proRate: 550,
    avgGigHours: 4,
    sampleTitle: 'Trend Research, Meme Marketing & Page Management'
  },
  'App & Web QA Testing': {
    beginnerRate: 350,
    proRate: 600,
    avgGigHours: 4,
    sampleTitle: 'Beta Testing, Bug Sheets & UX Feedback'
  },
  'Graphic Design': {
    beginnerRate: 350,
    proRate: 650,
    avgGigHours: 5,
    sampleTitle: 'YouTube Thumbnails, Canva Assets & Social Posters'
  },
  'Content & Writing': {
    beginnerRate: 300,
    proRate: 500,
    avgGigHours: 4,
    sampleTitle: 'SEO Articles, Script Writing & Microcopy'
  },
  'Market Research': {
    beginnerRate: 250,
    proRate: 450,
    avgGigHours: 5,
    sampleTitle: 'Campus Surveys, Competitive Mapping & Trend Audits'
  }
};

export const EarningsCalculator: React.FC<EarningsCalculatorProps> = ({ onOpenTeenSignup }) => {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(6);
  const [selectedSkill, setSelectedSkill] = useState<string>('Video Editing');
  const [tier, setTier] = useState<'beginner' | 'pro'>('beginner');

  const { monthlyEarnings, yearlyEarnings, completedGigsMonth, purchaseGoal } = useMemo(() => {
    const skillData = SKILL_RATES[selectedSkill] || SKILL_RATES['Video Editing'];
    const hourlyRate = tier === 'beginner' ? skillData.beginnerRate : skillData.proRate;
    const weeklyEarnings = hoursPerWeek * hourlyRate;
    const monthly = Math.round(weeklyEarnings * 4.2);
    const yearly = monthly * 12;
    const gigsMonth = Math.max(1, Math.round((hoursPerWeek * 4.2) / skillData.avgGigHours));

    let goal = 'Your own tech gadgets and daily pocket freedom';
    if (monthly >= 12000) {
      goal = 'Self-fund your high-end gaming/editing laptop or college tuition savings';
    } else if (monthly >= 7000) {
      goal = 'Buy an iPad, premium software subscriptions, and your own smartphone';
    } else if (monthly >= 3500) {
      goal = 'Finance your own coding certifications, books, and weekend outings';
    }

    return {
      monthlyEarnings: monthly,
      yearlyEarnings: yearly,
      completedGigsMonth: gigsMonth,
      purchaseGoal: goal
    };
  }, [hoursPerWeek, selectedSkill, tier]);

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Interactive Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            Estimate Your Monthly Teen Freelance Earnings
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            See how spending just a few hours on weekends can generate real financial independence and verified credentials.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-sm max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Inputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Skill Selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Select Your Skill Field:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {Object.keys(SKILL_RATES).map((skill) => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => setSelectedSkill(skill)}
                      className={`p-2.5 text-xs font-semibold rounded-xl text-left border transition-all ${
                        selectedSkill === skill
                          ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Tier Selector */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                  Your Current Experience Level:
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setTier('beginner')}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                      tier === 'beginner'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    🌱 Beginner (Starting First Gigs)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTier('pro')}
                    className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg border transition-all ${
                      tier === 'pro'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                    }`}
                  >
                    ⚡ Skilled / Pro (Have Portfolio)
                  </button>
                </div>
              </div>

              {/* Hours Slider */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="font-bold text-neutral-800">Time commitment:</span>
                  <span className="font-extrabold text-emerald-700 text-base tabular-nums">
                    {hoursPerWeek} Hours / Week
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-neutral-400 font-medium">
                  <span>2 hrs (Light weekend)</span>
                  <span>8 hrs (Moderate)</span>
                  <span>16 hrs (Vacation mode)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Earnings Projection Output */}
            <div className="lg:col-span-5 bg-white rounded-xl border border-neutral-200 p-6 shadow-sm space-y-6">
              
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Estimated Monthly Payout
                </div>
                <div className="mt-1 text-4xl sm:text-5xl font-extrabold text-emerald-600 tracking-tight tabular-nums">
                  ₹{monthlyEarnings.toLocaleString('en-IN')}
                  <span className="text-sm font-semibold text-neutral-500"> /mo</span>
                </div>
                <div className="text-xs text-neutral-500 mt-1 tabular-nums">
                  Projected Annual Earning: ~₹{yearlyEarnings.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Milestones and Outcomes */}
              <div className="space-y-3 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Monthly Completed Projects:</span>
                  <span className="font-bold text-neutral-900 tabular-nums">{completedGigsMonth} Projects</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-500">Official Certificates Gained:</span>
                  <span className="font-bold text-emerald-700 tabular-nums">{completedGigsMonth} Co-Branded Certificates</span>
                </div>
                <div className="flex items-start gap-2 pt-2 text-neutral-700 bg-emerald-50/70 p-3 rounded-lg border border-emerald-100/80">
                  <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs">
                    <strong className="text-emerald-900">Milestone Potential:</strong> {purchaseGoal}.
                  </span>
                </div>
              </div>

              {/* Start Earning CTA */}
              <button
                onClick={onOpenTeenSignup}
                className="w-full py-3 px-4 text-sm font-bold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <span>Unlock These Earnings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
