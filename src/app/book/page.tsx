import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { LinkButton } from "@/components/Button";

const CONTACT_EMAIL = "hello@darkhorsehealinglodge.com";
const CONTACT_PHONE = "(613) 608-3048";
const CONTACT_PHONE_TEL = "+16136083048";
const BOOKING_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Booking Inquiry — Dark Horse Healing Lodge"
)}`;

export const metadata: Metadata = {
  title: "Book / Rental Info",
  description:
    "Rent the studio or fire pit at Dark Horse Healing Lodge in Carp, Ontario. Tiered pricing from 2 hours to full-day, fire pit add-ons, and cancellation policy. Email us to book your date.",
};

type Tier = {
  name: string;
  duration: string;
  price: string;
  per: string;
  body: string;
};

const STUDIO_TIERS: Tier[] = [
  {
    name: "2 Hours",
    duration: "2 hr",
    price: "$149",
    per: "CAD",
    body: "For single classes, private sessions, or short workshops. Two hours is the minimum booking.",
  },
  {
    name: "3 Hours",
    duration: "3 hr",
    price: "$219",
    per: "CAD",
    body: "A solid block for slightly longer workshops, sound baths, or extended ceremonies.",
  },
  {
    name: "Half-Day",
    duration: "4 hr",
    price: "$299",
    per: "CAD",
    body: "Ideal for half-day workshops, women's or men's circles, cacao ceremonies, or group intensives.",
  },
  {
    name: "Full Day",
    duration: "8 hr",
    price: "$550",
    per: "CAD",
    body: "Built for retreats, yoga teacher trainings, and multi-session events. Full day from morning to evening.",
  },
];

const FIRE_PIT_TIERS: Tier[] = [
  {
    name: "2 Hours",
    duration: "2 hr",
    price: "$250",
    per: "CAD",
    body: "Short outdoor ceremony, drum circle, or evening fire gathering.",
  },
  {
    name: "3 Hours",
    duration: "3 hr",
    price: "$350",
    per: "CAD",
    body: "Extended evening fire ceremony or facilitated circle.",
  },
  {
    name: "Half-Day",
    duration: "4 hr",
    price: "$450",
    per: "CAD",
    body: "Half-day outdoor program with time for opening, ceremony, and integration.",
  },
];

export default function BookPage() {
  return (
    <>
      {/* HERO — uses hero-banner.jpg (the only full-resolution image source we have) */}
      <section className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
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
          Renting Dark Horse Healing Lodge is straightforward. Choose the
          option that fits your event, email us with your preferred date and
          time, and we&rsquo;ll confirm availability and arrange payment
          directly with you. The space comes clean, warm, and set up for you.
        </p>
        <p className="text-cream/65 text-sm italic mt-6">
          All prices in Canadian dollars, plus 13% Ontario HST.
        </p>
        <div className="mt-10">
          <LinkButton href="#book" variant="primary">
            Email Us to Book
          </LinkButton>
        </div>
      </section>

      {/* WHY DARK HORSE */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-2">
              What sets us apart.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Why Dark Horse
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-5" />
            <p className="text-cream/75 text-base mt-6 max-w-2xl mx-auto">
              Built from the ground up for healing practitioners. Here&rsquo;s
              what makes this space different from other venues you might be
              considering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <WhyCard
              title="Intimate by Design"
              body="We host one event at a time. Full property, full privacy, full attention on your work. No other group sharing the grounds, no parallel events, no competing energy."
              accent
            />
            <WhyCard
              title="Personal Booking"
              body="No booking portals, no accounts, no checkout forms. Email us with your date and what you're planning, and you'll hear back from a real person within one business day."
            />
            <WhyCard
              title="Flexible 2-Hour Minimum"
              body="Most venues require half- or full-day commitments. We start at two hours so your single class, sound bath, or workshop fits without paying for time you don&rsquo;t need."
            />
            <WhyCard
              title="All Traditions Welcome"
              body="Yoga, Reiki, breathwork, sound healing, kirtan, cacao, women&rsquo;s and men&rsquo;s circles, drum circles, somatic work. If your practice is rooted in healing and consciousness, this space was built for you."
            />
            <WhyCard
              title="Insurance-Friendly"
              body="We accept your existing professional or event liability policy &mdash; just add us as additional insured. Mention your coverage when you book and take $50 off your rental."
            />
            <WhyCard
              title="Sacred Fire Pits"
              body="Two outdoor fire pits for ceremony, drum circles, and land-based healing. Add a fire pit to any studio rental, or book the pit standalone for outdoor programming."
            />
          </div>
        </div>
      </section>

      {/* COMMUNITY ACCESS / TIERED PRICING */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-2">
              Healing should be accessible.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Community Access Pricing
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-5" />
            <p className="text-cream/75 text-base mt-6 max-w-2xl mx-auto">
              Standard rates apply to most renters. Discounted rates are
              available for registered community organizations and Indigenous
              practitioners and groups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-charcoal-light border border-gold/20 p-7 flex flex-col">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                Tier 1
              </p>
              <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-3">
                Standard
              </h3>
              <p className="font-serif text-gold text-3xl mb-1">Full Rate</p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                Individual practitioners &amp; commercial events
              </p>
              <p className="text-cream/75 text-sm leading-relaxed flex-grow">
                Standard rates as listed above. Applies to most bookings &mdash;
                practitioners, workshops, retreats, and private events.
              </p>
            </div>

            <div className="bg-charcoal-light border border-gold/30 p-7 flex flex-col">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                Tier 2
              </p>
              <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-3">
                Community
              </h3>
              <p className="font-serif text-gold text-3xl mb-1">20% off</p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                Registered charities &amp; community groups
              </p>
              <p className="text-cream/75 text-sm leading-relaxed flex-grow mb-4">
                For registered Canadian charities, not-for-profits, and
                established community groups running non-commercial gatherings.
              </p>
              <p className="text-cream/80 text-xs leading-relaxed">
                Mention your organization when you email us and we&rsquo;ll
                apply the discount to your booking.
              </p>
            </div>

            <div className="bg-charcoal-light border border-gold p-7 flex flex-col">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                Tier 3
              </p>
              <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-3">
                Indigenous
              </h3>
              <p className="font-serif text-gold text-3xl mb-1">
                By relationship
              </p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                Indigenous practitioners &amp; First Nations groups
              </p>
              <p className="text-cream/75 text-sm leading-relaxed flex-grow mb-4">
                For Indigenous practitioners, knowledge keepers, and First
                Nations community organizations honouring this land and its
                traditions, our community access rate is offered relationally
                rather than through a coupon code.
              </p>
              <p className="text-cream/80 text-xs leading-relaxed">
                <Link
                  href="/contact"
                  className="text-gold hover:text-gold-light underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-colors"
                >
                  Reach out before booking
                </Link>{" "}
                &mdash; we&rsquo;d love to connect first.
              </p>
            </div>
          </div>

          <p className="text-cream/60 text-sm italic text-center mt-8 max-w-3xl mx-auto">
            Community access eligibility is confirmed when we reply to your
            inquiry. Indigenous access is offered by relationship &mdash;
            please reach out so we can connect.
          </p>
        </div>
      </section>

      {/* STUDIO RENTAL TIERS */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-2">
              912 sq ft of open studio.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Studio Rental
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-5" />
            <p className="text-cream/75 text-base mt-6 max-w-2xl mx-auto">
              The full 912-square-foot studio with reclaimed wood, wall
              sconces, natural light, and capacity for ~25–30 yoga mats or up
              to 40 seated.
            </p>
          </div>

          {/* INTRO RATES BADGE */}
          <div className="max-w-2xl mx-auto mb-10 border border-gold/40 bg-charcoal/40 px-6 py-4 text-center">
            <p className="font-script text-gold text-2xl sm:text-3xl mb-1">
              Founding-summer rates.
            </p>
            <p className="text-cream/75 text-sm leading-relaxed">
              We&rsquo;re welcoming our first season of renters at
              introductory pricing. Subject to seasonal review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {STUDIO_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-charcoal border border-gold/20 p-6 flex flex-col"
              >
                <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                  {tier.duration}
                </p>
                <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-4">
                  {tier.name}
                </h3>
                <p className="font-serif text-gold text-3xl mb-1">
                  {tier.price}
                </p>
                <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                  {tier.per} + HST
                </p>
                <p className="text-cream/75 text-sm leading-relaxed flex-grow">
                  {tier.body}
                </p>
              </div>
            ))}
          </div>

          <p className="text-cream/60 text-sm italic text-center mt-8">
            Need 5, 6, or 7 hours? Extra hours are $65 + HST each &mdash;
            just let us know in your inquiry. Two-hour minimum booking.
          </p>
          <p className="text-cream/50 text-xs italic text-center mt-2">
            All prices in CAD, plus 13% Ontario HST.
          </p>
        </div>
      </section>

      {/* FIRE PIT RENTAL TIERS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-gold text-3xl sm:text-4xl mb-2">
              Around the sacred fire.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Fire Pit Rental
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-5" />
            <p className="text-cream/75 text-base mt-6 max-w-2xl mx-auto">
              Standalone outdoor fire pit rental for ceremony, drum circles,
              women&rsquo;s or men&rsquo;s circles, or any outdoor healing
              gathering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {FIRE_PIT_TIERS.map((tier) => (
              <div
                key={tier.name}
                className="bg-charcoal-light border border-gold/20 p-6 flex flex-col"
              >
                <p className="text-gold text-xs uppercase tracking-[0.2em] mb-2">
                  {tier.duration}
                </p>
                <h3 className="font-serif text-cream text-2xl uppercase tracking-[0.1em] mb-4">
                  {tier.name}
                </h3>
                <p className="font-serif text-gold text-3xl mb-1">
                  {tier.price}
                </p>
                <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                  {tier.per} + HST
                </p>
                <p className="text-cream/75 text-sm leading-relaxed flex-grow">
                  {tier.body}
                </p>
              </div>
            ))}
          </div>

          {/* Burn ban notice */}
          <div className="max-w-3xl mx-auto mt-10 bg-charcoal-light border border-gold/30 p-6">
            <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-3">
              Important &mdash; City of Ottawa burn ban policy
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              Fire pit bookings are subject to City of Ottawa burn ban policy.
              If a burn ban is in effect on your event date, your booking will
              be cancelled with a full refund or rescheduled at no charge.
              Please check{" "}
              <a
                href="https://ottawa.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                ottawa.ca
              </a>{" "}
              for current burn ban status before your event. Fire pit bookings
              are reviewed manually before final confirmation &mdash; expect a
              follow-up confirmation email.
            </p>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em]">
              Booking Add-Ons
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-5" />
            <p className="text-cream/75 text-base mt-6 max-w-2xl mx-auto">
              Optional extras you can add to any studio rental &mdash; fire
              pit access for outdoor ceremony, or a dedicated setup day for
              multi-day events. Just mention them in your inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-charcoal border border-gold/20 p-8">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-3">
                Fire Pit &mdash; BYO Wood
              </h3>
              <p className="font-serif text-cream text-3xl mb-1">+ $75</p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                CAD add-on + HST
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">
                Bring your own wood, handle setup and cleanup yourself. We
                prepare the pit safely beforehand.
              </p>
            </div>
            <div className="bg-charcoal border border-gold/20 p-8">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-3">
                Fire Pit &mdash; Full Service
              </h3>
              <p className="font-serif text-cream text-3xl mb-1">+ $150</p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                CAD add-on + HST
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">
                We supply the wood, set up and light the fire, and handle all
                cleanup. Just show up.
              </p>
            </div>
            <div className="bg-charcoal border border-gold/20 p-8">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-3">
                Setup Day
              </h3>
              <p className="font-serif text-cream text-3xl mb-1">+ $200</p>
              <p className="text-cream/60 text-xs uppercase tracking-wider mb-5">
                CAD add-on + HST
              </p>
              <p className="text-cream/75 text-sm leading-relaxed">
                Need access the day before to set up altars, instruments, or
                staging for a multi-day retreat? Add a full setup day to your
                booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED + BRING */}
      <section className="max-w-6xl mx-auto px-6 py-20">
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
              Wi-Fi is available for all hosts.
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

      {/* INSURANCE */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em] mb-4 text-center">
            Liability Insurance
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-10" />

          <div className="space-y-6 text-cream/85 text-base leading-[1.85] font-light">
            <p>
              All rentals require event or professional liability insurance
              with{" "}
              <span className="text-gold italic">Dark Horse Healing Lodge</span>{" "}
              listed as additional insured. This protects both you and the
              lodge in the event of an incident during your event.
            </p>
            <div className="bg-charcoal border border-gold/30 p-6 my-8">
              <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-2">
                $50 Insurance Discount
              </p>
              <p className="text-cream/85 text-base leading-relaxed">
                Have current liability coverage? Mention it when you email us
                and we&rsquo;ll take $50 off your booking. When we confirm
                your date, we&rsquo;ll let you know who to add as additional
                insured on your existing policy.
              </p>
            </div>
            <p>
              Don&rsquo;t have insurance yet? Single-event policies typically
              run $25&ndash;$50 from providers like Athletes Insurance,
              Apollo, or your existing professional liability carrier (if
              you&rsquo;re a yoga teacher, Reiki practitioner, or other
              certified facilitator). Reach out and we can point you to
              affordable options.
            </p>
          </div>
        </div>
      </section>

      {/* CANCELLATION POLICY */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em] mb-4 text-center">
          Cancellation Policy
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <div className="bg-charcoal-light border border-gold/20 p-6 text-center">
            <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-3">
              7+ days before
            </p>
            <p className="font-serif text-cream text-2xl uppercase mb-2">
              Full refund
            </p>
            <p className="text-cream/70 text-sm">
              Cancel a week or more in advance and receive a 100% refund.
            </p>
          </div>
          <div className="bg-charcoal-light border border-gold/20 p-6 text-center">
            <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-3">
              3 to 7 days before
            </p>
            <p className="font-serif text-cream text-2xl uppercase mb-2">
              50% refund
            </p>
            <p className="text-cream/70 text-sm">
              Half of your booking total is refunded.
            </p>
          </div>
          <div className="bg-charcoal-light border border-gold/20 p-6 text-center">
            <p className="font-serif text-gold text-sm uppercase tracking-[0.15em] mb-3">
              Less than 72 hours
            </p>
            <p className="font-serif text-cream text-2xl uppercase mb-2">
              No refund
            </p>
            <p className="text-cream/70 text-sm">
              Full booking and security deposit are forfeited.
            </p>
          </div>
        </div>

        <div className="bg-charcoal-light border border-gold/20 p-6 text-cream/80 text-sm leading-relaxed">
          <p className="mb-3">
            <span className="font-serif text-gold uppercase tracking-[0.15em]">
              Security deposit:
            </span>{" "}
            A refundable security deposit of $250&ndash;$500 (depending on
            event size and risk profile) is held separately at booking and
            released within 7 business days post-event, minus any damages or
            extra cleaning charges.
          </p>
          <p>
            <span className="font-serif text-gold uppercase tracking-[0.15em]">
              Cleaning fee:
            </span>{" "}
            A $50 cleaning fee may be charged post-event only if the space
            requires more than standard turnover cleaning. Most renters never
            see this fee.
          </p>
        </div>
      </section>

      {/* HOUSE RULES & BY-LAW COMPLIANCE */}
      <section className="bg-charcoal-light border-y border-gold/15 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-cream text-3xl uppercase tracking-[0.15em] mb-4 text-center">
            House Rules &amp; By-law Compliance
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-8" />

          <p className="text-cream/85 text-base leading-relaxed text-center max-w-3xl mx-auto mb-12">
            Dark Horse Healing Lodge is a rural commercial venue (Ottawa
            Zoning RC9) on a property surrounded by neighbours and natural
            land. Every booking includes acknowledgement of the rules below
            &mdash; they protect you, your guests, our neighbours, and the
            property.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Sound */}
            <div className="bg-charcoal border border-gold/20 p-7">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Sound &amp; Quiet Hours
              </h3>
              <ul className="space-y-3 text-cream/80 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>Indoor amplified sound until 11 PM</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Outdoor amplified sound (drumming, kirtan, sound
                    healing, fire ceremony) ends by 10 PM
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>All events fully wrapped by midnight</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Quiet arrival and departure &mdash; sound carries in the
                    rural neighbourhood
                  </span>
                </li>
              </ul>
            </div>

            {/* Property */}
            <div className="bg-charcoal border border-gold/20 p-7">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Property Use
              </h3>
              <ul className="space-y-3 text-cream/80 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Maximum 40 attendees total (Ontario Building Code
                    occupancy limit)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    All vehicles in the lodge parking area &mdash; no
                    parking on Upper Dwyer Hill Road
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Service animals welcome; pets are not permitted
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Renter is responsible for the conduct of all guests
                  </span>
                </li>
              </ul>
            </div>

            {/* Substances */}
            <div className="bg-charcoal border border-gold/20 p-7">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Substances
              </h3>
              <ul className="space-y-3 text-cream/80 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Smoke-free, vape-free property (tobacco and cannabis,
                    all forms)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Alcohol service requires a valid AGCO Special Occasion
                    Permit, copied to the lodge before the event
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Renters and guests are responsible for compliance with
                    all provincial and federal substance regulations
                  </span>
                </li>
              </ul>
            </div>

            {/* Fire Pit */}
            <div className="bg-charcoal border border-gold/20 p-7">
              <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
                Fire Pit Use
              </h3>
              <ul className="space-y-3 text-cream/80 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Subject to City of Ottawa burn ban policy &mdash; full
                    refund or reschedule if active
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Adult supervision required at all times when the fire
                    is lit
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Fire must be fully extinguished before guests leave
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold mt-1 flex-shrink-0">&bull;</span>
                  <span>
                    Fire pit bookings are reviewed and approved manually
                    before final confirmation
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Compliance statement */}
          <div className="bg-charcoal border border-gold/30 p-7 text-cream/80 text-sm leading-relaxed">
            <p className="mb-3">
              <span className="font-serif text-gold uppercase tracking-[0.15em]">
                Renter responsibility:
              </span>{" "}
              Renters are responsible for their own compliance and the
              compliance of their guests with applicable City of Ottawa
              by-laws (including but not limited to the Noise By-law
              2017-180, Smoking and Vaping By-law 2018-263, and Open Air
              Fire By-law) as well as Ontario provincial regulations (AGCO
              permitting, Public Health, accessibility, etc.).
            </p>
            <p>
              <span className="font-serif text-gold uppercase tracking-[0.15em]">
                Termination:
              </span>{" "}
              Dark Horse Healing Lodge reserves the right to terminate any
              booking that violates these rules, with no refund of the
              rental fee or security deposit.
            </p>
          </div>
        </div>
      </section>

      {/* BOOK BY EMAIL */}
      <section
        id="book"
        className="bg-charcoal-light border-y border-gold/15 py-20 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-gold text-3xl sm:text-5xl mb-3">
              Ready when you are.
            </p>
            <h2 className="font-serif text-cream text-3xl sm:text-4xl uppercase tracking-[0.15em]">
              Book by Email
            </h2>
            <div className="w-24 h-px bg-gold mx-auto mt-6" />
            <p className="text-cream/80 text-base leading-relaxed max-w-2xl mx-auto mt-6">
              Send us an email with your preferred date and a few details
              about your event. We&rsquo;ll reply within one business day to
              confirm availability and arrange payment. No portals, no
              accounts &mdash; just a conversation.
            </p>
          </div>

          <div className="bg-charcoal border border-gold/30 p-8 sm:p-12 text-center">
            <p className="font-serif text-gold text-sm uppercase tracking-[0.2em] mb-6">
              In your email, include
            </p>
            <ul className="text-cream/85 text-base leading-relaxed max-w-md mx-auto space-y-3 text-left mb-10">
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>Your preferred date and start/end times</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>Which space you&rsquo;d like &mdash; studio, fire pit, or both</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>The kind of event and expected number of guests</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold flex-shrink-0">&bull;</span>
                <span>
                  Any add-ons or discounts that apply &mdash; fire pit
                  service, setup day, insurance, or community rates
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <LinkButton href={BOOKING_MAILTO} variant="primary">
                Email Us to Book
              </LinkButton>
              <LinkButton href="/contact" variant="secondary">
                Use the Contact Form
              </LinkButton>
            </div>

            <p className="text-cream/70 text-sm mt-8">
              Prefer to talk it through? Call or text{" "}
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="text-gold hover:underline whitespace-nowrap"
              >
                {CONTACT_PHONE}
              </a>{" "}
              or write to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gold hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-script text-gold text-3xl sm:text-5xl mb-4">
          Questions?
        </p>
        <h2 className="font-serif text-cream text-2xl sm:text-3xl uppercase tracking-[0.15em] mb-6">
          Talk to us first.
        </h2>
        <p className="text-cream/80 text-base md:text-lg leading-relaxed mb-10">
          Custom multi-day events, recurring weekly bookings, large retreats,
          or anything that doesn&rsquo;t fit the standard tiers above &mdash;
          reach out and we&rsquo;ll work it out together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <LinkButton href="/contact" variant="primary">
            Contact Us
          </LinkButton>
          <LinkButton href="/about" variant="secondary">
            About the Space
          </LinkButton>
        </div>
      </section>
    </>
  );
}

function WhyCard({
  title,
  body,
  accent = false,
}: {
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`bg-charcoal p-7 flex flex-col h-full transition-colors duration-300 ${
        accent
          ? "border border-gold hover:border-gold-light"
          : "border border-gold/20 hover:border-gold"
      }`}
    >
      <h3 className="font-serif text-gold text-xl uppercase tracking-[0.15em] mb-4 pb-3 border-b border-gold/30">
        {title}
      </h3>
      <p className="text-cream/80 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
