
import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Troco",
    description:
      "App pessoal para monitoramento financeiro. Histórico de transações, gráficos intuitivos, organização simples e design moderno.",
    tech: ["Flutter", "Dart", "UI/UX"],
    repo: "https://github.com/euEndro/Troco",
  },
  {
    title: "Gestok",
    description:
      "Sistema web SaaS para gerenciamento de estoque, com visualização de produtos, controle de entradas/saídas e logica intuitiva.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/euEndro/Gestok",
  },
  {
    title: "Portfolio",
    description:
      "Este site que você está vendo agora! Design moderno e animações suaves.",
    tech: ["JavaScript", "React", "Tailwind", "Vite"],
    repo: "https://github.com/euEndro/Andrew-Portifolio",
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

      {/* 🔗 Botão do Repositório */}
      {project.repo && (
        <motion.a
          whileTap={{ scale: 0.95 }}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.25)", scale: 1.02 }}
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
          Ver Repositório →
        </motion.a>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="
        w-full text-white flex flex-col items-center
        pb-[20vh]
      "
    >
      
      <h2 className="text-4xl font-bold mb-5">Projetos</h2>

      <p className="text-white text-lg max-w-3xl text-center mb-20">
        Todos os meus projetos são <b>Open Source</b>. Sinta-se à vontade para explorar o código e avaliar aspectos como organização, escalabilidade, clareza e arquitetura.
      </p>


      <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

          </section>
  );
}
