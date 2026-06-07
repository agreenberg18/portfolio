"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Swift",
  "Node / Express",
  "Vue",
  "Python",
  "SQL",
  "Supabase",
  "LLMs / RAG",
  "MCP",
  "Google Analytics",
  "BigQuery",
];

const traits = [
  {
    emoji: "🤝",
    title: "Technical x Customer-facing",
    body: "I live at the crossroads of engineering and the people who use it, turning real customer problems into working solutions.",
  },
  {
    emoji: "🚀",
    title: "0 to 1",
    body: "I take ideas from a blank repo to a shipped product, comfortable owning the whole path from spec to launch.",
  },
  {
    emoji: "🧩",
    title: "Full-stack & AI",
    body: "Web, mobile, backend, and AI-powered tooling, I reach for whatever the problem actually needs.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24">
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="tag-chip mb-4">👋 About me</span>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            I live at the crossroads of technical and customer-facing.
          </h2>
          <p className="mt-6 text-lg text-ink/70">
            As a Partner Engineer, my favorite work happens in the space between
            deep technical problems and the people on the other side of them. I
            speak fluent engineer and fluent customer, and I love translating
            between the two: scoping the real problem, building the solution, and
            making sure it actually lands.
          </p>
          <p className="mt-4 text-lg text-ink/70">
            That same instinct carries into my own projects. I build consumer
            apps end-to-end with React, React Native, Swift, and a lot of
            Supabase, then ship them to real users and learn from how they use
            them. I hold a M.S. in Computer Science from Pace University.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-4xl border-2 border-ink/10 bg-white/70 p-6 backdrop-blur"
            >
              <div className="text-3xl">{t.emoji}</div>
              <div className="mt-3 font-display text-xl font-bold text-violet">
                {t.title}
              </div>
              <div className="mt-2 text-sm font-semibold text-ink/60">
                {t.body}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="mb-4 font-display text-xl font-semibold text-ink/70">
            My go-to stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{ y: -4, rotate: -2 }}
                className="cursor-default rounded-full border-2 border-ink/10 bg-white px-4 py-2 font-display font-semibold text-ink shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
