
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
          w-[250px] h-[110px]
          flex flex-col items-center justify-center
          rounded-3xl
          backdrop-blur-xl
          bg-white/5
          border border-white/20
          shadow-[0_4px_20px_rgba(0,0,0,0.22)]
          hover:shadow-[0_6px_25px_rgba(0,0,0,0.32)]
          transition-shadow
          relative overflow-hidden
        "
      >
        {/* brilho vidro */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

        {/* Ícone em branco usando mask */}
        <div
          className="w-8 h-8 mb-2 relative z-10"
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

        <span className="text-white font-medium text-sm tracking-wide relative z-10">
          {item.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="w-full mt-20 text-white flex flex-col items-center">
      <div className="max-w-6xl w-full px-6">

        {/* ======= LINHA SUPERIOR — 3 QUADRADOS IGUAIS ======= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 text-center items-stretch">

          {["Linguagens", "Frameworks", "Bancos de Dados"].map((category) => (
            <div
              key={category}
              className="
                bg-white/5 backdrop-blur-md border border-white/20
                rounded-3xl p-6 flex flex-col justify-between
              "
            >
              <h2 className="text-2xl font-bold mb-6 opacity-90">{category}</h2>

              <div className="flex flex-col items-center gap-4 mt-auto">
                {skills[category].map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* ======= LINHA INFERIOR — TECNOLOGIAS (CARD GRANDE) ======= */}
        <div
          className="
            w-full bg-white/5 backdrop-blur-md border border-white/20
            rounded-3xl p-8 mb-10
          "
        >
          <h2 className="text-2xl font-bold mb-6 opacity-90 text-center">Tecnologias</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills["Tecnologias"].map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
