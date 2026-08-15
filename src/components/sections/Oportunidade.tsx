import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";

export function Oportunidade() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="oportunidade" className="bg-bg">
      <div className="relative z-10 mx-auto max-w-[680px] px-md py-section-mobile text-center md:px-lg md:py-section">
        <div ref={revealRef}>
          {/* Título */}

          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text">
            Por que entrar agora?
          </h2>

          {/* Corpo */}
          <p className="reveal mx-auto mt-md max-w-[54ch] font-body text-[16px] leading-[1.7] text-text md:text-[18px]">
            Neste mês, nossa clínica completa <strong className="font-semibold">7 anos</strong>.
            Para celebrar essa história, nasce o{" "}
            <strong className="font-semibold">PATI CONCEPT CLUB</strong> — nosso plano anual de
            toxina botulínica e uma nova forma de viver o cuidado com a beleza, com mais leveza,
            planejamento e constância. Essa primeira edição terá uma condição exclusiva para as
            fundadoras, com benefícios pensados especialmente para essa celebração. Tudo será
            apresentado primeiro no Grupo VIP.
          </p>

          {/* Frase-âncora */}
          <div className="reveal">
            <div
              aria-hidden="true"
              className="mx-auto mt-lg h-px w-[60px]"
              style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
            />
            <p className="mx-auto mt-md max-w-[46ch] font-body text-[17px] italic leading-[1.7] text-accent">
              Um convite para fazer parte desde o começo.
            </p>
          </div>

          {/* CTA */}
          <div className="reveal mt-lg">
            <CTAButton
              href={LINK_DO_GRUPO}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto"
            >
              QUERO ENTRAR NO GRUPO VIP
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Oportunidade;
