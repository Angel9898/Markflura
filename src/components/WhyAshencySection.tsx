import React from 'react';
import { Quote } from 'lucide-react';

export const WhyAshencySection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Culture First Thinking',
      description:
        'We understand internet culture at its core. Our strategies are rooted in real trends, not textbook marketing rules.'
    },
    {
      num: '02',
      title: 'Strategic & Results-Driven',
      description:
        'Markflura is a high-caliber creative agency with verified creator relationships. You work with a professional, accountable growth partner.'
    },
    {
      num: '03',
      title: 'Full Stack Execution',
      description:
        'Strategy, content, ads, influencer management, reporting. Everything under one roof, no juggling multiple agencies.'
    },
    {
      num: '04',
      title: 'Transparent and Honest',
      description:
        'No fluff. No vanity metrics. We report what actually matters and tell you the truth about your campaigns every time.'
    }
  ];

  return (
    <section id="why" className="relative py-24 bg-[#0d0618] border-t border-purple-500/15 overflow-hidden">
      {/* Subtle purple radial gradient */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and 4 Pillars */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[1.5px] bg-purple-500" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
                Why Markflura
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-10">
              Built Different. Results Proven.
            </h2>

            <div className="space-y-6">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-5 p-6 rounded-2xl bg-[#160a24]/90 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-200"
                >
                  <span className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 shrink-0">
                    {p.num}
                  </span>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-1.5">
                      {p.title}
                    </h4>
                    <p className="text-sm text-purple-200/75 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Signature Quote Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#1e0f30] to-[#160a24] border border-purple-500/30 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none" />
              <Quote className="w-12 h-12 text-purple-400/40 mb-6" />

              <blockquote className="font-display text-2xl sm:text-3xl font-bold text-white leading-snug tracking-tight mb-8">
                &ldquo;We don't just post content. We build{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  digital presence
                </span>{' '}
                that makes your competitors uncomfortable.&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-purple-500/20 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">Markflura Team</div>
                  <div className="text-xs text-purple-300/70">
                    Creative Influence & Growth
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-[11px] font-bold text-purple-300">
                  Creative Agency
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
