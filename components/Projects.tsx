"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24">
      <div className="blob right-[-5%] top-[20%] h-72 w-72 bg-sunshine/30" />
      <div className="section-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Things I&apos;ve built &amp; shipped.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            A mix of consumer apps, developer tools, and a market scanner, all
            taken from idea to real users.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
