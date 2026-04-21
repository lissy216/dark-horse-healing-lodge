import Image from "next/image";
import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";

export const metadata: Metadata = {
  title: "Book / Rental Info",
  description:
    "Flexible rental options at Dark Horse Healing Lodge — hourly, half-day, full-day, and multi-day bookings for classes, workshops, retreats, and private sessions.",
};

type Tier = {
  name: string;
  tag: string;
  body: string;
  rate: string;
  note?: string;
};

const TIERS: Tier[] = [
  {
    name: "Hourly Rental",
    tag: "For single classes, private sessions, or short workshops.",
    body: "Perfect for weekly yoga classes, individual Reiki sessions, or short practitioner offerings.",
    rate: "Contact for current rates",
    note: "Minimum booking: to be confirmed",
  },
  {
    name: "Half-Day Rental",
    tag: "4 hours — ideal for workshops, circles, and group intensives.",
    body: "A full morning or afternoon to lead a workshop, host a women's or men's circle, or pour a cacao ceremony.",
    rate: "Contact for current rates",
  },
  {
    name: "Full-Day Rental",
    tag: "8 hours — built for retreats, trainings, and multi-session events.",
    body: "Room to build a full arc of programming. Workshops, trainings, or all-day retreats with breaks built in.",
    rate: "Contact for current rates",
  },
  {
    name: "Multi-Day / Recurring",
    tag: "Weekly classes, intensives, or multi-day trainings.",
    body: "Running a weekly class or a multi-day training? Custom rates are available for ongoing and recurring bookings.",
    rate: "Contact for details",
  },
];

export default function BookPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
        <Image
          src="/images/studio-main.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
            Your space.
          </p>
          <h1 className="font-serif text-cream text-4xl sm:text-6xl uppercase tracking-[0.15em] mb-6">
            Your Space. Your Way.
          </h1>
          <p className="text-cream/85 text-lg max-w-2xl leading-relaxed">
            Flexible rental options for classes, workshops, retreats, and
            private sessions.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em] mb-4">
          How It Works
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mb-8" />
        <p className="text-cream/85 text-lg leading-[1.85] font-light">
          Renting Dark Horse Healing Lodge is straightforward. Choose the option
          that fits your event, book your date, and show up ready to work. The
          space comes clean, warm, and set up for you.
        </p>
      </section>

      {/* TIERS */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-charcoal border border-gold/20 p-8 flex flex-col"
              >
                <h3 className="font-serif text-gold text-2xl uppercase tracking-[0.15em] mb-3">
                  {tier.name}
                </h3>
                <p className="text-cream/90 text-sm italic mb-4">{tier.tag}</p>
                <p className="text-cream/75 text-sm leading-relaxed mb-6 flex-grow">
                  {tier.body}
                </p>
                <div className="border-t border-gold/20 pt-4">
                  <p className="font-serif text-cream text-lg uppercase tracking-wider">
                    {tier.rate}
                  </p>
                  {tier.note && (
                    <p className="text-cream/60 text-xs italic mt-1">
                      {tier.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED + BRING */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          <div>
            <h2 className="font-serif text-gold text-2xl uppercase tracking-[0.15em] mb-6 pb-3 border-b border-gold/30">
              What Is Included
            </h2>
            <p className="text-cream/85 text-base leading-[1.85] font-light">
              Every booking includes access to the full 912-square-foot studio,
              the welcome area and boot room, both restrooms, and on-site
              parking. The kitchenette is stocked with a fridge, microwave,
              Keurig, kettle, and potable water with water coolers. High-speed
              Wi-Fi is available for all hosts. Outdoor space and fire pit
              access can be added to any booking.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-gold text-2xl uppercase tracking-[0.15em] mb-6 pb-3 border-b border-gold/30">
              What to Bring
            </h2>
            <p className="text-cream/85 text-base leading-[1.85] font-light">
              The lodge provides the space. You bring what you need for your
              specific practice &mdash; mats, bolsters, blankets, singing
              bowls, speakers, instruments, altar supplies, or anything else
              your session requires.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKING + PAYMENT */}
      <section className="max-w-3xl mx-auto px-6 pb-24">
        <div className="bg-charcoal-light border border-gold/20 p-10 text-center">
          <h2 className="font-serif text-cream text-2xl uppercase tracking-[0.15em] mb-4">
            Booking and Payment
          </h2>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-cream/85 text-base leading-relaxed mb-4">
            Browse available dates and times on our Events page. Select your
            rental window, complete the booking form, and pay securely through
            Stripe. You will receive a confirmation email with everything you
            need to know before your session.
          </p>
          <p className="text-cream/70 text-sm italic mb-10">
            For custom bookings, multi-day events, or questions about the
            space, reach out directly through the Contact page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton href="/events" variant="primary">
              Check Availability
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Contact Us
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
