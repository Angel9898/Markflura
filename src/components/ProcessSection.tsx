import React, { useState } from 'react';
import { PROCESS_DATA } from '../data/agencyData';
import { ProcessStep } from '../types';
import { GitCommit, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <GitCommit className="w-3.5 h-3.5 text-amber-400" />
            <span>Execution Methodology</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            OUR PROCESS
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90">
            From Identity to Influence.
          </p>
        </div>

        {/* Desktop/Tablet Horizontal Interactive Progress Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10">
          {PROCESS_DATA.map((step: ProcessStep, idx: number) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 rounded-2xl border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-zinc-900 border-amber-500/50 shadow-lg shadow-amber-950/20'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 opacity-70 hover:opacity-100'
                }`}
              >
                <span className={`text-xs font-mono font-bold block mb-1 ${isActive ? 'text-amber-400' : 'text-zinc-400'}`}>
                  PHASE {step.step}
                </span>
                <span className="font-display font-bold text-sm text-white block">
                  {step.title}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Spotlight View */}
        <div className="hidden lg:block mb-16">
          {(() => {
            const current = PROCESS_DATA[activeStep];
            return (
              <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md relative overflow-hidden">
                <div className="flex items-start justify-between gap-8 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs font-bold">
                        Phase {current.step} of 06
                      </span>
                      <h3 className="font-display font-black text-3xl text-white">
                        {current.title}
                      </h3>
                    </div>
                    <h4 className="font-editorial italic text-xl text-amber-200/90 mb-4">
                      {current.tagline}
                    </h4>
                    <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
                      {current.description}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_DATA.length - 1))}
                      aria-label="Previous step"
                      className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 text-xs font-semibold"
                    >
                      Prev
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < PROCESS_DATA.length - 1 ? prev + 1 : 0))}
                      aria-label="Next step"
                      className="px-4 py-2 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/30 text-xs font-semibold"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-800/80">
                  <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-3">
                    Deliverables & Focus Pillars:
                  </span>
                  <div className="flex flex-wrap gap-3">
                    {current.deliverables.map((item, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-200 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Mobile / Responsive 6-Step Vertical Timeline */}
        <div className="lg:hidden space-y-4">
          {PROCESS_DATA.map((step: ProcessStep) => (
            <div
              key={step.step}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {step.title}
                </h3>
              </div>
              <h4 className="font-editorial italic text-base text-amber-200/90 mb-3">
                {step.tagline}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800">
                {step.deliverables.map((deliv, dIdx) => (
                  <span
                    key={dIdx}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800/80 text-zinc-300"
                  >
                    {deliv}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
