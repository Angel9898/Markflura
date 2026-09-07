import React from 'react';
import { CheckCircle2, Sparkles, Award, UserCheck, HeartHandshake, Briefcase, Zap } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const outcomes = [
    {
      title: 'Recognition',
      icon: Award,
      desc: 'Moving from an invisible practitioner to an instantly recognizable, referenced voice in your niche.'
    },
    {
      title: 'Trust',
      icon: UserCheck,
      desc: 'Establishing unquestioned credibility before the first formal sales call or boardroom introduction.'
    },
    {
      title: 'Relationships',
      icon: HeartHandshake,
      desc: 'Connecting meaningfully with founders, decision-makers, and peers rather than amassing silent follower numbers.'
    },
    {
      title: 'Opportunities',
      icon: Briefcase,
      desc: 'Generating inbound advisory inquiries, client contracts, keynote requests, and strategic partnerships.'
    },
    {
      title: 'Growth',
      icon: Zap,
      desc: 'Compounding brand equity that multiplies business valuation and opens perpetual career doors.'
    }
  ];

  const personas = [
    { role: 'Every founder', value: 'has a story.' },
    { role: 'Every professional', value: 'has expertise.' },
    { role: 'Every creator', value: 'has an audience.' },
    { role: 'Every business', value: 'has something valuable to say.' }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#0d0d11] border-y border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>The Markflura Philosophy</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
            We Don&apos;t Just Market.{' '}
            <span className="font-editorial italic font-normal text-amber-300">
              We Build Influence.
            </span>
          </h2>
          <div className="p-5 rounded-xl bg-zinc-900/80 border-l-4 border-[#d4af37] text-lg sm:text-xl font-medium text-zinc-200 mb-6">
            &ldquo;Marketing can get you noticed. Influence gets you remembered.&rdquo;
          </div>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
            At Markflura, we combine strategy, storytelling, digital presence and relationship-building to help people and brands become more visible, credible and valuable in their market.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Your influence should not stop at likes, impressions or followers. It should create tangible leverage.
          </p>
        </div>

        {/* 5 Cornerstones of Real Influence */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-widest font-semibold text-zinc-400 mb-6 flex items-center gap-2">
            <span>What Real Influence Must Create:</span>
            <div className="h-[1px] flex-1 bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {outcomes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  id={`outcome-card-${idx}`}
                  className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-zinc-400 block mb-1">
                      0{idx + 1}
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}.
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* "Your Expertise Is Your Brand" Manifesto Block */}
        <div className="rounded-3xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37] mb-3 block">
                The Core Thesis
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight mb-6">
                Your Expertise Is Your Brand.
              </h3>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                The challenge in today&apos;s hyper-saturated market is turning raw internal value into a presence people recognise, respect, and remember.
              </p>
              <div className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-zinc-300 leading-relaxed">
                <span className="text-amber-400 font-semibold">That&apos;s where Markflura comes in:</span> We help you identify what makes you different, communicate it consistently, and build a dedicated audience around your expertise.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personas.map((item) => (
                  <div
                    key={item.role}
                    className="p-5 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                      <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                        {item.role}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-400 font-medium pl-6">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
