import React from 'react';

export const NumbersSection: React.FC = () => {
  const stats = [
    { num: '10+', label: 'Brands Served' },
    { num: '30M+', label: 'Total Impressions Reach' },
    { num: '25+', label: 'Campaigns Executed' },
    { num: '3+', label: 'Key Platforms Dominated' }
  ];

  return (
    <section className="relative py-20 bg-[#160a24]/80 border-t border-purple-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 mb-4 justify-center">
          <span className="w-6 h-[1.5px] bg-purple-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            By the Numbers
          </span>
          <span className="w-6 h-[1.5px] bg-purple-500" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-16 max-w-2xl mx-auto">
          Numbers That Speak Louder Than Pitches
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl bg-[#1e0f30]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">
                  {s.num}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-200/80">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
