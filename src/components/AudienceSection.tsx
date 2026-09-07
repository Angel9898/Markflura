import React, { useState } from 'react';
import { CLIENT_CATEGORIES } from '../data/agencyData';
import { ClientCategory } from '../types';
import { Users2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AudienceSectionProps {
  onSelectCategory: (title: string) => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onSelectCategory }) => {
  const [selectedId, setSelectedId] = useState<string>('founders');

  const selectedItem = CLIENT_CATEGORIES.find((c) => c.id === selectedId) || CLIENT_CATEGORIES[0];

  return (
    <section id="audience" className="py-24 bg-[#0d0d11] border-y border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Users2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Target Profiles</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            WHO WE WORK WITH
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90 mb-4">
            People With Something Worth Saying.
          </p>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
            Whether you are piloting a venture-backed tech company, commanding an enterprise advisory practice, or directing a consumer brand, we craft the influence engine suited to your goals.
          </p>
        </div>

        {/* 6 Category Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {CLIENT_CATEGORIES.map((cat: ClientCategory) => {
            const isSelected = selectedId === cat.id;
            return (
              <div
                key={cat.id}
                id={`audience-card-${cat.id}`}
                onClick={() => setSelectedId(cat.id)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-900 border-amber-500/50 shadow-xl shadow-amber-950/20 ring-1 ring-amber-500/20'
                    : 'bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-black text-xl text-white tracking-wider">
                      {cat.title}
                    </h3>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                    )}
                  </div>
                  <h4 className="font-editorial italic text-base text-amber-200/90 mb-4">
                    {cat.subtitle}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-zinc-400">
                    {isSelected ? 'Currently Viewing' : 'Click to Inspect'}
                  </span>
                  <span className="text-xs text-amber-400 font-bold">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive Action Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase text-amber-400 mb-2 block">
              Dedicated Playbook for {selectedItem.title}
            </span>
            <h4 className="font-display font-bold text-2xl text-white mb-3">
              {selectedItem.subtitle}
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-zinc-300">
              <div className="flex items-start gap-2">
                <span className="text-zinc-400 font-semibold shrink-0">Primary Hurdle:</span>
                <span className="text-zinc-300">{selectedItem.keyChallenge}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-amber-400 font-semibold shrink-0">Markflura System:</span>
                <span className="text-zinc-200">{selectedItem.markfluraSolution}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectCategory(selectedItem.title)}
            className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#eab308] hover:from-[#eab308] hover:to-[#facc15] text-zinc-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 transition-all shadow-lg shadow-amber-500/10"
          >
            <span>Consult for {selectedItem.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
