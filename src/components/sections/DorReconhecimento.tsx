import { Icon } from "@iconify/react";
import useScrollReveal from "../../hooks/useScrollReveal";

const VOZES = [
  "Eu não me reconheço mais nas fotos.",
  "Parece que eu estou sempre cansada.",
  "Não me sinto tão velha quanto eu apareço.",
  "Faço um procedimento, resolve por uns meses e some.",
];

export function DorReconhecimento() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="grain relative bg-bg-alt">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/grafismo-monograma-cp.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "420px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[720px] px-md py-section-mobile text-center md:px-lg md:py-section">
        <div ref={revealRef}>
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text-on-dark">
            Você se reconhece aqui?
          </h2>

          <p className="reveal mx-auto mt-md max-w-[52ch] font-body text-[16px] leading-[1.7] text-text-on-dark md:text-[18px]">
            Tem dias que você olha o espelho e sente que o seu rosto não combina com a sua
            energia.
          </p>

          {VOZES.map((voz, i) => (
            <div key={voz} className="reveal mt-lg">
              {i > 0 && (
                <div
                  aria-hidden="true"
                  className="mx-auto mb-lg h-px w-[40px]"
                  style={{ backgroundColor: "rgba(188,146,92,0.25)" }}
                />
              )}
              <Icon
                icon="solar:quote-up-outline"
                width={20}
                height={20}
                className="mx-auto mb-xs text-gold"
                aria-hidden="true"
              />
              <p className="font-heading text-[19px] italic leading-[1.4] text-champagne md:text-[22px]">
                {voz}
              </p>
            </div>
          ))}

          <div className="reveal">
            <div
              aria-hidden="true"
              className="mx-auto mt-lg h-px w-[60px]"
              style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
            />
            <p className="mx-auto mt-md max-w-[46ch] font-body text-[17px] italic leading-[1.7] text-champagne">
              O incômodo não é vaidade. É a sensação de que a sua imagem parou de te
              representar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DorReconhecimento;
