import React from 'react';

interface AshencyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBadge?: boolean;
}

export const AshencyLogo: React.FC<AshencyLogoProps> = ({
  className = '',
  size = 'md',
  showBadge = false
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Abstract Glowing Hexagonal / A-Apex Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center`}>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 blur-sm opacity-60 animate-pulse" />
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-full h-full"
        >
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c084fc" />
              <stop offset="0.5" stopColor="#a855f7" />
              <stop offset="1" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          <path
            d="M18 4L31 14V28L18 34L5 28V14L18 4Z"
            stroke="url(#logoGrad)"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <path
            d="M12 24L18 12L24 24"
            stroke="#f0eaff"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="14"
            y1="20"
            x2="22"
            y2="20"
            stroke="#ec4899"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className={`font-display font-extrabold tracking-tight text-white ${textSizes[size]}`}>
            Ashency
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 animate-ping" />
        </div>
        {showBadge && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-purple-300/80 -mt-0.5">
            360° Social Agency
          </span>
        )}
      </div>
    </div>
  );
};
