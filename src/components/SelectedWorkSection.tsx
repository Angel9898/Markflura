import React from 'react';
import { CASE_STUDIES_DATA } from '../data/agencyData';
import { CaseStudy } from '../types';
import { Briefcase, ArrowUpRight, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

interface SelectedWorkSectionProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
}

export const SelectedWorkSection: React.FC<SelectedWorkSectionProps> = ({ onOpenCaseStudy }) => {
  const auditQuestions = [
    'Did they engage?',
    'Did they remember?',
    'Did they follow?',
    'Did they enquire?',
    'Did they start a conversation?',
    'Did they become a customer?'
  ];

  return (
    <section id="work" className="py-24 bg-[#0d0d11] border-y border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Track Record & Case Studies</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            SELECTED WORK
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90 mb-6">
            Influence That Creates Impact.
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
            We don&apos;t measure success only by how many people saw a campaign. We look at what happened <strong className="text-white font-semibold underline decoration-[#d4af37] underline-offset-4">after</strong> they saw it.
          </p>
        </div>

        {/* The Diagnostic Comparison Bar: Visibility vs Influence */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-zinc-900/90 border border-zinc-800">
          <div className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-4 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>The Post-Impression Inquiry</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            {auditQuestions.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-center"
              >
                <span className="text-xs font-semibold text-zinc-300 block">
                  {q}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center sm:text-left text-sm text-zinc-300 border-t border-zinc-800/80 pt-4 font-medium flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span>That&apos;s the difference between <strong className="text-zinc-400">visibility</strong> and <strong className="text-amber-300">influence</strong>.</span>
            <span className="text-xs text-zinc-400">Real outcomes · Verifiable impact</span>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES_DATA.map((study: CaseStudy) => (
            <div
              key={study.id}
              id={`case-study-card-${study.id}`}
              className="p-8 sm:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Domain & Client Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                    {study.domain}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium">
                    {study.clientType}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6 group-hover:text-amber-200 transition-colors">
                  {study.title}
                </h3>

                {/* Challenge & Approach */}
                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider block mb-1 text-[11px]">
                      Challenge:
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                    <span className="text-amber-400 font-bold uppercase tracking-wider block mb-1 text-[11px]">
                      Our Approach:
                    </span>
                    <p className="text-zinc-300 leading-relaxed">
                      {study.approach}
                    </p>
                  </div>
                </div>

                {/* Services Deployed */}
                <div className="mb-6">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block mb-2">
                    Services Deployed:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact Checklist */}
                <div className="mb-8">
                  <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block mb-2.5">
                    Impact Generated:
                  </span>
                  <ul className="space-y-2">
                    {study.impact.map((imp, impIdx) => (
                      <li key={impIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-200">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Action Trigger */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {study.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx} className="text-left">
                      <span className="text-xs text-zinc-400 block">{m.label}</span>
                      <span className="font-mono font-bold text-sm text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  id={`view-case-study-btn-${study.id}`}
                  onClick={() => onOpenCaseStudy(study)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200 group-hover:translate-x-1 transition-all"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
