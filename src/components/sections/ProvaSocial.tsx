import { Icon } from "@iconify/react";
import useScrollReveal from "../../hooks/useScrollReveal";

const PROVAS = [
  { nome: "prova-google-01.png" },
  { nome: "prova-google-02.png" },
  { nome: "prova-google-03.png" },
];

export function ProvaSocial() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="prova-social" className="grain bg-bg-alt">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="text-center">
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text-on-dark">
            O que as pacientes dizem
          </h2>

          <div className="reveal mt-lg grid grid-cols-1 gap-md md:grid-cols-3">
            {PROVAS.map((prova) => (
              <div
                key={prova.nome}
                className="reveal rounded-lg bg-surface p-md"
              >
                <div className="mb-sm flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      icon="solar:star-bold"
                      width={18}
                      height={18}
                      className="text-gold"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-gold bg-bg">
                  <span className="absolute inset-0 flex items-center justify-center px-sm text-center font-body text-[14px] text-text-muted">
                    {prova.nome}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="reveal mx-auto mt-md max-w-[54ch] font-body text-[15px] leading-[1.6] text-champagne">
            Avaliações reais de pacientes da clínica.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProvaSocial;
