/**
 * Placeholder artwork.
 *
 * The original design pairs every feature / case study / insight with a piece
 * of product photography or a UI screenshot. These SVG stand-ins keep the same
 * silhouettes and colour blocking so the layout reads correctly, with no binary
 * assets to ship. Each variant is addressed by name from `lib/site.ts`.
 */

type Variant =
  | "discovery"
  | "workflow"
  | "analytics"
  | "storefront"
  | "connection"
  | "roi"
  | "growth";

const INK = "#0a0a0a";

/* ---------------------------------------------------------------- feature UI */

function Discovery() {
  return (
    <svg viewBox="0 0 340 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="26" y="18" width="288" height="264" rx="22" fill="#fff" opacity="0.96" />
      {/* search field */}
      <rect x="46" y="40" width="248" height="34" rx="17" fill={INK} opacity="0.07" />
      <circle cx="68" cy="57" r="7" stroke={INK} strokeWidth="2.4" fill="none" opacity="0.55" />
      <path d="m74 63 5 5" stroke={INK} strokeWidth="2.4" strokeLinecap="round" opacity="0.55" />
      <rect x="88" y="52" width="96" height="9" rx="4.5" fill={INK} opacity="0.22" />
      {/* filter chips */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={46 + i * 62} y={88} width={54} height={20} rx={10} fill="#E01569" opacity={i === 0 ? 0.9 : 0.18} />
      ))}
      {/* creator rows */}
      {[0, 1, 2].map((i) => {
        const y = 124 + i * 54;
        return (
          <g key={i}>
            <rect x="46" y={y} width="248" height="44" rx="14" fill={INK} opacity="0.05" />
            <circle cx="70" cy={y + 22} r="15" fill="#E01569" opacity={0.75 - i * 0.18} />
            <rect x="94" y={y + 12} width={104 - i * 16} height="8" rx="4" fill={INK} opacity="0.35" />
            <rect x="94" y={y + 26} width={66} height="7" rx="3.5" fill={INK} opacity="0.18" />
            <rect x={244} y={y + 15} width="36" height="16" rx="8" fill="#0a0a0a" opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}

function Workflow() {
  return (
    <svg viewBox="0 0 340 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="20" y="18" width="300" height="264" rx="22" fill="#fff" opacity="0.96" />
      {[0, 1, 2].map((col) => (
        <g key={col}>
          <rect x={38 + col * 94} y="40" width="78" height="224" rx="16" fill={INK} opacity="0.05" />
          <rect x={50 + col * 94} y="54" width={40 - col * 6} height="8" rx="4" fill={INK} opacity="0.3" />
          {Array.from({ length: 3 - col }).map((_, i) => (
            <g key={i}>
              <rect
                x={50 + col * 94}
                y={76 + i * 56}
                width="54"
                height="44"
                rx="11"
                fill="#52B1B7"
                opacity={0.9 - i * 0.22}
              />
              <rect x={58 + col * 94} y={86 + i * 56} width="30" height="6" rx="3" fill="#fff" opacity="0.8" />
              <rect x={58 + col * 94} y={98 + i * 56} width="20" height="6" rx="3" fill="#fff" opacity="0.5" />
            </g>
          ))}
        </g>
      ))}
      {/* moving card */}
      <g transform="translate(0 4)">
        <rect x="132" y="188" width="54" height="44" rx="11" fill="#0a0a0a" opacity="0.9" />
        <rect x="140" y="198" width="30" height="6" rx="3" fill="#E2D939" />
        <rect x="140" y="210" width="20" height="6" rx="3" fill="#fff" opacity="0.4" />
      </g>
    </svg>
  );
}

function Analytics() {
  const bars = [38, 62, 46, 88, 70, 108, 96];
  return (
    <svg viewBox="0 0 340 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="24" y="18" width="292" height="264" rx="22" fill="#fff" opacity="0.96" />
      {/* KPI tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={44 + i * 88} y="40" width="76" height="48" rx="13" fill={INK} opacity="0.05" />
          <rect x={56 + i * 88} y="54" width={38 - i * 6} height="10" rx="5" fill="#DE4612" opacity="0.85" />
          <rect x={56 + i * 88} y="70" width="46" height="6" rx="3" fill={INK} opacity="0.2" />
        </g>
      ))}
      {/* bar chart */}
      <rect x="44" y="102" width="252" height="160" rx="16" fill={INK} opacity="0.04" />
      {bars.map((h, i) => (
        <rect
          key={i}
          x={64 + i * 32}
          y={238 - h}
          width="18"
          height={h}
          rx="7"
          fill="#DE4612"
          opacity={0.35 + i * 0.09}
        />
      ))}
      <path
        d="M73 200 105 176 137 190 169 150 201 164 233 122 265 134"
        stroke={INK}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <line x1="56" y1="242" x2="284" y2="242" stroke={INK} strokeWidth="2" opacity="0.15" />
    </svg>
  );
}

function Storefront() {
  return (
    <svg viewBox="0 0 260 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="52" y="34" width="156" height="252" rx="26" fill="#0a0a0a" opacity="0.85" />
      <rect x="62" y="44" width="136" height="232" rx="19" fill="#fff" opacity="0.94" />
      <rect x="62" y="44" width="136" height="120" rx="19" fill="#52B1B7" opacity="0.6" />
      <circle cx="130" cy="98" r="26" fill="#fff" opacity="0.8" />
      <path d="M122 88v20l18-10z" fill="#0a0a0a" opacity="0.55" />
      {[0, 1].map((i) => (
        <g key={i}>
          <rect x="76" y={182 + i * 44} width="108" height="34" rx="11" fill="#0a0a0a" opacity="0.07" />
          <circle cx="94" cy={199 + i * 44} r="11" fill="#52B1B7" opacity={0.8 - i * 0.3} />
          <rect x="112" y={193 + i * 44} width={54 - i * 16} height="7" rx="3.5" fill="#0a0a0a" opacity="0.3" />
          <rect x="112" y={204 + i * 44} width="34" height="6" rx="3" fill="#0a0a0a" opacity="0.16" />
        </g>
      ))}
      <circle cx="212" cy="72" r="16" fill="#E2D939" />
      <path d="M206 72h12M212 66v12" stroke="#0a0a0a" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function Connection() {
  return (
    <svg viewBox="0 0 260 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="88" cy="128" r="46" fill="#DE4612" opacity="0.75" />
      <circle cx="172" cy="128" r="46" fill="#F5B8A3" opacity="0.85" />
      <circle cx="130" cy="128" r="30" fill="#fff" opacity="0.55" />
      <path
        d="M130 232c-16-16-34-26-34-44a17 17 0 0 1 34-8 17 17 0 0 1 34 8c0 18-18 28-34 44z"
        fill="#fff"
        opacity="0.9"
      />
      {[70, 130, 190].map((x, i) => (
        <rect key={i} x={x - 22} y={264} width="44" height="10" rx="5" fill="#fff" opacity={0.5 - i * 0.12} />
      ))}
    </svg>
  );
}

function Roi() {
  const bars = [40, 66, 54, 92, 120];
  return (
    <svg viewBox="0 0 260 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="30" y="40" width="200" height="220" rx="22" fill="#fff" opacity="0.14" />
      {bars.map((h, i) => (
        <rect key={i} x={54 + i * 32} y={236 - h} width="20" height={h} rx="9" fill="#E01569" opacity={0.45 + i * 0.13} />
      ))}
      <path
        d="M64 200 96 178 128 188 160 140 192 106"
        stroke="#fff"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="192" cy="106" r="9" fill="#E2D939" />
      <text x="130" y="292" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" opacity="0.9">
        98%
      </text>
    </svg>
  );
}

function Growth() {
  return (
    <svg viewBox="0 0 260 320" className="h-full w-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M40 250h180" stroke="#fff" strokeWidth="3" opacity="0.35" strokeLinecap="round" />
      <path
        d="M48 236c22-6 34-40 56-64s44-30 62-58"
        stroke="#52B1B7"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />
      <path d="M156 108h34v34" stroke="#52B1B7" strokeWidth="6" strokeLinecap="round" fill="none" />
      {[0, 1, 2, 3].map((i) => (
        <circle key={i} cx={68 + i * 42} cy={218 - i * 34} r="10" fill="#fff" opacity={0.4 + i * 0.18} />
      ))}
      <rect x="46" y="44" width="86" height="34" rx="17" fill="#E2D939" />
      <text x="89" y="67" textAnchor="middle" fontSize="17" fontWeight="700" fill="#0a0a0a">
        +214%
      </text>
    </svg>
  );
}

const VARIANTS: Record<Variant, () => React.ReactElement> = {
  discovery: Discovery,
  workflow: Workflow,
  analytics: Analytics,
  storefront: Storefront,
  connection: Connection,
  roi: Roi,
  growth: Growth,
};

export default function Artwork({ variant, className = "" }: { variant: Variant; className?: string }) {
  const Component = VARIANTS[variant];
  return (
    <div className={className}>
      <Component />
    </div>
  );
}
