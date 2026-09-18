import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const BrandsSection: React.FC = () => {
  const brandsRow1 = [
    { name: 'Zavo', category: 'Fashion & D2C' },
    { name: 'Apsara Ice Cream', category: 'Dessert & F&B' },
    { name: 'Gimimi Chips', category: 'Snacking & FMCG' },
    { name: 'Prepyr AI', category: 'EdTech & AI' }
  ];

  const brandsRow2 = [
    { name: 'Lenskart', category: 'Eyewear & Retail' },
    { name: 'Zepto', category: '10-Min Quick Commerce' },
    { name: 'HDFC Bank', category: 'Banking & Financial' },
    { name: 'Angel One', category: 'FinTech & Investing' },
    { name: 'Zoho One', category: 'Enterprise Cloud' },
    { name: 'Rosier', category: 'Clean Wellness & D2C' },
    { name: 'Kiwi', category: 'Credit & FinTech' },
    { name: 'Berger Paints', category: 'Paints & Decor' }
  ];

  const list1 = [...brandsRow1, ...brandsRow1, ...brandsRow1];
  const list2 = [...brandsRow2, ...brandsRow2];

  return (
    <section id="brands" className="relative py-24 bg-[#160a24]/40 border-t border-purple-500/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-left max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[1.5px] bg-purple-500" />
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400">
              Trusted By
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Brands That Trust Markflura
          </h2>
          <p className="text-lg sm:text-xl text-purple-200/80">
            From India's biggest names to fast-growing startups, our work speaks across industries.
          </p>
        </div>
      </div>

      {/* Marquee Row 1: Forward */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="flex w-max animate-marquee gap-6">
          {list1.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e0f30]/90 border border-purple-500/20 backdrop-blur-md shadow-md hover:border-purple-400/40 transition-colors select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-xs">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-display font-bold text-base text-white tracking-tight">
                  {brand.name}
                </div>
                <div className="text-[10px] uppercase font-semibold tracking-wider text-purple-300/60">
                  {brand.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2: Reverse */}
      <div className="relative w-full overflow-hidden py-3 mt-3">
        <div className="flex w-max animate-marquee-reverse gap-6">
          {list2.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#1e0f30]/90 border border-purple-500/20 backdrop-blur-md shadow-md hover:border-pink-400/40 transition-colors select-none"
            >
              <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-300 font-bold text-xs">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="font-display font-bold text-base text-white tracking-tight">
                  {brand.name}
                </div>
                <div className="text-[10px] uppercase font-semibold tracking-wider text-purple-300/60">
                  {brand.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
