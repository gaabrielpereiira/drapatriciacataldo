import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";
import heroAsset from "../../assets/hero-patricia-clinica.jpg.asset.json";



export function HeroPromessa() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  const inputClasses =
    "h-[56px] w-full rounded-sm border border-accent bg-surface px-md font-body text-[16px] text-text placeholder:text-text-muted focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(188,146,92,0.2)]";

  return (
    <section id="hero" className="bg-bg">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div className="grid items-center gap-lg md:grid-cols-[55fr_45fr]">
          {/* Imagem — topo no mobile, direita no desktop */}
          <div className="md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gold bg-surface">
              <img
                src={heroAsset.url}
                alt="Dra. Patrícia Cataldo"
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
            </div>
          </div>


          {/* Texto + formulário */}
          <div ref={revealRef} className="md:order-1">
            <p className="reveal font-body text-[12px] font-semibold uppercase tracking-[0.15em] text-gold">
              CLUB DO BOTOX · GRUPO VIP
            </p>

            <p className="reveal mt-sm font-body text-[15px] italic text-text-muted">
              Cuidar do rosto não precisa ser uma corrida contra o espelho.
            </p>

            <h1 className="reveal mt-sm font-heading text-[28px] font-semibold leading-[1.15] text-text md:text-[clamp(28px,3vw,46px)]">
              Sua pele descansada o ano inteiro, sem ter que lembrar da sua toxina
            </h1>

            <p className="reveal mt-md max-w-[52ch] font-body text-[16px] leading-[1.7] text-text md:text-[18px]">
              Entre no grupo VIP e seja uma das primeiras a conhecer o{" "}
              <strong className="font-semibold">Club do Botox</strong> da Dra. Patrícia
              Cataldo, com a{" "}
              <strong className="font-semibold">condição de fundadora</strong> dos 7 anos
              da clínica.
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
