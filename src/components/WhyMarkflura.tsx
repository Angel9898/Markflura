import React from 'react';
import { Target, Compass, Sparkles, TrendingUp, Check, ArrowRight } from 'lucide-react';

export const WhyMarkflura: React.FC = () => {
  const multipliers = [
    { title: 'Authority', desc: 'Commanding respect and benchmark status in your industry' },
    { title: 'Trust', desc: 'Shortening sales cycles and removing defensive buyer friction' },
    { title: 'Relationships', desc: 'Unlocking unlisted deals, partnerships, and executive intros' },
    { title: 'Leads', desc: 'Pre-qualified prospects reaching out asking to work with you' },
    { title: 'Business', desc: 'Compound commercial revenue and sustainable enterprise equity' },
  ];

  return (
    <section id="why-markflura" className="py-24 bg-[#0d0d11] border-y border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Target className="w-3.5 h-3.5 text-amber-400" />
            <span>Value Architecture</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            WHY MARKFLURA?
          </h2>
          <p className="font-editorial italic text-2xl sm:text-3xl text-amber-200/90 mb-6">
            Because Influence Should Create More Than Likes.
          </p>
          <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-base leading-relaxed mb-8">
            <p className="mb-2 font-medium">
              We don&apos;t believe in chasing vanity metrics. We believe in building <strong className="text-white font-bold underline decoration-[#d4af37] decoration-2 underline-offset-4">valuable attention</strong>.
            </p>
            <p className="text-zinc-400 text-sm">
              The kind of attention that creates real enterprise leverage, commercial inbound, and long-term brand equity.
            </p>
          </div>
        </div>

        {/* The 5 Attention Multipliers */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {multipliers.map((m, idx) => (
              <div
                key={m.title}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block mb-1">
                    0{idx + 1}
                  </span>
                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    {m.title}.
                  </h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pillar 1: Strategy + Storytelling */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Strategy + Storytelling
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                We don&apos;t create content just to fill a calendar.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                We first understand what you want to be known for and who needs to hear it. Then we build the story around it.
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400">
              Purpose-Driven Narrative →
            </div>
          </div>

          {/* Pillar 2: Personal Brand + Business */}
          <div className="p-8 rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-amber-500/30 ring-1 ring-amber-500/20 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-200 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Personal Brand + Business
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                Your personal brand shouldn&apos;t exist separately from your business objectives. We connect reputation with opportunity.
              </p>

              {/* Cascade flow */}
              <div className="space-y-2 py-3 px-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">●</span> Your expertise becomes content.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">●</span> Your content creates visibility.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">●</span> Your visibility creates conversations.
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-amber-400">●</span> Your conversations create opportunities.
                </div>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-300">
              Direct Business Synergy →
            </div>
          </div>

          {/* Pillar 3: Creativity + Performance */}
          <div className="p-8 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Creativity + Performance
              </h3>
              <div className="space-y-3 text-sm text-zinc-300 leading-relaxed mb-6">
                <p>
                  <strong className="text-white">Creative</strong> gets attention.
                </p>
                <p>
                  <strong className="text-white">Strategy</strong> gives attention direction.
                </p>
                <p>
                  <strong className="text-white">Performance</strong> tells us what works.
                </p>
                <p className="text-amber-300 font-semibold pt-2">
                  We bring all three together seamlessly.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-800 text-xs font-semibold text-amber-400">
              Measurable ROI Engine →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
