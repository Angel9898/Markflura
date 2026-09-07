import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, TrendingUp, Calendar, User, ArrowRight } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInquire: (serviceName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInquire
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-[#0e0e12] border border-zinc-800 shadow-2xl p-6 sm:p-10 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Case Study"
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            {caseStudy.domain}
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" />
            <span>{caseStudy.clientType}</span>
          </span>
          <span className="text-xs text-zinc-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{caseStudy.timeline}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display font-black text-2xl sm:text-4xl text-white mb-6">
          {caseStudy.title}
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
          {caseStudy.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <span className="text-[11px] uppercase font-bold text-zinc-400 tracking-wider block mb-1">
                {m.label}
              </span>
              <span className="font-display font-extrabold text-lg sm:text-2xl text-amber-300">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Challenge & Strategic Approach */}
        <div className="space-y-6 mb-8 text-sm">
          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              The Strategic Challenge
            </h3>
            <p className="text-zinc-200 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/60 border border-amber-500/30">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
              The Markflura Playbook & Execution
            </h3>
            <p className="text-zinc-200 leading-relaxed mb-4">
              {caseStudy.approach}
            </p>
            <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-800">
              {caseStudy.services.map((s, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Checklist */}
        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
            Long-Term Commercial Impact
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {caseStudy.impact.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 flex items-center gap-3 text-xs sm:text-sm text-zinc-200"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action CTA */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-zinc-400 text-center sm:text-left">
            Ready to implement a similar growth strategy for your brand?
          </span>
          <button
            onClick={() => {
              onClose();
              onInquire(caseStudy.domain);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#d4af37] to-[#eab308] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:from-[#eab308] hover:to-[#facc15] transition-colors"
          >
            <span>Inquire for {caseStudy.domain}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </div>
  );
};
