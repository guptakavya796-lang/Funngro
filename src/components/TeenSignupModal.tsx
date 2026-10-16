import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Sparkles, Shield, User, Smartphone } from 'lucide-react';

interface TeenSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (name: string) => void;
}

export const TeenSignupModal: React.FC<TeenSignupModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('16');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Social Media', 'Video Editing']);
  const [submitting, setSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [teenlancerId, setTeenlancerId] = useState('');

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      const generatedId = `TL-${Math.floor(10000 + Math.random() * 90000)}`;
      setTeenlancerId(generatedId);
      setSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleFinish = () => {
    onComplete(name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200 bg-neutral-50">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              100% Free · Verified Gigs
            </div>
            <h3 className="text-xl font-extrabold text-neutral-950 mt-0.5">
              Create Your Teenlancer Profile
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

        {isSuccess ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <h4 className="text-2xl font-extrabold text-neutral-900">Welcome to Funngro, {name}!</h4>
              <p className="text-xs text-neutral-500">Your profile is verified and active.</p>
            </div>

            <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-200 text-left space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">Teenlancer Pass ID:</span>
                <span className="font-mono font-bold text-neutral-900">{teenlancerId}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">Starting Status:</span>
                <span className="font-bold text-emerald-700">Verified Newbie Tier</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-500">Payout Channel:</span>
                <span className="font-semibold text-neutral-800">Direct UPI / Minor Bank</span>
              </div>
            </div>

            <p className="text-xs text-neutral-600">
              We have unlocked 8 beginner-friendly assignments matching your interests. Start applying to build your first portfolio certificate!
            </p>

            <button
              onClick={handleFinish}
              className="w-full py-3 px-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
            >
              <span>Explore My Matching Gigs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Diya Patel"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Age (14–25) *
                </label>
                <select
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
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
                  Your City
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai, Delhi, Pune"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                WhatsApp Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-3.5 py-2 text-sm border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <span className="text-[11px] text-neutral-400 mt-1 block">
                Used strictly for company project notifications and payout alerts.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 mb-2">
                What tasks do you like doing most?
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[
                  'Social Media',
                  'Video Editing',
                  'App & Web Testing',
                  'Graphic Design',
                  'Content Writing',
                  'Market Research'
                ].map((interest) => {
                  const active = selectedInterests.includes(interest);
                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() => toggleInterest(interest)}
                      className={`p-2 rounded-lg border text-left transition-all ${
                        active
                          ? 'bg-emerald-50 text-emerald-800 border-emerald-300 font-semibold'
                          : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'
                      }`}
                    >
                      {active ? '✓ ' : '+ '} {interest}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-200 flex items-center justify-end gap-3">
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
                className="px-6 py-2.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all shadow-sm disabled:opacity-50"
              >
                {submitting ? 'Creating Profile...' : 'Complete Registration'}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
