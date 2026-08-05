import { useState, type FormEvent } from "react";
import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";


export function CTAFinal() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lead = { nome, whatsapp };
    console.log("lead", lead);
    window.location.href = LINK_DO_GRUPO;
  };

  const inputClasses =
    "h-[56px] w-full rounded-sm border border-gold bg-surface px-md font-body text-[16px] text-text placeholder:text-text-muted focus:border-champagne focus:outline-none focus:shadow-[0_0_0_3px_rgba(233,196,148,0.25)]";

  return (
    <section id="form-final" className="relative bg-bg-alt grain overflow-hidden">
      {/* Monograma ao fundo */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.06]"
        aria-hidden="true"
      >
        <img
          src="/grafismo-monograma-cp.svg"
          alt=""
          className="h-[80%] w-auto max-w-[90%] object-contain"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="mx-auto max-w-[560px] text-center">
          <h2 className="reveal font-heading text-[clamp(28px,3vw,42px)] font-semibold leading-[1.15] text-text-on-dark">
            Garanta seu lugar no grupo VIP
          </h2>

          <p className="reveal mt-md mx-auto max-w-[46ch] font-body text-[16px] leading-[1.7] text-text-on-dark md:text-[18px]">
            As{" "}
            <strong className="font-semibold">condições de fundadora</strong>{" "}
            são só pra quem está no grupo, e as vagas do Club são{" "}
            <strong className="font-semibold">limitadas</strong>. Deixe seu nome
            e WhatsApp pra entrar agora.
          </p>

          <form
            onSubmit={handleSubmit}
            className="reveal mt-lg flex flex-col gap-sm"
          >
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              aria-label="Seu nome"
              className={inputClasses}
            />
            <input
              type="tel"
              placeholder="Seu WhatsApp (com DDD)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              aria-label="Seu WhatsApp (com DDD)"
              className={inputClasses}
            />
            <CTAButton
              as="button"
              type="submit"
              variant="onDark"
              className="mt-sm w-full md:w-auto md:self-start"
            >
              QUERO ENTRAR NO GRUPO VIP
            </CTAButton>
          </form>

          <p className="reveal mt-lg font-heading text-[19px] italic text-champagne">
            Quando o Club abrir, quem estiver aqui dentro escolhe primeiro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTAFinal;
