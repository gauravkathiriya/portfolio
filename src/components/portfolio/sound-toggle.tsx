"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "portfolio-sound-enabled";

function playMicroClick(enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  try {
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.value = 720;
    g.gain.value = 0.04;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + 0.04);
    ctx.resume().catch(() => {});
  } catch {
    /* ignore */
  }
}

export function SoundToggle({ className }: { className?: string }) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setOn(stored === "1");
  }, []);

  const toggle = useCallback(() => {
    setOn((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      playMicroClick(next);
      return next;
    });
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "rounded-full border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-cyan-300",
        className,
      )}
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? "Disable UI click sounds" : "Enable UI click sounds"}
    >
      {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
}

export function useSoundEnabled(): boolean {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(localStorage.getItem(STORAGE_KEY) === "1");
  }, []);
  return on;
}

export function playUiClick() {
  const enabled = localStorage.getItem(STORAGE_KEY) === "1";
  playMicroClick(enabled);
}
