"use client";

import { motion } from "framer-motion";
import { otherProjects } from "@/lib/projects";
import ProjectRow from "./ProjectRow";

export default function ProjectCanvas() {
  return (
    <section className="bg-grid-light px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-studio">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[12px] tracking-widest text-muted"
        >
          02 / OTHER WORK
        </motion.p>

        <div className="relative mt-8 border-t border-border">
          {otherProjects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
