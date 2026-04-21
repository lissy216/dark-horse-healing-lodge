import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

// Horseshoe — symbol for Heal
export function HorseshoeIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 12 C14 22 12 30 12 38 C12 48 18 54 24 54" />
      <path d="M46 12 C50 22 52 30 52 38 C52 48 46 54 40 54" />
      <circle cx="16" cy="18" r="1.5" fill="currentColor" />
      <circle cx="48" cy="18" r="1.5" fill="currentColor" />
      <circle cx="13" cy="30" r="1.5" fill="currentColor" />
      <circle cx="51" cy="30" r="1.5" fill="currentColor" />
      <circle cx="14" cy="42" r="1.5" fill="currentColor" />
      <circle cx="50" cy="42" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Feather — symbol for Restore
export function FeatherIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M46 12 C32 14 20 22 16 36 C14 44 16 50 18 54" />
      <path d="M46 12 C46 22 44 32 38 40 C32 48 24 52 18 54" />
      <path d="M18 54 L12 58" />
      <path d="M22 44 L34 38" />
      <path d="M26 36 L38 30" />
      <path d="M32 28 L42 22" />
    </svg>
  );
}

// Sun — symbol for Renew
export function SunIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="32" cy="32" r="10" />
      <path d="M32 8 V16" />
      <path d="M32 48 V56" />
      <path d="M8 32 H16" />
      <path d="M48 32 H56" />
      <path d="M15 15 L20.5 20.5" />
      <path d="M43.5 43.5 L49 49" />
      <path d="M15 49 L20.5 43.5" />
      <path d="M43.5 20.5 L49 15" />
    </svg>
  );
}
