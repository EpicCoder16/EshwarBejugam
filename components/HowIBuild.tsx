"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Start with the problem",
    body: "My goal is to eventually launch a successful startup. When creating products, I like to start with a problem that I or my friends are facing. I usually ask friends to review my ideas and use ChatGPT or Gemini to plan out the idea and how to build it.",
  },
  {
    number: "02",
    title: "Ship early",
    body: "I prefer getting a functional version (MVP) into people's hands and learning from it, rather than over-engineering something before it exists. I try to ship a version of the product within 2 weeks, even if it's not representative of the long-term vision.",
  },
  {
    number: "03",
    title: "Iterate and learn",
    body: "After launching the MVP, I iterate on the product based on user feedback and my vision for the product, adding features and improving the product as I go. Along the way, I learn new technologies and systems that I wouldn't have learned otherwise.",
  },
];

export default function HowIBuild() {
  return (
    <section className="bg-grid-light border-t border-border bg-bg-secondary px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-studio">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[12px] tracking-widest text-muted"
        >
          03 / HOW I BUILD
        </motion.p>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {PRINCIPLES.map((principle, i) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-border pt-6"
            >
              <span className="font-mono text-[12px] text-muted">
                {principle.number}
              </span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-ink">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {principle.body}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
