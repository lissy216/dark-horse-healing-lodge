import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";
import { BookingInquiryForm } from "@/components/BookingInquiryForm";
import { EventCheckoutButton } from "@/components/EventCheckoutButton";

export const metadata: Metadata = {
  title: "Events & Calendar",
  description:
    "Upcoming public events at Dark Horse Healing Lodge — yoga, sound baths, circles, ceremonies, and more. Also book the space for your own offering.",
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
          Browse upcoming events, book a class, or reserve the space for your
          own offering.
        </p>
      </section>

      {/* SECTION 1 — UPCOMING EVENTS */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em]">
              Upcoming Events
            </h2>
            <div className="w-24 h-px bg-gold mt-5" />
          </div>

          {UPCOMING_EVENTS.length === 0 ? (
            <div className="bg-charcoal border border-gold/20 p-10 text-center">
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
                  className="bg-charcoal border border-gold/20 p-8 flex flex-col"
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
        </div>
      </section>

      {/* SECTION 2 — BOOK THE SPACE */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-10">
          <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em]">
            Book the Space
          </h2>
          <div className="w-24 h-px bg-gold mt-5" />
          <p className="text-cream/80 text-base leading-relaxed max-w-2xl mt-6">
            Want to host your own event here? Dark Horse Healing Lodge is
            available for yoga teachers, healers, facilitators, ceremony
            holders, and anyone doing work rooted in healing and consciousness.
            All traditions and modalities are welcome.
          </p>
        </div>

        <div className="bg-charcoal-light border border-gold/20 p-8 sm:p-12">
          <p className="text-cream/90 text-base leading-relaxed mb-8">
            Tell us about your event below. We will follow up within one
            business day to confirm availability and send a secure payment link
            for your chosen rental window.
          </p>
          <BookingInquiryForm />
        </div>
      </section>
    </>
  );
}
