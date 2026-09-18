import React from 'react';
import { Building2, Sparkles, Target, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const stats = [
    {
      value: '10+',
      label: 'Brands and businesses served across India',
      icon: Building2
    },
    {
      value: '5',
      label: 'Platforms we dominate for your brand',
      icon: Target
    },
    {
      value: '3X',
      label: 'Average engagement growth for clients',
      icon: Zap
    },
    {
      value: '100%',
      label: 'Strategy & creative influence execution',
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0d0618] overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-[1.5px] bg-purple-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
            Who We Are
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Text Block */}
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8">
              An Agency Built for the Internet Age
            </h2>

            <p className="text-xl sm:text-2xl font-medium text-purple-200/95 leading-relaxed mb-6">
              Markflura is a high-impact creative influence and growth powerhouse based in India.
            </p>

            <div className="space-y-4 text-base sm:text-lg text-purple-300/75 leading-relaxed">
              <p>
                We are not your typical social media agency. We understand culture, trends, and what makes people stop scrolling. From challenger startups to established brands, we craft strategies that create real impact across every major social platform.
              </p>
              <p className="font-semibold text-white/90">
                Our team lives on the internet so your brand can own it.
              </p>
            </div>
          </div>

          {/* Right Stats Block */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#160a24]/90 border border-purple-500/20 backdrop-blur-xl shadow-lg hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500/25 group-hover:text-pink-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-purple-200/75 leading-snug">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
