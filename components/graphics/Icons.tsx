import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SearchIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

export function BagIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  );
}

export function ChartIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

export function HandshakeIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <path d="m2 12 4-4 5 4 2-2 5 4 4-4" />
      <path d="M6 16h4l2 2 2-2h4" />
    </svg>
  );
}

export function ArrowIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function FlashIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" aria-label="" {...p}>
      <path d="M13.5 2 4 13.2h6L9.5 22 20 10.4h-6.6z" />
    </svg>
  );
}

export function LinkedInIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9z" />
    </svg>
  );
}

export function InstagramIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon(p: Props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...p}>
      <path d="M22.5 7.5a3 3 0 0 0-2.1-2.1C18.6 4.9 12 4.9 12 4.9s-6.6 0-8.4.5A3 3 0 0 0 1.5 7.5C1 9.3 1 12 1 12s0 2.7.5 4.5a3 3 0 0 0 2.1 2.1c1.8.5 8.4.5 8.4.5s6.6 0 8.4-.5a3 3 0 0 0 2.1-2.1C23 14.7 23 12 23 12s0-2.7-.5-4.5zM9.8 15.4V8.6l5.7 3.4z" />
    </svg>
  );
}

export const HABIT_ICONS = {
  search: SearchIcon,
  bag: BagIcon,
  chart: ChartIcon,
  handshake: HandshakeIcon,
};

export const SOCIAL_ICONS = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};
