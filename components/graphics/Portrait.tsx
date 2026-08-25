/**
 * Deterministic placeholder portrait.
 *
 * Renders a stylised duotone "photo" entirely as SVG from a numeric seed, so
 * the creator grid has no external image dependencies, no layout shift and no
 * broken links. Swap this component for <Image /> when real photography lands.
 */

type Palette = "peach" | "pink" | "violet";

const PALETTES: Record<Palette, { from: string; to: string; skin: string; hair: string; accent: string }> = {
  peach: { from: "#F8B7A0", to: "#EF6535", skin: "#F7D2BC", hair: "#3A2118", accent: "#FFE9DD" },
  pink: { from: "#F273A8", to: "#ED3D86", skin: "#F9D9C7", hair: "#2C1226", accent: "#FFE2EE" },
  violet: { from: "#AA93D2", to: "#6643A3", skin: "#EFCDB6", hair: "#241436", accent: "#EBE2FA" },
};

/** Four hair silhouettes, picked by seed so faces don't all look identical. */
const HAIR = [
  // long, centre part
  "M96 150c0-34 24-58 54-58s54 24 54 58c0 26-6 44-6 74 0 18 8 34 8 34h-30c6-28 4-52 4-70 0-16-14-24-30-24s-30 8-30 24c0 18-2 42 4 70h-30s8-16 8-34c0-30-6-48-6-74z",
  // short crop
  "M98 148c0-32 22-56 52-56s52 24 52 56c0 10-2 18-4 24-4-20-20-34-48-34s-44 14-48 34c-2-6-4-14-4-24z",
  // bun
  "M150 74c12 0 20 8 20 18s-8 18-20 18-20-8-20-18 8-18 20-18zm-52 76c0-32 22-56 52-56s52 24 52 56c0 10-2 18-4 24-4-20-20-34-48-34s-44 14-48 34c-2-6-4-14-4-24z",
  // curly volume
  "M150 88c34 0 58 26 58 60 0 14-4 26-10 34-2-24-20-40-48-40s-46 16-48 40c-6-8-10-20-10-34 0-34 24-60 58-60z",
];

export default function Portrait({
  seed,
  palette = "peach",
  className = "",
  alt,
}: {
  seed: number;
  palette?: Palette;
  className?: string;
  alt: string;
}) {
  const p = PALETTES[palette];
  const id = `pt${seed}`;
  const hair = HAIR[seed % HAIR.length];
  // Nudge the subject a little so the crop reads as a real photograph.
  const shift = ((seed % 5) - 2) * 5;
  const blob = (seed % 3) * 22;

  return (
    <svg
      role="img"
      aria-label={alt}
      className={className}
      viewBox="0 0 300 450"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </linearGradient>
        <linearGradient id={`${id}shade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.32" />
        </linearGradient>
        <filter id={`${id}blur`} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
        <clipPath id={`${id}clip`}>
          <rect width="300" height="450" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${id}clip)`}>
        <rect width="300" height="450" fill={`url(#${id}bg)`} />

        {/* soft studio lighting */}
        <circle cx={70 + blob} cy={110} r="90" fill={p.accent} opacity="0.35" filter={`url(#${id}blur)`} />
        <circle cx={250 - blob} cy={330} r="80" fill="#fff" opacity="0.18" filter={`url(#${id}blur)`} />

        <g transform={`translate(${shift} 0)`}>
          {/* shoulders / torso */}
          <path
            d="M150 268c62 0 104 44 112 100 4 28 6 60 6 82H32c0-22 2-54 6-82 8-56 50-100 112-100z"
            fill={p.accent}
            opacity="0.92"
          />
          <path
            d="M150 268c22 0 42 6 58 16-14 26-34 40-58 40s-44-14-58-40c16-10 36-16 58-16z"
            fill="#fff"
            opacity="0.55"
          />
          {/* neck */}
          <path d="M128 218h44v52c0 12-10 20-22 20s-22-8-22-20z" fill={p.skin} />
          <path d="M128 234c14 10 30 10 44 0v14c-14 10-30 10-44 0z" fill="#000" opacity="0.12" />
          {/* face */}
          <ellipse cx="150" cy="176" rx="46" ry="54" fill={p.skin} />
          {/* hair */}
          <path d={hair} fill={p.hair} />
          {/* features, kept minimal and abstract */}
          <ellipse cx="133" cy="172" rx="4.5" ry="5.5" fill={p.hair} opacity="0.85" />
          <ellipse cx="167" cy="172" rx="4.5" ry="5.5" fill={p.hair} opacity="0.85" />
          <path d="M139 198c7 6 15 6 22 0" stroke={p.hair} strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.7" />
        </g>

        <rect width="300" height="450" fill={`url(#${id}shade)`} />
      </g>
    </svg>
  );
}
