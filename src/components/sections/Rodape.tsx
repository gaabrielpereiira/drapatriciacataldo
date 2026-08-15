export function Rodape() {
  return (
    <footer className="border-t border-gold/30 bg-bg-alt py-lg">
      <div className="mx-auto max-w-container px-md text-center md:px-lg">
        <img
          src="/logo-patricia-cataldo.png"
          alt="Dra. Patrícia Cataldo · Sorriso & Face"
          className="mx-auto h-[64px] w-auto"
        />

        <p className="mt-md font-body text-[13px] text-champagne">
          [Razão social · CNPJ · Endereço da clínica em Juiz de Fora · Contato]
        </p>

        <p className="mt-xs font-body text-[12px] text-champagne/80">
          © Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Rodape;
