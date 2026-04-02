"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type RefObject } from "react";

let registered = false;

function ensureGsap() {
  if (typeof window === "undefined" || registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function useSectionReveal<T extends HTMLElement>(
  rootRef: RefObject<T | null>,
  deps: unknown[] = [],
) {
  useEffect(() => {
    ensureGsap();
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const blocks = root.querySelectorAll<HTMLElement>("[data-reveal]");
      blocks.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional ref-based setup
  }, deps);
}
