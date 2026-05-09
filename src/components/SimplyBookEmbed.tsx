import { LinkButton } from "./Button";

const BOOKING_URL = "https://darkhorsehealinglodge.simplybook.me";

type Props = {
  /**
   * Set "iframe" to embed the full booking flow inline (default).
   * Set "cta" to show a prominent button that opens the booking page in a new tab —
   * useful as a secondary placement when the iframe is heavy on the page.
   */
  variant?: "iframe" | "cta";
  /** Optional minimum height for the iframe; tweak if the booking flow needs more room. */
  minHeight?: number;
};

export function SimplyBookEmbed({ variant = "iframe", minHeight = 1200 }: Props) {
  if (variant === "cta") {
    return (
      <div className="bg-charcoal-light border border-gold/20 p-8 sm:p-10 text-center">
        <p className="font-script text-gold text-3xl sm:text-4xl mb-3">
          Pick a date.
        </p>
        <h3 className="font-serif text-cream text-2xl sm:text-3xl uppercase tracking-[0.15em] mb-4">
          Reserve Your Time
        </h3>
        <p className="text-cream/80 text-base leading-relaxed max-w-xl mx-auto mb-8">
          Browse availability, choose your rental window, and pay securely
          through Stripe. Instant confirmation by email.
        </p>
        <LinkButton href={BOOKING_URL} variant="primary">
          Open Booking Calendar
        </LinkButton>
        <p className="text-cream/50 text-xs italic mt-6">
          Booking opens in a new tab on our secure scheduling platform.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-charcoal-light border border-gold/20 p-2 sm:p-4">
      <iframe
        src={BOOKING_URL}
        title="Book Dark Horse Healing Lodge"
        style={{
          width: "100%",
          minHeight: `${minHeight}px`,
          border: "none",
          display: "block",
        }}
        loading="lazy"
        allow="payment *; clipboard-write *"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="text-cream/50 text-xs italic text-center pt-3 pb-1">
        Trouble seeing the booking calendar? Open it in a new tab:{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold hover:underline"
        >
          {BOOKING_URL}
        </a>
      </p>
    </div>
  );
}
