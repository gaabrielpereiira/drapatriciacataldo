import { useEffect, useRef } from "react";

/**
 * Revela elementos com a classe `.reveal` dentro do container.
 * Stagger de 100ms entre os filhos diretos.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    if (root.classList.contains("reveal")) targets.unshift(root);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((c) =>
                c.classList.contains("reveal"),
              )
            : [];
          const index = Math.max(0, siblings.indexOf(el));
          window.setTimeout(() => el.classList.add("visible"), index * 100);
          observer.unobserve(el);
        });
      },
      { threshold: 0.1 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useScrollReveal;
