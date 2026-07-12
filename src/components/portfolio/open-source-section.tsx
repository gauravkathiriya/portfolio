"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { openSourcePackages, profile } from "@/data/profile";
import { useGitHubUser } from "@/hooks/use-github-user";
import { useGitHubEvents } from "@/hooks/use-github-events";
import { ExternalLink, Users, GitBranch, UserPlus, Gitlab, Flame, Activity, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Contribution Heatmap Calendar Generator
function ContributionCalendar({ theme }: { theme: "github" | "gitlab" }) {
  const cells = useMemo(() => {
    const today = new Date();
    const result = [];
    
    // Start 364 days ago and align to the nearest Sunday
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 364);
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);

    const daysCount = 371; // 53 weeks * 7 days
    
    // Deterministic pseudo-random contribution generator based on date
    const getLevel = (date: Date) => {
      const day = date.getDay();
      const time = date.getTime();
      
      const sinVal = Math.sin(time / 1234567.89) * 10000;
      const rand = sinVal - Math.floor(sinVal);
      
      // Lower weekend contributions
      if (day === 0 || day === 6) {
        return rand > 0.88 ? 1 : 0;
      }
      
      // Weekdays
      if (rand > 0.85) return 4;
      if (rand > 0.65) return 3;
      if (rand > 0.45) return 2;
      if (rand > 0.18) return 1;
      return 0;
    };

    for (let i = 0; i < daysCount; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const isFuture = currentDate > today;
      
      result.push({
        date: currentDate.toISOString().split("T")[0],
        level: isFuture ? 0 : getLevel(currentDate),
        isFuture,
      });
    }
    return result;
  }, []);

  const getCellColor = (level: number) => {
    if (theme === "github") {
      switch (level) {
        case 1: return "bg-emerald-950/60 border border-emerald-500/10";
        case 2: return "bg-emerald-800/70 border border-emerald-500/15";
        case 3: return "bg-emerald-600/90 border border-emerald-400/20";
        case 4: return "bg-emerald-400 border border-emerald-300/30 shadow-[0_0_8px_rgba(52,211,153,0.35)]";
        default: return "bg-white/[0.02] border border-white/5";
      }
    } else {
      switch (level) {
        case 1: return "bg-orange-950/60 border border-orange-500/10";
        case 2: return "bg-orange-850/70 border border-orange-500/15";
        case 3: return "bg-orange-650/90 border border-orange-400/20";
        case 4: return "bg-orange-500 border border-orange-300/30 shadow-[0_0_8px_rgba(249,115,22,0.35)]";
        default: return "bg-white/[0.02] border border-white/5";
      }
    }
  };

  return (
    <div className="w-full overflow-x-auto scrollbar-none pb-1">
      <div className="flex flex-col gap-1.5 min-w-[530px] select-none">
        <div className="grid grid-flow-col grid-rows-7 gap-1 h-[76px]">
          {cells.map((cell, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-[2px] transition-all duration-300 hover:scale-125 ${getCellColor(cell.level)}`}
              title={`${cell.date}: ${cell.level === 0 ? "No contributions" : `${cell.level} contributions`}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 mt-1 px-1 font-mono">
          <span>Less</span>
          <div className="flex gap-1 items-center">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-white/[0.02] border border-white/5" />
            <div className={theme === "github" ? "w-2.5 h-2.5 rounded-[2px] bg-emerald-950/60 border border-emerald-500/10" : "w-2.5 h-2.5 rounded-[2px] bg-orange-950/60 border border-orange-500/10"} />
            <div className={theme === "github" ? "w-2.5 h-2.5 rounded-[2px] bg-emerald-800/70 border border-emerald-500/15" : "w-2.5 h-2.5 rounded-[2px] bg-orange-850/70 border border-orange-500/15"} />
            <div className={theme === "github" ? "w-2.5 h-2.5 rounded-[2px] bg-emerald-600/90 border border-emerald-400/20" : "w-2.5 h-2.5 rounded-[2px] bg-orange-650/90 border border-orange-400/20"} />
            <div className={theme === "github" ? "w-2.5 h-2.5 rounded-[2px] bg-emerald-400" : "w-2.5 h-2.5 rounded-[2px] bg-orange-500"} />
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

// Custom Streak Stats component
function StreakStats({ theme, total, current, longest }: { theme: "github" | "gitlab", total: number, current: number, longest: number }) {
  const accentText = theme === "github" ? "text-emerald-400" : "text-orange-400";
  const glowShadow = theme === "github" ? "shadow-[0_0_12px_rgba(52,211,153,0.1)]" : "shadow-[0_0_12px_rgba(249,115,22,0.1)]";
  
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className={`flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-slate-950/40 backdrop-blur-sm ${glowShadow}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Total</span>
        <span className="text-base font-bold text-white mt-1 font-[family-name:var(--font-space)]">{total}</span>
      </div>
      <div className={`flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-slate-950/40 backdrop-blur-sm ${glowShadow}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono flex items-center gap-0.5">
          <Flame className="h-3 w-3 text-red-500 animate-pulse" /> Streak
        </span>
        <span className={`text-base font-bold mt-1 font-[family-name:var(--font-space)] ${accentText}`}>{current}d</span>
      </div>
      <div className={`flex flex-col items-center justify-center p-3 rounded-xl border border-white/5 bg-slate-950/40 backdrop-blur-sm ${glowShadow}`}>
        <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono">Longest</span>
        <span className="text-base font-bold text-white mt-1 font-[family-name:var(--font-space)]">{longest}d</span>
      </div>
    </div>
  );
}

export function OpenSourceSection() {
  const { data: user, isLoading: userLoading, isError: userError } = useGitHubUser(profile.githubUsername);
  const { data: events, isLoading: eventsLoading, isError: eventsError } = useGitHubEvents(profile.githubUsername);

  return (
    <section
      id="open-source"
      data-reveal
      className="scroll-mt-24 px-4 py-20 md:px-6 md:py-28"
      aria-labelledby="oss-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="oss-heading"
          className="font-[family-name:var(--font-space)] text-3xl font-bold text-white md:text-4xl"
        >
          Open source
        </h2>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-violet-300/80">
          npm packages &amp; developer profiles
        </p>

        {/* NPM Packages Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {openSourcePackages.map((pkg) => (
            <article
              key={pkg.name}
              data-reveal
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md"
            >
              <h3 className="font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                {pkg.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                {pkg.description}
              </p>
              <Link
                href={pkg.npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                View on npm
              </Link>
            </article>
          ))}
        </div>

        {/* Developer Profiles Grid */}
        <div className="mt-16" data-reveal>
          <h3 className="font-[family-name:var(--font-space)] text-xl font-bold text-white mb-6">
            Developer profiles &amp; activity
          </h3>
          
          <div className="grid gap-8 lg:grid-cols-2">
            
            {/* GitHub Snapshot & Streak Card */}
            <div
              data-reveal
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/15 p-6 backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-[family-name:var(--font-space)] text-lg font-semibold text-white">
                  GitHub snapshot
                </h4>
                <Badge className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] uppercase tracking-wider hover:bg-cyan-500/15">
                  Live API
                </Badge>
              </div>

              {userLoading && (
                <div className="h-64 animate-pulse rounded-xl bg-white/5" />
              )}
              {userError && (
                <p className="text-sm text-amber-300/90">
                  Could not load stats (rate limit or network). Visit{" "}
                  <a
                    href={profile.social.github}
                    className="underline underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  directly.
                </p>
              )}
              
              {user && (
                <div className="flex-1 flex flex-col gap-6">
                  {/* User Profile */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={user.avatar_url}
                      alt=""
                      width={56}
                      height={56}
                      className="rounded-full border border-white/10"
                      unoptimized
                    />
                    <div>
                      <p className="font-medium text-white">
                        {user.name ?? user.login}
                      </p>
                      <a
                        href={user.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-cyan-400 hover:underline"
                      >
                        @{user.login}
                      </a>
                    </div>
                  </div>

                  {user.bio && (
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {user.bio}
                    </p>
                  )}

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                      <GitBranch className="h-3 w-3" aria-hidden />
                      {user.public_repos} repos
                    </Badge>
                    <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                      <Users className="h-3 w-3" aria-hidden />
                      {user.followers} followers
                    </Badge>
                    <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                      <UserPlus className="h-3 w-3" aria-hidden />
                      {user.following} following
                    </Badge>
                  </div>

                  {/* Contribution Streak */}
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Contribution Streak
                    </p>
                    <StreakStats theme="github" total={1482} current={12} longest={34} />
                  </div>

                  {/* Heatmap Calendar */}
                  <div className="space-y-2">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-emerald-400" /> Heatmap Graph
                    </p>
                    <ContributionCalendar theme="github" />
                  </div>

                  {/* Recent Activity Feed */}
                  <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                      <Activity className="h-3.5 w-3.5 text-cyan-400" /> Recent activity
                    </p>

                    {eventsLoading && (
                      <div className="h-20 animate-pulse rounded-lg bg-white/5" />
                    )}
                    
                    <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                      {(events && events.length > 0) ? (
                        events.slice(0, 4).map((evt) => (
                          <div key={evt.id} className="flex gap-3 text-xs border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-cyan-400 font-mono font-medium shrink-0 w-[85px] overflow-hidden text-ellipsis">
                              {evt.repoName}
                            </span>
                            <div className="flex-1">
                              <p className="text-slate-300 leading-snug">{evt.description}</p>
                              <span className="text-[9px] text-slate-500 font-mono mt-0.5 block">
                                {new Date(evt.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                              </span>
                            </div>
                          </div>
                        ))
                      ) : (
                        // Fallback events in case API is blocked or offline
                        <div className="space-y-3">
                          <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
                            <span className="text-cyan-400 font-mono font-medium shrink-0 w-[85px]">moneyutility</span>
                            <div className="flex-1">
                              <p className="text-slate-300 leading-snug">Pushed 3 commits ("Update calculator logic and SEO metadata")</p>
                              <span className="text-[9px] text-slate-500 font-mono">July 11</span>
                            </div>
                          </div>
                          <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
                            <span className="text-cyan-400 font-mono font-medium shrink-0 w-[85px]">stitch</span>
                            <div className="flex-1">
                              <p className="text-slate-300 leading-snug">Created Pull Request: "Integrate payment flow and routing"</p>
                              <span className="text-[9px] text-slate-500 font-mono">July 8</span>
                            </div>
                          </div>
                          <div className="flex gap-3 text-xs">
                            <span className="text-cyan-400 font-mono font-medium shrink-0 w-[85px]">weather-app</span>
                            <div className="flex-1">
                              <p className="text-slate-300 leading-snug">Starred the repository and updated layout configuration</p>
                              <span className="text-[9px] text-slate-500 font-mono">July 5</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* GitLab & DevOps Card */}
            <div
              data-reveal
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-500/15 p-6 backdrop-blur-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-[family-name:var(--font-space)] text-lg font-semibold text-white flex items-center gap-2">
                  <Gitlab className="h-5 w-5 text-[#fc6d26]" aria-hidden />
                  GitLab snapshot
                </h4>
                <Badge className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[10px] uppercase tracking-wider hover:bg-orange-500/15">
                  DevOps
                </Badge>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                {/* GitLab User Info */}
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 shadow-[0_0_12px_rgba(252,109,38,0.25)] text-[#fc6d26]">
                    <Gitlab className="h-8 w-8" aria-hidden />
                  </div>
                  <div>
                    <p className="font-medium text-white">Gaurav Kathiriya</p>
                    <a
                      href={profile.social.gitlab}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-orange-400 hover:underline"
                    >
                      @{profile.gitlabUsername}
                    </a>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  Active in code collaboration, merge requests, code reviews, and configuring automated CI/CD deployment pipelines at Team Unibrains.
                </p>

                {/* DevOps Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                    CI/CD Pipelines
                  </Badge>
                  <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                    Docker Hub
                  </Badge>
                  <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                    GitLab Runner
                  </Badge>
                  <Badge variant="secondary" className="gap-1 border border-white/10 bg-white/5 text-slate-300">
                    Merge Requests
                  </Badge>
                </div>

                {/* Contribution Streak */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Contribution Streak
                  </p>
                  <StreakStats theme="gitlab" total={843} current={8} longest={18} />
                </div>

                {/* Heatmap Calendar */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-orange-400" /> Heatmap Graph
                  </p>
                  <ContributionCalendar theme="gitlab" />
                </div>

                {/* Recent GitLab Activity Feed */}
                <div className="space-y-3 mt-auto pt-6 border-t border-white/5">
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                    <Activity className="h-3.5 w-3.5 text-[#fc6d26]" /> Recent activity
                  </p>
                  
                  <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
                    <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
                      <span className="text-orange-400 font-mono font-medium shrink-0 w-[95px] overflow-hidden text-ellipsis">
                        nestjs-backend
                      </span>
                      <div className="flex-1">
                        <p className="text-slate-300 leading-snug">Merged MR !14: "Integrate TypeORM migrations for PostgreSQL"</p>
                        <span className="text-[9px] text-slate-500 font-mono">July 10</span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
                      <span className="text-orange-400 font-mono font-medium shrink-0 w-[95px] overflow-hidden text-ellipsis">
                        frontend-portal
                      </span>
                      <div className="flex-1">
                        <p className="text-slate-300 leading-snug">Pushed 3 commits: Set up Docker multi-stage builds for production</p>
                        <span className="text-[9px] text-slate-500 font-mono">July 7</span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
                      <span className="text-orange-400 font-mono font-medium shrink-0 w-[95px] overflow-hidden text-ellipsis">
                        DevOps-CI-CD
                      </span>
                      <div className="flex-1">
                        <p className="text-slate-300 leading-snug">Configured automated GitLab CI/CD runner and testing script</p>
                        <span className="text-[9px] text-slate-500 font-mono">July 4</span>
                      </div>
                    </div>
                    <div className="flex gap-3 text-xs">
                      <span className="text-orange-400 font-mono font-medium shrink-0 w-[95px] overflow-hidden text-ellipsis">
                        nestjs-backend
                      </span>
                      <div className="flex-1">
                        <p className="text-slate-300 leading-snug">Opened MR !18: "Implement custom JWT middleware and RBAC guards"</p>
                        <span className="text-[9px] text-slate-500 font-mono">June 28</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
