"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const floaters = [
  { emoji: "🀄", className: "left-[6%] top-[18%]", delay: 0 },
  { emoji: "🎲", className: "right-[8%] top-[12%]", delay: 0.6 },
  { emoji: "🎡", className: "left-[12%] bottom-[14%]", delay: 1.1 },
  { emoji: "📈", className: "right-[10%] bottom-[20%]", delay: 0.3 },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background blobs */}
      <div className="blob left-[-10%] top-[-5%] h-80 w-80 bg-coral/40" />
      <div className="blob right-[-8%] top-[10%] h-96 w-96 bg-violet/40" />
      <div className="blob bottom-[-10%] left-[30%] h-80 w-80 bg-teal/30" />

      {/* Floating emojis */}
      {floaters.map((f) => (
        <motion.span
          key={f.emoji + f.className}
          className={`pointer-events-none absolute hidden text-4xl sm:block lg:text-5xl ${f.className}`}
          animate={{ y: [0, -22, 0], rotate: [-6, 6, -6] }}
          transition={{
            duration: 6,
            delay: f.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {f.emoji}
        </motion.span>
      ))}

      <div className="section-pad grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="tag-chip mb-5 gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-teal" />
            Available for fun problems
          </span>
          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Andrew.{" "}
            <span className="bg-gradient-to-r from-coral via-bubblegum to-violet bg-clip-text text-transparent">
              I build things people actually use.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70 sm:text-xl">
            Partner Engineer at <strong className="text-ink">Uber</strong> with
            9+ years solving technical problems for external clients. I ship
            real-world solutions and develop full-stack consumer apps.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-ink px-6 py-3 font-display font-semibold text-cream shadow-playful-lg transition-transform hover:-translate-y-0.5"
            >
              See my work →
            </a>
            <a
              href="mailto:Andrew.Greenberg18@gmail.com"
              className="rounded-full border-2 border-ink/15 bg-white/70 px-6 py-3 font-display font-semibold text-ink backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              Say hello
            </a>
            <a
              href="https://github.com/agreenberg18"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink/15 bg-white/70 px-6 py-3 font-display font-semibold text-ink backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-greenberg-45980611b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-ink/15 bg-white/70 px-6 py-3 font-display font-semibold text-ink backdrop-blur transition-transform hover:-translate-y-0.5"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-coral via-bubblegum to-violet"
            animate={{ rotate: [4, -4, 4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="overflow-hidden rounded-[2.5rem] border-4 border-white bg-white shadow-playful-lg">
            <Image
              src="/andrew_headshot.png"
              alt="Andrew Greenberg"
              width={624}
              height={812}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <motion.div
            className="absolute -bottom-4 -left-4 rounded-2xl border-2 border-ink/10 bg-white px-4 py-2 font-display font-semibold shadow-playful"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            📍 Jersey City, NJ
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
