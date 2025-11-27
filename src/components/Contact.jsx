
export default function ContateMe() {
  return (
    <section id="contato" className="pb-[20vh] w-full flex flex-col justify-center ">
      <h2 className="text-4xl font-bold text-center mb-20">
        Contate-me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Texto da esquerda */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Como entrar em contato?</h3>
          <p className="text-lg leading-relaxed">
            Se você deseja falar comigo — seja para discutir oportunidades de trabalho, propostas de parceria, desenvolvimento de soluções personalizadas ou simplesmente trocar uma ideia sobre tecnologia — estou sempre aberto a conversas.<br /><br />
            Fique à vontade para usar o formulário ao lado. Leia, escreva com calma e envie sua mensagem; ela chegará diretamente ao meu e-mail exatamente como for preenchida.
          </p>
      </div>

        {/* Formulário da direita */}
        <form
          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 space-y-4 shadow-xl"
          action="https://formsubmit.co/37a62063ad51ebbbdf4a44020697feb5"
          method="POST"
        >
          {/* Anti-spam */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />

          <div className="flex flex-col space-y-2">
            <label className="text-sm">Seu email</label>
            <input
              type="email"
              name="email"
              required
              className="p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm">Assunto</label>
            <input
              type="text"
              name="assunto"
              required
              className="p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-sm">Conteúdo</label>
            <textarea
              name="mensagem"
              required
              rows="5"
              className="p-3 rounded-xl bg-white/20 border border-white/30 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-full font-semibold backdrop-blur-lg bg-white/20 hover:bg-white/30 transition shadow-lg"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
