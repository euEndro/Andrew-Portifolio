
import { useT } from "./useT.js";
import { ShelfPanel, ShelfDivider } from "./Shelf.jsx";

export default function Skills() {
  const t = useT();

  const domains = [
    {
      name: t("skills_domain_systems"),
      desc: t("skills_domain_systems_desc"),
      items: ["Linux", "Cloud", "Server Infrastructure", "Docker", "Docker Compose", "Proxy (Nginx)", "DNS & Domain Management", "GitHub Actions", "Cloudflare", "Turnstile", "n8n"],
    },
    {
      name: t("skills_domain_architecture"),
      desc: t("skills_domain_architecture_desc"),
      items: ["Java", "Spring Boot", "Python", "FastAPI", "PostgreSQL", "pgvector", "Redis", "RAG", "API Integration"],
    },
    {
      name: t("skills_domain_product"),
      desc: t("skills_domain_product_desc"),
      items: ["JavaScript", "React", "Next.js", "Vite", "Tailwind", "Flutter", "Dart"],
    },
    {
      name: t("skills_domain_practice"),
      desc: t("skills_domain_practice_desc"),
      items: ["Git", "GitHub", "Postman", "Claude Code"],
    },
  ];

  return (
    <section id="habilidades" className="w-full pb-24 text-bone flex flex-col items-center px-5 md:px-8">
      <div className="max-w-6xl w-full mb-14">
        <ShelfDivider label={t("nav_skills")} />
      </div>

      <div className="max-w-6xl w-full mb-14">
        <h2 className="font-display text-4xl md:text-5xl text-bone">
          {t("skills_title")}{t("skills_title2")}
        </h2>
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8">
        {domains.map((domain) => (
          <ShelfPanel key={domain.name} tone="bone" className="h-full">
            <h3 className="font-display text-xl text-ink mb-2">{domain.name}</h3>
            <p className="text-[14px] text-ink-dim leading-relaxed mb-6 max-w-[48ch]">
              {domain.desc}
            </p>
            <div className="flex flex-wrap gap-2 pt-5 border-t border-ink/15">
              {domain.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] tracking-[0.04em] text-ink-dim border border-ink/20 px-2.5 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </ShelfPanel>
        ))}
      </div>
    </section>
  );
}
