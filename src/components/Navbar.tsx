import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { MarkfluraLogo } from './MarkfluraLogo';

interface NavbarProps {
  onOpenConsultation: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Process', href: '#process' },
    { name: 'Selected Work', href: '#work' },
    { name: 'Who We Work With', href: '#audience' },
    { name: 'Founder', href: '#founder' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with the golden M emblem from uploaded logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <MarkfluraLogo size={38} showText={true} />
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
          {navLinks.slice(0, 7).map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-200 font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA and Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            id="nav-growth-journey-btn"
            onClick={() => onOpenConsultation()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#eab308] hover:from-[#eab308] hover:to-[#facc15] text-zinc-950 font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-95"
          >
            <span>Start Growth Journey</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-[#0c0c0e]/98 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 transition-all duration-300"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-wider text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-900/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#eab308] text-zinc-950 font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <span>Start Your Growth Journey →</span>
              </button>
            </div>
            <div className="text-[11px] text-zinc-400 text-center pt-2">
              Delhi, India · <a href="mailto:a1.infulencercampaign@gmail.com" className="text-zinc-300 underline">a1.infulencercampaign@gmail.com</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
