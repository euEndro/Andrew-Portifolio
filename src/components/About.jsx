
import TiltedCard from './TiltedCard';
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
            imageSrc="https://private-user-images.githubusercontent.com/235644612/517157569-c0e345ba-a39c-4ea9-9cb7-7169cad94631.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM5MjMxMjAsIm5iZiI6MTc2MzkyMjgyMCwicGF0aCI6Ii8yMzU2NDQ2MTIvNTE3MTU3NTY5LWMwZTM0NWJhLWEzOWMtNGVhOS05Y2I3LTcxNjljYWQ5NDYzMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMTIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTEyM1QxODMzNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODE4MGMyYWRmZTBiMjQ3Njg4NWY2NDBiMjdhNDViMTNjN2MyNGNkZGM5OTI2ZTRlOWUwOTE1NzUyOTM0YmEyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.qiyjp5WaSH_q5ANfgKNHXpadnTGc5qq9WXbubPPG6Yk"
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


    </section>
  );
}
