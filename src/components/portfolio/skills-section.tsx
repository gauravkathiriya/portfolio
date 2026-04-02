"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/profile";
import { cn } from "@/lib/utils";

const TechSphere = dynamic(
  () => import("./tech-sphere").then((m) => m.TechSphere),
  { ssr: false, loading: () => <div className="h-[280px] animate-pulse rounded-xl bg-white/5" /> },
);

export function SkillsSection() {
  return (
    <section
      id="skills"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="skills-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          Skills
        </h2>
        <p className="mt-2 max-w-2xl text-sm uppercase tracking-[0.18em] text-violet-300/80">
          Frontend · Backend · Data · DevOps
        </p>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            {skillCategories.map((cat, i) => (
              <div key={cat.id} data-reveal>
                <h3 className="mb-4 font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                  {cat.label}
                </h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={item.name}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span className="text-slate-300">{item.name}</span>
                        <span className="text-slate-500">{item.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500",
                            "shadow-[0_0_12px_rgba(34,211,238,0.35)]",
                          )}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true, amount: 0.6 }}
                          transition={{
                            duration: 1,
                            delay: i * 0.05 + j * 0.04,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            data-reveal
            className="relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md"
          >
            <p className="mb-2 text-center text-xs uppercase tracking-widest text-slate-500">
              Interactive orbit · drag to rotate
            </p>
            <TechSphere />
          </div>
        </div>
      </div>
    </section>
  );
}
