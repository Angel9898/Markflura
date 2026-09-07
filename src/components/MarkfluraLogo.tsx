import React from 'react';

interface MarkfluraLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const MarkfluraLogo: React.FC<MarkfluraLogoProps> = ({
  className = '',
  size = 36,
  showText = true,
  textColor = 'text-white'
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Golden Metallic "M" Emblem matching user's uploaded logo */}
      <div
        className="relative shrink-0 rounded-xl overflow-hidden shadow-lg shadow-amber-950/40 border border-amber-500/20 bg-[#09090b]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Ambient gold glow */}
            <radialGradient id={`logoGlow-${size}`} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#ca8a04" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Rich Metallic Brushed Gold */}
            <linearGradient id={`goldStem-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="25%" stopColor="#eab308" />
              <stop offset="60%" stopColor="#ca8a04" />
              <stop offset="90%" stopColor="#854d0e" />
              <stop offset="100%" stopColor="#a16207" />
            </linearGradient>

            {/* Dynamic Ascending Blade */}
            <linearGradient id={`goldSwoosh-${size}`} x1="15%" y1="90%" x2="90%" y2="10%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="25%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="85%" stopColor="#fef9c3" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>

            {/* Drop shadow */}
            <filter id={`logoShadow-${size}`} x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#d4af37" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Background and radial glow */}
          <rect width="500" height="500" fill="#09090b" />
          <circle cx="250" cy="250" r="220" fill={`url(#logoGlow-${size})`} />

          <g filter={`url(#logoShadow-${size})`}>
            {/* Left Stem & inner facet */}
            <path
              d="M 135 140 L 178 140 L 240 236 L 178 262 L 178 340 L 135 340 Z"
              fill={`url(#goldStem-${size})`}
            />

            {/* Right Stem */}
            <path
              d="M 318 180 L 365 180 L 365 340 L 318 340 Z"
              fill={`url(#goldStem-${size})`}
            />

            {/* Ascending Golden Swoosh / Blade Curve */}
            <path
              d="M 194 340 C 194 340, 206 280, 252 222 C 288 176, 335 152, 368 132 C 362 152, 342 195, 312 238 C 275 292, 230 330, 204 340 Z"
              fill={`url(#goldSwoosh-${size})`}
            />

            {/* Left inner shadow facet */}
            <path
              d="M 178 140 L 240 236 L 216 246 L 178 188 Z"
              fill="#000000"
              fillOpacity="0.35"
            />

            {/* Tip highlight glint */}
            <circle cx="368" cy="132" r="3.5" fill="#ffffff" opacity="0.95" />
            <circle cx="368" cy="132" r="8" fill="#fef08a" opacity="0.35" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-black tracking-[0.2em] text-lg sm:text-xl leading-none ${textColor}`}>
            MARKFLURA
          </span>
          <span className="text-[9px] font-mono font-medium tracking-[0.25em] uppercase text-[#d4af37]/80 mt-1">
            CREATIVE INFLUENCE
          </span>
        </div>
      )}
    </div>
  );
};
