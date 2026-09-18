import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'Influencer Marketing',
    'Meme Marketing',
    'Personal Branding',
    'Lead Generation',
    'Content Strategy',
    'LinkedIn Growth',
    'Viral Culture',
    'Creator Roster'
  ];

  const fullList = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 border-y border-purple-500/15 bg-[#160a24]/70 backdrop-blur-md select-none z-10">
      <div className="flex w-max animate-marquee">
        {fullList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 px-4 whitespace-nowrap">
            <span className="text-sm font-semibold text-purple-200/90 tracking-wide">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc]" />
          </div>
        ))}
      </div>
    </div>
  );
};
