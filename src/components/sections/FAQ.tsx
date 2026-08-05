import { Icon } from "@iconify/react";
import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const FAQS = [
  {
    pergunta: "Entrar no grupo tem algum custo?",
    resposta:
      "Não. A entrada no grupo VIP é gratuita e sem compromisso. Lá você conhece o Club e decide com calma.",
  },
  {
    pergunta: "O que acontece depois que eu entro?",
    resposta:
      "Você recebe os conteúdos de antecipação e, no dia [DIA], a revelação completa do Club com a condição de fundadora.",
  },
  {
    pergunta: "Preciso já querer fechar o plano?",
    resposta:
      "Não. Entrar no grupo é só pra você ter acesso primeiro e nas melhores condições. A decisão é sua.",
  },
  {
    pergunta: "As vagas do Club são limitadas mesmo?",
    resposta:
      "Sim. A turma de fundadoras tem número reduzido pra manter a qualidade do atendimento.",
  },
  {
    pergunta: "Vou receber muitas mensagens?",
    resposta:
      "Só o essencial: os avisos da antecipação e a abertura. Nada de spam.",
  },
  {
    pergunta: "Sou de fora de Juiz de Fora, posso participar?",
    resposta:
      "O atendimento é presencial na clínica, em Juiz de Fora. Se você puder vir até aqui, é bem-vinda.",
  },
];

export function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>();

  const toggle = (index: number) => {
    setAberto((atual) => (atual === index ? null : index));
  };

  return (
    <section id="faq" className="bg-bg">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div ref={revealRef} className="mx-auto max-w-[720px]">
          <h2 className="reveal text-center font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text">
            Perguntas frequentes
          </h2>

          <div className="reveal mt-lg flex flex-col gap-sm">
            {FAQS.map((item, index) => {
              const isAberto = aberto === index;
              return (
                <div
                  key={index}
                  className="reveal overflow-hidden rounded-md border border-border/35 bg-surface"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isAberto}
                    className="flex min-h-[44px] w-full items-center justify-between gap-md px-5 py-[18px] text-left transition-colors hover:bg-surface/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-inset"
                  >
                    <span className="font-body text-[16px] font-semibold leading-[1.35] text-text md:text-[17px]">
                      {item.pergunta}
                    </span>
                    <span
                      className="flex-shrink-0 transition-transform duration-300"
                      style={{ transform: isAberto ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <Icon
                        icon="solar:alt-arrow-down-outline"
                        width={24}
                        height={24}
                        className="text-gold"
                        aria-hidden="true"
                      />
                    </span>
                  </button>

                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isAberto ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="px-5 pb-4 font-body text-[16px] leading-[1.7] text-text-muted transition-opacity duration-300"
                        style={{ opacity: isAberto ? 1 : 0 }}
                      >
                        {item.resposta}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
