import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function BrandLogo({ className = '', size = 'md' }: BrandLogoProps) {
  // Dimension mapping for responsive navbar & footer placement
  const sizeClasses = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12',
    lg: 'w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16',
    xl: 'w-20 h-20 sm:w-24 sm:h-24',
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${sizeClasses[size]} ${className}`}
      style={{ aspectRatio: '1 / 1' }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full select-none"
        aria-label="Champaran Meat House Official Logo"
      >
        <defs>
          {/* Top Arc for 'OLD' Text */}
          <path
            id="top-arc-old"
            d="M 120,250 A 130,130 0 0,1 380,250"
            fill="none"
          />

          {/* Bottom Arc for 'HOUSE' Text */}
          <path
            id="bottom-arc-house"
            d="M 380,250 A 130,130 0 0,1 120,250"
            fill="none"
          />

          {/* Spatula Blade Shading */}
          <linearGradient id="spatulaBladeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E6EA" />
            <stop offset="50%" stopColor="#C2C9D0" />
            <stop offset="100%" stopColor="#9BA2AA" />
          </linearGradient>

          {/* Spatula Handle Metal Shading */}
          <linearGradient id="spatulaHandleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D2D8DE" />
            <stop offset="50%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#B0B8C0" />
          </linearGradient>
        </defs>

        {/* 1. Maroon Outer Circle Ring */}
        <path
          d="M 250,55 A 195,195 0 1,0 250,445 A 195,195 0 1,0 250,55 Z M 250,140 A 110,110 0 1,1 250,360 A 110,110 0 1,1 250,140 Z"
          fill="#780D14"
        />

        {/* 2. Cooking Spatula / Palta (Passes diagonally through the center) */}
        <g id="spatula-tool">
          {/* Handle Shaft - Gold Outer Border */}
          <path
            d="M 276,140 L 210,430 C 208,442 196,450 183,447 C 170,444 163,432 166,420 L 232,130 Z"
            fill="#FFCC00"
            stroke="#D6A500"
            strokeWidth="2"
          />

          {/* Handle Shaft - Silver Metallic Core */}
          <path
            d="M 270,143 L 206,426 C 204,435 196,441 187,439 C 178,437 173,428 175,419 L 237,136 Z"
            fill="url(#spatulaHandleGradient)"
          />

          {/* Bottom Handle Loop Hole */}
          <ellipse
            cx="187"
            cy="435"
            rx="5"
            ry="7"
            fill="#780D14"
            stroke="#FFCC00"
            strokeWidth="2.5"
          />

          {/* Top Spatula Blade Head */}
          {/* Blade Body with slight flare and rounded edges */}
          <path
            d="M 245,145 L 268,25 C 270,12 280,5 294,6 L 358,15 C 372,17 380,27 377,41 L 352,158 C 350,166 340,172 330,170 L 264,160 C 253,158 245,153 245,145 Z"
            fill="url(#spatulaBladeGradient)"
            stroke="#780D14"
            strokeWidth="4.5"
          />

          {/* Blade Top Edge Bevel / Highlight */}
          <path
            d="M 274,28 L 362,39"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        {/* 3. Curved White Text on Maroon Ring */}
        {/* 'OLD' (Top Center) */}
        <text
          fill="#FFFFFF"
          fontSize="64"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Arial Black', Impact, sans-serif"
          letterSpacing="6"
        >
          <textPath href="#top-arc-old" startOffset="50%" textAnchor="middle">
            OLD
          </textPath>
        </text>

        {/* 'HOUSE' (Bottom Center) */}
        <text
          fill="#FFFFFF"
          fontSize="52"
          fontWeight="900"
          fontFamily="system-ui, -apple-system, 'Arial Black', Impact, sans-serif"
          letterSpacing="8"
        >
          <textPath href="#bottom-arc-house" startOffset="50%" textAnchor="middle">
            HOUSE
          </textPath>
        </text>

        {/* 4. Bright Yellow Center Horizontal Rounded Pill Banner */}
        <rect
          x="38"
          y="185"
          width="424"
          height="120"
          rx="60"
          fill="#FFDF00"
          stroke="#E5C700"
          strokeWidth="2.5"
        />

        {/* 5. Hindi Text 'चम्पारण मीट' inside Yellow Banner */}
        <text
          x="250"
          y="270"
          textAnchor="middle"
          fill="#780D14"
          fontSize="72"
          fontWeight="900"
          fontFamily="'Noto Sans Devanagari', 'Yantramanav', 'Tiro Devanagari Hindi', system-ui, sans-serif"
          letterSpacing="2"
        >
          चम्पारण मीट
        </text>

        {/* 6. Registered Trademark Symbol (R) on top-right */}
        <g transform="translate(425, 118)">
          <circle cx="0" cy="0" r="30" fill="#FAF5ED" stroke="#000000" strokeWidth="4" />
          <text
            x="0"
            y="12"
            textAnchor="middle"
            fill="#000000"
            fontSize="36"
            fontWeight="900"
            fontFamily="system-ui, -apple-system, 'Arial Black', sans-serif"
          >
            R
          </text>
        </g>
      </svg>
    </div>
  );
}
