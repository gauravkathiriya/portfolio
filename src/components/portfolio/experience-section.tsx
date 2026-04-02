"use client";

import { experiences } from "@/data/profile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="experience-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          Experience
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-cyan-300/80">
          Team Unibrains · Prodigy Infotech · Bet Web
        </p>
        <div className="relative mt-12 border-l border-cyan-500/30 pl-8 md:pl-10">
          <Accordion
            type="single"
            collapsible
            className="space-y-6"
            defaultValue={experiences[0]?.id}
          >
            {experiences.map((exp) => (
              <AccordionItem
                key={exp.id}
                value={exp.id}
                data-reveal
                className="relative border-none"
              >
                <span
                  className="absolute -left-[39px] top-6 hidden h-3 w-3 rounded-full border-2 border-cyan-400 bg-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.8)] md:block md:-left-[43px]"
                  aria-hidden
                />
                <AccordionTrigger className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left no-underline hover:no-underline [&>svg]:text-cyan-400">
                  <div className="flex flex-col gap-1 pr-2 text-left md:flex-row md:items-baseline md:justify-between md:gap-4">
                    <div>
                      <p className="font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                        {exp.title}
                      </p>
                      <p className="text-cyan-300/90">{exp.company}</p>
                    </div>
                    <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="rounded-b-xl border border-t-0 border-white/10 bg-white/[0.02] px-4 pb-4 pt-0">
                  <ul className="mt-4 list-inside list-disc space-y-2 text-slate-400 marker:text-violet-400">
                    {exp.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="border border-white/10 bg-white/5 text-slate-200"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
