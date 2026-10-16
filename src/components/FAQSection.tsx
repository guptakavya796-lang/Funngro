import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Teens' | 'Parents' | 'Companies' | 'Payments'>('All');
  const [openId, setOpenId] = useState<string | null>('f-1');

  const filteredFaqs = FAQS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-emerald-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Everything you need to know about safety, payouts, parental consent, and corporate projects.
          </p>

          {/* Filter Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
            {(['All', 'Teens', 'Parents', 'Companies', 'Payments'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="rounded-xl border border-neutral-200 overflow-hidden bg-white transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-neutral-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
