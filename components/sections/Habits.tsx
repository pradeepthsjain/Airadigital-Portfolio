"use client";

import { useEffect, useRef, useState } from "react";
import Artwork from "@/components/graphics/Artwork";
import { HABIT_ICONS } from "@/components/graphics/Icons";
import Reveal from "@/components/ui/Reveal";
import { Scribble } from "@/components/ui/Scribble";
import { habits, habitsSection } from "@/lib/site";

const GRADIENTS = {
  cyan: "from-site-cyan via-site-cyan/40 to-transparent",
  orange: "from-site-orange via-site-orange/40 to-transparent",
  pink: "from-site-pink via-site-pink/40 to-transparent",
} as const;

function Heading({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`mx-auto w-full text-center ${compact ? "max-w-xs" : "max-w-5xl"}`}>
      <h2 className="ut-section-head">
        {habitsSection.headBefore} <Scribble variant="single">{habitsSection.headAccent}</Scribble>{" "}
        {habitsSection.headAfter}
      </h2>
      <h3 className="ut-section-sub-head text-white/85">{habitsSection.sub}</h3>
    </div>
  );
}

/**
 * Desktop: the section is `habits.length` viewports tall and its contents are
 * pinned, so vertical scroll is converted into slide progress along a
 * horizontal axis. Mobile falls back to a plain vertical timeline.
 */
export default function Habits() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;

      // 0 at the moment the section pins, 1 when it releases.
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      setProgress(p);
      setActive(Math.min(habits.length - 1, Math.floor(p * habits.length)));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* ---------------------------------------------------- desktop */}
      <section
        ref={trackRef}
        className="bg-site-theme-purple relative hidden xl:block"
        style={{ height: `${habits.length * 100}vh` }}
        aria-label="Why creator marketing works"
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16 pb-10">
          <Heading />

          <div className="relative mt-16 w-full">
            {/* horizontal axis + progress fill */}
            <div className="relative border-b-2 border-white/30">
              <div
                className="bg-site-yellow absolute bottom-[-2px] left-0 h-0.5 transition-[width] duration-300 ease-out"
                style={{ width: `${progress * 100}%` }}
              />

              <div className="ut-container relative flex h-[42vh] w-[75%] items-center border-l-2 border-white/30">
                <div className="bg-site-white absolute -top-0.5 -left-1.5 h-2.5 w-2.5 rounded-full" />

                <div className="relative flex min-h-[300px] w-full items-center">
                  {habits.map((h, i) => (
                    <div
                      key={h.title}
                      aria-hidden={i !== active}
                      className={`absolute inset-0 flex min-w-full items-center transition-opacity duration-700 ease-in-out ${
                        i === active ? "opacity-100" : "pointer-events-none opacity-0"
                      }`}
                    >
                      <div className="w-full flex-1 pr-16 pl-8">
                        <p className="text-4xl leading-tight font-medium">{h.title}</p>
                        <p className="mt-4 max-w-xl text-base font-medium text-white/85">{h.body}</p>
                      </div>
                      <div
                        className={`flex h-full w-[40%] items-center justify-center rounded-t-4xl bg-gradient-to-b ${GRADIENTS[h.tone]}`}
                      >
                        <Artwork variant={h.art} className="h-full max-h-[38vh] w-full p-4" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* milestone dots */}
                <div className="absolute -bottom-5 left-1/2 w-full -translate-x-1/2">
                  <div className="flex w-full justify-between gap-10">
                    {habits.map((h, i) => {
                      const Icon = HABIT_ICONS[h.icon];
                      const done = i <= active;
                      return (
                        <div
                          key={h.title}
                          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white transition-all duration-300 ${
                            done ? "bg-site-orange scale-110" : "bg-site-theme-purple scale-100"
                          }`}
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- mobile */}
      <section className="bg-site-purple block pt-20 pb-16 xl:hidden">
        <Reveal>
          <Heading compact />
        </Reveal>

        <div className="relative mx-auto mt-10 w-[85%] border-l-2 border-white">
          {habits.map((h, i) => {
            const Icon = HABIT_ICONS[h.icon];
            return (
              <Reveal key={h.title} delay={i * 80}>
                <div className="relative pb-8 pl-8">
                  <div className="bg-site-orange absolute top-0 -left-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-lg font-medium">{h.title}</p>
                  <p className="mt-2 text-sm leading-snug font-medium text-white/85">{h.body}</p>
                  <div className={`mt-4 w-full rounded-t-3xl bg-gradient-to-b ${GRADIENTS[h.tone]}`}>
                    <Artwork variant={h.art} className="aspect-[4/5] w-full p-4" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="bg-site-white mt-0 h-0.5 w-full" />
      </section>
    </>
  );
}
