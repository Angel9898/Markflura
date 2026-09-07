import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const pillars = [
    'Personal Branding',
    'LinkedIn Growth',
    'Influencer Marketing',
    'Lead Generation'
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-radial from-zinc-900/60 via-[#09090b] to-[#09090b]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/10 to-yellow-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Agency Identification Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-widest uppercase mb-8 shadow-inner shadow-amber-500/10 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Creative Influence & Growth Agency · Delhi, India</span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-heading"
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-8"
          >
            Your Influence Deserves{' '}
            <span className="font-editorial italic font-normal text-[#fef08a] bg-clip-text text-transparent bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308]">
              More Than
            </span>{' '}
            Attention.
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed max-w-3xl mx-auto mb-6">
            We help founders, professionals, creators and brands build a powerful digital presence, establish authority and turn influence into meaningful business opportunities.
          </p>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
            From personal branding and LinkedIn growth to influencer marketing and lead generation, we create strategies that help the right people discover, trust and choose you.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              id="hero-cta-start-journey"
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#eab308] to-[#ca8a04] hover:from-[#eab308] hover:to-[#facc15] text-zinc-950 font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Start Your Growth Journey</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            <a
              id="hero-cta-explore-work"
              href="#work"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-600 font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300"
            >
              <span>Explore Our Work</span>
              <span className="text-amber-400">→</span>
            </a>
          </div>

          {/* Pillars Strip */}
          <div className="pt-6 border-t border-zinc-800/60">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-zinc-400">
              {pillars.map((pillar, idx) => (
                <React.Fragment key={pillar}>
                  <span className="hover:text-amber-300 transition-colors cursor-default text-zinc-300 font-semibold">
                    {pillar}
                  </span>
                  {idx < pillars.length - 1 && (
                    <span className="text-amber-500/60 font-bold select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Credibility Cards / Proof Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200">High-Trust Architecture</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We eliminate vanity metric chasing. Every initiative is calibrated for enterprise credibility and genuine market authority.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200">Opportunity Conversion</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Transform passive impressions into inbound speaking bids, high-ticket clientele, advisory seats, and qualified sales leads.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-semibold text-zinc-200">Delhi-Based · Global Scope</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Anchored in India&apos;s commercial capital, partnering with ambitious founders, creator brands, and enterprises worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
