
import TiltedCard from './TiltedCard';

export default function About() {
  return (
    <section
      id="sobre-mim"
      className="w-full py-32 bg-background dark:bg-background text-white flex justify-center"
    >
      <div className="max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Olá! Eu sou Andrew Doni, desenvolvedor Backend & Mobile com experiência em criar aplicações modernas, escaláveis e eficientes.
            Sou apaixonado por tecnologia, aprendizado contínuo e adoro enfrentar desafios que me permitam crescer como profissional.
            Gosto de trabalhar com metodologias ágeis, sempre buscando entregar valor e qualidade nos projetos que participo.
          </p>
        </div>

        {/* Tilted Card com foto */}
        <div className="flex-1 flex justify-center">
          <TiltedCard
            imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
            altText="Foto do Andrew Doni"
            captionText="Andrew Doni"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-white font-bold text-center">
                Andrew Doni
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
