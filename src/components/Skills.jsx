
import React from 'react';
import { motion } from 'framer-motion';

// Example logos: replace src with your assets
const skills = {
  Linguagens: [
    { name: 'Java', logo: '/logos/java.svg' },
    { name: 'JavaScript', logo: '/logos/js.svg' },
    { name: 'TypeScript', logo: '/logos/ts.svg' },
    { name: 'Python', logo: '/logos/python.svg' },
  ],
  Frameworks: [
    { name: 'Spring Boot', logo: '/logos/spring.svg' },
    { name: 'React', logo: '/logos/react.svg' },
    { name: 'Flutter', logo: '/logos/flutter.svg' },
  ],
  'Bancos de Dados': [
    { name: 'PostgreSQL', logo: '/logos/postgres.svg' },
    { name: 'MongoDB', logo: '/logos/mongo.svg' },
  ],
  Tecnologias: [
    { name: 'Docker', logo: '/logos/docker.svg' },
    { name: 'Git', logo: '/logos/git.svg' },
    { name: 'Linux', logo: '/logos/linux.svg' },
  ],
};

export default function SkillsPills() {
  return (
    <div className="w-full flex flex-col gap-10 mt-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold tracking-wide text-white/90">{category}</h2>

          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg"
                style={{ minWidth: '180px' }}
              >
                <img src={item.logo} alt={item.name} className="w-6 h-6" />
                <span className="text-white/90 font-medium text-base">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
