import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";

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
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-4 bg-cta px-[24px] py-[12px] text-text-on-dark transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <span className="font-body text-[14px] leading-snug">
        Entre no grupo VIP e garanta a condição de fundadora
      </span>
      <CTAButton href="#form" variant="onDark" className="shrink-0">
        Quero entrar
      </CTAButton>
    </div>
  );
}

export default FixedCTABar;
