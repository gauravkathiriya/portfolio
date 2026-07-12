import { useQuery } from "@tanstack/react-query";

export type GitHubEvent = {
  id: string;
  type: string;
  repoName: string;
  repoUrl: string;
  description: string;
  createdAt: string;
};

async function fetchGitHubEvents(username: string): Promise<GitHubEvent[]> {
  const res = await fetch(`https://api.github.com/users/${username}/events?per_page=10`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error("GitHub events request failed");
  const data = await res.json();

  return (data || [])
    .map((event: any) => {
      const type = event.type;
      const repoName = event.repo?.name || "";
      const repoUrl = `https://github.com/${repoName}`;
      const createdAt = event.created_at;
      let description = "";

      switch (type) {
        case "PushEvent":
          const commitCount = event.payload?.commits?.length || 1;
          const commitMsg = event.payload?.commits?.[0]?.message || "update";
          description = `Pushed ${commitCount} commit${commitCount > 1 ? "s" : ""} ("${commitMsg.slice(0, 45)}")`;
          break;
        case "CreateEvent":
          const refType = event.payload?.ref_type || "repository";
          description = `Created ${refType} ${event.payload?.ref ? `"${event.payload.ref}"` : ""}`;
          break;
        case "PullRequestEvent":
          const prAction = event.payload?.action || "opened";
          const prTitle = event.payload?.pull_request?.title || "";
          description = `${prAction.charAt(0).toUpperCase() + prAction.slice(1)} PR: "${prTitle.slice(0, 40)}"`;
          break;
        case "IssuesEvent":
          const issueAction = event.payload?.action || "opened";
          const issueTitle = event.payload?.issue?.title || "";
          description = `${issueAction.charAt(0).toUpperCase() + issueAction.slice(1)} Issue: "${issueTitle.slice(0, 40)}"`;
          break;
        case "WatchEvent":
          description = "Starred the repository";
          break;
        case "ForkEvent":
          description = "Forked the repository";
          break;
        default:
          const friendlyType = type.replace("Event", "");
          description = `Performed action: ${friendlyType}`;
      }

      const cleanRepoName = repoName.split("/")[1] || repoName;

      return {
        id: event.id,
        type,
        repoName: cleanRepoName,
        repoUrl,
        description,
        createdAt,
      };
    })
    .filter((e: any) => e.repoName);
}

export function useGitHubEvents(username: string | undefined) {
  return useQuery({
    queryKey: ["github-events", username],
    queryFn: () => fetchGitHubEvents(username!),
    enabled: !!username,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
