import React, { useState } from 'react';
import { FAQS_DATA } from '../data/agencyData';
import { FaqItem } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-7', 'faq-9']);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categories = ['All', 'General', 'Services', 'LinkedIn', 'Influencer Marketing', 'Lead Generation', 'Operations'];

  const filteredFaqs = FAQS_DATA.filter((faq: FaqItem) => {
    const matchesCategory =
      selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faqs" className="py-24 bg-[#09090b] relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Transparency & Answers</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Clear clarity on how we work, how we evaluate creators, how we drive leads, and what to expect from an engagement.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g., LinkedIn, lead guarantees, influencer selection)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-xl border transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-semibold'
                    : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-zinc-900/40 border border-zinc-800 text-zinc-400 text-sm">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or reset category.
            </div>
          ) : (
            filteredFaqs.map((faq: FaqItem) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  id={`faq-item-${faq.id}`}
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'bg-zinc-900/90 border-amber-500/30'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-amber-500/20 text-amber-300 rotate-180'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
