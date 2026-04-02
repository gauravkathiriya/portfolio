"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [hidden, setHidden] = useState(true);
  const [finePointer, setFinePointer] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 500, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 35, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!finePointer || reduced) return;
    const prev = document.body.style.cursor;
    document.body.style.cursor = "none";
    const move = (e: MouseEvent) => {
      setHidden(false);
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      document.body.style.cursor = prev;
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [finePointer, reduced, x, y]);

  if (!finePointer || reduced) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[99] mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: hidden ? 0 : 1, scale: hidden ? 0.5 : 1 }}
      transition={{ duration: 0.2 }}
      aria-hidden
    >
      <div className="h-8 w-8 rounded-full border-2 border-white/90 shadow-[0_0_24px_rgba(255,255,255,0.35)]" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  );
}
