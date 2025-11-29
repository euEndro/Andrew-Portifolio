
import React from "react";
import { motion } from "framer-motion";
import { useT } from "./useT.js";

const projects = (t) => [
  {
    title: t("project_troco_title"),
    description: t("project_troco_desc"),
    tech: ["Flutter", "Dart", "UI/UX"],
    repo: "https://github.com/euEndro/Troco",
  },
  {
    title: t("project_gestok_title"),
    description: t("project_gestok_desc"),
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/euEndro/Gestok",
  },
  {
    title: t("project_portfolio_title"),
    description: t("project_portfolio_desc"),
    tech: ["JavaScript", "React", "Tailwind", "Vite"],
    repo: "https://github.com/euEndro/Andrew-Portifolio",
  },
];

function ProjectCard({ project, t }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 15 }}
      className="
        bg-white/5 backdrop-blur-md border border-white/20
        rounded-3xl p-8 shadow-[0_6px_25px_rgba(0,0,0,0.22)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.32)]
        transition-shadow
        flex flex-col justify-between
      "
    >
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>

      <p className="text-white/80 text-base leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              bg-white/10 border border-white/20
              text-white text-sm px-4 py-2 rounded-full
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {project.repo && (
        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{
            backgroundColor: "rgba(255,255,255,0.25)",
            scale: 1.02,
          }}
          href={project.repo}
          target="_blank"
          className="
            w-full text-center
            bg-white/10 border border-white/20
            text-white font-semibold
            py-2.5 rounded-2xl
            hover:bg-white/20 transition
          "
        >
          {t("project_view_repo")}
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  const t = useT();

  return (
    <section
      id="projetos"
      className="
        w-full text-white flex flex-col items-center
        pb-[20vh]
      "
    >
      <h2 className="text-4xl font-bold mb-5">{t("projects_title")}</h2>

      <p className="text-white text-lg max-w-3xl text-center mb-20">
        {t("projects_subtitle1")}
        <b> {t("projects_subtitle_bold")} </b>
        {t("projects_subtitle2")}
      </p>

      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects(t).map((project) => (
          <ProjectCard key={project.title} project={project} t={t} />
        ))}
      </div>
    </section>
  );
}
