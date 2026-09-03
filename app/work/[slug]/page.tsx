import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Instagram } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/projects";
import { normalizeExternalUrl, instagramHandle } from "@/lib/url";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatusIndicator from "@/components/StatusIndicator";
import ProjectWindow from "@/components/ProjectWindow";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Standardized 5-section breakdown used by every /work/[slug] page.
// A section renders the real copy when present, or an explicit
// "not written up yet" placeholder — never invented content.
const SECTION_DEFS: {
  number: string;
  label: string;
  key: "problem" | "productSolution" | "statusLearnings";
  placeholder: string;
}[] = [
  {
    number: "01",
    label: "Problem",
    key: "problem",
    placeholder: "Coming Soon!",
  },
  {
    number: "02",
    label: "Product & Solution",
    key: "productSolution",
    placeholder: "Coming Soon!",
  },
  {
    number: "03",
    label: "Status & Learnings",
    key: "statusLearnings",
    placeholder: "Coming Soon!",
  },
];

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const hasStack =
    project.stack &&
    (project.stack.aiUsage ||
      Object.values(project.stack).some(
        (v) => Array.isArray(v) && v.length > 0
      ));

  return (
    <>
      <Navigation />
      <main className="px-6 pb-24 pt-32 md:px-12 md:pt-40">
        <div className="mx-auto max-w-studio">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO WORK
          </Link>

          <div className="mt-10 flex flex-col gap-4 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-[12px] text-muted">
                {project.number}
              </span>
              <h1 className="mt-2 text-5xl font-medium tracking-tight text-ink md:text-7xl">
                {project.name}
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] tracking-widest text-muted">
              <span>{project.category}</span>
              {project.year && <span>{project.year}</span>}
              <StatusIndicator status={project.status} />
            </div>
          </div>

          {project.achievement && (
            <div className="mt-4 font-mono text-[11px] tracking-widest text-accent">
              {project.achievement}
            </div>
          )}

          {project.description && (
            <div className="mt-8 max-w-2xl">
              <p className="text-lg leading-relaxed text-ink">
                {project.description}
              </p>
              {project.instagramUrl && (
                <a
                  href={project.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-4 inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
                >
                  <Instagram className="h-4 w-4 transition-colors duration-200 group-hover:text-ink" />
                  {instagramHandle(project.instagramUrl)}
                </a>
              )}
            </div>
          )}

          <div className="mt-12">
            <ProjectWindow
              liveUrl={project.liveUrl}
              name={project.name}
              imagePath={project.image}
              aspect="aspect-[16/9]"
            />
          </div>

          {/* 01 / 02 / 03 / 05 — standardized breakdown */}
          <div className="mt-16 divide-y divide-border border-t border-border">
            {SECTION_DEFS.map((section) => {
              const body = project.caseStudy?.[section.key];
              return (
                <div
                  key={section.key}
                  className="grid grid-cols-1 gap-4 py-10 md:grid-cols-4"
                >
                  <h2 className="font-mono text-[11px] tracking-widest text-muted">
                    {section.number} — {section.label.toUpperCase()}
                  </h2>
                  <p 
                    className={`max-w-2xl text-base leading-relaxed md:col-span-3 whitespace-pre-line ${
                      body ? "text-ink" : "italic text-muted"
                    }`}
                  >
                    {body ?? section.placeholder}
                  </p>
                </div>
              );
            })}

            {/* 04 — Tech Stack & Infrastructure */}
            <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-4">
              <h2 className="font-mono text-[11px] tracking-widest text-muted">
                04 — TECH STACK &amp; INFRASTRUCTURE
              </h2>
              {hasStack ? (
                <div className="space-y-4 md:col-span-3">
                  {project.stack?.aiUsage && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        USE OF AI
                      </div>
                      <p className="whitespace-pre-line text-sm leading-relaxed text-ink">
                        {project.stack.aiUsage}
                      </p>
                    </div>
                  )}
                  {project.stack?.frontend && project.stack.frontend.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        FRONTEND
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.frontend.join(" · ")}
                      </div>
                    </div>
                  )}
                  {project.stack?.backend && project.stack.backend.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        BACKEND
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.backend.join(" · ")}
                      </div>
                    </div>
                  )}
                  {project.stack?.ai && project.stack.ai.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        AI / APIS
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.ai.join(" · ")}
                      </div>
                    </div>
                  )}
                  {project.stack?.blockchain &&
                    project.stack.blockchain.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        BLOCKCHAIN
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.blockchain.join(" · ")}
                      </div>
                    </div>
                  )}
                  {project.stack?.deployment && project.stack.deployment.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        DEPLOYMENT
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.deployment.join(" · ")}
                      </div>
                    </div>
                  )}
                  {project.stack?.other && project.stack.other.length > 0 && (
                    <div>
                      <div className="font-mono text-[10px] tracking-widest text-muted">
                        OTHER
                      </div>
                      <div className="text-sm text-ink">
                        {project.stack.other.join(" · ")}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="max-w-2xl text-base italic leading-relaxed text-muted md:col-span-3">
                  Coming Soon!
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-8 border-t border-border pt-8">
            {project.liveUrl && (
              <a
                href={normalizeExternalUrl(project.liveUrl)}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-ink"
              >
                VIEW LIVE PRODUCT
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-studio group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            )}
            {project.instagramUrl && (
              <a
                href={project.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
              >
                <Instagram className="h-4 w-4 transition-colors duration-200 group-hover:text-ink" />
                INSTAGRAM
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
              >
                GITHUB
              </a>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
