"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import posthog from "posthog-js";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border-2 border-ink/10 px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled
            ? "bg-white/85 shadow-playful-lg backdrop-blur-md"
            : "bg-white/60 backdrop-blur"
        }`}
      >
        <a
          href="#top"
          className="flex items-center gap-2 rounded-full px-2 py-1 font-display text-lg font-bold text-ink"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-coral to-violet text-white">
            AG
          </span>
          <span className="hidden sm:inline">Andrew</span>
        </a>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => posthog.capture("nav_link_clicked", { label: link.label.toLowerCase(), href: link.href })}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
