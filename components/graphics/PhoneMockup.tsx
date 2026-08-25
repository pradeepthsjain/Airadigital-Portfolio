/**
 * Hero phone mockup.
 *
 * Replaces the original's real device photo + looping video with a pure-CSS
 * device frame containing an infinitely scrolling column of faux reels, plus
 * the floating "likes" that drift up the left edge.
 */

const REELS = [
  { from: "#E01569", to: "#F273A8", label: "Unboxing" },
  { from: "#52B1B7", to: "#B7DEE1", label: "GRWM" },
  { from: "#DE4612", to: "#F5B8A3", label: "Haul" },
  { from: "#4F347F", to: "#AA93D2", label: "Review" },
];

function Reel({ from, to, label, index }: { from: string; to: string; label: string; index: number }) {
  return (
    <div
      className="relative h-[12.5%] w-full shrink-0 overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
    >
      {/* abstract subject */}
      <svg viewBox="0 0 200 420" className="h-full w-full" aria-hidden="true">
        <circle cx={60 + index * 24} cy="96" r="70" fill="#fff" opacity="0.16" />
        <ellipse cx="100" cy="196" rx="42" ry="48" fill="#fff" opacity="0.34" />
        <path d="M100 246c46 0 78 34 84 82H16c6-48 38-82 84-82z" fill="#fff" opacity="0.28" />
        <rect x="18" y="18" width="58" height="9" rx="4.5" fill="#fff" opacity="0.5" />
      </svg>

      {/* reel chrome */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/55 to-transparent p-3">
        <div className="min-w-0">
          <p className="truncate text-[10px] font-semibold text-white">@creator_{index + 1}</p>
          <p className="truncate text-[9px] text-white/75">{label} · 2.4M views</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-white/90">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-8-5.2-8-10.4A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 3.6C20 15.8 12 21 12 21z" />
          </svg>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M4 4h16v12H9l-5 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function PhoneMockup() {
  // Duplicated once so the -50% translate loop is seamless.
  const loop = [...REELS, ...REELS];

  return (
    <div className="relative flex h-[455px] w-[216px] items-center justify-center">
      {/* ground shadow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-2 h-24 rounded-full blur-2xl"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,.75), transparent 70%)" }}
      />
      {/* glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(226,217,57,.22), transparent 65%)" }}
      />

      <div className="animate-float relative z-10 h-[450px] w-[216px]">
        {/* device frame */}
        <div className="absolute inset-0 rounded-[44px] bg-neutral-900 shadow-[0_0_0_2px_rgba(255,255,255,.14),0_30px_60px_-12px_rgba(0,0,0,.8)]" />
        <div className="absolute inset-[3px] rounded-[41px] bg-black" />

        {/* screen */}
        <div className="absolute inset-2 overflow-hidden rounded-[38px] bg-black">
          {/* Track is 8 screens tall (4 unique reels, duplicated), so a -50%
              translate lands exactly on the start of the second copy. */}
          <div className="animate-reel flex h-[800%] w-full flex-col">
            {loop.map((r, i) => (
              <Reel key={i} {...r} index={i % REELS.length} />
            ))}
          </div>
        </div>

        {/* dynamic island */}
        <div className="absolute top-4 left-1/2 z-20 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />

        {/* floating likes */}
        <div aria-hidden="true" className="pointer-events-none absolute bottom-10 -left-14 z-30 h-40 w-28 lg:-left-20">
          {[0, 1, 2, 3].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 24"
              className="absolute h-7 w-7 text-site-pink drop-shadow-[0_2px_8px_rgba(224,21,105,.6)]"
              style={{
                left: `${8 + i * 22}%`,
                animation: `heart-rise ${4 + i * 0.7}s ease-in-out ${i * 0.9}s infinite`,
              }}
              fill="currentColor"
            >
              <path d="M12 21s-8-5.2-8-10.4A4.6 4.6 0 0 1 12 7a4.6 4.6 0 0 1 8 3.6C20 15.8 12 21 12 21z" />
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}
