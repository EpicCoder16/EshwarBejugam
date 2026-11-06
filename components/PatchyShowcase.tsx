"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { flagshipProject } from "@/lib/projects";
import { normalizeExternalUrl } from "@/lib/url";
import StatusIndicator from "./StatusIndicator";
import ProjectWindow from "./ProjectWindow";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function PatchyShowcase() {
  const p = flagshipProject;

  return (
    <section
      id="work"
      className="bg-grid-dark border-t border-white/10 bg-ink px-6 py-24 text-bg md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-studio">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="font-mono text-[12px] tracking-widest text-white/50"
        >
          01 / SELECTED WORK
        </motion.p>

        {/* Header row: name, category, year, status */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="text-5xl font-medium tracking-tight text-bg md:text-7xl">
            {p.name}
          </h2>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[12px] tracking-widest text-white/50">
            <span>{p.category}</span>
            <span>{p.year}</span>
            <StatusIndicator status={p.status} dark />
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 max-w-xl text-lg text-bg/90 md:text-xl"
        >
          {p.description}
        </motion.p>

        {/* Product visual — live embed of the site if a URL is set, otherwise a placeholder */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <ProjectWindow
            liveUrl={p.liveUrl}
            name={p.name}
            imagePath={p.image}
            aspect="aspect-[16/9] md:aspect-[21/9]"
            dark
          />
        </motion.div>

        {/* Product / Engineering / Stack */}
        <div className="mt-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-3">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="font-mono text-[11px] tracking-widest text-white/50">
              PROBLEM
            </h3>
            <p className="mt-3 text-sm text-bg/90">
              {p.caseStudy?.problem ??
                "Today, the internet is built the same way for everyone, even though people have different goals, priorities, and workflows. Users waste time navigating cluttered interfaces to find what they need and often struggle to adapt to software that was not designed around them. Existing solutions require editing pages manually and focus on blocking content or automating tasks, instead of fundamentally personalizing websites and applications."}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="font-mono text-[11px] tracking-widest text-white/50">
              PRODUCT
            </h3>
            <p className="mt-3 text-sm text-bg/90">
              {p.caseStudy?.productSolution ??
                "Patchy is essentially an AI layer for the internet. Using prompts, users can easily personalize websites around their behavior and priorities, with Patchy automatically applying CSS patches. It can highlight important information, remove distractions, and reorganize interfaces without actually modifying the site itself. Over time, Patchy learns how users work across platforms and automatically adapts webpages to fit their workflows, making the internet feel truly yours."}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h3 className="font-mono text-[11px] tracking-widest text-white/50">
              STACK
            </h3>
            <div className="mt-3 space-y-3">
              {p.stack?.frontend && p.stack.frontend.length > 0 && (
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-white/40">
                    FRONTEND
                  </div>
                  <div className="text-sm text-bg/90">
                    {p.stack.frontend.join(" · ")}
                  </div>
                </div>
              )}
              {p.stack?.backend && p.stack.backend.length > 0 && (
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-white/40">
                    BACKEND
                  </div>
                  <div className="text-sm text-bg/90">
                    {p.stack.backend.join(" · ")}
                  </div>
                </div>
              )}
              {p.stack?.ai && p.stack.ai.length > 0 && (
                <div>
                  <div className="font-mono text-[10px] tracking-widest text-white/40">
                    AI
                  </div>
                  <div className="text-sm text-bg/90">
                    {p.stack.ai.join(" · ")}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8"
        >
          {p.liveUrl ? (
            <a
              href={normalizeExternalUrl(p.liveUrl)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-bg"
            >
              VIEW LIVE PRODUCT
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-studio group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ) : (
            <Link
              href={`/work/${p.slug}`}
              className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-widest text-accent"
            >
              READ CASE STUDY
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-studio group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          )}
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] tracking-widest text-white/50 transition-colors duration-200 hover:text-bg"
            >
              GITHUB
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
