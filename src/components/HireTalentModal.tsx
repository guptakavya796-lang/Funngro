import React, { useState } from 'react';
import { X, CheckCircle, Building2, Send, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

interface HireTalentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (companyName: string) => void;
}

export const HireTalentModal: React.FC<HireTalentModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [companyName, setCompanyName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Short-Form Video / Reels');
  const [numTeens, setNumTeens] = useState('3');
  const [budgetRange, setBudgetRange] = useState('₹10,000 – ₹25,000');
  const [brief, setBrief] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim() || !workEmail.trim() || !phone.trim()) {
      setError('Please provide company name, work email, and phone number.');
      return;
    }

    setError('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onSuccess(companyName);
        onClose();
      }, 1800);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-neutral-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-emerald-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                For Brands & Startups
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Hire Teenlancers on Demand
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-neutral-900">Brief Received!</h4>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              A Funngro Talent Partner will connect with <span className="font-semibold text-neutral-900">{companyName}</span> at <span className="font-semibold">{workEmail}</span> within 4 hours to confirm candidates.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
            
            {/* Banner */}
            <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs text-emerald-800">
              <span className="flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                First 3 candidate shortlists provided within 24 hours
              </span>
              <span className="font-bold">Zero Advance Fee</span>
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Company / Brand Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Health or Zepto Store"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="founder@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Contact Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Primary Skill Needed
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="Short-Form Video / Reels">Short-Form Video / Reels</option>
                  <option value="App & Website QA Testing">App & Website QA Testing</option>
                  <option value="Graphic Design & Creatives">Graphic Design & Creatives</option>
                  <option value="Social Media & Meme Strategy">Social Media & Meme Strategy</option>
                  <option value="Campus Ambassador & Surveys">Campus Ambassador & Surveys</option>
                  <option value="Content Writing & Blogs">Content Writing & Blogs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Number of Teens Required
                </label>
                <select
                  value={numTeens}
                  onChange={(e) => setNumTeens(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="1">1 Teenlancer (Pilot)</option>
                  <option value="3">2–5 Teenlancers (Recommended)</option>
                  <option value="10">6–15 Teenlancers (Campaign)</option>
                  <option value="20">20+ Campus Team</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Approximate Budget
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                >
                  <option value="₹3,000 – ₹10,000">₹3,000 – ₹10,000 (Micro Task)</option>
                  <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000 (Sprint)</option>
                  <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000 (Monthly Retainer)</option>
                  <option value="₹50,000+">₹50,000+ (Custom Enterprise)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Project Deliverables & Goals
              </label>
              <textarea
                rows={3}
                placeholder="Describe what you want delivered (e.g. 10 viral reels showcasing app onboarding, or testing our checkout flow across 20 devices)..."
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Payments held in escrow and released strictly after milestone sign-off.</span>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-neutral-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-neutral-950 hover:bg-neutral-800 rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {submitting ? (
                  <span>Submitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
