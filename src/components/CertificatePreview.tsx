import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2, QrCode, ExternalLink } from 'lucide-react';

interface CertificateSample {
  studentName: string;
  role: string;
  company: string;
  category: string;
  certId: string;
  date: string;
  skills: string[];
}

const SAMPLE_CERTS: CertificateSample[] = [
  {
    studentName: 'Aarav Sharma',
    role: 'Gen-Z Reel & Content Creator',
    company: 'CarDekho',
    category: 'Social Media Marketing',
    certId: 'FNG-2026-CD-8841',
    date: 'March 14, 2026',
    skills: ['Short-form Video', 'Viral Storyboarding', 'Audience Hook Design', 'CapCut']
  },
  {
    studentName: 'Ananya Reddy',
    role: 'Beta Usability & Bug Auditor',
    company: 'Tata 1mg',
    category: 'Software Quality Assurance',
    certId: 'FNG-2026-1MG-3392',
    date: 'February 28, 2026',
    skills: ['Mobile App QA', 'Issue Replication', 'UX Journey Mapping', 'Bug Reporting']
  },
  {
    studentName: 'Devansh Kulkarni',
    role: 'Creative Visual Designer',
    company: 'Boat Lifestyle',
    category: 'Graphic Design & Branding',
    certId: 'FNG-2026-BT-7715',
    date: 'January 19, 2026',
    skills: ['YouTube Thumbnails', 'Figma Prototyping', 'Color Grading', 'Typography']
  }
];

export const CertificatePreview: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const currentCert = SAMPLE_CERTS[selectedIndex];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>Verifiable Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            Build a Verified Corporate Portfolio Before College
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Every completed gig awards an official co-branded Experience Certificate with digital verification. Power up your resume, LinkedIn, and study abroad applications.
          </p>

          {/* Student Selector Tabs */}
          <div className="mt-6 inline-flex p-1 bg-neutral-100 rounded-xl border border-neutral-200">
            {SAMPLE_CERTS.map((cert, idx) => (
              <button
                key={cert.studentName}
                onClick={() => setSelectedIndex(idx)}
                className={`px-3 sm:px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedIndex === idx
                    ? 'bg-white text-emerald-700 shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cert.studentName} ({cert.company})
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Display Frame */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-950 p-3 sm:p-5 rounded-3xl shadow-xl border border-neutral-800">
          <div className="bg-white rounded-2xl p-6 sm:p-12 border-4 border-double border-neutral-200 text-neutral-900 relative overflow-hidden">
            
            {/* Watermark Crest */}
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
              <Award className="w-64 h-64 text-neutral-900" />
            </div>

            {/* Certificate Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-neutral-200 pb-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-neutral-950">funngro</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold text-neutral-400 pl-2 border-l border-neutral-200">
                  Verified Skill Credential
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-md">
                <span>ID: {currentCert.certId}</span>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="text-center space-y-4 my-8">
              <div className="text-xs uppercase tracking-widest font-bold text-emerald-700">
                Certificate of Experience & Execution
              </div>

              <div className="text-xs text-neutral-500 font-medium">
                This is officially presented to acknowledge that
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight font-serif italic">
                {currentCert.studentName}
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 max-w-xl mx-auto leading-relaxed">
                has successfully accomplished all designated project deliverables as <strong className="text-neutral-900">{currentCert.role}</strong> on behalf of <strong className="text-neutral-900">{currentCert.company}</strong> in compliance with Funngro corporate standards.
              </p>

              {/* Verified Skills Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
                {currentCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-neutral-700 bg-neutral-100 px-3 py-1 rounded-md"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Signatures & QR */}
            <div className="pt-8 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
              <div>
                <div className="font-serif italic text-lg text-neutral-800">Payal Jain</div>
                <div className="text-[11px] font-bold text-neutral-700 mt-1">Founder & CEO, Funngro</div>
                <div className="text-[10px] text-neutral-400">Shark Tank India Season 2</div>
              </div>

              <div className="text-center">
                <div className="inline-flex flex-col items-center p-2 rounded-lg bg-neutral-50 border border-neutral-200">
                  <QrCode className="w-10 h-10 text-neutral-800" />
                  <span className="text-[9px] font-mono text-neutral-500 mt-1">Scan to Verify</span>
                </div>
              </div>

              <div className="sm:text-right">
                <div className="font-serif italic text-lg text-neutral-800">{currentCert.company} Talent Lead</div>
                <div className="text-[11px] font-bold text-neutral-700 mt-1">Corporate Project Sponsor</div>
                <div className="text-[10px] text-neutral-400">Issued: {currentCert.date}</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
