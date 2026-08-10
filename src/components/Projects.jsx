
import { useT } from "./useT.js";
import { ShelfPanel, ShelfDivider } from "./Shelf.jsx";

const projects = (t) => [
  {
    title: t("project_atrio_title"),
    description: t("project_atrio_desc"),
    tech: ["Python", "FastAPI", "pgvector", "RAG", "OAuth", "Google Workspace API", "Flutter", "JWT"],
    status: "dev",
    site: "https://atrio.docalli.com",
  },
  {
    title: t("project_whatsapp_ai_title"),
    description: t("project_whatsapp_ai_desc"),
    tech: ["n8n", "Evolution API", "Redis"],
    status: "prod",
  },
  {
    title: t("project_maintenance_title"),
    description: t("project_maintenance_desc"),
    tech: ["n8n", "Google Sheets", "Google Docs", "Gmail", "WhatsApp Integration"],
    status: "prod",
  },
  {
    title: t("project_troco_title"),
    description: t("project_troco_desc"),
    tech: ["Flutter", "Dart", "UI/UX", "WhatsApp Integration", "AI Chat"],
    status: "dev",
  },
  {
    title: t("project_gestok_title"),
    description: t("project_gestok_desc"),
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    status: "archived",
    repo: "https://github.com/euEndro/Gestok",
  },
  {
    title: t("project_dlgroup_title"),
    description: t("project_dlgroup_desc"),
    tech: ["JavaScript", "React", "Tailwind", "Vite", "FastAPI", "PostgreSQL", "SlowAPI", "Cloudflare Turnstile"],
    status: "prod",
    site: "https://docalli.com",
  },
];

function ProjectCard({ project, index, t }) {
  return (
    <ShelfPanel tone="bone" className="h-full flex flex-col">
      <div className="flex items-center justify-between gap-2 mb-3">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-dim">
          Item {String(index + 1).padStart(2, "0")}
        </p>
        {project.status === "dev" && (
          <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-cinnabar border border-cinnabar/50 px-2 py-0.5">
            {t("project_status_dev")}
          </span>
        )}
        {project.status === "archived" && (
          <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-ink-dim border border-ink/25 px-2 py-0.5">
            {t("project_status_archived")}
          </span>
        )}
        {project.status === "prod" && (
          <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-jade-deep border border-jade-deep/50 px-2 py-0.5">
            {t("project_status_prod")}
          </span>
        )}
      </div>
      <h3 className="font-display text-2xl text-ink mb-3">{project.title}</h3>
      <p className="text-[15px] text-ink-dim leading-relaxed mb-6 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] tracking-[0.06em] uppercase border border-ink/20 text-ink-dim px-2.5 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.site && (
        <a
          href={project.site}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] tracking-[0.08em] uppercase text-ink border-t border-ink/20 pt-4 hover:text-cinnabar transition-colors"
        >
          {t("project_visit_site")}
        </a>
      )}

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[12px] tracking-[0.08em] uppercase text-ink border-t border-ink/20 pt-4 hover:text-cinnabar transition-colors"
        >
          {t("project_view_repo")}
        </a>
      )}
    </ShelfPanel>
  );
}

export default function Projects() {
  const t = useT();

  return (
    <section
      id="projetos"
      className="w-full flex flex-col items-center pb-24 px-5 md:px-8"
    >
      <div className="max-w-6xl w-full mb-14">
        <ShelfDivider label={t("projects_title")} />
      </div>

      <div className="max-w-6xl w-full mb-14">
        <h2 className="font-display text-4xl md:text-5xl text-bone mb-5">{t("projects_title")}</h2>
        <p className="text-bone-dim text-lg max-w-2xl leading-relaxed">
          {t("projects_description")}
          <b className="text-bone"> {t("projects_description_b")}</b>
          {t("projects_description2")}
        </p>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {projects(t).map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} t={t} />
        ))}
      </div>
    </section>
  );
}
