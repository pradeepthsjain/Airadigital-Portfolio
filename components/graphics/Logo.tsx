import { site } from "@/lib/site";

/** Placeholder wordmark: a leaf-ish glyph plus the brand name. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-[1.15em] w-[1.15em] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 2c8 0 14 6 14 14S24 30 16 30 2 24 2 16 8 2 16 2z"
          fill="currentColor"
          opacity="0.14"
        />
        <path
          d="M9 22c0-8 5-13 14-14-1 9-6 14-14 14z"
          fill="currentColor"
        />
        <path
          d="M9 23c3-6 7-9 13-11"
          stroke="var(--color-site-theme-black)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      <span className="text-[1.05em] leading-none font-bold tracking-tight">{site.name}</span>
    </span>
  );
}
