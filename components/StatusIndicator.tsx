import type { ProjectStatus } from "@/lib/projects";

const STATUS_COLOR: Record<ProjectStatus, string> = {
  LIVE: "bg-accent",
  PROTOTYPE: "bg-muted",
  DEMO: "bg-muted",
  ARCHIVED: "bg-border",
  "COMING SOON": "bg-muted",
};

export default function StatusIndicator({
  status,
  className = "",
  dark = false,
}: {
  status: ProjectStatus;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2 py-1 font-mono text-[10px] font-medium tracking-widest ${
        dark
          ? "border-white/15 text-white/70"
          : "border-border text-muted"
      } ${className}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_COLOR[status]}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}
