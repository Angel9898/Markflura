import React from 'react';
import { ArrowRight, ArrowUp, Mail, MapPin, Sparkles } from 'lucide-react';
import { MarkfluraLogo } from './MarkfluraLogo';

interface FinalCtaAndFooterProps {
  onOpenConsultation: () => void;
}

export const FinalCtaAndFooter: React.FC<FinalCtaAndFooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Process', href: '#process' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Who We Work With', href: '#audience' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* FINAL CTA SECTION */}
      <section className="py-24 bg-[#09090b] relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-amber-400 mb-4 inline-block">
            MARKFLURA
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
            Don&apos;t Just Build a Following.
          </h2>

          <h3 className="font-editorial italic font-normal text-3xl sm:text-5xl text-[#fef08a] mb-8">
            Build Influence.
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-lg font-medium text-zinc-300 mb-10">
            <span>Build a reputation.</span>
            <span className="text-amber-500 font-bold">·</span>
            <span>Build relationships.</span>
            <span className="text-amber-500 font-bold">·</span>
            <span>Build opportunities.</span>
          </div>

          <div className="text-xs uppercase tracking-wider text-zinc-400 mb-10 font-semibold">
            Personal Branding · LinkedIn Growth · Influencer Marketing · Lead Generation
          </div>

          <div>
            <button
              onClick={onOpenConsultation}
              className="px-10 py-4.5 rounded-full bg-gradient-to-r from-[#d4af37] via-[#eab308] to-[#ca8a04] hover:from-[#eab308] hover:to-[#facc15] text-zinc-950 font-bold text-sm tracking-wider uppercase inline-flex items-center gap-3 transition-all duration-300 shadow-2xl shadow-amber-500/20 hover:scale-105 active:scale-95"
            >
              <span>Start Your Growth Journey</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#050507] border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 items-start">
            {/* Brand column */}
            <div className="lg:col-span-5">
              <div className="mb-4">
                <MarkfluraLogo size={36} showText={true} />
              </div>

              <h4 className="font-editorial italic text-lg text-amber-200/90 mb-3">
                Build Influence. Create Opportunity.
              </h4>

              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm mb-6">
                Personal Branding · LinkedIn Growth · Influencer Marketing · Lead Generation. Delhi-based creative influence agency partnering with visionaries globally.
              </p>

              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Delhi · India</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a
                    href="mailto:a1.infulencercampaign@gmail.com"
                    className="hover:text-amber-300 transition-colors"
                  >
                    a1.infulencercampaign@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-4">
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-300 block mb-4">
                Navigation
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Direct Inquiry Action */}
            <div className="lg:col-span-3">
              <span className="text-xs uppercase font-bold tracking-widest text-zinc-300 block mb-4">
                Executive Desk
              </span>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Direct all confidential partnership and creator campaign briefs to founder desk.
              </p>
              <a
                href="mailto:a1.infulencercampaign@gmail.com"
                className="w-full py-2.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Email Founder Desk</span>
              </a>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-zinc-400">
              © 2026 Markflura. All Rights Reserved.
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-zinc-400 hover:text-amber-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};
