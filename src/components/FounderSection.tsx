import React from 'react';
import { Quote, Sparkles, Mail, CheckCircle2 } from 'lucide-react';
import { AngelThakralPhoto } from './AngelThakralPhoto';

interface FounderSectionProps {
  onOpenConsultation?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenConsultation }) => {
  const focusAreas = [
    {
      title: 'Influencer Marketing',
      desc: 'Connecting brands with high-trust creators across Nano, Micro, Macro, and Celebrity tiers.'
    },
    {
      title: 'LinkedIn & Executive Growth',
      desc: 'Building professional visibility through strategic content, positioning and engagement.'
    },
    {
      title: 'Meme & Viral Strategy',
      desc: 'Injecting brands into internet culture to drive massive organic reach and conversation.'
    },
    {
      title: 'Lead Generation & Conversions',
      desc: 'Turning attention, reach, and relationships into measurable business ROI and opportunities.'
    }
  ];

  return (
    <section id="founder" className="py-24 bg-[#0d0618] border-t border-purple-500/15 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Leadership & Vision
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-3">
            Meet The Founder Behind The Agency.
          </h2>
          <p className="text-purple-200/80 text-base sm:text-lg">
            Guiding high-growth brands, creators, and enterprises to dominate internet attention and build viral equity.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="rounded-3xl bg-[#160a24]/90 border border-purple-500/25 p-8 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Founder Photo & Profile Details */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="mb-6 flex justify-center sm:justify-start w-full">
                <AngelThakralPhoto size="w-52 h-52 sm:w-60 sm:h-60" />
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-1 tracking-tight">
                ANGEL THAKRAL
              </h3>
              <p className="text-sm font-semibold text-pink-400 mb-4">
                Founder · Lead Strategist
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="mailto:markflura@gmail.com?subject=Strategic%20Inquiry%20for%20Angel%20Thakral"
                  className="px-4 py-2 rounded-xl bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white border border-purple-500/30 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-pink-400" />
                  <span>Email Angel Thakral</span>
                </a>

                <a
                  href="#contact"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>

            {/* Right: Narrative, Quotes & Strategic Focus */}
            <div className="lg:col-span-8">
              {/* Primary Principle Quote */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#1e0f30]/90 border border-purple-500/30 mb-8 relative shadow-lg">
                <Quote className="w-8 h-8 text-purple-400/25 absolute top-4 right-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-pink-400 block mb-2">
                  Foundational Principle
                </span>
                <blockquote className="text-lg sm:text-2xl font-display font-bold text-white leading-snug">
                  &ldquo;Your digital presence should open doors before you walk through them.&rdquo;
                </blockquote>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-purple-200/85 leading-relaxed mb-8">
                <p>
                  Founded by <strong className="text-white">Angel Thakral</strong>, Markflura was built with a clear conviction: influence is not a superficial vanity metric, but the core growth lever of modern digital dominance.
                </p>
                <p className="text-purple-300/75 text-sm">
                  Angel's vision is centered on turning attention into real-world business equity. From engineering viral meme campaigns and high-reach influencer partnerships to dominating LinkedIn, establishing authoritative personal brands, and driving high-intent lead generation, Markflura focuses on building unstoppable momentum across every major platform.
                </p>
              </div>

              {/* Strategic Focus 4-Grid */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider font-bold text-purple-300 block mb-4">
                  Core Strategic Pillars:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {focusAreas.map((f) => (
                    <div
                      key={f.title}
                      className="p-4 rounded-xl bg-[#0d0618]/80 border border-purple-500/20"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                        <span>{f.title}</span>
                      </h4>
                      <p className="text-xs text-purple-300/70 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Angel's Belief Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-900/30 via-[#1e0f30] to-[#1e0f30] border-l-4 border-pink-500 border-y border-r border-purple-500/20">
                <span className="text-[10px] uppercase font-bold tracking-widest text-pink-400 block mb-1">
                  CORE PHILOSOPHY
                </span>
                <p className="font-display font-bold text-base sm:text-lg text-white mb-2">
                  &ldquo;People don't buy from profiles. They buy from voices they recognize, trust and talk about.&rdquo;
                </p>
                <p className="text-xs text-purple-300/75">
                  That's why Markflura focuses on commanding cultural influence before asking for conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

