"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { Badge } from "@/components/ui/badge";

const HeroAvatarCanvas = dynamic(
  () =>
    import("./hero-avatar-canvas").then((m) => ({
      default: m.HeroAvatarCanvas,
    })),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-[min(56vh,420px)] w-full max-w-lg items-center justify-center rounded-3xl border border-white/10 bg-white/[0.03] md:h-[min(62vh,480px)]"
        aria-hidden
      >
        <div className="h-12 w-12 animate-pulse rounded-full bg-cyan-500/30" />
      </div>
    ),
  },
);

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] px-4 pb-24 pt-28 md:px-6 md:pb-32 md:pt-32"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-xl flex-1 text-center lg:text-left">
          <motion.p
            className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {profile.tagline}
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-[family-name:var(--font-space)] text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-slate-400 md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {profile.role} · Performance-focused interfaces, robust APIs, and
            polished UX for web &amp; mobile.
          </motion.p>
          <motion.div
            className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {["React", "Next.js", "NestJS", "TypeScript"].map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="border border-cyan-500/25 bg-cyan-500/10 text-cyan-100 hover:bg-cyan-500/15"
              >
                {t}
              </Badge>
            ))}
          </motion.div>
          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-[0_0_32px_rgba(34,211,238,0.35)] hover:opacity-95"
            >
              <Link href="#contact" className="gap-2">
                <Mail className="h-4 w-4" aria-hidden />
                Let&apos;s talk
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
            >
              <Link href="#projects">View projects</Link>
            </Button>
          </motion.div>
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" aria-hidden />
              {profile.location}
            </span>
            <a
              href={profile.social.github}
              className="flex items-center gap-2 text-slate-300 underline-offset-4 hover:text-cyan-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" aria-hidden />
              GitHub
            </a>
            <a
              href={profile.social.linkedin}
              className="flex items-center gap-2 text-slate-300 underline-offset-4 hover:text-cyan-300 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </motion.div>
        </div>
        <motion.div
          className="relative flex flex-1 justify-center"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute inset-0 -z-10 rounded-[40%] bg-gradient-to-br from-cyan-500/25 via-transparent to-violet-600/25 blur-3xl" />
          <HeroAvatarCanvas />
        </motion.div>
      </div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-xs text-slate-500 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 0.8 }, y: { repeat: Infinity, duration: 2.2 } }}
        aria-label="Scroll to about section"
      >
        <span className="uppercase tracking-widest">Explore</span>
        <ArrowDown className="h-4 w-4" aria-hidden />
      </motion.a>
    </section>
  );
}
