import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { BookingInquiryForm } from "@/components/BookingInquiryForm";
import { EventCheckoutButton } from "@/components/EventCheckoutButton";
import { SimplyBookEmbed } from "@/components/SimplyBookEmbed";

export const metadata: Metadata = {
  title: "Events & Calendar",
  description:
    "Book the studio or fire pit at Dark Horse Healing Lodge. Real-time availability, secure Stripe payment, and instant confirmation. Plus custom inquiries for multi-day events and recurring bookings.",
};

// Placeholder event data — swap with CMS or database when event management is live.
type PublicEvent = {
  id: string;
  name: string;
  host: string;
  date: string; // ISO
  description: string;
  price: string;
};

const UPCOMING_EVENTS: PublicEvent[] = [];

export default function EventsPage() {
  return (
    <>
      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-12 text-center">
        <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
          Gather here.
        </p>
        <h1 className="font-serif text-cream text-4xl sm:text-5xl uppercase tracking-[0.15em] mb-6">
          What Is Happening at the Lodge
        </h1>
        <div className="w-24 h-px bg-gold mx-auto mb-6" />
        <p className="text-cream/80 text-lg leading-relaxed max-w-2xl mx-auto">
          Browse upcoming events, book the space for your own offering, or
          reach out for custom multi-day arrangements.
        </p>
      </section>

      {/* SECTION 1 — UPCOMING EVENTS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em]">
            Upcoming Events
          </h2>
          <div className="w-24 h-px bg-gold mt-5" />
        </div>

        {UPCOMING_EVENTS.length === 0 ? (
          <div className="bg-charcoal-light border border-gold/20 p-10 text-center">
            <p className="font-serif text-gold text-xl uppercase tracking-wider mb-3">
              More events coming soon
            </p>
            <p className="text-cream/80 text-base leading-relaxed max-w-2xl mx-auto mb-6">
              We are curating the lineup for the coming season. To be the
              first to hear when new classes, circles, and ceremonies open
              for booking, reach out through the contact form and we will
              add you to our list.
            </p>
            <LinkButton href="/contact" variant="secondary">
              Stay in the Loop
            </LinkButton>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <article
                key={event.id}
                className="bg-charcoal-light border border-gold/20 p-8 flex flex-col"
              >
                <p className="text-gold text-sm uppercase tracking-wider mb-3">
                  {new Date(event.date).toLocaleDateString("en-CA", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-3">
                  {event.name}
                </h3>
                <p className="text-cream/70 text-sm italic mb-4">
                  Hosted by {event.host}
                </p>
                <p className="text-cream/80 text-sm leading-relaxed mb-6 flex-grow">
                  {event.description}
                </p>
                <div className="flex items-center justify-between border-t border-gold/20 pt-4">
                  <p className="font-serif text-cream text-lg">{event.price}</p>
                  <EventCheckoutButton eventId={event.id} />
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 2 — BOOK THE SPACE (PRIMARY: SIMPLYBOOK EMBED) */}
      <section
        id="book"
        className="bg-charcoal-light border-y border-gold/15 py-20 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-3">
              Pick a date.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Book the Space
            </h2>
            <div className="w-24 h-px bg-gold mt-5" />
            <p className="text-cream/80 text-base leading-relaxed max-w-2xl mt-6">
              For yoga teachers, healers, facilitators, ceremony holders, and
              anyone whose work is rooted in healing and consciousness. All
              traditions and modalities are welcome. Book online, pay
              securely through Stripe, and receive instant email confirmation.
            </p>
            <p className="text-cream/60 text-sm italic mt-3">
              Pricing, add-ons, cancellation policy, and insurance details
              are on the{" "}
              <a href="/book" className="text-gold hover:underline">
                Book / Rental Info
              </a>{" "}
              page. Have insurance? Apply coupon code{" "}
              <span className="font-mono text-gold">INSURANCE50</span> at
              checkout for a $50 discount.
            </p>
          </div>

          <SimplyBookEmbed variant="iframe" />
        </div>
      </section>

      {/* SECTION 3 — CUSTOM INQUIRIES */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-10">
          <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em]">
            Custom Inquiries
          </h2>
          <div className="w-24 h-px bg-gold mt-5" />
          <p className="text-cream/80 text-base leading-relaxed max-w-2xl mt-6">
            Multi-day retreats, recurring weekly classes, large group
            events, or anything that doesn&rsquo;t fit the standard rental
            tiers above &mdash; tell us about your event and we&rsquo;ll
            follow up within one business day.
          </p>
        </div>

        <div className="bg-charcoal-light border border-gold/20 p-8 sm:p-12">
          <BookingInquiryForm />
        </div>
      </section>
    </>
  );
}
