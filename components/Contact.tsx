"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-4 pb-10 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border-2 border-ink/10 bg-gradient-to-br from-violet via-bubblegum to-coral p-10 text-center text-white shadow-playful-lg sm:p-16"
      >
        <span className="text-5xl">👋</span>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Let&apos;s build something fun.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
          Whether it&apos;s a tricky integration, an AI-powered tool, or a
          weekend app idea, I&apos;d love to hear about it.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:Andrew.Greenberg18@gmail.com"
            className="rounded-full bg-white px-6 py-3 font-display font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Andrew.Greenberg18@gmail.com
          </a>
          <a
            href="https://github.com/agreenberg18"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/60 px-6 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/andrew-greenberg-45980611b/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/60 px-6 py-3 font-display font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            LinkedIn ↗
          </a>
        </div>
      </motion.div>

      <footer className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-3 text-sm font-semibold text-ink/50 sm:flex-row">
        <span>© {new Date().getFullYear()} Greenberg Labs LLC</span>
        <span>Partner Engineer · Jersey City, NJ</span>
      </footer>
    </section>
  );
}
