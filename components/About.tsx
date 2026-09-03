"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-studio grid-cols-1 gap-12 md:grid-cols-12">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[12px] tracking-widest text-muted md:col-span-2"
        >
          04 / ABOUT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-6"
        >
          <p className="max-w-lg text-xl leading-relaxed text-ink md:text-2xl">
            I&rsquo;m a Computer Science student at Purdue University
            interested in software engineering, AI, and startups. Most of my
            projects start with a problem I find interesting and end with me
            figuring out how to make the idea actually work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10 md:col-span-4"
        >
          <div>
            <div className="font-mono text-[11px] tracking-widest text-muted">
              PURDUE UNIVERSITY
            </div>
            <div className="mt-2 text-sm text-ink">Computer Science</div>
            <div className="text-sm text-muted">2026 — 2030</div>
          </div>
          <div>
            <div className="font-mono text-[11px] tracking-widest text-muted">
              INTERESTS
            </div>
            <ul className="mt-2 space-y-1 text-sm text-ink">
              <li>Software Engineering</li>
              <li>AI</li>
              <li>Startups</li>
              <li>Product Development</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
