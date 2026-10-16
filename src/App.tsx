import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SharkTankSection } from './components/SharkTankSection';
import { AudienceTabs } from './components/AudienceTabs';
import { ProjectMarketplace } from './components/ProjectMarketplace';
import { EarningsCalculator } from './components/EarningsCalculator';
import { HowItWorks } from './components/HowItWorks';
import { CertificatePreview } from './components/CertificatePreview';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { TeenSignupModal } from './components/TeenSignupModal';
import { HireTalentModal } from './components/HireTalentModal';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isTeenModalOpen, setIsTeenModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [appAlert, setAppAlert] = useState<string | null>(null);

  const showAlert = (message: string) => {
    setAppAlert(message);
    setTimeout(() => {
      setAppAlert(null);
    }, 4500);
  };

  const handleTeenSignupComplete = (name: string) => {
    showAlert(`Welcome to Funngro, ${name}! Your Teenlancer profile is ready.`);
  };

  const handleCompanyHireComplete = (companyName: string) => {
    showAlert(`Thank you! The project brief for ${companyName} has been received.`);
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenTeenSignup={() => setIsTeenModalOpen(true)}
        onOpenCompanyHire={() => setIsCompanyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenTeenSignup={() => setIsTeenModalOpen(true)}
          onOpenCompanyHire={() => setIsCompanyModalOpen(true)}
        />

        {/* 2. Interactive Role Personas (Teens, Companies, Parents) */}
        <AudienceTabs
          onOpenTeenSignup={() => setIsTeenModalOpen(true)}
          onOpenCompanyHire={() => setIsCompanyModalOpen(true)}
        />

        {/* 3. Live Project Marketplace & Micro-Internships */}
        <ProjectMarketplace />

        {/* 4. Shark Tank India Season 2 Feature Showcase */}
        <SharkTankSection />

        {/* 5. Interactive Earning Simulator */}
        <EarningsCalculator
          onOpenTeenSignup={() => setIsTeenModalOpen(true)}
        />

        {/* 6. Four-Step Earning Mechanism */}
        <HowItWorks
          onOpenTeenSignup={() => setIsTeenModalOpen(true)}
        />

        {/* 7. Official Verifiable Certificate Showcase */}
        <CertificatePreview />

        {/* 8. Real Teenlancer & Parent Testimonials */}
        <Testimonials />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTeenSignup={() => setIsTeenModalOpen(true)}
        onOpenCompanyHire={() => setIsCompanyModalOpen(true)}
      />

      {/* Modals */}
      <TeenSignupModal
        isOpen={isTeenModalOpen}
        onClose={() => setIsTeenModalOpen(false)}
        onComplete={handleTeenSignupComplete}
      />

      <HireTalentModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
        onSuccess={handleCompanyHireComplete}
      />

      {/* Global Toast Alert */}
      {appAlert && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-neutral-800 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{appAlert}</span>
        </div>
      )}
    </div>
  );
}
