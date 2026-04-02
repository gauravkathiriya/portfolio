"use client";

import { useQuery } from "@tanstack/react-query";

export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  avatar_url: string;
};

async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error("GitHub request failed");
  return res.json();
}

export function useGitHubUser(username: string | undefined) {
  return useQuery({
    queryKey: ["github-user", username],
    queryFn: () => fetchGitHubUser(username!),
    enabled: Boolean(username),
  });
}
