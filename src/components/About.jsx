
import photo from '../assets/andrew.png'
import { useT } from './useT.js'
import { ShelfDivider } from './Shelf.jsx';

export default function About() {
  const t = useT();

  return (
    <section
      id="sobre-mim"
      className="w-full pb-24 text-bone flex flex-col items-center relative px-5 md:px-8"
    >
      <div className="max-w-6xl w-full mb-14">
        <ShelfDivider label={t("nav_about")} />
      </div>

      <div className="max-w-6xl w-full grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">

        {/* Photo, set as a mounted specimen rather than a hover-tilt card */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="joinery bg-malachite-mid p-2 w-full max-w-[320px]">
            <img
              src={photo}
              alt="Andrew Doni"
              className="w-full aspect-square object-cover grayscale-[0.15] contrast-[1.05]"
            />
          </div>
          <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-bone-dim">
            Andrew Doni
          </span>
        </div>

        {/* Text */}
        <div>
          <h3 className="font-display text-3xl md:text-4xl text-bone mb-7">{t("about_who_am_i")}</h3>
          <p className="text-[17px] text-bone-dim leading-[1.8] max-w-[68ch]">
            {t("about_paragraph1")} <b className="text-bone font-normal">{t("about_paragraph1_1b")}</b>
            {t("about_paragraph1_2")}
            <br /><br />
            {t("about_paragraph2")}<b className="text-bone font-normal">{t("about_paragraph2_1b")}</b>{t("about_paragraph2_2")}
            <br /><br />
            {t("about_paragraph3")}<b className="text-bone font-normal">{t("about_paragraph3_1b")}</b>{t("about_paragraph3_2")}<b className="text-bone font-normal">{t("about_paragraph3_2b")}</b>{t("about_paragraph3_3")}
            <br /><br />
            {t("about_paragraph4")}
          </p>
        </div>
      </div>
    </section>
  );
}
