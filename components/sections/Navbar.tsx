"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "@/components/graphics/Logo";
import { announcement, nav, site } from "@/lib/site";

/** Smooth-scrolls to a section, accounting for the sticky pill nav. */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 96;
  window.scrollTo({ top, behavior: "smooth" });
}

export function AnnouncementBar() {
  return (
    <div className="bg-site-yellow text-site-theme-black flex items-center justify-center p-4 text-center text-sm font-medium md:text-base">
      <p>
        <span className="font-bold">{announcement.lead}</span> — {announcement.text}{" "}
        <a href={announcement.href} className="font-bold italic underline underline-offset-2">
          {announcement.linkLabel}
        </a>
      </p>
    </div>
  );
}

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // Hide on scroll down, reveal on scroll up — matches the original's
  // translate-y transition on the sticky pill.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 220 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback((id: string) => {
    setOpen(false);
    // Let the drawer close before scrolling so the lock is released first.
    requestAnimationFrame(() => scrollToId(id));
  }, []);

  return (
    <div
      className={`ut-container sticky top-0 z-[999] py-4 transition-transform duration-700 md:py-6 ${
        hidden ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <nav className="bg-site-gray/95 text-site-white relative flex items-center justify-between gap-4 rounded-full p-4 backdrop-blur-md md:py-5 md:pr-6 md:pl-8">
        <a href="#top" className="flex items-center justify-center text-xl md:text-2xl" aria-label={`${site.name} home`}>
          <Logo />
        </a>

        <div className="hidden flex-1 items-center justify-center gap-14 md:flex">
          {nav.map((item) => (
            <button
              key={item.target}
              onClick={() => go(item.target)}
              className="hover:text-site-yellow cursor-pointer font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex flex-row-reverse items-center gap-4">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-6 w-7 cursor-pointer flex-col items-center justify-center space-y-1.5 md:hidden"
          >
            <span
              className={`bg-site-white block h-0.5 w-full rounded transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`bg-site-white block h-0.5 w-full rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`bg-site-white block h-0.5 w-full rounded transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>

          <div className="flex items-center justify-center gap-3 md:gap-4">
            <a
              href={site.creatorUrl}
              className="border-site-yellow text-site-yellow hover:bg-site-yellow hover:text-site-theme-black flex items-center justify-center rounded-full border px-3 py-2 text-xs font-bold whitespace-nowrap transition-colors md:px-8 md:py-4 md:text-sm"
            >
              For Creators
            </a>
            <a
              href={site.bookingUrl}
              className="bg-site-yellow text-site-theme-black animate-heartbeat hidden items-center justify-center rounded-full px-8 py-4 text-sm font-bold whitespace-nowrap xl:flex"
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* mobile drawer */}
      <div
        className={`bg-site-black1/98 fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-lg transition-all duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {nav.map((item) => (
          <button
            key={item.target}
            onClick={() => go(item.target)}
            className="text-2xl font-semibold text-white"
          >
            {item.label}
          </button>
        ))}
        <a
          href={site.bookingUrl}
          onClick={() => setOpen(false)}
          className="bg-site-yellow text-site-theme-black mt-4 rounded-full px-10 py-4 font-bold"
        >
          Book a Call
        </a>
      </div>
    </div>
  );
}
