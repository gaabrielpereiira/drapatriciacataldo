import type { AnchorHTMLAttributes } from "react";

type CTAButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "onDark";
};

export function CTAButton({
  variant = "default",
  className = "",
  children,
  ...props
}: CTAButtonProps) {
  const palette =
    variant === "onDark" ? "bg-gold text-bg-alt" : "bg-cta text-cta-text";

  return (
    <a
      {...props}
      className={`inline-flex min-h-[44px] items-center justify-center rounded-sm px-[32px] py-[18px] font-heading text-[16px] font-semibold transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(116,64,31,0.25)] active:scale-[0.98] ${palette} ${className}`}
    >
      {children}
    </a>
  );
}

export default CTAButton;
