"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <span className="tag-chip mb-4">🗺️ The journey</span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Where I&apos;ve been.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-1 rounded-full bg-ink/10 sm:left-[23px]" />
          <div className="flex flex-col gap-6">
            {experience.map((role, i) => (
              <motion.div
                key={role.company}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex gap-5 sm:gap-6"
              >
                <div
                  className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border-4 border-cream text-lg shadow-playful sm:h-12 sm:w-12 sm:text-xl"
                  style={{ backgroundColor: role.color }}
                >
                  <span>{role.emoji}</span>
                </div>
                <div className="flex-1 rounded-4xl border-2 border-ink/10 bg-white/70 p-5 backdrop-blur sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl font-bold">
                      {role.title}{" "}
                      <span className="text-ink/50">· {role.company}</span>
                    </h3>
                    <span className="text-sm font-semibold text-ink/50">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-2 text-ink/70">{role.highlight}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
