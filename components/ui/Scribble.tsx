import type { ReactNode } from "react";

type Variant = "single" | "double" | "triple";

/**
 * Marker-pen underline used beneath accent words in section headings.
 * Sits absolutely under the text so it never affects line height.
 */
const PATHS: Record<Variant, { d: string; w: number; h: number }[]> = {
  single: [{ d: "M2 22C36 10 128 -9 222 10", w: 224, h: 24 }],
  double: [
    { d: "M2 12.8C25 7.2 94 -2.5 184 4.3", w: 186, h: 26 },
    { d: "M38 23.7C55 18.9 105 9.7 170.6 11.6", w: 186, h: 26 },
  ],
  triple: [
    { d: "M2 17.4C18 10.1 70 0.9 142.6 4.3", w: 145, h: 29 },
    { d: "M41.4 20.9C53.9 17.1 91.8 9.1 142.6 4.5", w: 145, h: 29 },
    { d: "M41.8 20.9C59.2 17.6 67 13.8 132.8 16.2", w: 145, h: 29 },
  ],
};

export function Scribble({
  children,
  variant = "double",
  className = "",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const paths = PATHS[variant];
  const { w, h } = paths[0];

  return (
    <span className={`text-site-yellow-light relative inline-block ${className}`}>
      {children}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-[92%] left-0 w-full"
        width={w}
        height={h}
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((p, i) => (
          <path
            key={i}
            d={p.d}
            stroke="#EBE57A"
            strokeWidth={4}
            strokeLinecap="round"
          />
        ))}
      </svg>
    </span>
  );
}
