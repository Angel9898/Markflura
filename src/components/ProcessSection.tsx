import React from 'react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Discovery and Audit',
      description:
        'We deep dive into your brand, industry, competitors and current social presence to understand exactly where you are and where you need to go.'
    },
    {
      step: '02',
      title: 'Strategy and Planning',
      description:
        'We build a tailored social media strategy with platform-specific content plans, campaign calendars and growth targets.'
    },
    {
      step: '03',
      title: 'Create and Execute',
      description:
        'Our creative team produces content, launches campaigns, manages influencers and runs ads. You focus on your business, we handle the internet.'
    },
    {
      step: '04',
      title: 'Measure and Scale',
      description:
        'We track every metric, report transparently, and continuously optimize to scale what works and remove what does not deliver results.'
    }
  ];

  return (
    <section id="process" className="relative py-24 bg-[#160a24] border-t border-purple-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              How We Work
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our 4-Step Growth Process
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-3xl bg-[#1e0f30]/80 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6 select-none">
                  {item.step}
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-purple-200/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-500/15 flex items-center justify-between text-[11px] font-semibold text-purple-400/70">
                <span>Phase {item.step}</span>
                <span className="w-2 h-2 rounded-full bg-purple-500/40 group-hover:bg-pink-400 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
