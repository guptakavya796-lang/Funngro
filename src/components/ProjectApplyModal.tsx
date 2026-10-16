import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Clock, Award, Send, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectApplyModalProps {
  project: Project | null;
  onClose: () => void;
  onSuccess: (projectTitle: string) => void;
}

export const ProjectApplyModal: React.FC<ProjectApplyModalProps> = ({ project, onClose, onSuccess }) => {
  const [teenName, setTeenName] = useState('');
  const [age, setAge] = useState('16');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [pitch, setPitch] = useState('');
  const [hasParentalConsent, setHasParentalConsent] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teenName.trim() || !email.trim() || !whatsapp.trim()) {
      setError('Please provide your name, email, and WhatsApp number.');
      return;
    }
    if (parseInt(age, 10) < 14 || parseInt(age, 10) > 25) {
      setError('Funngro is open to candidates aged 14 to 25.');
      return;
    }

    setError('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onSuccess(project.title);
        onClose();
      }, 1800);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-neutral-50/80">
          <div>
            <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              {project.company} · {project.category}
            </div>
            <h3 className="text-xl font-bold text-neutral-950 mt-1">
              Apply for Project
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors"
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
            <h4 className="text-2xl font-bold text-neutral-900">Application Submitted!</h4>
            <p className="text-sm text-neutral-600 max-w-md mx-auto">
              Your application for <span className="font-semibold text-neutral-900">"{project.title}"</span> has been dispatched to the {project.company} mentor team. You will receive an SMS and WhatsApp update within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            
            {/* Project Summary Box */}
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div>
                <span className="text-neutral-500">Stipend:</span>{' '}
                <span className="font-bold text-neutral-900 text-sm tabular-nums">₹{project.stipend.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-neutral-500">Commitment:</span>{' '}
                <span className="font-semibold text-neutral-800">{project.duration}</span>
              </div>
              <div>
                <span className="text-neutral-500">Deadline:</span>{' '}
                <span className="font-semibold text-neutral-800">{project.deadline}</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-xs text-red-700">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Teen Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={teenName}
                  onChange={(e) => setTeenName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Your Age (14–25) *
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white"
                >
                  {Array.from({ length: 12 }, (_, i) => i + 14).map((a) => (
                    <option key={a} value={a}>
                      {a} years old
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  WhatsApp Number (for gig alerts) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Portfolio Link / Work Sample */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Portfolio, Instagram Handle, or Google Drive Sample (Optional)
              </label>
              <input
                type="text"
                placeholder="https://drive.google.com/... or @yourhandle"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <span className="text-[11px] text-neutral-500 mt-1 block">
                Beginners without links can still apply! Mentors provide test tasks.
              </span>
            </div>

            {/* Short Pitch */}
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Why are you excited for this project?
              </label>
              <textarea
                rows={3}
                placeholder="Share your interest, any tools you know (Canva, CapCut, Premiere, etc.), and how soon you can begin..."
                value={pitch}
                onChange={(e) => setPitch(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Consent checkbox for minors */}
            {parseInt(age, 10) < 18 && (
              <label className="flex items-start gap-2.5 p-3 rounded-lg bg-neutral-50 border border-neutral-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasParentalConsent}
                  onChange={(e) => setHasParentalConsent(e.target.checked)}
                  className="w-4 h-4 text-emerald-600 rounded border-neutral-300 focus:ring-emerald-500 mt-0.5"
                />
                <span className="text-xs text-neutral-600">
                  <strong className="text-neutral-900 font-medium">Parental Awareness:</strong> My parents are aware of my application and support my participation in supervised micro-tasks.
                </span>
              </label>
            )}

            {/* Submit Action */}
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
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {submitting ? (
                  <span>Submitting Application...</span>
                ) : (
                  <>
                    <span>Submit Free Application</span>
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
