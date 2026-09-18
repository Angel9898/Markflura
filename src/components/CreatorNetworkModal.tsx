import React, { useState } from 'react';
import { X as CloseIcon, Linkedin, Twitter, Instagram, CheckCircle2, Users, ArrowUpRight, Mail } from 'lucide-react';
import { PlatformNetwork } from '../types';

interface CreatorNetworkModalProps {
  initialPlatform?: 'linkedin' | 'x' | 'instagram';
  isOpen: boolean;
  onClose: () => void;
}

export const CreatorNetworkModal: React.FC<CreatorNetworkModalProps> = ({
  initialPlatform = 'linkedin',
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'linkedin' | 'x' | 'instagram'>(initialPlatform);

  if (!isOpen) return null;

  const networks: Record<'linkedin' | 'x' | 'instagram', PlatformNetwork> = {
    linkedin: {
      id: 'linkedin',
      name: 'LinkedIn Creator Network',
      shortName: 'LinkedIn',
      countBadge: '500+ Curated Voices',
      tagline: '500+ Curated Voices Across Every Niche',
      description:
        'We have over 500 creators on LinkedIn covering all niches including Marketing, Tech, Finance, Journalism, Lifestyle, Startup, SaaS, Leadership and more. In our inventory we have curated from top voices to high-engagement rising creators.',
      highlights: [
        'Every creator is manually vetted for engagement quality, audience authenticity and content consistency.',
        'We handle full campaign management including outreach, brief creation, content approval, posting and detailed performance reporting.',
        'Whether you need a single creator or a multi-creator LinkedIn blitz, we scale campaigns to match your goal and budget.'
      ],
      niches: [
        'Marketing & Growth',
        'Tech & AI',
        'Finance & Investing',
        'Journalism',
        'Lifestyle',
        'Startups & VCs',
        'HR & Recruitment',
        'SaaS & Product',
        'Executive Leadership',
        'B2B Sales'
      ],
      gradient: 'from-blue-600 to-indigo-700'
    },
    x: {
      id: 'x',
      name: 'X (Twitter) Creator Network',
      shortName: 'X / Twitter',
      countBadge: '250+ Voices Across X',
      tagline: '250+ Voices Across Every Niche on X',
      description:
        'We have over 250 creators on Twitter (X) including Journalists, Political Profiles, Lifestyle Creators and Memers. We have both Verified (Blue Badge) and Non-Verified creators in our inventory ready for amplification.',
      highlights: [
        'Wide spectrum of influence from breaking news journalists to viral meme accounts that shape online conversations daily.',
        'End-to-end campaign execution: creator selection, tweet briefing, thread campaigns, quote-tweet amplification and real-time impression tracking.',
        'Political reach, pop culture virality, or niche community penetration on X handled seamlessly.'
      ],
      niches: [
        'Journalism & News',
        'Political Profiles',
        'Meme Pages',
        'Lifestyle & Culture',
        'Cricket & Sports',
        'Tech & Web3',
        'Finance & Markets',
        'Entertainment',
        'Verified Badges',
        'Viral Commentary'
      ],
      gradient: 'from-zinc-800 to-zinc-950'
    },
    instagram: {
      id: 'instagram',
      name: 'Instagram Creator Network',
      shortName: 'Instagram',
      countBadge: '1000+ Pages & Channels',
      tagline: '1000+ Pages Across Meme, News, Entertainment and Marketing',
      description:
        'We have an inventory of over 1000 Meme Pages on Instagram including Prominent, Regular and Activation Pages. From leading pages like Trolls Official and Naughtyworld to industry marketing authorities like Social Samosa and Marketing Mind, plus Bollywood paparazzi (Viral Bhayani, Instant Bollywood, Pinkvilla).',
      highlights: [
        'Over 1000 Meme Pages with massive organic reach and tier-1 engagement rates.',
        '50+ Instagram Marketing Pages including industry authority names like Social Samosa and Marketing Mind.',
        'Paparazzi & Bollywood Pages including Viral Bhayani, Instant Bollywood, Pinkvilla for high-impact celebrity buzz.',
        'Social News Pages (Indians, Tatva, India in Last 24 Hours) to cover campaigns in credible editorial format.'
      ],
      niches: [
        'Meme & Humor Pages',
        'Bollywood Paparazzi',
        'Marketing & Ad Pages',
        'Social News Coverage',
        'Entertainment & Pop Culture',
        'Activation & College Pages',
        'Food & Lifestyle',
        'Youth Trends'
      ],
      featuredPages: [
        'Viral Bhayani',
        'Pinkvilla',
        'Instant Bollywood',
        'Trolls Official',
        'Naughtyworld',
        'Social Samosa',
        'Marketing Mind',
        'The Tatva',
        'Indians'
      ],
      gradient: 'from-pink-600 via-purple-600 to-amber-500'
    }
  };

  const activeNetwork = networks[activeTab];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#160a24] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-purple-500/20 bg-[#1e0f30]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Markflura Creator Inventory
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="hidden sm:inline-block text-xs text-purple-200/60 font-mono">
              Direct Agency Roster
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-purple-950/50 hover:bg-purple-900/80 text-purple-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Platform Selection Tabs */}
        <div className="flex items-center gap-2 px-6 pt-4 pb-2 border-b border-purple-500/15 bg-[#160a24]">
          <button
            onClick={() => setActiveTab('linkedin')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'linkedin'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-purple-300/70 hover:text-white hover:bg-purple-950/40'
            }`}
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn (500+)</span>
          </button>

          <button
            onClick={() => setActiveTab('x')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'x'
                ? 'bg-zinc-800 text-white shadow-md border border-zinc-700'
                : 'text-purple-300/70 hover:text-white hover:bg-purple-950/40'
            }`}
          >
            <Twitter className="w-4 h-4" />
            <span>X / Twitter (250+)</span>
          </button>

          <button
            onClick={() => setActiveTab('instagram')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'instagram'
                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md'
                : 'text-purple-300/70 hover:text-white hover:bg-purple-950/40'
            }`}
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram (1000+)</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-purple-100">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-purple-500/20 border border-purple-400/40 mb-3">
              {activeNetwork.countBadge}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
              {activeNetwork.tagline}
            </h3>
            <p className="text-base text-purple-200/80 leading-relaxed">
              {activeNetwork.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300">
              Agency Execution Highlights
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {activeNetwork.highlights.map((h, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#1e0f30]/80 border border-purple-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-purple-100 leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Niches / Categories Covered */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-3">
              Niches & Creator Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeNetwork.niches.map((niche, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-purple-950/80 border border-purple-500/30"
                >
                  {niche}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Pages if Instagram */}
          {activeNetwork.featuredPages && (
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-pink-300 mb-3">
                Prominent Roster & Activation Pages
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {activeNetwork.featuredPages.map((page, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-pink-950/30 border border-pink-500/30 text-xs font-bold text-pink-200 flex items-center justify-between"
                  >
                    <span>{page}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTAs */}
        <div className="p-5 border-t border-purple-500/20 bg-[#1e0f30] flex flex-wrap items-center justify-between gap-4">
          <a
            href="mailto:markflura@gmail.com?subject=Inquiry%20Regarding%20Creator%20Roster"
            className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-pink-400" />
            <span>Direct Inquiry: markflura@gmail.com</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-purple-300 hover:text-white bg-purple-950/60 border border-purple-500/30 transition-colors"
            >
              Close
            </button>
            <a
              href="#contact"
              onClick={() => {
                onClose();
                const elem = document.querySelector('#contact');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-md hover:from-purple-500 hover:to-pink-500 transition-all"
            >
              <span>Book Roster</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
