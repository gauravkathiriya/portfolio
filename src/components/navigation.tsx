"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navAnchors } from "@/data/profile";
import {
  Code2,
  Menu,
  X,
} from "lucide-react";

function scrollToId(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavInnerLink({
  id,
  label,
  onSelect,
}: {
  id: string;
  label: string;
  onSelect?: () => void;
}) {
  return (
    <Button
      variant="ghost"
      type="button"
      className="relative px-4 py-2 text-slate-200 hover:bg-white/10 hover:text-cyan-300"
      onClick={() => {
        scrollToId(id);
        onSelect?.();
      }}
    >
      {label}
    </Button>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-1 left-0 right-0 z-50 px-3 transition-all duration-300 md:top-2 md:px-4 ${scrolled
          ? "md:pt-0"
          : ""
          }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-300 md:px-4 ${scrolled
            ? "border-white/10 bg-slate-950/85 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-white/5 bg-slate-950/40 backdrop-blur-md"
            }`}
          aria-label="Primary"
        >
          <Link
            href="/#top"
            className="flex items-center gap-2 rounded-lg outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("top");
            }}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              <Code2 className="h-5 w-5 text-white" aria-hidden />
            </span>
            <span className="font-[family-name:var(--font-space)] text-lg font-bold text-white">
              GK
            </span>
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navAnchors.map((item) => (
              <NavInnerLink key={item.id} id={item.id} label={item.label} />
            ))}
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.div
              id="mobile-nav"
              className="fixed left-3 right-3 top-[4.25rem] z-40 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-xl backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="flex flex-col gap-1">
                {navAnchors.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <NavInnerLink
                      id={item.id}
                      label={item.label}
                      onSelect={() => setIsOpen(false)}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
