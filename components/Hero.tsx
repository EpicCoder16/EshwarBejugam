"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Instagram } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const STATS = [
  { value: "05", label: "PROJECTS" },
  { value: "02", label: "HACKATHON WINS" },
  { value: "01", label: "ACTIVE STARTUP" },
];

// Add real profile URLs here — left blank rather than invented.
const SOCIALS: { label: string; href?: string; Icon: typeof Github }[] = [
  { label: "GitHub", href: "https://github.com/EpicCoder16", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eshwar-bejugam-681a35320/", Icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/eshwarbejugam/", Icon: Instagram },
];

export default function Hero() {
  return (
    <section className="bg-grid-light relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pb-16 pt-28 md:px-12">
      <div className="mx-auto grid w-full max-w-studio grid-cols-1 gap-16 md:grid-cols-12 md:gap-8">
        {/* Left: editorial headline column */}
        <div className="md:col-span-8">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="font-mono text-[12px] tracking-widest text-muted"
          >
            PURDUE UNIVERSITY / COMPUTER SCIENCE / 2026
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 text-[15vw] font-medium leading-[0.92] tracking-tight text-ink sm:text-7xl md:text-[6.5vw] lg:text-8xl xl:text-9xl"
          >
            I turn ideas
            <br />
            into shipped
            <br />
            software.
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-2xl text-ink md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[10px] tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: studio-style bio card, anchors the whitespace */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="md:col-span-4 md:justify-self-end"
        >
          <div className="w-full max-w-[400px] border border-border bg-bg p-8 md:ml-auto">
            {/* Square photo, generously padded, with a hover-reveal social row */}
            <div className="group/photo relative aspect-square w-full overflow-hidden border border-border bg-bg-secondary rounded-[60px]">
              <div className="flex h-full w-full items-center justify-center">
              <img src="/photo.jpg" alt="Eshwar Bejugam" className="h-full w-full object-cover rounded-2xl scale-[3.5] origin-[center_34%]"/>

              </div>

              {/* Social icons pop out from the top on hover */}
              <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-2 p-3 opacity-0 -translate-y-3 transition-all duration-300 ease-studio group-hover/photo:pointer-events-auto group-hover/photo:translate-y-0 group-hover/photo:opacity-100">
                {SOCIALS.map(({ label, href, Icon }) =>
                  href ? (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center border border-border bg-bg text-ink transition-colors duration-200 ease-studio hover:border-ink hover:bg-ink hover:text-bg"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ) : (
                    <span
                      key={label}
                      aria-label={`${label} — add URL in components/Hero.tsx`}
                      className="flex h-9 w-9 items-center justify-center border border-border bg-bg text-border"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 text-lg font-medium tracking-tight text-ink">
              Eshwar Bejugam
            </div>
            <div className="mt-2 inline-block border border-border px-2 py-1 font-mono text-[10px] tracking-widest text-muted">
              CS @ PURDUE · BUILDING PATCHY
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Software engineer and builder based in West Lafayette, Indiana.
            </p>

            <a
              href="/Eshwar_Bejugam_Resume.pdf"
              download
              className="group mt-6 flex w-full items-center justify-between border border-border px-4 py-3 font-mono text-[11px] tracking-widest text-ink transition-colors duration-200 ease-studio hover:border-ink"
            >
              DOWNLOAD RESUME
              <Download className="h-3.5 w-3.5 text-muted transition-transform duration-200 ease-studio group-hover:translate-y-0.5 group-hover:text-ink" />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0.4] }}
        transition={{ duration: 2.4, delay: 0.6, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:right-12 md:translate-x-0"
      >
        <ArrowDown className="h-4 w-4 text-muted" aria-hidden="true" />
      </motion.div>
    </section>
  );
}
