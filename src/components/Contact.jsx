
import { useState } from "react";
import { useT } from "./useT.js";
import { ShelfPanel, ShelfDivider } from "./Shelf.jsx";

const WEBHOOK_URL = "https://n8n.eletrofire.docalli.com/webhook/andrew-portfolio";

export default function ContateMe() {
  const t = useT();
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="pb-28 w-full flex flex-col justify-center">
      <div className="mb-14">
        <ShelfDivider label={t("contact_title")} />
      </div>

      <h2 className="font-display text-4xl md:text-5xl text-bone mb-14">
        {t("contact_title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* Left text */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl md:text-3xl text-bone">{t("contact_how_to")}</h3>

          <p className="text-[16px] text-bone-dim leading-[1.8] max-w-[55ch]">
            {t("contact_paragraph1")}<br /><br />
            {t("contact_paragraph2")}
          </p>
        </div>

        {/* Form */}
        <ShelfPanel tone="bone" taper={false} className="w-full">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
              <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-dim">
                {t("contact_email")}
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                className="p-3 bg-transparent border border-ink/25 text-ink focus:outline-none focus:border-cinnabar"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-dim">
                {t("contact_subject")}
              </label>
              <input
                type="text"
                name="subject"
                required
                value={form.subject}
                onChange={handleChange("subject")}
                className="p-3 bg-transparent border border-ink/25 text-ink focus:outline-none focus:border-cinnabar"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label className="font-mono text-[11px] tracking-[0.1em] uppercase text-ink-dim">
                {t("contact_content")}
              </label>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={handleChange("message")}
                className="p-3 bg-transparent border border-ink/25 text-ink focus:outline-none focus:border-cinnabar"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 font-mono text-[13px] tracking-[0.1em] uppercase bg-ink text-bone hover:bg-cinnabar transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? t("contact_sending") : t("contact_send")}
            </button>

            {status === "success" && (
              <p className="font-mono text-[12px] tracking-[0.04em] text-jade-deep">
                {t("contact_sent_success")}
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-[12px] tracking-[0.04em] text-cinnabar">
                {t("contact_sent_error")}
              </p>
            )}
          </form>
        </ShelfPanel>
      </div>
    </section>
  );
}
