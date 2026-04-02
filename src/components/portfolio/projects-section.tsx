"use client";

import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { projects } from "@/data/profile";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 24 });
  const springY = useSpring(y, { stiffness: 260, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(420px circle at ${springX}px ${springY}px, rgba(34,211,238,0.22), transparent 55%)`;

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  return (
    <motion.article
      data-reveal
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="group relative"
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glow }}
      />
      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-cyan-500/30">
        <h3 className="font-[family-name:var(--font-space)] text-xl font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-violet-300/90">
          {project.subtitle}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Badge
              key={t}
              variant="outline"
              className="border-cyan-500/25 text-xs text-slate-300"
            >
              {t}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:opacity-90"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              Live
            </a>
          </Button>
          {project.secondaryUrl ? (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full border-white/20 bg-transparent text-slate-200"
            >
              <a
                href={project.secondaryUrl.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.secondaryUrl.label}
              </a>
            </Button>
          ) : null}
          {project.githubUrl ? (
            <Button
              asChild
              size="sm"
              variant="ghost"
              className="rounded-full text-slate-400 hover:text-white"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Github className="h-3.5 w-3.5" aria-hidden />
                Code
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="projects-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          Projects
        </h2>
        <p className="mt-2 max-w-2xl text-sm uppercase tracking-[0.18em] text-cyan-300/80">
          MoneyUtility · Stitch · Weather · Expense tracker
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-slate-500">
          More experiments on{" "}
          <Link
            href="https://github.com/gauravkathiriya"
            className="text-cyan-400 underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
