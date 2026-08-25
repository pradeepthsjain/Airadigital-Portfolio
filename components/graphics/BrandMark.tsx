/**
 * Placeholder partner logo tile for the "Trusted By" marquee.
 * Each tile is a small SVG lockup — a mark plus a wordmark — tinted with the
 * partner's accent colour so the strip reads as a row of distinct brands.
 */

const MARKS = [
  // rings
  (c: string) => (
    <>
      <circle cx="16" cy="16" r="9" stroke={c} strokeWidth="3" fill="none" />
      <circle cx="24" cy="16" r="9" stroke={c} strokeWidth="3" fill="none" opacity="0.55" />
    </>
  ),
  // chevron
  (c: string) => <path d="M10 24 20 8l10 16-10-6z" fill={c} />,
  // squares
  (c: string) => (
    <>
      <rect x="8" y="8" width="11" height="11" rx="3" fill={c} />
      <rect x="21" y="13" width="11" height="11" rx="3" fill={c} opacity="0.55" />
    </>
  ),
  // arc
  (c: string) => (
    <path d="M9 25a11 11 0 0 1 22 0" stroke={c} strokeWidth="3.5" fill="none" strokeLinecap="round" />
  ),
  // star burst
  (c: string) => (
    <path d="M20 6l3.2 9.8L33 19l-9.8 3.2L20 32l-3.2-9.8L7 19l9.8-3.2z" fill={c} />
  ),
];

export default function BrandMark({
  name,
  accent,
  index,
}: {
  name: string;
  accent: string;
  index: number;
}) {
  const mark = MARKS[index % MARKS.length];

  return (
    <div className="flex h-14 items-center gap-3 rounded-lg bg-white/[0.04] px-5 lg:h-20 lg:px-7">
      <svg aria-hidden="true" viewBox="0 0 40 40" className="h-7 w-7 shrink-0 lg:h-9 lg:w-9">
        {mark(accent)}
      </svg>
      <span
        className="text-base font-semibold tracking-tight whitespace-nowrap lg:text-xl"
        style={{ color: accent }}
      >
        {name}
      </span>
    </div>
  );
}
