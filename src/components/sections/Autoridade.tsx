import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";

export function Autoridade() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="autoridade" className="bg-surface">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div
          ref={revealRef}
          className="grid grid-cols-1 items-center gap-lg md:grid-cols-[40fr_60fr]"
        >
          {/* Imagem */}
          <div className="reveal w-full">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gold bg-bg-alt">
              <img
                src="/autoridade-patricia.jpg"
                alt="Dra. Patrícia Cataldo"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Coluna de texto */}
          <div className="flex flex-col items-start text-left md:items-start md:text-left">
            {/* Título */}
            <h2 className="reveal mx-auto w-full text-center font-heading text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.2] text-text md:mx-0 md:text-left">
              Quem é a Dra. Patrícia Cataldo
            </h2>

            {/* Corpo */}
            <p className="reveal mx-auto mt-md max-w-[54ch] text-center font-body text-[16px] leading-[1.7] text-text md:mx-0 md:text-left md:text-[18px]">
              Cirurgiã-dentista, com <strong className="font-semibold">12 anos de formação</strong>,
              e especialista em Harmonização Orofacial. Ao longo dessa trajetória, meu trabalho
              sempre teve o mesmo propósito: unir{" "}
              <strong className="font-semibold">conhecimento, técnica e naturalidade</strong> para
              valorizar a beleza de cada paciente, respeitando sua individualidade. Porque cada
              rosto é único — e merece ser cuidado de forma personalizada, segura e consciente.
            </p>

            {/* Hairline + frase-âncora */}
            <div className="reveal mx-auto mt-md md:mx-0">
              <div
                aria-hidden="true"
                className="mx-auto mt-md h-px w-[60px] md:mx-0"
                style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
              />
              <p className="mx-auto mt-md max-w-[48ch] text-center font-body text-[17px] italic leading-[1.7] text-accent md:mx-0 md:text-left">
                Naturalidade não é fazer menos. É saber exatamente o que fazer.
              </p>
            </div>

            {/* CTA */}
            <div className="reveal mx-auto mt-md md:mx-0">
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
      </div>
    </section>
  );
}

export default Autoridade;
