import React from 'react';
import { Linkedin, Twitter, Instagram, ArrowUpRight, Users, Sparkles } from 'lucide-react';

interface PlatformsSectionProps {
  onOpenNetworkModal: (platform: 'linkedin' | 'x' | 'instagram') => void;
}

export const PlatformsSection: React.FC<PlatformsSectionProps> = ({ onOpenNetworkModal }) => {
  const platforms = [
    {
      id: 'linkedin' as const,
      name: 'LinkedIn',
      count: '500+ curated creators',
      headline: 'Executive & B2B Authority',
      description:
        'Covering Marketing, Tech, Finance, Journalism, Lifestyle, Startups, SaaS, and Leadership. Every voice is manually vetted for engagement quality.',
      icon: Linkedin,
      gradient: 'from-blue-600/30 to-purple-600/20',
      borderAccent: 'hover:border-blue-500/50',
      badgeColor: 'text-blue-400 bg-blue-950/60 border-blue-500/30'
    },
    {
      id: 'x' as const,
      name: 'X (Twitter)',
      count: '250+ curated creators',
      headline: 'Real-Time Virality & Culture',
      description:
        'Journalists, Political profiles, Tech creators, and Memers. We execute verified tweet briefing, thread campaigns, and quote-tweet amplification.',
      icon: Twitter,
      gradient: 'from-zinc-700/30 to-purple-900/20',
      borderAccent: 'hover:border-zinc-400/50',
      badgeColor: 'text-zinc-300 bg-zinc-900/80 border-zinc-700/50'
    },
    {
      id: 'instagram' as const,
      name: 'Instagram',
      count: '1000+ meme pages & creators',
      headline: 'Massive Reach & Pop Culture',
      description:
        'From top meme pages like Trolls Official and Naughtyworld, to authority marketing media (Social Samosa) and paparazzi (Viral Bhayani, Pinkvilla).',
      icon: Instagram,
      gradient: 'from-pink-600/30 via-purple-600/20 to-amber-500/20',
      borderAccent: 'hover:border-pink-500/50',
      badgeColor: 'text-pink-400 bg-pink-950/60 border-pink-500/30'
    }
  ];

  return (
    <section id="platforms" className="relative py-24 bg-[#0d0618] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Cross Platform
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Where We Make Your Brand Shine
          </h2>
          <p className="text-lg sm:text-xl text-purple-200/80 leading-relaxed">
            Each platform has its own culture, algorithm and audience behavior. We craft platform-specific strategies instead of one-size-fits-all content, ensuring maximum native performance on every channel.
          </p>
        </div>

        {/* 3 Large Platform Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            return (
              <div
                key={plat.id}
                className={`relative group p-8 rounded-3xl bg-[#160a24]/90 border border-purple-500/20 ${plat.borderAccent} backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[#1e0f30] border border-purple-500/30 text-white shadow-md">
                      <Icon className="w-7 h-7 text-purple-300 group-hover:text-pink-400 transition-colors" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${plat.badgeColor}`}
                    >
                      {plat.count}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-1">
                    {plat.name}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-purple-400/90 mb-4">
                    {plat.headline}
                  </div>

                  <p className="text-sm text-purple-200/75 leading-relaxed mb-8">
                    {plat.description}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => onOpenNetworkModal(plat.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-xs font-bold text-white bg-purple-950/60 hover:bg-purple-900 border border-purple-500/30 hover:border-purple-400 shadow-md transition-all duration-200 cursor-pointer group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600"
                  >
                    <span>View Creator Network</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
