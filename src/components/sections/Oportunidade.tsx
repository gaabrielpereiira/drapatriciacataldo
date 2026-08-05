import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";
import seloAsset from "../../assets/selo-7-anos.png.asset.json";


export function Oportunidade() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="oportunidade" className="bg-bg">
      <div className="relative z-10 mx-auto max-w-[680px] px-md py-section-mobile text-center md:px-lg md:py-section">
        <div ref={revealRef}>
          {/* Selo */}
          <div className="reveal mx-auto mb-lg flex aspect-[1/1] w-[96px] items-center justify-center overflow-hidden rounded-lg border border-gold bg-surface md:w-[120px]">
            <img
              src={seloAsset.url}
              alt="Selo 7 anos Clínica Patrícia Cataldo"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>


          {/* Título */}
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text">
            Por que entrar agora
          </h2>

          {/* Corpo */}
          <p className="reveal mx-auto mt-md max-w-[54ch] font-body text-[16px] leading-[1.7] text-text md:text-[18px]">
            Neste mês, a clínica da Dra. Patrícia completa{" "}
            <strong className="font-semibold">7 anos</strong>. Para marcar a data, ela vai
            abrir uma turma de fundadoras do Club do Botox, com uma condição que não vai se
            repetir. Tudo é revelado primeiro, e só, para quem estiver no grupo VIP.
          </p>

          {/* Frase-âncora */}
          <div className="reveal">
            <div
              aria-hidden="true"
              className="mx-auto mt-lg h-px w-[60px]"
              style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
            />
            <p className="mx-auto mt-md max-w-[46ch] font-body text-[17px] italic leading-[1.7] text-accent">
              Quem chega primeiro escolhe. Quem chega depois fica na lista de espera.
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
              QUERO GARANTIR MEU LUGAR
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Oportunidade;
