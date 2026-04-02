"use client";

import { profile, education, certifications } from "@/data/profile";
import { Award, GraduationCap } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="about-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          About
        </h2>
        <p className="mt-2 max-w-2xl text-sm uppercase tracking-[0.18em] text-cyan-300/80">
          Professional summary
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-md md:p-8">
            <p className="text-lg leading-relaxed text-slate-300">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                <GraduationCap className="h-5 w-5 text-cyan-400" aria-hidden />
                Education
              </h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li
                    key={e.degree}
                    className="border-l-2 border-cyan-500/50 pl-4"
                  >
                    <p className="font-medium text-slate-100">{e.degree}</p>
                    <p className="text-sm text-cyan-200/90">{e.school}</p>
                    <p className="text-xs text-slate-500">
                      {e.period} · {e.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              data-reveal
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md"
            >
              <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                <Award className="h-5 w-5 text-violet-400" aria-hidden />
                Certifications &amp; activities
              </h3>
              <ul className="list-inside list-disc space-y-2 text-slate-400 marker:text-violet-400">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
