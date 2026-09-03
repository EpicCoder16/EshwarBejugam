"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-studio ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-studio items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-mono text-[13px] tracking-wide text-ink"
        >
          ESHWAR BEJUGAM
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[12px] tracking-widest text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile: minimal single link row, no hamburger overlay needed at this content depth */}
        <ul className="flex items-center gap-5 md:hidden">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[11px] tracking-widest text-muted"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
