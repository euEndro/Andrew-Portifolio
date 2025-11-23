
import React from "react";
import { motion } from "framer-motion";

const skills = {
  Linguagens: [
    { name: "Java", logo: "/logos/java.svg" },
    { name: "Dart", logo: "/logos/dart.svg" },
    { name: "Python", logo: "/logos/python.svg" },
  ],
  Frameworks: [
    { name: "Spring Boot", logo: "/logos/spring.svg" },
    { name: "Flutter", logo: "/logos/flutter.svg" },
  ],
  "Bancos de Dados": [
    { name: "PostgreSQL", logo: "/logos/postgres.svg" },
  ],
  Tecnologias: [
    { name: "Git", logo: "/logos/git.svg" },
    { name: "GitHub", logo: "/logos/github.svg" },
    { name: "Linux", logo: "/logos/linux.svg" },
    { name: "Postman", logo: "/logos/postman.svg" },
  ],
};

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="w-full mt-20 text-white flex flex-col items-center"
    >
      <div className="max-w-6xl w-full px-6">

        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 opacity-90 text-center">
              {category}
            </h2>

            {/* USAR FLEX WRAP AQUI PARA CENTRALIZAR LINHAS */}
            <div
              className="
                flex flex-wrap justify-center
                gap-4
              "
            >
              {items.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 220, damping: 13 }}
                  className="flex justify-center"
                >
                  <div
                    className="
                      w-[250px] h-[110px]
                      flex flex-col items-center justify-center
                      rounded-3xl
                      backdrop-blur-l
                      bg-white/5
                      border border-white/20
                      shadow-[0_4px_20px_rgba(0,0,0,0.22)]
                      hover:shadow-[0_6px_25px_rgba(0,0,0,0.32)]
                      transition-shadow
                      relative overflow-hidden
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-8 h-8 mb-2 opacity-90 relative z-10"
                    />

                    <span className="text-white font-medium text-sm tracking-wide relative z-10">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
