import React, { useState } from 'react';
import { APPROACH_JOURNEY } from '../data/agencyData';
import { ArrowDown, Compass, CheckCircle2, ChevronRight } from 'lucide-react';

export const ApproachPipeline: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  return (
    <section id="approach" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Strategic Trajectory</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            THE MARKFLURA APPROACH
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90 mb-4">
            Influence Is a Journey.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Real market equity cannot be forced overnight. We guide clients through a deliberate, compounding 6-stage transformation.
          </p>
        </div>

        {/* Pipeline Layout (Desktop Horizontal Progression & Mobile Vertical Flow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {APPROACH_JOURNEY.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={item.stage}
                onClick={() => setSelectedIdx(idx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group relative ${
                  isSelected
                    ? 'bg-zinc-900 border-amber-500/60 shadow-xl shadow-amber-950/30 ring-1 ring-amber-500/20'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-amber-400' : 'text-zinc-400'}`}>
                      0{idx + 1}
                    </span>
                    {idx < APPROACH_JOURNEY.length - 1 && (
                      <span className="text-zinc-400 group-hover:text-amber-400 text-xs hidden lg:inline">
                        →
                      </span>
                    )}
                  </div>

                  <h3 className="font-display font-black text-lg text-white mb-2 tracking-wider group-hover:text-amber-300 transition-colors">
                    {item.stage}
                  </h3>

                  <p className="font-editorial italic text-xs text-amber-200/80 mb-3">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mt-2 pt-3 border-t border-zinc-800/60">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Insight Bar */}
        <div className="mt-8 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs sm:text-sm text-zinc-300">
              <strong className="text-white font-bold">{APPROACH_JOURNEY[selectedIdx].stage}:</strong> {APPROACH_JOURNEY[selectedIdx].subtitle} — {APPROACH_JOURNEY[selectedIdx].description}
            </span>
          </div>
          <div className="text-xs text-amber-400 font-mono shrink-0">
            Stage {selectedIdx + 1} of 6
          </div>
        </div>
      </div>
    </section>
  );
};
