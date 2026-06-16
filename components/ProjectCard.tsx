"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import posthog from "posthog-js";
import type { Project } from "@/lib/projects";

function PhonePreview({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full items-end justify-center gap-3 overflow-hidden pt-8">
      {project.images.slice(0, 2).map((src, i) => (
        <motion.div
          key={src}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className={`relative w-1/2 max-w-[150px] overflow-hidden rounded-[1.6rem] border-[5px] border-white shadow-playful-lg ${
            i === 0 ? "translate-y-4 rotate-[-5deg]" : "translate-y-8 rotate-[5deg]"
          }`}
        >
          <Image
            src={src}
            alt={`${project.name} screenshot`}
            width={300}
            height={650}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
}

function MotifPreview({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full min-h-[200px] items-center justify-center">
      <motion.div
        className="grid h-32 w-32 place-items-center rounded-[2rem] border-4 border-white bg-white/30 text-6xl shadow-playful-lg backdrop-blur"
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {project.emoji}
      </motion.div>
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-4xl border-2 border-ink/10 bg-white shadow-playful transition-shadow hover:shadow-playful-lg"
    >
      <div
        className={`relative h-56 bg-gradient-to-br ${project.gradient} px-6`}
      >
        {project.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink shadow-sm">
            {project.badge}
          </span>
        )}
        <span className="absolute right-5 top-4 text-3xl">{project.emoji}</span>
        {project.imageStyle === "phone" ? (
          <PhonePreview project={project} />
        ) : (
          <MotifPreview project={project} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold">{project.name}</h3>
        <p className="mt-1 font-display text-base font-medium text-ink/50">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-ink/70">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="tag-chip">
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture("project_link_clicked", { project_id: project.id, project_name: project.name, link_label: link.label, link_href: link.href })}
                className="inline-flex items-center gap-1 rounded-full bg-ink px-5 py-2.5 font-display font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
