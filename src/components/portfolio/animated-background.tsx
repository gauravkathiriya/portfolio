"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function AnimatedBackground() {
  const reduced = usePrefersReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(34,211,238,0.18),transparent),radial-gradient(ellipse_80%_60%_at_100%_50%,rgba(168,85,247,0.15),transparent),radial-gradient(ellipse_60%_50%_at_0%_80%,rgba(59,130,246,0.12),transparent)]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `linear-gradient(rgba(148,163,184,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(148,163,184,0.07) 1px,transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 20%, transparent)",
        }}
      />
      {!reduced && (
        <>
          <motion.div
            className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]"
            animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-1/4 bottom-1/4 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, -40, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
