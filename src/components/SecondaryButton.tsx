import type { AnchorHTMLAttributes } from "react";

export function SecondaryButton({
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm border-[1.5px] border-gold bg-transparent px-[32px] py-[18px] font-heading text-[16px] font-semibold text-gold transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:bg-gold hover:text-bg hover:shadow-[0_8px_24px_rgba(116,64,31,0.25)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      {children}
    </a>
  );
}

export default SecondaryButton;
