"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/graphics/Icons";
import Reveal from "@/components/ui/Reveal";
import { faqs, faqSection } from "@/lib/site";

const AUTOPLAY_MS = 4500;

/** Signed distance from `i` to `active` on a ring of `len` items. */
function offsetOf(i: number, active: number, len: number) {
  let d = i - active;
  if (d > len / 2) d -= len;
  if (d < -len / 2) d += len;
  return d;
}

/**
 * Center-mode carousel. The active card is scaled up, tinted yellow and given
 * a 2° tilt (mirroring the original's `.slick-center` treatment); neighbours
 * recede on either side. Clicking a card centres it and reveals its answer.
 */
export default function Faqs() {
  const len = faqs.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visibleSide, setVisibleSide] = useState(2);
  const touchX = useRef<number | null>(null);

  // How many cards flank the centre one — fewer on narrow screens, so the
  // rail never needs more width than the viewport can show.
  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth;
      setVisibleSide(w < 640 ? 0 : w < 1280 ? 1 : 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const move = useCallback((dir: number) => setActive((a) => (a + dir + len) % len), [len]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => move(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, move]);

  // translateX percentages resolve against the card's own width, so a step
  // just over 100% leaves a consistent gutter between neighbours.
  const step = 108;

  return (
    <section id="faqs" className="ut-container relative scroll-mt-24 pt-24 pb-16 xl:pt-32">
      <Reveal>
        <div className="mx-auto w-full max-w-2xl text-center">
          <h2 className="ut-section-head">{faqSection.heading}</h2>
          <h3 className="ut-section-sub-head text-white/85">{faqSection.sub}</h3>
        </div>
      </Reveal>

      <Reveal delay={120}>
        <div
          className="mx-auto mt-10 w-full xl:mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="relative h-48 overflow-hidden select-none"
            role="group"
            aria-roledescription="carousel"
            aria-label="Frequently asked questions"
            onTouchStart={(e) => {
              touchX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
              touchX.current = null;
            }}
          >
            {faqs.map((f, i) => {
              const d = offsetOf(i, active, len);
              const isActive = d === 0;
              const hidden = Math.abs(d) > visibleSide;

              return (
                <button
                  key={f.q}
                  onClick={() => setActive(i)}
                  aria-hidden={hidden}
                  tabIndex={hidden ? -1 : 0}
                  aria-current={isActive}
                  className="absolute top-7 left-1/2 h-32 w-[min(74vw,260px)] cursor-pointer rounded-3xl border border-white/70 p-4 text-left transition-all duration-500 ease-out"
                  style={{
                    transform: `translateX(calc(-50% + ${d * step}%)) scale(${isActive ? 1.06 : 0.92}) rotate(${isActive ? 2 : 0}deg)`,
                    zIndex: 10 - Math.abs(d),
                    opacity: hidden ? 0 : isActive ? 1 : 0.55,
                    pointerEvents: hidden ? "none" : "auto",
                    backgroundColor: isActive ? "var(--color-site-yellow-light)" : "var(--color-site-purple)",
                    color: isActive ? "var(--color-site-black)" : "#fff",
                    fontWeight: 600,
                  }}
                >
                  <span className="text-base">{f.q}</span>
                </button>
              );
            })}
          </div>

          {/* answer panel — the original's cards are clickable but answer-less */}
          <div className="mx-auto mt-6 min-h-[112px] max-w-3xl px-2 text-center">
            {faqs.map((f, i) => (
              <p
                key={f.q}
                aria-hidden={i !== active}
                className={`text-sm leading-relaxed text-white/85 transition-opacity duration-500 md:text-base ${
                  i === active ? "opacity-100" : "hidden opacity-0"
                }`}
              >
                {f.a}
              </p>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => move(-1)}
              aria-label="Previous question"
              className="hover:bg-site-yellow hover:text-site-theme-black flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition-colors"
            >
              <ArrowIcon className="h-5 w-5 rotate-180" />
            </button>

            <div className="flex items-center gap-2">
              {faqs.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setActive(i)}
                  aria-label={`Go to question ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? "bg-site-yellow w-6" : "w-2 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => move(1)}
              aria-label="Next question"
              className="hover:bg-site-yellow hover:text-site-theme-black flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/60 text-white transition-colors"
            >
              <ArrowIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
