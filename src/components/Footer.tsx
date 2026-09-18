import React from 'react';
import { MarkfluraLogo } from './MarkfluraLogo';
import { Mail, ArrowUpRight, Sparkles, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#090312] border-t border-purple-500/20 text-purple-200/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <MarkfluraLogo size={42} showText={true} />
            <p className="text-sm text-purple-300/70 max-w-sm leading-relaxed">
              Social Media Marketing & Creative Influence Agency. We scale brands across LinkedIn, X and Instagram through creator partnerships, personal branding, and high-conversion strategies.
            </p>
            <div className="text-xs font-semibold text-purple-400">
              Creative Influence & Growth Powerhouse
            </div>
            <div className="pt-2">
              <a
                href="mailto:markflura@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-pink-300 bg-purple-950/50 border border-purple-500/30 hover:bg-purple-900/60 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-pink-400" />
                <span>markflura@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-purple-300/70">
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Influencer Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Meme Marketing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Personal Branding
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Lead Generation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-white transition-colors cursor-pointer">
                  Content Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Creator Networks
            </h4>
            <ul className="space-y-2 text-xs text-purple-300/70">
              <li>
                <button onClick={() => scrollToSection('#platforms')} className="hover:text-white transition-colors cursor-pointer">
                  LinkedIn (500+ Curated)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#platforms')} className="hover:text-white transition-colors cursor-pointer">
                  X / Twitter (250+ Voices)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#platforms')} className="hover:text-white transition-colors cursor-pointer">
                  Instagram (1000+ Meme Pages)
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#platforms')} className="hover:text-white transition-colors cursor-pointer">
                  Culture & Paparazzi Pages
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiry & Engagement Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Inquiries
            </h4>
            <div className="text-xs text-purple-300/70 space-y-2.5">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:markflura@gmail.com" className="hover:text-white transition-colors">
                  markflura@gmail.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Proposal turnaround within 2 business hours</span>
              </p>
              <div className="pt-1">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-semibold transition-all shadow-sm"
                >
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-purple-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-400/60">
          <div>
            © 2025 Markflura. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection('#about')} className="hover:text-purple-200 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('#why')} className="hover:text-purple-200 transition-colors">
              Why Markflura
            </button>
            <button onClick={() => scrollToSection('#founder')} className="hover:text-purple-200 transition-colors">
              Founder
            </button>
            <button onClick={() => scrollToSection('#contact')} className="hover:text-purple-200 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
