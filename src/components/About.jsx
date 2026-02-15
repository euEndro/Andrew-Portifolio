
import TiltedCard from './TiltedCard';
import photo from '../assets/20260214_205724(1).jpg'
import { useT } from './useT.js'

export default function About() {
  const t = useT();

  return (
    <section
      id="sobre-mim"
      className="w-full pb-[20vh] text-white flex flex-col items-center relative"
    >
          <h2 className="text-4xl font-bold text-white mb-20">
            {t("nav_about")}
          </h2>

      <div className="max-w-6xl px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-bold mb-6">{t("about_who_am_i")}</h3>
          <p className="text-base text-white leading-relaxed mb-6">
            {t("about_paragraph1")} <b>{t("about_paragraph1_1b")}</b>
            {t("about_paragraph1_2")}
            <br />
            {t("about_paragraph2")}<b>{t("about_paragraph2_1b")}</b>{t("about_paragraph2_2")}
            <br />
            {t("about_paragraph3")}<b>{t("about_paragraph3_1b")}</b>{t("about_paragraph3_2")}<b>{t("about_paragraph3_2b")}</b>{t("about_paragraph3_3")}
            <br />
            {t("about_paragraph4")}
          </p>
        </div>

        {/* Foto com Tilt */}
        <div className="flex-1 flex justify-center">
          <TiltedCard
            imageSrc={photo}
            altText="Andrew Doni"
            captionText="Andrew Doni"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>
      </div>


    </section>
  );
}
