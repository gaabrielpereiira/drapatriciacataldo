import { Icon } from "@iconify/react";
import CTAButton from "../CTAButton";
import useScrollReveal from "../../hooks/useScrollReveal";
import { LINK_DO_GRUPO } from "../../lib/constants";

const ITENS = [
  {
    texto: "Acesso em ",
    negrito: "primeira mão",
    resto: " a todos os detalhes do Club, antes de todo mundo.",
  },
  {
    texto: "A ",
    negrito: "condição de fundadora",
    resto: " dos 7 anos, exclusiva de quem está no grupo.",
  },
  {
    texto: "",
    negrito: "Presentes escolhidos a dedo",
    resto: " pela Dra. Patrícia para a primeira turma.",
  },
  {
    texto: "A revelação completa, ao vivo no grupo, no dia ",
    negrito: "[DIA] às [HORA]",
    resto: ".",
  },
  {
    texto: "Prioridade para garantir a sua vaga, já que as vagas do Club são ",
    negrito: "limitadas",
    resto: ".",
  },
];

export function VantagensGrupo() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="vantagens-grupo" className="grain relative bg-bg-alt">
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
      <div className="relative z-10 mx-auto max-w-[760px] px-md py-section-mobile text-center md:px-lg md:py-section">
        <div ref={revealRef}>
          <h2 className="reveal font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text-on-dark">
            O que você ganha entrando no grupo VIP
          </h2>

          <ul className="reveal mx-auto mt-lg flex flex-col items-start gap-md text-left">
            {ITENS.map((item) => (
              <li key={item.negrito} className="reveal flex items-start gap-sm">
                <Icon
                  icon="solar:check-circle-outline"
                  width={24}
                  height={24}
                  className="mt-[2px] shrink-0 text-gold"
                  aria-hidden="true"
                />
                <p className="font-body text-[16px] leading-[1.6] text-text-on-dark md:text-[17px]">
                  {item.texto}
                  <strong className="font-semibold">{item.negrito}</strong>
                  {item.resto}
                </p>
              </li>
            ))}
          </ul>

          <div className="reveal">
            <div
              aria-hidden="true"
              className="mx-auto mt-lg h-px w-[60px]"
              style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
            />
            <p className="mx-auto mt-md max-w-[46ch] font-heading text-[20px] italic leading-[1.5] text-champagne">
              A porta do Club abre primeiro aqui dentro.
            </p>
          </div>

          <div className="reveal mt-md">
            <CTAButton
              href={LINK_DO_GRUPO}
              target="_blank"
              rel="noopener noreferrer"
              variant="onDark"
            >
              QUERO ESSAS VANTAGENS
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VantagensGrupo;
