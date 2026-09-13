import React from 'react';

/**
 * Dhanvi Techno Engineering Private Limited - Official Brand Logo
 * Faithfully vector-rendered from the authentic company visiting card.
 * Features:
 * - Tower crane on top of capital 'D'
 * - High-rise building skyline silhouettes inside the 'D' counter
 * - Stylized "Dhanvi" with angled orange accent on 'i'
 * - Sweeping dynamic orange swoosh/arc underneath
 * - "T E C H N O" in vibrant orange brand color (#F26522)
 * - "ENGINEERING PRIVATE LIMITED"
 * - Official tagline "BUILDING DREAMS, CREATING FUTURES"
 */
export default function Logo({ 
  variant = "dark", 
  size = "md", 
  showTagline = true, 
  className = "" 
}) {
  // Color configuration based on dark/light background variant
  const isLight = variant === "light";
  const mainTextColor = isLight ? "#0A1018" : "#FFFFFF";
  const secondaryTextColor = isLight ? "#1E293B" : "#CBD5E1";
  const mutedTextColor = isLight ? "#64748B" : "#94A3B8";
  const craneColor = isLight ? "#0F172A" : "#E2E8F0";
  const orange = "#F26522";

  // Scale map
  const scaleMap = {
    xs: "h-8",
    sm: "h-11",
    md: "h-14",
    lg: "h-20",
    xl: "h-28"
  };

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg 
        viewBox="0 0 420 160" 
        className={`${scaleMap[size] || "h-14"} w-auto transition-transform duration-300`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Dhanvi Techno Engineering Private Limited Logo"
      >
        <defs>
          <linearGradient id="craneGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={craneColor} />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <linearGradient id="orangeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A38" />
            <stop offset="100%" stopColor="#F26522" />
          </linearGradient>
        </defs>

        {/* --- TOWER CRANE ATOP THE D --- */}
        <g id="tower-crane" transform="translate(18, 6)">
          {/* Vertical Mast Truss */}
          <rect x="18" y="16" width="3.5" height="24" fill={craneColor} />
          {/* Mast horizontal & cross bracing */}
          <line x1="15" y1="22" x2="24" y2="22" stroke={craneColor} strokeWidth="1.2" />
          <line x1="15" y1="28" x2="24" y2="28" stroke={craneColor} strokeWidth="1.2" />
          <line x1="15" y1="34" x2="24" y2="34" stroke={craneColor} strokeWidth="1.2" />
          <line x1="15" y1="22" x2="24" y2="28" stroke={craneColor} strokeWidth="0.8" />
          <line x1="24" y1="22" x2="15" y2="28" stroke={craneColor} strokeWidth="0.8" />
          <line x1="15" y1="28" x2="24" y2="34" stroke={craneColor} strokeWidth="0.8" />
          <line x1="24" y1="28" x2="15" y2="34" stroke={craneColor} strokeWidth="0.8" />

          {/* Operator Cabin / Apex Tower */}
          <polygon points="17,16 23,16 20,4" fill={craneColor} />
          
          {/* Horizontal Jib & Counter-Jib */}
          <line x1="-12" y1="12" x2="72" y2="12" stroke={craneColor} strokeWidth="2.8" strokeLinecap="round" />
          <line x1="-10" y1="15.5" x2="68" y2="15.5" stroke={craneColor} strokeWidth="1" />
          
          {/* Jib lattice diagonal struts */}
          <line x1="22" y1="12" x2="28" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="28" y1="12" x2="34" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="34" y1="12" x2="40" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="40" y1="12" x2="46" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="46" y1="12" x2="52" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="52" y1="12" x2="58" y2="15.5" stroke={craneColor} strokeWidth="0.8" />
          <line x1="58" y1="12" x2="64" y2="15.5" stroke={craneColor} strokeWidth="0.8" />

          {/* Tie Cables from Apex */}
          <line x1="20" y1="4" x2="-8" y2="12" stroke={craneColor} strokeWidth="1" strokeDasharray="1 0" />
          <line x1="20" y1="4" x2="48" y2="12" stroke={craneColor} strokeWidth="1" />
          <line x1="20" y1="4" x2="66" y2="12" stroke={craneColor} strokeWidth="1" />

          {/* Counterweight Block on left */}
          <rect x="-10" y="11" width="7" height="6" rx="0.5" fill={orange} />

          {/* Trolley and Hoist Cable with Hook on right */}
          <rect x="62" y="11.5" width="4" height="2" fill={craneColor} />
          <line x1="64" y1="13.5" x2="64" y2="28" stroke={craneColor} strokeWidth="1" />
          <path d="M64 28 C64 31 61.5 32 61 30" stroke={orange} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* --- CAPITAL 'D' WITH INTEGRATED BUILDING TOWERS --- */}
        <g id="letter-D-buildings" transform="translate(18, 42)">
          {/* Main D Outer Contour */}
          <path 
            d="M8 0 H36 C55 0 66 12 66 28.5 C66 45 55 57 36 57 H8 V0 Z" 
            fill={mainTextColor} 
          />

          {/* Building Silhouettes cut out inside the counter of D */}
          {/* Left Tower */}
          <rect x="20" y="18" width="6" height="34" fill={isLight ? "#FFFFFF" : "#05080D"} />
          <line x1="22" y1="21" x2="24" y2="21" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="25" x2="24" y2="25" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="29" x2="24" y2="29" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="33" x2="24" y2="33" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="37" x2="24" y2="37" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="41" x2="24" y2="41" stroke={orange} strokeWidth="1" />
          <line x1="22" y1="45" x2="24" y2="45" stroke={orange} strokeWidth="1" />

          {/* Middle High Tower with Spire */}
          <polygon points="31,8 33,8 32,4" fill={orange} />
          <rect x="29" y="8" width="6.5" height="44" fill={isLight ? "#FFFFFF" : "#05080D"} />
          <line x1="31" y1="12" x2="33.5" y2="12" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="16" x2="33.5" y2="16" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="20" x2="33.5" y2="20" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="24" x2="33.5" y2="24" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="28" x2="33.5" y2="28" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="32" x2="33.5" y2="32" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="36" x2="33.5" y2="36" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="40" x2="33.5" y2="40" stroke={secondaryTextColor} strokeWidth="1" />
          <line x1="31" y1="44" x2="33.5" y2="44" stroke={secondaryTextColor} strokeWidth="1" />

          {/* Right Tower */}
          <rect x="38" y="14" width="6.5" height="38" fill={isLight ? "#FFFFFF" : "#05080D"} />
          <line x1="40" y1="18" x2="42.5" y2="18" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="22" x2="42.5" y2="22" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="26" x2="42.5" y2="26" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="30" x2="42.5" y2="30" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="34" x2="42.5" y2="34" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="38" x2="42.5" y2="38" stroke={orange} strokeWidth="1" />
          <line x1="40" y1="42" x2="42.5" y2="42" stroke={orange} strokeWidth="1" />

          {/* Outer Curved Edge cut of D */}
          <path 
            d="M47 12 C52 14 56 20 56 28.5 C56 37 52 43 47 45 V12 Z" 
            fill={isLight ? "#FFFFFF" : "#05080D"} 
          />
        </g>

        {/* --- "hanvi" WORDMARK --- */}
        <text 
          x="92" 
          y="95" 
          fill={mainTextColor} 
          fontFamily="'Syne', 'Outfit', sans-serif" 
          fontWeight="800" 
          fontSize="50" 
          letterSpacing="-0.5"
        >
          hanv
        </text>
        {/* The 'i' stem and diamond orange tittle */}
        <text 
          x="214" 
          y="95" 
          fill={mainTextColor} 
          fontFamily="'Syne', 'Outfit', sans-serif" 
          fontWeight="800" 
          fontSize="50"
        >
          ı
        </text>
        {/* Stylized Angled Orange Accent/Diamond for 'i' */}
        <polygon points="216,56 226,50 223,60 213,66" fill="url(#orangeGlow)" />

        {/* --- SWEEPING DYNAMIC ORANGE ARC UNDER "DHANVI" --- */}
        <path 
          d="M10 102 C 22 108, 48 112, 85 110 C 135 107, 185 96, 235 94 C 238 94, 236 97, 232 98 C 185 101, 130 113, 80 115 C 38 117, 14 110, 8 104 Z" 
          fill="url(#orangeGlow)" 
        />

        {/* --- "T E C H N O" ORANGE TRACKED CAPS --- */}
        <text 
          x="125" 
          y="123" 
          fill="url(#orangeGlow)" 
          fontFamily="'Outfit', sans-serif" 
          fontWeight="800" 
          fontSize="14" 
          letterSpacing="9"
        >
          TECHNO
        </text>

        {/* --- "ENGINEERING PRIVATE LIMITED" --- */}
        <text 
          x="14" 
          y="139" 
          fill={secondaryTextColor} 
          fontFamily="'Outfit', sans-serif" 
          fontWeight="700" 
          fontSize="12.5" 
          letterSpacing="1.2"
        >
          ENGINEERING PRIVATE LIMITED
        </text>

        {/* --- TAGLINE: "— BUILDING DREAMS, CREATING FUTURES —" --- */}
        {showTagline && (
          <g id="tagline-group">
            <line x1="24" y1="151" x2="68" y2="151" stroke={orange} strokeWidth="1.2" />
            <text 
              x="76" 
              y="154" 
              fill={mutedTextColor} 
              fontFamily="'Outfit', sans-serif" 
              fontWeight="600" 
              fontSize="8.5" 
              letterSpacing="1.8"
            >
              BUILDING DREAMS, CREATING FUTURES
            </text>
            <line x1="300" y1="151" x2="344" y2="151" stroke={orange} strokeWidth="1.2" />
          </g>
        )}
      </svg>
    </div>
  );
}
