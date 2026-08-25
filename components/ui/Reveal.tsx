"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied as the CSS animation-delay. */
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Fraction of the element that must be on screen before it animates. */
  threshold?: number;
};

/**
 * Fades + lifts its children the first time they scroll into view.
 * Uses a single IntersectionObserver per node and unobserves after firing, so
 * there is no scroll listener and no repeated work.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Without IntersectionObserver, show the content rather than hide it.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    // Safety net: content must never stay invisible. If the element is already
    // within the viewport but the observer hasn't reported it (throttled tab,
    // an element taller than the viewport, an odd embedding), show it anyway.
    const fallback = window.setTimeout(() => {
      const { top, bottom } = node.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) setVisible(true);
    }, 1500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
