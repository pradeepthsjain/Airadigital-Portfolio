# Vireo — creator commerce landing page

A production-ready Next.js recreation of a modern dark-themed creator-marketing
landing page. Every piece of branding, copy and imagery is **placeholder
content** — no third-party assets, logos or photography are included.

## Stack

- **Next.js 15** (App Router, React 19, fully static output)
- **Tailwind CSS v4** — design tokens declared with `@theme` in `app/globals.css`
- **Poppins** via `next/font/google` (self-hosted, no render-blocking request)
- **Zero runtime dependencies** beyond React/Next — carousels, marquees, flip
  cards and scroll effects are all hand-rolled CSS + a little state

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
npm run typecheck
```

## Rebranding

All content lives in [`lib/site.ts`](lib/site.ts) — brand name, nav, headlines,
stats, case studies, creators, FAQs, founder bio, footer links. Change that one
file and the whole page follows. Colours live in the `@theme` block at the top
of [`app/globals.css`](app/globals.css).

## Imagery

There are no binary image assets. Everything visual is generated SVG:

| Component | Purpose |
|---|---|
| `components/graphics/Portrait.tsx` | Deterministic stylised creator/founder portraits from a numeric seed |
| `components/graphics/Artwork.tsx` | Feature UI mockups, case-study scenes, insight vignettes |
| `components/graphics/PhoneMockup.tsx` | Hero device with an auto-scrolling reel feed and floating likes |
| `components/graphics/BrandMark.tsx` | Placeholder partner logos for the marquee |
| `components/graphics/Logo.tsx` | Brand wordmark |

To swap in real photography, replace `<Portrait />` / `<Artwork />` with
`next/image` and keep the surrounding aspect-ratio wrappers.

## Section map

| Section | Signature behaviour |
|---|---|
| `Navbar` | Sticky pill that hides on scroll-down and returns on scroll-up; full-screen mobile drawer with scroll lock |
| `Hero` | Staggered fade-up copy beside a floating device playing a looping reel column |
| `TrustedBy` | Seamless 20s CSS marquee (two identical tracks), edge fades, pauses on hover |
| `Stats` | Four tiles that invert to yellow on hover |
| `PowerStack` | **Sticky stacking cards** — each pins 20px deeper than the last so earlier cards stay as visible ledges |
| `CaseStudies` | Cards lift on hover |
| `Habits` | **Scroll-driven timeline** — desktop pins the section and converts scroll into slide progress along a horizontal axis; mobile renders a vertical timeline |
| `Creators` | **3D flip cards** in a mosaic grid; horizontal snap rail on mobile |
| `Faqs` | Center-mode carousel — active card scales, tilts 2° and turns yellow; autoplay, arrows, dots, swipe, and an answer panel |
| `Founder` | Two-column bio |
| `FinalCta` | Full-bleed animated gradient mesh with an overhanging pill button |
| `Footer` | Three-column layout with smooth-scroll section links |

## Accessibility & performance

- Skip-to-content link, focus-visible outlines, `aria-label`s on icon-only
  controls, and keyboard-reachable flip cards (focus flips them too)
- Full `prefers-reduced-motion` support — animations and smooth scrolling are
  disabled, and revealed content renders immediately
- Scroll handlers are passive and rAF-throttled; reveal observers unobserve
  after firing
- Statically prerendered, ~112 kB first-load JS, no external network requests
- Security headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`) set in
  `next.config.ts`

## Notes

The layout is a visual homage built from scratch. Verified at 390px, 768px,
1024px, 1280px and 1440px with no horizontal overflow.
