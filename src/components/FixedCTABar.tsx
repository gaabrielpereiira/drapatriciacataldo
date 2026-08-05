import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import { LINK_DO_GRUPO } from "../lib/constants";

export function FixedCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(!entries[0]?.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 bg-cta px-[16px] py-[12px] text-text-on-dark transition-transform duration-300 ease-in-out md:flex md:justify-center md:gap-4 md:px-[24px] ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="min-w-0 font-body text-[13px] leading-snug md:text-[14px]">
        Entre no grupo VIP e garanta a condição de fundadora
      </span>
      <CTAButton
        href={LINK_DO_GRUPO}
        target="_blank"
        rel="noopener noreferrer"
        variant="onDark"
        className="shrink-0 px-[20px] py-[12px] text-[14px] md:px-[32px] md:py-[18px] md:text-[16px]"
      >
        Quero entrar
      </CTAButton>
    </div>
  );
}

export default FixedCTABar;
