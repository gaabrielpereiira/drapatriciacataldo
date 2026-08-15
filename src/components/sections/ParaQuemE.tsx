import { Icon } from "@iconify/react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ITENS = [
  {
    texto: "Para você que valoriza uma aparência ",
    negrito: "descansada, natural e sem excessos",
    resto: ".",
  },
  {
    texto: "Para quem já faz toxina e quer manter seus resultados com mais tranquilidade.",
    negrito: "",
    resto: "",
  },
  {
    texto: "Para quem deseja começar de forma planejada.",
    negrito: "",
    resto: "",
  },
  {
    texto:
      "Para quem acredita que pequenos cuidados, feitos no tempo certo, fazem toda a diferença.",
    negrito: "",
    resto: "",
  },
  {
    texto: "Para mulheres de ",
    negrito: "Juiz de Fora e região",
    resto: " que querem viver a experiência Pati Concept.",
  },
];

export function ParaQuemE() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="para-quem-e" className="bg-bg">
      <div className="mx-auto max-w-[880px] px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="text-center">
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text">
            Para quem é o PATI CONCEPT CLUB?
          </h2>

          <div className="reveal mt-lg grid grid-cols-1 gap-md md:grid-cols-2">
            {ITENS.map((item, index) => (
              <div
                key={index}
                className="reveal flex items-start gap-sm rounded-lg border border-gold/35 bg-surface p-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(116,64,31,0.10)]"
              >
                <Icon
                  icon="solar:check-circle-bold"
                  width={24}
                  height={24}
                  className="mt-[2px] shrink-0 text-accent"
                  aria-hidden="true"
                />
                <p className="font-body text-[16px] leading-[1.6] text-text">
                  {item.texto}
                  {item.negrito && <strong className="font-semibold">{item.negrito}</strong>}
                  {item.resto}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal">
            <div
              aria-hidden="true"
              className="mx-auto mt-lg h-px w-[60px]"
              style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
            />
            <p className="mx-auto mt-md max-w-[50ch] font-body text-[17px] italic leading-[1.7] text-accent">
              Pati Concept é se cuidar sem que ninguém perceba o que foi feito — apenas que você
              está ainda mais bonita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParaQuemE;
