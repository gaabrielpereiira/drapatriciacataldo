import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";

export function HeroPromessa() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hero" className="bg-bg">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div className="grid items-center gap-lg md:grid-cols-[55fr_45fr]">
          {/* Imagem — depois do texto no mobile, direita no desktop */}
          <div className="order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gold bg-surface">
              <img
                src="/hero-patricia.jpg"
                alt="Dra. Patrícia Cataldo"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Texto + formulário */}
          <div ref={revealRef} className="order-1">
            <p className="reveal font-body text-[12px] font-semibold uppercase tracking-[0.15em] text-gold">
              PATI CONCEPT CLUB
            </p>

            <p className="reveal mt-sm font-body text-[15px] italic text-text-muted">
              Cuidar de você pode ser mais leve quando existe um plano.
            </p>

            <h1 className="reveal mt-sm font-heading text-[28px] font-semibold leading-[1.15] text-text md:text-[clamp(28px,3vw,46px)]">
              Beleza que acompanha você o ano inteiro.
            </h1>

            <p className="reveal mt-md max-w-[52ch] font-body text-[16px] leading-[1.7] text-text md:text-[18px]">
              Entre no Grupo VIP e conheça, em primeira mão, o{" "}
              <strong className="font-semibold">PATI CONCEPT CLUB</strong> — uma experiência de
              cuidado planejado, criada para celebrar os{" "}
              <strong className="font-semibold">7 anos da clínica</strong>. Condição especial para
              as primeiras integrantes.
            </p>

            <div className="reveal mt-lg flex flex-col gap-sm">
              <CTAButton
                href={LINK_DO_GRUPO}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto md:self-start"
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

export default HeroPromessa;
