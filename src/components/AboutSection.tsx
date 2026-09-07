import React from 'react';
import { Sparkles, Compass, Eye, Shield, Award, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const intersections = [
    { title: 'Personal Branding', desc: 'Crafting authoritative individual positioning' },
    { title: 'LinkedIn', desc: 'Transforming professional feeds into commercial gravity' },
    { title: 'Influencer Marketing', desc: 'High-affinity creator partnerships that move markets' },
    { title: 'Lead Generation', desc: 'Converting digital reputation into pipeline revenue' }
  ];

  const missionPillars = [
    {
      num: '01',
      title: 'Build Influence.',
      desc: 'Create indelible digital presence that commands attention and commands respect in high-stakes rooms.'
    },
    {
      num: '02',
      title: 'Create Trust.',
      desc: 'Build authentic, demonstrable credibility that establishes buyer conviction before formal outreach.'
    },
    {
      num: '03',
      title: 'Generate Opportunity.',
      desc: 'Turn attention into inbound speaking, executive introductions, venture deals, and client retainers.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>About The Agency</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            We Believe Influence Is the New Business Currency.
          </h2>
          <div className="flex items-center gap-2 text-sm text-zinc-400 font-medium mb-6">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Delhi-based influence and growth agency</span>
          </div>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6">
            Markflura is a Delhi-based influence and growth agency helping individuals and businesses build authority, strengthen their digital presence and create meaningful opportunities.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Our approach combines human storytelling with strategic thinking to create digital presence that doesn&apos;t simply look good—<strong className="text-white">it works</strong>.
          </p>
        </div>

        {/* Intersection Grid */}
        <div className="mb-20">
          <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-6">
            We Operate at the Strategic Intersection of:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {intersections.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-500/30 transition-colors"
              >
                <span className="font-mono text-xs text-amber-400 font-bold block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Vision Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                OUR VISION
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-6">
                To Help People Become Known For What They Do Best.
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                The internet has made everyone visible.
              </p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                But visibility alone isn&apos;t enough. Our vision is to help founders, professionals, creators and brands move from <strong className="text-amber-200">being present to being recognised, trusted and remembered.</strong>
              </p>
            </div>
            <div className="pt-4 border-t border-zinc-800/80 text-xs font-semibold text-zinc-400">
              Perception Engineering · Enduring Recall
            </div>
          </div>

          {/* Mission Card */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-zinc-900/70 border border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-2">
                OUR MISSION
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
                Three Principles Governing Every Engagement.
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Everything we do comes back to these three guiding principles:
              </p>

              <div className="space-y-4">
                {missionPillars.map((p) => (
                  <div
                    key={p.num}
                    className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-start gap-4"
                  >
                    <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0 mt-0.5">
                      {p.num}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">
                        {p.title}
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 text-xs font-medium text-amber-300/90">
              Zero compromises on brand integrity and long-term reputation.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
