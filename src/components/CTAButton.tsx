import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const baseClasses =
  "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm px-[32px] py-[18px] font-heading text-[16px] font-semibold transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(116,64,31,0.25)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

type Variant = "default" | "onDark";

const paletteFor = (variant: Variant) =>
  variant === "onDark" ? "bg-gold text-bg-alt" : "bg-cta text-cta-text";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  as?: "a";
  variant?: Variant;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  as: "button";
  variant?: Variant;
};

export function CTAButton(props: AnchorProps | ButtonProps) {
  if (props.as === "button") {
    const { as: _as, variant = "default", className = "", children, ...rest } = props;
    return (
      <button {...rest} className={`${baseClasses} ${paletteFor(variant)} ${className}`}>
        {children}
      </button>
    );
  }

  const { as: _as, variant = "default", className = "", children, ...rest } = props;
  return (
    <a {...rest} className={`${baseClasses} ${paletteFor(variant)} ${className}`}>
      {children}
    </a>
  );
}

export default CTAButton;
