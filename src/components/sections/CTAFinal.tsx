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
        <img src="/monograma-cp.png" alt="" className="h-[80%] w-auto max-w-[90%] object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="mx-auto max-w-[560px] text-center">
          <h2 className="reveal font-heading text-[clamp(28px,3vw,42px)] font-semibold leading-[1.15] text-text-on-dark">
            Faça parte do Grupo VIP
          </h2>

          <p className="reveal mt-md mx-auto max-w-[46ch] text-justify font-body text-[16px] leading-[1.7] text-text-on-dark md:text-[18px]">
            A primeira edição do <strong className="font-semibold">PATI CONCEPT CLUB</strong> será
            especial — e também será limitada. As fundadoras terão acesso a uma{" "}
            <strong className="font-semibold">condição exclusiva de lançamento</strong>, criada para
            celebrar os 7 anos da clínica e que não será repetida. Quem estiver no Grupo VIP
            conhecerá todos os detalhes e terá acesso antes de todo mundo. As vagas do Club serão
            limitadas e, quando essa primeira edição estiver completa, as inscrições serão
            encerradas. Se você quer estar entre as primeiras, esse é o momento.
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
            Seu lugar começa aqui. 🤍
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTAFinal;
