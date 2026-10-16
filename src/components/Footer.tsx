import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenTeenSignup: () => void;
  onOpenCompanyHire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTeenSignup, onOpenCompanyHire }) => {
  return (
    <footer className="bg-neutral-950 text-white pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-1.5 text-2xl font-black tracking-tight text-white">
              <span>funngro</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              India's premier smart earning and freelance platform for teenagers and young adults. Enabling real income, verified skills, and career clarity before college.
            </p>

            <div className="text-xs text-neutral-500 space-y-1">
              <div>Featured on <strong className="text-neutral-300">Shark Tank India Season 2</strong></div>
              <div>Funded by Namita Thapar (Emcure) & Amit Jain (CarDekho)</div>
            </div>
          </div>

          {/* Teenlancers Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              For Teenlancers
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <a href="#explore" className="hover:text-white transition-colors">Live Gigs & Micro-Internships</a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">Earnings Simulator</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">4-Step Earning Process</a>
              </li>
              <li>
                <button onClick={onOpenTeenSignup} className="hover:text-white transition-colors text-left">
                  Create Teen Account
                </button>
              </li>
            </ul>
          </div>

          {/* Companies Navigation */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              For Companies
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button onClick={onOpenCompanyHire} className="hover:text-white transition-colors text-left">
                  Hire Gen-Z Creators
                </button>
              </li>
              <li>
                <button onClick={onOpenCompanyHire} className="hover:text-white transition-colors text-left">
                  Post a Project Brief
                </button>
              </li>
              <li>
                <a href="#shark-tank" className="hover:text-white transition-colors">Quality & Mentorship Model</a>
              </li>
              <li>
                <a href="#explore" className="hover:text-white transition-colors">Brand Case Studies</a>
              </li>
            </ul>
          </div>

          {/* Safety & Compliance */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
              Trust & Safety
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>100% Escrow Milestone Payout</li>
              <li>Parental Consent for Minors</li>
              <li>KYC Verified Client Companies</li>
              <li>Co-Branded Certificates</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Funngro (YouthConnect Technologies Pvt. Ltd.). All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Service</span>
            <span aria-hidden="true">·</span>
            <span>Safety Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
