import { Icon } from "@iconify/react";
import useScrollReveal from "../../hooks/useScrollReveal";

const VOZES = [
  "Você gosta de se cuidar, mas nem sempre consegue manter uma rotina de beleza com a constância que gostaria.",
  "Acaba deixando para depois e, quando percebe, já se passaram meses.",
  "Gostaria de ter seus momentos de cuidado planejados ao longo do ano.",
  "Valoriza uma aparência descansada, natural e sem excessos.",
  "Prefere manter o que já é bonito em você, acompanhando cada fase com leveza.",
];

export function DorReconhecimento() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="grain relative bg-bg-alt">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/monograma-cp.png')",
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
              Porque não é sobre mudar. É sobre se reconhecer e preservar o que já é seu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DorReconhecimento;
