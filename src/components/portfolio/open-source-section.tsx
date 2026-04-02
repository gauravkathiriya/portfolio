"use client";

import Image from "next/image";
import Link from "next/link";
import { openSourcePackages, profile } from "@/data/profile";
import { useGitHubUser } from "@/hooks/use-github-user";
import { ExternalLink, Users, GitBranch, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function OpenSourceSection() {
  const { data, isLoading, isError } = useGitHubUser(profile.githubUsername);

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
          npm packages · GitHub profile
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
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
          <div
            data-reveal
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-600/15 p-6 backdrop-blur-md lg:col-span-1"
          >
            <h3 className="font-[family-name:var(--font-space)] text-lg font-semibold text-white">
              GitHub snapshot
            </h3>
            <p className="mt-2 text-xs text-slate-500">
              Live public data via GitHub API (cached client-side).
            </p>
            {isLoading && (
              <div className="mt-6 h-28 animate-pulse rounded-xl bg-white/10" />
            )}
            {isError && (
              <p className="mt-6 text-sm text-amber-300/90">
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
            {data && (
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={data.avatar_url}
                    alt=""
                    width={56}
                    height={56}
                    className="rounded-full border border-white/10"
                  />
                  <div>
                    <p className="font-medium text-white">
                      {data.name ?? data.login}
                    </p>
                    <a
                      href={data.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:underline"
                    >
                      @{data.login}
                    </a>
                  </div>
                </div>
                {data.bio ? (
                  <p className="text-sm text-slate-400">{data.bio}</p>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-white/10 bg-white/5"
                  >
                    <GitBranch className="h-3 w-3" aria-hidden />
                    {data.public_repos} repos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-white/10 bg-white/5"
                  >
                    <Users className="h-3 w-3" aria-hidden />
                    {data.followers} followers
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="gap-1 border border-white/10 bg-white/5"
                  >
                    <UserPlus className="h-3 w-3" aria-hidden />
                    {data.following} following
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
