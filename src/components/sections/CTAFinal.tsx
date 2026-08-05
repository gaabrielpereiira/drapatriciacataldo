import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";


export function CTAFinal() {
  const revealRef = useScrollReveal<HTMLDivElement>();


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
            <strong className="font-semibold">limitadas</strong>. Clique no botão
            abaixo e entre agora.
          </p>

          <div className="reveal mt-lg flex flex-col gap-sm">
            <CTAButton
              href={LINK_DO_GRUPO}
              target="_blank"
              rel="noopener noreferrer"
              variant="onDark"
              className="w-full md:w-auto md:self-start"
            >
              QUERO ENTRAR NO GRUPO VIP
            </CTAButton>
          </div>

          <p className="reveal mt-lg font-heading text-[19px] italic text-champagne">
            Quando o Club abrir, quem estiver aqui dentro escolhe primeiro.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTAFinal;
