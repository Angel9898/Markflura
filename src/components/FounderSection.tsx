import React from 'react';
import { Quote, Sparkles, Linkedin, Mail, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { AngelThakralPhoto } from './AngelThakralPhoto';

interface FounderSectionProps {
  onOpenConsultation: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ onOpenConsultation }) => {
  const focusAreas = [
    {
      title: 'Personal Branding',
      desc: 'Helping individuals define what they want to be known for and communicate it with clarity.'
    },
    {
      title: 'LinkedIn Growth',
      desc: 'Building professional visibility through strategic content, positioning and engagement.'
    },
    {
      title: 'Influencer Marketing',
      desc: 'Creating meaningful connections between brands and creators.'
    },
    {
      title: 'Lead Generation',
      desc: 'Turning attention and relationships into qualified business opportunities.'
    }
  ];

  return (
    <section id="founder" className="py-24 bg-[#0d0d11] border-y border-zinc-800/60 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Leadership & Vision</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-2">
            Meet The Founder Behind Markflura.
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Guiding leaders and forward-thinking enterprises from obscurity into unassailable market authority.
          </p>
        </div>

        {/* Founder Bio Card */}
        <div className="rounded-3xl bg-zinc-900/60 border border-zinc-800 p-8 sm:p-12 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Founder Visual Representation / Profile Badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="mb-6 flex justify-center sm:justify-start w-full">
                <AngelThakralPhoto size="w-52 h-52 sm:w-60 sm:h-60" />
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-1">
                ANGEL THAKRAL
              </h3>
              <p className="font-editorial italic text-base text-amber-300 mb-4">
                Founder · Markflura
              </p>

              <div className="flex items-center gap-3">
                <a
                  href="mailto:a1.infulencercampaign@gmail.com"
                  className="p-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-xs flex items-center gap-2 transition-colors"
                  title="Contact Angel Thakral"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Direct Inquiries</span>
                </a>
              </div>
            </div>

            {/* Right: Narrative, Quotes & Focus Areas */}
            <div className="lg:col-span-8">
              {/* Primary Belief Quote */}
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-amber-500/30 mb-8 relative">
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-400 block mb-2">
                  Foundational Principle
                </span>
                <blockquote className="text-lg sm:text-2xl font-editorial italic text-zinc-100 leading-snug">
                  &ldquo;Your digital presence should open doors before you walk through them.&rdquo;
                </blockquote>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
                <p>
                  Markflura was founded by <strong className="text-white">Angel Thakral</strong> with a simple belief: that influence is not a cosmetic vanity project, but the foundational lever of modern business equity.
                </p>
                <p className="text-zinc-400 text-sm">
                  Angel&apos;s vision for Markflura is centred around helping individuals and businesses understand the real value of influence. From building a strong personal brand to creating LinkedIn visibility, connecting brands with influencers and generating meaningful business conversations, Markflura focuses on turning digital presence into tangible opportunity.
                </p>
              </div>

              {/* Angel's Focus 4-Grid */}
              <div className="mb-8">
                <span className="text-xs uppercase tracking-wider font-bold text-zinc-400 block mb-4">
                  Angel&apos;s Strategic Focus:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {focusAreas.map((f) => (
                    <div
                      key={f.title}
                      className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80"
                    >
                      <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                        <span>{f.title}</span>
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Angel's Belief Callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-zinc-900 to-zinc-900 border-l-4 border-[#d4af37] border-y border-r border-zinc-800">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block mb-1">
                  ANGEL&apos;S BELIEF
                </span>
                <p className="font-editorial italic text-base sm:text-lg text-white mb-2">
                  &ldquo;People don&apos;t buy from profiles. They buy from people they recognise, trust and believe in.&rdquo;
                </p>
                <p className="text-xs text-zinc-400">
                  That&apos;s why Markflura focuses on building influence before asking for conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
