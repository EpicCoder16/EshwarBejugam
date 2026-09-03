"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const INQUIRY_EMAIL = "ebejugam@purdue.edu";
const FORMSPREE_URL = "https://formspree.io/f/mljenplv";

const LINKS: { label: string; href?: string }[] = [
  { label: "GITHUB", href: "https://github.com/EpicCoder16" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/eshwar-bejugam-681a35320/" },
  { label: "EMAIL", href: `mailto:${INQUIRY_EMAIL}` },
];

const fadeUp = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const inputClass =
  "w-full border border-border bg-bg px-4 py-3 text-sm text-ink placeholder:text-muted/60 transition-colors duration-200 focus:border-ink focus:outline-none";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          _subject: subject.trim()
            ? `Inquiry: ${subject.trim()}`
            : `Inquiry from ${name.trim()}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data.error === "string" ? data.error : "Something went wrong."
        );
      }

      setStatus("success");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <footer id="contact" className="border-t border-border px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-studio">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-xl text-4xl font-medium tracking-tight text-ink md:text-6xl"
            >
              Let&rsquo;s build something.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12 flex flex-wrap gap-x-10 gap-y-3"
            >
              {LINKS.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="font-mono text-[12px] tracking-widest text-border"
                  >
                    {link.label}
                  </span>
                )
              )}
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="font-mono text-[11px] tracking-widest text-muted">
              INQUIRIES
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              Have a question, opportunity, or project in mind? Send a note and
              I&rsquo;ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="inquiry-name" className="font-mono text-[10px] tracking-widest text-muted">
                    NAME
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
                <div>
                  <label htmlFor="inquiry-email" className="font-mono text-[10px] tracking-widest text-muted">
                    EMAIL
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@email.com"
                    className={`mt-2 ${inputClass}`}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-subject" className="font-mono text-[10px] tracking-widest text-muted">
                  SUBJECT
                </label>
                <input
                  id="inquiry-subject"
                  type="text"
                  name="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  placeholder="What's this about?"
                  className={`mt-2 ${inputClass}`}
                />
              </div>

              <div>
                <label htmlFor="inquiry-message" className="font-mono text-[10px] tracking-widest text-muted">
                  MESSAGE
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Your question or message..."
                  className={`mt-2 resize-y ${inputClass}`}
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 border border-border px-6 py-3 font-mono text-[11px] tracking-widest text-ink transition-colors duration-200 ease-studio hover:border-ink disabled:cursor-not-allowed disabled:opacity-50 sm:justify-between"
                >
                  {status === "loading" ? "SENDING…" : "SEND INQUIRY"}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 ease-studio group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                {status === "success" && (
                  <p className="font-mono text-[10px] tracking-widest text-accent">
                    MESSAGE SENT — I&rsquo;LL GET BACK TO YOU SOON.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-mono text-[10px] tracking-widest text-red-600">
                    {error.toUpperCase()}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col gap-2 border-t border-border pt-8 font-mono text-[10px] tracking-widest text-muted md:flex-row md:items-center md:justify-between">
          <span>BUILT FROM SCRATCH</span>
          <span>NEXT.JS / TYPESCRIPT / TAILWIND</span>
          <span>© 2026 ESHWAR BEJUGAM</span>
        </div>
      </div>
    </footer>
  );
}
