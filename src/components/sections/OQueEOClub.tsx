import useScrollReveal from "../../hooks/useScrollReveal";

export function OQueEOClub() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="o-que-e-o-club" className="bg-surface">
      <div className="mx-auto max-w-container px-md py-section-mobile md:px-lg md:py-section">
        <div
          ref={revealRef}
          className="grid grid-cols-1 items-center gap-lg md:grid-cols-2"
        >
          {/* Coluna de texto */}
          <div className="flex flex-col items-start text-left md:items-start md:text-left">
            {/* Título */}
            <h2 className="reveal mx-auto w-full text-center font-heading text-[clamp(26px,2.6vw,38px)] font-semibold leading-[1.2] text-text md:mx-0 md:text-left">
              O que é o Club do Botox
            </h2>

            {/* Corpo */}
            <p className="reveal mx-auto mt-md max-w-[54ch] text-center font-body text-[16px] leading-[1.7] text-text md:mx-0 md:text-left md:text-[18px]">
              É o{" "}
              <strong className="font-semibold">plano anual de toxina botulínica</strong>{" "}
              da clínica. Em vez de tratar o rosto só quando o incômodo aperta, você tem o
              seu autocuidado{" "}
              <strong className="font-semibold">planejado o ano inteiro</strong>, no
              acompanhamento da Dra. Patrícia e no tempo certo. Naturalidade, sem exageros.
            </p>

            {/* Hairline + frase-âncora */}
            <div className="reveal mx-auto mt-md md:mx-0">
              <div
                aria-hidden="true"
                className="mx-auto mt-md h-px w-[60px] md:mx-0"
                style={{ backgroundColor: "rgba(188,146,92,0.35)" }}
              />
              <p className="mx-auto mt-md max-w-[48ch] text-center font-body text-[17px] italic leading-[1.7] text-accent md:mx-0 md:text-left">
                Rosto descansado não é sorte de um dia. É constância feita por quem entende
                do seu rosto.
              </p>
            </div>
          </div>

          {/* Imagem */}
          <div className="reveal w-full">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-gold bg-alt">
              <span className="absolute inset-0 flex items-center justify-center px-sm text-center font-body text-[14px] text-champagne">
                atmosfera-autocuidado.jpg
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OQueEOClub;
