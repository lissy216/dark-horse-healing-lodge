import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-light focus-visible:outline-gold border border-gold",
  secondary:
    "bg-transparent text-gold border border-gold hover:bg-gold hover:text-charcoal focus-visible:outline-gold",
  ghost:
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold focus-visible:outline-gold",
};

const baseClasses =
  "inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

type LinkButtonProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
