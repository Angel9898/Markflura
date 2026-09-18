import React from 'react';
import { Users, Flame, UserCheck, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'influencer-marketing',
      title: 'Influencer Marketing',
      description:
        'We connect your brand with the right voices. From nano to celebrity creators across LinkedIn, X and Instagram, we manage end-to-end campaigns that drive genuine trust and measurable business impact.',
      tags: ['Nano', 'Micro', 'Macro', 'Celebrity Roster'],
      icon: Users,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'meme-marketing',
      title: 'Meme Marketing',
      description:
        'Culture moves fast. We move faster. Our meme marketing turns your brand into part of the cultural zeitgeist, capturing viral organic attention across India’s biggest meme communities.',
      tags: ['Trending', 'Organic Virality', '1000+ Pages'],
      icon: Flame,
      gradient: 'from-pink-500 to-amber-400'
    },
    {
      id: 'personal-branding',
      title: 'Personal Branding',
      description:
        'We turn founders, CEOs, and industry leaders into recognized category authorities. From narrative architecture to ghostwritten thought leadership on LinkedIn and X, we build executive presence that opens doors.',
      tags: ['Founders & CXOs', 'LinkedIn Authority', 'Thought Leadership'],
      icon: UserCheck,
      gradient: 'from-amber-400 to-pink-500'
    },
    {
      id: 'lead-generation',
      title: 'Lead Generation',
      description:
        'Attention is only valuable when it creates business pipeline. We design organic and targeted lead-generation funnels that turn social momentum into high-intent inbound conversations and qualified meetings.',
      tags: ['B2B Pipeline', 'Qualified Inbound', 'Funnel Conversion'],
      icon: TrendingUp,
      gradient: 'from-emerald-400 to-teal-500'
    },
    {
      id: 'content-strategy',
      title: 'Content Strategy',
      description:
        'We build full content calendars, ideate high-retention campaigns, and produce platform-native content that your target audience actually stops to consume, bookmark, and share.',
      tags: ['Viral Reels', 'Carousels', 'High-Retention'],
      icon: Calendar,
      gradient: 'from-violet-500 to-purple-400'
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-[#160a24]/50 border-t border-purple-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-left mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              What We Do
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Every Service Your Brand Needs to Win Online
          </h2>
          <p className="text-lg sm:text-xl text-purple-200/80">
            From scroll-stopping creator content to high-intent lead generation, we scale your presence and revenue.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="group relative p-8 rounded-3xl bg-[#1e0f30]/80 hover:bg-[#25133d] border border-purple-500/20 hover:border-purple-400/50 backdrop-blur-xl shadow-xl hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Glowing Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${svc.gradient} p-[1px] mb-6 shadow-md`}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#0d0618]/90 flex items-center justify-center text-white group-hover:bg-transparent transition-colors">
                      <Icon className="w-6 h-6 text-purple-300 group-hover:text-white" />
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-purple-200/75 leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/15">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-medium text-purple-200 bg-purple-950/60 border border-purple-500/25"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Quick Inquiry action */}
                  <button
                    onClick={() => onSelectService?.(svc.title)}
                    className="mt-6 w-full flex items-center justify-between text-xs font-semibold text-purple-300/80 hover:text-white py-1.5 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>Request Campaign Proposal</span>
                    <ArrowUpRight className="w-4 h-4 text-purple-400" />
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
