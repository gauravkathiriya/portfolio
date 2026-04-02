"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "./animated-background";
import { ScrollProgress } from "./scroll-progress";
import { CustomCursor } from "./custom-cursor";
import { HeroSection } from "./hero-section";
import { AboutSection } from "./about-section";
import { SkillsSection } from "./skills-section";
import { ExperienceSection } from "./experience-section";
import { ProjectsSection } from "./projects-section";
import { OpenSourceSection } from "./open-source-section";
import { ContactSection } from "./contact-section";
import { useSectionReveal } from "./use-section-reveal";
import { profile } from "@/data/profile";

export function PortfolioPage() {
  const mainRef = useRef<HTMLElement>(null);
  useSectionReveal(mainRef, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-slate-950 text-slate-200"
    >
      <AnimatedBackground />
      <ScrollProgress />
      <CustomCursor />
      <Navigation />
      <main ref={mainRef}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <OpenSourceSection />
        <ContactSection />
      </main>
      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted with Next.js,
          Tailwind CSS, R3F, Framer Motion &amp; GSAP.
        </p>
      </footer>
    </motion.div>
  );
}
