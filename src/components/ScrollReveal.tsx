"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * Wraps any block of content and fades it up into view when it enters
 * the viewport. Uses Intersection Observer (native browser API,
 * no library dependency). One-time reveal — once visible, stays visible.
 *
 * Usage:
 *   <ScrollReveal>
 *     <section>...</section>
 *   </ScrollReveal>
 *
 * Respects prefers-reduced-motion via the .scroll-reveal CSS rule.
 */

type Props = {
  children: ReactNode;
  /** Extra delay (ms) between entering viewport and starting reveal. */
  delay?: number;
  /** Optional class names to pass through to the wrapper. */
  className?: string;
  /** Threshold (0-1) of element visible before reveal triggers. Default 0.12. */
  threshold?: number;
};

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
  threshold = 0.12,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If user prefers reduced motion, reveal immediately and skip observer.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            window.setTimeout(() => setRevealed(true), delay);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${revealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
