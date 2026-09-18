import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onStartProject?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onStartProject }) => {
  const handleAction = () => {
    if (onStartProject) {
      onStartProject();
    } else {
      const elem = document.querySelector('#contact');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 bg-[#0d0618] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-[#1e0f30] via-[#160a24] to-[#25133d] border border-purple-500/30 backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-purple-600/30 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-bold uppercase tracking-wider text-purple-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Let's Work Together</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Make Your Brand Go Viral?
          </h2>

          <p className="text-base sm:text-xl text-purple-200/85 max-w-2xl mx-auto leading-relaxed mb-10">
            Join 10+ brands that grew their digital presence with Markflura. Tell us your goal and we will build the strategy.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleAction}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
