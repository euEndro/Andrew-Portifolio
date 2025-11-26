
import React from "react";
import { motion } from "framer-motion";

const skills = {
  Linguagens: [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg" },
    { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-plain.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
  ],
  Frameworks: [
    { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-plain.svg" },
  ],
  "Bancos de Dados": [
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
  ],
  Tecnologias: [
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain.svg" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-plain.svg" },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-plain.svg" },
  ],
};

function Card({ item }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 220, damping: 13 }}
      className="flex justify-center"
    >
      <div
        className="
          w-[200px] h-[90px]        /* menor tamanho */
          flex flex-col items-center justify-center
          rounded-3xl              /* borda um pouco menor */
          backdrop-blur-lg
          bg-white/5
          border border-white/20
          shadow-[0_3px_15px_rgba(0,0,0,0.18)]
          hover:shadow-[0_5px_20px_rgba(0,0,0,0.28)]
          transition-shadow
          relative overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        <div
          className="w-6 h-6 mb-1 relative z-10" /* ícone menor */
          style={{
            maskImage: `url(${item.logo})`,
            WebkitMaskImage: `url(${item.logo})`,
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            backgroundColor: "white",
          }}
        />

        <span className="text-white font-medium text-xs tracking-wide relative z-10">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="w-full mt-16 text-white flex flex-col items-center">
      <div className="max-w-6xl w-full px-4">

        {/* LINHA SUPERIOR — 3 QUADRADOS IGUAIS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center items-stretch max-w-[900px] mx-auto">
          {["Linguagens", "Frameworks", "Bancos de Dados"].map((category) => (
            <div
              key={category}
              className="
                bg-white/5 backdrop-blur-md border border-white/20
                rounded-3xl p-4 flex flex-col justify-between
              "
            >
              <h2 className="text-xl font-bold mb-4 opacity-90">{category}</h2>

              <div className="flex flex-col items-center gap-3 mt-auto">
                {skills[category].map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* LINHA INFERIOR — TECNOLOGIAS */}
        <div
          className="
            w-full bg-white/5 backdrop-blur-md border border-white/20
            rounded-2xl p-6 mb-10
            max-w-[900px] mx-auto
          "
        >
          <h2 className="text-xl font-bold mb-4 opacity-90 text-center">Tecnologias</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {skills["Tecnologias"].map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </div>

      </div>

      {/* TÍTULO DA PRÓXIMA SEÇÃO — PROJETOS */}
      <h2 className="text-4xl font-bold mt-20 mb-4">Projetos</h2>
    </section>
  );
}
