import React from 'react';
import { ArrowUpRight, TrendingUp, Sparkles, Layers, Eye, Users, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const scrollToSection = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Aurora Gradient Blobs Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[130px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-pink-600/15 blur-[140px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] rounded-full bg-indigo-700/15 blur-[120px] animate-pulse-glow" style={{ animationDelay: '5s' }} />
        {/* Subtle geometric dot grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.8) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Brand Category Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1e0f30]/90 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                Social Media Marketing & Influence
              </span>
            </div>

            {/* Giant Display Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              We Make <br />
              <span className="text-white">Brands Go </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                Viral.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-purple-200/80 max-w-2xl leading-relaxed mb-8">
              Creative influence and social media marketing powered by strategy, creativity and execution. From viral meme campaigns to personal branding and lead generation, we scale brands across every platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={() => {
                  if (onOpenConsultation) {
                    onOpenConsultation();
                  } else {
                    scrollToSection('#contact');
                  }
                }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Start Growing</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-purple-200 hover:text-white bg-[#160a24]/90 hover:bg-[#1e0f30] border border-purple-500/25 hover:border-purple-400/50 transition-all duration-200 cursor-pointer shadow-lg shadow-purple-950/40"
              >
                <span>Our Services</span>
              </button>
            </div>

            {/* Quick credibility bullet points */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-purple-500/15 text-xs text-purple-300/70">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                Markflura Growth Engine
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-purple-400" />
                10+ Active Brand Partners
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                LinkedIn · X · Instagram
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual with Animated Interactive Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-pink-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

            <div className="w-full max-w-md space-y-4">
              {/* Metric Card 1: 30M+ Impressions */}
              <div className="p-5 rounded-2xl bg-[#160a24]/90 border border-purple-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
                      <Eye className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-purple-300/70">
                      Impressions Reach
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                    Live
                  </span>
                </div>
                <div className="text-3xl font-display font-extrabold text-white tracking-tight mb-2">
                  30M+
                </div>
                {/* Visual Progress Bar */}
                <div className="w-full h-1.5 rounded-full bg-purple-950/80 overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 w-[86%] animate-pulse" />
                </div>
              </div>

              {/* Metric Card 2: ↑ 340% Engagement Rate */}
              <div className="p-5 rounded-2xl bg-[#1e0f30]/90 border border-pink-500/25 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-pink-500/15 text-pink-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink-200/70">
                      Client Growth Rate
                    </span>
                  </div>
                  <span className="text-xs font-bold text-pink-400">Avg 3X</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-display font-extrabold text-white tracking-tight">
                    ↑ 340%
                  </span>
                  <span className="text-xs text-purple-300/70">Engagement Uplift</span>
                </div>
              </div>

              {/* Dual Mini Cards: 25+ Campaigns & 10+ Brands */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#160a24]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg">
                  <div className="text-2xl font-display font-bold text-purple-300">25+</div>
                  <div className="text-xs text-purple-200/70 mt-0.5">Campaigns Executed</div>
                </div>
                <div className="p-4 rounded-2xl bg-[#160a24]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg">
                  <div className="text-2xl font-display font-bold text-pink-400">10+</div>
                  <div className="text-xs text-purple-200/70 mt-0.5">Brand Partners</div>
                </div>
              </div>

              {/* Platform Badges Row */}
              <div className="p-3.5 rounded-2xl bg-[#0d0618]/90 border border-purple-500/20 backdrop-blur-md flex items-center justify-between">
                <span className="text-xs font-medium text-purple-300/80">Dominated Channels:</span>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-purple-900/40 border border-purple-500/30 text-xs font-bold text-white">
                    LinkedIn
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-900/40 border border-purple-500/30 text-xs font-bold text-white">
                    𝕏 Twitter
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-pink-900/40 border border-pink-500/30 text-xs font-bold text-white">
                    Instagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-xs font-medium text-purple-300/60 hover:text-purple-200 transition-colors cursor-pointer group"
          >
            <span>Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-purple-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
