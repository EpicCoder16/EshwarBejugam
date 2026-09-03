"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import StatusIndicator from "./StatusIndicator";
import ProjectWindow from "./ProjectWindow";

export default function ProjectRow({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/work/${project.slug}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative block border-b border-border py-6 pl-4 pr-2 transition-colors duration-200 ease-studio hover:bg-bg-secondary md:py-8 md:pl-6"
    >
      {/* Accent bar on hover — technical identity, not decoration */}
      <span
        className={`absolute inset-y-0 left-0 w-[2px] bg-accent transition-transform duration-300 ease-studio ${
          hovered ? "scale-y-100" : "scale-y-0"
        }`}
        style={{ transformOrigin: "top" }}
        aria-hidden="true"
      />

      <div className="flex items-center justify-between gap-6">
        <div className="flex min-w-0 items-baseline gap-4 md:gap-8">
          <span className="font-mono text-[13px] font-medium text-muted">
            {project.number}
          </span>
          <span className="truncate text-2xl font-medium tracking-tight text-ink transition-transform duration-300 ease-studio md:text-4xl md:group-hover:translate-x-2">
            {project.name}
          </span>
        </div>

        <div className="hidden shrink-0 items-center gap-6 font-mono text-[11px] tracking-widest text-muted md:flex">
          <span>{project.category}</span>
          {project.year && <span>{project.year}</span>}
          <StatusIndicator status={project.status} />
        </div>

        <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform duration-300 ease-studio group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
      </div>

      {/* Mobile metadata row */}
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 pl-8 md:hidden">
        <span className="font-mono text-[10px] tracking-widest text-muted">
          {project.category}
        </span>
        {project.year && (
          <span className="font-mono text-[10px] tracking-widest text-muted">
            {project.year}
          </span>
        )}
        <StatusIndicator status={project.status} />
      </div>

      {/* Mobile inline preview — a real interactive window onto the live site when a URL is set */}
      <div className="mt-4 md:hidden">
        <ProjectWindow
          liveUrl={project.liveUrl}
          name={project.name}
          imagePath={project.image}
          aspect="aspect-[16/9]"
          compact
        />
      </div>

      {/* Desktop hover preview, fixed to the right, does not obstruct the title.
          Only mounted while hovered so an idle row never loads a hidden iframe. */}
      <div
        className={`pointer-events-none absolute right-0 top-1/2 hidden h-40 w-64 -translate-y-1/2 transition-opacity duration-300 ease-studio md:block ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ right: "-1px" }}
      >
        {hovered && (
          <ProjectWindow
            liveUrl={project.liveUrl}
            name={project.name}
            imagePath={project.image}
            aspect="h-40"
            interactive={false}
            compact
          />
        )}
      </div>

      {project.achievement && (
        <div className="mt-2 pl-8 font-mono text-[10px] tracking-widest text-accent md:pl-12">
          {project.achievement}
        </div>
      )}
    </Link>
  );
}
