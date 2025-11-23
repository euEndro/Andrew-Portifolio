
import TiltedCard from './TiltedCard';

export default function About() {
  return (
    <section
      id="sobre-mim"
      className="w-full py-32 text-white flex flex-col items-center"
    >
      <div className="max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-4xl font-bold mb-6">Quem sou eu?</h3>
          <p className="text-lg text-white leading-relaxed mb-6">
            Olá! Eu sou o Andrew Doni, <b>desenvolvedor focado em Backend & Mobile. </b>
            Curioso por natureza, gosto de entender como as coisas funcionam e transformar ideias em aplicações limpas, eficientes e bem estruturadas.
            <br />
            Estudo <b>Spring Boot</b> e arquitetura de <b>APIs REST</b>, combinando isso com minha base técnica em eletrotécnica e sistemas complexos
            <br />
            Atualmente curso <b>Ciências da Computação</b> na FAESA, após ter concluído o Curso <b>Técnico em Eletrotécnica</b> pelo SENAI, formação que fortaleceu minha capacidade de análise e resolução de problemas.
            <br />
            No fim, meu objetivo é simples: evoluir sempre e entregar projetos que façam sentido.
          </p>
        </div>

        {/* Foto com Tilt */}
        <div className="flex-1 flex justify-center">
          <TiltedCard
            imageSrc="https://private-user-images.githubusercontent.com/235644612/517157569-c0e345ba-a39c-4ea9-9cb7-7169cad94631.png?..."
            altText="Andrew Doni"
            captionText="Andrew Doni"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.3}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
      </div>

      {/* 🔥 TÍTULO INDICANDO A PRÓXIMA SEÇÃO */}
      <h2
        className="
          text-4xl font-bold mt-24 
        "
      >
        Habilidades Técnicas
      </h2>
    </section>
  );
}
