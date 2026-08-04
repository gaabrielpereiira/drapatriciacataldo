import { Icon } from "@iconify/react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ITENS = [
  {
    texto: "Você quer parecer ",
    negrito: "descansada e natural",
    resto: ", sem rosto artificial.",
  },
  {
    texto: "Você já faz toxina e quer manter a frequência certa, ou quer começar com planejamento.",
    negrito: "",
    resto: "",
  },
  {
    texto: "Você prefere cuidar do rosto o ano todo, sem susto e sem correria.",
    negrito: "",
    resto: "",
  },
  {
    texto: "Você mora em ",
    negrito: "Juiz de Fora ou região",
    resto: ".",
  },
];

export function ParaQuemE() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="para-quem-e" className="bg-bg">
      <div className="mx-auto max-w-[880px] px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="text-center">
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text">
            Isso é pra você se
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
              Você bem cuidada e natural, do jeito que ninguém percebe o que foi feito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ParaQuemE;
