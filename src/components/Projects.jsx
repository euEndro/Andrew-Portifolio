
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Troco",
    description:
      "App pessoal para monitoramento financeiro. Histórico de transações, gráficos intuitivos, organização simples e design focado em um público jovem.",
    tech: ["Flutter", "Dart"],
  },
  {
    title: "Gestok",
    description:
      "Sistema web SaaS para gerenciamento de estoque, com visualização de produtos, controle de entradas/saídas e design intuitivo.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Portfolio",
    description:
      "Este site que você está vendo agora! Design moderno, animações suaves e otimização de performance.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
];

function ProjectCard({ project }) {
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

      <div className="flex flex-wrap gap-3 mt-auto">
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
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="
        w-full mt-20 text-white flex flex-col items-center
        relative pb-60
      "
    >
      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      {/* 🔥 TÍTULO DA PRÓXIMA SEÇÃO — CONTATE-ME */}
      <h2
        className="
          text-5xl font-bold opacity-90
          absolute bottom-6
        "
      >
        Contate-me
      </h2>
    </section>
  );
}
